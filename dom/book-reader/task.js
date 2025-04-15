document.addEventListener('DOMContentLoaded', () => {
    const fontSizeLinks = document.querySelectorAll('.font-size');
    const book = document.getElementById('book');

     
    fontSizeLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();  

             
            fontSizeLinks.forEach(link => link.classList.remove('font-size_active'));

            
            link.classList.add('font-size_active');

             
            const size = link.getAttribute('data-size');
             
            book.classList.remove('book_fs-small', 'book_fs-big');

             
            if (size) {
                book.classList.add(`book_fs-${size}`);
            }
        });
    });
});