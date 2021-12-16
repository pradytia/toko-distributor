import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import '../style.css'

function Product (props) {

    const product = props.value.product_name;
  return (
        <Col md="2" className="mt-3 m-1">
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Img className="gambaricon" variant="top" src={props.value.image_uri} />
                    <Card.Title style={{fontSize:'14px', marginTop:'5px'}}>{product}</Card.Title>
                    <Card.Text style={{fontSize:'14px', color : 'red', fontWeight : 'bold'}}>Rp. {new Intl.NumberFormat('id-ID').format(props.value.normal_price)}</Card.Text>
                    <Row>
                        <Col>
                            <Card.Text style={{fontSize:'15px'}}>{props.value.location}</Card.Text>
                        </Col>
                        <Col>
                            <Card.Text style={{fontSize:'15px', marginLeft : "30px"}}>Terjual : {props.value.total_sold}</Card.Text>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Col>         
  );
}

export default Product;