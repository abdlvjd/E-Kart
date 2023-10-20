import React from 'react'
import { Col, Row, Card, Button } from 'react-bootstrap'
import useFetch from '../Hooks/useFetch'
import { useDispatch } from 'react-redux'
import { addToWishlist } from '../redux/wishlistSlice'
import { addToCart } from '../redux/cartSlice'

function Home() {
  const data = useFetch("https://dummyjson.com/products")
  const dispatch = useDispatch()
  return (
    <>
      <Row className='mt-5 mb-5 ms-5'style={{paddingTop:"100px"}}>
        {
          data?.length > 0 ? data?.map((product, index) => (
            <Col key={index} className='mb-5' sm={12} md={6} lg={4} xl={3}>
              <Card className='shadow rounded' style={{ width: '18rem', height: "30rem" }}>
                <Card.Img height={'200px'} variant="top" src={product?.thumbnail} />
                <Card.Body>
                  <Card.Title>{product?.title}</Card.Title>
                  <p style={{fontStyle:"italic"}}>{product?.description.slice(0, 50)}...</p>
                  <p style={{fontWeight:"600"}}>${product?.price}</p>
                  <div className="d-flex justify-content-evenly">
                    <Button onClick={()=>dispatch(addToWishlist(product))} className='btn btn-light'><i className='fa-solid fa-heart text-danger fa-2x'></i></Button>
                    <Button onClick={()=>dispatch(addToCart(product))} className='btn btn-light'><i className='fa-solid fa-cart-plus text-success fa-2x'></i></Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          )) : ""
        }
      </Row>
    </>
  )
}

export default Home