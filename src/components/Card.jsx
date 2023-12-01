import React, {Component} from "react";
import CounterCard from "./CounterCard";

export class Card extends Component {
    render() {
        return (
            <div className='card basis-72 p-3 bg-gray-100 rounded-lg'>
                <img src={'./img/' + this.props.item.img} alt="" className='w-40 m-auto mb-3'/>
                <hr/>
                <h2 className='mt-3'>{this.props.item.title}</h2>
                <p>{this.props.item.category}</p>
                <div className='flex justify-between'>
                    <b>{this.props.item.price}$</b>
                    <CounterCard item={this.props.item} increase={this.props.increase} decrease={this.props.decrease} changeCount={this.props.changeCount}/>
                </div>
                <div className='add-to-cart w-100 text-center bg-teal-400 mt-3 p-1 cursor-pointer text-white rounded-md' onClick={() => {this.props.addIn(this.props.item)}}>+ Add to cart</div>
            </div>
        );
    }
}

export default Card
