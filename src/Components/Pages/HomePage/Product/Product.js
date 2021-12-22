
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = () => {
     const [employees, setEmployees] = useState([]);
     useEffect(() => {
          fetch('https://localhost:44344/api/product/All')
               .then(res => res.json())
               .then(result => setEmployees(result))
     }, [employees])



     return (
          <>

               <Container className="my-5">
                    <div className="text-center">
                         <h5 className="text-secondary">The Top Product For</h5>
                         <h1 className="text-success mb-5">Buy </h1>
                    </div>
                    <Row className="g-3">
                         {
                              Object.keys(employees).length !== 0 &&
                              employees.map(employee =>

                                   <Col md={3} >
                                        <Card style={{ width: '18rem' }} >
                                             <Card.Img variant="top" src="https://i.pinimg.com/originals/70/84/f4/7084f4182630ae4bd2bcc9cbaa831d6e.png" />
                                             <Card.Body>
                                                  <Card.Title>{employee.PName}</Card.Title>
                                                  <Card.Text>
                                                  Description: {employee.PDescription}
                                                  </Card.Text>
                                                  <Card.Text>
                                                  Price : {employee.PBasicPrice} 
                                                  </Card.Text>
                                                  <Link to={`/placeOrder/${employee.PId}`}>
                                                       <div className="text-center">

                                                            <button className="btn btn-success mb-3 btn-sm">Buy Now</button>
                                                       </div>
                                                  </Link>
                                             </Card.Body>
                                        </Card>
                                   </Col>

                              )}
                    </Row>
               </Container>
          </>
     );
};

export default Product;