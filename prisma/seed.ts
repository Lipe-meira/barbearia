import "dotenv/config";

import { PrismaPg } from "@prisma/adapter-pg";

import { PrismaClient } from "../app/generated/prisma/client";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL não foi definida no arquivo .env");
}

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

const services = [
  {
    name: "Corte de Cabelo",
    price: 60,
    imageURL:
      "https://utfs.io/f/0ddfbd26-a424-43a0-aaf3-c3f1dc6be6d1-1kgxo7.png",
  },
  {
    name: "Barba",
    price: 40,
    imageURL:
      "https://utfs.io/f/e6bdffb6-24a9-455b-aba3-903c2c2b5bde-1jo6tu.png",
  },
  {
    name: "Pezinho",
    price: 35,
    imageURL:
      "https://utfs.io/f/8a457cda-f768-411d-a737-cdb23ca6b9b5-b3pegf.png",
  },
  {
    name: "Sobrancelha",
    price: 20,
    imageURL:
      "https://utfs.io/f/2118f76e-89e4-43e6-87c9-8f157500c333-b0ps0b.png",
  },
  {
    name: "Massagem",
    price: 50,
    imageURL:
      "https://utfs.io/f/c4919193-a675-4c47-9f21-ebd86d1c8e6a-4oen2a.png",
  },
  {
    name: "Hidratação",
    price: 25,
    imageURL:
      "https://utfs.io/f/8a457cda-f768-411d-a737-cdb23ca6b9b5-b3pegf.png",
  },
];

const barberShops = [
  {
    name: "Barbearia Vintage",
    address: "Rua da Barbearia, 123",
    imageURL:
      "https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png",
  },
  {
    name: "Corte & Estilo",
    address: "Avenida dos Cortes, 456",
    imageURL:
      "https://utfs.io/f/45331760-899c-4b4b-910e-e00babb6ed81-16q.png",
  },
  {
    name: "Barba & Navalha",
    address: "Praça da Barba, 789",
    imageURL:
      "https://utfs.io/f/5832df58-cfd7-4b3f-b102-42b7e150ced2-16r.png",
  },
  {
    name: "The Dapper Den",
    address: "Travessa da Navalha, 101",
    imageURL:
      "https://utfs.io/f/7e309eaa-d722-465b-b8b6-76217404a3d3-16s.png",
  },
  {
    name: "Cabelo & Cia.",
    address: "Alameda dos Estilos, 202",
    imageURL:
      "https://utfs.io/f/178da6b6-6f9a-424a-be9d-a2feb476eb36-16t.png",
  },
  {
    name: "Machado & Tesoura",
    address: "Estrada do Machado, 303",
    imageURL:
      "https://utfs.io/f/2f9278ba-3975-4026-af46-64af78864494-16u.png",
  },
  {
    name: "Barbearia Elegance",
    address: "Avenida Elegante, 404",
    imageURL:
      "https://utfs.io/f/988646ea-dcb6-4f47-8a03-8d4586b7bc21-16v.png",
  },
  {
    name: "Aparência Impecável",
    address: "Praça da Aparência, 505",
    imageURL:
      "https://utfs.io/f/60f24f5c-9ed3-40ba-8c92-0cd1dcd043f9-16w.png",
  },
  {
    name: "Estilo Urbano",
    address: "Rua Urbana, 606",
    imageURL:
      "https://utfs.io/f/f64f1bd4-59ce-4ee3-972d-2399937eeafc-16x.png",
  },
  {
    name: "Estilo Clássico",
    address: "Avenida Clássica, 707",
    imageURL:
      "https://utfs.io/f/e995db6d-df96-4658-99f5-11132fd931e1-17j.png",
  },
];

const description =
  "Barbearia especializada em cortes modernos, barba e cuidados masculinos.";

async function main() {
  let created = 0;
  let skipped = 0;

  for (const [index, barberShop] of barberShops.entries()) {
    const email = `contato${index + 1}@barber.dev`;
    const existingBarberShop = await prisma.barberShop.findFirst({
      where: { email },
      select: { id: true },
    });

    if (existingBarberShop) {
      skipped++;
      continue;
    }

    await prisma.barberShop.create({
      data: {
        ...barberShop,
        email,
        description,
        phones: {
          create: [
            { number: `(11) 99999-${String(1000 + index).padStart(4, "0")}` },
            { number: `(11) 3333-${String(1000 + index).padStart(4, "0")}` },
          ],
        },
        services: {
          create: services,
        },
      },
    });

    created++;
  }

  console.log(`Seed concluído: ${created} barbearias criadas, ${skipped} ignoradas.`);
}

main()
  .catch((error) => {
    console.error("Erro ao executar o seed:", error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
