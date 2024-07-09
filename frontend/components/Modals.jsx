import { Modal, Button, InputGroup, Form } from "react-bootstrap/";
import { useEffect, useState } from "react";

export function Modals({ show, onHide, item }) {
  const [kodeProduk, setKodeProduk] = useState(item?.kode_produk || "");
  const [namaProduk, setNamaProduk] = useState(item?.nama_produk || "");
  const [namaKategori, setNamaKategori] = useState(item?.kategori?.nama_kategori || "");
  const [stok, setStok] = useState(item?.jumlah_barang || "");
  const [tglUpdate, setTglUpdate] = useState(item?.tgl_register || "");
  const [fotoProduk, setFotoProduk] = useState(null);

  useEffect(() => {
    if (item) {
      setKodeProduk(item.kode_produk);
      setNamaProduk(item.nama_produk);
      setNamaKategori(item?.kategori?.nama_kategori);
      setStok(item.jumlah_barang);
      setTglUpdate(item.tgl_register);
      setFotoProduk(null);
    }
  }, [item]);

  const handleFileChange = (e) => {
    setFotoProduk(e.target.files[0]);
  };

  const handleUpdate = () => {
    const updatedItem = {
      ...item,
      kode_produk: kodeProduk,
      nama_produk: namaProduk,
      kategori: namaKategori,
      jumlah_barang: stok,
      tgl_register: tglUpdate,
      foto_produk: fotoProduk,
    };
    console.log('Updated item:', updatedItem);

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
          Edit Produk
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Kode Produk"
            aria-label="Kode Produk"
            aria-describedby="basic-addon1"
            value={kodeProduk}
            onChange={(e) => setKodeProduk(e.target.value)}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Nama Produk"
            aria-label="Nama Produk"
            aria-describedby="basic-addon1"
            value={namaProduk}
            onChange={(e) => setNamaProduk(e.target.value)}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Nama Kategori"
            aria-label="Nama Kategori"
            aria-describedby="basic-addon1"
            value={namaKategori}
            onChange={(e) => setNamaKategori(e.target.value)}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Stock"
            aria-label="Stock"
            aria-describedby="basic-addon1"
            value={stok}
            onChange={(e) => setStok(e.target.value)}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Tanggal Update"
            aria-label="Tanggal Update"
            aria-describedby="basic-addon1"
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
        <Button onClick={handleUpdate}>Update</Button>
      </Modal.Footer>
    </Modal>
  );
}
