import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Todo } from "./components/Todo";

export default function BasicPagination() {
  return (
    <Stack spacing={10}>
      <Todo />
      <Pagination count={5} />
    </Stack>
  );
}
