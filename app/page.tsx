import Header from "@/app/_components/header";
import { Input } from "@/app/_components/ui/input";
import { Button } from "@/app/_components/ui/button";
import { SearchIcon } from "lucide-react";
import Image from "next/image";
import Agendamentos from "@/app/_components/agendamentos";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="px-2">
        <Agendamentos />
      </div>
      <div className="mt-4 flex items-center gap-2">
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
            sizes="(max-width: 640px) calc(100vw - 2rem), (max-width: 768px) calc(100vw - 3rem), 768px"
            className="scale-[1.35] object-cover object-center"
            priority
          />
        </button>
      </div>
    </div>
  );
}
