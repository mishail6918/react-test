import React, {useEffect, useState} from 'react';
import { FaCartShopping } from "react-icons/fa6";
import Order from "./Order";
import AddNewItem from "./AddNewItem";

function Header(props) {
    let [cartOpen, cartIsOpen] = useState(false);
    let [formOpen, formIsOpen] = useState(false);
    let [cartCount, setCartCount] = useState({count: props.orders.reduce((prev, cur) => {return prev + cur.count}, 0)})

    useEffect(()=>{
        setCartCount({
            count: props.orders.reduce((prev, cur) => {return prev + cur.count}, 0)
        })
    }, [props.orders])

    return (
        <header className='flex justify-between items-center p-5 relative'>
            <div>
                <span className='logo'>Shop page</span>
            </div>
            <div className='flex items-center'>
                <div className='mr-5 cursor-pointer' onClick={()=>formIsOpen(formOpen = !formOpen)}>+ Add new item</div>
                <div className='cart relative inline-block border border-solid border-gray-200 rounded-md p-4 w-auto cursor-pointer hover:bg-gray-700' onClick={()=>cartIsOpen(cartOpen = !cartOpen)}>
                    <FaCartShopping className={`${cartOpen && 'active'}`}/>
                    <div className='cart-count absolute'>{cartCount.count > 0 ? cartCount.count : 0}</div>
                </div>
                {cartOpen && (
                    <div className='cart-window absolute'>
                        {props.orders.length > 0 ? props.orders.map(element => (
                            <Order key={element.id} item={element} onDelete={props.onDelete} increase={props.increase} decrease={props.decrease} changeCount={props.changeCount}/>
                        )) : <span>Нет товаров</span>}
                    </div>
                )}
                {formOpen && (
                    <AddNewItem items={props.items} onAdd={props.onAdd} formOpen={formOpen} formIsOpen={formIsOpen}/>
                )}
            </div>
        </header>
    );
}

export default Header;
