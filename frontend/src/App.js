import { useRoutes } from 'react-router-dom';
import './App.css';
import routes from './routes';
import Navbar from './Components/NavBar/Navbar';
import Header from './Components/Header/Header';
import ContentData from './content-data';
import { useState , useEffect } from 'react';
//  //////////////////////////////////////////
function App() {
	const [componentStyle, setComponentStyle] = useState('bg-gray-300 shadow-inner shadow-gray-500 dark:bg-gray-700 dark:text-gray-100 dark:shadow-gray-500')
	const [isDark, setIsDark] = useState(false);
	const [deleteModal, setDeleteModal] = useState(false);
	const [showAlert, setShowAlert] = useState(false);
	const [AddProductModal, setAddProductModal] = useState(false);
	const [AddAdminModal, setAddAdminModal] = useState(false);
	const [isShowDetailsModal, setIsShowDetailsModal] = useState(false);
	const [deleteUserModal, setDeleteUserModal] = useState(false);
	const [isShowDetailsUserModal, setIsShowDetailsUserModal] = useState(false);
	const [isShowDetailsAdminModal, setIsShowDetailsAdminModal] = useState(false);
	const [isShowEditDetailsModal, setIsShowEditDetailsModal] = useState(false);
	const [addTodoValue, setAddTodoValue] = useState("")
	const [currentProduct, setCurrentProduct] = useState([])
	const [currentUser, setCurrentUser] = useState([])
	const router = useRoutes(routes)
	useEffect(() =>  {
		if (localStorage.getItem("todos")) {
			return
		} else {
			localStorage.setItem('todos' , [])
		}
	} , [])

	return (
		<ContentData.Provider value={{
			isDark,
			setIsDark,
			componentStyle,
			setComponentStyle,
			deleteModal,
			setDeleteModal,
			addTodoValue,
			setAddTodoValue,
			showAlert,
			setShowAlert,
			AddProductModal,
			setAddProductModal,
			AddAdminModal,
			setAddAdminModal,
			currentProduct,
			setCurrentProduct,
			isShowDetailsModal,
			setIsShowDetailsModal,
			isShowEditDetailsModal,
			setIsShowEditDetailsModal,
			deleteUserModal,
			setDeleteUserModal,
			currentUser,
			setCurrentUser,
			isShowDetailsUserModal,
			isShowDetailsAdminModal,
			setIsShowDetailsAdminModal,
			setIsShowDetailsUserModal,
		}}>
			<div className={`App flex w-screen h-screen ${isDark && "dark"}`}>
				<Navbar />
				<div className="main flex flex-col w-full overflow-x-hidden">
					<Header />
					{router}
				</div>
			</div>
		</ContentData.Provider>

	);
}

export default App;
