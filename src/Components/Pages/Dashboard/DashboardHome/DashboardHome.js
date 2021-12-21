import React from 'react';
import './Navigation.css'

const DashboardHome = () => {

     return (

          <div className='dashboard-content'>
               <div className='container'>
                    <div className='card'>
                         <div className='card-header'>
                              <h1>Welcome back Jim</h1>
                         </div>
                         <div className='card-body'>
                              <p>Your account type is: Administrator</p>
                         </div>
                    </div>
               </div>

          </div>


     );
};

export default DashboardHome;