import { useState } from 'react'
import Header from './components/Header'
import Navigation from './components/Navigation'
import ArticlesList from './components/Articles-List'
import ArticleById from './components/Article-by-id'
import './App.css'
import { Routes, Route } from 'react-router-dom'

const App = () => {

  return (
    <>
    <Header/>
    <Navigation/>
    <ArticlesList/>

      
    </>
  );
};

export default App
