import React, { useContext, useState, useEffect } from "react";
import ContentData from "../../../content-data";
import { Button } from "@mui/material";
export default function EditDetailsProduct({ newProductForm, updater }) {
    const contextData = useContext(ContentData)
    const [categories, setCategories] = useState([])
    const [imageSrc, setImageSrc] = useState([])
    const [productTitle, setProductTitle] = useState('')
    const [productPrice, setProductPrice] = useState('')
    const [productCount, setProductCount] = useState(0)
    const [productOff, setProductOff] = useState()
    const [productColors, setProductColors] = useState()
    const [productDesc, setProductDesc] = useState('')
    const [productCategory, setProductCategory] = useState('')
    const [fetched, setFetched] = useState([])
    useEffect(() => {
        fetch("http://localhost:3000/api/products")
            .then(res => {
                if (!res.ok) {
                    res.text().then(text => {
                        throw new Error(text)
                    })
                } else {
                    return res.json()
                }
            })
            .then(data => setFetched(data))
            .catch(err => console.log(err))
    }, [])
    useEffect(() => {
        setCategories(fetched)
        setProductTitle(contextData.currentProduct.title)
        setProductPrice(contextData.currentProduct.price)
        setProductCount(contextData.currentProduct.count)
        setProductOff(contextData.currentProduct.off)
        setProductDesc(contextData.currentProduct.productDesc)
        setImageSrc([contextData.currentProduct.img])
        setProductColors(contextData.currentProduct.colors)
    }, [contextData.currentProduct])
    function submitFormHandler() {
        const newProduct = {
            title: productTitle || 'images/1.jpg',
            price: productPrice,
            count: productCount,
            // off: productOff,
            productDesc,
            img: imageSrc,
            popularity: 100,
            sale: productPrice,
            colors: productColors
        }
        if (newProductForm) {
            fetch(`http://localhost:3000/api/products`,
                {
                    method: 'POST',
                    body: JSON.stringify(newProduct)
                }
            ).then(res => {
                if (!res.ok) {
                    res.text().then(text => {
                        throw new Error(text)
                    })
                } else {
                    return res.json()
                }
            }).then(data => {
                console.log(data);
                updater(prevValue => !prevValue)
                contextData.setIsShowEditDetailsModal(false)
            }).catch(err => console.log(err))
        } else {
            fetch(`http://localhost:3000/api/products/${contextData.currentProduct.id}`,
                {
                    method: "PUT",
                    body: JSON.stringify(newProduct)
                }
            ).then(res => {
                if (!res.ok) {
                    res.text().then(text => {
                        throw new Error(text)
                    })
                } else {
                    return res.json()
                }
            }).then(data => {
                console.log(data);
                updater(prevValue => !prevValue)
                contextData.setIsShowEditDetailsModal(false)
            }).catch(err => console.log(err))
        }
    }
    return (
        <>
            {contextData.isShowEditDetailsModal && (
                <div className="modal-cotainer flex justify-center items-center">
                    <div className={`w-[650px] max-h-[750px] rounded-xl p-5 overflow-y-auto ${contextData.componentStyle}`}>
                        <div className="flex flax-col justify-between items-center overflow-x-hidden overflow-y-auto">
                            <div className="w-full">
                                <div className="header ">
                                    <h2 className="font-bold text-2xl">ویرایش اطلاعات محصول</h2>
                                    <hr />
                                </div>
                                <div className="body mt-2 h-full" >
                                    <form id='editDetailsProduct flex flex-col gap-2 '>
                                        <div className="input-sec title flex gap-2 w-full">
                                            <label htmlFor="productTitle w-28">عنوان محصول :</label>
                                            <input
                                                type="text"
                                                id="productTitle"
                                                placeholder="مثلا: گوشی آیفون 13 پلاس 128 گیگ"
                                                className="grow h-full outline-none border-none px-2 rounded "
                                                value={productTitle}
                                                onChange={e => setProductTitle(e.target.value)}
                                            />
                                        </div>
                                        <div className="input-sec mt-3 flex flex-col flex-wrap gap-2 w-full justify-between">
                                            <div className="input-sec price flex w-full">
                                                <label className="text-sm w-28" htmlFor="productPrice">قیمت محصول :</label>
                                                <input
                                                    type="number"
                                                    id="productPrice"
                                                    placeholder="مثلا: 32000000"
                                                    className="grow h-full outline-none border-none px-2 rounded "
                                                    value={productPrice}
                                                    onChange={e => setProductPrice(e.target.value)}
                                                />
                                            </div>
                                            <div className="input-sec count flex w-full">
                                                <label className="text-sm w-28" htmlFor="productCount">تعداد محصول :</label>
                                                <input
                                                    type="number"
                                                    min={0}
                                                    id="productCount"
                                                    placeholder="مثلا: 20"
                                                    className="grow h-full outline-none border-none px-2 rounded "
                                                    value={productCount}
                                                    onChange={e => setProductCount(e.target.value)}
                                                />
                                            </div>
                                            <div className="input-sec count flex w-full">
                                                <label className="text-sm w-28" htmlFor="productOff">تخفیف محصول :</label>
                                                <input
                                                    type="number"
                                                    min={0}
                                                    id="productOff"
                                                    placeholder="مثلا: 5"
                                                    className="grow h-full outline-none border-none px-2 rounded "
                                                    value={productOff}
                                                    onChange={e => setProductOff(e.target.value)}
                                                />
                                            </div>
                                            <div className="input-sec count flex w-full">
                                                <label className="text-sm w-28" htmlFor="productColors">رنگبندی :</label>
                                                <input
                                                    type="number"
                                                    min={1}
                                                    id="productColors"
                                                    placeholder="مثلا: 5"
                                                    className="grow h-full outline-none border-none px-2 rounded "
                                                    value={productColors}
                                                    onChange={e => setProductColors(e.target.value)}
                                                />
                                            </div>
                                            <select
                                                className="w-full border-none rounded outline-none"
                                                value={productCategory}
                                                onChange={e => setProductCategory(e.target.value)}
                                            >
                                                <option value="">دسته بندی </option>
                                                {categories.map(category => (
                                                    <option key={category.id} value={category.title}>{category.title}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <textarea
                                            className="mt-3 w-full resize-y rounded p-2 h-28"
                                            placeholder="توضیحات محصول ..."
                                            minLength={50}
                                            value={productDesc}
                                            onChange={e => setProductDesc(e.target.value)}
                                        >
                                        </textarea>
                                        <div className="images-wrapper flex justify-between p-5 items-center  ">
                                            <div className="w-1/2">
                                                <input
                                                    type="file"
                                                    multiple
                                                    className="inputFile rounded border-none outline-none"
                                                    onChange={e => {
                                                        setImageSrc([...e.target.files])
                                                    }}
                                                    accept="image/png, image/gif, image/jpeg"
                                                />
                                                <p className="indent-8 mt-2 text-justify" >
                                                    عکس های خود را با دقت انتخاب بکنید برای جذب بهتر
                                                    <span className="font-bold"> مشتری </span>
                                                    بهتر است که عکس کیفیت قابل قبولی داشته باشد
                                                    همچنین سعی کنید که پس زمینه ان رنگی باشد یا سفید و مشکی و البته با نوردهی عالی 🤗
                                                </p>
                                            </div>
                                            <div className="images w-64 h-64 p-2 overflow-x-hidden overflow-y-auto flex flex-col bg-palette-50 rounded-lg">
                                                {
                                                    imageSrc.map((image, index) => (
                                                        <img
                                                            src={imageSrc}
                                                            key={index}
                                                            alt="product_image"
                                                            className="w-full h-full object-cover rounded-md bg-palette-200" />
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="btns h-12 w-full flex justify-end">
                            <div className="right"></div>
                            <div className="left flex gap-2 items-center">
                                <Button
                                    variant="outlined"
                                    color="error"
                                    className="font-bold"
                                    onClick={() => {
                                        contextData.setIsShowEditDetailsModal(false)
                                    }}
                                >لغو
                                </Button>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className="fond-bold"
                                    onClick={() => {
                                        submitFormHandler()
                                    }}
                                >
                                    ثبت اطلاعات
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}