import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "../../components/ui/form";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { useFieldArray, useForm } from "react-hook-form";
import { Card } from "../../components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { CirclesWithBar } from "react-loader-spinner";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useDispatch, useSelector } from "react-redux";
import { createForm } from "../../Redux/createAccessForm/ActionType";
import { Loader2Icon } from "lucide-react";

function CreateAccessControlForm() {
  const form = useForm({
    defaultValues: {
      employeeId: "",
      firstName: "",
      middleName: "",
      lastName: "",
      department: "",
      joining: "",
      phone_number: "",
      designation: "",
      userStatus: "",
      accessPeriod: "",
      hrSecurity: "",
      physicalAccess: [],
      logicalAccess: [],
      loginIdAction: "",
      createDateAction: "",
      emailAddressAction: "",
      remarks: "",
      startDate: "",
      endDate: "",
      userAcknowledgementRemarks: "",
      applicationAccessRightsList: [
        {
          application: "",
          module: "",
          status: "",
          accessRights: "",
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "applicationAccessRightsList",
  });

  const accessPeriod = form.watch("accessPeriod");

  const dispatch = useDispatch();
  const { createAccessForm } = useSelector((store) => store);

  function submit(data) {
    dispatch(createForm(data));
    // form.resetField("startDate");
    // form.resetField("endDate");
    form.reset();
  }

  if (createAccessForm.loading) {
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
    <div>
      {/* <Navbar /> */}
      <Card className="md:w-4/5 m-auto text-center  sm:my-7 md:my-14">
        <h1 className="font-semibold text-xl text-center sm:my-1 md:my-2">
          Access Control Form (IT Resources & Business Application)
        </h1>
        <div className="w-4/5 m-auto">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(submit)}>
              <div className="text-center">
                <p className=" font-semibold text-md md:text-lg lg:text-xl sm:my-2 md:my-4 lg:my-6">
                  User Information
                </p>
              </div>
              <div className="flex justify-around items-center">
                <p>Username:</p>
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          className="my-2"
                          {...field}
                          type="text"
                          placeholder="First Name"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="middleName"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          className="my-2"
                          {...field}
                          type="text"
                          placeholder="Middle Name"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          className="my-2"
                          {...field}
                          type="text"
                          placeholder="Last Name"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex justify-evenly items-center">
                <div className="w-full">
                  <FormField
                    control={form.control}
                    name="employeeId"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            className="my-2 w-4/5"
                            {...field}
                            type="text"
                            placeholder="Employee Id"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="joining"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            className="my-2 w-4/5"
                            {...field}
                            type="date"
                            placeholder="Joining"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="designation"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            className="my-2 w-4/5"
                            {...field}
                            type="text"
                            placeholder="Designation"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="accessPeriod"
                    render={({ field }) => (
                      <FormItem>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="my-2 w-4/5">
                              <SelectValue placeholder="Access Period" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Permanent">Permanent</SelectItem>
                            <SelectItem value="Temporary">Temporary</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormItem>
                    )}
                  />

                  {accessPeriod === "Temporary" && (
                    <>
                      <FormField
                        control={form.control}
                        name="startDate"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                type="date"
                                {...field}
                                className="my-2 w-4/5"
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="endDate"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                type="date"
                                {...field}
                                className="my-2 w-4/5"
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </>
                  )}
                </div>

                <div className="w-full">
                  <FormField
                    control={form.control}
                    name="department"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            className="my-2 w-4/5"
                            {...field}
                            type="text"
                            placeholder="Department"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone_number"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            className="my-2 w-4/5"
                            {...field}
                            type="text"
                            placeholder="Phone Number"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="userStatus"
                    render={({ field }) => (
                      <FormItem>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="my-2 w-4/5">
                              <SelectValue placeholder="User Status" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Contractor">
                              Contractor
                            </SelectItem>
                            <SelectItem value="Employee">Employee</SelectItem>
                            <SelectItem value="Internee">Internee</SelectItem>
                            <SelectItem value="Others">Others</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <FormField
                control={form.control}
                name="hrSecurity"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        {...field}
                        placeholder="HR Security Verification Outcome"
                      ></Textarea>
                    </FormControl>
                  </FormItem>
                )}
              />

              <div className="text-center">
                <p className=" font-semibold text-md md:text-lg lg:text-xl my-4 md:my-4 lg:my-6">
                  Technical Department
                </p>
              </div>

              <div className="flex items-start">
                <div className="m-auto w-2/5 space-y-4">
                  <FormLabel>Physical Access</FormLabel>
                  <div className="flex flex-col space-y-2">
                    {["Server Room", "Network Device", "Others"].map(
                      (option) => (
                        <FormField
                          key={option}
                          control={form.control}
                          name="physicalAccess"
                          render={({ field }) => {
                            return (
                              <FormItem
                                key={option}
                                className="flex flex-row items-start space-x-3 space-y-0"
                              >
                                <FormControl>
                                  <Checkbox
                                    checked={field.value?.includes(option)}
                                    onCheckedChange={(checked) => {
                                      return checked
                                        ? field.onChange([
                                            ...field.value,
                                            option,
                                          ])
                                        : field.onChange(
                                            field.value.filter(
                                              (v) => v !== option
                                            )
                                          );
                                    }}
                                  />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  {option}
                                </FormLabel>
                              </FormItem>
                            );
                          }}
                        />
                      )
                    )}
                  </div>
                </div>

                <div className="text-center w-2/5 space-y-4">
                  <FormLabel>Logical Access</FormLabel>
                  <div className="flex flex-col space-y-2">
                    {[
                      "Domain Server",
                      "Database Server",
                      "Azure Portal",
                      "Application Server",
                      "Network Device",
                      "Others",
                    ].map((option) => (
                      <FormField
                        key={option}
                        control={form.control}
                        name="logicalAccess"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={option}
                              className="flex flex-row items-start space-x-3 space-y-0"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(option)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([...field.value, option])
                                      : field.onChange(
                                          field.value.filter(
                                            (v) => v !== option
                                          )
                                        );
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="font-normal">
                                {option}
                              </FormLabel>
                            </FormItem>
                          );
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="my-6">
                <h2 className="text-lg font-semibold mb-4">
                  Application Access Rights
                </h2>
                {fields.map((field, index) => (
                  <div
                    key={field.id}
                    className="grid grid-cols-5 gap-4 items-center mb-3"
                  >
                    <Input
                      {...form.register(
                        `applicationAccessRightsList.${index}.application`
                      )}
                      placeholder="Application"
                    />
                    <Input
                      {...form.register(
                        `applicationAccessRightsList.${index}.module`
                      )}
                      placeholder="Module"
                    />
                    <Select
                      onValueChange={(value) =>
                        form.setValue(
                          `applicationAccessRightsList.${index}.status`,
                          value
                        )
                      }
                      defaultValue={field.status}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Grant">Grant</SelectItem>
                        <SelectItem value="Revoke">Revoke</SelectItem>
                      </SelectContent>
                    </Select>

                    <Input
                      {...form.register(
                        `applicationAccessRightsList.${index}.accessRights`
                      )}
                      placeholder="A,D,E,P,V"
                    />

                    <Button
                      type="button"
                      variant="destructive"
                      onClick={() => remove(index)}
                    >
                      Remove
                    </Button>
                  </div>
                ))}

                <Button
                  type="button"
                  onClick={() =>
                    append({
                      application: "",
                      module: "",
                      status: "",
                      accessRights: "",
                    })
                  }
                  className="mt-2"
                >
                  Add Row
                </Button>
              </div>

              <div className="text-center">
                <p className=" font-semibold text-md md:text-lg lg:text-xl sm:my-2 md:my-4 lg:my-6">
                  Action
                </p>
              </div>
              <div className="flex justify-around items-center my-5">
                <FormField
                  control={form.control}
                  name="loginIdAction"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          {...field}
                          type="text"
                          placeholder="Login ID"
                        ></Input>
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="createDateAction"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          {...field}
                          type="date"
                          placeholder="Creation Date"
                        ></Input>
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="emailAddressAction"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          {...field}
                          type="text"
                          placeholder="Email Address"
                        ></Input>
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="remarks"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        className=""
                        {...field}
                        placeholder="Remarks"
                      ></Textarea>
                    </FormControl>
                  </FormItem>
                )}
              />

              <div className="text-center">
                <p className="font-semibold text-md md:text-lg lg:text-xl sm:my-2 md:my-4 lg:my-6">
                  User Acknowledgement{" "}
                </p>
              </div>
              <FormField
                control={form.control}
                name="userAcknowledgementRemarks"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        className="my-2"
                        {...field}
                        placeholder="Remarks"
                      ></Textarea>
                    </FormControl>
                  </FormItem>
                )}
              />

              <Button className="my-4">Create</Button>
            </form>
          </Form>
        </div>
      </Card>
    </div>
  );
}

export default CreateAccessControlForm;
