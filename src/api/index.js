export const apiGet = (url, funcClose) => () => fetch(url).then(v => v.json()).then(r => {
    funcClose();
    return r;
  });
  
  export const apiPost = (url, params, funcClose) => () =>
    fetch(`${url}`, {
        method: 'POST',
        body: params,
        headers: new Headers(
            {
                'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
            })
    })
        .then(v => {
            return v;
        })
        .then(r => {
            funcClose();
            return r;
        });
  ///////////////////////////////////////////////Quitar metodos de arriba, despues de quitar dependencias de los mismos////////////////////////////////////////////////////////////////
  /**
  * Metodo para obtener respuesta de un endpoint dado, pasando por la validacion de errores.
  * Nota: Se considera error todo lo que devuelva un codigo diferente a 200
  * @param  {String} url Url del endpoint a hacer fetch
  * @param  {String} method Metodo a utilizar
  * @param  {Object} params Parametros necesarios para realizar fetch, en caso de POST sera objeto, en caso de GET sera string
  * @param  {String} responseType Tipo de respuesta que devolvera el endpoint, puede ser json o text
  * @param  {Function} onUnmask Metodo para ocultar LoadingModal
  * @param  {Function} onError Metodo para mostrar ErrorModal
  * @return {Object} En caso de que sea codigo 200 devolvera respuesta de endpoint, en caso contrario, devolvera {successful: false}
  */
  export const resolvePromise = (url, method, params, responseType, onUnmask, onError) =>
    method === 'POST' ?
        fetch(
            `${url}`, {
                method: method,
                body: JSON.stringify(params),
                headers: new Headers({ 'Content-type': 'application/json' })
            }
        ).then(response => {
            const { status } = response;
            if (status !== 200) {
                console.log(`Error por URL: ${url}\nCodigo de Respuesta: ${status}`);
                onError();
                return { successful: false };
            }
            onUnmask();
            return responseType === 'json' ? response.json() : responseType === 'text' ? response.text() : null;
        })
        :
        fetch(
            `${url}${params}`, {
                method: method,
                headers: new Headers({ 'Content-type': 'application/json' })
            }
        ).then(response => {
            const { status } = response;
            if (status !== 200) {
                console.log(`Error por URL: ${url}\nCodigo de Respuesta: ${status}`);
                onError();
                return { successful: false };
            }
            onUnmask();
            return responseType === 'json' ? response.json() : responseType === 'text' ? response.text() : null;
        });