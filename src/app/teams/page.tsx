import React from "react";
import {
  FaHouseChimney,
  FaEarthAfrica,
  FaStethoscope,
  FaPiggyBank,
} from "react-icons/fa6";
import { GiMining, GiProcessor } from "react-icons/gi";
import { TiShoppingCart } from "react-icons/ti";
import { MdFactory } from "react-icons/md";
import { BsLightningCharge } from "react-icons/bs";

const TeamGridTile = ({
  title,
  icon,
}: {
  title: string;
  icon: React.ReactNode;
}) => {
  return (
    <div className="h-36 rounded-lg w-full border-2 border-yellow-500 hover:bg-yellow-500 text-gray-700 hover:text-white flex items-center justify-center shadow hover:shadow-xl duration-300 select-none">
      <div className="flex flex-col items-center gap-2 divide-y-2">
        {icon}
        <p className="text-2xl font-medium text-center">{title}</p>
      </div>
    </div>
  );
};

const TeamsPage = () => {
  const teams = [
    { title: "Alternatives", icon: <FaHouseChimney className="text-5xl" /> },
    { title: "Basic Materials", icon: <GiMining className="text-5xl" /> },
    { title: "Consumer", icon: <TiShoppingCart className="text-5xl" /> },
    {
      title: "Energy & Utilities",
      icon: <BsLightningCharge className="text-5xl" />,
    },
    { title: "Impact Investing", icon: <FaEarthAfrica className="text-5xl" /> },
    { title: "Financial", icon: <FaPiggyBank className="text-5xl" /> },
    { title: "Healthcare", icon: <FaStethoscope className="text-5xl" /> },
    { title: "Industrial", icon: <MdFactory className="text-5xl" /> },
    { title: "TMT", icon: <GiProcessor className="text-5xl" /> },
  ];

  return (
    <div className="flex flex-col gap-8">
      <p className="text-3xl font-medium text-center">
        At the Heart of EUTIC, There Are 9 Sectors That Form Our Portfolio:
      </p>
      {/* grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {teams.map((team) => (
          <TeamGridTile title={team.title} icon={team.icon} />
        ))}
      </div>
    </div>
  );
};

export default TeamsPage;
