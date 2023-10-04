import React, { useContext } from "react";
import { categories } from "../../Datas";
import Category from "../Category/Category";
import ContentData from "../../content-data";
export default function Categories(){
    const componentStyle = useContext(ContentData).componentStyle
    return (
        <div className={`categorys w-full h-34 min-h-34 overflow-x-auto overflow-y-hidden rounded-lg flex flex-wrap gap-1 p-3 justify-center items-center ${componentStyle}`}>
            {categories.mobile.map(category => (
                <Category key={category.id} {...category}/>
            ))}
        </div>
    )
}