import React from 'react'
import { Row,Col,Card,Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { deleteFromWishlist } from '../redux/wishlistSlice'
import { addToCart } from '../redux/cartSlice'

function Whishlist() {
  const dispatch =useDispatch()
  const wishlistArray = useSelector((state) => state.wishlistReducer)
  const addToCartFromWishlist = (product)=>{
    dispatch(addToCart(product))
    dispatch(deleteFromWishlist(product.id))
  }
  return (
    <div style={{ padding: "100px 0 0 0" }}>
      <Row className=' ms-5'>
        {
          wishlistArray.length > 0 ?
            wishlistArray.map((product, index) => (
              <Col key={index} className='mb-5' sm={12} md={6} lg={4} xl={3}>
                <Card className='shadow rounded' style={{ width: '18rem', height: "30rem" }}>
                  <Card.Img height={'200px'} variant="top" src={product?.thumbnail} />
                  <Card.Body>
                    <Card.Title>{product?.title}</Card.Title>
                    <p style={{ fontStyle: "italic" }}>{product?.description.slice(0, 50)}...</p>
                    <p style={{ fontWeight: "600" }}>${product?.price}</p>
                    <div className="d-flex justify-content-evenly">
                      <Button onClick={()=>dispatch(deleteFromWishlist(product.id))} className='btn btn-light'><i className='fa-solid fa-trash text-danger fa-2x'></i></Button>
                      <Button onClick={()=>addToCartFromWishlist(product)} className='btn btn-light'><i className='fa-solid fa-cart-plus text-success fa-2x'></i></Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            )):<p className='fw-bolder text-danger'>Your Wishlist is empty</p>
    }
      </Row>
    </div>
  )
}

export default Whishlist