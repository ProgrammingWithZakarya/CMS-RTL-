import React from "react";
import RoofingOutlinedIcon from "@mui/icons-material/RoofingOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import { NavLink } from "react-router-dom";
import { Tooltip } from "@mui/material";
export default function Navbar() {
	return (
		<div
			className=" bg-palette-700 h-16 w-auto dark:from-palette-900 dark:to-teal-950 fixed bottom-2 left-1/2 -translate-x-1/2 rounded-lg z-[999] 
			translate-y-[55%] opacity-50 hover:translate-y-0 hover:opacity-100 transition-all">
			<div className="wrapper flex w-full h-full"  >
				<div className="list-wrapper text-emerald-50 p-2 flex items-center justify-center w-full h-full ">
					<nav>
						<ul className="list-none flex justify-between gap-3 items-center w-full h-full ">
							<li className="sm:w-10 md:w-16 lg:w-24 ">
								<NavLink
									className="flex flex-col items-center gap-y-1 w-full p-1 rounded-md "
									to="/">
									<Tooltip arrow placement="top" title="صفحه اصلی" className="lg:hidden">
										<RoofingOutlinedIcon />
									</Tooltip>
									<span className="sm:hidden lg:inline md:text-xs lg:text-md xl:text-lg">
										صفحه اصلی
									</span>
								</NavLink>
							</li>
							<li className="sm:w-10 md:w-16 lg:w-24">
								<NavLink
									className="flex flex-col items-center gap-y-1 w-full p-1 rounded-md hover:backdrop-brightness-110 "
									to="/products">
									<Tooltip arrow placement="top" title="محصولات">
										<CategoryOutlinedIcon />
									</Tooltip>
									<span className="sm:hidden lg:inline md:text-xs lg:text-md xl:text-lg ">
										محصولات
									</span>
								</NavLink>
							</li>
							<li className="sm:w-10 md:w-16 lg:w-24">
								<NavLink
									className="flex flex-col items-center gap-y-1 w-full p-1 rounded-md hover:backdrop-brightness-110 "
									to="/orders">
									<Tooltip arrow placement="top" title="سفارشات">
										<ListAltOutlinedIcon />
									</Tooltip>
									<span className="sm:hidden lg:inline md:text-xs lg:text-md xl:text-lg ">
										سفارشات
									</span>
								</NavLink>
							</li>
							<li className="sm:w-10 md:w-16 lg:w-24">
								<NavLink
									className="flex flex-col items-center gap-y-1 w-full p-1 rounded-md hover:backdrop-brightness-110 "
									to="/users">
									<Tooltip arrow placement="top" title="کاربران">
										<GroupOutlinedIcon />
									</Tooltip>
									<span className="sm:hidden lg:inline md:text-xs lg:text-md xl:text-lg ">
										کاربران
									</span>
								</NavLink>
							</li>
							<li className="sm:w-10 md:w-16 lg:w-24">
								<NavLink
									className="flex flex-col items-center gap-y-1 w-full p-1 rounded-md hover:backdrop-brightness-110 "
									to="/comments">
									<Tooltip arrow placement="top" title="کامنت ها">
										<ForumOutlinedIcon />
									</Tooltip>
									<span className="sm:hidden lg:inline md:text-xs lg:text-md xl:text-lg ">
										کامنت ها
									</span>
								</NavLink>
							</li>
							<li className="sm:w-10 md:w-16 lg:w-24">
								<NavLink
									className="flex flex-col items-center gap-y-1 w-full  p-1 rounded-md hover:backdrop-brightness-110 "
									to="/offs">
									<Tooltip arrow placement="top" title="تخفیف ها">
										<LocalOfferOutlinedIcon />
									</Tooltip>
									<span className="sm:hidden lg:inline md:text-xs lg:text-md xl:text-lg ">
										تخفیف ها
									</span>
								</NavLink>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</div >
	);
}
