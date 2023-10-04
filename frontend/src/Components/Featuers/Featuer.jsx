import React, { useContext } from "react";
import { Link } from "react-router-dom";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ContentData from "../../content-data";
export default function Feature({ title, amoutOfActivity, progress, link }) {
    const componentStyle = useContext(ContentData).componentStyle
    return (
        <div className={`feature w-[360px] h-28 flex gap rounded-xl p-3 ${componentStyle} hover:-translate-y-1 transition-all`}  >
            <div className="border-r-4 border-palette-500 flex justify-between items-center w-full h-full px-3">
                <div className="information flex flex-col text-md h-full w-22 justify-center gap-2">
                    <div className="title font-bold">{title}</div>
                    <div className="facte flex gap-2 items-center">
                        <span className="amoutOfActivity font-bold">{amoutOfActivity}</span>
                        <span className="progress px-2 py bg-blue-200 text-palette-900 rounded-sm text-sm">%{progress}</span>
                        {progress > 0 ? <ArrowUpwardIcon className="bg-green-50 text-green-500 rounded-sm " /> : <ArrowDownwardIcon className="bg-red-50 text-red-500 rounded-sm " />}
                    </div>
                </div>
                <div className="icon-box w-6 h-6 rounded-md bg-palette-50 text-palette-500 flex justify-center items-center hover:bg-palette-200 hover:text-palette-900 transition">
                    <Link to={`/${link}`}><NavigateBeforeIcon /></Link>
                </div>
            </div>
        </div>
    )
}