import { Suspense, useState } from "react";

import "../../App.css";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

/* const TableWithData = ({ filterValue }: { filterValue: string }) => {
  const userData = useMockFetch("fakeurl.com", 2000);
  return <Table filterBy={filterValue} data={userData} />;
}; */

const InterviewPlayground = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="playground">
      <h1>Playground 🏖️</h1>
      <h2>Button</h2>
      <div className="display-section">
        <Button label={"Primary Button"}></Button>
        <Button label={"Secondary Button"} primary={false}></Button>
      </div>
      <h2>Input</h2>
      <div className="display-section">
        <Input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          /* onChange={(e) => setFilterValue(e.target.value)} */ placeholder={
            "Type here!"
          }
        />
      </div>
      <h2>Table</h2>
      <div className="display-section">
        <Suspense fallback={<p>Loading data...</p>}>
          {/* <TableWithData filterValue={filterValue} /> */}
        </Suspense>
      </div>
    </div>
  );
};

export default InterviewPlayground;
