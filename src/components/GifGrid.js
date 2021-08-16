import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
//import React, { useState, useEffect } from 'react'
import { GifGriditem } from './GifGriditem';

export const GifGrid = ({ category }) => {
    
    const {data:iamges, loading} = useFetchGifs( category);
  

    return (
        <>
            <h3 className="animate__animated animate__fadeIn" >{category}</h3>

            {loading && <p className="animate__animated animate__flash" >Loading</p>}

             
             <div className="card-grid">

                {
                    iamges.map(img => (
                        <GifGriditem
                            key={img.id}
                            {...img}
                        />

                    ))
                }

            </div>
        </>
    )
}
