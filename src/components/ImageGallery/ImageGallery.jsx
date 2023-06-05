import React from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

export class ImageGallery extends React.Component {
  render() {
    const { images, onImageClick } = this.props;
    
    return (
      <ul className={css.imageGallery} onClick={this.onGalleryClick}>
        {images.map((image) => {
          return (
            <ImageGalleryItem
              key={image.id}
              image={image}
              onImageClick={onImageClick}
            />
          );
        })}
      </ul>
    );
  }
}
