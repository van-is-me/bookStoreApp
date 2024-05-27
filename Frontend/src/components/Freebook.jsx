import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from "./Cards";
import "../css/Freebook.css";

function Freebook() {
  const [listBook, setListBook] = useState([]);
  useEffect(() => {
    // Fetch dữ liệu từ list.json
    fetch("/list.json")
      .then((response) => response.json()) // Chuyển đổi phản hồi thành JSON
      .then((data) => {
        // Lọc dữ liệu để chỉ lấy các sách thuộc category "BestBook"
        const filterData = data.filter((book) => book.category === "Best Book");
        setListBook(filterData); // Cập nhật trạng thái với dữ liệu đã lọc
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
          dots: true
        }
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          className: "center",
          centerMode: true,
          centerPadding: "0",
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          className: "center",
          centerMode: true,
          centerPadding: "0",
        }
      }
    ]
  };
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 p-4 py-4 md:py-20">
        <div>
          <h1 className="font-semibold text-xl pb-2">
            Thế nào là một cuốn sách hay?
          </h1>
          <p>
            Nếu bạn muốn tìm kiếm những quyển sách hay kinh điển với sự kết hợp
            hoàn hảo giữa nghệ thuật văn học và đời sống thực tiễn để đọc mỗi
            ngày, bạn không nên bỏ qua những cuốn sách dưới đây.
          </p>
        </div>
        <div className="py-4 md:py-7 slider-container">
          <Slider {...settings}>
            {listBook.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Freebook;
