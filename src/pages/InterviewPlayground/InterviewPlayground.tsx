import { Button } from "../../components/button-example/Button";
import "../../App.css";
import { Table } from "../../components/table-example/Table";
import { Input } from "../../components/input-example/Input";
import { Suspense, useState } from "react";
import { useMockFetch } from "../../hooks/useMockFetch";

const TableWithData = ({ filterValue }: { filterValue: string }) => {
  const userData = useMockFetch("fakeurl.com", 2000);
  return <Table filterBy={filterValue} data={userData} />;
};

const InterviewPlayground = () => {
  const [filterValue, setFilterValue] = useState<string>("");

  return (
    <div className="playground">
      <h1>Playground 🏖️</h1>
      <h2>Button</h2>
      <div className="display-section">
        <Button
          label="This is a button"
          key={"example-button"}
          primary
          onClick={() => console.log("Button Clicked!")}
          size="medium"
        />
        <Button
          label="This is a button"
          key={"example-button"}
          onClick={() => console.log("Button Clicked!")}
          size="medium"
        />
      </div>
      <h2>Input</h2>
      <div className="display-section">
        <Input onChange={(e) => setFilterValue(e.target.value)} />
      </div>
      <h2>Table</h2>
      <div className="display-section">
        <Suspense fallback={<p>Loading data...</p>}>
          <TableWithData filterValue={filterValue} />
        </Suspense>
      </div>
    </div>
  );
};

export default InterviewPlayground;
