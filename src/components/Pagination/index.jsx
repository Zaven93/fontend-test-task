import { Pagination, Stack } from "@mui/material";
import "./Pagination.css";

const PaginationComponent = ({ count, paginate }) => {
  return (
    <Stack className="pagination__wrapper">
      <Pagination
        count={count}
        variant="outlined"
        shape="rounded"
        onChange={paginate}
      />
    </Stack>
  );
};

export default PaginationComponent;
