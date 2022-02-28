const { Product } = require("./models");

let fakeData = [
  {
    name: "Marble",
    price: 165,
    description:
      "This small coin purse is the ideal size for slipping into any bag. You can simply and tastefully store spare change, cards, and other small needs by pairing it with one of our bags or carrying it on its own. Featuring a variety of textile motifs and a pom-pom zip pull for added fun. Handwoven from coloured sheep wool that is non-toxic.",
    category: "Mature bag",
    image: "C:\\Users\\a7s\\Downloads\\merojholaa\\merojholaa\\product1.jpg",
    rating: 3,
  },
  {
    name: "Toy Soldier",
    price: 199,
    description:
      "This small coin purse is the ideal size for slipping into any bag. You can simply and tastefully store spare change, cards, and other small needs by pairing it with one of our bags or carrying it on its own. Featuring a variety of textile motifs and a pom-pom zip pull for added fun. Handwoven from coloured sheep wool that is non-toxic.",
    category: "Mature bag",
    image: "C:\\Users\\a7s\\Downloads\\merojholaa\\merojholaa\\product2.jpg",
    rating: 4,
  },
  {
    name: "White Out",
    price: 99,
    description:
      "This small coin purse is the ideal size for slipping into any bag. You can simply and tastefully store spare change, cards, and other small needs by pairing it with one of our bags or carrying it on its own. Featuring a variety of textile motifs and a pom-pom zip pull for added fun. Handwoven from coloured sheep wool that is non-toxic.",
    category: "Mature bag",
    image: "C:\\Users\\a7s\\Downloads\\merojholaa\\merojholaa\\product3.jpg",
    rating: 5,
  },
  {
    name: "Ice Cube",
    price: 199,
    description:
      "This small coin purse is the ideal size for slipping into any bag. You can simply and tastefully store spare change, cards, and other small needs by pairing it with one of our bags or carrying it on its own. Featuring a variety of textile motifs and a pom-pom zip pull for added fun. Handwoven from coloured sheep wool that is non-toxic.",
    category: "Mature bag",
    image: "C:\\Users\\a7s\\Downloads\\merojholaa\\merojholaa\\product4.jpg",
    rating: 4,
  },
  {
    name: "Trucks",
    price: 160,
    description:
      "This small coin purse is the ideal size for slipping into any bag. You can simply and tastefully store spare change, cards, and other small needs by pairing it with one of our bags or carrying it on its own. Featuring a variety of textile motifs and a pom-pom zip pull for added fun. Handwoven from coloured sheep wool that is non-toxic.",
    category: "Mature bag",
    image: "C:\\Users\\a7s\\Downloads\\merojholaa\\merojholaa\\product5.jpg",
    rating: 4,
  },
  {
    name: "Pocketwatch",
    price: 499,
    description:
      "This small coin purse is the ideal size for slipping into any bag. You can simply and tastefully store spare change, cards, and other small needs by pairing it with one of our bags or carrying it on its own. Featuring a variety of textile motifs and a pom-pom zip pull for added fun. Handwoven from coloured sheep wool that is non-toxic.",
    category: "Mature bag",
    image: "C:\\Users\\a7s\\Downloads\\merojholaa\\merojholaa\\product6.jpg",
    rating: 4,
  },
  {
    name: "Rat",
    price: 399,
    description:
      "This small coin purse is the ideal size for slipping into any bag. You can simply and tastefully store spare change, cards, and other small needs by pairing it with one of our bags or carrying it on its own. Featuring a variety of textile motifs and a pom-pom zip pull for added fun. Handwoven from coloured sheep wool that is non-toxic.",
    category: "Mature bag",
    image: "C:\\Users\\a7s\\Downloads\\merojholaa\\merojholaa\\product7.jpg",
    rating: 3,
  },
  {
    name: "Socks",
    price: 299,
    description:
      "This small coin purse is the ideal size for slipping into any bag. You can simply and tastefully store spare change, cards, and other small needs by pairing it with one of our bags or carrying it on its own. Featuring a variety of textile motifs and a pom-pom zip pull for added fun. Handwoven from coloured sheep wool that is non-toxic.",
    category: "Mature bag",
    image: "C:\\Users\\a7s\\Downloads\\merojholaa\\merojholaa\\product8.jpg",
    rating: 1,
  },
  {
    name: "Lotion",
    price: 199,
    description:
      "This small coin purse is the ideal size for slipping into any bag. You can simply and tastefully store spare change, cards, and other small needs by pairing it with one of our bags or carrying it on its own. Featuring a variety of textile motifs and a pom-pom zip pull for added fun. Handwoven from coloured sheep wool that is non-toxic.",
    category: "Mature bag",
    image: "C:\\Users\\a7s\\Downloads\\merojholaa\\merojholaa\\product9.jpg",
    rating: 2,
  },
  {
    name: "Lemon",
    price: 190,
    description:
      "This small coin purse is the ideal size for slipping into any bag. You can simply and tastefully store spare change, cards, and other small needs by pairing it with one of our bags or carrying it on its own. Featuring a variety of textile motifs and a pom-pom zip pull for added fun. Handwoven from coloured sheep wool that is non-toxic.",
    category: "Mature bag",
    image: "C:\\Users\\a7s\\Downloads\\merojholaa\\merojholaa\\product10.jpg",
    rating: 1,
  },
  {
    name: "Marble",
    price: 165,
    description:
      "This small coin purse is the ideal size for slipping into any bag. You can simply and tastefully store spare change, cards, and other small needs by pairing it with one of our bags or carrying it on its own. Featuring a variety of textile motifs and a pom-pom zip pull for added fun. Handwoven from coloured sheep wool that is non-toxic.",
    category: "Mature bag",
    image: "C:\\Users\\a7s\\Downloads\\merojholaa\\merojholaa\\product11.jpg",
    rating: 3,
  },
  {
    name: "Toy Soldier",
    price: 199,
    description:
      "This small coin purse is the ideal size for slipping into any bag. You can simply and tastefully store spare change, cards, and other small needs by pairing it with one of our bags or carrying it on its own. Featuring a variety of textile motifs and a pom-pom zip pull for added fun. Handwoven from coloured sheep wool that is non-toxic.",
    category: "Mature bag",
    image: "C:\\Users\\a7s\\Downloads\\merojholaa\\merojholaa\\product12.jpg",
    rating: 4,
  },
  {
    name: "White Out",
    price: 175,
    description:
      "This small coin purse is the ideal size for slipping into any bag. You can simply and tastefully store spare change, cards, and other small needs by pairing it with one of our bags or carrying it on its own. Featuring a variety of textile motifs and a pom-pom zip pull for added fun. Handwoven from coloured sheep wool that is non-toxic.",
    category: "Mature bag",
    image: "C:\\Users\\a7s\\Downloads\\merojholaa\\merojholaa\\product13.jpg",
    rating: 5,
  },
  {
    name: "Ice Cube",
    price: 255,
    description:
      "This small coin purse is the ideal size for slipping into any bag. You can simply and tastefully store spare change, cards, and other small needs by pairing it with one of our bags or carrying it on its own. Featuring a variety of textile motifs and a pom-pom zip pull for added fun. Handwoven from coloured sheep wool that is non-toxic.",
    category: "Mature bag",
    image: "C:\\Users\\a7s\\Downloads\\merojholaa\\merojholaa\\product14.jpg",
    rating: 4,
  },
  {
    name: "Trucks",
    price: 275,
    description:
      "This small coin purse is the ideal size for slipping into any bag. You can simply and tastefully store spare change, cards, and other small needs by pairing it with one of our bags or carrying it on its own. Featuring a variety of textile motifs and a pom-pom zip pull for added fun. Handwoven from coloured sheep wool that is non-toxic.",
    category: "Mature bag",
    image: "C:\\Users\\a7s\\Downloads\\merojholaa\\merojholaa\\product15.jpg",
    rating: 4,
  },
  {
    name: "Pocketwatch",
    price: 215,
    description:
      "This small coin purse is the ideal size for slipping into any bag. You can simply and tastefully store spare change, cards, and other small needs by pairing it with one of our bags or carrying it on its own. Featuring a variety of textile motifs and a pom-pom zip pull for added fun. Handwoven from coloured sheep wool that is non-toxic.",
    category: "Mature bag",
    image: "C:\\Users\\a7s\\Downloads\\merojholaa\\merojholaa\\product16.jpg",
    rating: 4,
  },
  {
    name: "Rat",
    price: 200,
    description:
      "This small coin purse is the ideal size for slipping into any bag. You can simply and tastefully store spare change, cards, and other small needs by pairing it with one of our bags or carrying it on its own. Featuring a variety of textile motifs and a pom-pom zip pull for added fun. Handwoven from coloured sheep wool that is non-toxic.",
    category: "Mature bag",
    image: "C:\\Users\\a7s\\Downloads\\merojholaa\\merojholaa\\product17.jpg",
    rating: 3,
  },
  {
    name: "Socks",
    price: 110,
    description:
      "This small coin purse is the ideal size for slipping into any bag. You can simply and tastefully store spare change, cards, and other small needs by pairing it with one of our bags or carrying it on its own. Featuring a variety of textile motifs and a pom-pom zip pull for added fun. Handwoven from coloured sheep wool that is non-toxic.",
    category: "Mature bag",
    image: "C:\\Users\\a7s\\Downloads\\merojholaa\\merojholaa\\product18.jpg",
    rating: 1,
  },
  {
    name: "Lotion",
    price: 125,
    description:
      "This small coin purse is the ideal size for slipping into any bag. You can simply and tastefully store spare change, cards, and other small needs by pairing it with one of our bags or carrying it on its own. Featuring a variety of textile motifs and a pom-pom zip pull for added fun. Handwoven from coloured sheep wool that is non-toxic.",
    category: "Mature bag",
    image: "C:\\Users\\a7s\\Downloads\\merojholaa\\merojholaa\\product19.jpg",
    rating: 2,
  },
  {
    name: "Lemon",
    price: 150,
    description:
      "This small coin purse is the ideal size for slipping into any bag. You can simply and tastefully store spare change, cards, and other small needs by pairing it with one of our bags or carrying it on its own. Featuring a variety of textile motifs and a pom-pom zip pull for added fun. Handwoven from coloured sheep wool that is non-toxic.",
    category: "Mature bag",
    image: "C:\\Users\\a7s\\Downloads\\merojholaa\\merojholaa\\product20.jpg",
    rating: 1,
  },
  {
    name: "Marble",
    price: 165,
    description:
      "This small coin purse is the ideal size for slipping into any bag. You can simply and tastefully store spare change, cards, and other small needs by pairing it with one of our bags or carrying it on its own. Featuring a variety of textile motifs and a pom-pom zip pull for added fun. Handwoven from coloured sheep wool that is non-toxic.",
    category: "Mature bag",
    image: "C:\\Users\\a7s\\Downloads\\merojholaa\\merojholaa\\product21.jpg",
    rating: 3,
  },
  {
    name: "Toy Soldier",
    price: 199,
    description:
      "This small coin purse is the ideal size for slipping into any bag. You can simply and tastefully store spare change, cards, and other small needs by pairing it with one of our bags or carrying it on its own. Featuring a variety of textile motifs and a pom-pom zip pull for added fun. Handwoven from coloured sheep wool that is non-toxic.",
    category: "Mature bag",
    image: "C:\\Users\\a7s\\Downloads\\merojholaa\\merojholaa\\product22.jpg",
    rating: 4,
  },
  {
    name: "White Out",
    price: 99,
    description:
      "This small coin purse is the ideal size for slipping into any bag. You can simply and tastefully store spare change, cards, and other small needs by pairing it with one of our bags or carrying it on its own. Featuring a variety of textile motifs and a pom-pom zip pull for added fun. Handwoven from coloured sheep wool that is non-toxic.",
    category: "Mature bag",
    image: "C:\\Users\\a7s\\Downloads\\merojholaa\\merojholaa\\product23.jpg",
    rating: 5,
  },
  {
    name: "Ice Cube",
    price: 199,
    description:
      "This small coin purse is the ideal size for slipping into any bag. You can simply and tastefully store spare change, cards, and other small needs by pairing it with one of our bags or carrying it on its own. Featuring a variety of textile motifs and a pom-pom zip pull for added fun. Handwoven from coloured sheep wool that is non-toxic.",
    category: "Mature bag",
    image: "C:\\Users\\a7s\\Downloads\\merojholaa\\merojholaa\\product24.jpg",
    rating: 4,
  },
  {
    name: "Trucks",
    price: 160,
    description:
      "This small coin purse is the ideal size for slipping into any bag. You can simply and tastefully store spare change, cards, and other small needs by pairing it with one of our bags or carrying it on its own. Featuring a variety of textile motifs and a pom-pom zip pull for added fun. Handwoven from coloured sheep wool that is non-toxic.",
    category: "Mature bag",
    image: "C:\\Users\\a7s\\Downloads\\merojholaa\\merojholaa\\product25.jpg",
    rating: 4,
  },
  {
    name: "Pocketwatch",
    price: 499,
    description:
      "This small coin purse is the ideal size for slipping into any bag. You can simply and tastefully store spare change, cards, and other small needs by pairing it with one of our bags or carrying it on its own. Featuring a variety of textile motifs and a pom-pom zip pull for added fun. Handwoven from coloured sheep wool that is non-toxic.",
    category: "Mature bag",
    image: "C:\\Users\\a7s\\Downloads\\merojholaa\\merojholaa\\product26.jpg",
    rating: 4,
  },
  {
    name: "Rat",
    price: 399,
    description:
      "This small coin purse is the ideal size for slipping into any bag. You can simply and tastefully store spare change, cards, and other small needs by pairing it with one of our bags or carrying it on its own. Featuring a variety of textile motifs and a pom-pom zip pull for added fun. Handwoven from coloured sheep wool that is non-toxic.",
    category: "Mature bag",
    image: "C:\\Users\\a7s\\Downloads\\merojholaa\\merojholaa\\product27.jpg",
    rating: 3,
  },
  {
    name: "Socks",
    price: 299,
    description:
      "This small coin purse is the ideal size for slipping into any bag. You can simply and tastefully store spare change, cards, and other small needs by pairing it with one of our bags or carrying it on its own. Featuring a variety of textile motifs and a pom-pom zip pull for added fun. Handwoven from coloured sheep wool that is non-toxic.",
    category: "Mature bag",
    image: "C:\\Users\\a7s\\Downloads\\merojholaa\\merojholaa\\product28.jpg",
    rating: 1,
  },
  {
    name: "Lotion",
    price: 199,
    description:
      "This small coin purse is the ideal size for slipping into any bag. You can simply and tastefully store spare change, cards, and other small needs by pairing it with one of our bags or carrying it on its own. Featuring a variety of textile motifs and a pom-pom zip pull for added fun. Handwoven from coloured sheep wool that is non-toxic.",
    category: "Mature bag",
    image: "C:\\Users\\a7s\\Downloads\\merojholaa\\merojholaa\\product29.jpg",
    rating: 2,
  },
  {
    name: "Lemon",
    price: 190,
    description:
      "This small coin purse is the ideal size for slipping into any bag. You can simply and tastefully store spare change, cards, and other small needs by pairing it with one of our bags or carrying it on its own. Featuring a variety of textile motifs and a pom-pom zip pull for added fun. Handwoven from coloured sheep wool that is non-toxic.",
    category: "Mature bag",
    image: "C:\\Users\\a7s\\Downloads\\merojholaa\\merojholaa\\product30.jpg",
    rating: 1,
  },
  {
    name: "Marble",
    price: 165,
    description:
      "This small coin purse is the ideal size for slipping into any bag. You can simply and tastefully store spare change, cards, and other small needs by pairing it with one of our bags or carrying it on its own. Featuring a variety of textile motifs and a pom-pom zip pull for added fun. Handwoven from coloured sheep wool that is non-toxic.",
    category: "Mature bag",
    image: "C:\\Users\\a7s\\Downloads\\merojholaa\\merojholaa\\product31.jpg",
    rating: 3,
  },
  {
    name: "Toy Soldier",
    price: 199,
    description:
      "This small coin purse is the ideal size for slipping into any bag. You can simply and tastefully store spare change, cards, and other small needs by pairing it with one of our bags or carrying it on its own. Featuring a variety of textile motifs and a pom-pom zip pull for added fun. Handwoven from coloured sheep wool that is non-toxic.",
    category: "Mature bag",
    image: "C:\\Users\\a7s\\Downloads\\merojholaa\\merojholaa\\product32.jpg",
    rating: 4,
  },
  {
    name: "White Out",
    price: 99,
    description:
      "This small coin purse is the ideal size for slipping into any bag. You can simply and tastefully store spare change, cards, and other small needs by pairing it with one of our bags or carrying it on its own. Featuring a variety of textile motifs and a pom-pom zip pull for added fun. Handwoven from coloured sheep wool that is non-toxic.",
    category: "Mature bag",
    image: "C:\\Users\\a7s\\Downloads\\merojholaa\\merojholaa\\product33.jpg",
    rating: 5,
  },
  {
    name: "Ice Cube",
    price: 199,
    description:
      "This small coin purse is the ideal size for slipping into any bag. You can simply and tastefully store spare change, cards, and other small needs by pairing it with one of our bags or carrying it on its own. Featuring a variety of textile motifs and a pom-pom zip pull for added fun. Handwoven from coloured sheep wool that is non-toxic.",
    category: "Mature bag",
    image: "C:\\Users\\a7s\\Downloads\\merojholaa\\merojholaa\\product34.jpg",
    rating: 4,
  },
  {
    name: "Trucks",
    price: 160,
    description:
      "This small coin purse is the ideal size for slipping into any bag. You can simply and tastefully store spare change, cards, and other small needs by pairing it with one of our bags or carrying it on its own. Featuring a variety of textile motifs and a pom-pom zip pull for added fun. Handwoven from coloured sheep wool that is non-toxic.",
    category: "Mature bag",
    image: "C:\\Users\\a7s\\Downloads\\merojholaa\\merojholaa\\product35.jpg",
    rating: 4,
  },
  {
    name: "Pocketwatch",
    price: 499,
    description:
      "This small coin purse is the ideal size for slipping into any bag. You can simply and tastefully store spare change, cards, and other small needs by pairing it with one of our bags or carrying it on its own. Featuring a variety of textile motifs and a pom-pom zip pull for added fun. Handwoven from coloured sheep wool that is non-toxic.",
    category: "Mature bag",
    image: "C:\\Users\\a7s\\Downloads\\merojholaa\\merojholaa\\product36.jpg",
    rating: 4,
  },
  {
    name: "Rat",
    price: 399,
    description:
      "This small coin purse is the ideal size for slipping into any bag. You can simply and tastefully store spare change, cards, and other small needs by pairing it with one of our bags or carrying it on its own. Featuring a variety of textile motifs and a pom-pom zip pull for added fun. Handwoven from coloured sheep wool that is non-toxic.",
    category: "Mature bag",
    image: "C:\\Users\\a7s\\Downloads\\merojholaa\\merojholaa\\product37.jpg",
    rating: 3,
  },
  {
    name: "Socks",
    price: 299,
    description:
      "This small coin purse is the ideal size for slipping into any bag. You can simply and tastefully store spare change, cards, and other small needs by pairing it with one of our bags or carrying it on its own. Featuring a variety of textile motifs and a pom-pom zip pull for added fun. Handwoven from coloured sheep wool that is non-toxic.",
    category: "Mature bag",
    image: "C:\\Users\\a7s\\Downloads\\merojholaa\\merojholaa\\product38.jpg",
    rating: 1,
  },
  {
    name: "Lotion",
    price: 199,
    description:
      "This small coin purse is the ideal size for slipping into any bag. You can simply and tastefully store spare change, cards, and other small needs by pairing it with one of our bags or carrying it on its own. Featuring a variety of textile motifs and a pom-pom zip pull for added fun. Handwoven from coloured sheep wool that is non-toxic.",
    category: "Mature bag",
    image: "C:\\Users\\a7s\\Downloads\\merojholaa\\merojholaa\\product39.jpg",
    rating: 2,
  },
  {
    name: "Lemon",
    price: 190,
    description:
      "This small coin purse is the ideal size for slipping into any bag. You can simply and tastefully store spare change, cards, and other small needs by pairing it with one of our bags or carrying it on its own. Featuring a variety of textile motifs and a pom-pom zip pull for added fun. Handwoven from coloured sheep wool that is non-toxic.",
    category: "Mature bag",
    image: "C:\\Users\\a7s\\Downloads\\merojholaa\\merojholaa\\product40.jpg",
    rating: 1,
  },
];

var done = 0;
for (var i = 0; i < fakeData.length; i++) {
  let n = new Product(fakeData[i]);
  n.save(function (err, res) {
    dont++;
    if (done === fakeData.length) {
      exit();
    }
  });
}

function exit() {
  mongoose.disconnect();
}
