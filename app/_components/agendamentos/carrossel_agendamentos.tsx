"use client";

import { Card, CardContent } from "@/app/_components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/_components/ui/carousel";
import Image from "next/image";

import { Badge } from "../ui/badge";

type BookingItem = {
  id: string;
  date: Date;
  time: string;
  serviceName: string;
  barberShopName: string;
  barberShopImage: string;
};

export function CarrosselAgendamentos({ bookings }: { bookings: BookingItem[] }) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="mx-auto w-full sm:max-w-xs md:max-w-sm"
    >
      <h2 id="agendamentos-title" className="text-xl font-semibold">
        Agendamentos
      </h2>
      <CarouselContent>
        {bookings.map((booking) => (
          <CarouselItem key={booking.id} className="basis-full">
            <div>
              <Card key={booking.id} className="mt-4 grid grid-cols-2 gap-0 p-0">
                <CardContent className="flex min-w-0 flex-col gap-2 p-4 sm:p-6">
                  <Badge className="rounded-full bg-violet-950 px-3 py-1 text-sm font-medium text-violet-400 hover:bg-violet-950">
                    Status
                  </Badge>

                  <div>{booking.barberShopName}</div>
                  <div>{booking.serviceName}</div>
                  <div className="flex flex-row items-center gap-2">
                    <div>
                      <Image
                        src={booking.barberShopImage}
                        alt={booking.barberShopName}
                        width={32}
                        height={32}
                        className="size-8 rounded-full object-cover"
                      />
                    </div>
                    <div>{booking.barberShopName}</div>
                  </div>
                </CardContent>

                <CardContent className="flex min-w-0 flex-col gap-2 border-l p-4 sm:p-6">
                  <div>
                    {booking.date.toLocaleDateString("pt-BR", {
                      day: "2-digit",
                    })}
                  </div>

                  <div className="capitalize">
                    {booking.date.toLocaleDateString("pt-BR", {
                      month: "long",
                    })}
                  </div>

                  <div>{booking.time}</div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    
    </Carousel>
  );
}

export default CarrosselAgendamentos;
