import React, { useContext, useEffect, useState } from "react";
import ContentData from "../../content-data";
function useFetch(Url) {
    const contentData = useContext(ContentData)
    const [url, setUrl] = useState(Url)
    const [data, setData] = useState([])
    useEffect(() => {
        contentData.setShowAlert(true)
        fetch(url).then(res => res.json()).then(data => {
            setData(data)
            contentData.setShowAlert(false)
        })
    }, [Url])
    return data
}
export default useFetch;