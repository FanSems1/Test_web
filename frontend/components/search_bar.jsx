import axios from "axios";
import { useEffect, useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

function Search({ DataApiProduct, setDataApiProduct, Produk }) {
  const [dataKategori, setdataKategori] = useState("");
  const [selectSelect, setselectSelect] = useState('Select Kategori');
  async function selectKategori() {
    try {
      const response = await axios.get("http://localhost:4000/kategori");
      console.log(`ini resopnse kategori`, response.data);
      setdataKategori(response.data);
    } catch (error) {}
  }
  useEffect(() => {
    selectKategori();
  }, []);

  async function filter(selectedCategory) {
    setselectSelect(selectedCategory);
    if (selectedCategory === "Select Kategori") {
      const response = await axios.get("http://localhost:4000/produk");
      setDataApiProduct(response.data);
    } else {
      const response = await axios.get("http://localhost:4000/produk");
      setDataApiProduct(response.data);
      console.log(`asdasdsa`, DataApiProduct);
      await new Promise((resolve) => setTimeout(resolve, 300));
      const filteredProducts = DataApiProduct.data.filter(
        (item) => item.nama_kategori === selectedCategory
      );

      console.log(filteredProducts);
      setDataApiProduct({ ...DataApiProduct, data: filteredProducts });
    }
  }

  async function balikinData() {
    const response = await axios.get("http://localhost:4000/produk");
    setDataApiProduct(response.data);
    setselectSelect("Select Kategori");
  }

  return (
    <Row className="justify-content-between">
      <Col md="auto">
        <Form.Select
          onChange={(e) => {
            filter(e.target.value);
          }}
          value={selectSelect}
          aria-label="Select left"
          style={{ width: "300px" }}
        >
          <option>Select Kategori</option>
          {dataKategori &&
            dataKategori?.data.map((item, index) => (
              <option key={item?.id_kategori} value={item.nama_kategori}>
                {item?.nama_kategori}
              </option>
            ))}
        </Form.Select>
      </Col>
      {selectSelect != "Select Kategori" && (
        <Col>
          <Button onClick={balikinData} type="button" variant="danger">
            X
          </Button>
        </Col>
      )}

      <Col md="auto">
        <Form.Control
          type="text"
          placeholder="Cari Produk Anda..."
          style={{ width: "300px" }}
        />
      </Col>
    </Row>
  );
}

export default Search;
