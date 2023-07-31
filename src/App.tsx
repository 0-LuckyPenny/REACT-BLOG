import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/_commons/Layout.component';
import NotFound from './pages/NotFound.page';
import Home from './pages/posts';
import CreatePost from './pages/posts/CreatePost';
import UpdatePost from './pages/posts/UpdatePost';
import Categories from './pages/categories';
import About from './pages/about';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/posts/create' element={<CreatePost />} />
          <Route path='/posts/update' element={<UpdatePost />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/about' element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
