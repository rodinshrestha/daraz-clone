const newProducts = [
  {
    title: "Garena FreeFire TopUp (210 Diamonds)",
    price: 350,
    image:
      "https://static-01.daraz.com.np/p/12b3003bd913d7f951953b6a9b99c356.png_200x200q80-product.jpg_.webp",
    rating: 5,
    offPercentage: 14,
  },
  {
    title: "Sunfeast Dark Fantasy Coffee Fills Cookies 75 Gm",
    price: 100,
    image:
      "https://static-01.daraz.com.np/p/1aa9192eb06397844c0ced68d9c16313.jpg_200x200q80-product.jpg_.webp",
    rating: 3.8,
    offPercentage: 0,
  },
  {
    title: "2Pm 2X Spicy Akabare Chicken Noodles 100 Gm (Pack Of 16)",
    price: 1000,
    image:
      "https://static-01.daraz.com.np/p/60aae59fc9c80b55d4f58a193a01b148.jpg_200x200q80-product.jpg_.webp",
    rating: 5,
    offPercentage: 20,
  },
  {
    title: "Pringles Potato Chips Sour Cream & Onion 147Gm",
    price: 275,
    image:
      "https://static-01.daraz.com.np/p/55d6bd72378cc1d9d2539765647f9b2e.jpg_200x200q80-product.jpg_.webp",
    rating: 4.5,
    offPercentage: 15,
  },
  {
    title: "2Pm 2X Spicy Akabare Chicken Noodles 100 Gm (Pack Of 3)",
    price: 150,
    image:
      "https://static-01.daraz.com.np/p/2b713c7ca2597e95a6db395e451fb591.jpg_200x200q80-product.jpg_.webp",
    rating: 4.8,
    offPercentage: 0,
  },
  {
    title: "Amul Chocominis 250Gm",
    price: 265,
    image:
      "https://static-01.daraz.com.np/p/2ced2613f60f8d55bc1d3d63d41b0d37.jpg_200x200q80-product.jpg_.webp",
    rating: 5,
    offPercentage: 0,
  },
  {
    title: "Parle Melody Choclaty 195G",
    price: 100,
    image:
      "https://static-01.daraz.com.np/p/ba9e1fb5f5f5fb77db90c26dcee9945f.jpg_200x200q80-product.jpg_.webp",
    rating: 2,
    offPercentage: 5,
  },
  {
    title: "Apple iPhone 11 Pro Max",
    price: 117500,
    image:
      "https://static-01.daraz.com.np/p/0b405f342e7a492e9b6f0dd6b2b89835.jpg_200x200q80-product.jpg_.webp",
    rating: 4.5,
    offPercentage: 61,
  },
  {
    title: "KURKURE CHILLY CHATAKA 80GM(Pack of 3)",
    price: 150,
    image:
      "https://static-01.daraz.com.np/p/f398286925be9ed5274f9363021488db.jpg_200x200q80-product.jpg_.webp",
    rating: 1,
    offPercentage: 0,
  },
  {
    title: "Clovia Fishnet Pantyhose Stockings",
    price: 900,
    image:
      "https://static-01.daraz.com.np/p/118758a9708dca1066516030d3e790f5.jpg_200x200q80-product.jpg_.webp",
    rating: 5,
    offPercentage: 0,
  },
  {
    title: "Valorant - 3400 Points [ Only Username Required ] Direct Top up",
    price: 3400,
    image:
      "https://static-01.daraz.com.np/p/7c9e3af9e90bb84040d5346d75c46cfa.jpg_200x200q80-product.jpg_.webp",
    rating: 4,
    offPercentage: 0,
  },
  {
    title:
      "PLEXTONE G30 Pc Gaming Headset With Microphone In Ear Bass Noise Cancelling Earphone With Mic For Phone Computer Gamer Ps4",
    price: 400,
    image:
      "https://static-01.daraz.com.np/p/bb51463b6719a00a95489507d168788f.jpg_200x200q80-product.jpg_.webp",
    rating: 5,
    offPercentage: 20,
  },
];

export const getNewProducts = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(newProducts);
    }, 2 * 1000);
  });
};
