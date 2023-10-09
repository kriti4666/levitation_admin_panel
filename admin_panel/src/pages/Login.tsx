import React from "react";
import { Input } from "../components/Input";
import { FormProvider, useForm } from "react-hook-form";

const Login = () => {
  const methods = useForm();
  

  return (
    <div>
      <FormProvider {...methods}>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign up
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form
              className="space-y-6"
              onSubmit={(e) => e.preventDefault()}
              noValidate
            >
              <Input
                label="Email Address"
                type="text"
                id="name"
                name="email"
                placeholder="enter your email address..."
              />
              <Input
                label="Password"
                type="text"
                id="password"
                name="password"
                placeholder="enter your password..."
              />

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </FormProvider>
    </div>
  );
};

export default Login;
