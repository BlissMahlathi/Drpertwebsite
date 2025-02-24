import { Link } from "react-router-dom";

const ServiceCard = ({ imgSrc, title, link }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden w-80">
      <img src={imgSrc} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        <Link to={link} className="text-yellow-500 hover:underline">Learn More</Link>
      </div>
    </div>
  );
};

export default ServiceCard;