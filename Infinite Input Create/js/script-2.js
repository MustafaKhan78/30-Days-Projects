// const container = document.getElementById('container');
// function createForm() {
//     createRow();
// }

// function createElement(name, properties) {
//     const currentElement = document.createElement(name);
//     Object.keys(properties).map(eachProperty => {
//         currentElement.style[eachProperty] = properties[eachProperty];
//     });
//     return currentElement;
// }

// function createRow(size = 5) {
//     let isAllEmpty = false;
//     const ul = createElement('ul', {});
//     ul.classList.add('row');

//     for (let i = 0; i < size; i++) {
//         const currentColumn = createElement('li', {});

//         currentColumn.setAttribute('contentEditable', true);

//         currentColumn.classList.add('column');
//         ul.append(currentColumn);

//         currentColumn.addEventListener('keydown', (e) => {
//             if (e.key === 'Enter' && currentColumn.textContent.trim() === '') {
//                 // check empty fields first
//                 createForm()
//             } else if (e.key === 'Backspace') {
//                 const newGeneratedColumn = Array.from(document.querySelectorAll('.column')).slice(size - 5 - size)
//                 // console.log(newGeneratedColumn);
//                 isAllEmpty = newGeneratedColumn.every(eachColumn => eachColumn.textContent.trim() === '');

//                 if (isAllEmpty) {
//                     // console.log(ul);
//                     ul.parentNode.removeChild(ul);
//                 }
//             }

//             const columns = ul.getElementsByClassName('column');
//             const lastColumn = columns[columns.length - 1];
//             if (currentColumn === lastColumn && lastColumn.textContent.trim() === '') {
//                 createForm();
//             }
//         })
//     }

//     container.append(ul);
// }

// createForm();