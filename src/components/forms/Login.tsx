"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useState } from "react";
import OtpVerification from "./Otp";
import Image from "next/image";
import Link from "next/link";

const loginSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Minimum 6 characters"),
});

type LoginFormData = z.infer<typeof loginSchema>;

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({ resolver: zodResolver(loginSchema) });

  const [loading, setLoading] = useState(false);
  const [showOtp, setShowOtp] = useState(false);
  const router = useRouter();

  const onSubmit = async (data: LoginFormData) => {
    setLoading(true);
    try {
      // fake login API call
      const fakeToken = "fake_jwt_token";
      Cookies.set("token", fakeToken);
      setShowOtp(true);
    } catch (err) {
      console.error("Login failed");
    } finally {
      setLoading(false);
    }
  };

  if (showOtp) return <OtpVerification />;

  return (
    <div className="flex items-center justify-center h-screen overflow-hidden">
      <div className="authImage-wrapper w-[70%]">
        <img
          src="https://mkt.cdnpk.net/web-app/media/freepik-15-2000.webp"
          alt=""
          className="img-fluid object-cover"
        />
      </div>
      <div className="authDiv-wrapper w-[30%]">
        <form onSubmit={handleSubmit(onSubmit)} className="w-[70%] mx-auto">
          <div className="logo-wrapper text-center">
            <h1 className="text-3xl font-bold pb-[50px]">LOGO</h1>
            <h2 className="text-[20px] text-center font-semibold pb-2">
              Log in
            </h2>
            <h2 className="text-[15px] text-center font-semibold">
              Welcome Back!
            </h2>
          </div>
          <div className="flex justify-center items-center py-5">
            <div className="flex justify-center items-center bg-[var(--btnColor)] h-[80px] w-[80px] rounded-full text-3xl font-semibold text-white">
              P
            </div>
          </div>
          <div className="py-3">
            <label className="block text-sm font-semibold">Email</label>
            <input
              type="email"
              {...register("email")}
              className="w-full mt-1 p-2 border rounded-md text-[14px]"
              placeholder="Enter your email id"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div className="pt-2 pb-4">
            <label className="block text-sm font-semibold">Password</label>
            <input
              type="password"
              {...register("password")}
              className="w-full mt-1 p-2 border rounded-md text-[14px]"
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          <div className="flex items-center gap-[5px] pb-4">
            <input type="checkbox" name="" id="" />
            <label htmlFor="checkbox" className="text-sm font-medium">
              Stay logged in
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="cusBtn w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          <div className="py-4 text-center">
            <p className="mb-3 anchorColor"><Link href="/">I forgot my password</Link></p>
            <p>Don’t you have an account?<Link href="/" className="anchorColor">{" "}Sign up</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
