
export function displayBooks(books) {
    const bookList = document.getElementById('book-list');
    bookList.textContent = '';

    books.forEach(book =>{
        const bookItem = document.createElement('div');
        bookItem.classList.add('book-item');

        const title = document.createElement('h3');
        title.textContent = book.title || 'no title found';

        bookList.appendChild(bookItem);
        bookItem.appendChild(title);
    })
}