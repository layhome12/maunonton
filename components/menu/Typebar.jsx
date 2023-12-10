"use client";

import { useState } from "react";

const TypeBar = ({ options, selected = 0 }) => {
  const [select, setSelect] = useState(selected);

  return (
    <ul className="menu menu-horizontal bg-base-200 rounded-xl p-1">
      {options.map((val, key) => {
        return (
          <li>
            <button
              className={`mx-[0.15rem] ${
                select == val.id ? "active !text-[#2f80ed]" : ""
              }`}
              onClick={() => setSelect(val.id)}
            >
              {val.text}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default TypeBar;
