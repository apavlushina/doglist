import React from "react";
import "./App.css";
import DogsListContainer from "./components/DogsListContainer";
import DogBreedImagesContainer from "./components/DogBreedImagesContainer";
import { Route } from "react-router-dom";

function App() {
  return (
    <main>
      <Route exact path="/" component={DogsListContainer} />
      <Route path="/dog-breeds/:breed" component={DogBreedImagesContainer} />
    </main>
  );
}

export default App;
