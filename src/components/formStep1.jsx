import { useState } from "react";
import Button from "./button";

export default function FormStep1({
  count,
  handleSubmit1,
  name,
  email,
  number,
  setEmail,
  setName,
  setNumber,
  errorName,
  errorEmail,
  errorNumber,
}) {
  return (
    <form
      onSubmit={handleSubmit1}
      className="flex flex-col md:static absolute top-[120px] md:mr-[70px] md:rounded-none rounded-lg bg-white py-8 gap-7 w-[90%] md:w-[50%] px-5 md:shadow-none shadow-lg"
    >
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Personal info</h1>
        <p className="text-gray-500 text-sm">
          Please enter your name, email address and phone number
        </p>
      </div>
      <div className="flex flex-col gap-3 md:gap-5">
        <div className="flex flex-col gap-2 text-xs">
          <span className="flex flex-row justify-between w-full">
            <label htmlFor="name" className="font-semibold">
              Name
            </label>
            <p
              className={`${
                errorName ? "flex" : "hidden"
              } text-red-500 font-semibold`}
            >
              this field is required
            </p>
          </span>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            id="name"
            placeholder="e.g stephen king"
            className="border outline-1 outline-gray-400 border-gray-300 rounded-md px-3 py-3"
          />
        </div>
        <div className="flex flex-col gap-2 text-xs">
          <span className="flex flex-row justify-between w-full">
            <label htmlFor="name" className="font-semibold">
              Email address
            </label>
            <p
              className={`${
                errorEmail ? "flex" : "hidden"
              } text-red-500 font-semibold`}
            >
              this field is required
            </p>
          </span>

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            id="Email address"
            placeholder="e.g stephenking@email"
            className="border outline-1 outline-gray-400 border-gray-300 rounded-md px-3 py-3"
          />
        </div>
        <div className="flex flex-col gap-2 text-xs">
          <span className="flex flex-row justify-between w-full">
            <label htmlFor="name" className="font-semibold">
              Phone number
            </label>
            <p
              className={`${
                errorNumber ? "flex" : "hidden"
              } text-red-500 font-semibold`}
            >
              this field is required
            </p>
          </span>
          <input
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            type="text"
            id="name"
            placeholder="e.g +1 234 567 890"
            className="border outline-1 outline-gray-400 border-gray-300 rounded-md px-3 py-3"
          />
        </div>
        <div className="w-full mt-[40px] items-end flex text-white justify-end ">
          {count < 4 ? <Button>Next Step</Button> : <Button>Confirm</Button>}
        </div>
      </div>
    </form>
  );
}
