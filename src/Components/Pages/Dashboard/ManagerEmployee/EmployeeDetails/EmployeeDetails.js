import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';


const EmployeeDetails = (props) => {
     const [isOpenDetails, setIsOpenDetails] = useState(false);
     const [employeeDetails, setEmployeeDetails] = useState([]);
     const showDetails = (id) => {
          console.log(id);
          setIsOpenDetails(true);
          fetch(`https://localhost:44344/api/Employee/get/${id}`)
               .then(res => res.json())
               .then(res => setEmployeeDetails(res))
     };
     const hideDetails = () => {
          setIsOpenDetails(false);
     };
     return (
          <>
               <span className="fa-stack " onClick={() => showDetails(props.EmpID)}>
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
                                                                 <h4>{employeeDetails.EName}</h4>
                                                                 <p className="text-secondary mb-1">Employee</p>
                                                                 <p className="text-muted font-size-sm">Employee Id:{employeeDetails.EId}</p>
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
                                                                 {employeeDetails.EName}
                                                            </div>
                                                       </div>
                                                       <hr />
                                                       <div className="row">
                                                            <div className="col-sm-4">
                                                                 <h6 className="mb-0">Email</h6>
                                                            </div>
                                                            <div className="col-sm-8 text-secondary">
                                                                 {employeeDetails.EEmail}
                                                            </div>
                                                       </div>
                                                       <hr />
                                                       <div className="row">
                                                            <div className="col-sm-4">
                                                                 <h6 className="mb-0">Phone</h6>
                                                            </div>
                                                            <div className="col-sm-8 text-secondary">
                                                                 {employeeDetails.EPhone}
                                                            </div>
                                                       </div>
                                                       <hr />
                                                       <div className="row">
                                                            <div className="col-sm-4">
                                                                 <h6 className="mb-0">Address</h6>
                                                            </div>
                                                            <div className="col-sm-8 text-secondary">
                                                                 {employeeDetails.EAddress}
                                                            </div>
                                                       </div>
                                                       <hr />
                                                       <div className="row">
                                                            <div className="col-sm-4">
                                                                 <h6 className="mb-0">Work Schedule </h6>
                                                            </div>
                                                            <div className="col-sm-8 text-secondary">
                                                                 {employeeDetails.ESchedule}
                                                            </div>
                                                       </div>
                                                       <hr />
                                                       <div className="row">
                                                            <div className="col-sm-4">
                                                                 <h6 className="mb-0">Basic Salary</h6>
                                                            </div>
                                                            <div className="col-sm-8 text-secondary">
                                                                 {employeeDetails.EBasicSalary}
                                                            </div>
                                                       </div>
                                                       <hr />
                                                       <div className="row">
                                                            <div className="col-sm-4">
                                                                 <h6 className="mb-0">Festive Bonus </h6>
                                                            </div>
                                                            <div className="col-sm-8 text-secondary">
                                                                 {employeeDetails.EFastiveBonus}
                                                            </div>
                                                       </div>
                                                       <hr />
                                                       <div className="row">
                                                            <div className="col-sm-4">
                                                                 <h6 className="mb-0">Perform Bonus </h6>
                                                            </div>
                                                            <div className="col-sm-8 text-secondary">
                                                                 {employeeDetails.EPerformBonus}
                                                            </div>
                                                       </div>
                                                       <hr />
                                                       <div className="row">
                                                            <div className="col-sm-4">
                                                                 <h6 className="mb-0">Total Salary </h6>
                                                            </div>
                                                            <div className="col-sm-8 text-secondary">
                                                                 {employeeDetails.EPerformBonus+ employeeDetails.EBasicSalary+employeeDetails.EFastiveBonus}
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
export default EmployeeDetails;