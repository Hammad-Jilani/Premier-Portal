import React from "react";
import { useSelector } from "react-redux";
import { Avatar } from "../../components/ui/avatar";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { Card } from "../../components/ui/card";

function Home() {
  return (
    <div>
      <Link to={"/View-Access-Forms"}>
        <Card className="w-1/3 text-center m-10">View Access Form</Card>
      </Link>
    </div>
  );
}

export default Home;
