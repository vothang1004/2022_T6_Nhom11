import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDownloadExcel } from "react-export-table-to-excel";
import { Button } from "@mui/material";

export default function KqxsTable({ results }) {
  const tableRef = React.useRef(null);
  const { onDownload } = useDownloadExcel({
    currentTableRef: tableRef.current,
    filename: "kqxs",
    sheet: "Ket qua xo so",
  });
  return (
    <>
      <Button
        onClick={onDownload}
        sx={{ mb: 3, maxWidth: "300px" }}
        variant="contained"
      >
        Xuất file excel
      </Button>
      <TableContainer component={Paper}>
        <Table ref={tableRef} sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Ngày</TableCell>
              <TableCell align="left">Giải</TableCell>
              <TableCell align="left">Tỉnh</TableCell>
              <TableCell align="left">Kết quả</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {results &&
              results.map((result) => (
                <TableRow
                  key={result._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {`${result.date.day}/${result.date.month}/${result.date.year}`}
                  </TableCell>
                  <TableCell align="left">{result.award.name}</TableCell>
                  <TableCell align="left">{result.province.name}</TableCell>
                  <TableCell align="left">{result.result}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
