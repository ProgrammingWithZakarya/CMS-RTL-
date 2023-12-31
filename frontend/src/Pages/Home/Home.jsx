import React, { useContext, useEffect, useState } from 'react'
import Feature from '../../Components/Featuers/Featuer'
import Categories from '../../Components/Categories/Categories'
import Datagrid from '../../Components/Datagrid/Datagrid'
import AddIcon from '@mui/icons-material/Add';
import { IconButton } from '@mui/material';
import Chart from '../../Components/Chart/Chart';
import CircleChart from '../../Components/Chart/CircleChart';
import ContentData from '../../content-data';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { mostSellingProducts } from '../../Datas';
import DeleteModal from '../../Components/Modals/DeleteModal/DeleteModal';
import AddTodoModal from '../../Components/Modals/AddTodoModal/AddTodoModal'
import SmallAlert from '../../Components/Alerts/SamllAlert';
import usePriceFormatter from '../../CustomHooks/usePriceFormatter/usePriceFormatter';
// /////////////////////////////////////////////////////
export default function Home() {
  const [products, setProducts] = useState([])
  const [addTodoModal, setAddTodoModal] = useState(false);
  const [todos, setTodos] = useState([])
  const [updater, setUpdater] = useState(false)
  // ---------------------------------------------  FUNCTIONS  ---------------------------------
  const complateHandler = (row) => {
    let foundIndex = todos.findIndex((todo) => todo.id === row.id)
    setTodos(prevValue => {
      (foundIndex !== undefined) && (prevValue[foundIndex].isCompleted = !(prevValue[foundIndex].isCompleted))
      return [...prevValue]
    })
    localStorage.setItem('todos', JSON.stringify([...todos]))
  }
  // //
  const deleteTodoHandler = (row) => {
    setTodos(todos.filter(todo => todo.id !== row.id))
    localStorage.setItem('todos' , JSON.stringify(todos))
    setUpdater(prevValue => !prevValue)
  }
  // ---------------------------------------------- USEEFFECTS  -----------------------------------------------
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
      .then(allProducts => setProducts(allProducts))
      .catch(err => console.log(err))
      if (localStorage.getItem('todos')) {
        setTodos(localStorage.getItem('todos'))
      } else {
        localStorage.setItem('todos' , JSON.stringify([]))
        setTodos(localStorage.getItem('todos'))
      }
  }, [])

  useEffect(() => {
    JSON.parse(localStorage.getItem('todos')).length === 0
      ? setTodos([{ id: 404, title: "هیچ موردی یافت نشد :/", isCompleted: false }])
      : setTodos(JSON.parse(localStorage.getItem('todos')));
  }, [addTodoModal, updater])
  // -------------------------------------------  COLUMNS   -----------------------------------------------------------
  const columns = [
    {
      field: "todoTitle",
      headerName: "عنوان",
      width: 500,
      editable: true,
      renderCell(params){
        return (
          <p className={params.row.isCompleted && 'line-through'}>{params.row.title}</p>
        )
      }
    },
    {
      field: 'isCompleted',
      headerName: "وضعیت",
      width: 120,
      editable: false,
      renderCell(params) {
        return (
          <>
            <span
              onClick={() => complateHandler(params.row)}
              className={`${params.row.isCompleted === true ?
                'bg-palette-50 text-palette-500 ' :
                "bg-blue-50 text-blue-500"} 
                py-1 px-3 rounded-md flex justify-center items-center w-full font-bold select-none cursor-pointer`}>
              {params.row.isCompleted ? 'حله' : 'مونده'}
            </span>
          </>
        )
      }
    },
    {
      field: "options",
      headerName: "گزینه ها",
      width: 90,
      editable: false,
      renderCell(params) {
        return (
          <IconButton onClick={() => deleteTodoHandler(params.row)}>
            <DeleteOutlineIcon className='text-red-700' />
          </IconButton>
        )
      }
    }
  ];
  const mspColumns = [
    {
      field: "id",
      headerName: "ID",
      width: 80,
      editable: false,
    },
    {
      field: 'title',
      headerName: "عنوان محصول ",
      width: 300,
      renderCell(params) {
        const priceFormat = usePriceFormatter
        return (
          <div className="flex items-center gap-3 ">
            <img className='w-10 h-10 object-fit rounded-full' src={params.row.img} alt={params.row.title} />
            <div className="flex flex-col">
              <h5 className='font-bold text-lg'>{params.row.title}</h5>
              <span className='font-bold text-md'>{priceFormat(params.row.price)}</span>
            </div>
          </div>
        )
      }
    },
    {
      field: 'count',
      headerName: "تعداد",
      width: 90,
      type: 'number',
      editable: false,
    },
    {
      field: "popularity",
      headerName: "امتیاز",
      width: 90,
      editable: false
    }
  ]
  const contextData = useContext(ContentData);
  // =================================================   JSX COMPONENT  ==========================================================
  return (
    <div className='w-full h-full flex flex-col gap-3 overflow-y-scroll overflow-x-hidden bg-gray-200 p-5 dark:bg-gray-900 dark:text-white'>
      <div className="features flex gap-10 justify-evenly flex-wrap ">
        <Feature title={'درآمد'} amoutOfActivity={21400000} progress={-1.5} link={'products'} />
        <Feature title={'مخارج'} amoutOfActivity={3200} progress={-1.78} link={'products'} />
        <Feature title={'سفارشات'} amoutOfActivity={463} progress={2.625} link={'orders'} />
      </div>
      <div className="w-full h-auto ">
        <Categories />
      </div>
      <div className={`h-auto w-full rounded-lg flex flex-wrap justify-evenly p-3 justify-center items-center ${contextData.componentStyle}`}>
        <CircleChart />
        <Chart />
      </div>
      <div className="flex flex-wrap gap-2 justify-evenly h-auto w-full">
        <div className={`todos h-auto w-auto rounded-lg flex flex-nowrap flex-col gap-1 p-3 items-center ${contextData.componentStyle}`}>
          <div className="flex items-center gap-2 w-full pr-5">
            <h5 className='font-bold text-lg'>لیست کارها</h5>
            <IconButton
              className='bg-palette-50 fill-palette-500 stroke-palette-700'
              onClick={() => {
                setAddTodoModal(true)
              }}
            >
              <AddIcon className='icon-green' />
            </IconButton>
          </div>
          <Datagrid rows={todos} columns={columns} />
        </div>
        <div className={`most-delling-porducts w-auto h-auto rounded-lg p-3 flex flex-col gap-2 ${contextData.componentStyle}`}>
          <h5 className='font-bold text-lg'>پرفروش ترین محصولات </h5>
          <Datagrid rows={products} columns={mspColumns} />
        </div>
      </div>
      <DeleteModal />
      <AddTodoModal header={'یه مورد جدید اضافه کنید'} desc={"عنوان یادداشت خود را در ورودی زیر بنویسسد"} isShowModal={addTodoModal} setAddTodoModal={setAddTodoModal} />
      <SmallAlert title={'در حال بارگیری...'} />
    </div>
  )
}
