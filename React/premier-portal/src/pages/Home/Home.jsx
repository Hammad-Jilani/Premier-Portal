import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { Card } from "../../components/ui/card";
import {
  ShieldCheck,
  FileText,
  UserCheck,
  Trash2,
  Database,
  Repeat,
} from "lucide-react";

function Home() {
  const cards = [
    {
      to: "/View-Access-Forms",
      title: "View Access Control Forms",
      description: "Review all submitted access requests.",
      icon: <UserCheck className="h-6 w-6 text-blue-600" />,
    },
    {
      to: "/View-Media-Disposal-Form",
      title: "View Media Disposal Forms",
      description: "Track disposed media and sanitization.",
      icon: <Trash2 className="h-6 w-6 text-red-600" />,
    },
    {
      to: "/View-SAP-Access-Form",
      title: "View SAP Access Forms",
      description: "Review all submitted SAP access requests.",
      icon: <Database className="h-6 w-6 text-green-600" />,
    },
    {
      to: "/View-Security-Incident-Report",
      title: "View Security Incident Report",
      description: "Review all submitted Security Incident Reports.",
      icon: <ShieldCheck className="h-6 w-6 text-yellow-600" />,
    },
    {
      to: "/View-Asset-Handover-Report",
      title: "View Asset Handover Report",
      description: "Review all Asset Handover Reports.",
      icon: <FileText className="h-6 w-6 text-indigo-600" />,
    },
    {
      to: "/View-Change-Request-Form",
      title: "View Change Request Form",
      description: "Review all Change Request Forms.",
      icon: <Repeat className="h-6 w-6 text-purple-600" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
      {/* <Navbar /> */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-14">
          Welcome to the Control Panel
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <Link to={card.to} key={index} className="group">
              <Card className="p-6 md:p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-[1.03] transition-all duration-300 h-full flex flex-col justify-center text-center space-y-4">
                <div className="flex justify-center">{card.icon}</div>
                <h2 className="text-xl font-semibold text-gray-700">
                  {card.title}
                </h2>
                <p className="text-gray-500 text-sm">{card.description}</p>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
