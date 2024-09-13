import agendaFriends from './assets/agAnFriends.jpg';
import stickersFriends from './assets/stickersFriends.jpg';
import boxFriends from './assets/boxFriends.jpg';
import agendaBttF from './assets/agAnBttF.jpg';
import stickersBttF from './assets/stickersBttF.jpg';
import boxBttF from './assets/boxBttF.jpg';
import boxAlicia from './assets/boxAlicia.jpg';
import agendaStrangerT from './assets/agAnST.jpg';
import boxStitch from './assets/boxStitch.jpg';
import stickersHP from './assets/stickersHP.jpg';
import stickersStitch from './assets/stickersStitch.jpg';
import agendaJack from './assets/agAnJack.jpg';

import { CATEGORIES } from './components/NavBar/NavBar';

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

export const getProducts = new Promise((resolve) => {
  setTimeout(() => {
    resolve(products);
  }, 1000);
});

export const getProduct = (id) => {
  return products.find((item) => item.id == id);
};
//Filtrado por categoría

export const getCategoria = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const productosFiltrados = products.filter((producto) => producto.category == category);
      resolve(productosFiltrados);
    }, 1000);
  });
};
