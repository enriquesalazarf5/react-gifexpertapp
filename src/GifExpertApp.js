import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';




export const GifExpertApp = () => {

    const [categories, setcategories] = useState(['Dragon Ball']);


    //const handleAdd = () => {
    //setcategories( ['Pollito Hermosa', ...categories] );
    //setcategories( cats => ['Pollito Hermosa', ...cats] );

    //}

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setcategories={setcategories} />
            <hr />


            <ul>
                {categories.map(category => <GifGrid key={category} category={category} />)}
            </ul>


        </>
    )
}




//Cuando se coloca <></> en lugar de un div
//Se le llama un fragment y funciona 