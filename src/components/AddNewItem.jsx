import React, {Component} from "react";
import { IoClose } from "react-icons/io5";

export class AddNewItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            title: '',
            price: '',
            category: '',
            img: 'gray.jpg',
            count: 1
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
    handleSubmit(event) {
        let formObj = {}
        let titleExist = false;
        Object.assign(formObj, this.state)
        this.props.items.forEach(element => {
            if (element.title === formObj.title) {
                titleExist = true;
                alert('Such title is already exist');
            }
        })
        if (!titleExist) {
            this.props.formIsOpen(false)
            this.props.onAdd(formObj);
        }
        event.preventDefault();
    }
    render() {
        return (
            <div className='add-wrapper relative'>
                <div className='add-form absolute'>
                    <IoClose className='absolute top-5 right-5 text-xl cursor-pointer' onClick={()=>{this.props.formIsOpen(false)}}/>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input className='block border my-1 rounded' type="text" name='title' id='title' onChange={this.handleInputChange} value={this.state.title} required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="price">Price</label>
                            <input className='block border my-1 rounded' type="text" name='price' id='price' onChange={this.handleInputChange} value={this.state.price} required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="category">Category</label>
                            <input className='block border my-1 rounded' type="text" name='category' id='category' onChange={this.handleInputChange} value={this.state.category} required/>
                        </div>
                        <button className='bg-teal-100 p-2 rounded mt-3'>Add new item</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default AddNewItem
