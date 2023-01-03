import { memo } from "react";
import AddBox from "../AddBox";
import Total from "../Total";
import './styles.scss';


function Sidebar(){
    return(
        <aside>
            <AddBox />
            <Total />
        </aside>
    )
}

export default memo(Sidebar);