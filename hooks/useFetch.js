import { useEffect, useState } from "react"

const useFetch = ({
    URL,
    method = "GET",
    jsonBody,
    headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
    }
}) => {
    const [data,setData] = useState({})
       useEffect(() => {
        fetch(URL, {
            method: method,
            headers: headers,
            body: JSON.stringify(jsonBody),
          })
        .then((data) => data.json())
        .then((json) => {
            setData(json) ;
        });
       },[])
       return data
}

export default useFetch