import React from 'react'
import './User.css'
import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@mui/icons-material'
import { Link } from 'react-router-dom'

function User() {
  return (
    <div className='user'>
        <div className="userTitleContainer">
            <h3 className="userTitle">Edit User</h3>
            <Link to='/newUser'>
            <button className="userCreateButton">Create</button>
            </Link>
        </div>
        <div className="userContainer">
            <div className="userShow">
                <div className="userShowTop">
                    <img src="https://img.freepik.com/free-photo/studio-close-up-portrait-young-fresh-blonde-woman-brown-straw-poncho-wool-black-trendy-hat-round-glasses-looking-camera-green-leather-had-bag_273443-1121.jpg" alt="" className="userShowTopImg" />
                    <div className="userShowTopTitle">
                        <span className="userShowUsername">Anna Becker</span>
                        <span className="userShowTitle">Software Engineer</span>
                    </div>
                </div>
                <div className="userShowBottom">
                    <span className="userShowTitle">Account Details</span>
                    <div className="userShowInfo">
                        <PermIdentity className='userShowIcon'></PermIdentity>
                        <span className="userShowInfoTitle">annabeck99</span>
                    </div>
                    <div className="userShowInfo">
                        <CalendarToday className='userShowIcon'></CalendarToday>
                        <span className="userShowInfoTitle">11.12.2001</span>
                    </div>
                    <span className="userShowTitle">Contact Details</span>
                    <div className="userShowInfo">
                        <PhoneAndroid className='userShowIcon'></PhoneAndroid>
                        <span className="userShowInfoTitle">+1 234 4567</span>
                    </div>
                    <div className="userShowInfo">
                        <MailOutline className='userShowIcon'></MailOutline>
                        <span className="userShowInfoTitle">annabeck99@gmail.com</span>
                    </div>
                    <div className="userShowInfo">
                        <LocationSearching className='userShowIcon'></LocationSearching>
                        <span className="userShowInfoTitle">Shabia 10 | Abudhabi</span>
                    </div>
                </div>
            </div>
            <div className="userUpdate">
                <span className="userUpdateTitle">Edit</span>
                <form action="" className="userUpdateForm">
                    <div className="userUpdateLeft">
                      
                      <div className="userUpdateItem">
                        <label>Username</label>
                        <input 
                        type="text" 
                        className="userUpdateInput"
                         placeholder='annabeck99' />
                      </div>
                      <div className="userUpdateItem">
                        <label>Full Name</label>
                        <input 
                        type="text" 
                        className="userUpdateInput"
                         placeholder='Anna Becker' />
                      </div>
                      <div className="userUpdateItem">
                        <label>Email</label>
                        <input 
                        type="text" 
                        className="userUpdateInput"
                         placeholder='annabeck99@gmail.com' />
                      </div>
                      <div className="userUpdateItem">
                        <label>Phone</label>
                        <input 
                        type="text" 
                        className="userUpdateInput"
                         placeholder='+1 234 4567' />
                      </div>
                      <div className="userUpdateItem">
                        <label>Address</label>
                        <input 
                        type="text" 
                        className="userUpdateInput"
                         placeholder='Shabia 10 | Abudhabi' />
                      </div>

                    </div>
                    <div className="userUpdateRight">
                        <div className="userUpdateUpload">
                            <img src="https://img.freepik.com/free-photo/studio-close-up-portrait-young-fresh-blonde-woman-brown-straw-poncho-wool-black-trendy-hat-round-glasses-looking-camera-green-leather-had-bag_273443-1121.jpg" alt="" className="userUpdateImg" />
                            <label htmlFor='file'><Publish className='userUpdateIcon'/> </label>
                            <input type="file" id="file" style={{display:"none"}}></input>
                       </div>
                       <button className="userUpdateButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
      
    </div>
  )
}

export default User
