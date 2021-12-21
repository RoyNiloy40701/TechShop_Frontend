import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const CategoryUpdate = (props) => {
     const [isOpen, setIsOpen] = React.useState(false);
     const [ID, SetID] = useState('');
     const [categoryDetails, setcategoryDetails] = useState([]);
     const { register, handleSubmit, formState: { errors }, reset } = useForm();
     const showModal = (Id) => {
          setIsOpen(true);
          console.log(Id);
          SetID(Id);
          fetch(`https://localhost:44344/api/Category/get/${Id}`)
               .then(res => res.json())
               .then(res => {
                    setcategoryDetails(res);
                    //reset();
               })
     };
     const hideModal = () => {
          setIsOpen(false);
          //reset();
     };
     const onSubmitEdit = data => {
          console.log(data);
          const url = `https://localhost:44344/api/Category/edit`;
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
                    <span className="fa-stack" onClick={() => showModal(props.EmpID)}>
                         <i className="fa fa-square fa-stack-2x"></i>
                         <i className="fa fa-pencil fa-stack-1x fa-inverse"></i>
                    </span>
                    <Modal show={isOpen} onHide={hideModal} size="lg">
                         <Modal.Header>
                              <Modal.Title>Edit Category Information</Modal.Title>
                              <button onClick={hideModal} type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                         </Modal.Header>
                         <Modal.Body>
                              <div className="main-body mx-5">
                                   <div className="row gutters-sm">
                                        <div className="col-md-12">
                                             <div className="card mb-3">
                                                  <div className="card-body">
                                                 
                                                       {Object.keys(categoryDetails).length !== 0 &&
                                                            <form onSubmit={handleSubmit(onSubmitEdit)}>
                                                                 <label Htmlfor="CategoryId" className="form-label mt-2">Category ID</label>
                                                                 <input className="form-control" id="CategoryId" {...register("CategoryId", { required: true })} placeholder="" defaultValue={`${categoryDetails.CategoryId}`} hidden/>
                                                                 {errors.CategoryId &&
                                                                      <p className="text-danger">This field is required</p>
                                                                 }
                                                                 <label Htmlfor="CategoryName" className="form-label mt-2">Category Name</label>
                                                                 <input className="form-control" id="CategoryName" {...register("CategoryName", { required: true })} placeholder="" defaultValue={`${categoryDetails.CategoryName}`} />
                                                                 {errors.CategoryName &&
                                                                      <p className="text-danger">This field is required</p>
                                                                 }
                                                                 <p className="text-center mt-2">
                                                                      <input className="btn btn-success my-2" type="submit" defaultValue="Edit Category" />
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
export default CategoryUpdate;