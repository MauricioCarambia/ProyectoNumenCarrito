import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CardsProductos = () => {
    return (
        <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1NCy2_YEOk1eg2ErwixdAUGQlIxZ2K3cMdieCURYmL9IhrhBXw0eZ26Yw5myZzlCsOIg&usqp=CAU" />
            <Card.Body>
                <Card.Title>Samsung S23</Card.Title>
                <Card.Text>
                    Maravilloso Samsung S23, lo ultimo en tecnologia.
                </Card.Text>
                <Button variant="primary">Agregar al carrito</Button>
            </Card.Body>
        </Card>
    )
}

export default CardsProductos