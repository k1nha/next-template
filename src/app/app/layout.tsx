"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { status } = useSession();
  const router = useRouter();

  if (status !== "authenticated") {
    router.replace("/");
    return;
  }

  return <>{children}</>;
}
