import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";

export default function AboutMeSection() {
  const [showMore, setShowMore] = useState(false);

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-5xl mx-auto mt-20 px-4"
    >
      <Card className="flex flex-col md:flex-row items-center p-6 gap-6 shadow-xl">
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">O mnie</h2>
          <p className="text-muted-foreground text-lg">
            Cześć! Nazywam się Hubi i pasjonuję się tworzeniem stron internetowych.
            🌐 Poza tym lubię muzykę i podróże.
          </p>
          {showMore && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-3 text-muted-foreground text-base"
            >
              Uczę się nowoczesnych technologii, takich jak React i Tailwind.
              Uwielbiam też projektowanie UI/UX i animacje frontendowe.
            </motion.p>
          )}
          <Button
            variant="secondary"
            className="mt-4"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "Ukryj" : "Czytaj więcej"}
          </Button>
        </div>

        <motion.img
          src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400"
          alt="Avatar"
          className="w-64 h-64 rounded-2xl object-cover shadow-md"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        />
      </Card>
    </motion.section>
  );
}
