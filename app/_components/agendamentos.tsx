import { prisma } from "@/app/_lib/prisma";
import { connection } from "next/server";
import { CarrosselAgendamentos } from "@/app/_components/carrossel_agendamentos";

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

  const items = bookings.map((booking) => ({
    id: booking.id,
    date: booking.date,
    time: booking.time,
    serviceName: booking.service.name,
    barberShopName: booking.service.barberShop.name,
    barberShopImage: booking.service.barberShop.imageURL,
  }));

  return <CarrosselAgendamentos bookings={items} />;
}

export default Agendamentos;
