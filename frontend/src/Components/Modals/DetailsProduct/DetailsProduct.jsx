import React, { useContext, useEffect } from "react";
import ContentData from "../../../content-data";
import { IconButton } from "@mui/material";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

export default function DetailsProduct() {
    const contextData = useContext(ContentData)
   
    return (
        <>
            {contextData.isShowDetailsModal && (
                <div className="modal-cotainer flex justify-center items-center ">
                    <div className={`DetailsProduct-wrapper w-[800px] h-[850px] rounded-xl p-5 ${contextData.componentStyle}`}>
                        <div className="header flex justify-between items-center">
                            <h3 className="font-bold text-2xl">مشخصات محصول</h3>
                            <IconButton onClick={() => {
                                contextData.setIsShowDetailsModal(false)
                            }}>
                                <CloseOutlinedIcon />
                            </IconButton>
                        </div>
                        <hr />
                        <section className="details-wrapper w-full p-4">
                            <div className="details-header w-full flex gap-2">
                                <img src={contextData.currentProduct.img} alt="product_image" className="w-72 h-72 rounded-md object-cover" />
                                <div className="product-desc w-full h-72 flex flex-col gap-10" >
                                    <h2 className="text-xl font-bold">
                                        {contextData.currentProduct.title}
                                        <sup >*{contextData.currentProduct.count}</sup>
                                    </h2>
                                    <div className="more">
                                        <ul className="list-disc mr-8">
                                            <li className="hover:underline">
                                                <span>رنگبندی : {contextData.currentProduct.colors}</span>
                                            </li>
                                            <li className="hover:underline">
                                                <span>رضایت از کالا  : {contextData.currentProduct.popularity}</span>
                                            </li>
                                            <li className="hover:underline">
                                                <span>تعداد فروخته شده :  {contextData.currentProduct.sale}</span>
                                            </li>
                                            <li className="hover:underline">
                                                <span>تعداد موجود : {contextData.currentProduct.count} </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="product-price font-black text-lg underline">{contextData.currentProduct.price} تومان</div>
                                </div>
                            </div>
                            <div className="more-desc mt-2">
                                <h2 className="font-bold text-lg">توضیحات بیشتر </h2>
                                <hr />
                                <p className="indent-8 text-justify" >{contextData.currentProduct.productDesc}</p>
                            </div>
                            <div className="comments mt-3">
                                <h2 className="text-lg font-bold">دیدگاه ها </h2>
                                <hr />
                                {
                                    contextData.currentProduct.comments ? (
                                        <>
                                            <div className="comment"></div>
                                        </>
                                    ) : (
                                        <div className="empty-page">هیچ دیدگاهی ثبت نشده است . </div>
                                    )
                                }
                            </div>
                        </section>
                    </div>
                </div>
            )}
        </>
    )
}