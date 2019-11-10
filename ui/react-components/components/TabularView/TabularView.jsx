import React, { useState, useEffect } from "react";
import "./TabularView.scss";
import PropTypes from "prop-types";
import { sortBy } from "lodash";

function TabularView(props) {
  const [data, setData] = useState(props.data);
  const [columns, setColumns] = useState(props.columns);

  const [sortOrder, setSortOrder] = useState("desc");

  const [selectedRow, setSelectedRow] = useState(-1);

  useEffect(() => {
    const tempColumns = [...props.columns];
    if (props.editable) {
      tempColumns.push("Action");
    }
    setColumns(tempColumns);
  }, [props]);

  const getHeader = () => {
    // console.log("from getHeader");
    return columns.map((col, index) => (
      <th
        key={index}
        onClick={() => {
          if (props.sorting) onSort(col);
        }}
      >
        {col}
      </th>
    ));
  };

  const getRowData = () => {
    return data.map((row, rowIndex) => {
      return (
        <tr
          key={rowIndex}
          onClick={props.rowSelection ? changeColor(rowIndex) : () => {}}
          style={
            selectedRow === rowIndex
              ? { background: "#298dd5" }
              : { background: "" }
          }
        >
          {getService(columns, row)}
        </tr>
      );
    });
  };

  const getService = (columns, data) => {
    return columns.map((column, rowIndex) => {
      if (column === "Action") {
        return (
          <td key={rowIndex}>
            <a href="!#" onClick={e => props.handleEdit(data)}>
              Edit
            </a>
            <a href="!#" onClick={e => props.handleDelete(data)}>
              Delete
            </a>
          </td>
        );
      }
      return <td key={rowIndex}>{data[column]}</td>;
    });
  };

  // const onEdit = patientId => {
  //   props.handleEdit(patientId);
  // };

  // const onDelete = patientId => {
  //   props.handleDelete(patientId);
  // };

  const changeColor = index => e => {
    if (selectedRow !== index) {
      setSelectedRow(index);
    } else {
      setSelectedRow(-1);
    }
  };

  const onSort = item => {
    const direction = sortOrder === "asc" ? "desc" : "asc";
    const sortedData = sortBy(data, item);
    // const duplicateData = [...data];
    // const sortedData = duplicateData.sort((a, b) => {
    //   if (a[item] < b[item]) return -1;
    //   if (a[item] > b[item]) return 1;
    //   return 0;
    // });

    if (direction === "desc") {
      sortedData.reverse();
    }

    setData(sortedData);
    setSortOrder(direction);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>{getHeader()}</tr>
        </thead>
        <tbody>{getRowData()}</tbody>
      </table>
    </div>
  );
}

export default TabularView;

TabularView.propTypes = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  sorting: PropTypes.bool,
  rowSelection: PropTypes.bool,
  editable: PropTypes.bool,
  handleEdit: PropTypes.func,
  handleDelete: PropTypes.func
};
