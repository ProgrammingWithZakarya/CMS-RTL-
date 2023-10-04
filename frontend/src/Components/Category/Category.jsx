import React from "react";
import { Link } from "react-router-dom";
export default function Category({ id, img, title }) {
    return (
        <div className="w-32 h-full rounded-lg 
        hover:bg-gradient-to-bl hover:from-palette-500 hover:bg-palette-200 
        dark:hover:bg-gradient-to-bl dark:hover:from-palette-500 dark:hover:to-palette-900">
            <Link className="flex flex-col items-center" to={`/products/${title}`}>
                <img className="flex-2 h-24 w-24 object-cover" src={img} alt={title} />
                <h6 className="text-center text-sm">{title}</h6>
            </Link>
        </div>
    )

}