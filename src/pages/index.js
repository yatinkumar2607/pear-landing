import React from 'react'

import About from "./About";
import Product from './Product';
import Updates from './Updates';
import Works from './Works';
import Footer from '@/Components/Footer/Footer';
import NewHome from './NewHome';
import Cards from './Cards';


export default function Home() {
  return (
<>
<NewHome/>
<Cards/>
  <About/>
  <Product/>

  <Updates/>
  <Works/>
  <Footer/>
</>
  );
}
