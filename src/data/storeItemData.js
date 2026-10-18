const storeItemData = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 49.99,
    quantityAvailable: 12,
    description: "Comfortable over-ear headphones with wireless connectivity.",
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    name: "Classic Wristwatch",
    price: 79.99,
    quantityAvailable: 8,
    description: "A stylish everyday watch with a minimalist design.",
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    name: "Running Shoes",
    price: 64.99,
    quantityAvailable: 10,
    description: "Lightweight athletic shoes designed for everyday comfort.",
    category: "Clothing",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: 4,
    name: "Digital Camera",
    price: 329.99,
    quantityAvailable: 5,
    description: "A compact camera for capturing everyday moments.",
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: 5,
    name: "Smartwatch",
    price: 119.99,
    quantityAvailable: 7,
    description: "A modern wearable for tracking activity and notifications.",
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: 6,
    name: "Cotton T-Shirt",
    price: 19.99,
    quantityAvailable: 25,
    description: "A versatile cotton T-shirt for everyday wear.",
    category: "Clothing",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: 7,
    name: "Leather Backpack",
    price: 54.99,
    quantityAvailable: 9,
    description: "A practical backpack for work, school, and travel.",
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: 8,
    name: "Ceramic Coffee Mug",
    price: 12.99,
    quantityAvailable: 20,
    description: "A reusable ceramic mug for your favorite hot beverages.",
    category: "Home",
    image:
      "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: 9,
    name: "Sunglasses",
    price: 24.99,
    quantityAvailable: 15,
    description: "Classic sunglasses for everyday outdoor use.",
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: 10,
    name: "Wireless Computer Mouse",
    price: 24.99,
    quantityAvailable: 14,
    description: "An ergonomic wireless mouse for work and browsing.",
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: 11,
    name: "Mechanical Keyboard",
    price: 69.99,
    quantityAvailable: 6,
    description: "A responsive keyboard for typing and everyday computing.",
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: 12,
    name: "Notebook",
    price: 7.99,
    quantityAvailable: 30,
    description: "A lined notebook for notes, planning, and journaling.",
    category: "Stationery",
    image:
      "https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: 13,
    name: "Reusable Water Bottle",
    price: 18.99,
    quantityAvailable: 18,
    description: "A reusable bottle for staying hydrated throughout the day.",
    category: "Home",
    image:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: 14,
    name: "Desk Lamp",
    price: 34.99,
    quantityAvailable: 8,
    description: "A modern desk lamp for reading and focused work.",
    category: "Home",
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: 15,
    name: "Leather Wallet",
    price: 29.99,
    quantityAvailable: 11,
    description: "A compact wallet for carrying cards and cash.",
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: 16,
    name: "Travel Coffee Tumbler",
    price: 16.99,
    quantityAvailable: 16,
    description: "A reusable tumbler for coffee and other drinks on the go.",
    category: "Home",
    image:
      "https://images.unsplash.com/photo-1577937927133-66ef06acdf18?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: 17,
    name: "Skincare Bottle",
    price: 14.99,
    quantityAvailable: 13,
    description: "A daily skincare product in a convenient bottle.",
    category: "Personal Care",
    image:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: 18,
    name: "Instant Film Camera",
    price: 89.99,
    quantityAvailable: 4,
    description: "A fun instant camera for printing memorable photographs.",
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&auto=format&fit=crop&q=80",
  },
];

export default storeItemData;
