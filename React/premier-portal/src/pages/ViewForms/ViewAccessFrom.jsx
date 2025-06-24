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
    <div className="mt-10 w-4/5 m-auto text-center">
      <Table>
        <TableCaption></TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Employee ID</TableHead>
            <TableHead>First Name</TableHead>
            <TableHead>Last Name</TableHead>
            <TableHead>Department</TableHead>
            <TableHead>Date Of Joining</TableHead>
            <TableHead>Designation</TableHead>
            <TableHead>User Status</TableHead>
            <TableHead>Access Period</TableHead>
            <TableHead>Start Date</TableHead>
            <TableHead>End Date</TableHead>
            <TableHead>Physical Access</TableHead>
            <TableHead>Logical Access</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {accessForm.length &&
            accessForm.map((form) => (
              <TableRow key={form.accessControlId}>
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
                  <Button className="bg-blue-400 hover:underline p-3 mr-3 rounded-xl">
                    <Link to={`/View-Access-Form-Item/${form.accessControlId}`}>
                      View
                    </Link>
                  </Button>

                  <Button
                    className="bg-red-500 hover:underline p-3 rounded-xl"
                    to={`/View-Access-Form-Item/:${form.accessControlId}`}
                    onClick={() => deleteById(form.accessControlId)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <Button
        variant={"outline"}
        className="hover:underline p-3 mr-3 rounded-xl"
      >
        <Link to={`/View-Access-Form-History`}>History</Link>
      </Button>
    </div>
  );
}

export default ViewAccessFrom;
