import React from 'react';
import css from './ImageGalleryItem.module.css';

export class ImageGalleryItem extends React.Component {
  render() {
    const { image, onImageClick } = this.props;
    
    return (
      <li className={css.imageGalleryItem}>
        <img
          className={css.imageGalleryItemImage}
          src={image.webformatURL}
          alt={'Tags: ' + image.tags}
          onClick={() => {
            onImageClick(image);
          }}
        />
      </li>
    );
  }
}
