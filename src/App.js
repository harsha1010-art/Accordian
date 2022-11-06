import "./styles.css";
import Accordian from "./Accordian";
import Initialitems from "./Data";

export default function App() {
  return (
    <div className="accordion">
      {Initialitems?.map(({ name, content }, index) => (
        <Accordian key={index} name={name} content={content} />
      ))}
    </div>
  );
}
