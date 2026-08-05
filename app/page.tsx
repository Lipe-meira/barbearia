import Header from "@/app/_components/ui/header";
import { Input } from "@/app/_components/ui/input";
import { Button } from "@/app/_components/ui/button";
import { SearchIcon } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="mt-3 flex items-center gap-2 px-5">
        <Input placeholder="Faça sua busca" />
        <Button size="icon">
          <SearchIcon />
        </Button>
      </div>

      <div className="relative mx-auto mt-5 aspect-video w-full max-w-3xl overflow-hidden rounded-xl shadow-md">
        <button>
          <Image
            src="/banner01.png"
            alt="Banner para agendar um horário"
            fill
            sizes="(max-width: 768px) calc(100vw - 2.5rem), 768px"
            className="scale-[1.35] object-cover object-center"
            priority
          />
        </button>
      </div>
    </div>
  );
}
