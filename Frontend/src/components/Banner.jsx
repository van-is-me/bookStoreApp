import React from "react";
import banner from "../assets/Banner.jpg";

function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 mt-12 md:mt-32 order-2 md:order-1">
          <div className="space-y-12">
            <h1 className="text-4xl font-bold">
              Xin chào, chào mừng bạn đến đây để học điều gì đó mới mỗi ngày!!!
            </h1>
            <p className="text-xl font-semibold">
              Hãy khám phá thế giới tri thức tại nhà sách của chúng tôi, nơi bạn
              sẽ tìm thấy vô vàn cuốn sách hay, từ văn học cổ điển đến những tác
              phẩm hiện đại, từ khoa học đến nghệ thuật. Nhà sách của chúng tôi
              không chỉ là nơi mua sắm mà còn là không gian để bạn thư giãn và
              mở mang tầm nhìn. Hãy để những trang sách dẫn lối bạn đến những
              hành trình mới mỗi ngày!
            </p>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>
          </div>
          <button className="btn mt-6 btn-secondary">Send</button>
        </div>
        <div className="order-1 w-full md:w-1/2 mt-12 md:mt-32 flex justify-center">
          <img src={banner} className="w-96 h-96" alt="" />
        </div>
      </div>
    </>
  );
}

export default Banner;
