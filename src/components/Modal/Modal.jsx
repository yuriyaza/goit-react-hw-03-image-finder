import React from 'react';
import css from './Modal.module.css';

export class Modal extends React.Component {
  render() {
    const { image } = this.props;
    console.log('modal', this.props.image);
    return (
      <div className={css.overlay}>
        <div className={css.modal}>
          <img src={image} alt="" />
        </div>
      </div>
    );
  }
}
