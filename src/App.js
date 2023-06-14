import Navbar from "./component/Navbar";
import Paragraph from "./component/Paragraph";
import CardData from "./component/CardData";
import Tech from "./component/Tech";
import SelfIntro from "./component/SelfIntro";
import Project from "./component/Project";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <SelfIntro />
      <Paragraph />
      <CardData />
      <Tech />
      <Project />
    </div>
  );
}

export default App;
