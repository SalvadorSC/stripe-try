import { useEffect, useState } from "react";
import "../../App.css";

type Transaction = {
  customer: string;
  id: string;
  amount: number;
};

const InterviewPlayground = () => {
  const [highestCustomer, setHighestCustomer] = useState<
    Transaction | undefined
  >(undefined);

  const [filterValue, setFilterValue] = useState("");
  const transactions: Transaction[] = [
    { id: "t_01", customer: "Rose Roberts", amount: 84 },
    { id: "t_02", customer: "Chris Cook", amount: 30 },
    { id: "t_03", customer: "Mary Martin", amount: 42 },
    { id: "t_04", customer: "Susan Smith", amount: 26 },
    { id: "t_05", customer: "Rose Roberts", amount: -84 },
    { id: "t_06", customer: "Rose Roberts", amount: 48 },
    { id: "t_07", customer: "Susan Smith", amount: 104 },
    { id: "t_08", customer: "Larry Lewis", amount: 140 },
    { id: "t_09", customer: "Mary Martin", amount: 10 },
    { id: "t_10", customer: "Chris Cook", amount: 60 },
    { id: "t_11", customer: "Susan Smith", amount: -26 },
    { id: "t_12", customer: "Larry Lewis", amount: -140 },
    { id: "t_13", customer: "Rose Roberts", amount: 26 },
    { id: "t_14", customer: "Ryan Roberts", amount: 44 },
  ];

  const findHighestCustomer = () => {
    let highestCustomer: Transaction | undefined = undefined;
    let previousCustomer: Transaction | undefined = undefined;
    const customers: Transaction[] = [];

    transactions.forEach((transaction: Transaction) => {
      if (
        !transaction.customer.toLowerCase().includes(filterValue.toLowerCase())
      ) {
        return;
      }
      if (
        !customers.find(
          (customer: Transaction) => customer.customer === transaction.customer
        )
      ) {
        customers.push(transaction);
      } else {
        const customerIndex = customers.findIndex(
          (customer: Transaction) => customer.customer === transaction.customer
        );
        customers[customerIndex] = {
          ...customers[customerIndex],
          amount: customers[customerIndex].amount + transaction.amount,
        };
      }
    });

    for (const customer of customers) {
      if (previousCustomer === undefined) {
        highestCustomer = customer;
        previousCustomer = customer;
      } else if (highestCustomer!.amount < customer.amount) {
        highestCustomer = customer;
      }
    }
    console.log(highestCustomer);
    return highestCustomer;
  };

  useEffect(() => {
    setHighestCustomer(findHighestCustomer());
  }, [filterValue]);

  return (
    <div className="playground">
      <h1>Playground 🏖️</h1>
      <ul className="playground-ul">
        <input
          type="text"
          name="filter"
          id="filter"
          placeholder="Filter"
          aria-label="Filter"
          onChange={(e) => setFilterValue(e.target.value)}
        />
        {transactions.map((transaction) => {
          if (
            filterValue === "" ||
            transaction.customer
              .toLowerCase()
              .includes(filterValue.toLowerCase())
          ) {
            return (
              <li key={transaction.id}>
                <span
                  className={
                    transaction.customer === highestCustomer?.customer && "high"
                  }
                >
                  {transaction.customer}
                </span>
                : {transaction.amount}
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default InterviewPlayground;
