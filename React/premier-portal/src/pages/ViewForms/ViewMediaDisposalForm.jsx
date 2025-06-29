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

function ViewMediaDisposalForm() {
  const [mediaForm, setMediaForm] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchAllForms() {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/media-disposal-form/get-media-disposal-form`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            "Content-Type": "application/json",
          },
        }
      );
      setMediaForm(response.data);
      console.log(mediaForm);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDelete(id) {
    setLoading(true);
    try {
      const response = await axios.delete(
        `${API_BASE_URL}/media-disposal-form/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            "Content-Type": "application/json",
          },
        }
      );
      fetchAllForms();
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    setLoading(false);
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
        <Table className="min-w-full text-sm text-left text-gray-700">
          <TableHeader className="bg-gray-100 text-gray-800 uppercase text-sm">
            <TableRow>
              <TableHead className="p-4">Owner</TableHead>
              <TableHead className="p-4">Department</TableHead>
              <TableHead className="p-4">Serial No.</TableHead>
              <TableHead className="p-4">Model</TableHead>
              <TableHead className="p-4">Back Up</TableHead>
              <TableHead className="p-4">Performed By</TableHead>
              <TableHead className="p-4">Validated By</TableHead>
              <TableHead className="p-4 text-center">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mediaForm.length !== 0 ? (
              mediaForm.map((form) => (
                <TableRow
                  key={form.id}
                  className="hover:bg-gray-50 transition duration-200"
                >
                  <TableCell className="p-4">{form.owner}</TableCell>
                  <TableCell className="p-4">{form.department}</TableCell>
                  <TableCell className="p-4">{form.serialNumber}</TableCell>
                  <TableCell className="p-4">{form.model}</TableCell>
                  <TableCell className="p-4">{form.backUp}</TableCell>
                  <TableCell className="p-4">{form.performedBy}</TableCell>
                  <TableCell className="p-4">{form.validatedBy}</TableCell>
                  <TableCell className="p-4 text-center">
                    <Link to={`/View-Media-Disposal-Form/${form.id}`}>
                      <Button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-xl shadow-sm transition duration-200">
                        View
                      </Button>
                    </Link>
                    <Button
                      className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-xl shadow-sm transition duration-200 ml-3"
                      onClick={() => handleDelete(form.id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan="8"
                  className="text-center p-6 text-gray-500"
                >
                  No Media Form
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
          <Link to={`/View-Media-Disposal-Form-History`}>History</Link>
        </Button>
      </div>
    </div>
  );
}

export default ViewMediaDisposalForm;
