
export function displayBooks(books) {
    const bookList = document.getElementById('book-list');
    bookList.textContent = '';

    books.forEach(book =>{
        const bookItem = document.createElement('div');
        bookItem.classList.add('book-item');

        const title = document.createElement('h3');
        title.textContent = book.title || 'no title found';
        title.classList.add('book-title');

        const author = document.createElement('p');
        author.textContent = 'author: ' + (book.author_name ? book.author_name.join(', ') : 'unknown');
        author.classList.add('book-author');

        if (book.cover_i) {
            const img = document.createElement('img');
            img.src = `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`;
            img.alt = book.title || 'book cover';
            img.classList.add('book-cover');
            bookItem.appendChild(img);
        } else {
            const img = document.createElement('img');
            img.src = '/assets/no-cover-available.png'
            img.alt = 'no cover found';
            img.classList.add('book-cover');
            bookItem.appendChild(img);
        }

        bookItem.appendChild(author);
        bookItem.appendChild(title);
        bookList.appendChild(bookItem);
    })
}