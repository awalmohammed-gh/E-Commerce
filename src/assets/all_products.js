import p1_img from "./product_1.png";
import p2_img from "./product_2.png";
import p3_img from "./product_3.png";
import p4_img from "./product_4.png";
import p5_img from "./product_5.png";
import p6_img from "./product_6.png";
import p7_img from "./product_7.png";
import p8_img from "./product_8.png";
import p9_img from "./product_9.png";
import p10_img from "./product_10.png";
import p11_img from "./product_11.png";
import p12_img from "./product_12.png";
import p13_img from "./product_13.png";
import p14_img from "./product_14.png";
import p15_img from "./product_15.png";
import p16_img from "./product_16.png";
import p17_img from "./product_17.png";
import p18_img from "./product_18.png";
import p19_img from "./product_19.png";
import p20_img from "./product_20.png";
import p21_img from "./product_21.png";
import p22_img from "./product_22.png";
import p23_img from "./product_23.png";
import p24_img from "./product_24.png";
import p25_img from "./product_25.png";
import p26_img from "./product_26.png";
import p27_img from "./product_27.png";
import p28_img from "./product_28.png";
import p29_img from "./product_29.png";
import p30_img from "./product_30.png";
import p31_img from "./product_31.png";
import p32_img from "./product_32.png";
import p33_img from "./product_33.png";
import p34_img from "./product_34.png";
import p35_img from "./product_35.png";
import p36_img from "./product_36.png";

import banner1 from "./banner1.jpg"
// import banner2 from "./banner2.jpg"
// import banner3 from "./banner3.jpg"

import blog1 from "./blog1.jpg"
import blog2 from "./blog2.jpg"
import blog3 from "./blog3.jpg"
import blog4 from "./blog4.jpg"
import blog5 from "./blog5.jpg"

import cart from "./cart.png"
import search from "./search.png"
import menu from "./menu.png"
import user from "./user.png"
import close from "./close.png"

import stripe from "./stripe_logo.png"
import razorpay from "./razorpay_logo.png"


export const icons = {
  cart,
  search,
  menu,
  user,
  close,
  stripe,
  razorpay
}

export const asset = {
  blog1,
  blog2,
  blog3,
  blog4,
  blog5
}


export const navLinks = [
  {name:"Home", path:"/"},
  {name:"Shop", path:"/shop"},
  {name:"About", path:"/about"},
  {name:"Contact us", path:"/contact"},
]



export const banner = [
  {
    id: 1,
    name: "Welcome to a World of Shopper Deals",
    description:
      "Kickstart your shopping journey with unbeatable prices! From daily essentials to the latest gadgets, discover everything you love all in one place. Shop now and enjoy exclusive online discounts!",
    image: banner1,
  },
  {
    id: 2,
    name: "New Arrivals Just Dropped!",
    description:
      "Stay ahead of the trends with our freshest collections. Whether it’s fashion, be the first to grab the hottest new products. Limited stock – don’t miss out!",
    // image: banner2,
  },
  {
    id: 3,
    name: "Flash Sale – Up to 70% Off!",
    description:
      "Time’s ticking! Take advantage of our limited-time flash sales and save big on top brands. Shop fast, these deals disappear quickly!",
    // image:banner3
  },
];




export const products = [
  {
    _id: "a1b2c3",
    name: "Floral Flutter Sleeve Peplum Blouse",
    category: "women",
    image: [p1_img],
    new_price: 80.0,
    old_price: 100.0,
    description: 
      "The Floral Flutter Sleeve Peplum Blouse is a charming addition to any wardrobe, featuring delicate floral patterns that evoke a sense of springtime elegance. Crafted with lightweight, breathable fabric, this blouse offers a flattering peplum hem that accentuates the waist. The flutter sleeves add a playful touch, perfect for both casual outings and semi-formal events. Pair it with tailored trousers or a sleek skirt for a polished look.",
    bestseller: true,
    sizes: ["S", "L", "XL", "XXL"],
    newArrival: false,
  },
  {
    _id: "d4e5f6",
    name: "Polka Dot Wrap Blouse",
    category: "women",
    image: [p2_img],
    new_price: 95.0,
    old_price: 130.0,
    description:
      "Elevate your style with the Polka Dot Wrap Blouse, designed to blend timeless charm with modern sophistication. The playful polka dot print is complemented by a wrap-style front that creates a flattering silhouette. Made from a soft, flowy fabric, this blouse is ideal for warm days or layered looks in cooler weather. Perfect for office wear or a weekend brunch, its versatile design ensures effortless elegance.",
    bestseller: true,
    sizes: ["S", "L", "XL", "XXL"],
    newArrival: false,
  },
  {
    _id: "g7h8i9",
    name: "Lace Trimmed Peplum Top",
    category: "women",
    image: [p3_img],
    new_price: 85.0,
    old_price: 110.0,
    description:
      "The Lace Trimmed Peplum Top combines feminine details with a chic, structured fit. Intricate lace accents along the neckline and hem add a touch of romance, while the peplum silhouette enhances your curves. Crafted from a blend of cotton and polyester, this top is both comfortable and durable, making it a go-to piece for day-to-night transitions. Ideal for pairing with jeans or a pencil skirt.",
    bestseller: false,
    sizes: ["S", "L", "XL", "XXL"],
    newArrival: false,
  },
  {
    _id: "j0k1l2",
    name: "Ruffled Collar Silk Blouse",
    category: "women",
    image: [p4_img],
    new_price: 120.0,
    old_price: 160.0,
    description:
      "Indulge in luxury with the Ruffled Collar Silk Blouse, a statement piece crafted from premium silk for a smooth, lustrous finish. The ruffled collar adds a dramatic flair, making it perfect for formal occasions or high-end casual settings. Its tailored fit ensures a sleek appearance, while the breathable fabric keeps you comfortable all day. Pair with statement jewelry for a standout look.",
    bestseller: true,
    sizes: ["S", "L", "XL", "XXL"],
    newArrival: true,
  },
  {
    _id: "m3n4o5",
    name: "Embroidered Bohemian Top",
    category: "women",
    image: [p5_img],
    new_price: 90.0,
    old_price: 125.0,
    description:
      "The Embroidered Bohemian Top is a celebration of free-spirited style, featuring intricate embroidery that adds a handcrafted charm. Its relaxed fit and lightweight fabric make it perfect for warm weather, while the vibrant patterns bring a pop of color to any outfit. Ideal for festivals, beach outings, or casual gatherings, this top pairs beautifully with denim shorts or a flowing skirt.",
    bestseller: false,
    sizes: ["S", "L", "XL", "XXL"],
    newArrival: false,
  },
  {
    _id: "p6q7r8",
    name: "Satin V-Neck Blouse",
    category: "women",
    image: [p6_img],
    new_price: 100.0,
    old_price: 140.0,
    description:
      "The Satin V-Neck Blouse exudes understated elegance with its sleek satin finish and deep V-neckline. Designed to drape beautifully over the body, this blouse offers a sophisticated look that’s perfect for evening wear or professional settings. The smooth, luxurious fabric feels soft against the skin, ensuring comfort without compromising style. Pair with tailored pants for a refined ensemble.",
    bestseller: true,
    sizes: ["S", "L", "XL", "XXL"],
    newArrival: false,
  },
  {
    _id: "s9t0u1",
    name: "Chiffon Layered Blouse",
    category: "women",
    image: [p7_img],
    new_price: 95.0,
    old_price: 130.0,
    description:
      "The Chiffon Layered Blouse is a versatile piece that blends airy elegance with modern design. Its layered chiffon construction creates a soft, flowing silhouette, perfect for adding a touch of grace to any outfit. The lightweight fabric is ideal for all-day wear, while the subtle sheen adds a hint of glamour. Style it with a blazer for work or jeans for a casual day out.",
    bestseller: false,
    sizes: ["S", "L", "XL", "XXL"],
    newArrival: false,
  },
  {
    _id: "v2w3x4",
    name: "Plaid Button-Down Shirt",
    category: "women",
    image: [p8_img],
    new_price: 85.0,
    old_price: 115.0,
    description:
      "The Plaid Button-Down Shirt offers a timeless, preppy look with a modern twist. Featuring a classic plaid pattern, this shirt is crafted from soft cotton for all-day comfort. Its tailored fit makes it suitable for both casual and semi-formal occasions, while the button-down front adds versatility. Roll up the sleeves for a relaxed vibe or keep it polished with a blazer.",
    bestseller: true,
    sizes: ["S", "L", "XL", "XXL"],
    newArrival: true,
  },
  {
    _id: "y5z6a7",
    name: "Velvet Tie-Front Blouse",
    category: "women",
    image: [p9_img],
    new_price: 110.0,
    old_price: 150.0,
    description:
      "The Velvet Tie-Front Blouse is a luxurious piece that combines rich texture with a flattering design. The plush velvet fabric adds a touch of opulence, while the tie-front detail creates a cinched waist for a feminine silhouette. Perfect for evening events or holiday gatherings, this blouse pairs beautifully with leather pants or a sleek skirt for a bold, stylish look.",
    bestseller: false,
    sizes: ["S", "L", "XL", "XXL"],
    newArrival: false,
  },
  {
    _id: "b8c9d0",
    name: "Off-Shoulder Peasant Blouse",
    category: "women",
    image: [p10_img],
    new_price: 90.0,
    old_price: 120.0,
    description:
      "The Off-Shoulder Peasant Blouse brings a romantic, bohemian vibe to your wardrobe. Its off-the-shoulder design and loose, flowing fit create a carefree yet elegant look, perfect for summer outings or casual dates. Made from breathable cotton, this blouse features subtle embroidery for added charm. Pair with high-waisted jeans or a maxi skirt for effortless style.",
    bestseller: true,
    sizes: ["S", "L", "XL", "XXL"],
    newArrival: false,
  },
  {
    _id: "e1f2g3",
    name: "Smocked Waist Floral Top",
    category: "women",
    image: [p11_img],
    new_price: 85.0,
    old_price: 110.0,
    description:
      "The Smocked Waist Floral Top is a delightful blend of comfort and style, featuring a vibrant floral print and a smocked waistband for a flattering fit. The lightweight fabric drapes beautifully, making it ideal for warm weather or layered looks. Perfect for picnics, brunches, or casual office days, this top pairs effortlessly with denim or tailored shorts.",
    bestseller: false,
    sizes: ["S", "L", "XL", "XXL"],
    newArrival: true,
  },
  {
    _id: "h4i5j6",
    name: "Asymmetric Hem Tunic",
    category: "women",
    image: [p12_img],
    new_price: 100.0,
    old_price: 135.0,
    description:
      "The Asymmetric Hem Tunic offers a contemporary take on classic style, with its unique hemline and relaxed fit. Crafted from a soft, breathable fabric, this tunic is perfect for those who love versatile, easy-to-wear pieces. Its modern design makes it suitable for both casual and professional settings, pairing beautifully with leggings or slim-fit pants.",
    bestseller: true,
    sizes: ["S", "L", "XL", "XXL"],
    newArrival: false,
  },
  {
    _id: "k7l8m9",
    name: "Classic Denim Bomber Jacket",
    category: "men",
    image: [p13_img],
    new_price: 120.0,
    old_price: 160.0,
    description:
      "The Classic Denim Bomber Jacket is a wardrobe staple that combines rugged durability with timeless style. Made from high-quality denim, this jacket features a slim fit and a zippered front for a sleek look. Perfect for layering over casual tees or sweaters, it’s ideal for cool evenings or weekend outings. The versatile design ensures it never goes out of fashion.",
    bestseller: true,
    sizes: ["S", "L", "XL", "XXL"],
    newArrival: true,
  },
  {
    _id: "n0o1p2",
    name: "Leather Trimmed Bomber Jacket",
    category: "men",
    image: [p14_img],
    new_price: 130.0,
    old_price: 180.0,
    description:
      "The Leather Trimmed Bomber Jacket elevates the classic bomber style with premium leather accents along the collar and cuffs. Crafted from a durable blend of materials, this jacket offers a slim fit that’s both comfortable and stylish. Ideal for urban adventures or evening outings, it pairs effortlessly with jeans or chinos for a polished yet relaxed look.",
    bestseller: false,
    sizes: ["S", "L", "XL", "XXL"],
    newArrival: false,
  },
  {
    _id: "q3r4s5",
    name: "Wool Blend Bomber Jacket",
    category: "men",
    image: [p15_img],
    new_price: 125.0,
    old_price: 170.0,
    description:
      "Stay warm and stylish with the Wool Blend Bomber Jacket, designed for cooler weather. The wool blend fabric provides excellent insulation while maintaining a lightweight feel, making it perfect for layering. Its slim fit and zippered front create a modern silhouette, ideal for both casual and semi-formal occasions. Pair with boots and a scarf for a complete look.",
    bestseller: true,
    sizes: ["S", "L", "XL", "XXL"],
    newArrival: false,
  },
  {
    _id: "t6u7v8",
    name: "Quilted Bomber Jacket",
    category: "men",
    image: [p16_img],
    new_price: 115.0,
    old_price: 150.0,
    description:
      "The Quilted Bomber Jacket offers a fresh take on a classic design, featuring a quilted exterior for added texture and warmth. Its slim fit and durable construction make it a reliable choice for everyday wear, while the zippered front adds a touch of modernity. Perfect for transitional weather, this jacket pairs well with casual tees or button-down shirts.",
    bestseller: false,
    sizes: ["S", "L", "XL", "XXL"],
    newArrival: true,
  },
  {
    _id: "w9x0y1",
    name: "Corduroy Bomber Jacket",
    category: "men",
    image: [p17_img],
    new_price: 120.0,
    old_price: 160.0,
    description:
      "The Corduroy Bomber Jacket brings a retro vibe to modern fashion with its soft corduroy fabric and slim-fit design. The zippered front and ribbed cuffs ensure a snug fit, while the rich texture adds a touch of sophistication. Ideal for casual outings or layering over knitwear, this jacket is a versatile addition to any wardrobe.",
    bestseller: true,
    sizes: ["S", "L", "XL", "XXL"],
    newArrival: false,
  },
  {
    _id: "z2a3b4",
    name: "Nylon Bomber Jacket",
    category: "men",
    image: [p18_img],
    new_price: 110.0,
    old_price: 140.0,
    description:
      "The Nylon Bomber Jacket is designed for those who value both style and functionality. Made from lightweight, water-resistant nylon, this jacket is perfect for unpredictable weather. Its slim fit and zippered front create a sleek look, while the spacious pockets offer practicality. Pair with sneakers and jeans for an effortless, everyday style.",
    bestseller: false,
    sizes: ["S", "L", "XL", "XXL"],
    newArrival: false,
  },
  {
    _id: "c5d6e7",
    name: "Suede Bomber Jacket",
    category: "men",
    image: [p19_img],
    new_price: 140.0,
    old_price: 190.0,
    description:
      "The Suede Bomber Jacket is a luxurious take on the classic bomber, crafted from soft, high-quality suede for a premium feel. Its slim fit and zippered front create a refined silhouette, perfect for evening wear or upscale casual settings. The rich texture and subtle sheen make this jacket a standout piece, ideal for pairing with tailored trousers.",
    bestseller: true,
    sizes: ["S", "L", "XL", "XXL"],
    newArrival: true,
  },
  {
    _id: "f8g9h0",
    name: "Canvas Bomber Jacket",
    category: "men",
    image: [p20_img],
    new_price: 115.0,
    old_price: 150.0,
    description:
      "The Canvas Bomber Jacket is built for durability and style, featuring a rugged canvas exterior that’s both tough and stylish. Its slim fit and zippered front ensure a modern look, while the sturdy construction makes it ideal for everyday wear. Perfect for outdoor adventures or casual city strolls, this jacket pairs well with boots and denim.",
    bestseller: false,
    sizes: ["S", "L", "XL", "XXL"],
    newArrival: false,
  },
  {
    _id: "i1j2k3",
    name: "Padded Bomber Jacket",
    category: "men",
    image: [p21_img],
    new_price: 125.0,
    old_price: 170.0,
    description:
      "The Padded Bomber Jacket offers superior warmth without sacrificing style. Its padded interior provides excellent insulation, making it ideal for colder days, while the slim fit ensures a sleek appearance. The zippered front and ribbed cuffs add a touch of modernity, perfect for layering over hoodies or sweaters. A must-have for winter wardrobes.",
    bestseller: true,
    sizes: ["S", "L", "XL", "XXL"],
    newArrival: true,
  },
  {
    _id: "l4m5n6",
    name: "Twill Bomber Jacket",
    category: "men",
    image: [p22_img],
    new_price: 120.0,
    old_price: 160.0,
    description:
      "The Twill Bomber Jacket combines classic design with modern materials, featuring a durable twill fabric that’s both soft and sturdy. Its slim fit and zippered front create a polished look, while the versatile design makes it suitable for various occasions. Pair with chinos or jeans for a smart-casual outfit that’s perfect for any season.",
    bestseller: false,
    sizes: ["S", "L", "XL", "XXL"],
    newArrival: false,
  },
  {
    _id: "o7p8q9",
    name: "Fleece-Lined Bomber Jacket",
    category: "men",
    image: [p23_img],
    new_price: 130.0,
    old_price: 180.0,
    description:
      "The Fleece-Lined Bomber Jacket is designed for ultimate comfort, with a soft fleece lining that provides warmth and coziness. Its slim fit and zip ہوpered front ensure a modern silhouette, while the durable exterior withstands daily wear. Ideal for chilly mornings or evening outings, this jacket is a versatile addition to any wardrobe.",
    bestseller: true,
    sizes: ["S", "L", "XL", "XXL"],
    newArrival: true,
  },
  {
    _id: "r0s1t2",
    name: "Hooded Bomber Jacket",
    category: "men",
    image: [p24_img],
    new_price: 125.0,
    old_price: 170.0,
    description:
      "The Hooded Bomber Jacket adds a practical twist to the classic bomber style, featuring a detachable hood for added versatility. Crafted from durable materials, this jacket offers a slim fit and a zippered front for a sleek look. Perfect for unpredictable weather, it pairs well with casual tees or knitwear for a laid-back yet stylish vibe.",
    bestseller: false,
    sizes: ["S", "L", "XL", "XXL"],
    newArrival: false,
  },
  {
    _id: "u3v4w5",
    name: "Striped Hooded Sweatshirt",
    category: "kid",
    image: [p25_img],
    new_price: 80.0,
    old_price: 100.0,
    description:
      "The Striped Hooded Sweatshirt is a fun and cozy option for kids, featuring bold stripes that add a playful touch. Made from soft, durable cotton, this sweatshirt is perfect for school, playdates, or lounging at home. The hooded design and kangaroo pocket provide extra warmth and convenience, making it a favorite for active kids.",
    bestseller: true,
    sizes: ["S", "L", "XL", "XXL"],
    newArrival: false,
  },
  {
    _id: "x6y7z8",
    name: "Graphic Print Hoodie",
    category: "kid",
    image: [p26_img],
    new_price: 85.0,
    old_price: 110.0,
    description:
      "The Graphic Print Hoodie is designed for kids who love to stand out, featuring vibrant graphic prints that spark creativity. Crafted from a soft cotton blend, this hoodie offers all-day comfort and durability. The hooded design and spacious pocket make it perfect for chilly days or casual adventures. Ideal for pairing with jeans or joggers.",
    bestseller: false,
    sizes: ["S", "L", "XL", "XXL"],
    newArrival: true,
  },
  {
    _id: "a9b0c1",
    name: "Colorblock Hooded Sweatshirt",
    category: "kid",
    image: [p27_img],
    new_price: 80.0,
    old_price: 100.0,
    description:
      "The Colorblock Hooded Sweatshirt brings a modern twist to kids’ fashion with its bold colorblock design. Made from a cozy cotton blend, this sweatshirt is perfect for keeping kids warm during outdoor play or casual outings. The hooded design and front pocket add functionality, while the vibrant colors make it a standout piece in any wardrobe.",
    bestseller: true,
    sizes: ["S", "L", "XL", "XXL"],
    newArrival: false,
  },
  {
    _id: "d2e3f4",
    name: "Camo Print Hoodie",
    category: "kid",
    image: [p28_img],
    new_price: 85.0,
    old_price: 110.0,
    description:
      "The Camo Print Hoodie is perfect for kids who love adventure, featuring a cool camouflage print that’s both stylish and fun. Crafted from soft, durable fabric, this hoodie offers warmth and comfort for all-day wear. The hooded design and kangaroo pocket make it practical for school or outdoor activities, pairing well with jeans or shorts.",
    bestseller: false,
    sizes: ["S", "L", "XL", "XXL"],
    newArrival: true,
  },
  {
    _id: "g5h6i7",
    name: "Tie-Dye Hooded Sweatshirt",
    category: "kid",
    image: [p29_img],
    new_price: 90.0,
    old_price: 120.0,
    description:
      "The Tie-Dye Hooded Sweatshirt is a vibrant, trendy choice for kids, featuring a unique tie-dye pattern that’s sure to turn heads. Made from a soft cotton blend, this sweatshirt is comfortable and durable, perfect for school or casual hangouts. The hooded design and front pocket add practicality, making it a go-to piece for any young fashionista.",
    bestseller: true,
    sizes: ["S", "L", "XL", "XXL"],
    newArrival: false,
  },
  {
    _id: "j8k9l0",
    name: "Embroidered Hoodie",
    category: "kid",
    image: [p30_img],
    new_price: 85.0,
    old_price: 110.0,
    description:
      "The Embroidered Hoodie adds a touch of charm to kids’ wardrobes with its subtle embroidered details. Crafted from a cozy cotton blend, this hoodie is perfect for keeping kids warm during cooler days. The hooded design and spacious pocket offer convenience, while the soft fabric ensures comfort for all-day wear. Ideal for school or playtime.",
    bestseller: false,
    sizes: ["S", "L", "XL", "XXL"],
    newArrival: true,
  },
  {
    _id: "m1n2o3",
    name: "Patchwork Hooded Sweatshirt",
    category: "kid",
    image: [p31_img],
    new_price: 80.0,
    old_price: 100.0,
    description:
      "The Patchwork Hooded Sweatshirt is a unique piece that combines various fabric patches for a quirky, artistic look. Made from soft, durable cotton, this sweatshirt is perfect for kids who love to express their individuality. The hooded design and front pocket add functionality, making it ideal for school, playdates, or casual outings.",
    bestseller: true,
    sizes: ["S", "L", "XL", "XXL"],
    newArrival: false,
  },
  {
    _id: "p4q5r6",
    name: "Solid Color Hoodie",
    category: "kid",
    image: [p32_img],
    new_price: 80.0,
    old_price: 100.0,
    description:
      "The Solid Color Hoodie is a classic, versatile piece for kids, featuring a clean, minimalist design. Crafted from a soft cotton blend, this hoodie offers warmth and comfort for everyday wear. The hooded design and kangaroo pocket make it practical for school or outdoor activities, while the simple style pairs easily with any outfit.",
    bestseller: false,
    sizes: ["S", "L", "XL", "XXL"],
    newArrival: true,
  },
  {
    _id: "s7t8u9",
    name: "Animal Print Hooded Sweatshirt",
    category: "kid",
    image: [p33_img],
    new_price: 85.0,
    old_price: 110.0,
    description:
      "The Animal Print Hooded Sweatshirt is a fun, bold choice for kids, featuring a playful animal print that adds a touch of wild style. Made from a cozy cotton blend, this sweatshirt is perfect for keeping kids warm during school or playtime. The hooded design and front pocket offer practicality, making it a favorite for young adventurers.",
    bestseller: true,
    sizes: ["S", "L", "XL", "XXL"],
    newArrival: true,
  },
  {
    _id: "v0w1x2",
    name: "Star Pattern Hoodie",
    category: "kid",
    image: [p34_img],
    new_price: 80.0,
    old_price: 100.0,
    description:
      "The Star Pattern Hoodie is a whimsical addition to any kid’s wardrobe, featuring a starry print that sparks imagination. Crafted from soft, durable cotton, this hoodie is perfect for school, playdates, or cozy nights at home. The hooded design and spacious pocket add functionality, while the vibrant design makes it a standout piece.",
    bestseller: false,
    sizes: ["S", "L", "XL", "XXL"],
    newArrival: true,
  },
  {
    _id: "y3z4a5",
    name: "Checkerboard Hooded Sweatshirt",
    category: "kid",
    image: [p35_img],
    new_price: 85.0,
    old_price: 110.0,
    description:
      "The Checkerboard Hooded Sweatshirt brings a retro vibe to kids’ fashion with its bold checkerboard pattern. Made from a soft cotton blend, this sweatshirt is comfortable and durable, perfect for active kids. The hooded design and front pocket add convenience, making it ideal for school, sports, or casual outings with friends.",
    bestseller: true,
    sizes: ["S", "L", "XL", "XXL"],
    newArrival: true,
  },
  {
    _id: "b6c7d8",
    name: "Ombre Hooded Sweatshirt",
    category: "kid",
    image: [p36_img],
    new_price: 80.0,
    old_price: 100.0,
    description:
      "The Ombre Hooded Sweatshirt is a stylish choice for kids, featuring a gradient color effect that adds a modern touch. Crafted from a cozy cotton blend, this sweatshirt is perfect for keeping kids warm during cooler days. The hooded design and kangaroo pocket offer practicality, while the unique design makes it a favorite for young trendsetters.",
    bestseller: false,
    sizes: ["S", "L", "XL", "XXL"],
    newArrival: true,
  },
];