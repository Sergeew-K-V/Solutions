import { useEffect, useState } from "react";

function App() {
  const [object, setObject] = useState({
    name: "example",
    number: 1,
  });

  const handlerChange = (event) => {
    const { name, value } = event.target;
    setObject({ ...object, [name]: value });
  };

  //   const TEXT = useMemo(() => {
  //     return { text: "dadda da" };
  //   }, []);

  const TEXT = "dadda da";

  return (
    <div className="App">
      <div>
        <input value={object.name} onChange={handlerChange} name="name" />
        <input value={object.number} onChange={handlerChange} name="number" />
        {!!todos.length &&
          todos.map((el) => <p key={el.id}>{JSON.stringify(el)}</p>)}
      </div>
      <Child text={TEXT} />
      <Child text={TEXT} />
      <Child text={TEXT} />
    </div>
  );
}

export default App;

const Child = ({ text }) => {
  useEffect(() => {
    console.log("Child");
  });

  return (
    <div>
      <h2>Child</h2>
      <p>{text}</p>
    </div>
  );
};
