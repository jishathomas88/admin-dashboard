import React from 'react'
import './Product.css'
import Chart from '../../components/chart/Chart'
import { productData } from '../../dummyData'
import { Publish } from '@mui/icons-material'
import { Link } from 'react-router-dom'
function Product() {
  return (
    <div className='product'>
        <div className="productTitleContainer">
            <h3 className="productTitle">Product</h3>
            <Link to='/newProduct'>
            <button className="productCreateButton">Create</button>
            </Link>
        </div>
        <div className="productTop">
            <div className="productTopLeft">
                <Chart data={productData} dataKey="sales" title="Sales Performance"/>
            </div>
            <div className="productTopRight">
                <div className="productInfoTop">
                    <img src="https://images.immediate.co.uk/production/volatile/sites/3/2021/04/Apple-AirPods-review-2-5eb4673.png" alt="" className="productInfoImg" />
                    <span className="productName">Apple Airods</span>
                </div>
                <div className="productInfoBottom">
                    <div className="productInfoItem">
                        <span className="productInfoKey">id:</span>
                        <span className="ProductInfoValue">123</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">sales:</span>
                        <span className="ProductInfoValue">5123</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">active:</span>
                        <span className="ProductInfoValue">yes</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">in stock:</span>
                        <span className="ProductInfoValue">no</span>
                    </div>

                </div>
            </div>
        </div>
        <div className="productBottom">
            <form action="" className="productForm">
                <div className="productFormLeft">
                    <label>Product Name</label>
                    <input type="text" placeholder='Apple airpod'></input>
                    <label>In Stock</label>
                    <select name="inStock" id="inStock">
                        <option value="yes">yes</option>
                        <option value="no">no</option>
                    </select>
                    <label>Active</label>
                    <select name="active" id="active">
                        <option value="yes">yes</option>
                        <option value="no">no</option>
                    </select>

                </div>
                <div className="productFormRight">
                    <div className="productUpload">
                        <img src="https://images.immediate.co.uk/production/volatile/sites/3/2021/04/Apple-AirPods-review-2-5eb4673.png" alt="" className="productUploadImg" />
                        <label for="file">
                            <Publish ></Publish>
                        </label>
                        <input type="file" id="file" style={{display:"none"}}></input>
                    </div>
                    <button className="productButton">Update</button>
                </div>
            </form>
        </div>
      
    </div>
  )
}

export default Product

