export const products = [
  {
    id: 264758285756,
    price: 800,
    ratting: 4.2,
    discount: 12,
    name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl vitae luctus lacinia, nisl nunc faucibus nisl, quis aliquam nisl nun",
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
    ratting: 4.5,
    discount: 10,
    name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl vitae luctus lacinia, nisl nunc faucibus nisl, quis aliquam nisl nun",
    image: "https://picsum.photos/670/450",
    category: ["Bootstrap5", "react"],
    owner: { id: 2, name: "Rayad Ahmed" },
    purchases: 2200,
  },
  {
    id: 264798174856,
    price: 2600,
    ratting: 5,
    discount: 4,
    name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl vitae luctus lacinia, nisl nunc faucibus nisl, quis aliquam nisl nun",
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
  ratting: number;
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
