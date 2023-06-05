import React from 'react';
import { Api } from 'services/api';

import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';
import { Modal } from 'components/Modal/Modal';

import { ToastContainer, Slide, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import css from './App.module.css';

const api = new Api();

export class App extends React.Component {
  state = {
    query: '',
    page: 1,
    perPage: 12,
    images: [],
    currentImage: {},
    showMoreButton: false,
    showLoader: false,
    showModal: false,
  };

  componentDidUpdate = (_, prevState) => {
    const { query, page } = this.state;
    if (query !== prevState.query || page !== prevState.page) {
      this.handleGetData(query, page);
    }
  };

  handleGetData = async (query, page) => {
    try {
      this.setState({ showMoreButton: false, showLoader: true });

      const data = await api.getData(query, page);
      const { hits: images, totalHits: total } = data;
      const { perPage } = this.state;

      if (images.length === 0) {
        toast.error('Images not found');
        return;
      }

      const showMoreButton = total / (page * perPage) > 1;
      this.setState({ images: [...this.state.images, ...images], showMoreButton });
    } catch (error) {
      toast.error('An error has occurred');
    } finally {
      this.setState({ showLoader: false });
    }
  };

  handleFormSubmit = (query) => {
    if (query !== this.state.query) {
      this.setState({ page: 1, images: [], query });
    }
  };

  handleButtonMore = () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }));
  };

  handleModalOpen = (currentImage) => {
    this.setState({ showModal: true, currentImage });
  };

  handleModalClose = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { images, currentImage, showMoreButton, showLoader, showModal } = this.state;
    const { handleFormSubmit, handleButtonMore, handleModalOpen, handleModalClose } = this;

    return (
      <div className={css.app}>
        <Searchbar submit={handleFormSubmit} />

        <ImageGallery images={images} onImageClick={handleModalOpen} />

        <div className={css.buttonWrapper}>
          {showMoreButton > 0 && <Button onClick={handleButtonMore} />}
        </div>

        {showLoader && <Loader />}
        {showModal && <Modal image={currentImage} onClose={handleModalClose} />}

        <ToastContainer transition={Slide} theme='colored' autoClose={2500} closeOnClick pauseOnHover={false} pauseOnFocusLoss />
      </div>
    );
  }
}
