import Header from "@/app/_components/ui/header";
import { Input } from "@/app/_components/ui/input";
import { Button } from "@/app/_components/ui/button";
import { SearchIcon } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="px-5">
      <Header />
      <div className="flex items-center gap-2 mt-3">
        <Input placeholder="Faça sua busca" />
        <Button size="icon"><SearchIcon /></Button>
      </div>

      <Image src="/banner01.png" alt="bannerAgendarHorario"
        width={1000} height={1000}
        className="rounded-xl " />
    </div>
  );
}
