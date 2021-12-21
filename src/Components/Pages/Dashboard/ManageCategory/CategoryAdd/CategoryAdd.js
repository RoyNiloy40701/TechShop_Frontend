import React from 'react';
import { Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const CategoryAdd = () => {
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
        
          const url = `https://localhost:44344/api/Category/add`;
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
          alert("Added Successfully");
          hideAddEmpModal();
     }
     return (
          <div>
               <div className="d-flex justify-content-center ">
                    <button className="btn btn-primary" onClick={showAddEmpModal}>Add New Category</button>
               </div>
               <>
                    <Modal show={isOpenAddEmp} onHide={hideAddEmpModal} size="lg">
                         <Modal.Header>
                              <Modal.Title>Add New Category</Modal.Title>
                              <button onClick={hideAddEmpModal} type="button" class="btn-close" data-bs-dismiss="Eodal" aria-label="Close"></button>
                         </Modal.Header>
                         <Modal.Body>
                              <form onSubmit={handleSubmit(onSubmit)}>
                                   <label htmlFor="CategoryName" className="form-label mt-2">Category Name</label>
                                   <input className="form-control" id="CategoryName" {...register("CategoryName", { required: true })} placeholder="" />
                                   {errors.CategoryName &&
                                        <p className="text-danger">This field is required</p>
                                   }
                                  
                                   <p className="text-center mt-2">
                                        <input className="btn btn-success my-2" type="submit" value="Add Category" />
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

export default CategoryAdd;