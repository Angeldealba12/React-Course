const getImagen = async() => { 

    const api_key = 'H5CXmPK8ZBxqfL99NMmmIZoiG5rqccIL';
    const peticion = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ api_key }`);
    const { data } = await peticion.json();

    const { url }= data.images.original;
    console.log(url);

    const img = document.createElement('img');
    img.src = url;

    document.body.append( img );

}

getImagen(); 




