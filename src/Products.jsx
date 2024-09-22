import React, { useEffect, useState } from 'react';
import {doc, getDoc, getFirestore } from 'firebase/firestore';

const Product = () => {

const [product, setProduct] = useState(null);


    useEffect (() => {
            const db = getFirestore()

            const getProduct = doc(db, 'productos', 'f5BBm2mcbxXWRhyNd5FT')

            getDoc(getProduct).then((snapshot) => {
                if (snapshot.exists()){
                    setProduct({id:snapshot.id, ...snapshot.data()})
                }
            })
    },[]);

    return (
        <>
            <h1>Productos</h1>
            {
                product ? (
                    <div>
                        <p>Nombre: {product.titulo}</p>
                        <p>Precio: {product.precio}</p>
                        <p>Stock: {product.stock}</p>
                        <p>Descripción: {product.descripcion}</p>
                        <p>Categoria: {product.category}</p>
                        <img src={product.imagen} style={{width:'35%'}}/>
                    </div>
                ) : (
                    <h3>Producto no encontrado</h3>
                )
            }
        
        </>
    )

}

export default Product;