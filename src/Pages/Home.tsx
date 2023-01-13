import { memo } from "react"
import Feed from "../Components/Feed";
import SideBar from "../Components/SideBar";
import Header from "../Services/Header";
import "./styles.scss";


function Home(){
    return(
        <>
            <Header />
            <div className="wrapper">
                <SideBar />
                <Feed />
            </div>
        </>
    )
}

export default memo(Home);