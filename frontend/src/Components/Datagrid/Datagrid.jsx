import React from "react";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
export default function Datagrid ({rows , columns}){
    return (
        <Box sx={{ width: '100%' }} >
            <DataGrid
                className='dark:text-white'
                rows={rows}
                columns={columns}
                checkboxSelection
                disableRowSelectionOnClick
            />
        </Box>
    )
}