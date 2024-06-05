function filterBooks() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const books = document.getElementsByClassName('bookCard');

    for (let i = 0; i < books.length; i++) {
        const title = books[i].getAttribute('data-title').toLowerCase();
        if (title.includes(input)) {
            books[i].style.display = 'block';
        } else {
            books[i].style.display = 'none';
        }
    }
}

function addToBookshelf(button) {
    const bookCard = button.parentElement.cloneNode(true);
    bookCard.removeChild(bookCard.lastChild);
    document.getElementById('bookshelfList').appendChild(bookCard);
}

function toggleBookshelf() {
    const bookshelf = document.getElementById('bookshelf');
    if (bookshelf.style.display === 'none') {
        bookshelf.style.display = 'block';
    } else {
        bookshelf.style.display = 'none';
    }
}