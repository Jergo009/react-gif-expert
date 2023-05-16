import {useState} from 'react'
import { AddCategory, GifGrid } from './components'


export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState([ 'Spiderman' ]);
    
    const onAddCategory = (newCategory) => {

        if ( categories.includes(newCategory) )return;

        setCategories([newCategory,...categories]);
    }

    return (
    <>
        {/* titulo */}
        <h1>Gift Expert App</h1>

        {/* Input */}
        <AddCategory 
            // setCategories={ setCategories }
            onNewCategory= {(value) => onAddCategory(value) }
        />

        {/* Listado de Gif */}
        {/* el map nos sirve para presentar de manera grafica en el <li></li> las categorias */}
        
        { 
            categories.map(category => (
                <GifGrid
                    key={ category } 
                    category={ category } />
            ))
        }



  
        {/* Gift Item */}
        


    </>
  )
}
