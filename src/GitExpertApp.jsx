import { useState } from "react";

import { AddCategory, GifGrid } from "./components";
//import { AddCategory } from "./components/AddCategory";
//import { GifGrid } from "./components/GifGrid";

export const GitExpertApp = ()  => {
  const [categories, setCategories] = useState(['One Punch']);

  const onAddCategorie = ( newCategory ) =>{
    if(categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories])
  }

  return (
    <>
      {/* Titulo */}
      <h1>GetExpertApp</h1>
      {/* input busqueda */}
      <AddCategory 
        onNewCategory= { (value) => onAddCategorie(value) }
      />
      { categories.map( ( category ) => (
        <GifGrid key= { category } category= { category }/>
        ))
      }
      {/* Listado de Git */}

    </>
  )
}

