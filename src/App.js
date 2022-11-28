import GlobalStyles from "./styles/global";
import Table from "./components/Table";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Table />
      <GlobalStyles />
    </DndProvider>
  );
}

export default App;
