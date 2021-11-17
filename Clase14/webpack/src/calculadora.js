const mensaje1 = () => {
    console.log("Mensaje1");
};
const mensaje2 = () => {
    console.log("Mensaje2");
};
const mensaje3 = () => {
    console.log("Mensaje3");
};

let obj = {
    abc1: () => {
        setTimeout(mensaje1, 1000)
    },
    abc2: () => {
        setTimeout(mensaje2, 2000)
    },
    abc3: () => {
        setTimeout(mensaje3, 3000)
    },
}

module.exports = obj;