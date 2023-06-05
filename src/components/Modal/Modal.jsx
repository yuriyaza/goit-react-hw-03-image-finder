import React from 'react';
import css from './Modal.module.css';

export class Modal extends React.Component {
  render() {
    const { image, onClose } = this.props;

    const closeModal = () => {
      onClose();
    };

    return (
      <div className={css.overlay}>
        <div className={css.modal}>
          <button
            className={css.closeButton}
            type="button"
            onClick={closeModal}
          ></button>
          <img src={image.largeImageURL} alt={'Tags: ' + image.tags} />
        </div>
      </div>
    );
  }
}
