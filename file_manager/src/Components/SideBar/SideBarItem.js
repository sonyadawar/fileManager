import React from 'react'
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import '../../styles/SideBarItem.css'
const SideBarItem = ({arrow,icon,label}) => {
    return (
        <div className='sideBarItem'>
            <div className="sideBarItem_arrow">
                {arrow && (<ArrowRightIcon/>)}
            </div>
            <div className='sideBarItem_main'>
                {icon}
                <p>{label}</p>

            </div>
            
        </div>
    )
}

export default SideBarItem
