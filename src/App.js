import React from 'react'
import router from './router';
import { useRoutes } from "react-router-dom";
import './App.css';


export default function App() {

  const routes = useRoutes(router)

  return (
    <div className="App">
      {routes}
    </div>
  )

}
