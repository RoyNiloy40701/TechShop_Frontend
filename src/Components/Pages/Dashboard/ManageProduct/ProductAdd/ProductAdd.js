import React from 'react';
import { Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const ProductAdd = () => {
     const [isOpenAddEmp, setIsOpenAddEmp] = React.useState(false);
     const { register, handleSubmit, formState: { errors }, reset } = useForm();
     const showAddEmpModal = () => {
          reset();
          setIsOpenAddEmp(true);
     };
     const hideAddEmpModal = () => {
          setIsOpenAddEmp(false);
     };
     const onSubmit = data => {

          console.log(JSON.stringify(data));
        
          const url = `https://localhost:44344/api/Product/add`;
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
                    alert("Added");
               })
          alert("Added  Successfully");
          hideAddEmpModal();
     }
     return (
          <div>
               <div className="d-flex justify-content-center ">
                    <button className="btn btn-primary" onClick={showAddEmpModal}>Add New Product</button>
               </div>
               <>
                    <Modal show={isOpenAddEmp} onHide={hideAddEmpModal} size="lg">
                         <Modal.Header>
                              <Modal.Title>Add New Product</Modal.Title>
                              <button onClick={hideAddEmpModal} type="button" class="btn-close" data-bs-dismiss="Eodal" aria-label="Close"></button>
                         </Modal.Header>
                         <Modal.Body>
                              <form onSubmit={handleSubmit(onSubmit)}>
                                   <label htmlFor="PName" className="form-label mt-2">Product Name</label>
                                   <input className="form-control" id="PName" {...register("PName", { required: true })} placeholder="" />
                                   {errors.PName &&
                                        <p className="text-danger">This field is required</p>
                                   }
                                   <label htmlFor="PDescription" className="form-label mt-2"> Description</label>
                                   <input className="form-control" id="PDescription" {...register("PDescription", { required: true })} placeholder="" />
                                   {errors.PDescription &&
                                        <p className="text-danger">This field is required</p>
                                   }
                                   <label htmlFor="PBasicPrice" className="form-label mt-2">Basic Price</label>
                                   <input className="form-control" id="PBasicPrice" {...register("PBasicPrice", { required: true })} placeholder="" />
                                   {errors.PBasicPrice &&
                                        <p className="text-danger">This field is required</p>
                                   }
                                   <label htmlFor="PDiscount " className="form-label mt-2">Discount Price</label>
                                   <input className="form-control" id="PDiscount " {...register("PDiscount", { required: true })} placeholder="" />
                                   {errors.PDiscount  &&
                                        <p className="text-danger">This field is required</p>
                                   }
                                   <label htmlFor="PStock " className="form-label mt-2">Stock</label>
                                   <input className="form-control" id="PStock " {...register("PStock", { required: true })} placeholder="" />
                                   {errors.PStock  &&
                                        <p className="text-danger">This field is required</p>
                                   }
                                   <input className="form-control " id=" PPicture" {...register(" PPicture", { required: true })} placeholder="" defaultValue="" />
                                  
                                   <label htmlFor="PCategoryId" className="form-label mt-2">Category</label>
                                   <input className="form-control" id="PCategoryId" {...register("CategoryId", { required: true })} placeholder="" />
                                   {errors.PCategoryId &&
                                        <p className="text-danger">This field is required</p>
                                   }

                                   <label htmlFor="PShopId" className="form-label mt-2">Shop</label>
                                   <input className="form-control" id="PShopId" {...register("PShopId", { required: true })} placeholder="" />
                                   {errors.PShopId &&
                                        <p className="text-danger">This field is required</p>
                                   }
                                   <label htmlFor="Review" className="form-label mt-2">Review</label>
                                   <input className="form-control" id="Review" {...register("Review", { required: true })} placeholder="" />
                                   {errors.Review &&
                                        <p className="text-danger">This field is required</p>
                                   } 
                                    <input className="form-control " id="MId" {...register("MId", { required: true })} placeholder="" />
                                    <input className="form-control " id="Rating" {...register("Rating", { required: true })} placeholder="" Value="1" />
                                    <input className="form-control " id="PSoldQuantity" {...register("PSoldQuantity", { required: true })} placeholder="" Value="1" />
                                   <p className="text-center mt-2">
                                        <input className="btn btn-success my-2" type="submit" value="Add Employee" />
                                   </p>
                              </form>
                         </Modal.Body>
                         <Modal.Footer>
                         </Modal.Footer>
                    </Modal>
               </>
          </div>
     );
};

export default ProductAdd;