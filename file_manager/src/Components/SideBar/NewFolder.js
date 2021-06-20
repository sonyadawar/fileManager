
import CreateNewFolderIcon from '@material-ui/icons/CreateNewFolder';
import '../../styles/NewFolder.css'
import firebase from 'firebase'
import {storage,db} from '../../firebase'
import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button} from '@material-ui/core';

import TextField from '@material-ui/core/TextField';
import {database} from '../../firebase'
 function getModalStyle() {
    return {
        top: `50%`,
        left: `50%`,
        transform: `translate(-50%, -50%)`,
    };
}
const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function NewFolder(){
    const classes = useStyles();
    const [open,setOpen]=useState(false)
    const [name,setName]=useState('')
    const [modalStyle] = useState(getModalStyle);
    
    

    function handleOpen(){
        setOpen(true)
      
    }
    function handleClose(){
        setOpen(false)
    }

  const handleSubmit = e => {
    e.preventDefault()
    database.folders.add({
        name:name,
        createdAt:database.getCurrentTimeStamp()
    })
    setName('')
    
    handleClose();
  };
    return (
        <div className='newFolder'>
            <div className="newFolder_container" >
            <Button onClick={handleOpen}>
            <CreateNewFolderIcon fontSize='large' />
            <p>New Folder</p>
            </Button>
            
            
            </div>
                
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
               <div style={modalStyle} className={classes.paper}>
                <form  onSubmit={handleSubmit} >
                <div>
     
                    <TextField 
                    label="Folder Name" 
                    variant="filled" 
                    type="text" 
                    required 
                    value={name}
                    onChange={e => setName(e.target.value)} />
                    
                    <Button variant="contained" onClick={handleClose}>
                    Cancel
                    </Button>
                    <Button type="submit" variant="success" color="secondary">
                    Add folder
                    </Button>

                   
                    
                </div>
                </form>
              </div>  
            </Modal>
        </div>
    )
}



