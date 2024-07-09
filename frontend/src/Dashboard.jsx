import React, { useEffect, useState } from "react";
import { DarkExample } from "../components/table_dashboard";
import axios from "axios";
import Banner from "./Banner";
import Search from "../components/search_bar";
import { Button } from "react-bootstrap";

export default function Dashboard() {
  const [DataApiProduct, setDataApiProduct] = useState("");
  const [showAdd, setShowAdd] = useState(false);

  const Produk = async () => {
    try {
      const response = await axios.get("http://localhost:4000/produk");
      console.log("Bisa", response?.data);
      setDataApiProduct(response.data);
    } catch (error) {}
  };

  useEffect(() => {
    Produk();
  }, []);

  const [DataApiStok, setDataApiStok] = useState("");

  const Stok = async () => {
    try {
      const response = await axios.get("http://localhost:4000/stok");
      console.log("Bisa", response?.data);
      setDataApiStok(response.data);
    } catch (error) {}
  };

  useEffect(() => {
    Stok();
  }, []);

  return (
    <div>
      <div className="d-flex justify-content-center mb-4">
        <Banner />
      </div>
      <div className="p-4">
        <div className="mb-4 d-flex ">
          <Search
            Produk={Produk}
            setDataApiProduct={setDataApiProduct}
            DataApiProduct={DataApiProduct}
          />
           <Button
                className="ms-3"
                onClick={() => setShowAdd(true)}
                variant="success"
              >
                Add
              </Button>
        </div>
        <DarkExample setShowAdd={setShowAdd} showAdd={showAdd} DataApiProduct={DataApiProduct} />
      </div>
    </div>
  );
}
