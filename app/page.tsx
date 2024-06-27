import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from 'next/link'
export default function Home() {
  return (
    <main className="">
     <Link href="/dashboard/blog/create">
     <Button>Click</Button>
     </Link>
    </main>
  );
}
