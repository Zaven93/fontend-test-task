import { Skeleton, Box } from "@mui/material";

const CardSkeleton = () => {
  return (
    <Box>
      <Skeleton
        sx={{ width: 210, marginRight: 0.5, my: 5 }}
        variant="rectangular"
        width="100%"
        height={212}
      />
    </Box>
  );
};

export default CardSkeleton;
