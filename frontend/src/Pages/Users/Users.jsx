import { IconButton, Tooltip } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import CreateIcon from '@mui/icons-material/Create';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import Datagrid from '../../Components/Datagrid/Datagrid';
import ContentData from '../../content-data';
import DeleteModal from '../../Components/Modals/DeleteModal/DeleteModal';
import AddAdminModal from '../../Components/Modals/AddAdminModal/AddAdminModal';
import SmallAlert from '../../Components/Alerts/SamllAlert';
import DeleteUserModal from '../../Components/Modals/DeleteUserModal/DeleteUserModal';
import DetailsUser from '../../Components/Modals/DetailsUser/DetailsUser';
// _________________________________________________________________________________________________________________________________
export default function Users() {
  const contextData = useContext(ContentData)
  const [users, setUsers] = useState([])
  const [admins, setAdmins] = useState([])
  useEffect(() => {
    contextData.setShowAlert(true)
    fetch('http://localhost:3000/api/admins').then(res => {
      if(!res.ok){
        res.text().then(text =>  {
          throw new Error(text)
        })
      } else {
        return res.json()
      }
    })
      .then(data => {
        contextData.setShowAlert(false)
        setAdmins(data)
      }).catch(err => console.log(err))
    contextData.setShowAlert(true)
    fetch("http://localhost:3000/api/users")
      .then(res => {
        if (!res.ok) {
          res.text().then(text => {
            throw new Error(text)
          })
        } else {
          return res.json()
        }
      })
      .then(data => {
        contextData.setShowAlert(false)
        setAdmins(data)
      }).catch(err => console.log(err))
  }, [])
  const columnsCustomers = [
    {
      field: 'id',
      headerName: 'ID',
      width: 90
    },
    {
      field: 'costomerInfo',
      headerName: 'مشتری',
      width: 250,
      editable: false,
      renderCell(params) {
        return (
          <div className="flex gap-2 ">
            <div className="flex items-center justify-center">
              {!params.row.img ? <PersonOutlineIcon /> : <img src={params.row.img} alt='custoner_image' className='w-9 h-9 rounded-full' />}
            </div>
            <div className="flex flex-col gap-1">
              <span className='font-bold dark:text-white' title='نام و نام خانوادگی'>{params.row.fullName || `${params.row.firstName} ${params.row.lastName}`}</span>
              <span className='dark:text-white' title='کد ملی'>{params.row.nationalCode}</span>
            </div>
          </div>
        )
      }
    },
    {
      field: "phoneNumber",
      headerName: "شماره تماس",
      editable: false,
      width: 200,
    },
    {
      field: "email",
      headerName: "ایمیل",
      editable: false,
      width: 300,
    },
    {
      field: 'scoreCustomer',
      headerName: 'امتیاز',
      width: 50,
      editable: false,
      renderCell(params) {
        return (
          <span className='font-bold'>{params.row.score}</span>
        )
      }
    },
    {
      field: "address",
      headerName: "آدرس",
      width: 400,
      editable: false,
    },
    {
      field: "options",
      headerName: "گزینه ها",
      editable: false,
      width: 150,
      renderCell(params) {
        return (
          <div className="flex gap-1 items-center justify-center w-full">
            <Tooltip placement="top" title='ویرایش اطلاعات'>
              <IconButton onClick={() => {
                contextData.setIsShowDetailsUserModal(true)
                contextData.setCurrentUser(params.row)
              }}>
                <VisibilityIcon className='text-blue-700 dark:text-blue-500' />
              </IconButton>
            </Tooltip>
          </div>
        )
      }
    }
  ];
  const columnsAdmin = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'adminInfo',
      headerName: 'کاربران',
      width: 250,
      editable: false,
      renderCell(params) {
        return (
          <div className="flex gap-2 ">
            <div className="flex items-center justify-center">
              {!params.row.img ? <PersonOutlineIcon /> : <img src={params.row.img} alt='admin_image' className='w-9 h-9 rounded-full' />}
            </div>
            <div className="flex flex-col gap-1">
              <span className='font-bold dark:text-white'>{params.row.fullName || `${params.row.firstName} ${params.row.lastName}`}</span>
              <span className='dark:text-white'>{params.row.activity}</span>
            </div>
          </div>
        )
      }
    },
    {
      field: 'nationalCode',
      headerName: "کد ملی",
      width: 200,
      editable: false,
    },
    {
      field: "phoneNumber",
      headerName: "شماره تماس",
      editable: false,
      width: 200,
    },
    {
      field: "email",
      headerName: "ایمیل",
      editable: false,
      width: 300,
    },
    {
      field: 'scoreAdmin',
      headerName: 'امتیاز',
      width: 50,
      editable: false,
      renderCell(params) {
        return (
          <span className='font-bold'>{params.row.score}</span>
        )
      }
    },
    {
      field: "options",
      headerName: "گزینه ها",
      editable: false,
      width: 150,
      renderCell(params) {
        return (
          <div className="flex gap-1 items-center justify-center w-full">
            <Tooltip placement="top" title='ویرایش اطلاعات'>
              <IconButton onClick={() => {
                contextData.setAddAdminModal(true)
                contextData.setCurrentUser(params.row)
              }} >
                <CreateIcon className='text-palette-700 dark:text-palette-500' />
              </IconButton>
            </Tooltip>
            <Tooltip placement="top" title='نمایش پروفایل'>
              <IconButton onClick={() => {
                contextData.setIsShowDetailsAdminModal(true)
                contextData.setCurrentUser(params.row)
              }}>
                <VisibilityIcon className='text-blue-700 dark:text-blue-500' />
              </IconButton>
            </Tooltip>
            <Tooltip placement="top" title='حذف کاربر'>
              <IconButton onClick={() => {
                contextData.setDeleteUserModal(true);
                contextData.setCurrentUser(params.row)
                console.log(params.row);
              }}>
                <DeleteOutlineIcon className='text-red-600 dark:text-red-500' />
              </IconButton>
            </Tooltip>
          </div>
        )
      }
    }
  ];
  return (
    <div className='flex flex-col gap-3 p-5 h-full w-full overflow-y-auto overflow-x-none bg-gray-200 dark:bg-gray-900 dark:text-white'>
      <div className={`w-full h-auto p-4 rounded-lg flex flex-col gap-4 ${contextData.componentStyle}`}>
        <div className="flex items-center gap-2">
          <h4 className='font-bold mr-4'>کاربران مدیریت</h4>
          <IconButton
            className='btn-normal bg-palette-50  dark:bg-palette-900'
            onClick={() => {
              contextData.setAddAdminModal(true);
              contextData.setCurrentUser([])
            }}>
            <Link className='flex items-center dark:text-black w-full h-full text-palette-700 '>
              <AddIcon />
            </Link>
          </IconButton>
        </div>
        {
          users.length ? (
            <Datagrid rows={users} columns={columnsAdmin} />
          ) : (
            <div className="empty-page">هیچ ادمینی ثبت نشده است!</div>
          )
        }
      </div>
      <div className={`w-full h-auto p-4 rounded-lg flex flex-col gap-2 ${contextData.componentStyle}`}>
        <h4 className='font-bold mr-4'>مشتریان</h4>
        {users.length ? (
          <Datagrid rows={users} columns={columnsCustomers} />
        ) : (
          <div className="empty-page">هیچ مشتری پیدا نشد!</div>
        )}
      </div>
      <div className="modals">
        <DeleteModal header={' جدی می خوای حذفش کنی ؟'} desc={"دیگه اطلاعاتی در مورد این کاربر باقی نمی مونه !"} />
        <SmallAlert title={'در حال بارگیری ...'} />
        <AddAdminModal />
        <DeleteUserModal />
        <DetailsUser />
      </div>
    </div>
  )
}
