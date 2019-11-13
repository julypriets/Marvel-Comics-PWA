import React from 'react';
import { Card} from 'react-bootstrap';

const comic = (props) => {

    return(
        <div >
            <Card bg="light">
             <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text >{props.uri}</Card.Text>
             </Card.Body>
            </Card>
        </div>
    )
}

export default comic;