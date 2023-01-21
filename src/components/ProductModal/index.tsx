import { FC, Dispatch, SetStateAction } from "react";

import { ProductsDataPattern } from "../../store/slices/apiDataSlice";
import * as Styled from "./ProductModal.styled";
import { Modal, Box, Typography, Button } from "@mui/material";
import productScheme from "../../helpers/ProductScheme";
import { MutableRefObject } from "react";

interface ProductModalProps {
  isProductModalOpen: boolean;
  setIsProductModalOpen: Dispatch<SetStateAction<boolean>>;
  chosenProductDataRef: MutableRefObject<ProductsDataPattern>;
}

const ProductModal: FC<ProductModalProps> = ({
  isProductModalOpen,
  setIsProductModalOpen,
  chosenProductDataRef,
}) => {
  const handleCloseModal = () => {
    if (chosenProductDataRef.current) {
      chosenProductDataRef.current = productScheme;
    }

    setIsProductModalOpen(!isProductModalOpen);
  };

  const buttonStyle = {
    backgroundColor: "white",
    color: chosenProductDataRef.current.color,
  };

  return (
    <Modal
      open={isProductModalOpen}
      onClose={handleCloseModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          width: 500,
          height: 500,
          backgroundColor: chosenProductDataRef.current.color,
          borderRadius: 10,
          "&:hover": {
            backgroundColor: chosenProductDataRef.current.color,
            opacity: [0.9, 0.8, 0.9],
          },
        }}
      >
        {chosenProductDataRef.current && (
          <>
            <Styled.Product>
              <Styled.ProductTitle>
                <p>Name: {chosenProductDataRef.current.name}</p>
              </Styled.ProductTitle>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Id: {chosenProductDataRef.current.id}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <p>Year: {chosenProductDataRef.current.year}</p>
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <p>Color: {chosenProductDataRef.current.color}</p>
              </Typography>
              <Typography>
                <p>
                  Pantone value: {chosenProductDataRef.current.pantone_value}
                </p>
              </Typography>
              <Button
                onClick={handleCloseModal}
                variant="contained"
                style={buttonStyle}
                disableElevation
              >
                Close
              </Button>
            </Styled.Product>
          </>
        )}
      </Box>
    </Modal>
  );
};
export default ProductModal;
