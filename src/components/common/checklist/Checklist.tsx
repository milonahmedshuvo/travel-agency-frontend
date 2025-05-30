import React from "react";
import { CheckCircle } from "lucide-react";

type ChecklistItem = {
  title: string;
};

type ChecklistProps = {
  items: ChecklistItem[];
};

const Checklist: React.FC<ChecklistProps> = ({items }) => {
  return (
    <div className=" p-6 bg-white rounded-lg mt-5">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">What to bring</h2>

      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center space-x-2 text-gray-700">
            <CheckCircle className="text-green-500" size={20} />
            <span>{item.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Checklist;
