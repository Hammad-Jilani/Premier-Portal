import React from "react";

import axios from "axios";
import { useEffect, useState } from "react";
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

function MediaDisposalFormHistory() {
  const [history, setHistory] = useState("");
  const [loading, setLoading] = useState(true);

  async function getHistory() {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/media-disposal-form-history/all-disposal-form-history`,
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
        Media Disposal Form History
      </h1>
      <Table className="mt-5">
        <TableHeader>
          <TableRow>
            <TableHead>Information Asset Owner</TableHead>
            <TableHead>Department</TableHead>
            <TableHead>Model</TableHead>
            <TableHead>Serial Number</TableHead>
            <TableHead>Senitized Method</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Modified At</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {history.length != 0 ? (
            history.map((history, index) => (
              <TableRow key={index}>
                <TableCell>{history.owner}</TableCell>
                <TableCell>{history.department}</TableCell>
                <TableCell>{history.model}</TableCell>
                <TableCell>{history.serialNumber}</TableCell>
                <TableCell>{history.sanitizationMethod}</TableCell>
                <TableCell>{history.status}</TableCell>
                <TableCell>{history.modifiedAt}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell className="text-center" colSpan="7">
                No History Available
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

export default MediaDisposalFormHistory;
