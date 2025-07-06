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
import { useNavigate } from "react-router-dom";

function CreateMediaDisposalForm() {
  const form = useForm({
    defaultValues: {
      owner: "",
      department: "",
      reason: "",
      model: "",
      serialNumber: "",
      digitalHardware: "",
      digitalSoftware: "",
      physicalCategory: "",
      informationClassification: "",
      backUp: "",
      sanitizationMethod: "",
      disposedMedia: "",
      performedBy: "",
      validatedBy: "",
      performedDate: "",
      validatedDate: "",
    },
  });
  const navigate = useNavigate();

  async function saveMediaDisposalForm(data) {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/media-disposal-form/create-media-disposal-form`,
        data,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (response.data) {
        toast.success("Media Disposal Form Created Successfully");
        form.reset();
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to create form");
    }
  }

  function onSubmit(userData) {
    saveMediaDisposalForm(userData);
    navigate(-1);
  }

  return (
    <Card className="max-w-5xl mx-auto my-10 p-8 shadow-xl rounded-2xl">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Media Disposal Form
      </h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Owner Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FormField
              control={form.control}
              name="owner"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Owner</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Asset Owner" />
                  </FormControl>
                </FormItem>
              )}
            />
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
              name="reason"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Reason</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Reason" />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          {/* Model and Serial Number */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="model"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Model</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Model" />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="serialNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Serial Number</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      {...field}
                      placeholder="Serial Number"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          {/* Digital & Physical Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="digitalHardware"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Digital Hardware</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Digital Hardware" />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="digitalSoftware"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Digital Software</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Digital Software" />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="physicalCategory"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Physical Category</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Physical Category" />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Info Classification and Backup */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
            <FormField
              control={form.control}
              name="informationClassification"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Information Classification</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Information Classification"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="backUp"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Is Information Backed Up?</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select option" />
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
          </div>

          {/* Sanitization + Media */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="sanitizationMethod"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Sanitization Method</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Sanitization Method" />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="disposedMedia"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Disposed Media</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Disposed Media" />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          {/* Performed & Validated By */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="performedBy"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Performed By</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Performed By" />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="validatedBy"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Validated By</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Validated By" />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          {/* Dates */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="performedDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Performed Date</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="validatedDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Validated Date</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          {/* Submit Button */}
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

export default CreateMediaDisposalForm;
