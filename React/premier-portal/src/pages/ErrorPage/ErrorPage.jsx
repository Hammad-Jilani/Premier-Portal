// src/pages/ErrorPage/ErrorPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button"; // assuming you're using shadcn/ui or similar
import { AlertTriangle } from "lucide-react";

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center px-4">
      <div className="bg-white shadow-lg rounded-2xl p-10 max-w-lg text-center">
        <div className="flex justify-center mb-6">
          <AlertTriangle className="text-yellow-500" size={48} />
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Oops!</h1>
        <p className="text-lg text-gray-600 mb-6">
          The page you’re looking for doesn’t exist or an unexpected error has
          occurred.
        </p>
        <Link to="/">
          <Button className="rounded-xl px-6 py-2">Back to Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
