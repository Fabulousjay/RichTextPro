import React from 'react';

interface FormRowInputProps {
  label: string;
  type: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormRowInput: React.FC<FormRowInputProps> = ({ label, type, value, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">{label}</label>
      <input
        className="w-full bg-[#FAFAFA] border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default FormRowInput;
