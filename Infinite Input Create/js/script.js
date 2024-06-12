function generateHeading(headings) {
    const ul = document.createElement('ul');
    const fragment = document.createDocumentFragment();
    headings.forEach(heading => {
        const li = document.createElement('li');
        li.textContent = heading;
        fragment.appendChild(li)
    })
    ul.appendChild(fragment);
    document.body.appendChild(ul)
    const generetedLi = document.querySelectorAll('li');
    return Array.from(generetedLi);
}

function generateHeadingEditor() {
    const generateHeadings = generateHeading(['Name', 'Email', 'Password'])
    const ul = document.createElement('ul');
    const fragment = document.createDocumentFragment();
    generateHeadings.forEach(() => {
        const li = document.createElement('li');
        li.contentEditable = true;
        fragment.appendChild(li)
    })
    ul.appendChild(fragment);
    document.body.appendChild(ul)
}

generateHeadingEditor();
