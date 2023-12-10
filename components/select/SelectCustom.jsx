"use client";
import Select from "react-select";
import "@/assets/css/select.css";
import { useId } from "react";

const SelectCustom = ({
  options = [],
  placeholder = "Select..",
  onChange = (e) => {
    console.log("Selected value !", e.value);
  },
}) => {
  return (
    <Select
      instanceId={useId()}
      options={options}
      classNames={{
        control: () => {
          return "!border-transparent !bg-transparent !cursor-pointer";
        },
        container: () => {
          return "bg-base-200 rounded-md";
        },
        indicatorSeparator: () => {
          return "!bg-transparent";
        },
        dropdownIndicator: () => {
          return "bg-base-200 !cursor-pointer";
        },
        menu: () => {
          return "!bg-base-200";
        },
        menuList: () => {
          return "!bg-base-200";
        },
        menuPortal: () => {
          return "!bg-base-200";
        },
        option: (e) => {
          return e.isSelected
            ? "!text-[14px]"
            : "!text-[14px] !cursor-pointer !bg-base-200";
        },
        singleValue: () => {
          return "!text-white text-[14px]";
        },
        placeholder: () => {
          return "!text-[#ffffffb0] !text-[14px]";
        },
      }}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default SelectCustom;
