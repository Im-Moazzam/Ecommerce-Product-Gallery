import React from "react";

function GalleryCard(props) {
  return (
    <div className="border rounded-lg max-w-xs shadow-md hover:shadow-lg transition-transform hover:-translate-y-1 mx-auto">
      {/* Image wrapper with fixed height */}
      <div className="bg-white p-4 rounded-t-lg flex items-center justify-center h-64">
        <img
          src={props.image}
          alt={props.title}
          className="max-h-full max-w-full object-contain"
        />
      </div>

      {/* Text wrapper with background color */}
      <div className="bg-gray-100 p-4 rounded-b-lg text-center">
        <p className="font-semibold text-gray-700">{props.title}</p>
        <p className="text-blue-600 font-bold text-2xl">${props.price}</p>
      </div>
    </div>
  );
}

export default GalleryCard;
