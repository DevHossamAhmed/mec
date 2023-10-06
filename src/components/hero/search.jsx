"use client";

import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";

export const Search = () => {

  return (
    <form className=" relative mt-[12px] ">
        <input
          type="search"
          name="search"
          className=" bg-[#191a25] h-11 px-3 w-[450px] xl:w-[350px] rounded-2xl border text-xs border-none focus:outline-none"
          placeholder="ماذا تريد ان تتعلم؟"
        />
        <button className="absolute right-[420px] xl:right-[300px] top-1/2 -translate-y-1/2 p-4">
          <BiSearchAlt2 className="text-[#565b64] text-2xl " />
        </button>
    </form>
  );
};