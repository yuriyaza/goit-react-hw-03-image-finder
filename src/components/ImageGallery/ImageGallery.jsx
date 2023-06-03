import React from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';


export class ImageGallery extends React.Component {

  onGalleryClick = (e) => { 
  const largeImageURL = e.target.attributes.large.value;
  this.props.onImageClick(largeImageURL);

}
  render() {
    const { images } = this.props;
    return (
      <ul className={css.imageGallery} onClick={this.onGalleryClick}>
        {images.map((image) => {
          return <ImageGalleryItem key={image.id} image={image} />;
        })}
      </ul>
    );
  }
};
