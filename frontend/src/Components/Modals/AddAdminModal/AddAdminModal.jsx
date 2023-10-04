import React, { useState, useContext, useEffect } from "react";
import ContentData from "../../../content-data";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Button } from '@mui/material'
export default function AddAdminModal() {
    const contextData = useContext(ContentData)
    const [adminFirstName, setAdminFirstName] = useState('')
    const [adminLastName, setadminLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [Address, setAddress] = useState('')
    const [Gender, setGender] = useState("")
    const [Age, setAge] = useState(0)
    const [imageSrc, setimageSrc] = useState('')
    const [task, setTask] = useState('')
    const saveProductHandler = () => {
        console.log('product saved!');
        contextData.setAddProductModal(false)
    }
    useEffect(() => {
        setAdminFirstName(contextData.currentUser.firsname)
        setadminLastName(contextData.currentUser.lastname)
        setEmail(contextData.currentUser.email)
        setPhoneNumber(contextData.currentUser.phoneNumber)
        setAddress(contextData.currentUser.address)
        setGender(contextData.currentUser.gender)
        setAge(contextData.currentUser.age)
        setimageSrc(contextData.currentUser.img)
        setTask(contextData.currentUser.task)
    }, [contextData.currentUser])
    return (
        <>
            {contextData.AddAdminModal && (
                <div className="modal-cotainer flex justify-center items-center">
                    <div className={`modal-delete w-[900px] h-[680px] rounded-lg flex flex-col justify-between ${contextData.componentStyle} p-3`}>
                        <div className="headerModal">
                            <h4 className='font-bold text-xl'>اضافه کردن ادمین</h4>
                            <hr />
                        </div>
                        <div className="body-modal h-full p-2 flex flex-col gap-2 justify-evenly">
                            <div className="flex gap-2">
                                <InfoOutlinedIcon className="icon-green" />
                                <p className='desc-modal'>اطلاعات ادمین خود را کامل و دقیق بنویسید.</p>
                            </div>
                            <div className="">
                                <form className="w-full h-full flex flex-wrap gap-y-1">
                                    <div className="section-input flex justify-between items-center h-11 w-1/2 py-1 px-2 ">
                                        <label className="w-16" htmlFor="firstName">نام</label>
                                        <input
                                            type="text"
                                            value={adminFirstName}
                                            onChange={e => setAdminFirstName(e.target.value)}
                                            placeholder="مثلا:ذکریا "
                                            id="firstName"
                                            className="px-1 w-full h-full input-children dark:text-black"
                                        />
                                    </div>
                                    <div className="section-input flex justify-between items-center h-11 w-1/2 py-1 px-2 ">
                                        <label className="w-16" htmlFor="lastName">نام خانوادگی</label>
                                        <input
                                            type="text"
                                            value={adminLastName}
                                            onChange={e => setadminLastName(e.target.value)}
                                            placeholder="مثلا:حسنزاده"
                                            id="lastName"
                                            className="px-1 w-full h-full input-children dark:text-black"
                                        />
                                    </div>
                                    <div className="section-input flex justify-between items-center h-11 w-1/2 py-1 px-2 ">
                                        <label className="w-16" htmlFor="email">ایمیل</label>
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={e => setEmail(e.target.value)}
                                            placeholder="مثلا:hasanzadahzakarya@gmail.com"
                                            id="email"
                                            className="px-1 w-full h-full input-children dark:text-black"
                                        />
                                    </div>
                                    <div className="section-input flex justify-between items-center h-11 w-1/2 py-1 px-2 ">
                                        <label className="w-16" htmlFor="phoneNumber">شماره تلفن</label>
                                        <input
                                            type="number"
                                            value={phoneNumber}
                                            onChange={e => setPhoneNumber(e.target.value)}
                                            placeholder="مثلا:09142960913"
                                            id="phoneNumber"
                                            className="px-1 w-full h-full input-children dark:text-black"
                                        />
                                    </div>
                                    <div className="section-input flex justify-between items-center h-11 w-1/2 py-1 px-2 ">
                                        <label className="w-16" htmlFor="address">آدرس</label>
                                        <input
                                            type="text"
                                            value={Address}
                                            onChange={e => setAddress(e.target.value)}
                                            placeholder="مثلا:پیرانشهر بلوار سردشت کوچه خیام 14"
                                            id="address"
                                            className="px-1 w-full h-full input-children dark:text-black"
                                        />
                                    </div>
                                    <div className="section-input flex justify-between items-center h-11 w-1/2 py-1 px-2 ">
                                        <label className="w-16" htmlFor="gender">جنسیت</label>
                                        <input
                                            type="text"
                                            value={Gender}
                                            onChange={e => setGender(e.target.value)}
                                            placeholder="مثلا:مذکر"
                                            id="gender"
                                            className="px-1 w-full h-full input-children dark:text-black"
                                        />
                                    </div>
                                    <div className="section-input flex justify-between items-center h-11 w-1/2 py-1 px-2 ">
                                        <label className="w-16" htmlFor="age">سن</label>
                                        <input
                                            type="number"
                                            value={Age}
                                            onChange={e => setAge(e.target.value)}
                                            placeholder="مثلا:20"
                                            id="age"
                                            min={18}
                                            className="px-1 w-full h-full input-children dark:text-black"
                                        />
                                    </div>
                                    <div className="w-full h-full flex">
                                        <div className="desc p-5 w-1/2 ">
                                            <hr />
                                            <p className="indent-8 pt-5 ">
                                                <InfoOutlinedIcon className="icon-green" />
                                                یک عکس از ادمین خود اضافه کنید ,سعی کنید که عکس کاملا با وضوع و کیفیت بالا و با پس زمینه رنگی یا سفید باشد.
                                            </p>
                                        </div>
                                        <div className="product-image-section flex flex-col w-1/2 h-full items-center p-5  ">
                                            <span className="font-bold">عکس محصول </span>
                                            <input type="file" value={imageSrc}
                                                onChange={(e) => {
                                                    setimageSrc(e.target.value);
                                                    console.log(e);
                                                }} />
                                            <div className="product-img w-32 h-32 rounded-full bg-palette-50 border-2 bord}er-palette-700 overflow-hidden  ">
                                                <img src={`${imageSrc}`} alt="" className="w-full h-full object-fit border-none" />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="btns-modal flex items-center rounded-sm overflow-hidden h-14 justify-end gap-2">
                            <div className="w-1/2"></div>
                            <div className="w-1/2 h-full flex justify-end items-center gap-2">
                                <Button
                                    variant="outlined"
                                    color="error"
                                    onClick={() => contextData.setAddAdminModal(false)}>
                                    لغو
                                </Button>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className="grow font-bold"
                                    onClick={() => saveProductHandler()}>
                                    ذخیره
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}