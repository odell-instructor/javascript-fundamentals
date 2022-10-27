/*
You are going to create a map of your Favorite Books.
You will need to either look them up on Amazon, or Barnes and Noble.
The key should be the ISBN-10 or ISBN-13 value.
The value should be the title of the book.

*/

const bookList = new Map();
bookList.set(978_1453273173, 'Blackcollar by Timothy Zahn');
bookList.set(978_1925047073, 'Dead Mech by Jake Bible');
bookList.set(979_8727842898, 'Zombie Fallout Book 1 by Mark Tufo');
bookList.set(978_0984492770, 'Season of the Harvest by Michael Hicks');
bookList.set(978_1453887660, 'Origin - A Technothriller by J.A. Konrath');
bookList.set(978_1600763281, 'Loch Ness by Donovan Galway');
bookList.set(978_1925342475, 'Atomic Rex - A Kaiju Thriller by Matthew Dennion');

// callback function
function bookEntries(value, key) {
    console.log(`ISBN ${key} - Book title:${value}`);
}

// forEach method to display the map
function displayBookCollection() {
    bookList.forEach(bookEntries);
}

displayBookCollection();