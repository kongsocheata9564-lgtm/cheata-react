import { useEffect } from "react";

function App() {
  const fetchData = async () => {
    try {
      const categoryResponse = await fetch("data/categories.json");
      const categoryData = await categoryResponse.json();

      const productResponse = await fetch("data/products.json");
      const productData = await productResponse.json();

      console.log("Categories:", categoryData.categories);
      console.log("Products:", productData.products);


    } catch (error) {
      console.error("Error fetch data:", error);
        }
  };

  useEffect(() => {
    fetchData();
  }, []);
    
  return (
    <h1>Welcome to the React App</h1>

  )

}

export default App;

  
