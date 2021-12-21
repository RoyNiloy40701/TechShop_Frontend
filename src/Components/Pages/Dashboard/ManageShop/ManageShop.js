import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ManageShop.css';
import ShopAdd from './ShopAdd/ShopAdd';
import ShopUpdate from './ShopUpdate/ShopUpdate';

const ManageShop = () => {
     const [shops, setShops] = useState([]);
     useEffect(() => {
          fetch('https://localhost:44344/api/Shop/All')
               .then(res => res.json())
               .then(result => setShops(result))
     }, [shops])
     const handleDelete = (id) => {
          console.log(id);
          const proceed = window.confirm(`Are you sure, To delete Shop ,id is ${id}`);
          if (proceed) {
               fetch(`https://localhost:44344/api/Shop/delete/${id}`, {
                    method: 'Post'
               })
                    .then(res => res.json())
                    .then(data => {
                         if (data.deletedCount > 0) {
                              alert('Deleted Successfully');
                              const remainingShops = shops.filter(emp => emp._id !== id)
                              setShops(remainingShops)
                         }
                    })
          }
     }


     return (
          <div className="container">
               <div className="row">
                    <div className="col-lg-12">
                         <div className="main-box clearfix">
                              <div className="table-responsive">
                                   <table className="table user-list">
                                        <thead>
                                             <tr>
                                                  <th><span>Id</span></th>
                                                  <th><span> Shop Name</span></th>

                                                  <th>&nbsp;</th>
                                             </tr>
                                        </thead>
                                        <tbody>
                                             {
                                                  Object.keys(shops).length !== 0 &&
                                                  shops.map(shop =>
                                                       <tr key={shop.ShopId}>
                                                            <td>
                                                                 <h5 className="text-success">{shop.ShopId}</h5>

                                                            </td>
                                                            <td>
                                                                 <h5 className="text-success">{shop.ShopName}</h5>
                                                            </td>

                                                            <td style={{ width: '20%' }}>
                                                                 <div className="table-link d-flex">
                                                                      {/* View Details  */}

                                                                      <ShopUpdate EmpID={shop.ShopId} ></ShopUpdate>

                                                                      {/* Delete Shop  */}
                                                                      <Link onClick={() => handleDelete(shop.ShopId)} className="table-link danger">
                                                                           <span className="fa-stack">
                                                                                <i className="fa fa-square fa-stack-2x"></i>
                                                                                <i className="fa fa-trash-o fa-stack-1x fa-inverse"></i>
                                                                           </span>
                                                                      </Link>
                                                                 </div>
                                                            </td>
                                                       </tr>
                                                  )}
                                        </tbody>
                                   </table>
                                   <ShopAdd></ShopAdd>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};


export default ManageShop;