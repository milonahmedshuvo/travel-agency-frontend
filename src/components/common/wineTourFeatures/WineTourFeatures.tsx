import { ChevronUp } from "lucide-react";

interface Feature {
  title: string;
  description: string;
}

interface FeatureListProps {
  heading: string;
  features: Feature[];
}

export default function WineTourFeatures({ heading, features }: FeatureListProps) {
  return (
    <div className="px-4 py-8 md:py-12 bg-white mt-5 rounded-lg">
      <h2 className="text-3xl font-medium mb-8 text-gray-800">{heading}</h2>
      <div className="space-y-6">
        {features.map((feature, index) => (
          <FeatureItem key={index} title={feature.title} description={feature.description} />
        ))}
      </div>
    </div>
  );
}

function FeatureItem({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex items-start gap-3 bg-white">
      <div className="mt-1 text-blue-500 flex-shrink-0">
        <ChevronUp className="w-5 h-5 rotate-90" />
      </div>
      <div>
        <h3 className="text-xl font-medium text-gray-800">{title} –</h3>
        <p className="mt-1 text-gray-600">{description}</p>
      </div>
    </div>
  );
}
