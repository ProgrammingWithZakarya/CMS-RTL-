import React, { useContext ,useState} from 'react'
import ContentData from '../../content-data'
import Datagrid from '../../Components/Datagrid/Datagrid';
import SmallAlert from '../../Components/Alerts/SamllAlert';

export default function Offs() {
  const contextData = useContext(ContentData);
  const [products, setProducts] = useState([])
  fetch('http://localhost:3000/api/products').then(res => res.json())
    .then(data => setProducts(data))

  const discountGoods = products.filter(product => product.off > 0)
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
      editable: false,
    },
    {
      field: "proView",
      headerName: "عنوان",
      width: 450,
      editable: false,
      renderCell(params) {
        return (
          <div className='flex items-center w-full h-full gap-2'>
            <img src={params.row.img} alt={params.row.title} className='w-11 h-11 rounded-full ' />
            <div className="product-title">
              <h5 className='font-bold'>{params.row.title}</h5>
              <span>{params.row.price}</span>
            </div>
          </div>
        )
      }
    },
    {
      field: "count",
      headerName: "تعداد",
      width: 100,
      editable: false,
    },
    {
      field: "isNew",
      headerName: " وضعیت محصول ",
      width: 120,
      editable: false,
    },
    {
      field: "score",
      headerName: "امتیاز",
      width: 90,
      editable: false,
    },
    {
      field: "offs",
      headerName: "تخفیف اعمال شده",
      width: 100,
      editable: true,
      renderCell(params) {
        return (
          <span className='font-bold'>{params.row.off} %</span>
        )
      }
    }
  ]
  return (
    <div className='offs-page h-full w-full overflow-y-auto overflow-x-hidden p-5 bg-gray-200 p-5 dark:bg-gray-900 dark:text-white flex flex-col gap-3'>
      {
        discountGoods.length ?
          (
            <div className={`offs-wrapper h-atuo w-full rounded-lg ${contextData.componentStyle}`}>
              <Datagrid rows={discountGoods} columns={columns} />
            </div>
          ) : (
            <div className="empty-page">هیچ یک از محصولات تخفیف ندارند !</div>
          )
      }
      <div className="modals">
        <SmallAlert title={'در حال بارگیری ...'} />
      </div>
    </div>
  )
}
