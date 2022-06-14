import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import DataGridTable from "./DataGrid";

export default function Tabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Pending" value="1" />
            <Tab label="Accepted" value="2" />
            <Tab label="AWB Created" value="3" />
            <Tab label="Ready to Ship" value="4" />
            <Tab label="Shipped" value="5" />
            <Tab label="Completed" value="6" />
            <Tab label="Cancelled" value="7" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <DataGridTable />
        </TabPanel>
        <TabPanel value="2">
          <DataGridTable />
        </TabPanel>
        <TabPanel value="3">
          <DataGridTable />
        </TabPanel>
        <TabPanel value="4">
          <DataGridTable />
        </TabPanel>
        <TabPanel value="5">
          <DataGridTable />
        </TabPanel>
        <TabPanel value="6">
          <DataGridTable />
        </TabPanel>
        <TabPanel value="7">
          <DataGridTable />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
