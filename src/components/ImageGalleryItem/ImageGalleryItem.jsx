import React from 'react';
import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ image, onImageClick }) => {
  return (
    <li className={css.imageGalleryItem}>
      <img
        className={css.imageGalleryItemImage}
        src={image.webformatURL}
        alt={'Tags: ' + image.tags}
        onClick={() => { onImageClick(image); }}
      />
    </li>
  );
};

ImageGalleryItem.types = {
  image: PropTypes.object.isRequired,
  onImageClick: PropTypes.func.isRequired,
};
