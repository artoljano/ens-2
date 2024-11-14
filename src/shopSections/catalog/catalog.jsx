import React, { useEffect, useState } from "react";
import "./catalog.css";

import Disc from "../../assets/products/disc-cat.png";
import Disc1 from "../../assets/products/disc-cat-back.png";

import CapAc from "../../assets/products/cap-ac.png";
import CapAc1 from "../../assets/products/cap-ac-back.png";

// import { products } from "../../data/catalog";

export const products = [
  {
    id: 1,
    name: "DISC Lite5",
    description:
      "The DISC Lite5 is a compact, high-performance access point designed for point-to-point wireless connections. With its integrated directional antenna, it offers reliable, high-speed connectivity over long distances on the 5 GHz frequency, minimizing interference and ensuring strong signal stability—ideal for efficient, cost-effective network expansion.",
    imageUrl: Disc,
    hImageUrl: Disc1,
    category: "Network",
  },
  {
    id: 2,
    name: "CAP AC",
    description:
      "The CAP AC is a dual-band, high-performance access point designed for indoor wireless coverage. It delivers fast, reliable connectivity with 2.4 GHz and 5 GHz support, making it ideal for high-density environments. With a sleek design and easy ceiling or wall mounting, it ensures seamless, powerful Wi-Fi coverage.",
    imageUrl: CapAc,
    hImageUrl: CapAc1,
    category: "Lighting",
  },
  {
    id: 3,
    name: "DISC Lite5",
    description:
      "The DISC Lite5 is a compact, high-performance access point designed for point-to-point wireless connections. With its integrated directional antenna, it offers reliable, high-speed connectivity over long distances on the 5 GHz frequency, minimizing interference and ensuring strong signal stability—ideal for efficient, cost-effective network expansion.",
    imageUrl: Disc,
    hImageUrl: Disc1,
    category: "Network",
  },
  {
    id: 4,
    name: "CAP AC",
    description:
      "The CAP AC is a dual-band, high-performance access point designed for indoor wireless coverage. It delivers fast, reliable connectivity with 2.4 GHz and 5 GHz support, making it ideal for high-density environments. With a sleek design and easy ceiling or wall mounting, it ensures seamless, powerful Wi-Fi coverage.",
    imageUrl: CapAc,
    hImageUrl: CapAc1,
    category: "Electric",
  },
  {
    id: 5,
    name: "DISC Lite5",
    description:
      "The DISC Lite5 is a compact, high-performance access point designed for point-to-point wireless connections. With its integrated directional antenna, it offers reliable, high-speed connectivity over long distances on the 5 GHz frequency, minimizing interference and ensuring strong signal stability—ideal for efficient, cost-effective network expansion.",
    imageUrl: Disc,
    hImageUrl: Disc1,
    category: "Network",
  },
  {
    id: 6,
    name: "CAP AC",
    description:
      "The CAP AC is a dual-band, high-performance access point designed for indoor wireless coverage. It delivers fast, reliable connectivity with 2.4 GHz and 5 GHz support, making it ideal for high-density environments. With a sleek design and easy ceiling or wall mounting, it ensures seamless, powerful Wi-Fi coverage.",
    imageUrl: CapAc,
    hImageUrl: CapAc1,
    category: "Lighting",
  },
];

function Catalog() {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(products);

  let filters = ["GRMS", "Network", "Electric", "Lighting"];

  const handleFilterButtonClick = (selectedCategory) => {
    if (selectedFilters.includes(selectedCategory)) {
      let filters = selectedFilters.filter((el) => el != selectedCategory);
      setSelectedFilters(filters);
    } else {
      setSelectedFilters([...selectedFilters, selectedCategory]);
    }
  };

  useEffect(() => {
    filterProducts();
  }, [selectedFilters]);

  const arrayChunk = (arr, n) => {
    const array = arr.slice();
    const chunks = [];
    while (array.length) chunks.push(array.splice(0, n));
    return chunks;
  };

  const filterProducts = () => {
    if (selectedFilters.length > 0) {
      let tempProducts = selectedFilters.map((selectedCategory) => {
        let temp = products.filter(
          (product) => product.category === selectedCategory
        );
        return temp;
      });
      setFilteredProducts(tempProducts.flat());
    } else {
      setFilteredProducts([...products]);
    }
  };

  const [hoveredIndex, setHoveredIndex] = useState(null); // Track hovered item index

  // Mouse enter handler
  const handleMouseEnter = (index) => {
    setHoveredIndex(index); // Set the hovered index when a product is hovered
  };

  // Mouse leave handler
  const handleMouseLeave = () => {
    setHoveredIndex(null); // Reset hovered index when mouse leaves
  };

  return (
    <section className="catalog section__padding">
      {/* <div className="catalog-container"> */}

      <div className="catalog-filter">
        {filters.map((category, index) => (
          <button
            onClick={() => handleFilterButtonClick(category)}
            className={`button ${
              selectedFilters?.includes(category) ? "active" : ""
            }`}
            key={`filters-${index}`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="catalog-filter-divider section__padding"></div>
      <div className="catalog-container">
        {arrayChunk(filteredProducts, 3).map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="catalog-row col-12 col-md-6 col-xl-4 p-4"
          >
            {row.map((product, productIndex) => (
              <div
                key={product.id} // Use a unique product id if available
                className="catalog-single col-12 col-md-6 col-xl-4 p-4"
              >
                <div
                  onMouseEnter={() => handleMouseEnter(product.id)} // Set the hover state for the current product
                  onMouseLeave={handleMouseLeave} // Reset hover state on mouse leave
                  className="catalog-image-container"
                  style={{
                    backgroundImage: `url(${
                      hoveredIndex === product.id
                        ? product.hImageUrl
                        : product.imageUrl
                    })`, // Set the appropriate background image based on hover
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    transition: "background-image 1s ease", // Smooth transition for background change
                    minHeight: "400px",
                  }}
                >
                  {/* <img src={product.imageUrl} /> */}
                  {/* <img src={Disc}  alt="" />
              <img src={Disc1} alt="" /> */}
                </div>
                <div className="catalog-text">
                  <div className="catalog-headline">{product.name}</div>
                  <div className="catalog-info">
                    {product.description}
                    <br />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      {/* </div> */}
    </section>
  );
}

export default Catalog;
