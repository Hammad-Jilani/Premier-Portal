import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_BASE_URL } from "../../config/api";
import {
  Table,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { CirclesWithBar } from "react-loader-spinner";

function ControlFormHistory() {
  const [history, setHistory] = useState("");
  const [loading, setLoading] = useState(true);

  async function getHistory() {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/access-control-form-history/get-history`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            "Content-Type": "application/json",
          },
        }
      );
      setHistory(response.data);
      console.log(response.data);
    } catch (error) {
      console.log("Error ", error);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    getHistory();
  }, []);
  if (loading) {
    return (
      <div className="w-full h-screen flex justify-center items-center bg-white">
        <CirclesWithBar
          color="gray"
          width={
            window.innerWidth < 640 ? 60 : window.innerWidth < 1024 ? 150 : 300
          }
          height={
            window.innerWidth < 640 ? 60 : window.innerWidth < 1024 ? 150 : 300
          }
        />
      </div>
    );
  }
  return (
    <div className="w-4/5 m-auto">
      <h1 className="text-center font-semibold text-md md:text-xl lg:text-2xl">
        Access Control Form History
      </h1>
      <Table className="mt-5">
        <TableHeader>
          <TableRow>
            <TableHead>Employee ID</TableHead>
            <TableHead>First Name</TableHead>
            <TableHead>Modified At</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {history &&
            history.map((history, index) => (
              <TableRow key={index}>
                <TableCell>{history.employeeId}</TableCell>
                <TableCell>{history.firstName}</TableCell>
                <TableCell>{history.modifiedAt}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default ControlFormHistory;
