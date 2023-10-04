import React, { useContext, useState , useEffect } from 'react';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Datagrid from '../../Components/Datagrid/Datagrid';
import ContentData from '../../content-data';
import SmallAlert from '../../Components/Alerts/SamllAlert';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'coustomerInfo',
    headerName: 'مشتری',
    width: 250,
    editable: false,
    renderCell(params) {
      return (
        <div className="flex gap-2 ">
          <div className="flex items-center justify-center">
            {!params.row.customer.img ? <PersonOutlineIcon /> : <img src={params.row.customer.img} alt='customer_image' className='w-9 h-9 rounded-full' />}
          </div>
          <div className="flex flex-col gap-1">
            <span className='font-bold dark:text-white'>{params.row.customer.fullName}</span>
            <span className='dark:text-white'>{params.row.customer.nationalCode}</span>
          </div>
        </div>
      )
    }
  },
  {
    field: 'productInfo',
    headerName: 'مشخصات محصول',
    width: 450,
    editable: false,
    renderCell(params) {
      return (
        <div className="flex gap-1 items-center">
          <img src={params.row.product.img} alt="product_image" className='w-9 h-9 rounded-full' />
          <h5 className='font-bold dark:text-white'>{params.row.product.title}</h5>
        </div>
      )
    }
  },
  {
    field: 'addres',
    headerName: 'نشانی',
    width: 350,
    editable: false,
    renderCell(params) {
      return (
        <div className="flex flex-col gap-1 dark:text-white">
          <span >{params.row.customer.address}</span>
          <span className='font-bold'>{params.row.customer.phoneNumber}</span>
        </div>
      )
    }
  },
  {
    field: 'noumberOfOrders',
    headerName: 'تعداد سفارشات',
    type: 'number',
    width: 120,
    editable: false,
  },
  {
    field: 'statusSend',
    headerName: 'وضعیت',
    width: 160,
    renderCell(params) {
      return (
        <div className={`
        ${params.row.status === "sended" && "bg-palette-50 text-palete-500 rounded w-24 h-7 text-center leading-7 dark:bg-palette-500 dark:text-black"} 
        ${params.row.status === 'sending' && "bg-blue-200 text-blue-700 rounded w-24 h-7 text-center leading-7 dark:bg-blue-500 dark:text-black"}
        ${params.row.status === "cancelled" && "bg-red-200 text-red-500 rounded w-24 h-7 text-center leading-7 dark:bg-red-500 dark:text-black"}
    `}
        >{params.row.status}</div>
      )
    }

  }
];

export default function Orders() {
  const [orders, setOrders] = useState([])
  useEffect(() => {
    fetch('http://localhost:3000/api/orders').then(res => {
      if(!res.ok){
        res.text().then(text => {
          throw new Error(text)
        })
      } else {
        return res.json()
      }
    })
    .then(result => {
      setOrders(result)
    })
    .catch(err => console.log(err))
  } , [])

  const componentStyle = useContext(ContentData).componentStyle
  return (
    <div className='p-5 h-full w-fullbg -gray-200 dark:bg-gray-900 dark:text-white '>
      {
        orders.length ? (
          <div className={`w-full h-auto rounded-lg p-3 flex flex-col gap-5 ${componentStyle}`}>
            <Datagrid rows={orders} columns={columns} />
          </div>
        ) : (
          <div className="empty-page">هیچ سفارشی وجود ندارد! </div>
        )
      }
      <div className="modals">
        <SmallAlert title={'در حال بارگذاری ...'} />
      </div>
    </div>
  )
}
