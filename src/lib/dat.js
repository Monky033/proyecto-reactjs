const COMPUTADORAS = [
  {
    id: 1,
    nombre: "Tiesa",
    category: "perdido",
    precio: 50,
    img: "https://cdn.ngamers.net/monthly_2020_01/ddaadda.jpg.44dc878be0858356f38a9682697ce68b.jpg",
    cantidad: 3,
  },
  {
    id: 2,
    nombre: "Adios",
    category: "robado",
    precio: 100,
    img: "https://i.imgur.com/gbvyJQg.jpg",
    cantidad: 4,
  },
  {
    id: 3,
    nombre: "Hola",
    category: "robado",
    precio: 100,
    img: "https://gameflip.eu/wp-content/uploads/2020/10/fsdgfsdfsdfsd.jpg",
    cantidad: 5,
  },
];

export const getProductos = (id) => {
  const _productos = id
    ? COMPUTADORAS.filter((producto) => producto.category.toLowerCase() === id)
    : COMPUTADORAS;
  return new Promise((res) => {
    setTimeout(() => {
      res(_productos);
    }, 1000);
  });
};

export const getproducto = (id) => {
  const computadora = COMPUTADORAS.filter(
    (computadora) => computadora.id === id
  )[0];

  return new Promise((res) => {
    setTimeout(() => {
      res(computadora);
    }, 1500);
  });
};
