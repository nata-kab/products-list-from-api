import { FC, Dispatch, SetStateAction, MutableRefObject } from "react";

import { ProductsDataPattern } from "../../store/slices/apiDataSlice";
import * as Styled from "./ProductModal.styled";
import { Modal, Box, Typography, Button } from "@mui/material";
import productScheme from "../../helpers/ProductScheme";

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

  return (
    <Modal
      open={isProductModalOpen}
      onClose={handleCloseModal}
      aria-labelledby="modal-chosen-product-modal"
      aria-describedby="modal-contains-chosen-products-details"
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#202020",
      }}
    >
      <Box
        sx={{
          width: 500,
          height: 500,
          backgroundColor: "#ffffff",
          borderRadius: 10,
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
                style={{
                  backgroundColor: chosenProductDataRef.current.color,
                  color: "#202020",
                }}
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
