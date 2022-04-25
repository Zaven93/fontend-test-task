import { useEffect, useState, useContext } from "react";
import CardList from "@components/CardList";
import Pagination from "@components/Pagination";
import Modal from "@components/Modal";
import useAxios from "@hooks/useAxios";
import withLayout from "@hocs/withLayout";
import { BASE_URL } from "@config/constants";
import { GenContext } from "@contexts/genContext";
import "./App.css";

function App() {
  const { state } = useContext(GenContext);
  const [{ response, totalCount, isLoading }, doFetch] = useAxios(
    `${BASE_URL}/photos`
  );
  const [photos, setPhotos] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [modalImageUrl, setModalImageUrl] = useState(null);

  useEffect(() => {
    doFetch({
      params: {
        _page: 1,
        _limit: 16,
      },
    });
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (!response?.length) return;

    setPhotos(response);
  }, [response]);

  useEffect(() => {
    if (!state?.albumId) return;

    doFetch({
      params: {
        albumId: state.albumId,
      },
    });
    // eslint-disable-next-line
  }, [state]);

  const paginate = (e, page) => {
    doFetch({
      params: {
        _page: page,
        _limit: 16,
      },
    });
  };

  //It may be good to create the Card context and move all the logic to there in order to avoid props drilling but I don't see any point to do it only for one function
  const removeCard = (id) => {
    const filteredPhotos = photos.filter((photo) => photo.id !== id);

    setPhotos(filteredPhotos);
  };

  const pagesCount = Math.ceil(totalCount / 16);
  return (
    <div className="photo__container">
      <CardList
        setModalImageUrl={setModalImageUrl}
        openModal={() => setOpenModal(true)}
        removeCard={removeCard}
        loading={isLoading}
        items={photos}
      />
      <Pagination count={pagesCount} paginate={paginate} />
      {modalImageUrl && (
        <Modal open={openModal} onClose={() => setOpenModal(false)} />
      )}
    </div>
  );
}

export default withLayout(App);
