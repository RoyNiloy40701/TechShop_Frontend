import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const EmployeeUpdate = (props) => {
     const [isOpen, setIsOpen] = React.useState(false);
     const [ID, SetID] = useState('');
     const [employeeDetails, setemployeeDetails] = useState([]);
     const { register, handleSubmit, formState: { errors }, reset } = useForm();
     const showModal = (Id) => {
          setIsOpen(true);
          console.log(Id);
          SetID(Id);
          fetch(`https://localhost:44344/api/Employee/get/${Id}`)
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
          const url = `https://localhost:44344/api/Employee/edit`;
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
                                                                 <h4>{employeeDetails.EName}</h4>
                                                                 <p className="text-secondary mb-1">Employee</p>
                                                                 <p className="text-muted font-size-sm">Employee Id: {employeeDetails.EId}</p>
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

                                                                 <input type="hidden" className="form-control" id="EId" {...register("EId", { required: true })} placeholder="" defaultValue={`${employeeDetails.EId}`} />

                                                                 <label Htmlfor="EName" className="form-label mt-2">Employee Name</label>
                                                                 <input className="form-control" id="EName" {...register("EName", { required: true })} placeholder="" defaultValue={`${employeeDetails.EName}`} />
                                                                 {errors.EName &&
                                                                      <p className="text-danger">This field is required</p>
                                                                 }
                                                                 <label Htmlfor="EEmail" className="form-label mt-2">Employee Email</label>
                                                                 <input className="form-control" id="EEmail" {...register("EEmail", { required: true })} placeholder="" defaultValue={`${employeeDetails.EEmail}`} />
                                                                 {errors.EEmail &&
                                                                      <p className="text-danger">This field is required</p>
                                                                 }
                                                                 <label Htmlfor="ESchedule" className="form-label mt-2">Work Schedule</label>
                                                                 <input className="form-control" id="ESchedule" {...register("ESchedule", { required: true })} placeholder="" defaultValue={`${employeeDetails.ESchedule}`} />
                                                                 {errors.ESchedule &&
                                                                      <p className="text-danger">This field is required</p>
                                                                 }

                                                                 <label Htmlfor="EAddress" className="form-label mt-2">Employee Address</label>
                                                                 <input className="form-control" id="EAddress" {...register("EAddress", { required: true })} placeholder="" defaultValue={`${employeeDetails.EAddress}`} />
                                                                 {errors.EAddress &&
                                                                      <p className="text-danger">This field is required</p>
                                                                 }
                                                                 <label Htmlfor="EPhone" className="form-label mt-2">Employee Phone</label>
                                                                 <input className="form-control" id="EPhone" {...register("EPhone", { required: true })} placeholder="" defaultValue={`${employeeDetails.EPhone}`} />
                                                                 {errors.EPhone &&
                                                                      <p className="text-danger">This field is required</p>
                                                                 }
                                                                 <input type="hidden" className="form-control " id="EPicture" {...register("EPicture", { required: true })} placeholder="" defaultValue={`${employeeDetails.EPicture}`} />
                                                                 <input type="hidden" className="form-control " id="EPassword" {...register("EPassword", { required: true })} placeholder="" defaultValue={`${employeeDetails.EPassword}`} />
                                                                 <label Htmlfor="EBasicSalary" className="form-label mt-2">Employee BasicSalary</label>
                                                                 <input className="form-control" id="EBasicSalary" {...register("EBasicSalary", { required: true })} placeholder="" defaultValue={`${employeeDetails.EBasicSalary}`} />
                                                                 {errors.EBasicSalary &&
                                                                      <p className="text-danger">This field is required</p>
                                                                 }
                                                                 <label Htmlfor="EFastiveBonus" className="form-label mt-2">Employee Fesitive Bonus</label>
                                                                 <input className="form-control " id="EFastiveBonus" {...register("EFastiveBonus", { required: true })} placeholder="" defaultValue="0" defaultValue={`${employeeDetails.EFastiveBonus}`} />
                                                                 {errors.EFastiveBonus &&
                                                                      <p className="text-danger">This field is required</p>
                                                                 }
                                                                 <label Htmlfor="EPerformBonus" className="form-label mt-2">Employee Performance Bonus</label>
                                                                 <input className="form-control " id="EPerformBonus" {...register("EPerformBonus", { required: true })} placeholder="" defaultValue="0" defaultValue={`${employeeDetails.EPerformBonus}`} />
                                                                 {errors.EPerformBonus &&
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

export default EmployeeUpdate;