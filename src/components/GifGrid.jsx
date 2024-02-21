import { useState, useEffect } from "react";

import { GifItem } from "../components";
//import { GifItem } from  './GifItem';

import { useFetchGifs } from '../hooks/useFetchGifs';

//import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {

  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{ category }</h3>
      {
        isLoading && (<h2 >cargando...</h2> )
      }
      <div className="card-grid">
        { 
          images.map( ( image ) => (
            <GifItem 
              key={ image.id }
              { ...image }//esparcir las propiedades para las utilice el componente
            />
          ))
        }
      </div>
    </>
  )
}