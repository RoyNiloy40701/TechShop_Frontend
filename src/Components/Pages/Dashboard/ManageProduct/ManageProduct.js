import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductAdd from './ProductAdd/ProductAdd';
import ProductDetails from './ProductDetails/ProductDetails';
import ProductUpdate from './ProductUpdate/ProductUpdate';


const ManageProduct = () => {
     const [products, setProducts] = useState([]);
     useEffect(() => {
          fetch('https://localhost:44344/api/Product/All')
               .then(res => res.json())
               .then(result => setProducts(result))
     }, [products])
     const handleDelete = (id) => {
          console.log(id);
          const proceed = window.confirm(`Are you sure, To delete ,id is ${id}`);
          if (proceed) {
               fetch(`https://localhost:44344/api/Product/delete/${id}`, {
                    method: 'POST'
               })
                    .then(res => res.json())
                    .then(data => {
                         if (data.deletedCount > 0) {
                              alert('Deleted Successfully');
                              const remainingProducts = products.filter(emp => emp._id !== id)
                              setProducts(remainingProducts)
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
                                                  <th><span>Namw</span></th>
                                                  <th><span>Description</span></th>
                                                  <th className="text-center"><span>Price</span></th>
                                                  <th><span>Stock</span></th>
                                                  <th>&nbsp;</th>
                                             </tr>
                                        </thead>
                                        <tbody>
                                             {
                                                  Object.keys(products).length !== 0 &&
                                                  products.map(product =>
                                                       <tr key={product.PId}>
                                                            <td>
                                                                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcVU-V0D3431rvk5_g7OVpE-NgtPiE_VpHaA&usqp=CAU" alt="" />
                                                                 <a href="#" className="user-link">{product.PName}</a>
                                                                 <span className="user-subhead">Product</span>
                                                            </td>
                                                            <td>
                                                                 {product.PDescription}
                                                            </td>
                                                            <td className="text-center">
                                                                 <span className="label label-default">  {product.PBasicPrice}</span>
                                                            </td>
                                                            <td>
                                                                 <a href="#">{product.PStock}</a>
                                                            </td>
                                                            <td style={{ width: '20%' }}>
                                                                 <div className="table-link d-flex">
                                                                      {/* View Details  */}
                                                                      <ProductDetails ProID={product.PId}></ProductDetails>
                                                                      <ProductUpdate ProID={product.PId}></ProductUpdate>


                                                                      {/* Delete Product  */}
                                                                      <Link onClick={() => handleDelete(product.PId)} className="table-link danger">
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
                                   <ProductAdd></ProductAdd>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default ManageProduct;