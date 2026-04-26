import { FlashcardMode } from "@/components/flashcards/FlashcardMode";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Flashcard Mode | SECOMPERFI",
  description: "Matrix terminal port drill — PORT_TO_SERVICE and SERVICE_TO_PORT rapid fire.",
};

export default function FlashcardsPage() {
  return <FlashcardMode />;
}
