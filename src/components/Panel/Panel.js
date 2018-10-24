import React, { Component } from 'react';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import './Panel.css';

class Panel extends Component {
    handleClick = (buttonName) => {
        this.props.clickHandler(buttonName);
    };

    render() {
        return (
            <div className="component-panel">
                <div>
                    <Button name="AC" className='AC' clickHandler={this.handleClick} />
                    <Button name="+/-" className='Invert' clickHandler={this.handleClick} />
                    <Button name="%" className='Percent' clickHandler={this.handleClick} />
                    <Button name="÷" className='Divide' clickHandler={this.handleClick} orange />
                </div>
                <div>
                    <Button name="7" clickHandler={this.handleClick} />
                    <Button name="8" clickHandler={this.handleClick} />
                    <Button name="9" clickHandler={this.handleClick} />
                    <Button name="x"  className='Multiply'clickHandler={this.handleClick} orange />
                </div>
                <div>
                    <Button name="4" clickHandler={this.handleClick} />
                    <Button name="5" clickHandler={this.handleClick} />
                    <Button name="6" clickHandler={this.handleClick} />
                    <Button name="-" className='Subtract' clickHandler={this.handleClick} orange />
                </div>
                <div>
                    <Button name="1" clickHandler={this.handleClick} />
                    <Button name="2" clickHandler={this.handleClick} />
                    <Button name="3" clickHandler={this.handleClick} />
                    <Button name="+" className='Add' clickHandler={this.handleClick} orange />
                </div>
                <div>
                    <Button name="0" clickHandler={this.handleClick} wide />
                    <Button name="." clickHandler={this.handleClick} />
                    <Button name="=" className='Sum' clickHandler={this.handleClick} orange />
                </div>
            </div>
        );
    }
}

Panel.propTypes = {
    clickHandler: PropTypes.func,
};

export default Panel;