import { User, Pet } from "@prisma/client";

export type UserType = User & Pet;
