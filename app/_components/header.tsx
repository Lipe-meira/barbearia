import Image from "next/image";
import { MenuIcon } from "lucide-react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

import { Button } from "@/app/_components/ui/button";
import { Card, CardContent } from "@/app/_components/ui/card";

const Header = () => {
  return (
    <Card className="w-full rounded-none border-x-0 border-t-0 py-0 shadow-sm">
      <CardContent className="grid h-16 grid-cols-[1fr_auto_1fr] items-center px-0 sm:h-20">
        <div className="flex justify-self-start pl-2 sm:pl-4">
          <Button
            size="icon"
            variant="ghost"
            aria-label="Instagram"
            className="size-10 h-full rounded-none"
          >
            <FaInstagram />
          </Button>

          <Button
            size="icon"
            variant="ghost"
            aria-label="Whatsapp"
            className="size-10 h-full rounded-none"
          >
            <FaWhatsapp />
          </Button>
        </div>
        <div>
          <button>
            <Image
              src="/barberLogo.png"
              alt="Barbearia Clássica"
              width={805}
              height={611}
              className="h-12 w-auto object-contain sm:h-16"
              priority
            />
          </button>
        </div>

        <Button
          size="icon"
          variant="ghost"
          aria-label="Abrir menu"
          className="h-full w-16 justify-self-end rounded-none sm:w-20"
        >
          <MenuIcon />
        </Button>
      </CardContent>
    </Card>
  );
};

export default Header;
