import React, { useState, useEffect } from "react";
import FormField from "./FormField";

const DynamicForm = ({ schema }) => {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    console.log("Form data updated:", formData);
  }, [formData]);

  const handleChange = (name, value, type) => {
    setFormData((prev) => {
      if (type === "checkbox") {
        const prevValues = prev[name] || [];
        return {
          ...prev,
          [name]: prevValues.includes(value)
            ? prevValues.filter((v) => v !== value)
            : [...prevValues, value],
        };
      }
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-lg border border-gray-200">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">{schema.title}</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {schema.fields.map((field, index) => (
          <FormField key={index} field={field} onChange={handleChange} />
        ))}
        <button
          type="submit"
          className="w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Submit
        </button>
      </form>
      <pre className="mt-6 p-4 bg-gray-100 rounded-lg text-sm border border-gray-300">
        {JSON.stringify(formData, null, 2)}
      </pre>
    </div>
  );
};

export default DynamicForm;
