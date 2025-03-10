import React, { useEffect, useState } from "react";

const FormField = ({ field, onChange }) => {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    console.log(`Field "${field.name}" updated:`, inputValue);
  }, [inputValue]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? value : value;
    setInputValue(newValue);
    onChange(name, newValue, type);
  };

  switch (field.type) {
    case "text":
    case "email":
      return (
        <div className="flex flex-col">
          <label className="font-medium text-gray-700 mb-1">
            {field.label}
          </label>
          <input
            type={field.type}
            name={field.name}
            required={field.required}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition duration-200 shadow-sm"
            onChange={handleChange}
          />
        </div>
      );

    case "select":
      return (
        <div className="flex flex-col">
          <label className="font-medium text-gray-700 mb-1">
            {field.label}
          </label>
          <select
            name={field.name}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition duration-200 shadow-sm"
            onChange={handleChange}
          >
            <option value="">Select</option>
            {field.options.map((option, i) => (
              <option key={i} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      );

    case "checkbox":
      return (
        <div className="flex flex-col">
          <label className="font-medium text-gray-700 mb-1">
            {field.label}
          </label>
          <div className="flex flex-wrap gap-4 mt-2">
            {field.options.map((option, i) => (
              <label key={i} className="flex items-center">
                <input
                  type="checkbox"
                  name={field.name}
                  value={option}
                  className="mr-2 h-5 w-5 text-blue-600 border-gray -300 rounded focus:ring-blue-500"
                  onChange={handleChange}
                />
                <span className="text-gray-600">{option}</span>
              </label>
            ))}
          </div>
        </div>
      );

    case "section":
      return (
        <div className="p-4 border border-gray-300 rounded-lg bg-gray-50 mb-4">
          <h3 className="font-semibold text-gray-700 mb-2">{field.label}</h3>
          {field.fields.map((subField, i) => (
            <FormField key={i} field={subField} onChange={onChange} />
          ))}
        </div>
      );

    default:
      return null;
  }
};

export default FormField;
