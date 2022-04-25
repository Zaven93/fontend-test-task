import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";
import Button from "@components/Button";
import "./Card.css";

const CardComponent = ({ item, removeCard, setModalImageUrl, openModal }) => {
  const handleClick = () => {
    setModalImageUrl(item.url);
    openModal();
  };

  const handleRemove = (e) => {
    e.stopPropagation();
    removeCard(item.id);
  };
  return (
    <Card className="card__wrapper">
      <CardActionArea onClick={handleClick}>
        <CardMedia
          className="card__media"
          component="img"
          height="140"
          image={item.thumbnailUrl}
        />
        <CardContent className="card__content">
          <Typography
            className="card__typography"
            gutterBottom
            variant="h5"
            component="div"
          >
            {item.title}
          </Typography>
          <Button
            onClick={handleRemove}
            variant="outlined"
            color="error"
            title="Remove Card"
          />
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardComponent;
