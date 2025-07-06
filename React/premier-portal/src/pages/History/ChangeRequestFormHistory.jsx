import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_BASE_URL } from "../../config/api";
import {
  Table,
  TableHead,
  TableHeader,
  TableRow,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { CirclesWithBar } from "react-loader-spinner";

function ChangeRequestFormHistory() {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getHistory() {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/change-request-history/all`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            "Content-Type": "application/json",
          },
        }
      );
      setHistory(response.data);
      console.log("Change Request History:", response.data);
    } catch (error) {
      console.error("Error fetching history", error);
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
      <h1 className="text-center font-semibold text-md md:text-xl lg:text-2xl capitalize">
        Change Request Form History
      </h1>
      <Table className="mt-5">
        <TableHeader>
          <TableRow>
            <TableHead>CR Number</TableHead>
            <TableHead>Submitter Name</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Modified At</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {history && history.length > 0 ? (
            history.map((entry, index) => (
              <TableRow key={index}>
                <TableCell>{entry.crNumber}</TableCell>
                <TableCell>{entry.submitterName}</TableCell>
                <TableCell>{entry.crType}</TableCell>
                <TableCell>{entry.modifiedAt}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={4} className="text-center py-4 text-gray-500">
                No Change Request History Found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

export default ChangeRequestFormHistory;
