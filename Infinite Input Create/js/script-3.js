const container = document.getElementById('container');

function createForm() {
    createRow();
};

function createElement(name, properties) {
    const currentElement = document.createElement(name);
    Object.keys(properties).map(eachProperty => {
        currentElement.style[eachProperty] = properties[eachProperty];
    });
    return createElement;
}
 