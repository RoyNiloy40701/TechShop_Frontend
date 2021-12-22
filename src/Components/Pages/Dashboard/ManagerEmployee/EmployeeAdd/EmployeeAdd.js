import React from 'react';
import { Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const EmployeeAdd = () => {
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
        
          const url = `https://localhost:44344/api/Employee/add`;
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
          alert("Added Done");
          hideAddEmpModal();
     }
     return (
          <div>
               <div className="d-flex justify-content-center ">
                    <button className="btn btn-primary" onClick={showAddEmpModal}>Add New Employee</button>
               </div>
               <>
                    <Modal show={isOpenAddEmp} onHide={hideAddEmpModal} size="lg">
                         <Modal.Header>
                              <Modal.Title>Add New Employee</Modal.Title>
                              <button onClick={hideAddEmpModal} type="button" class="btn-close" data-bs-dismiss="Eodal" aria-label="Close"></button>
                         </Modal.Header>
                         <Modal.Body>
                              <form onSubmit={handleSubmit(onSubmit)}>
                                   <label htmlFor="EName" className="form-label mt-2">Employee Name</label>
                                   <input className="form-control" id="EName" {...register("EName", { required: true })} placeholder="" />
                                   {errors.EName &&
                                        <p className="text-danger">This field is required</p>
                                   }
                                   <label htmlFor="EPassword" className="form-label mt-2">Employee Password</label>
                                   <input className="form-control" id="EPassword" {...register("EPassword", { required: true })} placeholder="" />
                                   {errors.EPassword &&
                                        <p className="text-danger">This field is required</p>
                                   }
                                   <label htmlFor="EEmail" className="form-label mt-2">Employee Email</label>
                                   <input className="form-control" id="EEmail" {...register("EEmail", { required: true })} placeholder="" />
                                   {errors.EEmail &&
                                        <p className="text-danger">This field is required</p>
                                   }
                                   <label htmlFor="EAddress" className="form-label mt-2">Employee Address</label>
                                   <input className="form-control" id="EAddress" {...register("EAddress", { required: true })} placeholder="" />
                                   {errors.EAddress &&
                                        <p className="text-danger">This field is required</p>
                                   }
                                   <label htmlFor="EPhone" className="form-label mt-2">Employee Phone</label>
                                   <input className="form-control" id="EPhone" {...register("EPhone", { required: true })} placeholder="" />
                                   {errors.EPhone &&
                                        <p className="text-danger">This field is required</p>
                                   }
                                   <input className="form-control " id="EPicture" {...register("EPicture", { required: true })} placeholder="" value="NULL" hidden />
                                   <label htmlFor="EBasicSalary" className="form-label mt-2">Employee BasicSalary</label>
                                   <input className="form-control" id="EBasicSalary" {...register("EBasicSalary", { required: true })} placeholder="" />
                                   {errors.EBasicSalary &&
                                        <p className="text-danger">This field is required</p>
                                   }
                                   <input className="form-control " id="EFastiveBonus" {...register("EFastiveBonus", { required: true })} placeholder="" value="0" hidden />
                                   <input className="form-control " id="EPerformBonus" {...register("EPerformBonus", { required: true })} placeholder="" value="0" hidden />
                                   <label htmlFor="ESchedule" className="form-label mt-2">Employee Schedule</label>
                                   <input className="form-control" id="ESchedule" {...register("ESchedule", { required: true })} placeholder="" />
                                   {errors.ESchedule &&
                                        <p className="text-danger">This field is required</p>
                                   }
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
export default EmployeeAdd;