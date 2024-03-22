import "./App.css";
import Editor from "./components/editor/editor";
import Preview from "./components/preview/preview";

function App() {
  return (
    <main className={"container"}>
      <Editor />
      <Preview />
    </main>
  );
}

export default App;
