export const getRole = (role?: string): string => {
  let newRole: string = "";
  switch (role) {
    case "DOG_OWNER":
      newRole = "Dog Owner";
      break;
    case "DOG_TRAINER":
      newRole = "Dog Trainer";
      break;
    case "DOG_SITTER":
      newRole = "Dog Sitter";
      break;
    case "DOG_BREEDER":
      newRole = "Dog Breeder";
      break;
    case "FOOD_SUPPLIER":
      newRole = "Food Supplier";
      break;
  }
  return newRole;
};
