import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useForm, useFieldArray } from "react-hook-form";
import { API_BASE_URL } from "../../../config/api";
import { Card } from "../../../components/ui/card";
import {
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormField,
} from "../../../components/ui/form";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
import { CirclesWithBar } from "react-loader-spinner";
import { toast } from "sonner";

function AssetHandoverReportItem() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [formItem, setFormItem] = useState({});
  const navigate = useNavigate();

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

  const { control, reset, handleSubmit } = form;

  const { fields, append, remove } = useFieldArray({
    control,
    name: "assetItems",
  });

  async function getFormItem(id) {
    try {
      setLoading(true);
      const response = await axios.get(
        `${API_BASE_URL}/asset-handover-form/get/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        }
      );
      setFormItem(response.data);
      setLoading(false);
      console.log(response.data);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getFormItem(id);
  }, [id]);

  useEffect(() => {
    if (formItem) {
      reset({
        employeeName: formItem.employeeName,
        designation: formItem.designation,
        department: formItem.department,
        assetTransferNumber: formItem.assetTransferNumber,
        handoverDate: formItem.handoverDate,
        handoverBy: formItem.handoverBy,
        employeeAcknowledgementName: formItem.employeeAcknowledgementName,
        assetItems: formItem.assetItems || [],
      });
    }
  }, [formItem]);

  async function onSubmit(data) {
    try {
      const response = await axios.put(
        `${API_BASE_URL}/asset-handover-form/update/${id}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(data);

      toast.success("Asset Handover Form Updated Successfully");
      navigate(-1);
    } catch (error) {
      console.error(error);
      toast.error("Failed to update form");
    }
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
    <Card className="max-w-5xl mx-auto my-10 p-6 shadow-xl rounded-2xl">
      <h1 className="text-2xl font-bold text-center mb-6">
        Update Asset Handover Form
      </h1>
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FormField
              name="employeeName"
              control={control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Employee Name</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Name" />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              name="designation"
              control={control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Designation</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Designation" />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              name="department"
              control={control}
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
              name="assetTransferNumber"
              control={control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Asset Transfer Number</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Transfer #" />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              name="handoverDate"
              control={control}
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
              name="handoverBy"
              control={control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Handover By</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Person Responsible" />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          {/* Editable Asset Items */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Asset Items</h2>
            {fields.map((item, index) => (
              <div
                key={item.id}
                className="grid grid-cols-1 md:grid-cols-5 gap-3 items-end"
              >
                <FormField
                  name={`assetItems[${index}].particulars`}
                  control={control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Particulars</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Particulars" />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  name={`assetItems[${index}].serialNumber`}
                  control={control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Serial #</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Serial #" />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  name={`assetItems[${index}].quantity`}
                  control={control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Quantity</FormLabel>
                      <FormControl>
                        <Input {...field} type="number" />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  name={`assetItems[${index}].remarks`}
                  control={control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Remarks</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Remarks" />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <Button
                  variant="destructive"
                  type="button"
                  onClick={() => remove(index)}
                >
                  Remove
                </Button>
              </div>
            ))}
            <Button
              type="button"
              variant="outline"
              onClick={() =>
                append({
                  particulars: "",
                  serialNumber: "",
                  quantity: 1,
                  remarks: "",
                })
              }
            >
              Add Asset Item
            </Button>
          </div>

          {/* Acknowledgment */}
          <div className="space-y-2">
            <FormLabel className="font-semibold text-lg">
              ACKNOWLEDGEMENT AND DECLARATION BY EMPLOYEE
            </FormLabel>
            <p className="text-justify leading-7">
              I, Ms/Mr{" "}
              <FormField
                control={control}
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

          <Button type="submit" className="mt-4">
            Update Form
          </Button>
        </form>
      </Form>
    </Card>
  );
}

export default AssetHandoverReportItem;
