const express = require("express");
const { engine } = require("express-handlebars");

const app = express();
const PORT = 3000;


// DATOS
const nombreTienda = "MiniShop";

const mensajeBienvenida = "Bienvenido a nuestra tienda online";

const productos = [
    {
        nombre: "Camiseta Básica",
        precio: 15,
        disponible: true,
        imagen: "https://images.unsplash.com/photo-1574180566232-aaad1b5b8450?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        nombre: "Pantalón Jeans",
        precio: 30,
        disponible: false,
        imagen: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600"
    },
    {
        nombre: "Zapatos Deportivos",
        precio: 50,
        disponible: true,
        imagen: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600"
    },
    {
        nombre: "Chaqueta de Cuero",
        precio: 80,
        disponible: true,
        imagen: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600"
    },
    {
        nombre: "Gorra Clásica",
        precio: 12,
        disponible: true,
        imagen: "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=600"
    },
    {
        nombre: "Bolso de Mano",
        precio: 45,
        disponible: false,
        imagen: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600"
    },
    {
        nombre: "Reloj Digital",
        precio: 60,
        disponible: true,
        imagen: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=600"
    },
    {
        nombre: "Bufanda de Lana",
        precio: 18,
        disponible: true,
        imagen: "https://images.unsplash.com/photo-1737053595816-73f1b519a82c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        nombre: "Sudadera Hoodie",
        precio: 35,
        disponible: false,
        imagen: "https://plus.unsplash.com/premium_photo-1673356301340-4522591be5f7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        nombre: "Gafas de Sol",
        precio: 25,
        disponible: true,
        imagen: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600"
    }
];

// HANDLEBARS
app.engine("handlebars", engine({

    defaultLayout: "main",

    helpers: {

        mayusculas: (texto) => {
            return texto.toUpperCase();
        }

    }

}));

app.set("view engine", "handlebars");


// PUBLIC
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

// RUTAS
app.get("/", (req, res) => {

    res.render("home", {
        nombreTienda,
        mensajeBienvenida,
        productos
    });

});


app.get("/about", (req, res) => {

    res.render("about");

});

app.get("/contact", (req, res) => {

    res.render("contact");

});

app.post("/contact", (req, res) => {

    const nombre = req.body.nombre;

    res.render("success", {
        nombre
    });

});

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});

app.use((req, res) => {

    res.status(405).send("Método no permitido");

});