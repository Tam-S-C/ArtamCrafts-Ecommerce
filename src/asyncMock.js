/* import agendaFriends from './assets/imgProducts/agAnFriends.jpg';
import stickersFriends from './assets/imgProducts/stickersFriends.jpg';
import boxFriends from './assets/imgProducts/boxFriends.jpg';
import agendaBttF from './assets/imgProducts/agAnBttF.jpg';
import stickersBttF from './assets/imgProducts/stickersBttF.jpg';
import boxBttF from './assets/imgProducts/boxBttF.jpg';
import boxAlicia from './assets/imgProducts/boxAlicia.jpg';
import agendaStrangerT from './assets/imgProducts/agAnST.jpg';
import boxStitch from './assets/imgProducts/boxStitch.jpg';
import stickersHP from './assets/imgProducts/stickersHP.jpg';
import stickersStitch from './assets/imgProducts/stickersStitch.jpg';
import agendaJack from './assets/imgProducts/agAnJack.jpg';



const products = [
  {
    id: 1,
    titulo: 'Agenda: Friends',
    precio: '8000',
    category: CATEGORIES.agendas.id,
    descripcion: 'Podrás elegir entre agenda perpetua o anotador A5 o A6',
    imagen: agendaFriends,
  },

  {
    id: 2,
    titulo: 'Agenda: BttF',
    precio: '8000',
    category: CATEGORIES.agendas.id,
    descripcion: 'Podrás elegir entre agenda perpetua o anotador A5 o A6',
    imagen: agendaBttF,
  },

  {
    id: 3,
    titulo: 'Stickers: Friends',
    precio: '900',
    category: CATEGORIES.stickers.id,
    descripcion: 'Stickers troquelados a prueba de agua',
    imagen: stickersFriends,
  },

  {
    id: 4,
    titulo: 'Stickers: BttF',
    precio: '900',
    category: CATEGORIES.stickers.id,
    descripcion: 'Stickers troquelados a prueba de agua',
    imagen: stickersBttF,
  },

  {
    id: 5,
    titulo: 'Stationary Box: BttF',
    precio: '12000',
    category: CATEGORIES.boxes.id,
    descripcion: 'Caja de papelería con 10 ítems!',
    imagen: boxBttF,
  },

  {
    id: 6,
    titulo: 'Stationary Box: Friends',
    precio: '12000',
    category: CATEGORIES.boxes.id,
    descripcion: 'Caja de papelería con 10 ítems!',
    imagen: boxFriends,
  },

  {
    id: 7,
    titulo: 'Stationary Box: Alicia',
    precio: '12000',
    category: CATEGORIES.boxes.id,
    descripcion: 'Caja de papelería con 10 ítems!',
    imagen: boxAlicia,
  },

  {
    id: 8,
    titulo: 'Agenda: Stranger Things',
    precio: '8000',
    category: CATEGORIES.agendas.id,
    descripcion: 'Podrás elegir entre agenda perpetua o anotador A5 o A6',
    imagen: agendaStrangerT,
  },

  {
    id: 9,
    titulo: 'Stationary Box: Stitch',
    precio: '12000',
    category: CATEGORIES.boxes.id,
    descripcion: 'Caja de papelería con 10 ítems!',
    imagen: boxStitch,
  },

  {
    id: 10,
    titulo: 'Stickers: HP',
    precio: '900',
    category: CATEGORIES.stickers.id,
    descripcion: 'Stickers troquelados a prueba de agua',
    imagen: stickersHP,
  },

  {
    id: 11,
    titulo: 'Stickers: Stitch',
    precio: '900',
    category: CATEGORIES.stickers.id,
    descripcion: 'Stickers troquelados a prueba de agua',
    imagen: stickersStitch,
  },

  {
    id: 12,
    titulo: 'Agenda: Jack',
    precio: '8000',
    category: CATEGORIES.agendas.id,
    descripcion: 'Podrás elegir entre agenda perpetua o anotador A5 o A6',
    imagen: agendaJack,
  },

];



export const getProduct = (id) => {
  return new Promise((resolve, reject) => {
    const product = products.find((item) => item.id === Number(id));
    if (product) {
      setTimeout(() => {
        resolve(product);
      }, 1000);
    } else {
      reject("Producto no encontrado");
    }
  });
};


export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};


// Categorías
export const getCategoria = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const productosFiltrados = products.filter((producto) => producto.category == category);
      resolve(productosFiltrados); 
    }, 1000);
  });
};
 */