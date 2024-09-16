//Task 1 Create an Inventory Array of Product Objects
const inventory = [

    { name: 'Laptop', price: 1200, quantity: 10, lowStockLevel: 3 },
    
     { name: 'Smartphone', price: 800, quantity: 5, lowStockLevel: 2 },
    
    { name: 'Tablet', price: 400, quantity: 7, lowStockLevel: 1 },
    
     { name: 'Headphones', price: 100, quantity: 15, lowStockLevel: 5 },
    
    { name: 'Smartwatch', price: 250, quantity: 3, lowStockLevel: 1 }
    ];

console.log(inventory[inventory.length-1]);

inventory.forEach(product => {
    console.log(`Product: ${product.name}, Price: $${product.price}, Quantity: ${product.quantity}, Low Stock Level: ${product.lowStockLevel}`);
  });
  
//Task 2 Create a function to display product details
function displayProductDetails(product) {
    const inventoryStatus = product.quantity <= product.lowStockLevel ? "Low Stock" : "In Stock";
    console.log(`Product: ${product.name}`);
    console.log(`Price: $${product.price}`);
    console.log(`Number in Stock: ${product.quantity}`);
    console.log(`Inventory Status: ${inventoryStatus}`);
}
//Task 3 Create a Function to Update Product Stock After Sales
function updateStock(product, unitsSold) {
    product.quantity -= unitsSold;

    if (product.quantity <= 0) {
        product.quantity = 0;
        console.log(`${product.name} is Out of Stock.`);
    } else if (product.quantity <= product.lowStockLevel) {
        console.log(`${product.name} is Low on Stock. Only ${product.quantity} units available.`);
    } else {
        console.log(`${product.name} Updated. Current quantity: ${product.quantity} units.`);
    }
}
// Task 4 Create a Function to Check Low Stock Products

function checkLowStock(inventory) {
    inventory.forEach(product => {
        if (product.quantity < product.lowStockLevel) {
            console.log(`${product.name} is below low stock level. Current quantity: ${product.quantity}`);
        }
    });
}
// Task 5 Create Function to calculate Inventory Value

function calculateInventoryValue(inventory) {
    return inventory.reduce((totalValue, product) => {
        return totalValue + (product.price * product.quantity);
    }, 0);
}
// Task 6 Create Function to Process sale

function processSale(productName, unitsSold, inventory) {
    const product = inventory.find(item => item.name === productName);
  
    if (product) {
      updateStock(product, unitsSold);
    } else {
      console.log(`Error: ${productName} not in inventory.`);
    }
  }
