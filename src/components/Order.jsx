import React, {Component} from "react";
import { MdDelete } from "react-icons/md";
import CounterCard from "./CounterCard";

export class Order extends Component {
    render() {
        return (
            <div>
                <div className='cart-item flex items-center text-sm justify-between mb-3'>
                    <img src={'./img/' + this.props.item.img} alt="" className='w-1/5'/>
                    <h2>{this.props.item.title}</h2>
                    <p className='text-sm'>{this.props.item.category}</p>
                    <b>{this.props.item.price}$</b>
                    <CounterCard item={this.props.item} increase={this.props.increase} decrease={this.props.decrease} changeCount={this.props.changeCount}/>
                    <MdDelete className='text-4xl cursor-pointer' onClick={() => this.props.onDelete(this.props.item.id)}/>
                </div>
            </div>
        );
    }
}

export default Order
