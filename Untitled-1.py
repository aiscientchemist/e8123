
import asyncio
import sounddevice as sd
import numpy as np
from openai import AsyncOpenAI
from openai import OpenAI
from scipy.io.wavfile import write
import sounddevice as sd
from moviepy import VideoFileClip
import openaifrom dotenv import load_dotenv
import os
load_dotenv()


API_KEY = "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"

while True:
    # samplerate = 44100
    # duration = 6
    # c = 'out_audio.wav'
    # audio = sd.rec(int(samplerate * duration),
    # samplerate=samplerate, channels=2)
    # sd.wait()
    # write(c, samplerate, audio)
    c = r"C:\Users\Hubi\Desktop\przyjaciele_rozwoju\x.mp4"
    client = OpenAI(api_key=API_KEY)
    audio_file = open(c, "rb")

    transcription = client.audio.transcriptions.create(
        model="gpt-4o-transcribe",
        file=audio_file
    )
    print(transcription.text)

    n = transcription.text
    print(n)
    # do tego momentu diząła

    client = OpenAI(api_key=API_KEY)
    response = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "The AI agent is designed specifically for children. It interacts in a friendly and engaging way, always using age-appropriate language. Its main functions are to answer questions, tell stories, create content like fairy tales or poems, ask riddles, and support learning in a fun and safe way.The agent helps children learn basic arithmetic and the English language through games, exercises, and interactive conversations. It uses a limited and carefully controlled database to ensure safety and to prevent access to harmful or inappropriate information. The AI is not connected to the internet, which makes it even safer for younger users .It encourages curiosity, creativity, and learning while always staying polite, positive, and supportive. The AI also gives children a chance to practice language skills and solve simple logic puzzles, keeping them entertained and educated at the same time.You can't talk about politics. You should be friendly and kind, and focus on teaching the child. you have a voice. and do not swear"},
            {"role": "user", "content": f"{n}\n\nNapisz po polsku odpowiedź na pytanie lub wykonaj żądanie."}
        ]
    )
    x = response.choices[0].message.content
    with open("odpowiedz_gpt.txt", "w", encoding="utf-8") as f:
        f.write(x)
    print(f"{x} -- to jest x")

    openai = OpenAI(
        api_key=API_KEY)

    response = openai.audio.speech.create(
        model="tts-1",
        voice="nova",
        input=x
    )

    # Save the audio to a file
    speech_file_path = "speech.mp3"
    response.stream_to_file(speech_file_path)

    # Play the audio using sounddevice
    try:
        from pydub import AudioSegment
        from pydub.playback import play

        # Load and play the audio
        audio = AudioSegment.from_mp3(speech_file_path)
        play(audio)
    except ImportError:
        print("Please install pydub: pip install pydub")
        print("And make sure you have ffmpeg installed")
