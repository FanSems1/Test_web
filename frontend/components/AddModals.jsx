import { Modal, Button, InputGroup, Form } from "react-bootstrap";
import { useState } from "react";

export function AddModals({ show, onHide, item }) {
  const [kodeProduk, setKodeProduk] = useState(item?.kode_produk || "");
  const [namaProduk, setNamaProduk] = useState(item?.nama_produk || "");
  const [namaKategori, setNamaKategori] = useState(item?.kategori?.nama_kategori || "");
  const [stok, setStok] = useState(item?.jumlah_barang || "");
  const [tglUpdate, setTglUpdate] = useState(item?.tgl_register || "");
  const [fotoProduk, setFotoProduk] = useState(null);

  const handleFileChange = (e) => {
    setFotoProduk(e.target.files[0]);
  };

  const handleAdd = () => {
    const newItem = {
      kode_produk: kodeProduk,
      nama_produk: namaProduk,
      kategori: namaKategori,
      jumlah_barang: stok,
      tgl_register: tglUpdate,
      foto_produk: fotoProduk,
    };
    console.log('New item:', newItem);

    onHide();
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Produk
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Kode Produk"
            aria-label="Kode Produk"
            value={kodeProduk}
            onChange={(e) => setKodeProduk(e.target.value)}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Nama Produk"
            aria-label="Nama Produk"
            value={namaProduk}
            onChange={(e) => setNamaProduk(e.target.value)}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Nama Kategori"
            aria-label="Nama Kategori"
            value={namaKategori}
            onChange={(e) => setNamaKategori(e.target.value)}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Stock"
            aria-label="Stock"
            value={stok}
            onChange={(e) => setStok(e.target.value)}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Tanggal Update"
            aria-label="Tanggal Update"
            value={tglUpdate}
            onChange={(e) => setTglUpdate(e.target.value)}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <Form.Control
            type="file"
            aria-label="Upload Foto Produk"
            onChange={handleFileChange}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <Form.Control
            type="file"
            aria-label="Upload Foto Produk"
            onChange={handleFileChange}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <Form.Control
            type="file"
            aria-label="Upload Foto Produk"
            onChange={handleFileChange}
          />
        </InputGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleAdd}>Add</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddModals;