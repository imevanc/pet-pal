export const setPetSelectedQuery = (
  petSelected: string | string[] | undefined,
  numberOfPets: number
): string | string[] | undefined => {
  return numberOfPets !== 0 ? petSelected : "";
};
