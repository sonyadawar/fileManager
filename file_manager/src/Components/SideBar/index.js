import React from 'react'
import NewFolder  from './NewFolder'
import SideBarItem from './SideBarItem'
import  '../../styles/SideBar.css'
import  '../../styles/SideIcons.css'
import FolderSpecialIcon from '@material-ui/icons/FolderSpecial';
import HistoryIcon from '@material-ui/icons/History';
import PublishIcon from '@material-ui/icons/Publish';
import GetAppIcon from '@material-ui/icons/GetApp';
 const index = () => {
    return (
        <div className='sideBar'>
            <NewFolder/>
            <div className='sideIcons'>
            <SideBarItem arrow icon={(<FolderSpecialIcon/>)} label={'My Files'} />
            <SideBarItem  icon={(<PublishIcon/>)} label={'Upload '} />
            <SideBarItem arrow icon={(<HistoryIcon/>)} label={'Recent'} />
            <SideBarItem  icon={(<GetAppIcon/>)} label={'Download'} />
            <hr/>

            </div>
            
        </div>
    )
}

export default index

