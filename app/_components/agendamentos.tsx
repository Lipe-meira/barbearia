import { Card, CardContent } from "@/app/_components/ui/card";
import { Badge } from "@/app/_components/ui/badge";
import { prisma } from "@/app/_lib/prisma";
import Image from "next/image";
import { connection } from "next/server";

export async function Agendamentos() {
  await connection();
  const bookings = await prisma.booking.findMany({
    include: {
      service: {
        include: {
          barberShop: true,
        },
      },
    },
  });

  return (
    <div>
      <h2 id="agendamentos-title" className="text-xl font-semibold">
        Agendamentos
      </h2>
      {bookings.map((booking) => (
        <Card key={booking.id} className="mt-4 grid grid-cols-2 gap-0 p-0">
          <CardContent className="flex min-w-0 flex-col gap-2 p-4 sm:p-6">
            <Badge className="rounded-full bg-violet-950 px-3 py-1 text-sm font-medium text-violet-400 hover:bg-violet-950">
              Status
            </Badge>

            <div>{booking.service.barberShop.name}</div>
            <div>{booking.service.name}</div>
            <div className="flex flex-row items-center gap-2">
              <div>
                <Image
                  src={booking.service.barberShop.imageURL}
                  alt={booking.service.barberShop.name}
                  width={32}
                  height={32}
                  className="size-8 rounded-full object-cover"
                />
              </div>
              <div>{booking.service.barberShop.name}</div>
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
      ))}
    </div>
  );
}

export default Agendamentos;
