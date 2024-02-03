import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <Link href={"/dashboard"}>Go to Dashboard</Link>
    </main>
  );
}
