function createCustomElement_v1(elementObj) {
    const domElement = document.createElement(elementObj.type);
    domElement.innerHTML = elementObj.children;
    domElement.setAttribute("href", elementObj.props.href);
    domElement.setAttribute("target", elementObj.props.target);

    return domElement;
}

function createCustomElement_v2(elementObj) {
    const domElement = document.createElement(elementObj.type);
    domElement.innerHTML = elementObj.children;
    for (const prop in elementObj.props) {
        if(prop == "children") continue;
        domElement.setAttribute(prop, elementObj.props[prop]);
    }

    return domElement;
}

const elementObj = {
    type: "a",
    props: {
        href: "https://www.example.com",
        target: "_blank"
    },
    children: "Click here"
}

// const customElement = createCustomElement_v1(elementObj);
const customElement = createCustomElement_v2(elementObj);

const container = document.getElementById("root");
container.appendChild(customElement);