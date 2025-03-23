import React from "react";
import { CheckCircle } from "lucide-react";

type ChecklistItem = {
  text: string;
};

type ChecklistProps = {
  title: string;
  items: ChecklistItem[];
};

const Checklist: React.FC<ChecklistProps> = ({ title, items }) => {
  return (
    <div className=" p-6 bg-white rounded-lg mt-5">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">{title}</h2>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center space-x-2 text-gray-700">
            <CheckCircle className="text-green-500" size={20} />
            <span>{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Checklist;
