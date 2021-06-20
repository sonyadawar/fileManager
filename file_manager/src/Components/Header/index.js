import React from 'react'
import logo from '../../Assets/logo.png'
import SearchIcon  from '@material-ui/icons/Search'
import ExpandMoreIcon  from '@material-ui/icons/ExpandMore'
import SettingsIcon from '@material-ui/icons/Settings';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import  '../../styles/Header.css'

const index = () => {
    return (
        <div className='header'>
            <div className='header_logo'>
                <img src={logo} alt=''  />
                <span>File Manager</span>

            </div>

            <div className='header_searchContainer'>                                        
                <div className='header_searchBar'>
                    <SearchIcon/>
                    <input type='text' placeholder='Search Files..'/>
                    <ExpandMoreIcon/>
                </div>
            </div>

            <div className='header_icons'>
                <SettingsIcon/>
                <AccountCircleIcon/>


            </div>
          

            



            
        </div>
    )
}
export default index

