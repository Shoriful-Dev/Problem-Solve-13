// Filtering an array of objects to display items base on a search query (e.g., filtering Products by type).

const products = [
  { name: 'Mobile', typr: 'Electronics' },
  { name: 'Laptop', typr: 'Electronics' },
  { name: 'Computer', typr: 'Electronics' },
  { name: 'Phone', typr: 'Electronics' },
  { name: 'Shirt', typr: 'Clothing' },
  { name: 'Pants', typr: 'Clothing' },
  { name: 'T-Shirt', typr: 'Clothing' }
];

const val = products.filter(function (product) {
  return product.type === "Electronics";
})

console.log(val);
