import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function Sepet() {
  const [sepet, setSepet] = useState([]);
  const [toplamurun, setToplamUrun] = useState(0);
  const [sepettutarı, setsepettutarı] = useState(0);

  useEffect(() => {
    const localStorageData = localStorage.getItem("sepet");
    const sepetData = localStorageData ? JSON.parse(localStorageData) : [];
    setSepet(sepetData);
  }, []);

  const sepeteekle = (product) => {
    const updatedSepet = sepet.filter((item) => item.id !== product.id);
    setSepet(updatedSepet);
    localStorage.setItem("sepet", JSON.stringify(updatedSepet));
  };

  useEffect(() => {
    setToplamUrun(sepet.length);
    const yeniSepetTutari = sepet.reduce((acc, item) => acc + item.price, 0);
    setsepettutarı(yeniSepetTutari);
  }, [sepet]);

  function sepetionayla() {
    localStorage.removeItem("sepet");
    alert("Siparişiniz alındı. Bizi tercih ettiğiniz için teşekkür ederiz!");
  }

  return (
    <div className="container">
      <div className="row ">
        <div className="col">
          <h1 className="col col-md5">
            <FontAwesomeIcon icon={faShoppingCart} /> Sepetim
          </h1>
          <div className="list-group">
            {sepet.map((item) => (
              <li
                key={item.id}
                id="fav"
                className="list-group-item list-group-item-action p-4"
              >
                <Link to={`/products/product/${item.id}`}>
                  <div className="h h4"> {item.title} </div>
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src={item.img}
                    className="row"
                    alt={item.title}
                  />
                </Link>
                <div id="price" className="lead ">
                  {item.price} TL
                  <button
                    onClick={() => sepeteekle(item)}
                    className="btn btn-success  float-end mt-4"
                  >
                    Sepetten Çıkar
                  </button>
                </div>
              </li>
            ))}
          </div>
        </div>

        <div className="col ">
          <h3>Sepetteki Ürün Sayısı: {toplamurun}</h3>

          <div class="card">
            <div class="card-body">
              <h5>Sepet Tutarı: {sepettutarı}</h5>
              <hr />
              <button
                className="btn btn-primary"
                onClick={() => sepetionayla()}
              >
                Sepeti Onayla
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sepet;
