import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { RiFileListFill} from "react-icons/ri";


const CustromerOrder = (props) => {
     const [isOpenDetails, setIsOpenDetails] = useState(false);
     const [productDetails, setProductDetails] = useState([]);

     const showDetails = (id) => {
          console.log(id);
          setIsOpenDetails(true);

          fetch(`https://localhost:44344/api/Order/get/cus/${id}`)
               .then(res => res.json())
               .then(res => setProductDetails(res))

     };
     const hideDetails = () => {
          setIsOpenDetails(false);
     };
     return (
          <>
               <span className="fa-stack" onClick={() => showDetails(props.EmpID)}>
                    <i className=" fa-stack-2x ms-4"><RiFileListFill/></i>
                    {/* MdGroups */}

               </span>
               <Modal show={isOpenDetails} onHide={hideDetails} size="lg" className="mt-2">
                    <Modal.Header>
                         <Modal.Title>Order Handle</Modal.Title>
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
                                                                 <th><span>Order Id</span></th>

                                                                 <th><span>Order Status</span></th>
                                                                 <th><span>Date</span></th>
                                                                 <th><span>Total Cost</span></th>
                                                                 <th><span>Pay Method</span></th>

                                                                 <th>&nbsp;</th>
                                                            </tr>
                                                       </thead>
                                                       <tbody>
                                                            {
                                                                 Object.keys(productDetails).length !== 0 &&
                                                                 // productDetails.filter(filteredproduct=>filteredproduct.OrderStatus !== "Pending" ).map(product =>
                                                                 productDetails.map(product =>
                                                                      <tr key={product.OId}>
                                                                           <td>
                                                                                <h5 className="text-primary">{product.OId}</h5>

                                                                           </td>

                                                                           <td>
                                                                                <h6>{product.OrderStatus}</h6>
                                                                           </td>
                                                                           <td>
                                                                                <h6>{product.OrderDate}</h6>
                                                                           </td>
                                                                           <td>
                                                                                <h6>{product.OrderTotalCost}</h6>
                                                                           </td>
                                                                           <td>
                                                                                <h6>{product.OrderPayMethod}</h6>
                                                                           </td>

                                                                      </tr>

                                                                 )
                                                            }
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

export default CustromerOrder;