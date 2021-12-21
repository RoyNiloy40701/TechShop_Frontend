import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';

const ProductDetails = (props) => {
     const [isOpenDetails, setIsOpenDetails] = useState(false);
     const [productDetails, setProductDetails] = useState([]);
     const showDetails = (id) => {
          console.log(id);
          setIsOpenDetails(true);
          fetch(`https://localhost:44344/api/Product/get/${id}`)
               .then(res => res.json())
               .then(res => setProductDetails(res))
     };
     const hideDetails = () => {
          setIsOpenDetails(false);
     };
     return (
          <>
               <span className="fa-stack" onClick={() => showDetails(props.ProID)}>
                    <i className="fa fa-square fa-stack-2x"></i>
                    <i className="fa fa-search-plus fa-stack-1x fa-inverse"></i>
               </span>
               <Modal show={isOpenDetails} onHide={hideDetails} size="lg" className="mt-2">
                    <Modal.Header>
                         <Modal.Title>View Information</Modal.Title>
                         <button onClick={hideDetails} type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </Modal.Header>
                    <Modal.Body>
                         {/* Start */}
                         <div className="container">
                              <div className="main-body">
                                   <div className="row gutters-sm">
                                        <div className="col-md-4 mb-3">
                                             <div className="card">
                                                  <div className="card-body">
                                                       <div className="d-flex flex-column align-items-center text-center">
                                                            <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width="150" />
                                                            <div className="mt-3">
                                                                 <h4>{productDetails.PName}</h4>
                                                                 <p className="text-secondary mb-1">Product</p>
                                                                 <p className="text-muted font-size-sm">{productDetails.PBasicPrice}</p>
                                                                 <button className="btn btn-outline-primary">Message</button>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                        <div className="col-md-8">
                                             <div className="card mb-3">
                                                  <div className="card-body">
                                                       <div className="row">
                                                            <div className="col-sm-4">
                                                                 <h6 className="mb-0">Full Name</h6>
                                                            </div>
                                                            <div className="col-sm-8 text-secondary">
                                                                 {productDetails.PName}
                                                            </div>
                                                       </div>
                                                       <hr />

                                                       <div className="row">
                                                            <div className="col-sm-4">
                                                                 <h6 className="mb-0">Description</h6>
                                                            </div>
                                                            <div className="col-sm-8 text-secondary">
                                                                 {productDetails.PDescription}
                                                            </div>
                                                       </div>
                                                       <hr />
                                                       <div className="row">
                                                            <div className="col-sm-4">
                                                                 <h6 className="mb-0">Category</h6>
                                                            </div>
                                                            <div className="col-sm-8 text-secondary">
                                                                 {productDetails.CategoryId}
                                                            </div>
                                                       </div>
                                                       <hr />
                                                       <div className="row">
                                                            <div className="col-sm-4">
                                                                 <h6 className="mb-0">Shop</h6>
                                                            </div>
                                                            <div className="col-sm-8 text-secondary">
                                                                 {productDetails.PShopId}
                                                            </div>
                                                       </div>
                                                       <hr />
                                                       <div className="row">
                                                            <div className="col-sm-4">
                                                                 <h6 className="mb-0">Basic Price</h6>
                                                            </div>
                                                            <div className="col-sm-8 text-secondary">
                                                                 {productDetails.PBasicPrice}
                                                            </div>
                                                       </div>
                                                       <hr />
                                                       <div className="row">
                                                            <div className="col-sm-4">
                                                                 <h6 className="mb-0">Discount Price</h6>
                                                            </div>
                                                            <div className="col-sm-8 text-secondary">
                                                                 {productDetails.PDiscount}
                                                            </div>
                                                       </div>
                                                       <hr />
                                                       <div className="row">
                                                            <div className="col-sm-4">
                                                                 <h6 className="mb-0">Stock</h6>
                                                            </div>
                                                            <div className="col-sm-8 text-secondary">
                                                                 {productDetails.PStock}
                                                            </div>
                                                       </div>
                                                       <hr />
                                                       <div className="row">
                                                            <div className="col-sm-4">
                                                                 <h6 className="mb-0">Review</h6>
                                                            </div>
                                                            <div className="col-sm-8 text-secondary">
                                                                 {productDetails.Review}
                                                            </div>
                                                       </div>
                                                       <hr />
                                                       <div className="row">
                                                            <div className="col-sm-4">
                                                                 <h6 className="mb-0">Rating</h6>
                                                            </div>
                                                            <div className="col-sm-8 text-secondary">
                                                                 {productDetails.Rating}
                                                            </div>
                                                       </div>
                                                       <hr />
                                                       <div className="row">
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         {/* End  */}
                    </Modal.Body>
                    <Modal.Footer>
                         <button onClick={hideDetails} type="button" class="btn btn-primary">OK</button>
                    </Modal.Footer>
               </Modal>
          </>
     );
};

export default ProductDetails;