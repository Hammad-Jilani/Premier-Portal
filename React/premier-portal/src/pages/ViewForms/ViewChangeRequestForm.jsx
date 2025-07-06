import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_BASE_URL } from "../../config/api";
import { CirclesWithBar } from "react-loader-spinner";
import {
  Table,
  TableHead,
  TableHeader,
  TableRow,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";

function ViewChangeRequestForm() {
  const [forms, setForms] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchAllForms() {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/change-request-form/getAll`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);

      setForms(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(id) {
    try {
      await axios.delete(`${API_BASE_URL}/change-request-form/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      });
      fetchAllForms();
    } catch (error) {
      console.error(error);
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
          View Change Request Forms
        </h1>
        <Table className="min-w-full text-sm text-left text-gray-700">
          <TableHeader className="bg-gray-100 text-gray-800 uppercase text-sm">
            <TableRow>
              <TableHead className="p-4">CR Number</TableHead>
              <TableHead className="p-4">Project Name</TableHead>
              <TableHead className="p-4">Submitter</TableHead>
              <TableHead className="p-4">Type</TableHead>
              <TableHead className="p-4">Priority</TableHead>
              <TableHead className="p-4">Decision</TableHead>
              <TableHead className="p-4">Decision Date</TableHead>
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
                  <TableCell className="p-4">{form.crNumber}</TableCell>
                  <TableCell className="p-4">{form.projectName}</TableCell>
                  <TableCell className="p-4">{form.submitterName}</TableCell>
                  <TableCell className="p-4">{form.crType}</TableCell>
                  <TableCell className="p-4">{form.priority}</TableCell>
                  <TableCell className="p-4">{form.decision}</TableCell>
                  <TableCell className="p-4">{form.decisionDate}</TableCell>
                  <TableCell className="p-4 text-center">
                    <Link to={`/View-Change-Request-Form-Item/${form.id}`}>
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
                  colSpan="8"
                  className="text-center p-6 text-gray-500"
                >
                  No Change Request Forms Found
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
          <Link to={`/View-Change-Request-Form-History`}>History</Link>
        </Button>
      </div>
    </div>
  );
}

export default ViewChangeRequestForm;
