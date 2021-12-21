import React, { useEffect, useState } from 'react';
import CustromerOrder from './CustromerOrder/CustromerOrder';
import './CustromerWork.css'
const CustromerWork = () => {
     const [employees, setEmployees] = useState([]);
     useEffect(() => {
          fetch('https://localhost:44344/api/Customer/All')
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
                                                  <th><span>Id</span></th>
                                                  <th><span>Name</span></th>
                                                  <th><span>Email</span></th>
                                                  <th><span>Address</span></th>
                                                  <th>&nbsp;</th>
                                             </tr>
                                        </thead>
                                        <tbody>
                                             {
                                                  Object.keys(employees).length !== 0 &&
                                                  employees.map(employee =>
                                                       <tr key={employee.CId}>
                                                            <td>
                                                                 <h6>{employee.CId}</h6>
                                                            </td>
                                                            <td>
                                                                 <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" />
                                                                 <h5 className="text-primary">{employee.CName}</h5>
                                                                 <span className="user-subhead">Employee</span>
                                                            </td>
                                                            

                                                            <td>

                                                                 <a href="#">{employee.CEmail}</a>
                                                            </td>
                                                            <td>

                                                                 <h6>{employee.CAddress}</h6>
                                                            </td>
                                                            <td style={{ width: '20%' }}>
                                                                 <div className="table-link d-flex">
                                                                      {/* View Details  */}

                                                                   <CustromerOrder EmpID={employee.CId}></CustromerOrder>

                                                                      {/* <EmployeeOrder EmpID={employee.EId}></EmployeeOrder>
                                                                      <EmployeeDeliverMan EmpID={employee.EId}></EmployeeDeliverMan> */}

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

export default CustromerWork;