import Image from "next/image";
import { MenuIcon } from "lucide-react";

import { Button } from "@/app/_components/ui/button";
import { Card, CardContent } from "@/app/_components/ui/card";

const Header = () => {
  return (
    <Card className="w-full rounded-none border-x-0 border-t-0 py-0 shadow-sm">
      <CardContent className="flex h-24 items-center justify-between px-5">
        <Image
          src="/barberLogo.png"
          alt="Barbearia Clássica"
          width={805}
          height={611}
          className="h-20 w-auto object-contain"
          priority
        />

        <Button size="icon" variant="ghost" aria-label="Abrir menu">
          <MenuIcon />
        </Button>
      </CardContent>
    </Card>
  );
};

export default Header;
