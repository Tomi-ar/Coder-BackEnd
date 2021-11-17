// Se puede usar un metodo std de node para definir el path.
const path = require("path")

module.exports = {
    entry: "./src/index.js", //punto de entrada de la config, donde va a buscar los archivos
    output: {
        // path: __dirname+"/dist" //donde van a estar los archivos empaquetados. Se puede hacer asi o como abajo
        path: path.resolve(__dirname, "dist"),
        filename: "main.js" //nombre del archivo que empaqueta los js
    },
    module: {
        rules:[
            {
                test:/\.m?js$/, // para que busque todos los archivos js
                exclude: /(node_modules)/,  // para que excluya los js del node_modules
                use:{
                    loader: "babel-loader"
                }
            }
        ]
    }
}