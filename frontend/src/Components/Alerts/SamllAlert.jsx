import React, { useContext } from "react";
import ContentData from "../../content-data";
import '../../App.css'
export default function SmallAlert({ title }) {
    const contextData = useContext(ContentData)
    return (
        <>
            {contextData.showAlert && (
                <div className="alert-show absolute bottom-0 left-0  bg-palette-700 text-white font-bold rounded-sm py-2 px-5">{title}</div>
            )}
        </>
    )
}