const express = require('express');
const app = express();
const http = require('http') .createServer(app);
const io = require ('socket.io')(http);


app.post('/agregarProducto', (req, res) => {
    const {nombre, tipo, precio} = req.body;
});

const nuevoProducto = {
    nombre: playstation,
    tipo: nuevo,
    precio: 50000
};

const nuevoProducto2 = {
    nombre: audiculares,
    tipo: nuevo,
    precio: 30000

};


const nuevoProducto3 = {
    nombre: iphone,
    tipo: usado,
    precio: 55000
};

const nuevoProducto4 = {
    nombre: computadora,
    tipo: nuevo,
    precio: 70000
};

productos.push(nuevoProducto);


io.emit('productoAgregado', nuevoProducto);

res.send('producto agregado exitosamente');


http.listen(8080, () => {
    console.log('servidor http escuchando en el puerto 8080');
});

