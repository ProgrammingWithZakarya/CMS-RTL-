import React, { useContext, useEffect, useState, useSyncExternalStore } from "react";
import ContentData from "../../content-data";
function useDeleteProduct(Url) {
    const contentData = useContext(ContentData)
    const [url, setUrl] = useState(Url)
    const [data, setData] = useState([])
    useEffect(() => {
        contentData.setShowAlert(true)
        fetch(url  , {
            method : "DELETE",
            headers : "*/*"
        }).then(res => res.json()).then(data => {
            setData(data)
            contentData.setShowAlert(false)
            contentData.setDeleteModal(false)
        })
    }, [Url])
    return data
}
export default useDeleteProduct;