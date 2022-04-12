import React from "react";
import DataTable from "react-data-table-component";

export default function DataTableComponent() {
  const columns = [
    {
      name: "No",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Age",
      selector: (row) => row.age,
      sortable: false,
    },
    {
      name: "Action",
      cell: (row) => (
        <button
          onClick={() => alert(`${row.name}`)}
          className="bg-green-600 text-white p-3 rounded-sm"
        >
          Click
        </button>
      ),
    },
  ];

  const data = [
    {
      id: 1,
      name: "John Doe",
      age: 32,
    },
    {
      id: 2,
      name: "Jane Doe",
      age: 30,
    },
    {
      id: 3,
      name: "Hadi",
      age: 32,
    },
    {
      id: 4,
      name: "Budi",
      age: 32,
    },
    {
      id: 5,
      name: "Budi",
      age: 32,
    },
    {
      id: 6,
      name: "Budi",
      age: 32,
    },
    {
      id: 7,
      name: "Budi",
      age: 32,
    },
    {
      id: 8,
      name: "Budi",
      age: 32,
    },
    {
      id: 9,
      name: "Budi",
      age: 32,
    },
    {
      id: 10,
      name: "Budi",
      age: 32,
    },
    {
      id: 11,
      name: "Budi",
      age: 32,
    },
  ];
  return (
    <div>
      <DataTable
        title="Data Table Example"
        columns={columns}
        data={data}
        defaultSortFieldId={1}
        pagination
      />
    </div>
  );
}
