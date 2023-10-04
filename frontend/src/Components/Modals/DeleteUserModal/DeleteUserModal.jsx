import React, { useContext } from 'react';
import ContentData from '../../../content-data';
import { Button } from "@mui/material"
export default function DeleteUserModal() {
    const contextData = useContext(ContentData)
    return (
        <>
            {contextData.deleteUserModal && (
                <div className='modal-cotainer flex justify-center items-center'>
                    <div className={`modal-delete w-[750px] h-[350px] rounded-lg flex flex-col justify-between ${contextData.componentStyle} p-3`}>
                        <div className="headerModal">
                            <h4 className='font-bold text-lg'>جدی می خوای از گروهت حذفش کنی؟</h4>
                            <hr />
                        </div>
                        <div className="body-modal h-full pt-2 flex flex-col gap-2 justify-evenly">
                            <p className='desc-modal underline'>دیگه هیچ اطلاعاتی از این کاربر نمی مونه .!</p>
                            <hr />
                            <div className=" w-full h-full p-5">
                                <table className='flex justify-center items-center flex-col gap-3'>
                                    <thead className='w-full'>
                                        <tr className='w-full flex justify-evenly' >
                                            <th className='w-20 text-right border-l border-black'>عکس</th>
                                            <th className='w-36 text-right border-l border-black'>نام و نام خانوادگی</th>
                                            <th className='w-36 text-right border-l border-black'>نام کاربری</th>
                                            <th className='w-36 text-right '>ایمیل</th>
                                        </tr>
                                    </thead>
                                    <tbody className='w-full'>
                                        <tr className='w-full flex justify-evenly items-center'>
                                            <td className='w-20 border-l border-black'>
                                                <img
                                                    src={contextData.currentUser.img}
                                                    alt="Product_image"
                                                    className='w-16 h-16 rounded-full '
                                                />
                                            </td>
                                            <td className='flex flex-col w-36 border-l border-black'>
                                                <h6 className='font-bold text-lg'>
                                                    {(contextData.currentUser.firsname + " " + contextData.currentUser.lastname) || '--'}
                                                </h6>
                                            </td>
                                            <td className='w-36 border-l border-black'>
                                                <span className='font-bold'>
                                                    {contextData.currentUser.username || '--'}
                                                </span>
                                            </td>
                                            <td className='w-36'>
                                                <span className='font-bold'>
                                                    {contextData.currentUser.email || '--'}
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
                                    onClick={() => contextData.setDeleteUserModal(false)}>
                                    لغو
                                </Button>
                                <Button
                                    variant='contained'
                                    className='font-black'
                                    color='error'
                                    onClick={(e) => console.log(e)}>
                                    حذف کاربر
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}