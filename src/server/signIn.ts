import { db } from "@/lib/prisma";
import { RequestInternal } from "next-auth";

export const signIn = async (
  credentials: Record<"email" | "password", string> | undefined,
  req: Pick<RequestInternal, "body" | "query" | "headers" | "method">,
) => {
  const userExists = await db.user.findFirst({
    where: {
      email: credentials?.email,
    },
  });

  if (!userExists) {
    return null;
  }

  return {
    id: userExists.id,
    email: userExists.email,
  };
};
