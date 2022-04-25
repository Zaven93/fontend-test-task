import { useEffect, useState, useContext } from "react";
import Menu from "@components/Menu";
import userAxios from "@hooks/useAxios";
import { BASE_URL } from "@config/constants";
import { GenContext } from "@contexts/genContext";
import "./Header.css";

const Header = () => {
  const { dispatch } = useContext(GenContext);
  const [{ response }, doFetch] = userAxios(`${BASE_URL}/albums`);
  const [options, setOptions] = useState();

  useEffect(() => {
    doFetch();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (!response) return;

    const newOptions = response.map((item) => item.id);
    setOptions(newOptions);
  }, [response]);

  const setAlbumId = (id) => dispatch({ type: "SET_ALBUM_ID", payload: id });

  return (
    <header className="header__container">
      <ul className="header__links-wrapper">
        <li>
          <Menu setAlbumId={setAlbumId} options={options} />
        </li>
      </ul>
    </header>
  );
};

export default Header;
