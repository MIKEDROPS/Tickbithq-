import React from "react";

const Select = ({
  data,
  labelName,
  placeholder,
  styles,
  width,
  minWidth,
  required,
  onChangeEvent,
}) => {
  return (
    <div
      className={`flex flex-col w-full gap-2`}
    >
      {labelName && (
        <label className="text-[15px] font-[500] text-[#000]" htmlFor="">
          {labelName}
        </label>
      )}
      <select
        onChange={onChangeEvent}
        required={required}
        className={` ${styles} p-5 outline-none border-[1px] text-[12px] bg-[#f2f2f2] rounded-[16px] font-medium text-[rgba(0,0,0,0.28)]`}
      >
        <option
          value={""}
          className="text-[12px] font-medium text-[rgba(0,0,0,0.28)]"
        >
          {placeholder}
        </option>
        {data?.map((e, i) => {
          return <option key={i}>{e}</option>;
        })}
      </select>
    </div>
  );
};

export default Select;
