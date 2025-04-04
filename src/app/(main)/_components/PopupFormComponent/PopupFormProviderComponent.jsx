"use client";
import { XCircleIcon } from "lucide-react";
import React, { useState } from "react";
import InputComponent from "./InputComponent";
import { TASK_TAG } from "@/app/data/taskTags";

const PopupFormProviderComponent = ({
  children,
  formTitle = "Form Title",
  submitBtnLabel = "submit",
  handleOnSubmit = () => {},
  inputs = {
    title: { label: "Title", type: "text" },
    tags: { label: "Tags", type: "select", options: Object.values(TASK_TAG) },
  },
}) => {
  const [hidden, setHidden] = useState(true);
  const [error, setError] = useState(null);
  const inputKeys = Object.keys(inputs);

  const handleOnClick = () => {
    setHidden(!hidden);
  };

  const onSubmit = async (data) => {
    data.preventDefault();
    const submitData = {};

    inputKeys.forEach((key) => {
      submitData[key] = data.target[key].value;
    });

    const { success, message } = await handleOnSubmit(submitData);

    if (success) {
      data.target.reset();
      handleOnClick();
    } else {
      setError(message);
    }
  };

  return (
    <div>
      <div onClick={handleOnClick} id="openContactForm">
        {children}
      </div>

      {/* Modal Popup */}
      <div
        className="fixed z-10 inset-0 overflow-y-auto h-dvh w-dvw"
        style={{ visibility: hidden ? "hidden" : "visible" }}
      >
        <div className="flex items-center justify-center min-h-screen">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 w-1/2 z-10 max-w-xl p-6 shadow-lg rounded-2xl border border-gray-300">
            <div className="flex justify-center items-center mb-4">
              {/* Title with Centered Text and Color */}
              <h2 className="text-2xl font-semibold text-blue-600 capitalize">
                {formTitle}
              </h2>
              <button
                className="absolute top-4 right-4 text-gray-600 hover:text-red-600 transition duration-200"
                onClick={handleOnClick}
              >
                <XCircleIcon size={25} />
              </button>
            </div>

            {/* Error Display */}
            {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

            {/* Form */}
            <form onSubmit={onSubmit} method="post" id="popup-form">
              {inputKeys.map((key, index) => {
                const input = inputs[key];
                const inputType = input.type ? input.type : "text";
                const defaultValue = input.defaultValue ? input.defaultValue : "";

                return (
                  <InputComponent
                    key={index}
                    label={input.label}
                    name={key}
                    type={inputType}
                    options={input.type === "select" ? input.options : undefined}
                    defaultValue={defaultValue}
                  />
                );
              })}

              {/* Submit Button */}
              <div className="w-full justify-end flex mt-6">
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-500 focus:outline-none transition duration-200 border-2 border-blue-600"
                >
                  {submitBtnLabel}
                </button>
              </div>
            </form>
          </div>

          {/* Modal Overlay */}
          <div
            className="fixed inset-0 z-0 bg-black/50"
            onClick={handleOnClick}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default PopupFormProviderComponent;
