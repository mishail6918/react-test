import React from "react";
import Header from "./components/Header";
import Items from "./components/Items";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: [],
            items: [
                {
                    id: 1,
                    title: 'V-NeckBasic T-shirt Purple',
                    price: '19.9',
                    category: 't-shirts',
                    img: 't-shirt-purple.png',
                    count: 1
                },
                {
                    id: 2,
                    title: 'Basic T-shirt V-Neck Olive',
                    price: '19.9',
                    category: 't-shirts',
                    img: 't-shirt-olive.png',
                    count: 1
                },
                {
                    id: 3,
                    title: 'Crew Basic T-shirt Neck Gravel',
                    price: '17.9',
                    category: 't-shirts',
                    img: 't-shirt-gravel.png',
                    count: 1
                },
                {
                    id: 4,
                    title: 'T-shirt Crew Neck Navy',
                    price: '17.9',
                    category: 't-shirts',
                    img: 't-shirt-navy.png',
                    count: 1
                }
            ]
        }
        this.addToCart = this.addToCart.bind(this)
        this.deleteOrder = this.deleteOrder.bind(this)
        this.addItem = this.addItem.bind(this)
    }

    render() {
      return (
          <div className='container'>
              <Header orders={this.state.cart} items={this.state.items} onAdd={this.addItem} onDelete={this.deleteOrder} increase={this.countIncreaseCart} decrease={this.countDecreaseCart} changeCount={this.changeCountCart}/>
              <Items items={this.state.items} addIn={this.addToCart} increase={this.countIncrease} decrease={this.countDecrease} changeCount={this.changeCount}/>
          </div>
      )
    }

    addToCart(item) {
        let inArr = false;
        this.state.cart.forEach(element => {
            if (element.id === item.id) {
                inArr = true;
            }
        })
        if (!inArr) {
            const copyData = this.state.cart.slice();
            copyData.push(item);
            const sortedData = copyData.sort((a, b) => a.title[0] > b.title[0] ?
                1 : -1);
            this.setState({cart: sortedData})
        }
    }
    deleteOrder(id) {
        this.setState({cart: this.state.cart.filter(element => element.id !== id)})
    }

    addItem(item) {
        item.id = this.state.items.length + 1;
        const copyData = this.state.items.slice();
        copyData.push(item);
        const sortedData = copyData.sort((a, b) => a.title[0] > b.title[0] ?
            1 : -1);
        this.setState({items: sortedData})
    }

    componentDidMount() {
        const copyData = this.state.items.slice();
        const sortedData = copyData.sort((a, b) => a.title[0] > b.title[0] ?
            1 : -1);
        this.setState({items: sortedData})
    }

    componentWillUnmount() {
        const copyData = this.state.items.slice();
        const sortedData = copyData.sort((a, b) => a.title[0] > b.title[0] ?
            1 : -1);
        this.setState({items: sortedData})
    }

    countIncrease = (id) => {
        let newArr = this.state.items.map(element => {
            if (element.id === id) {
                return {
                    ...element,
                    count: ++element.count
                }
            }
            return element
        });
        this.setState({items: newArr})
    }
    countDecrease = (id) => {
        let newArr = this.state.items.map(element => {
            if (element.id === id) {
                return {
                    ...element,
                    count: element.count - 1 > 1 ? --element.count : 1
                }
            }
            return element
        });
        this.setState({items: newArr})
    }
    changeCount = (id, value) => {
        let newArr = this.state.items.map(element => {
            if (element.id === id) {
                return {
                    ...element,
                    count: value === 0 ? '' : value
                }
            }
            return element
        })
        this.setState({items: newArr})
    }

    countIncreaseCart = (id) => {
        let newArr = this.state.cart.map(element => {
            if (element.id === id) {
                return {
                    ...element,
                    count: ++element.count
                }
            }
            return element
        });
        this.setState({cart: newArr})
    }
    countDecreaseCart = (id) => {
        let newArr = this.state.cart.map(element => {
            if (element.id === id) {
                return {
                    ...element,
                    count: element.count - 1 > 1 ? --element.count : 1
                }
            }
            return element
        });
        this.setState({cart: newArr})
    }
    changeCountCart = (id, value) => {
        let newArr = this.state.cart.map(element => {
            if (element.id === id) {
                return {
                    ...element,
                    count: value === 0 ? '' : value
                }
            }
            return element
        })
        this.setState({cart: newArr})
    }
}

export default App;
