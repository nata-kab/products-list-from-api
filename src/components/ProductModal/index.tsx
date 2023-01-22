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
        backgroundColor: "rgba(0,0,0, 0.4)",
      }}
    >
      <Box
        sx={{
          position: "relative",
          top: "-5%",
          padding: "60px 150px",
          backgroundColor: "#ffffff",
          borderRadius: "10px",
        }}
      >
        {chosenProductDataRef.current && (
          <>
            <Styled.Product>
              <Typography variant="h4">
                Name: {chosenProductDataRef.current.name}
              </Typography>

              <Typography sx={{ mt: 2 }}>
                Id: {chosenProductDataRef.current.id}
              </Typography>
              <Typography>Year: {chosenProductDataRef.current.year}</Typography>
              <Typography>
                Color: {chosenProductDataRef.current.color}
              </Typography>
              <Typography>
                Pantone value: {chosenProductDataRef.current.pantone_value}
              </Typography>
              <Button
                onClick={handleCloseModal}
                variant="contained"
                style={{
                  backgroundColor: chosenProductDataRef.current.color,
                  color: "#202020",
                  marginTop: "30px",
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
