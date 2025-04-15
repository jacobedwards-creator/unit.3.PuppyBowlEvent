import { useState } from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import PuppyList from "./features/puppies/PuppyList";
import PuppyDetails from "./features/puppies/PuppyDetails";
import "./App.scss";

/**
 * @component
 * This app shows a list of puppy bowl players from the API.
 */
export default function App() {
  const [selectedPuppyId, setSelectedPuppyId] = useState();

  return (
    <Provider store={store}>
      <div className="app">
        <h1>Puppy Bowl</h1>
        <main>
          <PuppyList setSelectedPuppyId={setSelectedPuppyId} />
          <PuppyDetails selectedPuppyId={selectedPuppyId} />
        </main>
      </div>
    </Provider>
  );
}
