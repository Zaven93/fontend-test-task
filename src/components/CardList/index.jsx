import { Grid } from "@mui/material";
import Card from "@components/Card";
import CardSkeleton from "@components/CardSkeleton";

const CardList = ({
  items,
  loading,
  removeCard,
  setModalImageUrl,
  openModal,
}) => {
  return (
    <Grid container sx={{ maxWidth: "1200px", margin: "0 auto" }} spacing={3}>
      {loading
        ? Array.from(new Array(16)).map((index) => (
            <Grid key={index} item xs={12} sm={6} md={6} lg={3}>
              <CardSkeleton />
            </Grid>
          ))
        : items?.map((item) => (
            <Grid key={item.id} item xs={12} sm={6} md={6} lg={3}>
              <Card
                setModalImageUrl={setModalImageUrl}
                openModal={openModal}
                removeCard={removeCard}
                item={item}
              />
            </Grid>
          ))}
    </Grid>
  );
};

export default CardList;
