import Link from "next/link";
import { JSX } from "react";

type InfoItemProps = {
  title: string;
  description: string | JSX.Element;
};

const InfoItem = ({ title, description }: InfoItemProps) => {
  return (
    <div className="flex items-start">
      <h3 className="font-semibold text-slate-800 mr-2">{title}</h3>
      <p className="text-slate-700">{description}</p>
    </div>
  );
};

export default function ImportantInfo() {
  return (
    <div className="bg-white rounded-lg  p-6 md:p-8 mt-5">
      <h2 className="text-2xl md:text-3xl font-medium text-slate-800 mb-6">
        Important information:
      </h2>
      <div className="space-y-4">
        <InfoItem
          title="Meeting Point:"
          description={
            <Link
              href="https://maps.app.goo.gl/DfYzfDTi9igvkp86A"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              https://maps.app.goo.gl/DfYzfDTi9igvkp86A
            </Link>
          }
        />
        <InfoItem
          title="Transportation:"
          description="[Included/Optional with additional charge]"
        />
        <InfoItem
          title="Dress Code:"
          description="Comfortable clothes & walking shoes recommended"
        />
        <InfoItem
          title="Mobile Ticket:"
          description="Accepted – show on arrival"
        />
        <InfoItem
          title="Age Requirement:"
          description="Minimum age required (if applicable)"
        />
      </div>
    </div>
  );
}
