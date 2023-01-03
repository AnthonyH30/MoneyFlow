import { memo } from "react"
import Feed from "../Components/Feed";
import SideBar from "../Components/SideBar";
import Header from "../Services/Header";


function Home(){
    return(
        <>
            <Header />
            <div style={{display: 'flex'}}>
                <SideBar />
                <Feed />
            </div>
        </>
    )
}

export default memo(Home);