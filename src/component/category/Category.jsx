import React from "react";
import { Card, Col} from "react-bootstrap";
import '../style.css'

function Category (props) {
    
  return (
        <Col sm={1}  className="mt-3 m-1">
           <Card style={{ maxHeight : '150px' }}>
            <Card.Body>
                <Card.Img style={{ maxWidth : '100%', maxHeight : '100px'}} variant="top" src={props.value.icon}/>
                <Card.Text  style={{ textAlign : 'center', fontSize : '13px'}}>{props.value.category_name}</Card.Text>
            </Card.Body>
           </Card>
        </Col>
  );
}

export default Category;