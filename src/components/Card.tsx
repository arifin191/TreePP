import React from "react";

interface CardProps {
  title: string;
  description: string;
  buttonText: string;
  icon: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  buttonText,
  icon,
}) => {
  return (
    <div className="flex items-center justify-center">
      <div
        className="flex flex-col bg-white rounded-lg shadow-lg p-6 mx-2"
        style={{ height: "400px", width: "250px" }}
      >
        <div className="text-4xl font-semibold mb-2 text-black align-middle">
          <h2 style={{ minHeight: "7rem" }}>{title}</h2>
        </div>

        <p className="text-gray-600 mb-4" style={{ minHeight: "2.5rem" }}>
          {description}
        </p>
        <div className="flex justify-center">
          <img
            className="w-20 h-auto text-gray-600 mr-2"
            src={icon}
            alt="Icon"
          />
        </div>
        {/* set the transition duration for hovering to 300 ms */}
        <button className="uppercase bg-green-500 hover:bg-green-700 text-black hover:text-white px-4 py-2 rounded transition duration-300">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Card;
