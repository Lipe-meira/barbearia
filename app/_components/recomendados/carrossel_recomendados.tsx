"use client";

import Image from "next/image";
import { ArrowRightIcon, MapPinIcon, SparklesIcon } from "lucide-react";

import { Button } from "@/app/_components/ui/button";
import { Card, CardContent, CardFooter } from "@/app/_components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/_components/ui/carousel";

type BarberItem = {
  id: string;
  name: string;
  localizacao: string;
  barberShopImage: string;
};

export function CarrosselRecomendados({ barbers }: { barbers: BarberItem[] }) {
  return (
    <section aria-labelledby="recomendados-title" className="mt-8">
      <div className="mx-auto mb-4 flex w-full max-w-5xl items-end justify-between px-1">
        <div>
          <p className="text-muted-foreground text-xs font-semibold tracking-[0.18em] uppercase">
            Encontre seu estilo
          </p>
          <h2 id="recomendados-title" className="mt-1 text-2xl font-semibold tracking-tight">
            Recomendados para você
          </h2>
        </div>

        <span className="text-muted-foreground hidden text-sm sm:block">
          {barbers.length} {barbers.length === 1 ? "barbearia" : "barbearias"}
        </span>
      </div>

      <Carousel
        opts={{
          align: "start",
          dragFree: true,
        }}
        className="mx-auto w-full max-w-5xl"
      >
        <CarouselContent className="-ml-3">
          {barbers.map((barber) => (
            <CarouselItem key={barber.id} className="basis-[88%] pl-3 sm:basis-1/2 lg:basis-1/3">
              <Card className="group h-full gap-0 overflow-hidden rounded-3xl p-0 shadow-sm transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="bg-muted relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={barber.barberShopImage}
                    alt={`Fachada da ${barber.name}`}
                    fill
                    sizes="(max-width: 639px) 88vw, (max-width: 1023px) 50vw, 320px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-x-0 bottom-0 h-2/3 bg-linear-to-t from-black/65 to-transparent" />
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full bg-white/90 px-2.5 py-1 text-xs font-medium text-zinc-900 shadow-sm backdrop-blur-sm">
                    <SparklesIcon className="size-3.5 text-violet-600" aria-hidden="true" />
                    Recomendado
                  </div>
                </div>

                <CardContent className="space-y-2 p-4">
                  <h3 className="truncate text-base font-semibold tracking-tight">{barber.name}</h3>
                  <div className="text-muted-foreground flex items-start gap-1.5 text-sm">
                    <MapPinIcon className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                    <span className="line-clamp-2">{barber.localizacao}</span>
                  </div>
                </CardContent>

                <CardFooter className="mt-auto px-4 pb-4">
                  <Button className="w-full rounded-2xl">
                    Reservar horário
                    <ArrowRightIcon data-icon="inline-end" />
                  </Button>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="bg-background/90 left-2 shadow-md backdrop-blur-sm" />
        <CarouselNext className="bg-background/90 right-2 shadow-md backdrop-blur-sm" />
      </Carousel>
    </section>
  );
}

export default CarrosselRecomendados;
