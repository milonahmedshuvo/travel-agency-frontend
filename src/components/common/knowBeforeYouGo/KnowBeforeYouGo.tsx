import { FaExclamationTriangle } from "react-icons/fa";

type InfoItem = {
  title: string;
  description: string;
};

type KnowBeforeYouGoProps = {
  items: InfoItem[];
};



const KnowBeforeYouGo: React.FC<KnowBeforeYouGoProps> = ({ items }) => {
  return (
    <div className="p-6 bg-white rounded-lg mt-5">
      <h2 className="text-xl font-medium mb-4">Know before you go:</h2>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start space-x-3">
            <FaExclamationTriangle className="text-yellow-500 mt-1" />
            <div>
              <strong className="font-medium">{item.title}:</strong> {item.description}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default KnowBeforeYouGo;