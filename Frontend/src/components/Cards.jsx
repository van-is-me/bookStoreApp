import React from "react";

function Cards({ item }) {
  const formattedPrice = item.price.toLocaleString("vi-VN");
  return (
    <>
      <div className="card w-full lg:w-80 xl:w-96 h-full bg-base-100 shadow-2xl dark:bg-slate-900 dark:text-white dark:border">
        <figure>
          <img className="w-full h-56 md:h-72" src={item.image} alt={item.name} />
        </figure>
        <div className="card-body">
          <div className="card-title h-20">
            <h2 className="w-3/5">{item.name}</h2>
            <div className="badge badge-secondary w-2/5 text-xs">
              <p className="text-center">{item.category}</p>
            </div>
          </div>
          <p className="h-36">{item.content}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline bg-yellow-300 text-red-600">
              {formattedPrice} VND
            </div>
            <div className="badge badge-outline bg-white text-blue-500 hover:bg-red-500 hover:text-yellow-500 duration-200">Mua ngay!</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
