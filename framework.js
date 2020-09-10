function expect(actual){
    return {
        toBe(expect){
            if(actual !== expect){
                throw new Error('Prueba no exitosa');
            }
        }
    };

}


   
      function it
(title, callback){
    try{
        callback();
        console.log(`✔ ${title}`);
    }catch(error){
        console.error(`x ${title}`);
    }
}