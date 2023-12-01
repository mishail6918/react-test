import React, {Component} from "react";
import Card from "./Card";

export class Items extends Component {
    render() {
        return (
            <div className='flex justify-start flex-wrap gap-8'>
                {this.props.items.map(element => (
                    <Card key={element.id} item={element} addIn={this.props.addIn} increase={this.props.increase} decrease={this.props.decrease} changeCount={this.props.changeCount}/>
                ))}
            </div>
        );
    }
}

export default Items
