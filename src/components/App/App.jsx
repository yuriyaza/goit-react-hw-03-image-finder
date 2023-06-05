import React from 'react';
import { Api } from 'services/api';

import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Button } from 'components/Button/Button';
import { Modal } from 'components/Modal/Modal';

import css from './App.module.css';
// import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

const api = new Api();

export class App extends React.Component {
  state = {
    images: [],
    largeImageURL: '',
    showModal: false,
  };

  onSubmit = async (query) => {
    const images = await api.getData(query);
    this.setState({ images });
  };

  onImageClick = (largeImageURL) => {
    // console.log('app', largeImageURL);
    this.setState({ largeImageURL });
    this.setState({ showModal: true });
    console.log(this.state);
  };

  render() {
    return (
      <div className={css.app}>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery
          images={this.state.images}
          onImageClick={this.onImageClick}
        />
        <div className={css.buttonWrapper}>
          {this.state.images.length > 0 && <Button />}
        </div>
        {this.state.showModal && <Modal image={this.state.largeImageURL} />}
      </div>
    );
  }
}
