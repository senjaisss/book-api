import { getBooks } from "./api.js";
import { displayBooks } from "./displayUI.js";

async function init() {
    const books = await getBooks();
    displayBooks(books);
}

init();