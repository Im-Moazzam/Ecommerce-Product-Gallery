import React, { useState, useEffect } from "react";
import GalleryCard from "../components/GalleryCard";
import axios from "axios";

function Gallery() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h3 className="text-3xl font-bold text-center mt-10 mb-5">
        Our Collection
      </h3>
      <div className="grid grid-cols-4 gap-10">
        {products.slice(0, 8).map((product) => (
          <GalleryCard
            key={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
