import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import EmployeeAdd from './EmployeeAdd/EmployeeAdd';
import EmployeeDetails from './EmployeeDetails/EmployeeDetails';
import EmployeeUpdate from './EmployeeUpdate/EmployeeUpdate';
import './ManageEmployee.css';

const ManageEmployee = () => {
     const [employees, setEmployees] = useState([]);
     useEffect(() => {
          fetch('https://localhost:44344/api/Employee/All')
               .then(res => res.json())
               .then(result => setEmployees(result))
     }, [employees])
     const handleDelete = (id) => {
          console.log(id);
          const proceed = window.confirm(`Are you sure, To delete ,id is ${id}`);
          if (proceed) {
               fetch(`https://localhost:44344/api/Employee/delete/${id}`, {
                    method: 'Post'
               })
                    .then(res => res.json())
                    .then(data => {
                         if (data.deletedCount > 0) {
                              alert('Deleted Successfully');
                              const remainingEmployees = employees.filter(emp => emp._id !== id)
                              setEmployees(remainingEmployees)
                         }
                    })
          }
     }


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
                                                  <th className="text-center"><span>Phone</span></th>
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
                                                            <td className="text-center">
                                                                 <span className="label label-default">{employee.EPhone}</span>
                                                            </td>
                                                            <td>
                                                                
                                                                 <a href="#">{employee.EEmail}</a>
                                                            </td>
                                                            <td style={{ width: '20%' }}>
                                                                 <div className="table-link d-flex">
                                                                      {/* View Details  */}

                                                                      <EmployeeDetails EmpID={employee.EId}></EmployeeDetails>
                                                                      <EmployeeUpdate EmpID={employee.EId}></EmployeeUpdate>


                                                                      {/* Delete employee  */}
                                                                      <Link onClick={() => handleDelete(employee.EId)} className="table-link danger">
                                                                           <span className="fa-stack">
                                                                                <i className="fa fa-square fa-stack-2x"></i>
                                                                                <i className="fa fa-trash-o fa-stack-1x fa-inverse"></i>
                                                                           </span>
                                                                      </Link>
                                                                 </div>
                                                            </td>
                                                       </tr>
                                                  )}
                                        </tbody>
                                   </table>
                                   <EmployeeAdd></EmployeeAdd>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};
export default ManageEmployee;