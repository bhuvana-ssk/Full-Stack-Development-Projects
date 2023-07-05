interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
  }
  
const products: Product[] = [
    { id: 1, name: "One Indian Girl", description: "Top Selling Book by Chetan Bhagat", price: 350 },
    { id: 2, name: "Noise SmartWatch", description: "Noise Pulse Go Buzz Watch with Advanced Bluetooth Connectivity", price: 2999 },
    { id: 3, name: "Centrino Formal Shoe", description: "Slip On UK Fit Synthetic Shoes", price: 700 }
];
  
export function getProductById(id: number): Product | undefined {
return products.find(product => product.id === id);
}

function displayProductDetails(id: number): void {
const product = getProductById(id);
if (product) {
    console.log(`Product Name: ${product.name}`);
    console.log(`Description: ${product.description}`);
    console.log(`Price: Rs.${product.price}`);
} else {
    console.log(`Product with ID ${id} not found`);
}
}
const readlineSync = require("readline-sync");
const id = readlineSync.questionInt("Enter the Product ID: ");  
displayProductDetails(id);