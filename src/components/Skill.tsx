import React from "react";

export default function Skill(props: any) {
  return (
    <div className="w-fit px-4 py-2 bg-white md:text-xl text-lg font-bold border-4 border-black rounded-full">
      {props.skill}
    </div>
  );
}
