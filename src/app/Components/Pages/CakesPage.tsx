'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { fetchaCakes } from '@/app/lib/api';
import { TextHoverEffectDemo } from './TextHover';
import { cn } from "@/app/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

interface Cake {
  id: number;
  name: string;
  image: string;
  difficulty:string;
  title:string;
}

const CakesPage = ({ className }: { className?: string }) => {
  const [cakes, setCakes] = useState<Cake[]>([]);

  // let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // const getAllCakes = async () => {
  //   const temp = await fetchaCakes();
  //   console.log(temp);
  //   setCakes(temp);
  // };

  // useEffect(() => {
  //   getAllCakes();
  // }, []); 

  return (
    <div>
      <TextHoverEffectDemo />
      {/* <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10", className)}>
        {cakes.map((cake, idx) => (
          <Link
            href={`/cakes/${cake.id}`}
            key={cake.id}
            className="relative flex items-center text-center justify-center group  p-2  w-[440px] h-[540px] "
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.15 } }}
                  exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
                />
              )}
            </AnimatePresence>
            <Card>
              <div className="flex flex-col items-center text-center justify-center  w-[400px] h-[480px] rounded-xl p-4 shadow-lg">
                <Image alt="Cake Image" src={cake.image} width={300} height={160} className="rounded-xl object-cover mt-4" />
                <h2 className="text-lg  shadow-lg text-white font-bold mt-2">{cake.title}</h2>
<h2 className="text-lg shadow-xl text-white font-bold mt-2">Difficulty Level: {cake.difficulty}</h2>

            
              </div>
            </Card>
          </Link>
        ))}
      </div> */}
    </div>
  );
};

export const Card = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return (
    <div className={cn("rounded-2xl flex items-center text-center justify-center h-[490] w-[390] p-4 overflow-hidden bg-lightcolor border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20", className)}>
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export default CakesPage;
