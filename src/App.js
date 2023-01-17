import { Component } from 'react';
import Products from './components/Products.jsx'
import Layout from './components/Layout.jsx'
import Title from "./components/Title.jsx";
import Navbar from "./components/Navbar.jsx";
class App extends Component {
  state = {
    products: [ {
      name: 'Tomate', price: 1500, img: '/image/tomate.jpg'
    },
    {
      name: 'Arbejas', price: 2500, img: '/image/arbejas.jpg'
    },
    { name: 'Lechuga', price: 500, img: '/image/lechuga.jpg' }
    ],
    cart:[],

    displayCart:false,
  }
  addCart = (product)=>{
    const { cart } = this.state
    if (cart.find(x=>x.name ===product.name)) {
      const newCart = cart.map(x=>x.name===product.name?({
        ...x,
        quant:x.quant+1
      }):x)
      return this.setState({ cart: newCart})
    }
    return this.setState({
      cart: this.state.cart.concat({
        ...product,
        quant:1
      })
    })
  }

  viewCart= ()=>{
    if (!this.state.cart.length) {
      return
    }
    this.setState({displayCart:!this.state.displayCart})
  }

  render() {
    const { displayCart } = this.state
    return (
      <div>
        <Navbar cart={this.state.cart} 
        displayCart={displayCart} 
        viewCart={this.viewCart}/>
        <Layout>
          <Title />
          <p>{ this.state.products.price }</p>
{/* Calling the Products component and passing the addCart and products props. */}
          <Products
            addCart={ this.addCart}
            products={ this.state.products }
          />
        </Layout>

      </div>
    );
  }
}

export default App;
