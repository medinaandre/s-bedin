import { React, useState } from "react";

import "./ImageGallery.css";
import image1 from "./images/image1.png";
import image2 from "./images/image2.png";
import image3 from "./images/image3.png";
import image4 from "./images/image4.png";
import image5 from "./images/image5.png";
import image6 from "./images/image6.png";
import image7 from "./images/image7.png";
import image8 from "./images/image8.png";

const ImageGallery = () => {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div>
      <div className="gallery-container">
        {images.map((src, index) => (
          <div
            key={index}
            className="image-wrapper"
            onClick={() => setSelectedImage(src)}
          >
            <img
              src={src}
              alt={`Gallery ${index + 1}`}
              className="gallery-image"
            />
          </div>
        ))}
      </div>

      {/* Modal da Imagem Expandida */}
      {selectedImage && (
        <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
          <div className="modal-content">
            <img src={selectedImage} alt="Expanded" className="modal-image" />
            <button
              className="close-button"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
