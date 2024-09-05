"use client";
import Image from "next/image";
import {
  Card,
  Overlay,
  Button,
  Text,
  Grid,
  Skeleton,
  Container,
} from "@mantine/core";
import {
  FaPoundSign,
  FaLeaf,
  FaFortAwesome,
  FaUsers,
  FaBalanceScale,
  FaGraduationCap,
} from "react-icons/fa";
import { HiPresentationChartLine } from "react-icons/hi2";
import { PiGraph } from "react-icons/pi";

import React from "react";

const FactCard = ({ fact, icon }: { fact: string; icon: React.ReactNode }) => (
  <div className="h-36 rounded-lg w-full border-2 border-yellow-500 hover:bg-yellow-500 text-gray-700 hover:text-white flex items-center justify-center shadow hover:shadow-xl duration-300 select-none">
    <div className="flex flex-col items-center gap-2 divide-y-2">
      {icon}
      <p className="text-2xl font-medium text-center">{fact}</p>
    </div>
  </div>
);

export default function Home() {
  const facts = [
    {
      label: "Active Since 1998",
      icon: <FaFortAwesome className="text-5xl" />,
    },

    { label: "Over £79,000 AUM", icon: <FaPoundSign className="text-5xl" /> },
    { label: "Focused on ESG", icon: <FaLeaf className="text-5xl" /> },
    { label: "400+ Active Members", icon: <FaUsers className="text-5xl" /> },
    {
      label: "50+ Stock Pitches Annually",
      icon: <HiPresentationChartLine className="text-5xl" />,
    },

    {
      label: "Large Network of Alumni",
      icon: <PiGraph className="text-5xl" />,
    },
    {
      label: "9 Industry Groups",
      icon: <FaBalanceScale className="text-5xl " />,
    },
    {
      label: "Quant, Trading & Macro Research",
      icon: <FaGraduationCap className="text-5xl" />,
    },
  ];

  return (
    <div className="flex flex-col gap-12">
      {/* welcome banner  */}
      <Card radius="md" className="p-0 border-yellow-400 shadow">
        <div className="relative bg-gray-800">
          <img
            className="w-full h-full rounded-lg opacity-50"
            src="https://media.cntraveller.com/photos/611be9e3d5b6f5a4a3def392/16:9/w_2560%2Cc_limit/Mountain-view-over-city-Edinburgh-scotland-conde-nast-traveller-28july17-iStock.jpg"
            alt="Edinburgh"
          />
          <div className="absolute top-0 lg:top-8 left-0 p-4 w-full flex flex-col items-center gap-4 md:gap-4 lg:gap-16 text-white -yellow-400">
            <p className="text-center text-xl md:text-3xl lg:text-5xl font-medium bg-gray-900/50 rounded-lg p-4 text-yellow-400">
              Edinburgh University Trading and Investment Club
            </p>
            <p className="md:w-4/5 lg:w-2/3 text-center lg:text-2xl font-medium bg-gray-900/50 rounded-lg p-2">
              The largest trading society in Scotland and one of the oldest
              student-run investment funds in Europe
              <br />
              <br />
              We educate students on finance, provide with real experience in
              equity research, opportunities to network and help kick-start
              careers in financial services
            </p>
          </div>
        </div>
      </Card>

      {/* grid for cards */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* cards with facts */}
        {facts.map((fact, idx) => (
          <div key={idx} className="col-span-1">
            <FactCard fact={fact.label} icon={fact.icon} />
          </div>
        ))}
      </div>
    </div>
  );
}
