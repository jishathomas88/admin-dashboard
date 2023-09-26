import React, { useState } from 'react'
import './ProductList.css'
import { DataGrid , GridColDef, GridValueGetterParams} from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import { productRows } from '../../dummyData';
import { Link } from 'react-router-dom';

function ProductList() {
    const [data,setData]=useState(productRows)
    const handleDelete=(id)=>{
        return(setData(data.filter(item=>item.id!== id)))
       }  
       const columns= [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'product', headerName: 'Product',width: 200,renderCell : (params)=>{
          return (
           <div className='productListProduct'>
          <img src={params.row.img} alt=" " className='productListImg'></img>
          {params.row.name}
        </div>)
        }
        },
        
        {
          field: 'stock',
          headerName: 'Stock', 
       
          width: 200,
        },
        {
          field: 'status',
          headerName: 'Status',          
          width: 100,
          
        },
        {
            field: 'price',
            headerName: 'Price',          
            width: 100,
            
          },
          {
            field:'actions',
            headerName: 'Actions',
            width:150,
            renderCell:(params)=>{
              return(
                <>
                <Link to={'/product/'+params.row.id}><button className="productListEdit">Edit</button></Link>
                <DeleteOutline onClick={()=>handleDelete(params.row.id)} className='productListDelete'/>
                </>
              )
            }
          }
      ];
  return (
    <div className='productList'>
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

export default ProductList
