import "./App.css";
import FoodItem from "./components/Food/FoodItem";
import Greetings from "./components/Food/Greetings";
import Header from "./components/Layout/Header";
import Input from "./components/UI/Input";
import Modal from "./components/UI/Modal";

import { MEALS } from "./dummyData";

function App() {
  console.log(MEALS);
  return (
    <>
      <Header
        src={process.env.PUBLIC_URL + "/background.jpg"}
        header="NomNom"
      />
      <Greetings />
      <FoodItem />
      {/* <Modal>
        <Input type="text" label="Test"></Input>
      </Modal> */}
      ;
    </>
  );
}
export default App;
