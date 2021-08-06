var articulos = [
    {name: "Bici", price: 3000},
    {name: "TV", price: 2500},
    {name: "Libro", price: 250},
    {name: "Celular", price: 10000},
    {name: "Laptop", price: 20000},
    {name: "Teclado", price: 500},
    {name: "Audifonos", price: 1700},
];

// filter
var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.price <= 500;
});

//mostrar el array de resultado
articulosFiltrados;

// Map
var nameArticulos = articulos.map(function(articulo){
    return articulo.name;
});

//mostrar el array de resultado
nameArticulos;

// Some
var articulosBaratos = articulos.some(function(articulo){
    return articulo.price <= 700;
})

//mostrar el array de la validacion
articulosBaratos;

// Find
var encuentraArticulo = articulos.find(function(articulo){
    return articulo.name === "Laptop";
});

//mostrar el array de resultado
encuentraArticulo;

//ForEach
articulos.forEach(function(articulo){
    console.log(articulo.name);
})