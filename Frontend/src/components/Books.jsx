import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from "./Cards";

function Books() {
  const categories = [
    "Best Book",
    "Business Book",
    "Science Book",
    "Romance Book",
  ];
  const [listBook, setListBook] = useState([]);
  useEffect(() => {
    // Fetch dữ liệu từ list.json
    fetch("/list.json")
      .then((response) => response.json()) // Chuyển đổi phản hồi thành JSON
      .then((data) => {
        const categorizedBooks = {};
        categories.forEach((category) => {
          categorizedBooks[category] = data.filter(
            (book) => book.category === category
          );        
          setListBook(categorizedBooks);
        });
      })
      .catch((error) => {
        console.error("Error fetching list.json:", error); // Xử lý lỗi nếu có
      });
  }, []);
  var settings = {
    dots: true,
    className: "center",
    centerMode: true,
    centerPadding: "-39.9px",
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          className: "center",
          centerMode: true,
          centerPadding: "0",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          className: "center",
          centerMode: true,
          centerPadding: "0",
        },
      },
    ],
  };
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 p-4 py-4 md:py-32">
        <div className="pb-4 md:pb-20">
          <h1 className="font-semibold text-2xl pb-2">
            Chào mừng bạn đến với{" "}
            <span className="text-red-400">kho sách của chúng tôi !!!</span>
          </h1>
          <p>
            Nơi mà từng trang sách đều mang lại cho bạn những kiến thức, cảm
            hứng và góc nhìn sâu sắc về cuộc sống. Tại đây, chúng tôi cung cấp
            một loạt các đầu sách đa dạng, từ những tác phẩm văn học kinh điển,
            sách phát triển bản thân, đến những cuốn sách kỹ năng sống hữu ích.
          </p>
        </div>
        {categories.map((category) => (
          <div key={category} className="py-4 md:py-7 slider-container">
            <h2
              className={`font-semibold text-2xl pb-2 ${
                category === "Best Book"
                  ? "text-red-600"
                  : category === "Business Book"
                  ? "text-yellow-600"
                  : category === "Science Book"
                  ? "text-blue-600"
                  : category === "Romance Book"
                  ? "text-purple-600"
                  : ""
              }`}
            >
              {category}
            </h2>
            {listBook[category] && listBook[category].length > 0 ? (
              <Slider {...settings}>
                {listBook[category].map((item) => (
                  <Cards item={item} key={item.id} />
                ))}
              </Slider>
            ) : (
              <p>Không có sách nào trong danh mục này</p>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default Books