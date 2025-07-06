import React from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
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
    form.reset();
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 px-4">
      <div className="w-full max-w-md p-10 bg-white rounded-2xl shadow-xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-6">
          Sign In to Your Account
        </h2>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmitForm)}
            className="space-y-5"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm text-gray-700">Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      placeholder="Enter your email"
                      className="rounded-lg h-10 text-base"
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm text-gray-700">
                    Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="password"
                      placeholder="Enter your password"
                      className="rounded-lg h-10 text-base"
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <Button
              className="w-full py-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium text-base shadow-md"
              type="submit"
            >
              Login
            </Button>
          </form>
        </Form>

        {auth.message && auth.error && (
          <div className="text-center mt-4 text-red-600 font-medium text-sm">
            {auth.message}
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
