import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'


export  let ShopList = () => {
const [list , setList]= useState([])
const [basket, setBasket] = useState([])
const [count, setCount] = useState(1)
const dispatch = useDispatch()
function counterReducer(state = basket, action) {

  switch (action.type) {

    case 'plus':
      return [...basket, {...item, }]
    case 'minus':
      return { value: state.value - 1 }
    default:
      return state
  }
}

  useEffect(  () => {
     axios.get('https://fakestoreapi.com/products').then((res) => {
       setList(res.data)
     })
  }, [])

  function deleteItem(id) {
    setList(list.filter(i => i.id !== id)) 
    console.log(basket)
  }

  return (
    <Container>
       <div>
       <h2>Basket</h2>
      
       <div>
       {
          basket.map((i) =>
                   <div style={{width: '22rem', marginTop: '22px'}}>
                  <h2><strong>${i.title}</strong></h2>
                  <span><strong>${i.price}</strong></span>
                   <Image src={i.image} fluid rounded/>
                   <Button onClick={ () => setCount( count - 1)}>-</Button>
                   <Button onClick={ () => setCount( count + 1)}>+</Button> 
                   <Button onClick={() =>  deleteItem(i.id)}>Delete</Button>
                  <span>Amount:  {count}</span>
                  </div>
                 
         ) }
       

       <span>Total: {basket.reduce((acc, item) =>  acc + item.price, 0) * count }</span>

       </div>
    </div>


    <h1 style={{textAlign: 'center'}}>EShop</h1>
    
    <Row style={{marginTop: '10rem'}}>


         {list?.map((item) =>
          
          <Col key={item.id} lg={4} sm={1} md={4}>
          <Card style={{ width: '28rem', border: '4px solid black' , padding: '1rem', borderRadius: '1rem', marginTop: '1rem', marginLeft: '5px', background: 'linear-gradient(#e66465, #9198e5)'}}>
                      <Card.Img variant="top" src={item.image} />
                      <Card.Body>
                        <Card.Title>{item.title}<strong> ${item.price} | {item.category}</strong> </Card.Title>
                        <Card.Text>
                          {item.description}
                        </Card.Text>
                        <Button variant="primary" onClick={ () => setBasket([...basket,  {...item, amout: 0 + 1}]) }>Go somewhere</Button>
                        <Button variant="danger" onClick={ () => deleteItem(item.id) }>Delete Item</Button>
                      </Card.Body>
</Card>
           </Col>
          )
         }
         </Row>
     </Container>
  )
        }