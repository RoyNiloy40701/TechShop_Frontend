import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CategoryAdd from './CategoryAdd/CategoryAdd';
import CategoryUpdate from './CategoryUpdate/CategoryUpdate';
import './ManageCategory.css';

const ManageCategory = () => {
     const [categorys, setCategorys] = useState([]);
     useEffect(() => {
          fetch('https://localhost:44344/api/Category/All')
               .then(res => res.json())
               .then(result => setCategorys(result))
     }, [categorys])
     const handleDelete = (id) => {
          console.log(id);
          const proceed = window.confirm(`Are you sure, To delete ,id is ${id}`);
          if (proceed) {
               fetch(`https://localhost:44344/api/Category/delete/${id}`, {
                    method: 'Post'
               })
                    .then(res => res.json())
                    .then(data => {
                         if (data.deletedCount > 0) {
                              alert('Deleted Successfully');
                              const remainingCategorys = categorys.filter(emp => emp._id !== id)
                              setCategorys(remainingCategorys)
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
                                                  <th><span>Id</span></th>
                                                  <th><span>Name</span></th>

                                                  <th>&nbsp;</th>
                                             </tr>
                                        </thead>
                                        <tbody>
                                             {
                                                  Object.keys(categorys).length !== 0 &&
                                                  categorys.map(category =>
                                                       <tr key={category.CategoryId}>
                                                            <td>
                                                                 <h5 className="text-success">{category.CategoryId}</h5>

                                                            </td>
                                                            <td>
                                                                 <h5 className="text-success">{category.CategoryName}</h5>
                                                            </td>

                                                            <td style={{ width: '20%' }}>
                                                                 <div className="table-link d-flex">
                                                                      {/* View Details  */}

                                                                      <CategoryUpdate EmpID={category.CategoryId} ></CategoryUpdate>

                                                                      {/* Delete category  */}
                                                                      <Link onClick={() => handleDelete(category.CategoryId)} className="table-link danger">
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
                                   <CategoryAdd></CategoryAdd>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default ManageCategory;