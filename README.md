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

> [!IMPORTANT]
> Herramientas Utilizadas:

* JSX - REACT JS
* React-Router-Dom => Para gestionar la navegación de las rutas de la webApp.
* React-Loading => Uso de Loading en el primer renderizado de la web para la carga de todos los productos.
* HOOKS => Algunos usados: useState, useParams, useContext, useEffect.
* Uso de Props
* CSS => Para dar los estilos.
* HTML => Uso de forma mínima en el index y en las etiquetas semánticas junto a la escritura en jsx.
* JavaScript => Para la lógica de la aplicación escrito como jsx.
* Vite => Como el servidor de desarrollo.
* Firebase => Para guardar las órdenes de compra con la info de los usuarios, y la subida de los productos.
* SweetAlert2 => Uso de librería para el aviso con alerta de "ítem agregado al carrito".

---

> [!NOTE]
> ESTRUCTURA - ENTREGA FINAL


- [x] Carpeta *public/* con archivos mínimos como logos, capturas y favicon.

- [x] Directorio *src/* con la carpeta *assets/* con las imágenes de íconos, carpeta de *components/* + *context/* y archivos principales para la iniciar la app (main.jsx, App.jsx e Index.html)

- [x] Carpeta principal con la documentación, como este mismo *Readme.md*, y archivos de configuraciones.

- [x] CartContext => uso de useContext/Provider para poder usar las funciones en los componentes hijos.

> Components/

- [x] BtnComp => Componente para los botones principales.

- [x] Header => con LOGO(con link al Home '/') + botones extras (Contacto + Sesión + Buscador).

- [x] Navbar => con los botones de las categorías + CartWidget.

- [x] CartWidget => el número se desmonta cuando no hay productos agregados, 
pero elegí que la imagen del carrito quede siempre renderizada.

- [x] CheckOut
    *   CartView => con renderizado condicional, si no hay productos muestra un mensaje y un botón que vuelve al *Home* para seguir comprando, sino muestra la lista de productos agregados + botón para el borrado total del carrito + formulario para finalizar la compra.
    *   CheckOut / Brief => detalle de compra ya finalizada con los datos del usuario y generación de la orden que queda guardada en Firebase, borrado del carrito automático y botón para volver al *Home*.
    *   UserInfo => con el fomulario para generar la orden que se guarda en Firebase, con validaciones de los inputs.
    *   CardsEnCarrito => detalle de cada ítem en la vista del carrito con ItemCount (sólo el + y - sacando el "agregar carrito" con renderizado condicional), cantidad de stock, precio unitario y subtotal, e ícono de tacho para eliminar el ítem completo.

- [x] Catálogo => de productos, separados por categorías y a su vez, 
vista de todos los productos en el Home ('/'), cada categoría con sus rutas con React-Router-Dom(rutas en App.jsx / NavBar.jsx).

- [x] ItemListContainer => contenedor de todas las Cards con sus datos.
    * ItemList => ItemsCard se le sumó un botón de Like + LocalStorage (más adelante se sumará botón al navBar con el listado de los favs seleccionados.)
    * ItemDetailContainer => Detalle de producto, de cada producto individual.
    * ItemDetail
        * ItemQuantitySelector => ContadorComp, nombrado ItemCount
        * Description + precio + stock (con funcion para que vaya bajando la cant de stock)
        * AddItem Button => agregar al carrito con función IsInCart para verificar si ya hay producto de ese modelo en el carrito.

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

---

> Correr web / Instalación

* Clonar el repositorio: bash git clone https://github.com/Tam-S-C/ArtamCrafts-Ecommerce.git
* Instalar las dependencias: npm install
* Iniciar la aplicación: npm run dev

O link para desplegar la WebApp:
* [DEPLOY](https://tam-s-c.github.io/ArtamCrafts-Ecommerce/) 

---

> CAPTURAS

![Home](https://github.com/Tam-S-C/ArtamCrafts-Ecommerce/blob/main/public/capturas/home.png?raw=true)
![Categorías](https://github.com/Tam-S-C/ArtamCrafts-Ecommerce/blob/main/public/capturas/catAgendas.png?raw=true)
![Contacto](https://github.com/Tam-S-C/ArtamCrafts-Ecommerce/blob/main/public/capturas/contacto.png?raw=true)
![Sesion](https://github.com/Tam-S-C/ArtamCrafts-Ecommerce/blob/main/public/capturas/sesion.png?raw=true)
![Carrito Vacío](https://github.com/Tam-S-C/ArtamCrafts-Ecommerce/blob/main/public/capturas/carritoVacio.png?raw=true)
![Detalle](https://github.com/Tam-S-C/ArtamCrafts-Ecommerce/blob/main/public/capturas/detalle.png?raw=true)
![Alerta](https://github.com/Tam-S-C/ArtamCrafts-Ecommerce/blob/main/public/capturas/alerta.png?raw=true)
![Carrito](https://github.com/Tam-S-C/ArtamCrafts-Ecommerce/blob/main/public/capturas/carrito.png?raw=true)
![Form](https://github.com/Tam-S-C/ArtamCrafts-Ecommerce/blob/main/public/capturas/form.png?raw=true)
![Brief](https://github.com/Tam-S-C/ArtamCrafts-Ecommerce/blob/main/public/capturas/brief.png?raw=true)


