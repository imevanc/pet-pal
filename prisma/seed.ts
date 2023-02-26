export const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const main = async (): Promise<any> => {
  await prisma.pet.createMany({
    data: [
      {
        name: "Bruno",
        breed: "Labrador Retriever",
        sex: "Male",
        age: "1 year 9 months old",
        weight: "10kg",
        image: "",
        userId: "cleltq205000047vcqd26r146",
      },
      {
        name: "Charlie",
        breed: "Labrador Retriever",
        sex: "Male",
        age: "4 year 9 months old",
        weight: "20kg",
        image: "",
        userId: "cleltq205000047vcqd26r146",
      },
      {
        name: "Donald",
        breed: "Labrador Retriever",
        sex: "Male",
        age: "3 year 9 months old",
        weight: "30kg",
        image: "",
        userId: "cleltq205000047vcqd26r146",
      },
    ],
  });
};

main()
  .catch((e) => console.log(e))
  .finally(async (): Promise<any> => await prisma.$disconnect);
