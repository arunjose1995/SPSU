import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, CircularProgress, Link, Typography, Button, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import { useFetchStaffProfiles } from "./staffs.api";

const StaffProfiles = () => {
    const { data, isLoading, error } = useFetchStaffProfiles();
    const [selectedSchool, setSelectedSchool] = useState(null);

console.log("data=",data);

   


    // const columns = [
    //     { field: "id", headerName: "ID", flex: 1 },
    //     { field: "schoolName", headerName: "School Name", flex: 1 },
    //     { field: "schoolRegistrationNumber", headerName: "Registration Number", flex: 1 },
    //     { field: "contactEmail", headerName: "Email", flex: 1 },
    //     { field: "contactNumber", headerName: "Contact Number", flex: 1 },
    //     {
    //         field: "actions",
    //         headerName: "Action",
    //         flex: 1,
    //         renderCell: (params: { row: any }) => (
    //             <div style={{ display: "flex", alignItems: "center", justifyContent:'center', gap: "10px" }}>
    //                 <Link component="button" variant="body2" onClick={() => handleViewDetails(params.row._id)}>
    //                     View Details
    //                 </Link>
    //                 <Link component="button" variant="body2" onClick={() => handleApprove(params.row._id)}>
    //                     Approve
    //                 </Link>
    //             </div>
    //         ),
    //     },
    // ];

    if (isLoading) return <CircularProgress />;
    if (error) return <Typography color="error">Failed to fetch data</Typography>;

    return (
        <Box sx={{ width: "100%", mt: 4 }}>
            <Typography variant="h6" gutterBottom>
                Teaching Staffs
            </Typography>
            <Box sx={{ height: 500, mb: 4 }}>
                {/* <DataGrid rows={data} columns={columns} getRowId={(row) => row._id} columnVisibilityModel={{ id: false }} pageSizeOptions={[5]} /> */}
            </Box>

            
        </Box>);
};

export default StaffProfiles;
