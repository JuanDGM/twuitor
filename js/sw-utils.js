

// Guarda en el cache dinamico
function actualizaCacheDinamico(nombreCache, peticion,newResponse){
    
    if(newResponse.ok){
    
    return caches.open(nombreCache).then(res=>{
        
        res.put(peticion, newResponse.clone());
        return newResponse.clone();
    });
    }else{
        
        return newResponse
        
    }
    
}








