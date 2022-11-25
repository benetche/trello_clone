import GlobalStyles from "./styles/global";
import Header from "./components/Header";
import Table from "./components/Table";
// import { DndProvider } from "react-dnd";
// import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  return (
    <>
      <Header />
      <Table />
      <GlobalStyles />
    </>
  );
}

export default App;
