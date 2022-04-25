import { Modal, Box } from "@mui/material";
import "./Modal.css";

const ModalComponent = ({ open, onClose }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className="modal__box">
        <img src="https://via.placeholder.com/600/24f355" alt="modal" />
      </Box>
    </Modal>
  );
};

export default ModalComponent;
