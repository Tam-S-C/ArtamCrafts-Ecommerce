<h1>ArTam CraftS - Ecommerce</h1>
<h3>Tienda de Diseño y Papelería Artesanal </h3>

> LINKS:

* [DEPLOY](https://tam-s-c.github.io/ArtamCrafts-Ecommerce/) 

* [GitHub](https://github.com/Tam-S-C/ArtamCrafts-Ecommerce)

* [GIF](https://drive.google.com/file/d/1ThdLtC8saNLauPwB9nOo53UXHFYm10E-/view?usp=sharing)

* [MP4](https://drive.google.com/file/d/1pySEPA8fCn9KWKmDcm-UkP3RCABIpMAZ/view?usp=sharing)

---

> Curso: React JS - CoderHouse - Comisión 60020

* Alumna: Tamara S. Canzobre

* Profesora: Laura Gonzalez Martin
* Tutor: Nicolas Oriti Tizio
* Tutor Adjunto: Dario Rodriguez

---

> [!NOTE]
> ENTREGA FINAL


- [x] Header => con LOGO(con link al Home '/') + botones extras (Contacto + Sesión + Buscador).

- [x] Navbar => con los botones de las categorías + CartWidget.

- [x] CartWidget => el número se desmonta cuando no hay productos agregados, 
pero elegí que la imagen del carrito quede siempre renderizada.

- [x] CartContext => uso de useContext/Provider.

- [x] Catálogo => de productos, separados por categorías y a su vez, 
vista de todos los productos en el Home ('/'), cada categoría con sus rutas con React-Router-Dom(rutas en App.jsx / NavBar.jsx).

- [x] Loading en el primer renderizado de la web con React-Loading.

- [x] ItemListContainer => contiene a todas las Cards con sus datos.
    * ItemList => ItemsCard se le sumó un botón de Like + LocalStorage (más adelante se sumará botón al navBar con el listado de los favs seleccionados.)
    * ItemDetailContainer => Detalle de producto, de cada producto individual.
    * ItemDetail
        * ItemQuantitySelector => ContadorComp, nombrado ItemCount
        * Description + precio + stock (con funcion para que vaya bajando la cant de stock)
        * AddItem Button => agregar al carrito con función IsInCart para verificar si ya hay producto de ese modelo en el carrito.

- [x] CheckOut
    *   CartView => con renderizado condicional, si no hay productos muestra un mensaje y un botón que vuelve al Home para seguir comprando, sino muestra la lista de productos agregados + borrado total del carrito + formulario para finalizar la compra.
    *   CheckOut / Brief => detalle de compra ya finalizada con los datos del usuario y generación de la orden que queda guardada en Firebase, borrado del carrito automático y botón para volver al Home.
    *   UserInfo => con el fomulario para generar la orden que se guarda en firebase.
    *   CardsEnCarrito => detalle de cada ítem en la vista del carrito con ItemCount (sólo el + y - sacando el "agregar carrito" con renderizado condicional), cantidad de stock, precio unitario y subtotal, y tacho para eliminar el ítem completo.

- [x] Footer => componente extra para darle terminación a la web con links útiles + uso de memo / memoizing.


---

> [!NOTE]
> Pre-Entrega 2 => 100%

- [x] Uso de React-router-dom.
- [x] Se quitó los alert al darle click a los botones.
- [x] Se crearon las cards de los productos con su contador.
- [x] Componente Navbar con cart y diferentes caterogías de productos.
- [x] Home con las cards de todos los productos y Brand/Logo con link al home con path='/'
- [x] Link al detalle de cada uno de los productos
- [x] Integración con parámetros de async-mocks utilizando efects y hooks.

---

> [!NOTE]
> Pre-Entrega 1 => 100%

- [x] Componente Header (extra) (Logo + Buscador + botones extras).
- [x] Componente NavBar (Botones de categorías/productos).
- [x] Componente CartWidget (con ícono y nº hardcodeado - dentro de NavBar).
- [x] Componente contenedor ItemListContainer.jsx con una prop greeting.
- [x] Componente FooterBar (extra). 
- [x] Uso de Boostrap en íconos carrito y sesión. 


---------

<h3>React + Vite</h3> 

<h6>This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
  
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh</h6>

Correr web con:
* npm run dev
O link del deploy:
* [DEPLOY](https://tam-s-c.github.io/ArtamCrafts-Ecommerce/) 
