import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Fav({ user }) {
  const [favs, setFavs] = useState([]);

  useEffect(() => {
    setFavs(JSON.parse(localStorage.getItem('favs')) ?? []);
  }, []);

  // Örnek kategorileri ekleyin (bu kısmı kendi uygulamanıza göre düzenleyin)
  const categories = ['Category1', 'Category2', 'Category3'];

  return (
    <>
      <h1>Favoriler</h1>

      {favs.length === 0 ? (
        <p>Henüz favori ürününüz bulunmamaktadır.</p>
      ) : (
        <div className="list-group">
          {favs.map((item) => (
            <Link
              key={item.id}
              className="list-group-item list-group-item-action"
              to={`/products/product/${item.id}`}
            >
              {item.title.toUpperCase()}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}

export default Fav;
