import axios from "axios";
import React from "react";
import { Modal, Button } from "react-bootstrap";

export function DeleteModal({ show, onHide, onConfirm ,deleteItem}) {
  async function delteData() {
    try {
      console.log("ini apa", deleteItem);
      const response = await axios.delete(
        `http://localhost:4000/produk/${deleteItem.id_produk}`
      );
      console.log("delete ga?",response);
      onConfirm()
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Are you sure?</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure you want to delete this item?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          No
        </Button>
        <Button variant="danger" onClick={()=>{delteData()}}>
          Yes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default DeleteModal;
