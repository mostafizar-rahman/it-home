import React from 'react'
import '../../../App.css'
import home from '../../../images/home.png'
import account from '../../../images/account.png'
import favrite from '../../../images/favrite.png'
const PhoneBottomIcon = () => {
  return (
    <div className='w-full h-[71px] absolute bottom-0 top-shadow'>
      <div className='flex justify-around items-center h-full'>
        <div>
          <img src={home} alt="" />
        </div>
        <div>
          <img src={account} alt="" />
        </div>
        <div>
          <img src={favrite} alt="" />
        </div>
      </div>
    </div>
  )
}

export default PhoneBottomIcon