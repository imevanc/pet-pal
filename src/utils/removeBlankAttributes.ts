import type { PayloadUserPartial } from "../types/PayloadUserPartial";

export const removeBlankAttributes = (payloadUser: PayloadUserPartial) => {
  return Object.fromEntries(
    Object.entries(payloadUser).filter(([_, v]) => v != "")
  );
};
