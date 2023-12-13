import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";


const Main = () => {
    return (
        <div className="bg-[#FFFDD0]">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;