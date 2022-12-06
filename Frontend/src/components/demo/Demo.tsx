import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Checkbox from "@material-ui/core/Checkbox";

const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset"
    }
  }
});

function createData(name: string) {
  return {
    name,
    children: [
      {
        key: 21,
        name: "All Products",
        user: <Checkbox></Checkbox>
      },
      {
        key: 22,
        name: "Cricket Accessories",
        user: <Checkbox></Checkbox>
      },
      {
        key: 23,
        name: "English Willow Bats",
        user: <Checkbox></Checkbox>
      },
      {
        key: 24,
        name: "Junior Range",
        user: <Checkbox></Checkbox>
      },
      {
        key: 25,
        name: "Kashmir Willow Bats",
        user: <Checkbox></Checkbox>
      }
    ]
  };
}

const CollapsedRow = ({ childrenRow, row }) => {

  return (
    <React.Fragment>
      <TableRow key={childrenRow.name}>
        <TableCell style={{ width: "62px"}}>
          {/* My edited for input Checkbox */}
                  {row.children.map((childrenRow) => (
                    <TableRow key={childrenRow.name} style={{ border: "none"}}>
                      <TableCell>{childrenRow.user}</TableCell>
                      <TableCell>{childrenRow.name}</TableCell>
                    </TableRow >
                  ))}
        </TableCell>
      </TableRow>
    
    </React.Fragment>
  );
};

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [openModule, setOpenModule] = React.useState(false);
  const [openFunction, setOpenFunction] = React.useState(false);
  // const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();


  return (
    <React.Fragment>
      <TableRow className={classes.root} style={{ background: "#a1a9d3" }}>
        <TableCell style={{ width: "62px" }}>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpenModule(!openModule)}
            style={{ color: "white" }}
          >
            {openModule ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell style={{ color: "white" }}>{row.name}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={openModule} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Table size="small" aria-label="purchases">
                <TableBody>
                  <h2>I am usalbe</h2>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const rows = [
  // createData({ moduleName :String,  functionName :String,  featureName :String, userTypeList:Array}),
  createData("COLLECTION"),
  createData("VENDOR"),
  createData("PRODUCT TYPE"),
  createData("AVAILABILITY"),
  createData("SIZE")
];

// After cliked on expand button

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead></TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
