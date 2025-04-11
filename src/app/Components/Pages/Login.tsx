import Image from "next/image";
import React from "react";
import TailwindButton from "./TailwindButton";

const Login = () => {
  return (
    <div className="relative flex flex-row justify-end h-screen">
      {/* Logo in Top Left */}
      <div className="absolute top-4 left-4">
        <Image
          src="/385fbe6f6798a1d2828dbb0a476e0aac.jpg"
          alt="logo"
          width={70}
          height={80}
          className="rounded-xl"
        />
      </div>

      {/* Left Side (Login Form) */}
      <div className="flex justify-center items-center text-center flex-col w-1/2">
        {/* <h2 className="text-xl font-semibold text-medPerple shadow-md mb-6">
          "Life is short, make it sweet. Log in and discover a world of delightful cakes!" 
        </h2> */}

        <input
          type="text"
          placeholder="Username or email"
          className="mb-4 mt-4 w-[300px] p-2 border-4 rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="mb-4 w-[300px] p-2 border-4 rounded-lg"
        />
        <TailwindButton />
      </div>

      {/* Right Side (Pink Section) */}
      <div className="bg-Pink h-screen flex justify-center items-center w-[800px] rounded-lg">
        <Image
          src="/deva-williamson-tW0Ix_Ajg6Y-unsplash.jpg"
          alt="cake Image"
          width={380}
          height={80}
          className="rounded-xl shadow-xl m-6"
        />
      </div>
    </div>
  );
};

export default Login;
