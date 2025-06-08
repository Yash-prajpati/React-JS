import React, { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 8;

  useEffect(() => {
    fetch("https://dummyjson.com/carts/?limit=10")
      .then((res) => res.json())
      .then((json) => {
        const allProducts = json.carts.flatMap((cart) => cart.products);
        setProducts(allProducts);
      });
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(filter.toLowerCase())
  );

  const totalPages = Math.ceil(filteredProducts.length / recordsPerPage);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = filteredProducts.slice(indexOfFirstRecord, indexOfLastRecord);

  const goToPage = (pageNumber) => {
    if (pageNumber < 1) pageNumber = 1;
    else if (pageNumber > totalPages) pageNumber = totalPages;
    setCurrentPage(pageNumber);
  };

  return (
    <div style={styles.app}>
      <h1 style={styles.title}>🛒 Cart Products</h1>

      <input
        type="text"
        placeholder="Search products..."
        value={filter}
        onChange={(e) => {
          setFilter(e.target.value);
          setCurrentPage(1);
        }}
        style={styles.searchInput}
      />

      {currentRecords.length === 0 ? (
        <p style={styles.noData}>No products found.</p>
      ) : (
        <div style={styles.grid}>
          {currentRecords.map((product) => (
            <div key={product.id} style={styles.card}>
              <img src={product.thumbnail} alt={product.title} style={styles.image} />
              <h3 style={styles.productTitle}>{product.title}</h3>
              <p>
                <strong>Price:</strong> ${product.price.toFixed(2)}
              </p>
              <p>
                <strong>Quantity:</strong> {product.quantity}
              </p>
              <p>
                <strong>Total:</strong> ${product.total.toFixed(2)}
              </p>
              <p>
                <strong>Discount:</strong> {product.discountPercentage.toFixed(2)}%
              </p>
            </div>
          ))}
        </div>
      )}

      <div style={styles.pagination}>
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          style={{
            ...styles.pageButton,
            ...(currentPage === 1 ? styles.disabledButton : {}),
          }}
        >
          Prev
        </button>

        {[...Array(totalPages)].map((_, i) => {
          const page = i + 1;
          return (
            <button
              key={page}
              onClick={() => goToPage(page)}
              style={{
                ...styles.pageButton,
                ...(currentPage === page ? styles.activePageButton : {}),
              }}
            >
              {page}
            </button>
          );
        })}

        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          style={{
            ...styles.pageButton,
            ...(currentPage === totalPages ? styles.disabledButton : {}),
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

const styles = {

  app: {
    width: "100%",
    minHeight: "100vh",
    padding: "1rem", 
    margin: 0,
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: "#121212",
    color: "#e0e0e0",
    boxSizing: "border-box",
    borderRadius:"10",

    overflowX: "hidden",
  },
  title: {
    textAlign: "center",
    color: "#90caf9",
    marginBottom: "1rem",
  },

  searchInput: {
    width: "100%",
    maxWidth: 600,
    display: "block",
    margin: "0 auto 1.5rem auto",
    padding: "0.75rem 1rem",
    fontSize: "1rem",
    borderRadius: 8,
    border: "1px solid #333",
    backgroundColor: "#1e1e1e",
    color: "#e0e0e0",
    outline: "none",
    boxSizing: "border-box",
    transition: "border-color 0.3s",
  },

  noData: {
    textAlign: "center",
    color: "#999",
    fontSize: "1.1rem",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
    gap: "1.5rem",
    padding: "0 0.5rem",
  },

  card: {
    boxShadow: "0 4px 12px rgb(0 0 0 / 0.9)",
    borderRadius: 12,
    padding: "1rem",
    backgroundColor: "#1e1e1e",
    textAlign: "center",
    transition: "transform 0.2s ease",
    cursor: "default",
    color: "#eee",
  },

  image: {
    width: "100%",
    height: 140,
    objectFit: "cover",
    borderRadius: 10,
    marginBottom: "1rem",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.7)",
  },

  productTitle: {
    fontSize: "1.1rem",
    marginBottom: "0.5rem",
    color: "#90caf9",
  },

  pagination: {
    marginTop: "2rem",
    display: "flex",
    justifyContent: "center",
    gap: "0.5rem",
    flexWrap: "wrap",
    padding: "0 0.5rem",
  },

  pageButton: {
    border: "none",
    backgroundColor: "#1976d2",
    color: "#fff",
    padding: "0.5rem 1rem",
    borderRadius: 6,
    cursor: "pointer",
    fontSize: "1rem",
    transition: "background-color 0.3s ease",
    userSelect: "none",
  },

  activePageButton: {
    backgroundColor: "#90caf9",
    color: "#121212",
    fontWeight: "bold",
  },

  disabledButton: {
    backgroundColor: "#555",
    cursor: "not-allowed",
  },
};

export default App;
