import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
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
import { toast } from "sonner";

function ViewSapForm() {
  const [formInfo, setFormInfo] = useState();
  const [loading, setLoading] = useState(true);

  async function getSapForm() {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/sap-access-form/get-all-sap-forms`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            "Content-Type": "application/json",
          },
        }
      );
      setFormInfo(response.data);
      console.log(response.data);

      setLoading(false);
    } catch (error) {
      console.log(formInfo);
    }
  }

  async function handleDelete(id) {
    setLoading(true);
    try {
      const response = await axios.delete(
        `${API_BASE_URL}/sap-access-form/delete-sap-forms/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            "Content-Type": "application/json",
          },
        }
      );
      getSapForm();
      setLoading(false);
      toast.success(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getSapForm();
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
          View SAP Access Forms
        </h1>
        <Table className="min-w-full text-sm text-left text-gray-700">
          <TableHeader className="bg-gray-100 text-gray-800 uppercase text-sm">
            <TableRow>
              <TableHead className="p-4">Employee Name</TableHead>
              <TableHead className="p-4">Employee Number</TableHead>
              <TableHead className="p-4">Current SAP ID</TableHead>
              <TableHead className="p-4">Department</TableHead>
              <TableHead className="p-4">Reviewed Up</TableHead>
              <TableHead className="p-4">Purchasing Org</TableHead>
              <TableHead className="p-4">Purchasing Group</TableHead>
              <TableHead className="p-4">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {formInfo.length !== 0 ? (
              formInfo.map((form) => (
                <TableRow
                  key={form.id}
                  className="hover:bg-gray-50 transition duration-200"
                >
                  <TableCell className="p-4">{form.employeeName}</TableCell>
                  <TableCell className="p-4">{form.employeeNo}</TableCell>
                  <TableCell className="p-4">{form.currentSapId}</TableCell>
                  <TableCell className="p-4">{form.department}</TableCell>
                  <TableCell className="p-4">{form.reviewerName}</TableCell>
                  <TableCell className="p-4">{form.purchasingOrg}</TableCell>
                  <TableCell className="p-4">{form.purchasingGroup}</TableCell>
                  <TableCell className="p-4 text-center">
                    <Link to={`/View-Sap-Access-Form/${form.id}`}>
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
          <Link to={`/Sap-Access-Form-History`}>History</Link>
        </Button>
      </div>
    </div>
  );
}

export default ViewSapForm;
