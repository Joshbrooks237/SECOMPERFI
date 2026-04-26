import { FlashcardMode } from "@/components/flashcards/FlashcardMode";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Flashcard Mode | SECOMPERFI",
  description: "Port and service flashcards — port-to-service and service-to-port drill with timer.",
};

export default function FlashcardsPage() {
  return <FlashcardMode />;
}
