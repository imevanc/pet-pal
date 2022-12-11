const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const main = async (): Promise<any> => {
  const users = await prisma.user.createMany({
    data: [
      {
        name: "John Smith",
      },
    ],
  });
};

main()
  .catch((e) => console.log(e))
  .finally(async (): Promise<any> => await prisma.$disconnect);
