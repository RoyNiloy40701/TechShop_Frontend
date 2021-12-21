import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import { MdGroups } from "react-icons/md";

const EmployeeDeliverMan = (props) => {
     const [isOpenDetails, setIsOpenDetails] = useState(false);
     const [productDetails, setProductDetails] = useState([]);

     const showDetails = (id) => {
          console.log(id);
          setIsOpenDetails(true);

          fetch(`https://localhost:44344/api/DeliveryMan/get/emp/${id}`)
               .then(res => res.json())
               .then(res => setProductDetails(res))


     };
     const hideDetails = () => {
          setIsOpenDetails(false);
     };
     return (
          <>
               <span className="fa-stack" onClick={() => showDetails(props.EmpID)}>
                    <i className=" ms-4 fa-stack-2x"><MdGroups></MdGroups></i>
                    {/* MdGroups */}

               </span>
               <Modal show={isOpenDetails} onHide={hideDetails} size="lg" className="mt-2">
                    <Modal.Header>
                         <Modal.Title>DeliveryMan Add List</Modal.Title>
                         <button onClick={hideDetails} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </Modal.Header>
                    <Modal.Body>
                         {/* Start */}
                         <div className="container">
                              <div className="row">
                                   <div className="col-lg-12">
                                        <div className="main-box clearfix">
                                             <div className="table-responsive">
                                                  <table className="table user-list">
                                                       <thead>
                                                            <tr>
                                                                 <th><span> Id</span></th>
                                                                 <th><span>Name</span></th>
                                                                 <th><span>Email</span></th>
                                                                 <th><span>Salary</span></th>
                                                                 <th><span>Schedule</span></th>

                                                                 <th>&nbsp;</th>
                                                            </tr>
                                                       </thead>
                                                       <tbody>
                                                            {
                                                                 Object.keys(productDetails).length !== 0 &&
                                                                 productDetails.map(product =>
                                                                      
                                                                      <tr key={product.Did}>
                                                                           <td>
                                                                                <h5 className="text-primary">{product.Did}</h5>

                                                                           </td>
                                                                           <td>
                                                                                <h6>{product.DName}</h6>
                                                                           </td>

                                                                           <td>
                                                                                <h6>{product.DEmail}</h6>
                                                                           </td>
                                                                       
                                                                           <td>
                                                                                <h6>{product.DSalay}</h6>
                                                                           </td>
                                                                           <td>
                                                                                <h6>{product.DSchedule}</h6>
                                                                           </td>

                                                                      </tr>
                                                                    
                                                                 )}
                                                       </tbody>
                                                  </table>

                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>

                         {/* End  */}
                    </Modal.Body>
                    <Modal.Footer>
                         <button onClick={hideDetails} type="button" className="btn btn-primary">OK</button>
                    </Modal.Footer>
               </Modal>
          </>
     );
};


export default EmployeeDeliverMan;