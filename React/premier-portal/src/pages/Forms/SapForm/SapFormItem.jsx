import { useNavigate, useParams } from "react-router-dom";
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

function SapFormItem() {
  const { id } = useParams();
  const [formInfo, setFormInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const form = useForm({
    defaultValues: {
      requestDate: "",
      department: "",
      employeeName: "",
      employeeNo: "",
      designation: "",
      currentSapId: "",
      location: [],
      areaOffice: [],
      requestType: "",
      rolesRequired: "",
      businessJustification: "",
      tCodeRequired: "",
      plant: [],
      salesOrganization: [],
      distributionChannel: [],
      division: [],
      salesOffice: [],
      saleOtherDetails: "",
      purchasingOrg: "",
      purchasingGroup: "",
      purchasingDocument: "",
      movementType: "",
      mmOtherDetails: "",
      powerUser: "",
      powerUserName: "",
      crossModulePower: "",
      crossModulePowerUserName: "",
      itBusinessPartner: "",
      itBusinessPartnerName: "",
      dataOwner: "",
      dataOwnerName: "",
      functionalHeadApproval: "",
      functionalHeadRemarks: "",
      itsTechApproval: "",
      itTechRemarkable: "",
      userIdCreated: "",
      roleAssigned: "",
      roleCreated: "",
      roleCreatedDescription: "",
      roleModified: "",
      roleModifiedDescription: "",
      reviewerName: "",
    },
  });

  async function getById() {
    try {
      setLoading(true);
      const response = await axios.get(
        `${API_BASE_URL}/sap-access-form/get-sap-form/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            "Content-Type": "application/json",
          },
        }
      );

      setFormInfo(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  async function update(userData) {
    try {
      setLoading(true);
      const response = await axios.put(
        `${API_BASE_URL}/sap-access-form/update-sap-forms/${id}`,
        userData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            "Content-Type": "application/json",
          },
        }
      );
      setLoading(false);
      console.log(response.data);
      toast.success("Updated SAP Form Successfully");
    } catch (error) {
      console.log(error);
    }
  }

  function onSubmit(userData) {
    update(userData);
    form.reset();
    navigate(-1);
  }

  useEffect(() => {
    getById();
  }, []);

  useEffect(() => {
    if (formInfo) {
      form.reset({
        requestDate: formInfo.requestDate,
        department: formInfo.department,
        employeeName: formInfo.employeeName,
        employeeNo: formInfo.employeeNo,
        designation: formInfo.designation,
        currentSapId: formInfo.currentSapId,
        location: formInfo.location,
        areaOffice: formInfo.areaOffice,
        requestType: formInfo.requestType,
        rolesRequired: formInfo.rolesRequired,
        businessJustification: formInfo.businessJustification,
        tCodeRequired: formInfo.tCodeRequired,
        plant: formInfo.plant,
        salesOrganization: formInfo.salesOrganization,
        distributionChannel: formInfo.distributionChannel,
        division: formInfo.division,
        salesOffice: formInfo.salesOffice,
        saleOtherDetails: formInfo.saleOtherDetails,
        purchasingOrg: formInfo.purchasingOrg,
        purchasingGroup: formInfo.purchasingGroup,
        purchasingDocument: formInfo.purchasingDocument,
        movementType: formInfo.movementType,
        mmOtherDetails: formInfo.mmOtherDetails,
        powerUser: formInfo.powerUser,
        powerUserName: formInfo.powerUserName,
        crossModulePower: formInfo.crossModulePower,
        crossModulePowerUserName: formInfo.crossModulePowerUserName,
        itBusinessPartner: formInfo.itBusinessPartner,
        itBusinessPartnerName: formInfo.itBusinessPartnerName,
        dataOwner: formInfo.dataOwner,
        dataOwnerName: formInfo.dataOwnerName,
        functionalHeadApproval: formInfo.functionalHeadApproval,
        functionalHeadRemarks: formInfo.functionalHeadRemarks,
        itsTechApproval: formInfo.itsTechApproval,
        itTechRemarkable: formInfo.itTechRemarkable,
        userIdCreated: formInfo.userIdCreated,
        roleAssigned: formInfo.roleAssigned,
        roleCreated: formInfo.roleCreated,
        roleCreatedDescription: formInfo.roleCreatedDescription,
        roleModified: formInfo.roleModified,
        roleModifiedDescription: formInfo.roleModifiedDescription,
        reviewerName: formInfo.reviewerName,
      });
    }
  }, [formInfo]);

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
        SAP Access Form
      </h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <h5 className="text-lg font-semibold text-center">
            To Be Filled By Requestor
          </h5>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="requestDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date</FormLabel>
                  <FormControl>
                    <Input {...field} type="date" placeholder="Asset Owner" />
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
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="employeeName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Employee Name</FormLabel>
                  <FormControl>
                    <Input {...field} type="text" placeholder="Employee Name" />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="currentSapId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Current Sap ID</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      placeholder="Current Sap ID"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="employeeNo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Employee Number</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="number"
                      placeholder="Employee Number"
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
                  <FormLabel>Designation</FormLabel>
                  <FormControl>
                    <Input {...field} type="text" placeholder="Designation" />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="location"
              render={() => (
                <FormItem className="w-full">
                  <FormLabel>Location</FormLabel>
                  <div className="space-y-2">
                    {[
                      "Head Office",
                      "Lahore Office",
                      "Islamabad Office",
                      "Peshawar Office",
                    ].map((loc) => (
                      <FormField
                        key={loc}
                        control={form.control}
                        name="location"
                        render={({ field }) => {
                          const isChecked = field.value?.includes(loc) ?? false;
                          return (
                            <FormItem
                              key={loc}
                              className="flex flex-row items-start space-x-3 space-y-0"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={isChecked}
                                  onCheckedChange={(checked) => {
                                    const newValue = checked
                                      ? [...(field.value || []), loc]
                                      : (field.value || []).filter(
                                          (v) => v !== loc
                                        );
                                    field.onChange(newValue);
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="font-normal">
                                {loc}
                              </FormLabel>
                            </FormItem>
                          );
                        }}
                      />
                    ))}
                  </div>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="areaOffice"
              render={() => (
                <FormItem className="w-full">
                  <FormLabel>Area Offices</FormLabel>
                  <div className="space-y-2">
                    {["Karachi", "Lahore", "Islamabad"].map((office) => (
                      <FormField
                        key={office}
                        control={form.control}
                        name="areaOffice"
                        render={({ field }) => {
                          const isChecked =
                            field.value?.includes(office) ?? false;
                          return (
                            <FormItem
                              key={office}
                              className="flex flex-row items-start space-x-3 space-y-0"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={isChecked}
                                  onCheckedChange={(checked) => {
                                    const newValue = checked
                                      ? [...(field.value || []), office]
                                      : (field.value || []).filter(
                                          (v) => v !== office
                                        );
                                    field.onChange(newValue);
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="font-normal">
                                {office}
                              </FormLabel>
                            </FormItem>
                          );
                        }}
                      />
                    ))}
                  </div>
                </FormItem>
              )}
            />
          </div>

          <h5 className="text-lg font-semibold text-center">
            Required ID & Access on Module(s)
          </h5>
          <div className="grid grid-cols-1 gap-4">
            <FormField
              control={form.control}
              name="requestType"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Request</FormLabel>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select option" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="New">New</SelectItem>
                      <SelectItem value="Modification">Modification</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="rolesRequired"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Roles Required</FormLabel>
                  <Input {...field} placeholder="Roles Required"></Input>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="businessJustification"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Business Justification</FormLabel>
                  <Input
                    {...field}
                    placeholder="Business Justification"
                  ></Input>
                </FormItem>
              )}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="tCodeRequired"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>T.Code Required</FormLabel>
                  <Input {...field} placeholder="T.Code Required"></Input>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="plant"
              render={() => (
                <FormItem className="w-full mt-2">
                  <FormLabel>Plant</FormLabel>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      "IT01",
                      "IT02",
                      "IT03",
                      "IT04",
                      "AD01",
                      "AD02",
                      "AD03",
                    ].map((value) => (
                      <FormField
                        key={value}
                        control={form.control}
                        name="plant"
                        render={({ field }) => {
                          const isChecked =
                            field.value?.includes(value) ?? false;
                          return (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                              <FormControl>
                                <Checkbox
                                  checked={isChecked}
                                  onCheckedChange={(checked) => {
                                    const newValue = checked
                                      ? [...(field.value || []), value]
                                      : (field.value || []).filter(
                                          (v) => v !== value
                                        );
                                    field.onChange(newValue);
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="font-normal">
                                {value}
                              </FormLabel>
                            </FormItem>
                          );
                        }}
                      />
                    ))}
                  </div>
                </FormItem>
              )}
            />
          </div>

          <h5 className="text-lg font-semibold text-center">
            Sales And Marketing
          </h5>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* SALES ORGANIZATION */}
            <div className="w-full mb-6">
              <FormField
                control={form.control}
                name="salesOrganization"
                render={() => (
                  <FormItem className="w-full">
                    <FormLabel>Sales Organization</FormLabel>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {[
                        { value: "1000", label: "1000 - (PSL - I.T)" },
                        { value: "2000", label: "2000 - (PSL - Automotive)" },
                        { value: "3000", label: "3000 - (FZE - I.T)" },
                        { value: "4000", label: "4000 - (FZE - Automotive)" },
                      ].map(({ value, label }) => (
                        <FormField
                          key={value}
                          control={form.control}
                          name="salesOrganization"
                          render={({ field }) => {
                            const isChecked =
                              field.value?.includes(value) ?? false;
                            return (
                              <FormItem className="flex items-center space-x-2">
                                <FormControl>
                                  <Checkbox
                                    checked={isChecked}
                                    onCheckedChange={(checked) => {
                                      const newValue = checked
                                        ? [...(field.value || []), value]
                                        : (field.value || []).filter(
                                            (v) => v !== value
                                          );
                                      field.onChange(newValue);
                                    }}
                                  />
                                </FormControl>
                                <FormLabel className="text-sm font-medium">
                                  {label}
                                </FormLabel>
                              </FormItem>
                            );
                          }}
                        />
                      ))}
                    </div>
                  </FormItem>
                )}
              />
            </div>

            {/* DISTRIBUTION CHANNEL */}
            <div className="w-full mb-6">
              <FormField
                control={form.control}
                name="distributionChannel"
                render={() => (
                  <FormItem className="w-full">
                    <FormLabel>Distribution Channel</FormLabel>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {[
                        "10 - Supplies Sales",
                        "11 - Project Sales",
                        "12 - Technical Sales",
                        "13 - FOB Sales",
                        "20 - Vehicle Sales",
                        "21 - After Sales",
                        "22 - Spare Parts Sales",
                      ].map((label) => {
                        const value = label.split(" - ")[0];
                        return (
                          <FormField
                            key={value}
                            control={form.control}
                            name="distributionChannel"
                            render={({ field }) => {
                              const isChecked =
                                field.value?.includes(value) ?? false;
                              return (
                                <FormItem className="flex items-center space-x-2">
                                  <FormControl>
                                    <Checkbox
                                      checked={isChecked}
                                      onCheckedChange={(checked) => {
                                        const newValue = checked
                                          ? [...(field.value || []), value]
                                          : (field.value || []).filter(
                                              (v) => v !== value
                                            );
                                        field.onChange(newValue);
                                      }}
                                    />
                                  </FormControl>
                                  <FormLabel className="text-sm font-medium">
                                    {label}
                                  </FormLabel>
                                </FormItem>
                              );
                            }}
                          />
                        );
                      })}
                    </div>
                  </FormItem>
                )}
              />
            </div>

            {/* DIVISION */}
            <div className="w-full mb-6">
              <FormField
                control={form.control}
                name="division"
                render={() => (
                  <FormItem className="w-full">
                    <FormLabel>Division</FormLabel>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {[
                        "10 - Hardware Sales",
                        "11 - Software & Licenses",
                        "12 - Hardware & Software",
                        "13 - Project - Contract",
                        "14 - Technical Product",
                        "15 - Maintenance Contract",
                        "20 - Combustible Engine",
                        "21 - Electrical Engine",
                        "22 - Mix Parts",
                      ].map((label) => {
                        const value = label.split(" - ")[0];
                        return (
                          <FormField
                            key={value}
                            control={form.control}
                            name="division"
                            render={({ field }) => {
                              const isChecked =
                                field.value?.includes(value) ?? false;
                              return (
                                <FormItem className="flex items-center space-x-2">
                                  <FormControl>
                                    <Checkbox
                                      checked={isChecked}
                                      onCheckedChange={(checked) => {
                                        const newValue = checked
                                          ? [...(field.value || []), value]
                                          : (field.value || []).filter(
                                              (v) => v !== value
                                            );
                                        field.onChange(newValue);
                                      }}
                                    />
                                  </FormControl>
                                  <FormLabel className="text-sm font-medium">
                                    {label}
                                  </FormLabel>
                                </FormItem>
                              );
                            }}
                          />
                        );
                      })}
                    </div>
                  </FormItem>
                )}
              />
            </div>

            {/* SALES OFFICE */}
            <div className="w-full mb-6">
              <FormField
                control={form.control}
                name="salesOffice"
                render={() => (
                  <FormItem className="w-full">
                    <FormLabel>Sales Office</FormLabel>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {[
                        "1001 - IT - Karachi",
                        "1002 - IT - Lahore",
                        "1003 - IT - Islamabad",
                        "1004 - IT - Peshawar",
                        "2001 - AUDI - Karachi",
                        "2002 - AUDI - Lahore",
                        "2002 - AUDI - Islamabad",
                        "4001 - Bangladesh",
                        "4002 - Srilanka",
                        "4003 - Pakistan",
                      ].map((label) => {
                        const value = label.split(" - ")[0];
                        return (
                          <FormField
                            key={value}
                            control={form.control}
                            name="salesOffice"
                            render={({ field }) => {
                              const isChecked =
                                field.value?.includes(value) ?? false;
                              return (
                                <FormItem className="flex items-center space-x-2">
                                  <FormControl>
                                    <Checkbox
                                      checked={isChecked}
                                      onCheckedChange={(checked) => {
                                        const newValue = checked
                                          ? [...(field.value || []), value]
                                          : (field.value || []).filter(
                                              (v) => v !== value
                                            );
                                        field.onChange(newValue);
                                      }}
                                    />
                                  </FormControl>
                                  <FormLabel className="text-sm font-medium">
                                    {label}
                                  </FormLabel>
                                </FormItem>
                              );
                            }}
                          />
                        );
                      })}
                    </div>
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="saleOtherDetails"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Other Details</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Other Details"></Input>
                  </FormControl>
                </FormItem>
              )}
            ></FormField>
          </div>

          <h5 className="text-lg font-semibold text-center">
            Material Management (M.M)
          </h5>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Purchasing Org */}
            <FormField
              control={form.control}
              name="purchasingOrg"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Purchasing Org</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter Purchasing Org" />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Purchasing Group */}
            <FormField
              control={form.control}
              name="purchasingGroup"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Purchasing Group</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter Purchasing Group" />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Purchasing Document */}
            <FormField
              control={form.control}
              name="purchasingDocument"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Purchasing Document</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter Purchasing Document" />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Movement Type */}
            <FormField
              control={form.control}
              name="movementType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Movement Type</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter Movement Type" />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Other Details */}
            <FormField
              control={form.control}
              name="mmOtherDetails"
              render={({ field }) => (
                <FormItem className="md:col-span-2">
                  <FormLabel>Other Details</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter Additional Details" />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <h5 className="text-lg font-semibold text-center">
            Approval Section
          </h5>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Power User */}
            <FormField
              control={form.control}
              name="powerUser"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Power User</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter Power User" />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="powerUserName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Power User Name</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter Name" />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormLabel className="items-start">Power User Signature</FormLabel>
            {/* <input type="text" disabled /> */}

            <FormField
              control={form.control}
              name="crossModulePower"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cross Module Power</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Cross Module Power" />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="crossModulePowerUserName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cross Module Power User Name</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter Name" />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormLabel className="items-start">
              Cross Module Power User Signature
            </FormLabel>

            {/* IT Business Partner */}
            <FormField
              control={form.control}
              name="itBusinessPartner"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>I.T Business Partner</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter Business Partner" />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="itBusinessPartnerName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>I.T Business Partner Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Enter Business Partner Name"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormLabel className="items-start">
              I.T Business Partner Signature
            </FormLabel>

            <FormField
              control={form.control}
              name="dataOwner"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Data Owner / Head of Department</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter Name" />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="dataOwnerName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Data Owner / Head of Department Name</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter Name" />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormLabel className="items-center">
              Data Owner / Head of Department Signature
            </FormLabel>
          </div>

          <h5 className="text-lg font-semibold text-center">Functional Head</h5>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="functionalHeadApproval"
              render={({ field }) => (
                <FormItem className="m-auto w-1/2">
                  <FormLabel className="m-auto">
                    Functional Head Approval
                  </FormLabel>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Options"></SelectValue>
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Approved">Approved</SelectItem>
                      <SelectItem value="Not Approved">Not Approved</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
            <FormLabel>Signature</FormLabel>
          </div>

          <h5 className="text-lg font-semibold text-center">
            ITS- Tech Approval
          </h5>
          <div className="gap-4">
            <FormField
              control={form.control}
              name="itsTechApproval"
              render={({ field }) => (
                <FormItem className="m-auto w-1/2">
                  <FormLabel className="m-auto">ITS- Tech Approval</FormLabel>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Options"></SelectValue>
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Approved">Approved</SelectItem>
                      <SelectItem value="Not Approved">Not Approved</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormLabel>Manager Technology Signature</FormLabel>
            <FormLabel>General Manager Technology Signature</FormLabel>
          </div>
          <FormField
            control={form.control}
            name="itTechRemarkable"
            render={({ field }) => (
              <FormItem>
                <FormLabel>IT Technology Remarkable</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="IT Technology Remarkable" />
                </FormControl>
              </FormItem>
            )}
          />

          <h5 className="text-lg font-semibold text-center">SAP BASIS</h5>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* User ID Created */}
            <FormField
              control={form.control}
              name="userIdCreated"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>User I.D Created</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter User ID" />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Role Assigned */}
            <FormField
              control={form.control}
              name="roleAssigned"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Role Assigned</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter Assigned Role" />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Role Created */}
            <FormField
              control={form.control}
              name="roleCreated"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Role Created</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter Created Role" />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="roleCreatedDescription"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Role Created Description</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Description of Created Role"
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Role Modified */}
            <FormField
              control={form.control}
              name="roleModified"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Role Modified</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter Modified Role" />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="roleModifiedDescription"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Role Modified Description</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Description of Modified Role"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <h5 className="text-lg font-semibold text-center">Reviewer</h5>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="reviewerName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Review By</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Review By" />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormLabel>Signature</FormLabel>
          </div>

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

export default SapFormItem;
