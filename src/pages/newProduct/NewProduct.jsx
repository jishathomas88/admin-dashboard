import React from 'react'
import './NewProduct.css'
import { Publish } from '@mui/icons-material'

function NewProduct() {
  return (
    <div className='newProduct'>
      <h1 className="productTitle">New Product</h1>
      
      <form action="" className="addproductForm">
      <div className="addproductFormItem">                   
                    
         <label for="file">Image </label>
          <input type="file" id="file" ></input>
                
                </div>
                <div className="addproductFormItem">
                    <label>Product Name</label>
                    <input type="text" placeholder='Apple airpod'></input>
                    </div>
                    <div className="addproductFormItem">
                    <label>Stock</label>
                    <input type="text" placeholder='123'></input>
                    </div>
                    <div className="addproductFormItem">
                    <label>Active</label>
                    <select name="active" id="active">
                        <option value="yes">yes</option>
                        <option value="no">no</option>
                    </select>
                    </div>

                   
                    <button className="addproductButton">Create</button>
                
            </form>

    </div>
  )
}

export default NewProduct
