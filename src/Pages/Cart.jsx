import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { emptyCart, removeFromCart } from '../redux/cartSlice'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Cart() {
  const navigate = useNavigate()
  const cartArray = useSelector((state) => state.cartReducer)
  const dispatch = useDispatch()
  const [total, setTotal] = useState(0)
  const totalAmount = () => {
    if (cartArray.length > 0) {
      setTotal(cartArray.map(item => item.price).reduce((p1, p2) => p1 + p2))
    }
    else {
      totalAmount(0)
    }
  }
  const checkOut = () => {
    alert("Thank you For Purchasing!!!")
    dispatch(emptyCart())
    navigate('/')
  }

  useEffect(() => {
    totalAmount()
  }, [cartArray])
  return (
    <div style={{ padding: "100px 0" }}>
      {
        cartArray.length > 0 ?
          <>

            <div className="row ms-5 me-5">
              <div className="col-md-7">
                <table className='container mt-5 table border rounded p-5 table-hover shadow'>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Product Name</th>
                      <th>Image</th>
                      <th>Price</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      cartArray.map((product, index) => (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{product.title}</td>
                          <td><img width={'100px'} height={'100px'} src={product.thumbnail} alt="" /></td>
                          <td>{product.price}</td>
                          <td><button onClick={() => dispatch(removeFromCart(product.id))} className='btn'><i className='fa-solid fa-trash text-danger fa-2x'></i></button></td>

                        </tr>
                      ))
                    }
                  </tbody>
                </table>
              </div>
              <div className="col-md-1"></div>
              <div className="col-md-4 mt-5 border rounded text-center shadow" style={{ height: '100%' }}>
                <h3 className='fw-bolder mt-5 text-primary'>Cart Summary</h3>
                <h5 className='mt-5'>Total Products : <span>{cartArray.length}</span></h5>
                <h4 className='mb-5'>Total : $ <span>{total}</span></h4>
                <div className='d-grid mt-5 mb-5'><button onClick={() => checkOut()} className='btn btn-success rounded'>Check Out</button></div>
              </div>
            </div>

          </> : <p className='fw-bolder text-danger'>Your Cart is empty</p>
      }
    </div>
  )
}

export default Cart