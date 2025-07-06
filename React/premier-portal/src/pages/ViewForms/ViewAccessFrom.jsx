import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import api, { API_BASE_URL } from "../../config/api";
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
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";

function ViewAccessFrom() {
  const { auth } = useSelector((store) => store);
  const [loading, setLoading] = useState(true);
  let [accessForm, setAccessForm] = useState(null);

  async function deleteById(id) {
    try {
      const response = await axios.delete(
        `${API_BASE_URL}/access-control-form/delete-access-form/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      getAccessForm();
      // setAccessForm(response.data);
    } catch (error) {
      console.log("delete error ", error);
    }
  }

  async function getAccessForm() {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/access-control-form/getAllAccess`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            "Content-Type": "application/json",
          },
        }
      );
      setAccessForm(response.data);
    } catch (error) {
      console.log("Error in Fetching data ", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getAccessForm();
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
          View Access Control Forms
        </h1>
        <Table className="min-w-full text-sm text-left text-gray-700">
          <TableHeader className="bg-gray-100 text-gray-800 uppercase text-sm">
            <TableRow>
              <TableHead className="p-4">Employee ID</TableHead>
              <TableHead className="p-4">First Name</TableHead>
              <TableHead className="p-4">Last Name</TableHead>
              <TableHead className="p-4">Department</TableHead>
              <TableHead className="p-4">Date Of Joining</TableHead>
              <TableHead className="p-4">Designation</TableHead>
              <TableHead className="p-4">User Status</TableHead>
              <TableHead className="p-4">Access Period</TableHead>
              <TableHead className="p-4">Start Date</TableHead>
              <TableHead className="p-4">End Date</TableHead>
              <TableHead className="p-4">Physical Access</TableHead>
              <TableHead className="p-4">Logical Access</TableHead>
              <TableHead className="p-4 text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {accessForm.length !== 0 ? (
              accessForm.map((form) => (
                <TableRow
                  key={form.accessControlId}
                  className="hover:bg-gray-50 transition duration-200"
                >
                  <TableCell>{form.employeeId}</TableCell>
                  <TableCell>{form.firstName}</TableCell>
                  <TableCell>{form.lastName}</TableCell>
                  <TableCell>{form.department}</TableCell>
                  <TableCell>{form.joining}</TableCell>
                  <TableCell>{form.designation}</TableCell>
                  <TableCell>{form.userStatus}</TableCell>
                  <TableCell>{form.accessPeriod}</TableCell>
                  {form.accessPeriod == "Temporary" ? (
                    <TableCell>{form.startDate}</TableCell>
                  ) : (
                    <TableCell>-</TableCell>
                  )}
                  {form.accessPeriod == "Temporary" ? (
                    <TableCell>{form.endDate}</TableCell>
                  ) : (
                    <TableCell>-</TableCell>
                  )}
                  <TableCell>
                    {form.physicalAccess.map((a) => {
                      return <div>{a}</div>;
                    })}
                  </TableCell>
                  <TableCell>
                    {form.logicalAccess.map((a) => {
                      return <div>{a}</div>;
                    })}
                  </TableCell>
                  <TableCell>
                    <Button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-xl shadow-sm transition duration-200">
                      <Link
                        to={`/View-Access-Form-Item/${form.accessControlId}`}
                      >
                        View
                      </Link>
                    </Button>

                    <Button
                      className="bg-red-500 hover:underline p-3 rounded-xl"
                      to={`/View-Access-Form-Item/:${form.accessControlId}`}
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
                  colSpan="13"
                  className="text-center p-6 text-gray-500"
                >
                  No Access Control Form
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
          <Link to={`/View-Access-Form-History`}>History</Link>
        </Button>
      </div>
    </div>
  );
}

export default ViewAccessFrom;
