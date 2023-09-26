import React, { useState } from 'react'
import './UserList.css'
import { DataGrid , GridColDef, GridValueGetterParams} from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import { userRows } from '../../dummyData';
import { Link } from 'react-router-dom';
function UserList() {
  const [data,setData]=useState(userRows)
    const columns= [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'user', headerName: 'User',width: 200,renderCell : (params)=>{
          return (
           <div className='userListUser'>
          <img src={params.row.avatar} alt=" " className='userListImg'></img>
          {params.row.userName}
        </div>)
        }
        },
        
        {
          field: 'email',
          headerName: 'Email', 
       
          width: 200,
        },
        {
          field: 'status',
          headerName: 'Status',          
          width: 100,
          
        },
        {
            field: 'transaction',
            headerName: 'Transaction',          
            width: 100,
            
          },
          {
            field:'actions',
            headerName: 'Actions',
            width:150,
            renderCell:(params)=>{
              return(
                <>
                <Link to={'/user/'+params.row.id}><button className="userListEdit">Edit</button></Link>
                <DeleteOutline onClick={()=>handleDelete(params.row.id)} className='userListDelete'/>
                </>
              )
            }
          }
      ];
      
   const handleDelete=(id)=>{
    return(setData(data.filter(item=>item.id!== id)))
   }  
  return (
    <div className='userList'>
      <DataGrid
        rows={data}
        columns={columns}
        disableRowSelectionOnClick
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 8},
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  )
}

export default UserList
