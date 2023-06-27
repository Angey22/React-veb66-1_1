//! Пример создания и вставки элемента в DOM с помощью "ванильного" JS.
// 1. Создаем переменную-ссылка на существующий в HTML документе объект (тег).
// const root = document.getElementById('root'); //!!!

// 2. Создаем новый элемент.
// const div = document.createElement('div'); //!!!

// 3. Вставляем созданный новый элемент в DOM.
// root.append(div); //!!!


//! Пример создания и вставки элемента в DOM с помощью "React".
// 1. Импортируем (подключаем) в наш JS файл библиотеки 'react' и 'react-dom/client' + CSS файл со стилями.
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// 2. Создаем переменную-ссылка на существующий в HTML документе объект (тег).
// const root = document.getElementById('root'); //!!!

// 3. Создаем новый элемент, обращаясь к библиотеке "React".
// const div = React.createElement('div'); //!!!

// 4. Через функцию "ReactDOM" обращаемся к переменной "root", и указываем что именно в ней, мы хотим создать (какой элемент "зарендерить").
// ReactDOM.createRoot(root).render(div); //!!!

//! Более краткий вариант записи вышеописанных 3-х шагов (со 2-го по 4-й).
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<div></div>);

// Остановился на - 0:33:03 (https://www.youtube.com/watch?v=2OAcJ99XCeE)

