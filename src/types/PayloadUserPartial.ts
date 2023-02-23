import type { User } from "@prisma/client";

type UserUnion =
  | "id"
  | "name"
  | "email"
  | "addressLineOne"
  | "city"
  | "postcode"
  | "status"
  | "country";

export type PayloadUserPartial = Partial<User> & Pick<User, UserUnion>;
