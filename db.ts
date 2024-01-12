export const products = [
  {
    id: 264758285756,
    price: 800,
    rating: 4,
    discount: 12,
    name: "Beautifull UI/UX Design with TailwindCSS and NextJS",
    desc: "This is a full stack development course with react and nodejs. This course is for those who want to learn full stack development with react and nodejs.",
    image: "https://picsum.photos/670/451",
    category: [
      "Chakra Ui",
      "Remix-run",
      "React",
      "TailwindCSS",
      "NextJS",
      "UI/UX",
    ],
    owner: { id: 1, name: "Asif Ekbal" },
    purchases: 4050,
  },
  {
    id: 264758364856,
    price: 1200,
    rating: 3,
    discount: 10,
    name: "Interactive UI/UX Design with Bootstrap5 and React",
    desc: "This is a full stack development course with react and nodejs. This course is for those who want to learn full stack development with react and nodejs.",
    image: "https://picsum.photos/670/450",
    category: ["Bootstrap5", "react"],
    owner: { id: 2, name: "Rayad Ahmed" },
    purchases: 2200,
  },
  {
    id: 264798174856,
    price: 2600,
    rating: 5,
    discount: 4,
    name: "Full Stack Development with React and NodeJS",
    desc: "This is a full stack development course with react and nodejs. This course is for those who want to learn full stack development with react and nodejs.",
    image: "https://picsum.photos/670/452",
    category: ["React", "TailwindCSS", "NextJS", "UI/UX"],
    owner: { id: 3, name: "Asif Ekbal" },
    purchases: 50000,
  },
];

interface Owner {
  id: number;
  name: string;
}

export interface Product {
  id: number;
  price: number;
  rating: number;
  discount: number;
  name: string;
  desc: string;
  image: string;
  category: string[];
  owner: Owner;
  purchases: number;
}

export const getSingleProduct = (id: number): Product => {
  return products.find((product) => product.id === id) as Product;
};
