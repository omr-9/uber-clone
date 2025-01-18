import MapSection from "@/components/home/MapSection";
import SearchSection from "@/components/home/SearchSection";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (



    <div className="flex flex-col min-h-screen gap-4 bg-white ">
      <main className="max-w-7xl mx-auto px-3 w-full grid grid-cols-1 md:grid-cols-3 gap-10 ">
        <div className=""><SearchSection /></div>
        <div className="col-span-2"><MapSection/></div>
      </main>
    </div>
  );
}
