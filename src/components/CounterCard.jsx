import React, {Component} from "react";

export class CounterCard extends Component {
    render() {
        return (
            <div className='count flex items-center justify-end w-20'>
                <div className='decrease text-2xl cursor-pointer' onClick={() => {this.props.decrease(this.props.item.id)}}>-</div>
                <input className='mx-2 w-1/4 text-center' type="number" value={this.props.item.count} onChange={(e)=>{this.props.changeCount(this.props.item.id, +e.target.value)}}/>
                <div className='increase text-2xl cursor-pointer' onClick={() => {this.props.increase(this.props.item.id)}}>+</div>
            </div>
        );
    }
}

export default CounterCard
