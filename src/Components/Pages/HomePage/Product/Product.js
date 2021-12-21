
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = () => {
     const [employees, setEmployees] = useState([]);
     useEffect(() => {
          fetch('https://localhost:44344/api/Employee/All')
               .then(res => res.json())
               .then(result => setEmployees(result))
     }, [employees])



     return (
          <>

               <Container className="my-5">
                    <div className="text-center">
                         <h5 className="text-secondary">The Top Places For</h5>
                         <h1 className="text-success mb-5">Planning Your Holiday</h1>
                    </div>
                    <Row className="g-3">
                         {
                              Object.keys(employees).length !== 0 &&
                              employees.map(employee =>

                                   <Col md={3}>
                                        <Card style={{ width: '18rem' }}>
                                             <Card.Img variant="top" src="" />
                                             <Card.Body>
                                                  <Card.Title>{employee.EName}</Card.Title>
                                                  <Card.Text>
                                                       Some quick example text to build on the card title and make up the bulk of
                                                       the card's content.
                                                  </Card.Text>
                                                  <Link to={`/placeOrder/${employee.EId}`}>
                                                       <div className="text-center">

                                                            <button className="btn btn-success mb-3 btn-sm">Book Now</button>
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