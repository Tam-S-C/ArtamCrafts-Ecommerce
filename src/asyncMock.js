import agendaFriends from './assets/agAnFriends.jpg';
import stickersFriends from './assets/stickersFriends.jpg';
import boxFriends from './assets/boxFriends.jpg';

const products = [
    {
      id: 1,
      titulo: 'Agenda/Anotador Friends',
      precio: '8000',
      categoria: 'Agendas y Anotadores',
      descripcion: 'Podrás elegir entre agenda perpetua o anotador A5 o A6',
      imagen: agendaFriends,
    },
    {
      id: 2,
      titulo: 'Stickers Modelo: Friends',
      precio: '900',
      categoria: 'Stickers',
      descripcion: 'Stickers troquelados a prueba de agua',
      imagen: stickersFriends,
    },
    {
      id: 3,
      titulo: 'Stationary Box - Friends',
      precio: '12000',
      categoria: 'boxes',
      descripcion: 'Caja de papelería con 10 ítems!',
      imagen: boxFriends,
    },
  ];
  
  export const getProducts = new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
  
  export const getProduct = (id) => {
    return products.find((item) => item.id == id);
  };
//Filtrado por categoría
  
export const getCategoria = (categoria) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const productosFiltrados = products.filter((producto) => producto.categoria === categoria);
      resolve(productosFiltrados);
    }, 1000);
  });
};
