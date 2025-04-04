import React from "react";

const InputComponent = ({
  label = "None",
  name = "",
  type = "text",
  placeholder = "",
  defaultValue = "",
  options = [],
  value = null,
}) => {
  if (type === "datetime-local" && defaultValue === "") {
    const currentDate = new Date();
    defaultValue = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${currentDate
      .getDate()
      .toString()
      .padStart(2, "0")}T${currentDate
      .getHours()
      .toString()
      .padStart(2, "0")}:${currentDate
      .getMinutes()
      .toString()
      .padStart(2, "0")}`;
  }

  return (
    <div className="mb-6">
      <label htmlFor={name} className="block text-xl font-medium text-gray-700 mb-2">
        {label}
      </label>
      {type === "select" ? (
        <select
          name={name}
          id={name}
          className="w-full p-3 bg-gradient-to-r from-pink-100 to-teal-100 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-500 transition duration-300 ease-in-out"
          defaultValue={options[0]}
        >
          {options.map((optionValue, index) => (
            <option value={optionValue} key={index}>
              {optionValue}
            </option>
          ))}
        </select>
      ) : value ? (
        <input
          type={type}
          id={name}
          name={name}
          className="w-full p-3 bg-gradient-to-r from-pink-100 to-teal-100 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-500 transition duration-300 ease-in-out"
          placeholder={placeholder}
          defaultValue={defaultValue}
          value={value}
        />
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          className="w-full p-3 bg-gradient-to-r from-pink-100 to-teal-100 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-500 transition duration-300 ease-in-out"
          placeholder={placeholder}
          defaultValue={defaultValue}
        />
      )}
    </div>
  );
};

export default InputComponent;
