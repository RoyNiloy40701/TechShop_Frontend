import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const ProductUpdate = (props) => {
     const [isOpen, setIsOpen] = React.useState(false);
     const [ID, SetID] = useState('');
     const [employeeDetails, setemployeeDetails] = useState([]);
     const { register, handleSubmit, formState: { errors }, reset } = useForm();
     const showModal = (Id) => {
          setIsOpen(true);
          console.log(Id);
          SetID(Id);
          fetch(`https://localhost:44344/api/Product/get/${Id}`)
               .then(res => res.json())
               .then(res => {
                    setemployeeDetails(res);
                    //reset();
               })
     };
     const hideModal = () => {
          setIsOpen(false);
          //reset();
     };
     const onSubmitEdit = data => {
          console.log(data);
          const url = `https://localhost:44344/api/Product/edit`;
          fetch(url, {
               method: 'POST',
               headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
               },
               body: JSON.stringify(data)
          })
               .then(res => res.json())
               .then(data => {
                    alert(data);
                    //reset();
               })
          alert("Edited Successfully");
          hideModal();
     }
     return (
          <div>
               <>
                    <span className="fa-stack" onClick={() => showModal(props.ProID)}>
                         <i className="fa fa-square fa-stack-2x"></i>
                         <i className="fa fa-pencil fa-stack-1x fa-inverse"></i>
                    </span>
                    <Modal show={isOpen} onHide={hideModal} size="lg">
                         <Modal.Header>
                              <Modal.Title>Edit Employee Information</Modal.Title>
                              <button onClick={hideModal} type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                         </Modal.Header>
                         <Modal.Body>
                              <div className="main-body">
                                   <div className="row gutters-sm">
                                        <div className="col-md-4 mb-3">
                                             <div className="card">
                                                  <div className="card-body">
                                                       <div className="d-flex flex-column align-items-center text-center">
                                                            <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width="150" />
                                                            <div className="mt-3">
                                                                 <h4>{employeeDetails.PName}</h4>
                                                                 <p className="text-secondary mb-1">Employee</p>
                                                                 <p className="text-muted font-size-sm">Employee Id: {employeeDetails.PId}</p>
                                                                 <button className="btn btn-outline-primary">Message</button>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                        <div className="col-md-8">
                                             <div className="card mb-3">
                                                  <div className="card-body ">
                                                       {/* readOnly= {true}  */}
                                                       {Object.keys(employeeDetails).length !== 0 &&
                                                            <form onSubmit={handleSubmit(onSubmitEdit)}>

                                                                 <input className="form-control" id="PId" {...register("PId", { required: true })} placeholder="" defaultValue={`${employeeDetails.PId}`} hidden />

                                                                 <label Htmlfor="PName" className="form-label mt-2">Product Name</label>
                                                                 <input className="form-control" id="PName" {...register("PName", { required: true })} placeholder="" defaultValue={`${employeeDetails.PName}`} />
                                                                 {errors.PName &&
                                                                      <p className="text-danger">This field is required</p>
                                                                 }

                                                                 <label Htmlfor="PDescription" className="form-label mt-2">Description</label>
                                                                 <input className="form-control" id="PDescription" {...register("PDescription", { required: true })} placeholder="" defaultValue={`${employeeDetails.PDescription}`} />
                                                                 {errors.PDescription &&
                                                                      <p className="text-danger">This field is required</p>
                                                                 }

                                                                 <label Htmlfor="PBasicPrice" className="form-label mt-2">Basic Price</label>
                                                                 <input className="form-control" id="PBasicPrice" {...register("PBasicPrice", { required: true })} placeholder="" defaultValue={`${employeeDetails.PBasicPrice}`} />
                                                                 {errors.PBasicPrice &&
                                                                      <p className="text-danger">This field is required</p>
                                                                 }

                                                                 <label Htmlfor="CategoryId" className="form-label mt-2">Category</label>
                                                                 <input className="form-control" id="CategoryId" {...register("CategoryId", { required: true })} placeholder="" defaultValue={`${employeeDetails.CategoryId}`} />
                                                                 {errors.CategoryId &&
                                                                      <p className="text-danger">This field is required</p>
                                                                 }
                                                                 <label Htmlfor="PShopId" className="form-label mt-2">Shop</label>
                                                                 <input className="form-control" id="PShopId" {...register("PShopId", { required: true })} placeholder="" defaultValue={`${employeeDetails.PShopId}`} />
                                                                 {errors.PShopId &&
                                                                      <p className="text-danger">This field is required</p>
                                                                 }

                                                                 <label Htmlfor="PStock" className="form-label mt-2">Stock</label>
                                                                 <input className="form-control" id="PStock" {...register("PStock", { required: true })} placeholder="" defaultValue={`${employeeDetails.PStock}`} />
                                                                 {errors.PStock &&
                                                                      <p className="text-danger">This field is required</p>
                                                                 }

                                                                 <input className="form-control " id="PPicture" {...register("PPicture", { required: false })} placeholder="" defaultValue={`${employeeDetails.PPicture}`} hidden />

                                                                 <label Htmlfor="PDiscount" className="form-label mt-2">Discount Price</label>
                                                                 <input className="form-control" id="PDiscount" {...register("PDiscount", { required: true })} placeholder="" defaultValue={`${employeeDetails.PDiscount}`} />
                                                                 {errors.PDiscount &&
                                                                      <p className="text-danger">This field is required</p>
                                                                 }

                                                                 <label Htmlfor="Review" className="form-label mt-2">Review</label>
                                                                 <input className="form-control " id="Review" {...register("Review", { required: true })} placeholder="" defaultValue="0" defaultValue={`${employeeDetails.Review}`} />
                                                                 {errors.Review &&
                                                                      <p className="text-danger">This field is required</p>
                                                                 }
                                                                 <label Htmlfor="Rating" className="form-label mt-2">Rating</label>
                                                                 <input className="form-control " id="Rating" {...register("Rating", { required: true })} placeholder="" defaultValue="0" defaultValue={`${employeeDetails.Rating}`} />
                                                                 {errors.Rating &&
                                                                      <p className="text-danger">This field is required</p>
                                                                 }
                                                                 <p className="text-center mt-2">
                                                                      <input className="btn btn-success my-2" type="submit" defaultValue="Edit Employee" />
                                                                 </p>
                                                            </form>
                                                       }
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </Modal.Body>
                    </Modal>
               </>
          </div>
     );
};


export default ProductUpdate;