
import { useEffect,useState } from 'react';
      const useServiceInfo=()=>{
          const[info,setInfo]=useState([])
        useEffect(()=>{
            fetch('./FakeData.JSON')
            .then(res=>res.json())
            .then(data=>setInfo(data))
              },[])
              return [info]
      }
      export default useServiceInfo ;