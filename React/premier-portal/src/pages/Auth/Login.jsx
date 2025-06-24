import React from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
} from "../../components/ui/form";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../Redux/Auth/ActionType";

function Login() {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const dispatch = useDispatch();
  const { auth } = useSelector((store) => store);

  function onSubmitForm(data) {
    dispatch(login(data));
    console.log(data);
    form.email = "";
    form.password = "";
  }

  return (
    <div className="w-1/3">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmitForm)}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input {...field} type="text" placeholder="Email"></Input>
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="my-4 w-full"
                    {...field}
                    type="password"
                    placeholder="Password"
                  ></Input>
                </FormControl>
              </FormItem>
            )}
          />

          <Button className="w-full sm:text-sm md:text-lg  xxl:text-3xl">
            Login
          </Button>
        </form>
      </Form>
      {auth.message && auth.error && (
        <div className="text-center mt-4 text-red-500 font-bold">
          {auth.message}
        </div>
      )}
    </div>
  );
}

export default Login;
