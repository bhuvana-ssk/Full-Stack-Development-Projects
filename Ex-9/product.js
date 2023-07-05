"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductById = void 0;
var products = [
    { id: 1, name: "One Indian Girl", description: "Top Selling Book by Chetan Bhagat", price: 350 },
    { id: 2, name: "Noise SmartWatch", description: "Noise Pulse Go Buzz Watch with Advanced Bluetooth Connectivity", price: 2999 },
    { id: 3, name: "Centrino Formal Shoe", description: "Slip On UK Fit Synthetic Shoes", price: 700 }
];
function getProductById(id) {
    return products.find(function (product) { return product.id === id; });
}
exports.getProductById = getProductById;
function displayProductDetails(id) {
    var product = getProductById(id);
    if (product) {
        console.log("Product Name: ".concat(product.name));
        console.log("Description: ".concat(product.description));
        console.log("Price: Rs.".concat(product.price));
    }
    else {
        console.log("Product with ID ".concat(id, " not found"));
    }
}
var readlineSync = require("readline-sync");
var id = readlineSync.questionInt("Enter the Product ID: ");
displayProductDetails(id);
