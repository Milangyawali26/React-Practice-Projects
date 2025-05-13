import axios from 'axios';
import React, { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [fetchedData,setFetchedData]=useState([]);
    const [isLoading,setIsLoading]=useState(true);
  
    useEffect(() => {
      setIsLoading(true);
      axios.get(url)
        .then((response) => {
          setFetchedData(response.data);
          setIsLoading(false);
        });
    }, []);

    return [isLoading,fetchedData];
    
}

export default useFetch
