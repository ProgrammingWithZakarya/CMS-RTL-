import React, { useContext } from 'react';
import ContentData from '../../../content-data';
import {Button} from "@mui/material"
export default function DeleteModal({ header, desc , updater}) {
    const contextData = useContext(ContentData)
    const userDeleteHandler = () => {
        fetch(`http://localhost:3000/api/products/${contextData.currentProduct.id}`, {
            method: "DELETE",
        }).then(res => {
            if(!res.ok){
                res.text().then(text => {
                    throw new Error(text)
                })
            } else{
                return res.json()
            }
        }).then(result => {
            contextData.setDeleteModal(false)
            updater(prevValue => !prevValue)
            console.log(result)
        }).catch(err => console.log(err))
    }
    return (
        <>
            {contextData.deleteModal && (
                <div className='modal-cotainer flex justify-center items-center'>
                    <div className={`modal-delete w-[650px] h-[350px] rounded-lg flex flex-col justify-between ${contextData.componentStyle} p-3`}>
                        <div className="headerModal">
                            <h4 className='font-bold text-lg'>{header}</h4>
                            <hr />
                        </div>
                        <div className="body-modal h-full pt-2 flex flex-col gap-2 justify-evenly">
                            <p className='desc-modal underline'>{desc}</p>
                            <hr />
                            <div className=" w-full h-full p-5">
                                <table className='flex justify-center items-center flex-col gap-3'>
                                    <thead className='w-full'>
                                        <tr className='w-full flex justify-evenly' >
                                            <th className='w-20'>عکس</th>
                                            <th className='w-36'>عنوان و قیمت </th>
                                            <th className='w-6'>تخفیف</th>
                                            <th className='w-6'>تعداد</th>
                                        </tr>
                                    </thead>
                                    <tbody className='w-full'>
                                        <tr className='w-full flex justify-evenly items-center'>
                                            <td className='w-20'>
                                                <img
                                                    src={contextData.currentProduct.img}
                                                    alt="Product_image"
                                                    className='w-16 h-16 rounded-full '
                                                />
                                            </td>
                                            <td className='flex flex-col w-36'>
                                                <h6 className='font-bold text-lg'>{contextData.currentProduct.title}</h6>
                                                <span className='underline'>{contextData.currentProduct.price}</span>
                                            </td>
                                            <td className='w-6'>
                                                <span className='font-bold'>
                                                    {contextData.currentProduct.off || 0}
                                                </span>
                                            </td>
                                            <td className='w-6'>
                                                <span className='font-bold'>
                                                    {contextData.currentProduct.count}
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="btns-modal flex items-center rounded-sm overflow-hidden h-16 justify-end gap-2">
                            <div className="w-1/2"></div>
                            <div className="w-1/2 h-full flex justify-end items-center gap-2">
                                <Button
                                    className='font-bold'
                                    variant='outlined'
                                    color='info'
                                    onClick={() => contextData.setDeleteModal(false)}>
                                    لغو
                                </Button>
                                <Button
                                    className='font-bold'
                                    variant='contained'
                                    color='error'
                                    onClick={() => userDeleteHandler()}>
                                    حذف
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}