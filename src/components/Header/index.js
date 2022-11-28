import { Container } from "./styles";
import { Button } from "@mui/material";
export default function Header({ setShowModal }) {
  return (
    <Container>
      <Button
        variant="contained"
        onClick={() => {
          setShowModal(true);
        }}
      >
        New List
      </Button>
    </Container>
  );
}
