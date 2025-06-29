import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_BASE_URL } from "../../../config/api";
import { CirclesWithBar } from "react-loader-spinner";
import { useForm } from "react-hook-form";
import { Input } from "../../../components/ui/input";
import { Card } from "../../../components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "../../../components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../../../components/ui/button";
import { toast } from "sonner";

function MediaDisposalFormItem() {
  const { id } = useParams();
  const [formItem, setFormItem] = useState({});
  const [loading, setLoading] = useState(true);
  // const []

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

  async function getMediaForm(id) {
    try {
      setLoading(true);
      const response = await axios.get(
        `${API_BASE_URL}/media-disposal-form/get-media-disposal-form/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            "Content-Type": "application/json",
          },
        }
      );
      setFormItem(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getMediaForm(id);
  }, []);

  useEffect(() => {
    if (formItem) {
      form.reset({
        owner: formItem.owner,
        department: formItem.department,
        reason: formItem.reason,
        model: formItem.model,
        serialNumber: formItem.serialNumber,
        digitalHardware: formItem.digitalHardware,
        digitalSoftware: formItem.digitalSoftware,
        physicalCategory: formItem.physicalCategory,
        informationClassification: formItem.informationClassification,
        backUp: formItem.backUp,
        sanitizationMethod: formItem.sanitizationMethod,
        disposedMedia: formItem.disposedMedia,
        performedBy: formItem.performedBy,
        validatedBy: formItem.validatedBy,
        performedDate: formItem.performedDate,
        validatedDate: formItem.validatedDate,
      });
    }
  }, [formItem]);

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

  async function update(userData) {
    try {
      const response = await axios.put(
        `${API_BASE_URL}/media-disposal-form/update/${id}`,
        userData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            "Content-Type": "application/json",
          },
        }
      );
      toast.success(`${response.data}`);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  function onSubmit(userData) {
    update(userData);
  }

  return (
    <Card className="md:w-4/5 m-auto text-center sm:my-7 md:my-14">
      <h1 className="font-semibold text-xl text-center sm:my-1 md:my-2">
        Media Disposal Form
      </h1>
      <div className="w-4/5 m-auto">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <FormField
              control={form.control}
              name="owner"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Asset Owner</FormLabel>
                  <FormControl>
                    <Input {...field} type="text" placeholder="Owner" />
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
                    <Input {...field} type="text" placeholder="Department" />
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
                    <Input {...field} type="text" placeholder="Reason" />
                  </FormControl>
                </FormItem>
              )}
            />
            <div className="flex">
              <FormField
                control={form.control}
                name="model"
                render={({ field }) => (
                  <FormItem className="w-1/2 mr-2">
                    <FormLabel>Model</FormLabel>
                    <FormControl>
                      <Input {...field} type="text" placeholder="Model" />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="serialNumber"
                render={({ field }) => (
                  <FormItem className="w-1/2">
                    <FormLabel>Serial Number</FormLabel>
                    <FormControl>
                      <Input {...field} type="number" placeholder="Serial #" />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <div className="flex mt-5">
              <div className="w-full md:w-1/2 space-y-3">
                <FormField
                  name="digitalHardware"
                  control={form.control}
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
              <div className="w-1/2 space-y-3 ml-2">
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

            <div className="md:flex items-center">
              <div className="md:w-1/2 space-y-3">
                <FormField
                  name="informationClassification"
                  control={form.control}
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
              </div>
              <div className="space-y-3 space-x-3 ml-2 md:flex md:justify-center items-center">
                <FormItem>
                  <FormLabel className="text-sm text-left">
                    Is Information Backed Up?
                  </FormLabel>
                  <FormField
                    control={form.control}
                    name="backUp"
                    render={({ field }) => (
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="my-2">
                            <SelectValue placeholder="Back Up" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Yes">Yes</SelectItem>
                          <SelectItem value="No">No</SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                </FormItem>
              </div>
            </div>

            <div className="md:flex space-y-3">
              <div className="md:w-1/2 mr-2">
                <FormField
                  name="sanitizationMethod"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Sanitization Method</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Sanitization Method" />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <div className="md:w-1/2">
                <FormField
                  name="disposedMedia"
                  control={form.control}
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
            </div>

            <div className="md:flex space-y-3">
              <div className="md:w-1/2 mr-2">
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
              </div>
              <div className="md:w-1/2">
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
            </div>

            <div className="md:flex space-y-3">
              <div className="md:w-1/2 mr-2">
                <FormField
                  control={form.control}
                  name="performedDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Performed Date</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="date"
                          placeholder="Performed Date"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <div className="md:w-1/2">
                <FormField
                  control={form.control}
                  name="validatedDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Validated Date</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="date"
                          placeholder="Validated Date"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <Button>Update</Button>
          </form>
        </Form>
      </div>
    </Card>
  );
}

export default MediaDisposalFormItem;
