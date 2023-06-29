//! JS

//! Пример создания и вставки элемента в DOM с помощью "ванильного" JS.
// 1. Создаем переменную-ссылка на существующий в HTML документе объект (тег).
// const root = document.getElementById('root'); //!!!

// 2. Создаем новый элемент.
// const div = document.createElement('div'); //!!!

// 3. Вставляем созданный новый элемент в DOM.
// root.append(div); //!!!

//! JS + React 

//! Пример создания и вставки элемента в DOM с помощью "React".
// 1. Импортируем (подключаем) в наш JS файл библиотеки 'react' и 'react-dom/client' + CSS файл со стилями.
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import data from './data.json';
import { Cards } from './components/Cards';

// 2. Создаем переменную-ссылка на существующий в HTML документе объект (тег).
const root = document.getElementById('root'); //!!!

// 3. Создаем новый элемент, обращаясь к библиотеке "React".
// const div = React.createElement('div', {name: 'main', id: 'test-id', className: 'test-class'}); //!!!
// "props" - это объект с набором настроек создаваемого элемента. При использовании команды "React.createElement([элемент], {props})" вторым аргументом можно прописать объект-настроек "props". Внутри данного объекта прописываются свойства, которые при вставке создаваемого элемента в DOM будут выступать в качестве его атрибутов. Например, при создании тега-<div> прописываем "props" -> {name: 'main'}, в результате чего у данного тега-<div> в DOM, появится атрибут "name" со значением - 'main'.
//! Обрати внимание на то, что атрибут тега - "class", прописывается в "пропсах" с помощью служебного слова - "className".

// "children" - это дополнительный элемент - "ребенок", который так-же как и "props-ы" можно задать создаваемому "React-элементу". При использовании команды "React.createElement([тип создаваемого элемента], {props}, 'children')" третьим аргументом можно прописать текстовый литерал "children". Который будет встроен в создаваемый элемент в качестве его контента (т.е. будет вставлен между открывающимся и закрывающимся тегами). При этом, таких оргументов может быть бесконечное количество и они все будут вставлены в качестве контента создаваемого элемента.
// const div = React.createElement('div', { name: 'main' }, 'Hello-1', 'Hello-2', 'Hello-3'); //!!!
//! Если смотреть в консоли, то свойства "children" прописываются в этом объекте как элементы массива в объекте "props", поэтому их передавать можно и через соответствующее свойство в объекте-"props":
// const div = React.createElement('div', { name: 'main', children: ['Hello-1', ' ', 'Hello-2', ' ', 'Hello-3'], }); //!!!

// Создадим еще один элемент - тег-<p>.
// const paragraf = React.createElement('p', { name: 'paragraf', id: 'test-paragraf', children: ['I am paragraf - <p>'] }); //!!!

// Вставим "paragraf" в тег-<div> - 1-й вариант.
// const div = React.createElement('div', { name: 'main', children: paragraf, }); //!!!

// Вставим "paragraf" в тег-<div> - 2-й вариант.
// const div = React.createElement('div', { name: 'main' }, paragraf ); //!!!

//! Смотрим в консоль на созданный с помощью Реакта тег-<div>.
// console.log("div =>", div);
// Который по своей структуре и свойствам является объектом, а не DOM элементом.


// 4. Через функцию "ReactDOM" обращаемся к переменной "root", и указываем что именно в ней, мы хотим создать (какой элемент "зарендерить").
// ReactDOM.createRoot(root).render(div); //!!!
// В метод "render()" нужно передавать только те элементы, которые были созданы с помощью Реакта.

//! Более краткий вариант записи вышеописанных 3-х шагов вставки тега-<div> (со 2-го по 4-й).
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<div></div>);


//! JSX + React

// Создадим элемент - тег-<p> используя JSX.
// const p_JSX = <p id='test-p'>I am second paragraf</p>;

// Вставим "p_JSX" в тег-<div> используя JSX.
// const div_JSX = (
//     <div name='main-2' id='test-2' className='test-2'>
//         {p_JSX}
//     </div>
// );

//! Смотрим в консоль на созданный с помощью Реакта тег-<div>.
// console.log("div =>", div_JSX);

// ReactDOM.createRoot(root).render(div_JSX);


//! Рендер коллекции
// Импортируем массив-объектов из "data.json". 
// cм. 20-ю строку.

// Создаем разметку одной карточки в виде переменной.
// const singleCard = (<div className="card mx-auto my-2" style={{width: '18rem'}}>
//   <img src={data[0].url} className="card-img-top" alt={data[0].title} />
//   <div className="card-body">
//     <h5 className="card-title">Card title: {data[0].title}</h5>
//     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="http" className="btn btn-primary">Go somewhere</a>
//   </div>
// </div>)
//! Инлайновые стили нужно передавать как объект, поэтому "{{}}", где 1-я пара скобок вкл. JSX, а 2-я - собственно определяет объект.
//! Атрибут "class" нужно заменить на - "className".

// Создаем разметку всей галереи в виде переменной.
// const galleryOfCards = (
//     data.map(card => {
//         return (<div key={card.id} className="card mx-auto my-2" style={{ width: '18rem' }}>
//         <img src={card.url} className="card-img-top" alt={card.title} />
//         <div className="card-body">
//             <h5 className="card-title">Card title: {card.title}</h5>
//             <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//             <a href="http" className="btn btn-primary">Go somewhere</a>
//         </div>
//         </div>)
//         })
// );
//! "key" - это специальный Реакт элемент, который должен добавляться во все автоматически генерируемые одинаковые элементы. Он нужен для того что-бы Реакт смог различать эти одинаковые элементы между собой. В качестве "key" рекомендуется использовать уникальный параметр "id", который приходит с "бекенда".

// Смотрим в логе "galleryOfCards".
// console.log("galleryOfCards:", galleryOfCards);

// Вставляем в рендер переменную - "galleryOfCards".
// ReactDOM.createRoot(root).render(galleryOfCards); //!!!


// Создаем разметку всей галереи в виде функционального выражения (стрелочной функции).
// const fGalleryOfCards = () => {
//     return data.map(card => {
//         return (<div key={card.id} className="card mx-auto my-2" style={{ width: '18rem' }}>
//         <img src={card.url} className="card-img-top" alt={card.title} />
//         <div className="card-body">
//             <h5 className="card-title">Card title: {card.title}</h5>
//             <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//             <a href="http" className="btn btn-primary">Go somewhere</a>
//         </div>
//         </div>)
//         })
// };

// Вставляем в рендер функциональное выражение - "fGalleryOfCards()".
// ReactDOM.createRoot(root).render(fGalleryOfCards()); //!!!


// Создаем разметку всей галереи в виде компонента Реакта (пишем имя функции с большой буквы).
// const FGalleryOfCards = () => {
//     return data.map(card => {
//         return (<div key={card.id} className="card mx-auto my-2" style={{ width: '18rem' }}>
//         <img src={card.url} className="card-img-top" alt={card.title} />
//         <div className="card-body">
//             <h5 className="card-title">Card title: {card.title}</h5>
//             <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//             <a href="http" className="btn btn-primary">Go somewhere</a>
//         </div>
//         </div>)
//         })
// };

// Вставляем в рендер компонент Реакта - "<FGalleryOfCards />".
// ReactDOM.createRoot(root).render(<FGalleryOfCards />); //!!!

// Создаем новый Реакт компонент.
const Head = (props) => {
    return <p className={props.clas} id={props.id}>I am Head</p>
}

// Вставляем один Реакт компонент внутрь другого Реакт компонента.
// const PL_f_GalleryOfCards = () => {
//     return data.map(card => {
//         return (<div key={card.id} className="card mx-auto my-2" style={{ width: '18rem' }}>
//         <img src={card.url} className="card-img-top" alt={card.title} />
//         <div className="card-body">
//             <h5 className="card-title">Card title: {card.title}</h5>
//                 {/* Вставляем в виде функции */}
//                 {Head({ id: 'id-123', clas: 'card-title-1' })}
//                 {/* Задаем функции аргумент в виде объекта, который в Реакте принято называть - "props" */}
                
//                 {/* Вставляем в виде Реакт компонента */}
//                 <Head id='id-456' clas='card-title-2' />
//                 {/* Обрати внимание на то, что в синтаксисе Реакт компонента свойства "props-ов" прописываются без "{}" и с использованием "=" вместо ":" */}

//             <a href="http" className="btn btn-primary">Go somewhere</a>
//         </div>
//         </div>)
//         })
// };

// Вставляем в рендер компонент Реакта - "<PL_f_GalleryOfCards />".
// ReactDOM.createRoot(root).render(<PL_f_GalleryOfCards />); //!!!
//! Важно помнить, что метод "render()" принимает только один аргумент!!!
//! При подстановке в метод "render()" в качестве аргумента функции - не забываем ставить "()", т.к. нужно активировать выполнение соответствующей функции, а не дать ссылку на нее!!!
//! Компонент Реакта - это элемент синтаксиса Реакта, который по своей сути является обычной JS функцией или функциональным выражением, имя которого записано с большой буквы! + При подстановке в метод "render()" компонента - его надо записывать как тег, например: есть функциональное выражение с именем "FGalleryOfCards", в метод "render()" нужно вставить -> "render(<FGalleryOfCards />)".


// Существует базовая структура построения кода в Реакте, в основе которой лежит распределение кода компонентов (функций которые описывают отдельные элементы) в отдельные файлы. При этом, для каждого компонента принято выделять отдельный файл. Расширение таких файлов мот быть "JS" или "JSX", разницы нет. Но, лучше всего с помощью расширения указывать на содержимое соответствующего файла, например, если внутри файла используется "JSX" разметка, то ему - давать "JSX" расширение, а если в файле только "JS" функция, то и расширение - "JS".

//! Пример работы с компонентами в отдельных файлах.
// Импортируем компонент "Cards" в файл, см. 21-ю строку.

// Рендерим компонент "Cards" в DOM.
ReactDOM.createRoot(root).render(<Cards />);

//! "prop-types" - это специальный описательный синтаксис свойств "props-ов", который позволяет дополнительно устанавливать тип данных в каждом отдельном "props-е". Для их использования нужно установить в сборку соответствующий пакетик. Пример описан в коде компонента "Head" (см. файл - Head.jsx).



// Остановился на - 1:45:00 (https://www.youtube.com/watch?v=2OAcJ99XCeE)

