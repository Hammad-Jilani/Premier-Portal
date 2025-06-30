import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { Card } from "../../components/ui/card";

function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Welcome to the Control Panel
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link to="/View-Access-Forms" className="group">
            <Card className="bg-white p-8 rounded-2xl shadow-md text-center transition-transform transform group-hover:scale-105 md:h-44">
              <h2 className="text-xl font-semibold text-gray-700 mb-2">
                View Access Control Forms
              </h2>
              <p className="text-gray-500">
                Review all submitted access requests.
              </p>
            </Card>
          </Link>

          <Link to="/View-Media-Disposal-Form" className="group">
            <Card className="bg-white p-8 rounded-2xl shadow-md text-center transition-transform transform group-hover:scale-105 md:h-44">
              <h2 className="text-xl font-semibold text-gray-700 mb-2">
                View Media Disposal Forms
              </h2>
              <p className="text-gray-500">
                Track disposed media and sanitization.
              </p>
            </Card>
          </Link>
          <Link to="/View-SAP-Access-Form" className="group">
            <Card className="bg-white p-8 rounded-2xl shadow-md text-center transition-transform transform group-hover:scale-105 md:h-44">
              <h2 className="text-xl font-semibold text-gray-700 mb-2">
                View SAP Access Forms
              </h2>
              <p className="text-gray-500">
                Review all submitted SAP access requests.
              </p>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
