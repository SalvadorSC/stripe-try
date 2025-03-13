import React, { useMemo } from "react";
import "./Table.css";

interface TableProps {
  data: {
    name: string;
    email: string;
    paymentMethod?: string;
    created: string;
  }[];
  filterBy?: string;
}

export const Table: React.FC<TableProps> = ({ data, filterBy = "" }) => {
  const filteredData = useMemo(() => {
    if (!filterBy) return data;

    const lowerCaseFilter = filterBy.toLowerCase();
    const filteredData = data.filter((row) =>
      Object.entries(row).some(
        ([key, value]) =>
          key !== "paymentMethod" &&
          value.toLowerCase().includes(lowerCaseFilter)
      )
    );
    return filteredData;
  }, [data, filterBy]);

  return (
    <table className="custom-table">
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Email</th>
          <th>Default Payment Method</th>
          <th>Created</th>
          <th>...</th>
        </tr>
      </thead>
      <tbody>
        {filteredData.length === 0 ? (
          <tr>
            <td>No data found</td>
          </tr>
        ) : (
          filteredData.map((row, index) => (
            <tr key={index}>
              <td>
                <input type="checkbox" />
              </td>
              <td>
                <strong>{row.name}</strong>
              </td>
              <td>{row.email}</td>
              <td>{row.paymentMethod || "-"}</td>
              <td>{row.created}</td>
              <td>...</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};
