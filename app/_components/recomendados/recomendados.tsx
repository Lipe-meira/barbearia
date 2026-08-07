import { prisma } from "@/app/_lib/prisma";
import { connection } from "next/server";
import { CarrosselRecomendados } from "@/app/_components/recomendados/carrossel_recomendados";

export async function Recomendados() {
  await connection();
  const barberShops = await prisma.barberShop.findMany({
  });

  const items = barberShops.map((barberShop) => ({
    id: barberShop.id,
    name: barberShop.name,
    localizacao: barberShop.address,
    barberShopImage: barberShop.imageURL,
  }));

  return <CarrosselRecomendados barbers={items} />;
}

export default Recomendados;
