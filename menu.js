const categoryOrder = [
    "friedrice",
    "platters",
    "icecream",
     "yogurt",
    "float",
    "milktea",
    "coffee",
    "milkbase",
    "fruitea",
   "freshdrink",
    "snacks"
];


const menuList = [
    {
        name: "Pork Chaofan Alacarte",
        price: 39,
        category: "friedrice",
        image: "images/chaofanalacarte.webp",
        bestSeller: false,
        varieties: [
            { name: "Bagoong Chaofan Alacarte", price: 49 },
            { name: "Tinapa Chaofan Alacarte", price: 59 },
        ],
        flavors: [],
    },
    {
        name: "Pork Chaofan Egg",
        price: 54,
        category: "friedrice",
        image: "images/cf-egg1.webp",
        bestSeller: false,
        varieties: [
            { name: "Bagoong Chaofan Egg", price: 64 },
            { name: "Tinapa Chaofan Egg", price: 74 },
        ],
        flavors: [],
    },
    {
        name: "Strawberry w/ Oreo Yogurt",
        price: null,
        category: "yogurt",
        image: "images/StrawberryYogurt.webp",
        bestSeller: true,
        varieties: [
            { name: "Medium", price:69 },
             { name: "Large", price:89 }
        ],
        flavors: [
        ],
    },
    {
        name: "Caramel and Graham Yogurt",
        price: null,
        category: "yogurt",
        image: "images/CaramelYogurt.webp",
        bestSeller: false,
        varieties: [
            { name: "Medium", price:69 },
             { name: "Large", price:89 }
        ],
        flavors: [
        ],
    },
    {
        name: "Blueberry w/ Nata Yogurt",
        price: null,
        category: "yogurt",
        image: "images/BlueberryYogurt.webp",
        bestSeller: false,
        varieties: [
            { name: "Medium", price:69 },
             { name: "Large", price:89 }
        ],
        flavors: [
        ],
    },
    {
        name: "Caramel w/ Mallows Ice Cream",
        price:null ,
        category: "icecream",
        image: "images/caramelwmIcecream.webp",
        bestSeller: false,
        varieties: [
            { name: "Medium", price:39 },
             { name: "Large", price:49 }
        ],
        flavors: [
        ],
    },
    {
        name: "Coffee Jelly w/ Oreo Ice Cream",
        price: null,
        category: "icecream",
        image: "images/CJIcecream.webp",
        bestSeller: false,
        varieties: [
            { name: "Medium", price:39 },
             { name: "Large", price:49 }
        ],
        flavors: [
        ],
    },
    {
        name: "Pork Chaofan Siomai",
        price: 79,
        category: "friedrice",
        image: "images/cf-egg-siomai.webp",
        bestSeller: false,
        varieties: [
            { name: "Bagoong Chaofan Siomai", price: 89 },
            { name: "Tinapa Chaofan Siomai", price: 99 },
        ],
        flavors: [],
    },
    {
        name: "Pork Chaofan Hotdog",
        price: 79,
        category: "friedrice",
        image: "images/cf-egg-hotdog.webp",
        bestSeller: false,
        varieties: [
            { name: "Bagoong Chaofan Hotdog", price: 89 },
            { name: "Tinapa Chaofan Hotdog", price: 99 },
        ],
        flavors: [],
    },
    {
        name: "Pork Chaofan Shanghai",
        price: 89,
        category: "friedrice",
        image: "images/cf-egg-shanghai.webp",
        bestSeller: true,
        varieties: [
            { name: "Bagoong Chaofan Shanghai", price: 99 },
            { name: "Tinapa Chaofan Shanghai", price: 109 },
        ],
        flavors: [],
    },
    {
        name: "Pork Chaofan Spam",
        price: 89,
        category: "friedrice",
        image: "images/cf-egg-spam.webp",
        bestSeller: true,
        varieties: [
            { name: "Bagoong Chaofan Spam", price: 99 },
            { name: "Tinapa Chaofan Spam", price: 109 },
        ],
        flavors: [],
    },
    {
        name: "Pork Chaofan Bangus",
        price: 109,
        category: "friedrice",
        image: "images/cf-egg-bangus.webp",
        bestSeller: false,
        varieties: [
            { name: "Bagoong Chaofan Bangus", price: 119 },
            { name: "Tinapa Chaofan Bangus", price: 129 },
        ],
        flavors: [],
    },
    {
        name: "Pork Chaofan Porkchop",
        price: 120,
        category: "friedrice",
        image: "images/cf-egg-chicken.webp",
        bestSeller: true,
        varieties: [
            { name: "Bagoong Chaofan Porkchop", price: 130 },
            { name: "Tinapa Chaofan Porkchop", price: 140 },
        ],
        flavors: [],
    },
    {
        name: "Pork Chaofan Tonkatsu",
        price: 125,
        category: "friedrice",
        image: "images/cf-egg-tonkatsu.webp",
        bestSeller: false,
        varieties: [
            { name: "Bagoong Chaofan Tonkatsu", price: 135 },
            { name: "Tinapa Chaofan Tonkatsu", price: 145 },
        ],
        flavors: [],
    },
    {
        name: "Pork Chaofan Overload",
        price: 120,
        category: "friedrice",
        image: "images/cf-egg-overload.webp",
        bestSeller: true,
        varieties: [
            { name: "Bagoong Chaofan Overload", price: 130 },
            { name: "Tinapa Chaofan Overload", price: 140 },
        ],
        flavors: [],
    },
    {
        name: "Pork Chaofan Butterfly Squid",
        price: 149,
        category: "friedrice",
        image: "images/cf-egg-squid.webp",
        bestSeller: true,
        varieties: [
            { name: "Bagoong Chaofan Butterfly Squid", price: 159 },
            { name: "Tinapa Chaofan Butterfly Squid", price: 169 },
        ],
        flavors: [],
    },
    {
        name: "Pork Chaofan Giant Liempo",
        price: 180,
        category: "friedrice",
        image: "images/cf-egg-liempo.webp",
        bestSeller: true,
        varieties: [
            { name: "Bagoong Chaofan Giant Liempo", price: 190 },
            { name: "Tinapa Chaofan Giant Liempo", price: 200 },
        ],
        flavors: [],
    },
    {
        name: "Pork Chaofan Tapa",
        price: 149,
        category: "friedrice",
        image: "images/cf-egg-tapa.webp",
        bestSeller: true,
        varieties: [
            { name: "Bagoong Chaofan Tapa", price: 159 },
            { name: "Tinapa Chaofan Tapa", price: 169 },
        ],
        flavors: [],
    },
    {
        name: "Pork Chaofan Chicken Wings",
        price: 105,
        category: "friedrice",
        image: "images/cf-egg-chickenwing.webp",
        bestSeller: true,
        varieties: [
            { name: "Bagoong Chaofan Wings", price:115 },
            { name: "Tinapa Chaofan Wings", price:125 },
        ],
        flavors: [
            { name: "Teriyaki", price: 5 },
            { name: "Soy garlic", price: 5 },
            { name: "Salted Egg", price: 5 },
             { name: "BBQ", price: 5 },
             { name: "Buffalo", price: 5 },
            { name: "Cheesy Wings", price: 15 },
            { name: "Garlic Parmesan", price: 15 }
        ],
    },
    {
        name: "Iced Americano",
        price: null,
        category: "coffee",
        image: "images/1000031110.webp",
        bestSeller: false,
        varieties: [
            { name: "Medium 16oz", price:60 },
             { name: "Large 22oz", price:65 }
        ],
        flavors: [
        ],
    },
    {
        name: "Caramel Macchiato",
        price: null,
        category: "coffee",
        image: "images/1000031107.webp",
        bestSeller: true,
        varieties: [
            { name: "Medium 16oz", price:69 },
             { name: "Large 22oz", price:79 }
        ],
        flavors: [
        ],
    },
    {
        name: "Cafe Latte",
        price: null,
        category: "coffee",
        image: "images/1000031108.webp",
        bestSeller: false,
        varieties: [
            { name: "Medium 16oz", price:69 },
             { name: "Large 22oz", price:79 }
        ],
        flavors: [
        ],
    },
    {
        name: "Coffee Jelly Latte",
        price: null,
        category: "coffee",
        image: "images/1000031112.webp",
        bestSeller: false,
        varieties: [
            { name: "Medium 16oz", price:80 },
             { name: "Large 22oz", price:90 }
        ],
        flavors: [
        ],
    },
    {
        name: "Ice Mocha",
        price:null ,
        category: "coffee",
        image: "images/1000031109.webp",
        bestSeller: true,
        varieties: [
            { name: "Medium 16oz", price:70 },
             { name: "Large 22oz", price:80 }
        ],
        flavors: [
        ],
    },
    {
        name: "Mango Milk",
        price:null ,
        category: "milkbase",
        image: "images/milkbasem.webp",
        bestSeller: false,
        varieties: [
            { name: "Medium 16oz", price:70 },
             { name: "Large 22oz", price:80 }
        ],
        flavors: [
        ],
    },
    {
        name: "Blueberry Milk",
        price: null,
        category: "milkbase",
        image: "images/milkbaseb.webp",
        bestSeller: false,
        varieties: [
            { name: "Medium 16oz", price:70 },
             { name: "Large 22oz", price:80 }
        ],
        flavors: [
        ],
    },
    {
        name: "Strawberry Milk",
        price: null,
        category: "milkbase",
        image: "images/milkbases.webp",
        bestSeller: true,
        varieties: [
            { name: "Medium 16oz", price:70 },
             { name: "Large 22oz", price:80 }
        ],
        flavors: [
        ],
    },
    {
        name: "Choco Milk",
        price: null,
        category: "milkbase",
        image: "images/milkbasec.webp",
        bestSeller: true,
        varieties: [
            { name: "Medium 16oz", price:70 },
             { name: "Large 22oz", price:80 }
        ],
        flavors: [
        ],
    },
    {
        name: "Kiwi",
        price: null,
        category: "fruitea",
        image: "images/ftkiwi.webp",
        bestSeller: false,
        varieties: [
            { name: "Medium 16oz", price:39 },
             { name: "Large 22oz", price:49 }
        ],
        flavors: [
        ],
    },
    {
        name: "Blueberry",
        price: null,
        category: "fruitea",
        image: "images/ftblueberry.webp",
        bestSeller: true,
        varieties: [
            { name: "Medium 16oz", price:39 },
             { name: "Large 22oz", price:49 }
        ],
        flavors: [
        ],
    },
    {
        name: "Green Apple",
        price: null,
        category: "fruitea",
        image: "images/ftgreen.webp",
        bestSeller: false,
        varieties: [
            { name: "Medium 16oz", price:39 },
             { name: "Large 22oz", price:49 }
        ],
        flavors: [
        ],
    },
    {
        name: "Lychee",
        price:null ,
        category: "fruitea",
        image: "images/ftlychee.webp",
        bestSeller: true,
        varieties: [
            { name: "Medium 16oz", price:39 },
             { name: "Large 22oz", price:49 }
        ],
        flavors: [
        ],
    },
    {
        name: "Passion Fruit",
        price: null,
        category: "fruitea",
        image: "images/ftpassion.webp",
        bestSeller: false,
        varieties: [
            { name: "Medium 16oz", price:39 },
             { name: "Large 22oz", price:49 }
        ],
        flavors: [
        ],
    },
    {
        name: "Lemon",
        price: null,
        category: "fruitea",
        image: "images/ftlemon.webp",
        bestSeller: false,
        varieties: [
            { name: "Medium 16oz", price:39 },
             { name: "Large 22oz", price:49 }
        ],
        flavors: [
        ],
    },
    {
        name: "Choco Lava Float",
        price:null ,
        category: "float",
        image: "images/floatc.webp",
        bestSeller: true,
        varieties: [
            { name: "Medium 16oz", price:80 },
             { name: "Large 22oz", price:95 }
        ],
        flavors: [
        ],
    },
    {
        name: "Coffee Float",
        price: null,
        category: "float",
        image: "images/floatcof.webp",
        bestSeller: true,
        varieties: [
            { name: "Medium 16oz", price:80 },
             { name: "Large 22oz", price:95 }
        ],
        flavors: [
        ],
    },
    {
        name: "Strawberry Milk Float",
        price: null,
        category: "float",
        image: "images/floats.webp",
        bestSeller: true,
        varieties: [
            { name: "Medium 16oz", price:80 },
             { name: "Large 22oz", price:95 }
        ],
        flavors: [
        ],
    },
    {
        name: "Blueberry Milk Float",
        price:null,
        category: "float",
        image: "images/floatb.webp",
        bestSeller: false,
        varieties: [
            { name: "Medium 16oz", price:80 },
             { name: "Large 22oz", price:95 }
        ],
        flavors: [
        ],
    },
    {
        name: "Milky Mango Float",
        price: null,
        category: "float",
        image: "images/floatm.webp",
        bestSeller: false,
        varieties: [
            { name: "Medium 16oz", price:80 },
             { name: "Large 22oz", price:95 }
        ],
        flavors: [
        ],
    },
    {
        name: "Coke Float",
        price: 55,
        category: "float",
        image: "images/floatcoke.webp",
        bestSeller: true,
        varieties: [
        ],
        flavors: [
        ],
    },
    {
        name: "Strawberry Puree with Lemonade",
        price: 80,
        category: "freshdrink",
        image: "images/1000031131.webp",
        bestSeller: false,
        varieties: [
            
        ],
        flavors: [
        ],
    },
    {
        name: "Fresh Lemon",
        price: null,
        category: "freshdrink",
        image: "images/freshpurelemon.webp",
        bestSeller: true,
        varieties: [
            { name: "Medium 16oz", price:49 },
             { name: "Large 22oz", price:69 }
        ],
        flavors: [
        ],
    },
    {
        name: "Fresh Lemon with Yakult",
        price: null,
        category: "freshdrink",
        image: "images/1000031132.webp",
        bestSeller: true,
        varieties: [
            { name: "Medium 16oz", price:69 },
             { name: "Large 22oz", price:89 }
        ],
        flavors: [
        ],
    },
    {
        name: "Chicken Wings",
        price: null,
        category: "platters",
        image: "images/1000031094.webp",
        bestSeller: false,
        varieties: [
            { name: "4 pcs", price: 125 },
            { name: "8 pcs", price: 250 },
            { name: "16 pcs", price: 500 } ,
            { name: "32+ 2 pcs", price: 999 },
            { name: "64+ 4 pcs", price: 1899 }
        ],
        flavors: [
            { name: "Salted Egg, Teriyaki, Soy garlic, Buffalo, BBQ", price:null  },
            { name: "Cheesy Wings for every 4pcs", price: 10 },
            { name: "Garlic Parmesan for every 4pcs", price: 10 }
        ],
    },
    {
        name: "Bilao good for 5 pax (Butterfly squid, porkchop, 8 pcs siomai, 6 pcs shanghai, 3pcs egg and 5 cups of Pork Chaofan",
        price: 520,
        category: "platters",
        image: "images/1000031093.webp",
        bestSeller: true,
        varieties: [
      
        ],
        flavors: [],
    },
    
    {
        name: "Shanghai",
        price: null,
        category: "platters",
        image: "images/1000031095.webp",
        bestSeller: true,
        varieties: [
            { name: "12 pcs", price: 120 },
            { name: "24 pcs", price: 240 },
            { name: "48 + 2 pcs", price: 480 } ,
            { name: "96+ 4 pcs", price: 960 }
        ],
        flavors: [],
    },
    {
        name: "Siomai",
        price: null,
        category: "platters",
        image: "images/1000031096.webp",
        bestSeller: true,
        varieties: [
            { name: "12 pcs", price: 90 },
            { name: "24 pcs", price: 180 },
            { name: "48 + 2 pcs", price: 360 } ,
            { name: "96+ 4 pcs", price: 720 }
        ],
        flavors: [],
    },
    {
        name: "Pork Chao Fan Platter",
        price: 169,
        category: "platters",
        image: "images/chaofanPlatter.webp",
        bestSeller: true,
        varieties: [
            { name: "Bagoong Chaofan Platter", price: 199 },
            { name: "Tinapa Chaofan Platter", price: 229 },
        ],
        flavors: [],
    },
    {
        name: "Caramel and Graham Ice Cream",
        price: null,
        category: "icecream",
        image: "images/CaramelIcecream.webp",
        bestSeller: false,
        varieties: [
            { name: "Medium", price:39 },
             { name: "Large", price:49 }
        ],
        flavors: [
        ],
    },
    {
        name: "Strawberry w/ Oreo Ice Cream",
        price: null,
        category: "icecream",
        image: "images/StrawberryIcecream.webp",
        bestSeller: false,
        varieties: [
            { name: "Medium", price:39 },
             { name: "Large", price:49 }
        ],
        flavors: [
        ],
    },
    {
        name: "Blueberry with Nata Ice Cream",
        price: null,
        category: "icecream",
        image: "images/BlueberryIcecream.webp",
        bestSeller: false,
        varieties: [
            { name: "Medium", price:39 },
             { name: "Large", price:49 }
        ],
        flavors: [
        ],
    },
    {
        name: "Chocolate w/ Oreo Ice Cream",
        price: null,
        category: "icecream",
        image: "images/COIcecream.webp",
        bestSeller: false,
        varieties: [
            { name: "Medium", price:39 },
             { name: "Large", price:49 }
        ],
        flavors: [
        ],
    },
    {
        name: "Plain Vanilla Ice Cream",
        price: null,
        category: "icecream",
        image: "images/PlainIcecream.webp",
        bestSeller: true,
        varieties: [
            { name: "Medium", price:39 },
             { name: "Large", price:49 }
        ],
        flavors: [
        ],
    },
    {
        name: "Plain Yogurt",
        price: null,
        category: "yogurt",
        image: "images/PlainYogurt.WEBP",
        bestSeller: true,
        varieties: [
            { name: "Medium", price:69 },
             { name: "Large", price:89 }
        ],
        flavors: [
        ],
    },
    {
        name: "French Fries",
        price: 75,
        category: "snacks",
        image: "images/1000031104.webp",
        bestSeller: true,
        varieties: [
            { name: "Cheesy Fries", price: 99 },
            { name: "Fries with BBQ Sauce", price: 99 },
            { name: "Fries with Buffalo Sauce", price: 99 }
        ],
        flavors: [],
    },
    {
        name: "Cheesy Carbonara Noodles Buldak",
        price: 130,
        category: "snacks",
        image: "images/1000031097.webp",
        bestSeller: true,
        varieties: [
            { name: "Cheesy Carbonara Noodles Buldak Overload", price: 180 },
            { name: "Cheesy Carbonara Noodles Buldak with Wings", price: 190 },
          
        ],
       
    },
    {
        name: "Classic Milk Tea",
        price: null,
        category: "milktea",
        image: "images/Cmilktea.webp",
        bestSeller: false,
        varieties: [
            { name: "Medium 16oz", price:70 },
             { name: "Large 22oz", price:80 }
        ],
        flavors: [
        ],
    },
    {
        name: "Oreo Cream cheese Milk Tea",
        price: null,
        category: "milktea",
        image: "images/CCmilktea.webp",
        bestSeller: true,
        varieties: [
            { name: "Medium 16oz", price:110 },
             { name: "Large 22oz", price:120 }
        ],
        flavors: [
        ],
    },
    {
        name: "Oreo Milk Tea",
        price: null,
        category: "milktea",
        image: "images/Omilktea.webp",
        bestSeller: false,
        varieties: [
            { name: "Medium 16oz", price:90 },
             { name: "Large 22oz", price:100 }
        ],
        flavors: [
        ],
    }
];

const milkTeaAddOns = [
    {
        name: "Oreo",
        price: 15,  
    },
    {
        name: "Cream Cheese",
        price: 30,
    },
    {
        name: "Coffee Jelly",
        price: 15,
    },
   
];
const snacksAddOns = [
    {
        name: "Cheese Sauce",
        price: 20,  
    },
    {
        name: "Nori 1 Pack",
        price: 25,
    },
    
];


const addOns = [
    {
        name: "Wing Sauce",
        price: 20,  
    },
    {
        name: "Extra Egg",
        price: 15,
    },
    {
        name: "Cabbage",
        price: 15,
    },
    {
        name: "Hotdog (1)",
        price: 12,  
    },
    {
        name: "Spam (1)",
        price: 20,
    },
    {
        name: "Shanghai (3)",
        price: 30,
    },{
        name: "Siomai (4)",
        price: 30,  
    },
    {
        name: "Buterfly Squid",
        price: 110,
    },
    {
        name: "Bangus",
        price: 60,
    },{
        name: "Wings (2)",
        price: 60,  
    },
    {
        name: "Plain Rice",
        price: 15,
    },
    {
        name: "Fruit Tea",
        price: 30,
    },
    {
        name: "Chili Oil",
        price: 10,
    }

];
