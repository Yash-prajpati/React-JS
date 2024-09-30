import { useState } from "react"
import { category, item } from "./Data";
import Product from "./Product";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [filterdata, setFilterdata] = useState([]);

  const categoryButtonClick = (cat) => {
    if (cat == "All") {
      setFilterdata(item);
    }
    else {
      let up = item.filter((Product) => {
        return Product.category == cat;
      })
      setFilterdata(up)
    }
  }

  return (
    <>
      <div align="center">
        <h1>Filter App</h1>

        <Product

          category={category}
          item={item}
          categoryButtonClick={categoryButtonClick}
          filterdata={filterdata}

        />
      </div>


    </>
  )
}

export default App
