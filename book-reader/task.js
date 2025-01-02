document.addEventListener('DOMContentLoaded', () => {
    const book = document.getElementById('book');

    // Управление размером шрифта
    const fontSizeControl = document.querySelector('.book__control_font-size');
    fontSizeControl.addEventListener('click', (event) => {
        event.preventDefault();
        const target = event.target;

        if (target.classList.contains('font-size')) {
            document.querySelector('.font-size_active').classList.remove('font-size_active');
            target.classList.add('font-size_active');
            book.classList.remove('book_fs-big', 'book_fs-small');

            const size = target.getAttribute('data-size');
            if (size === 'big') {
                book.classList.add('book_fs-big');
            } else if (size === 'small') {
                book.classList.add('book_fs-small');
            }
        }
    });

    // Управление цветом текста
    const textColorControl = document.querySelector('.book__control_color');
    textColorControl.addEventListener('click', (event) => {
        event.preventDefault();
        const target = event.target;

        if (target.classList.contains('color')) {
            document.querySelector('.book__control_color .color_active').classList.remove('color_active');
            target.classList.add('color_active');
            book.classList.remove('book_color-black', 'book_color-gray', 'book_color-whitesmoke');

            const textColor = target.getAttribute('data-text-color');
            if (textColor) {
                book.classList.add(`book_color-${textColor}`);
            }
        }
    });

    // Управление цветом фона
    const bgColorControl = document.querySelector('.book__control_background');
    bgColorControl.addEventListener('click', (event) => {
        event.preventDefault();
        const target = event.target;

        if (target.classList.contains('color')) {
            document.querySelector('.book__control_background .color_active').classList.remove('color_active');
            target.classList.add('color_active');
            book.classList.remove('book_bg-black', 'book_bg-gray', 'book_bg-white');

            const bgColor = target.getAttribute('data-bg-color');
            if (bgColor) {
                book.classList.add(`book_bg-${bgColor}`);
            }
        }
    });
});





