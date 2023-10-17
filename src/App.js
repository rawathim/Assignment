
import './App.css';
import Dashboard from './files/components/dashboard';
import About from './files/components/about';
import Comment from './files/components/comment';
import Product from './files/components/product';
import Analytics from './files/components/analytics';
import ProductList from './files/components/productList';
import Slidebar from './files/components/slidebar';

import {BrowserRouter, Route, Routes} from "react-router-dom"
function App() {
  return (
   <>
   <BrowserRouter>
  <Slidebar>

<Routes>
<Route path="/" element={<Dashboard/>}/>

  <Route path="/product" element={<Product/>}/>
  <Route path="/dashboard" element={<Dashboard/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/comment" element={<Comment/>}/>
  <Route path="/analytics" element={<Analytics/>}/>
  <Route path="/productList" element={<ProductList/>}/>
 

</Routes>

</Slidebar>
</BrowserRouter>


   
   
   </>
  );
}

export default App;
