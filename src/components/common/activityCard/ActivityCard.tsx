import { Clock, DollarSign, Users, Globe } from "lucide-react";

type InfoItemProps = {
  icon: React.ElementType;
  title: string;
  description: string;
};

// Reusable InfoItem Component
function InfoItem({ icon: Icon, title, description }: InfoItemProps) {
  return (
    <div className="flex items-start">
      <div className="mt-1 mr-3">
        <Icon className="h-5 w-5 text-slate-600" />
      </div>
      <div>
        <h3 className="font-semibold text-slate-800">{title}</h3>
        <p className="text-slate-700">{description}</p>
      </div>
    </div>
  );
}

export default function ActivityCard() {
  return (
    <div className="bg-white rounded-lg p-6 md:p-8">
      <h2 className="text-2xl md:text-3xl font-medium text-slate-800 mb-6">About this activity</h2>
      <div className="space-y-4">
        <InfoItem icon={Clock} title="Duration:" description="8 Hours (Full-day tour)" />
        <InfoItem icon={DollarSign} title="Price:" description="$129 per person" />
        <InfoItem icon={Users} title="Group Size:" description="Small groups (Max 12 people)" />
        <InfoItem icon={Globe} title="Languages:" description="English, German, Bengali" />
      </div>
    </div>
  );
}