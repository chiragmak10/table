import React, { useState } from "react";
import { css, jsx } from "@emotion/react";
import { Sorting } from "./sorting";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { ArrowDropDown } from "@mui/icons-material";

export const Table = ({ id, columns, data }) => {
  const [sortBy, setSortBy] = useState("");
  const [sorting, setSorting] = useState(Sorting.NEUTRAL);

  return (
    <table
      css={css`
        background: "#344ddd",
        width: "100%",
      `}
      id={id}
    >
      <TableHeader
        columns={columns}
        sortBy={sortBy}
        setSortBy={setSortBy}
        data={data}
        sorting={sorting}
        css={css`
          background: hotpink;
        `}
        setSorting={setSorting}
      />
      <RowData
        data={data}
        columns={columns}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
    </table>
  );
};

const RowData = ({ data, columns, sortBy }) => {
  return data?.map((rowData) => (
    <tr
      css={css`
        width: 100px;
        background: #ddd;
        padding: 8px;
      `}
    >
      {columns?.map((col) => (
        <td
          className={css`
            width: 100px;
          `}
        >
          {rowData[col.header]}
        </td>
      ))}
    </tr>
  ));
};

const TableHeader = ({
  data,
  columns,
  setSortBy,
  sortBy,
  sorting,
  setSorting,
}) => {
  const states = ["neutral", "ascending", "descending"];

  const nextState = () => {
    data?.sort((a, b) => {
      if (a[sortBy] > b[sortBy]) {
        return sorting === Sorting.ASC ? -1 : 1;
      } else if (a[sortBy] < b[sortBy]) {
        return sorting === Sorting.ASC ? 1 : -1;
      } else {
        return 0;
      }
    });
    const matchingIndex = states.findIndex((s) => s === sorting) + 1;
    return matchingIndex < 3 ? states[matchingIndex] : states[0];
  };

  return (
    <tr>
      {columns?.map((x) => (
        <td
          onClick={() => {
            setSortBy(x.header);
            setSorting(nextState());
          }}
        >
          {x.title}
          {sorting === Sorting.ASC && x.header === sortBy ? (
            <ArrowDropUpIcon />
          ) : sorting === Sorting.DESC && x.header === sortBy ? (
            <ArrowDropDown />
          ) : null}
        </td>
      ))}
    </tr>
  );
};
