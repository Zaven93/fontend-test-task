import { Button } from "@mui/material";

const ButtonComponent = ({ variant, color, title, className, onClick }) => {
  return (
    <Button
      className={className}
      variant={variant}
      color={color}
      onClick={onClick}
    >
      {title}
    </Button>
  );
};

export default ButtonComponent;
