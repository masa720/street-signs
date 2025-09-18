import Link from "next/link";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";

const FloatingButton = () => {
  return (
    <Link href="/posts" className="fixed bottom-6 right-6 z-50">
      <Button
        size="icon"
        className="w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
      >
        <Plus className="h-6 w-6" />
      </Button>
    </Link>
  );
};

export default FloatingButton;
