import React, { useEffect, useState } from 'react';

import EmployeeDeliverMan from './EmployeeDeliverMan/EmployeeDeliverMan';
import EmployeeOrder from './EmployeeOrder/EmployeeOrder';

import './EmployeeWork.css';

const EmployeeWork = () => {
     const [employees, setEmployees] = useState([]);
     useEffect(() => {
          fetch('https://localhost:44344/api/Employee/All')
               .then(res => res.json())
               .then(result => setEmployees(result))
     }, [employees])



     return (
          <div className="container">
               <div className="row">
                    <div className="col-lg-12">
                         <div className="main-box clearfix">
                              <div className="table-responsive">
                                   <table className="table user-list">
                                        <thead>
                                             <tr>
                                                  <th><span>User</span></th>
                                                  <th><span>Work Time</span></th>
                                                  <th><span>Email</span></th>
                                                  <th>&nbsp;</th>
                                             </tr>
                                        </thead>
                                        <tbody>
                                             {
                                                  Object.keys(employees).length !== 0 &&
                                                  employees.map(employee =>
                                                       <tr key={employee.EId}>
                                                            <td>
                                                                 <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" />
                                                                 <h5 className="text-primary">{employee.EName}</h5>
                                                                 <span className="user-subhead">Employee</span>
                                                            </td>
                                                            <td>
                                                                 <h6>{employee.ESchedule}</h6>
                                                            </td>

                                                            <td>

                                                                 <a href="#">{employee.EEmail}</a>
                                                            </td>
                                                            <td style={{ width: '20%' }}>
                                                                 <div className="table-link d-flex">
                                                                      {/* View Details  */}

                                                                      {/* <EmployeeDetails EmpID={employee.EId}></EmployeeDetails>
                                                                      <EmployeeUpdate EmpID={employee.EId}></EmployeeUpdate> */}
                                                                      <EmployeeOrder EmpID={employee.EId}></EmployeeOrder>
                                                                      <EmployeeDeliverMan EmpID={employee.EId}></EmployeeDeliverMan>



                                                                 </div>
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
     );
};
export default EmployeeWork;