import React from "react";
import { Inter } from 'next/font/google';
import Navbar from "../compoents/NavigationBarComponents/Navbar";
const inter = Inter({ subsets: ['latin'] });

export default function PlansLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
     {/* <div className="flex h-screen flex-col md:flex-row md:overflow-hidden"> */}
      <Navbar/>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
