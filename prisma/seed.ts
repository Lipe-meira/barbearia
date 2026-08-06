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
    imageURL: "https://utfs.io/f/0ddfbd26-a424-43a0-aaf3-c3f1dc6be6d1-1kgxo7.png",
  },
  {
    name: "Barba",
    price: 40,
    imageURL: "https://utfs.io/f/e6bdffb6-24a9-455b-aba3-903c2c2b5bde-1jo6tu.png",
  },
  {
    name: "Pezinho",
    price: 35,
    imageURL: "https://utfs.io/f/8a457cda-f768-411d-a737-cdb23ca6b9b5-b3pegf.png",
  },
  {
    name: "Sobrancelha",
    price: 20,
    imageURL: "https://utfs.io/f/2118f76e-89e4-43e6-87c9-8f157500c333-b0ps0b.png",
  },
  {
    name: "Massagem",
    price: 50,
    imageURL: "https://utfs.io/f/c4919193-a675-4c47-9f21-ebd86d1c8e6a-4oen2a.png",
  },
  {
    name: "Hidratação",
    price: 25,
    imageURL: "https://utfs.io/f/8a457cda-f768-411d-a737-cdb23ca6b9b5-b3pegf.png",
  },
];

const barberShops = [
  {
    name: "Barbearia Vintage",
    address: "Rua da Barbearia, 123",
    imageURL: "https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png",
  },
  {
    name: "Corte & Estilo",
    address: "Avenida dos Cortes, 456",
    imageURL: "https://utfs.io/f/45331760-899c-4b4b-910e-e00babb6ed81-16q.png",
  },
  {
    name: "Barba & Navalha",
    address: "Praça da Barba, 789",
    imageURL: "https://utfs.io/f/5832df58-cfd7-4b3f-b102-42b7e150ced2-16r.png",
  },
  {
    name: "The Dapper Den",
    address: "Travessa da Navalha, 101",
    imageURL: "https://utfs.io/f/7e309eaa-d722-465b-b8b6-76217404a3d3-16s.png",
  },
  {
    name: "Cabelo & Cia.",
    address: "Alameda dos Estilos, 202",
    imageURL: "https://utfs.io/f/178da6b6-6f9a-424a-be9d-a2feb476eb36-16t.png",
  },
  {
    name: "Machado & Tesoura",
    address: "Estrada do Machado, 303",
    imageURL: "https://utfs.io/f/2f9278ba-3975-4026-af46-64af78864494-16u.png",
  },
  {
    name: "Barbearia Elegance",
    address: "Avenida Elegante, 404",
    imageURL: "https://utfs.io/f/988646ea-dcb6-4f47-8a03-8d4586b7bc21-16v.png",
  },
  {
    name: "Aparência Impecável",
    address: "Praça da Aparência, 505",
    imageURL: "https://utfs.io/f/60f24f5c-9ed3-40ba-8c92-0cd1dcd043f9-16w.png",
  },
  {
    name: "Estilo Urbano",
    address: "Rua Urbana, 606",
    imageURL: "https://utfs.io/f/f64f1bd4-59ce-4ee3-972d-2399937eeafc-16x.png",
  },
  {
    name: "Estilo Clássico",
    address: "Avenida Clássica, 707",
    imageURL: "https://utfs.io/f/e995db6d-df96-4658-99f5-11132fd931e1-17j.png",
  },
];

const users = [
  { name: "Felipe Silva", email: "felipe@barber.dev" },
  { name: "João Santos", email: "joao@barber.dev" },
  { name: "Lucas Oliveira", email: "lucas@barber.dev" },
  { name: "Pedro Almeida", email: "pedro@barber.dev" },
];

const bookingSeeds = [
  {
    id: "00000000-0000-4000-8000-000000000001",
    userIndex: 0,
    serviceIndex: 0,
    daysFromToday: -2,
    time: "09:00",
  },
  {
    id: "00000000-0000-4000-8000-000000000002",
    userIndex: 1,
    serviceIndex: 1,
    daysFromToday: 0,
    time: "10:30",
  },
  {
    id: "00000000-0000-4000-8000-000000000003",
    userIndex: 2,
    serviceIndex: 2,
    daysFromToday: 1,
    time: "14:00",
  },
  {
    id: "00000000-0000-4000-8000-000000000004",
    userIndex: 3,
    serviceIndex: 3,
    daysFromToday: 3,
    time: "16:30",
  },
  {
    id: "00000000-0000-4000-8000-000000000005",
    userIndex: 0,
    serviceIndex: 4,
    daysFromToday: 7,
    time: "11:00",
  },
];

const description = "Barbearia especializada em cortes modernos, barba e cuidados masculinos.";

function dateFromToday(days: number) {
  const date = new Date();
  date.setHours(12, 0, 0, 0);
  date.setDate(date.getDate() + days);
  return date;
}

async function seedBarberShops() {
  const firstBarberShopServices = [];

  for (const [index, barberShopData] of barberShops.entries()) {
    const email = `contato${index + 1}@barber.dev`;
    const existingBarberShop = await prisma.barberShop.findFirst({
      where: { email },
      select: { id: true },
    });

    const barberShop = existingBarberShop
      ? await prisma.barberShop.update({
          where: { id: existingBarberShop.id },
          data: { ...barberShopData, email, description },
        })
      : await prisma.barberShop.create({
          data: { ...barberShopData, email, description },
        });

    const phoneNumbers = [
      `(11) 99999-${String(1000 + index).padStart(4, "0")}`,
      `(11) 3333-${String(1000 + index).padStart(4, "0")}`,
    ];

    for (const number of phoneNumbers) {
      const existingPhone = await prisma.phone.findFirst({
        where: { barberShopId: barberShop.id, number },
        select: { id: true },
      });

      if (!existingPhone) {
        await prisma.phone.create({
          data: { barberShopId: barberShop.id, number },
        });
      }
    }

    for (const serviceData of services) {
      const existingService = await prisma.barberShopService.findFirst({
        where: {
          barberShopId: barberShop.id,
          name: serviceData.name,
        },
        select: { id: true },
      });

      const service = existingService
        ? await prisma.barberShopService.update({
            where: { id: existingService.id },
            data: serviceData,
          })
        : await prisma.barberShopService.create({
            data: {
              ...serviceData,
              barberShopId: barberShop.id,
            },
          });

      if (index === 0) {
        firstBarberShopServices.push(service);
      }
    }
  }

  return firstBarberShopServices;
}

async function seedUsers() {
  return Promise.all(
    users.map((user) =>
      prisma.user.upsert({
        where: { email: user.email },
        update: { name: user.name },
        create: user,
      }),
    ),
  );
}

async function main() {
  const seededServices = await seedBarberShops();
  const seededUsers = await seedUsers();

  for (const booking of bookingSeeds) {
    const data = {
      userId: seededUsers[booking.userIndex].id,
      serviceId: seededServices[booking.serviceIndex].id,
      date: dateFromToday(booking.daysFromToday),
      time: booking.time,
    };

    await prisma.booking.upsert({
      where: { id: booking.id },
      update: data,
      create: { id: booking.id, ...data },
    });
  }

  console.log(
    `Seed concluído: ${barberShops.length} barbearias, ${seededServices.length * barberShops.length} serviços, ${seededUsers.length} usuários e ${bookingSeeds.length} agendamentos.`,
  );
}

main()
  .catch((error) => {
    console.error("Erro ao executar o seed:", error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
