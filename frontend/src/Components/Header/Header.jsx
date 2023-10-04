import { Badge, IconButton } from "@mui/material";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SearchIcon from '@mui/icons-material/Search';
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ContentData from "../../content-data";

export default function Header() {
	const context = useContext(ContentData)
	return (
		<div className="w-full h-16 bg-palette-700 from-white flex px-4 py-1 text-white items-center justify-between dark:bg-palette-900 dark:text-white">
			<div className="w-1/2 flex md:w-3/4">
				<div className="admin-profile flex gap-3 items-center">
					<img
						src="./images/zakarya.jpg"
						alt="admin_store_image"
						className="w-12 h-12 rounded-full"
					/>
					<div className="about-admin ">
						<h3 className="text-xl font-bold">ذکریا حسن زاده</h3>
						<h6 className="text-base">برنامه نویس فرانت اند</h6>
					</div>
				</div>
				<div className="">
					<IconButton>
						<Link to='settings'>
							<SettingsOutlinedIcon className="icon-white" />
						</Link>
					</IconButton>
					<IconButton onClick={() => context.setIsDark(prevState => !prevState)}>
						<DarkModeOutlinedIcon className="icon-white" />
					</IconButton>
					<IconButton>
						<Badge badgeContent={4} color="success">
							<Link to='/notifications'>
								<NotificationsNoneOutlinedIcon className="icon-white" />
							</Link>
						</Badge>
					</IconButton>
				</div>
			</div>
			<div className="">
				<div className="search-box flex bg-palette-50 rounded-md overflow-hidden w-76  dark:bg-palette-500 ">
					<input type="text" className=" px-2 border-none outline-none dark:bg-gray-200 text-black " placeholder="چی میخوای اینجا بنویس " />
					<IconButton className=" dark:text-black" >
						<SearchIcon />
					</IconButton>
				</div>
			</div>
		</div>
	);
}
