import React, { useContext, useEffect, useState } from 'react'
import { IconButton } from '@mui/material'
import { Link } from 'react-router-dom'
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import Datagrid from '../../Components/Datagrid/Datagrid';
import ContentData from '../../content-data';
import usePriceFormatter from '../../CustomHooks/usePriceFormatter/usePriceFormatter';
import SmallAlert from '../../Components/Alerts/SamllAlert';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import DeleteModal from '../../Components/Modals/DeleteModal/DeleteModal';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import DetailsProduct from '../../Components/Modals/DetailsProduct/DetailsProduct';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import EditDetailsProduct from '../../Components/Modals/EditDetailsProduct/EditDetailsProduct';
import { convertLegacyOperators } from '@mui/x-data-grid/internals';

export default function Products() {
  // ///////////////// STATES //////////////////////////
  const contextData = useContext(ContentData)
  const [products, setProducts] = useState([])
  const [newProductForm, setNewProductForm] = useState(null)
  const [updater ,setUpdater] = useState(false)
  // //////////////////// useEFFECTS ////////////////
  useEffect(() => {
    fetch('http://localhost:3000/api/products')
      .then(res => {
        if (!res.ok) {
          res.text().then(text => {
            throw new Error(text)
          })
        } else {
          return res.json()
        }
      })
      .then(data => setProducts([...data]))
      .catch(err => console.log(err))
  }, [updater])
  // /////////////////// VARIABLE /////////////////
  const priceFormat = usePriceFormatter
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'img',
      headerName: 'عکس',
      width: 100,
      editable: false,
      renderCell(params) {
        return <img src={params.row.img} alt='product_image' className='w-9 h-9 rounded-full' />
      }
    },
    {
      field: 'titleProduct',
      headerName: 'عنوان محصول',
      width: 450,
      editable: false,
      renderCell(params) {
        return (
          <div>
            <h4 className='font-bold'>{params.row.title}</h4>
            <span className='font-bold'>{priceFormat(params.row.price)}</span>
          </div>
        )
      }
    },
    {
      field: 'isNew',
      headerName: 'وضعیت محصول',
      width: 150,
      editable: false,
    },
    {
      field: 'popularity',
      headerName: "امتیاز",
      width: 50,
      editable: false,

    },
    {
      field: 'count',
      headerName: 'تعداد',
      type: 'number',
      width: 110,
      editable: false,
    },
    {
      field: 'off',
      headerName: 'تخفیف',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
    },
    {
      field: "options",
      headerName: "گزینه ها",
      width: 150,
      editable: false,
      renderCell(params) {
        return (
          <div className="flex justify-center items-center gap-2">
            <IconButton onClick={() => {
              contextData.setDeleteModal(true)
              contextData.setCurrentProduct(params.row)
            }}>
              <DeleteOutlineOutlinedIcon className='icon-red' />
            </IconButton>
            <IconButton onClick={() => {
              contextData.setCurrentProduct(params.row)
              contextData.setIsShowDetailsModal(true)
            }}>
              <VisibilityOutlinedIcon className='icon-blue' />
            </IconButton>
            <IconButton onClick={() => {
              contextData.setIsShowEditDetailsModal(true)
              contextData.setCurrentProduct(params.row)
              setNewProductForm(false)
            }}>
              <ModeEditOutlinedIcon className='icon-green' />
            </IconButton>
          </div>
        )
      }
    }
  ];

  return (
    <div className='p-4 flex flex-col justify-start w-full gap-4 h-full overflow-y-auto bg-gray-200 dark:bg-gray-900 dark:text-white'>
      <div className="w-full flex justify-between">
        <div className="flex items-center gap-x-2 ">
          <h4 className='font-bold text-2xl'>لیست محصولات</h4>
          <IconButton
            className='btn-normal bg-palette-50  dark:bg-palette-900'
            onClick={() => {
              contextData.setIsShowEditDetailsModal(true);
              contextData.setCurrentProduct([]);
              setNewProductForm(true)
            }} >
            <Link className='flex items-center dark:text-black w-full h-full text-palette-700 '>
              <AddIcon />
            </Link>
          </IconButton>
        </div>
        <div className="search-box">
          <div className="search-box flex bg-palette-50 rounded-md overflow-hidden dark:bg-palette-500 ">
            <input type="text" className="text-black px-2 border-none outline-none dark:bg-gray-200" placeholder='جستجو' />
            <IconButton className='dark:text-black' >
              <SearchIcon />
            </IconButton>
          </div>
        </div>
      </div>
      {
        products.length ? (
          <div className={`w-full h-auto p-2 rounded-lg ${contextData.componentStyle}`}>
            <Datagrid rows={products} columns={columns} />
          </div>
        ) : (
          <div className='empty-page'>هیچ محصولی یافت نشد!</div>
        )
      }
      <div className="modals">

        <SmallAlert title={'در حال بارگیری...'} />
        <DeleteModal header={'جدی می خوای حذفش کنی ؟ '} desc={`دیگه هیچ اطلاعاتی از این محصول نمی مونه !`} updater={setUpdater}/>
        <EditDetailsProduct newProductForm={newProductForm} updater={setUpdater} />
        <DetailsProduct />
      </div>
    </div>
  )
}
