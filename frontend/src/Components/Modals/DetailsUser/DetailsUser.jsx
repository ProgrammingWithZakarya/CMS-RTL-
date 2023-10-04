import React, { useContext } from "react";
import ContentData from "../../../content-data";
import { IconButton } from "@mui/material"
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

export default function DetailsUser() {
    const contextData = useContext(ContentData)
    return (
        <>
            {
                contextData.isShowDetailsAdminModal && (
                    <div className="modal-cotainer flex justify-center items-center">
                        <div className={`w-[600px] h-[320px] rounded-lg flex flex-col justify-between ${contextData.componentStyle} p-3`}>
                            <div className="header flex justify-between px-2 items-center">
                                <h3 className="font-bold text-2xl">مشخصات کاربر </h3>
                                <IconButton variant="outlined" color="error" onClick={() => contextData.setIsShowDetailsAdminModal(false)}>
                                    <CloseOutlinedIcon />
                                </IconButton>
                            </div>
                            <hr />
                            <div className="body flex gap-2 ">
                                <div className="image-wrapper ">
                                    <img src={contextData.currentUser} alt="User_Image" className="rounded-md w-56 h-56 object-cover border bg-palette-50" />
                                </div>
                                <div className="desc-wrapper grow flex flex-col gap-5 justify-center">
                                    <h2 className="text-lg font-bold">{`${contextData.currentUser.firsname} ${contextData.currentUser.lastname}`}</h2>
                                    <span className="mr-5 block">{contextData.currentUser.task || "=_="}</span>
                                    <code className="block">{contextData.currentUser.token || "=_="}</code>
                                    <strong className="block mr-5">{contextData.currentUser.username || "=_="}</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}