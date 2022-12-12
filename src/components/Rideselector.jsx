import React from 'react'
import './rideselector.css'
import mechimg from '../pages/img/user.jpg'
import { Mechlist} from '../pages/data/Mechlist'

const Rideselector = () => {
  return (
    <>
    <div className='title'>choose a mech or swipe up for more</div>
    <div className='ride-selector'>
        <div className='mechlist'>
            { Mechlist.map((mech, index)=>(
                <div className='mech' key={index}>
                 <img src={mechimg} className='mechimage' alt='mechanic'  />
                 <div className="mechdetails">
                    <div className='name'>{mech.name}</div>
                    <div className='time'>5 mins away</div>
                 </div>
                 <div className='price'>$200</div>
            </div>
))}
            
        </div>
    </div>
    </>
  )
}

export default Rideselector