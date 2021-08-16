

  export const getGifs = async ( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=l3lstgiPbuQTDPZPrqP106H9bAV92vE7`;

    const resp = await fetch(url);
    const { data } = await resp.json();
    //debugger;
    //en vez de que cada objeto tenga muchisimas propiedades con el map hacemos que cada objeto del arreglo tenga solo id title y url
    //hasta ahi bien?sii
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url

        }
    })

    console.log(gifs);
    //aca estoyu actualizando el estado que sea un arreglo de objetos y cada objeto
    //tiene id, title, url
    return gifs;

}

