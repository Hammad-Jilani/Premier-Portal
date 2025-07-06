import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API_BASE_URL } from "../../config/api";
import { useForm } from "react-hook-form";
import { CirclesWithBar } from "react-loader-spinner";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectItem,
  SelectContent,
} from "../../components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "../../components/ui/form";
import { Input } from "../../components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { toast } from "sonner";

function ChangeRequestFormItem() {
  const { id } = useParams();
  const [formInfo, setFormInfo] = useState();
  const [loading, setLoading] = useState(true);

  async function getById() {
    try {
      setLoading(true);
      const response = await axios.get(
        `${API_BASE_URL}/change-request-form/get/${id}`,
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
      console.log(error);
    }
  }

  useEffect(() => {
    getById();
    setLoading(false);
  }, []);

  const form = useForm({
    defaultValues: {
      submitterName: "",
      crNumber: "",
      normalChange: "",
      emergencyChange: "",
      crType: "",
      projectName: "",
      submitterName: "",
      departmentOrLocation: "",
      phoneOrEmail: "",
      dateSubmitted: "",
      changeType: "",
      otherChangeDescription: "",
      briefDescription: "",
      changeNeededBy: "",
      priority: "",
      reasonForChange: "",
      environmentsImpacted: "",
      assumptionsAndNotes: "",
      comments: "",
      hasAttachments: "",
      attachmentLink: "",
      dateSignedBySubmitter: "",
      hourImpact: 0,
      durationImpact: 0,
      scheduleImpact: 0.0,
      costImpact: 0.0,
      commentsBySystemOwner: "",
      recommendations: "",
      testPlan: "",
      rollbackPlan: "",
      dateSignedBySystemOwner: "",
      decision: "",
      decisionDate: "",
      decisionExplanation: "",
      conditions: "",
      dateSigned: "",
      implementedStatus: "",
      stagingTestResults: "",
      implementationTestResults: "",
      remarks: "",
      implementerDate: "",
    },
  });

  useEffect(() => {
    if (formInfo) {
      form.reset({
        ...formInfo,
      });
    }
  }, [formInfo]);

  const navigate = useNavigate();
  async function Update(userData) {
    try {
      const response = await axios.put(
        `${API_BASE_URL}/change-request-form/update/${id}`,
        userData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            "Content-Type": "application/json",
          },
        }
      );
      toast.success("Update Successfully");
      navigate(-1);
    } catch (error) {
      console.log(error);
      toast.fail("Failed");
    }
  }

  function onSubmit(userData) {
    Update(userData);
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
        Update / View Change Request Form
      </h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <h5 className="text-center font-semibold text-xl">
            SUBMITTER - GENERAL INFORMATION
          </h5>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FormField
              control={form.control}
              name="crNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>CR Number</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="CR Number" />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="crType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Type of CR</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Type of CR" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Enhancement">Enhancement</SelectItem>
                      <SelectItem value="Defect">Defect</SelectItem>
                      <SelectItem value="Others">Others</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="normalChange"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Normal Change</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Is Normal Change?" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Yes">Yes</SelectItem>
                      <SelectItem value="No">No</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="emergencyChange"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Emergency Change</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Is Emergency Change ?" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Yes">Yes</SelectItem>
                      <SelectItem value="No">No</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="projectName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project / Program / Initiative</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Project Name" />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="submitterName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Submitter Name</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      {...field}
                      placeholder="Submitter Name"
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="departmentOrLocation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Department / Location</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      {...field}
                      placeholder="Department / Location"
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phoneOrEmail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone / Email</FormLabel>
                  <FormControl>
                    <Input type="text" {...field} placeholder="Phone / Email" />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="dateSubmitted"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date Submitted</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="changeType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Change Type</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Change Type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Application">Application</SelectItem>
                      <SelectItem value="Hardware"> Hardware</SelectItem>
                      <SelectItem value="Network"> Network</SelectItem>
                      <SelectItem value="Database"> Database</SelectItem>
                      <SelectItem value="Procedures">Procedures</SelectItem>
                      <SelectItem value="Security Config">
                        Security Config
                      </SelectItem>
                      <SelectItem value="OS /Utilities">
                        OS /Utilities
                      </SelectItem>
                      <SelectItem value="Batch Files">Batch Files</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="otherChangeDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Other Change Description</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder="Other Change Description"
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="briefDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Brief Description</FormLabel>
                  <FormControl>
                    <Textarea {...field} placeholder="Brief Description" />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="changeNeededBy"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Change Needed By</FormLabel>
                  <FormControl>
                    <Input
                      type="date"
                      {...field}
                      placeholder="Change Needed By"
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="priority"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Priority</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Priority" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Low">Low</SelectItem>
                      <SelectItem value="Medium">Medium</SelectItem>
                      <SelectItem value="High">High</SelectItem>
                      <SelectItem value="Mandatory">Mandatory</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="reasonForChange"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Reason for Change</FormLabel>
                  <FormControl>
                    <Textarea {...field} placeholder="Enter reason" />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="environmentsImpacted"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Environment Impacted</FormLabel>
                  <FormControl>
                    <Textarea {...field} placeholder="Environment Impacted" />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="assumptionsAndNotes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Assumptions and Notes</FormLabel>
                  <FormControl>
                    <Textarea {...field} placeholder="Assumptions and Notes" />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="comments"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Comments</FormLabel>
                  <FormControl>
                    <Textarea {...field} placeholder="Comments" />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="hasAttachments"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Has Attachments?</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Option" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Yes">Yes</SelectItem>
                      <SelectItem value="No">No</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="attachmentLink"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Attachment Link</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="URL or File Location" />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormLabel>Approval Signature</FormLabel>

            <FormField
              control={form.control}
              name="dateSignedBySubmitter"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date Signed</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Date Signed" />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <h5 className="text-center font-semibold text-xl">
            System Owner - Initial Analysis
          </h5>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FormField
              control={form.control}
              name="hourImpact"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Hour Impact [#hrs]</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} placeholder="e.g. 8" />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="durationImpact"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Duration Impact [#dys]</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} placeholder="e.g. 2" />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="scheduleImpact"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Schedule Impact [#hrs]</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} placeholder="e.g. 12" />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="costImpact"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cost Impact [#dys]</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} placeholder="e.g. 5" />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="comments"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Comments [WBS]</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Enter comments or WBS reference"
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="recommendations"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Recommendations [Cost]</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter recommendations" />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="testPlan"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Test Plan(s)</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder="Link or description of test plan"
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="rollbackPlan"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Rollback Plan</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter rollback strategy" />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormLabel> Approval Signature</FormLabel>

            <FormField
              control={form.control}
              name="dateSignedBySubmitter"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Approval Signature - Date Signed</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <h5 className="text-center font-semibold text-xl">
            CHANGE ADVISORY BOARD – DECISION
          </h5>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Decision Dropdown */}
            <FormField
              control={form.control}
              name="decision"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Decision</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    value={field.value || undefined}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Decision" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Approved">Approved</SelectItem>
                      <SelectItem value="Approved with Conditions">
                        Approved with Conditions
                      </SelectItem>
                      <SelectItem value="Rejected">Rejected</SelectItem>
                      <SelectItem value="More Info">More Info</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />

            {/* Decision Date */}
            <FormField
              control={form.control}
              name="decisionDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Decision Date</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Decision Explanation */}
            <FormField
              control={form.control}
              name="decisionExplanation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Decision Explanation</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Explain the decision..." />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Conditions */}
            <FormField
              control={form.control}
              name="conditions"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Conditions</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Conditions (if any)" />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormLabel>Approval Signature</FormLabel>

            {/* Date Signed */}
            <FormField
              control={form.control}
              name="dateSigned"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date Signed</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <h5 className="text-center font-semibold text-xl">
            CHANGE IMPLEMENTATION
          </h5>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FormField
              control={form.control}
              name="implementedStatus"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Implemented</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Implementation Status" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Success">Success</SelectItem>
                      <SelectItem value="Partial Success">
                        Partial Success
                      </SelectItem>
                      <SelectItem value="Failed">Failed</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="stagingTestResults"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Staging Test Results</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Summary of staging test results"
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="implementationTestResults"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Implementation Test Results</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder="Summary of implementation test results"
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="remarks"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Remarks</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Any final remarks or notes"
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="implementerDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Implementer Signoff - Date</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className="text-center mt-8">
            <Button className="px-8 py-2 text-lg rounded-xl text-white shadow-lg transition-all">
              Update Form
            </Button>
          </div>
        </form>
      </Form>
    </Card>
  );
}

export default ChangeRequestFormItem;
