import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type FeedBack = {
  email: string;
  message: string;
};

const FeedBack = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FeedBack>();
  const onSubmit: SubmitHandler<FeedBack> = (data) => {
    console.log(data);
  };
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-black/30 backdrop-blur-sm rounded-lg shadow-lg border border-purple-500/30">
      <h1 className="text-2xl font-bold text-center text-white mb-4">
        Wubba Lubba Dub Dub!
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="mb-4">
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            type="email"
            name="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 bg-purple-900/50 border border-green-500/50 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent text-white placeholder-gray-300"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-2">
              {errors.email.message?.toString()}
            </p>
          )}
        </div>
        <div className="mb-4">
          <textarea
            {...register("message", {
              required: "Message is required",
            })}
            name="message"
            placeholder="Enter your message"
            rows={4}
            className="w-full px-4 py-2 bg-purple-900/50 border border-green-500/50 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent text-white placeholder-gray-300 resize-none"
          />
          {errors.message && (
            <p className="text-red-500 text-sm">
              {errors.message.message?.toString()}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-green-600 text-white font-bold rounded-md hover:from-purple-700 hover:to-green-700 transition duration-300 shadow-md cursor-pointer"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FeedBack;
