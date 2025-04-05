import { useState, useEffect } from "react";
import vanilla from "../../assets/cake.jpg";
import rose from "../../assets/straw.jpeg";
import giftbox2 from "../../assets/cupcake.jpeg";
import luxury from "../../assets/giftset.jpeg";
import flawer1 from '../../assets/giftbox1.jpeg'
import nacless from '../../assets/nacless.jpg'
// Offer products with discounts
const offerProducts = [
  { id: 1, name: "Vanilla Cake", price: 450, discountPrice: 350, image: vanilla },
  { id: 2, name: "Gift Box A", price: 300, discountPrice: 250, image: giftbox2 },
  { id: 3, name: "Luxury Gift Box", price: 700, discountPrice: 600, image: luxury },
  { id: 4, name: "Rose Bouquet", price: 550, discountPrice: 450, image: rose },
  { id: 5, name: "Rose Bouquet", price: 550, discountPrice: 450, image: flawer1 },
  { id: 6, name: "Rose Bouquet", price: 550, discountPrice: 450, image: nacless },
];

const Offers = () => {
  const [timeLeft, setTimeLeft] = useState(3600); // 1-hour offer countdown

  useEffect(() => {
    if (timeLeft === 0) return; // Stop the interval when time reaches zero

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div className="p-6 max-w-6xl mx-auto ">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-3 text-black">
        🔥 Limited-Time Offers 🔥
      </h1>

      {/* Countdown Timer */}
      <p className="text-center text-lg sm:text-2xl text-gray-700 !mb-6 font-semibold">
        {timeLeft > 0 ? (
          <>
            Hurry up! Offer ends in{" "}
            <span className="font-bold text-red-500">{formatTime(timeLeft)}</span>
          </>
        ) : (
          <span className="text-red-500 font-bold">Offer Expired! ⏳</span>
        )}
      </p>

      {/* Offer Products Grid */}
      <div className="grid grid-cols-1 bg-white m-auto p-10  shadow-md sm:grid-cols-2 md:grid-cols-3  !gap-3 place-items-center">
        {offerProducts.map((product) => (
          <div
            key={product.id}
            className=" rounded-sm shadow-md pt-2 pb-2 bg-white transition hover:scale-105 hover:shadow-xl flex flex-col min-w-[300px]"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full !h-60 sm:h-48 object-cover rounded-md mb-2"
              loading="lazy"
            />
            <div className="flex flex-col items-center justify-center">
            <h3 className="text-lg font-[500] text-gray-800">{product.name}</h3>
            <div className="flex  gap-3 items-center justify-center">
            <p className="text-gray-500 line-through">₹{product.price}</p>
             <p className="text-green-500 font-semibold text-xl">₹{product.discountPrice}</p>
            </div>
            <button className="bg-[#7d0492] text-white !w-full ml-1 !p-2 rounded font-semibold  transition">
              Buy Now
            </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;
