import React from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "../../../components/ui/form";
import { Input } from "../../../components/ui/input";
import { Card } from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";
import axios from "axios";
import { API_BASE_URL } from "../../../config/api";
import { toast } from "sonner";
import { Label } from "@radix-ui/react-dropdown-menu";
import { useFieldArray } from "react-hook-form";

function AssetHandoverReport() {
  const form = useForm({
    defaultValues: {
      employeeName: "",
      designation: "",
      department: "",
      assetTransferNumber: "",
      handoverDate: "",
      handoverBy: "",
      employeeAcknowledgementName: "",
      assetItems: [],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "assetItems",
  });

  async function saveAssetHandoverForm(data) {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/asset-handover-form/create`,
        data,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (response.data) {
        toast.success("Asset Handover Form Created Successfully");
        form.reset();
      }
    } catch (error) {
      console.error(error);
      console.log(data);

      toast.error("Failed to create form");
    }
  }

  function onSubmit(userData) {
    saveAssetHandoverForm(userData);
    console.log(userData);
  }

  return (
    <Card className="max-w-5xl mx-auto my-10 p-8 shadow-xl rounded-2xl">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Asset Handover / Takingover Form
      </h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="employeeName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Employee Name</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Full Name" />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="designation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Designation</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Designation" />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="department"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Department</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Department" />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="assetTransferNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Asset Transfer Number</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Transfer Number" />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="handoverDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Handover Date</FormLabel>
                  <FormControl>
                    <Input {...field} type="date" />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="handoverBy"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Handover By</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Person handing over" />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Assets Handed Over
            </h2>
            <div className="space-y-4">
              {fields.map((item, index) => (
                <div
                  key={item.id}
                  className="grid grid-cols-1 md:grid-cols-4 gap-4 border p-4 rounded-lg shadow-sm"
                >
                  <FormField
                    control={form.control}
                    name={`assetItems[${index}].particulars`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Particulars</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="e.g. Laptop, Mouse" />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name={`assetItems[${index}].serialNumber`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Serial Number</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="e.g. SN123456" />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name={`assetItems[${index}].quantity`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Qty</FormLabel>
                        <FormControl>
                          <Input type="number" {...field} placeholder="1" />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name={`assetItems[${index}].remarks`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Remarks</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="e.g. Good condition" />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <div className="col-span-1 md:col-span-4 text-right mt-2">
                    <Button
                      type="button"
                      variant="destructive"
                      onClick={() => remove(index)}
                      className="text-sm"
                    >
                      Remove
                    </Button>
                  </div>
                </div>
              ))}

              <div className="text-left">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() =>
                    append({
                      particulars: "",
                      serialNumber: "",
                      quantity: "",
                      remarks: "",
                    })
                  }
                >
                  + Add Asset Item
                </Button>
              </div>
            </div>
          </div>

          {/* Signatories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Label>Requester Signature</Label>
            <Label>Approver Signature</Label>
            <Label>Hand Over Signature</Label>
          </div>

          {/* Acknowledgment */}
          <div className="space-y-2">
            <FormLabel className="font-semibold text-lg">
              ACKNOWLEDGEMENT AND DECLARATION BY EMPLOYEE
            </FormLabel>
            <p className="text-justify leading-7">
              I, Ms/Mr{" "}
              <FormField
                control={form.control}
                name="employeeAcknowledgementName"
                render={({ field }) => (
                  <span className="inline-block w-64 border-b border-black mx-1">
                    <Input
                      {...field}
                      placeholder="Full Name"
                      className="border-none px-1 py-0 h-6 text-sm"
                    />
                  </span>
                )}
              />
              hereby acknowledge that I have received the above mentioned
              assets. I understand that this asset belongs to{" "}
              <strong>Premier Systems Pvt. Ltd.</strong> and is under my
              possession for carrying out my office work. I hereby assure that I
              will take care of the assets of the company to the best possible
              extent.
            </p>
          </div>

          <Label>Employee Signature</Label>

          <div className="text-center mt-8">
            <Button className="px-8 py-2 text-lg rounded-xl text-white shadow-lg transition-all">
              Save Form
            </Button>
          </div>
        </form>
      </Form>
    </Card>
  );
}

export default AssetHandoverReport;
