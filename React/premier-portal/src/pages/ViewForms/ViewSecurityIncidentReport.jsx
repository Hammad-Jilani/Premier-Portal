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

function ViewSecurityIncidentReport() {
  const [formInfo, setFormInfo] = useState();
  const [loading, setLoading] = useState(true);

  async function getSecurityIncident() {
    try {
      setLoading(true);
      const response = await axios.get(
        `${API_BASE_URL}/security-incident-report/getAll`,
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
        `${API_BASE_URL}/security-incident-report/delete/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            "Content-Type": "application/json",
          },
        }
      );
      getSecurityIncident();
      setLoading(false);
      toast.success(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getSecurityIncident();
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
          View Security Incident Reports
        </h1>
        <Table className="min-w-full text-sm text-left text-gray-700">
          <TableHeader className="bg-gray-100 text-gray-800 uppercase text-sm">
            <TableRow>
              <TableHead className="p-4">Report Date Time</TableHead>
              <TableHead className="p-4">Reported Severity Level</TableHead>
              <TableHead className="p-4">Business Impacted</TableHead>
              <TableHead className="p-4">Location of Incident</TableHead>
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
                  <TableCell className="p-4">{form.reportDateTime}</TableCell>
                  <TableCell className="p-4">
                    {form.reportedSeverityLevel}
                  </TableCell>
                  <TableCell className="p-4">{form.businessImpacted}</TableCell>
                  <TableCell className="p-4">{form.incidentLocation}</TableCell>
                  <TableCell className="p-4 text-center">
                    <Link
                      to={`/View-Security-Incident-Report-History/${form.id}`}
                    >
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
                  No Security Reports
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
          <Link to={`/View-Security-Incident-Report-History`}>History</Link>
        </Button>
      </div>
    </div>
  );
}

export default ViewSecurityIncidentReport;
