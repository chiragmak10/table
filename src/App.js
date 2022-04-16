import { Table } from "./component/table";
const columns = [
  {
    header: "name",
    title: "Name",
  },
  { title: "Age", header: "age" },
];

const data = [
  {
    id: 1,
    name: "namesada1",
    age: 1,
  },
  {
    id: 2,
    name: "name2",
    age: 2,
  },
  {
    id: 3,
    name: "name3",
    age: 3,
  },
];
function App() {
  return <Table id="table" columns={columns} data={data} />;
}

export default App;
