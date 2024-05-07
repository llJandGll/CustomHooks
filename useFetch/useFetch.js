
import { useState, useEffect } from "react";



// * handle of cache

const localCache = {};

console.log("useFetchComponent Caché : ",localCache)




// * Funcion para manejar las peticiones asincronas de la pokeapi

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: false,
    errorMessage: null,
  });

  useEffect(() => {

    getFetch();
  }, [url]);


  const setIsLoadingState = () => {
    setState({
      ...state,
      isLoading : true
    })
  };

  const getFetch = async () => {

    // * Handdle Cache
    if (localCache[url]) {
      console.log("usando cache")

      setState({
        data : localCache[url],
        isLoading: false,
        hasError: false,
        errorMessage : null,
      })
      return;
    }

    const resp = await fetch(url);

    setIsLoadingState()

    // *sleep
    await new Promise( ( resolve ) => setTimeout(resolve , 1000))

    if (!resp.ok) {
      setState({
        data: null,
        isLoading: false,
        hasError: true,
        errorMessage: {
          code: resp.status,
          message: resp.statusText,
        },
      });
      return;
    }

    const data = await resp.json();
    setState({
      data: data,
      isLoading: false,
      hasError: false,
      errorMessage: null,
    });


    localCache[ url ] = data;
  };


  return {
    ...state
  }
};
