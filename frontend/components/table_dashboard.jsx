import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Modals } from "./Modals";
import { DeleteModal } from "./Delete_modals";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import axios from "axios";
import AddModals from "./AddModals";

export function DarkExample({ DataApiProduct,showAdd ,setShowAdd}) {
  console.log(`ini oprer dari dashboard`, DataApiProduct);
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [deleteItem, setDeleteItem] = useState(null);
  const [editItem, setEditItem] = useState(null);
  const [addItem, setAddItem] = useState(null);

  const handleDelete = async (item) => {
    setDeleteItem(item);
    setShowDelete(true);
  };

  const confirmDelete = () => {
    console.log("Deleting item:", deleteItem);
    setShowDelete(false);
  };

  const handleEdit = (item) => {
    setEditItem(item);
    setShowEdit(true);
  };

  const handleAdd = (item) => {
    setAddItem(item);
    setShowAdd(true);
  };

  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Foto produk</th>
          <th>id produk</th>
          <th>id kategori</th>
          <th>Kode Produk</th>
          <th>Nama Produk</th>
          <th>Nama Kategori</th>
          <th>Stok Produk</th>
          <th>Tanggal Register</th>
          <th>Tanggal Update</th>
          <th>Edit Produk</th>
        </tr>
      </thead>
      {DataApiProduct?.data?.map((item, index) => (
        <tbody key={index}>
          <tr>
            <td>
              <Carousel>
                <Carousel.Item>
                  <img
                    src={item.foto_produk}
                    alt="Product"
                    style={{ width: "100px" }}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    src={item.foto_produk}
                    alt="Product"
                    style={{ width: "100px" }}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    src={item.foto_produk}
                    alt="Product"
                    style={{ width: "100px" }}
                  />
                </Carousel.Item>
              </Carousel>
            </td>
            <td>{item.id_produk}</td>
            <td>{item?.id_kategori}</td>
            <td>{item?.kode_produk}</td>
            <td>{item?.nama_produk}</td>
            <td>{item?.nama_kategori}</td>
            <td>{item?.jumlah_barang}</td>
            <td>{item?.tgl_register}</td>
            <td>{item?.tgl_update}</td>
            <td>
              {/* <Button
                className="ms-3"
                onClick={() => handleAdd(item)}
                variant="success"
              >
                Add
              </Button> */}
              <Button
                className="ms-3"
                onClick={() => handleEdit(item)}
                variant="primary"
              >
                Edit
              </Button>{" "}
              <Button
                className="ms-3"
                variant="danger"
                onClick={(e) => {
                  handleDelete(item);
                }}
              >
                Delete
              </Button>
            </td>
          </tr>
          <AddModals
            show={showAdd}
            onHide={() => setShowAdd(false)}
            item={addItem}
          />
          <Modals
            show={showEdit}
            onHide={() => setShowEdit(false)}
            item={editItem}
          />
        </tbody>
      ))}
      <DeleteModal
        show={showDelete}
        deleteItem={deleteItem}
        handleDelete={handleDelete}
        onHide={() => setShowDelete(false)}
        onConfirm={confirmDelete}
      />
    </Table>
  );
}
