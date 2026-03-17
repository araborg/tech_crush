// Online Bookstore Order

// Task 1: Create Variables

const customerName = "Alice";
const customerAge = 32;
const bookTitle = "How to get what you want";
const bookPrice = 2500;
const quantity = 300;
const isStudent = true;

// Task 2: Use Arithmetic Operators

const totalPrice = bookPrice * quantity;
console.log(totalPrice);

// Task 3: Use Comparison Operators

// Check if the customer is 18 years or older.
if (customerAge > 18) {
	console.log("You are older than 18 years");
}

// Check if the quantity of books is more than 3.
if (quantity > 3) {
	console.log("You have more than 3 books");
}
// Check if the book price is equal to 5000.
if (bookPrice === 5000) {
	console.log("The book price is equal to $5000");
} else {
	console.log("The book price is less than $5000");
}
