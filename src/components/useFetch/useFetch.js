import {useEffect, useState} from 'react';
const useFetch = (url) => {
    const [product,setProduct] = useState([]);
    const [pending,setPending] = useState(false);
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then (data => {
            
            setProduct(data);
            setPending(true)
            
        })
    },[url]);
    return {product,pending};
}
 
export default useFetch;