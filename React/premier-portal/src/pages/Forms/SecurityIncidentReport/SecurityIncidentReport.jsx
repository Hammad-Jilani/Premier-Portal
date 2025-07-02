import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Card } from "../../../components/ui/card";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
} from "../../../components/ui/form";

import { Checkbox } from "@/components/ui/checkbox";
import { FormDescription } from "@/components/ui/form";
import { CirclesWithBar } from "react-loader-spinner";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../../../components/ui/button";
import axios from "axios";
import { API_BASE_URL } from "../../../config/api";
import { toast } from "sonner";

import { Input } from "../../../components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";

function SecurityIncidentReport() {
  const [loading, setLoading] = useState(false);

  const form = useForm({
    defaultValues: {
      reportDateTime: "", // or new Date().toISOString() if using Date inputs
      reportedSeverityLevel: 0,

      incidentOccurredDateTime: "",
      businessImpacted: "",

      incidentDetectedDateTime: "",
      businessUnit: "",

      incidentLocation: "",
      incidentSource: "", // "Internal" or "External"
      incidentStatus: "", // "Confirmed" or "Suspected"

      detectionDetails: "",
      suspects: "",
      impactedResources: "",

      highestInfoClassification: "",
      highestSystemCriticality: "",

      reporterName: "",
      reporterBusinessUnit: "",
      reporterContact: "",

      irtLeaderName: "",
      irtLeaderOfficeNumber: "",
      irtLeaderMobileNumber: "",

      notifiedBy: "",
      notificationDateTime: "",

      actionsTaken: "",
      additionalInfo: "",
    },
  });

  async function create(userData) {
    try {
      setLoading(true);
      const response = axios.post(
        `${API_BASE_URL}/security-incident-report/create`,
        userData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            "Content-Type": "application/json",
          },
        }
      );
      toast.success("Created Successfully!");
      setLoading(false);
    } catch (error) {
      toast.error("Failed to Create Report!!");
    }
  }

  function handleOnSubmit(userData) {
    console.log(userData);
    create(userData);
  }

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
    <Card className="max-w-5xl mx-auto my-10 p-8 shadow-xl rounded-2xl">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Security Incident Reporting Form
      </h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleOnSubmit)}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              name="reportDateTime"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Report Date Time :</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="datetime-local"
                      placeholder="Report Date Time"
                    ></Input>
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              name="reportedSeverityLevel"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Reported Severity Level :</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="number"
                      placeholder="Reported Severity Level"
                    ></Input>
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              name="incidentOccurredDateTime"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date / Time Incident Occurred :</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="datetime-local"
                      placeholder="Date / Time Incident Occurred"
                    ></Input>
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              name="businessImpacted"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Business Impacted :</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      placeholder="Business Impacted"
                    ></Input>
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              name="incidentDetectedDateTime"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date / Time Incident Detected :</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="datetime-local"
                      placeholder="Date / Time Incident Detected"
                    ></Input>
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              name="businessUnit"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Business Unit:</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      placeholder="Business Unit"
                    ></Input>
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              name="incidentLocation"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location of Incident:</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      placeholder="Location of Incident"
                    ></Input>
                  </FormControl>
                </FormItem>
              )}
            />
            <br />
            <FormField
              name="incidentSource"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Source of Incident: (Internal / External):
                  </FormLabel>
                  <Select
                    defaultValue={field.value}
                    onValueChange={field.onChange}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select option"></SelectValue>
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Internal">Internal</SelectItem>
                      <SelectItem value="External">External</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
            <FormField
              name="incidentStatus"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Confirmed Incident or Suspected Incident? :
                  </FormLabel>
                  <Select
                    defaultValue={field.value}
                    onValueChange={field.onChange}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select option"></SelectValue>
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Confirmed">Confirmed</SelectItem>
                      <SelectItem value="Suspended">Suspended</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />

            <FormField
              name="suspects"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Suspects (if any):</FormLabel>
                  <FormControl>
                    <Input {...field} type="text" placeholder="Suspects" />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              name="impactedResources"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Impacted Resources:</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      placeholder="Impacted Resources"
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              name="highestInfoClassification"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Highest Information Classification:</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      placeholder="Classification"
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              name="highestSystemCriticality"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Highest System Criticality:</FormLabel>
                  <FormControl>
                    <Input {...field} type="text" placeholder="Criticality" />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              name="reporterName"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Reporter Name:</FormLabel>
                  <FormControl>
                    <Input {...field} type="text" placeholder="Reporter Name" />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              name="reporterBusinessUnit"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Reporter Business Unit:</FormLabel>
                  <FormControl>
                    <Input {...field} type="text" placeholder="Business Unit" />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              name="reporterContact"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Reporter Contact:</FormLabel>
                  <FormControl>
                    <Input {...field} type="text" placeholder="Contact Info" />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              name="irtLeaderName"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>IRT Leader Name:</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      placeholder="IRT Leader Name"
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              name="irtLeaderOfficeNumber"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>IRT Leader Office Number:</FormLabel>
                  <FormControl>
                    <Input {...field} type="text" placeholder="Office Number" />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              name="irtLeaderMobileNumber"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>IRT Leader Mobile Number:</FormLabel>
                  <FormControl>
                    <Input {...field} type="text" placeholder="Mobile Number" />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              name="notifiedBy"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Senior Management Notified By:</FormLabel>
                  <FormControl>
                    <Input {...field} type="text" placeholder="Notified By" />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              name="notificationDateTime"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Notification Date Time:</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="datetime-local"
                      placeholder="Notification Time"
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              name="actionsTaken"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Actions Taken:</FormLabel>
                  <FormControl>
                    <Input {...field} type="text" placeholder="Actions Taken" />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              name="additionalInfo"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Additional Information:</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      placeholder="Additional Information"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className="text-center">
            <Button type="submit">Submit Report</Button>
          </div>
        </form>
      </Form>
    </Card>
  );
}

export default SecurityIncidentReport;
