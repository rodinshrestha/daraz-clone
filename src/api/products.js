const products = [
  {
    title: "Free Fire 100 diamonds(direct Topup)",
    price: 1000,
    image:
      "https://static-01.daraz.com.np/p/699e05fcd0f7b41c4b899278f6d22b1c.jpg_200x200q80-product.jpg_.webp",
    rating: 4,
    offPercentage: 20,
  },
  {
    title: "Pubg Uc Pubg Mobile Uc Pubg Uc 35Uc Direct Top Up",
    price: 125,
    image:
      "https://static-01.daraz.com.np/p/71fbf18e64a76dca8e0ea49a658c9112.jpg_200x200q80-product.jpg_.webp",
    rating: 5,
    offPercentage: 0,
  },
  {
    title: "Earphone Remote & Mic Handsfree For Apple Iphones & Android Phones",
    price: 500,
    image:
      "https://static-01.daraz.com.np/p/216ae3f253203dd16f1b0ae1b3b7a308.jpg_200x200q80-product.jpg_.webp",
    rating: 4.2,
    offPercentage: 52,
  },
  {
    title:
      "Samsung Rt28K3022Se 253 L 2 Star Frost Free Double Door Refrigerator - (Silver)",
    price: 51000,
    image:
      "https://static-01.daraz.com.np/p/b70d9f4e7a0b8a97c48b77247448760d.jpg_200x200q80-product.jpg_.webp",
    rating: 4.5,
    offPercentage: 19,
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
    title: "Maggi 2 - Minute Noodles Masala Cp 280 gm",
    price: 125,
    image:
      "https://static-01.daraz.com.np/p/494647d77243b17092a22879330a2515.jpg_200x200q80-product.jpg_.webp",
    rating: 5,
    offPercentage: 0,
  },
  {
    title: "210+231 Free Fire Diamond (Direct Top UP) +Bonus First Time Only",
    price: 600,
    image:
      "https://static-01.daraz.com.np/p/mdc/fe9cacd2683be6de86598efb5e94bba4.jpg_200x200q80-product.jpg_.webp",
    rating: 2,
    offPercentage: 5,
  },
  {
    title: "Striped Half Turtleneck Hand Knitted Chunky Sweater",
    price: 4000,
    image:
      "https://static-01.daraz.com.np/p/2c41a127d14d6095f550ce49c4fe08ea.jpg_200x200q80-product.jpg_.webp",
    rating: 4.5,
    offPercentage: 61,
  },
  {
    title: "Streamstop Netflix Premium 1 Screen UHD 4 Months",
    price: 1800,
    image:
      "https://static-01.daraz.com.np/p/610135545f75b0f43443db2e794ddd68.jpg",
    rating: 5,
    offPercentage: 33,
  },
  {
    title: "Steam Gift Card Steam Code 5$(USD)(Email-Delivery)",
    price: 780,
    image:
      "https://static-01.daraz.com.np/p/08d2301550d2354adbc411beff6ff400.jpg",
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

export const getProducts = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(products);
    }, 2 * 1000);
  });
};
