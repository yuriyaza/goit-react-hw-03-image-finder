import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ image }) => {
  return (
    <li className={css.imageGalleryItem}>
      <img
        className={css.imageGalleryItemImage}
        src={image.webformatURL}
        alt={'Tags: ' + image.tags}
        large={image.largeImageURL}
      />
    </li>
  );
};
