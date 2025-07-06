import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_BASE_URL } from "../../config/api";
import { CirclesWithBar } from "react-loader-spinner";
import {
  Table,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";

function ViewAssetHandoverReport() {
  const [forms, setForms] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchAllForms() {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/asset-handover-form/get`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            "Content-Type": "application/json",
          },
        }
      );
      setForms(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(id) {
    setLoading(true);
    try {
      await axios.delete(`${API_BASE_URL}/asset-handover-form/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          "Content-Type": "application/json",
        },
      });
      fetchAllForms();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchAllForms();
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
    <div className="mt-10 w-11/12 lg:w-4/5 mx-auto">
      <div className="overflow-x-auto shadow-lg rounded-2xl">
        <h1 className="text-lg font-semibold text-center mb-2">
          View Asset Handover Forms
        </h1>
        <Table className="min-w-full text-sm text-left text-gray-700">
          <TableHeader className="bg-gray-100 text-gray-800 uppercase text-sm">
            <TableRow>
              <TableHead className="p-4">Employee</TableHead>
              <TableHead className="p-4">Designation</TableHead>
              <TableHead className="p-4">Department</TableHead>
              <TableHead className="p-4">Transfer No</TableHead>
              <TableHead className="p-4">Handover Date</TableHead>
              <TableHead className="p-4">Handover By</TableHead>
              <TableHead className="p-4 text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {forms.length !== 0 ? (
              forms.map((form) => (
                <TableRow
                  key={form.id}
                  className="hover:bg-gray-50 transition duration-200"
                >
                  <TableCell className="p-4">{form.employeeName}</TableCell>
                  <TableCell className="p-4">{form.designation}</TableCell>
                  <TableCell className="p-4">{form.department}</TableCell>
                  <TableCell className="p-4">
                    {form.assetTransferNumber}
                  </TableCell>
                  <TableCell className="p-4">{form.handoverDate}</TableCell>
                  <TableCell className="p-4">{form.handoverBy}</TableCell>
                  <TableCell className="p-4 text-center">
                    <Link to={`/View-Asset-Handover-Report-Item/${form.id}`}>
                      <Button className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded-xl shadow-sm transition duration-200">
                        View
                      </Button>
                    </Link>
                    <Button
                      className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 ml-2 rounded-xl shadow-sm transition duration-200"
                      onClick={() => {
                        const confirmed = window.confirm(
                          "Are you sure you want to delete this form?"
                        );
                        if (confirmed) {
                          handleDelete(form.id);
                        }
                      }}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan="7"
                  className="text-center p-6 text-gray-500"
                >
                  No Asset Handover Forms Found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="text-center mt-3">
        <Button
          variant={"outline"}
          className="hover:underline p-3 mr-3 rounded-xl"
        >
          <Link to={`/View-Asset-Handover-Report-History`}>History</Link>
        </Button>
      </div>
    </div>
  );
}

export default ViewAssetHandoverReport;
