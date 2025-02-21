import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useApproveRequest, useFetchOnboardingRequest } from "./Schools.api";
import { Box, CircularProgress, Link, Typography, Button, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";

const OnboardingRequest = () => {
    const { data, isLoading, error } = useFetchOnboardingRequest();
    const approveRequest = useApproveRequest();
    const [selectedSchool, setSelectedSchool] = useState(null);
    const [open, setOpen] = useState(false);


    const handleApprove = (id: any) => {
        approveRequest.mutate(
            { schoolId: id, status: "onboarded" },
            {
                onSuccess: () => {
                    console.log("Success");
                },
            }
        );
    };

    const handleViewDetails = (id: any) => {
        setSelectedSchool(id);
        setOpen(true);
        
    };
    const handleClose = () => {
        setOpen(false);
        setSelectedSchool(null);
    };


    const columns = [
        { field: "id", headerName: "ID", flex: 1 },
        { field: "schoolName", headerName: "School Name", flex: 1 },
        { field: "schoolRegistrationNumber", headerName: "Registration Number", flex: 1 },
        { field: "contactEmail", headerName: "Email", flex: 1 },
        { field: "contactNumber", headerName: "Contact Number", flex: 1 },
        {
            field: "actions",
            headerName: "Action",
            flex: 1,
            renderCell: (params: { row: any }) => (
                <div style={{ display: "flex", alignItems: "center", justifyContent:'center', gap: "10px" }}>
                    <Link component="button" variant="body2" onClick={() => handleViewDetails(params.row._id)}>
                        View Details
                    </Link>
                    <Link component="button" variant="body2" onClick={() => handleApprove(params.row._id)}>
                        Approve
                    </Link>
                </div>
            ),
        },
    ];

    if (isLoading) return <CircularProgress />;
    if (error) return <Typography color="error">Failed to fetch data</Typography>;

    return (
        <Box sx={{ width: "100%", mt: 4 }}>
            <Typography variant="h6" gutterBottom>
                List of Schools
            </Typography>
            <Box sx={{ height: 500, mb: 4 }}>
                <DataGrid rows={data} columns={columns} getRowId={(row) => row._id} columnVisibilityModel={{ id: false }} pageSizeOptions={[5]} />
            </Box>

            <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
                <DialogTitle>School Details</DialogTitle>
                <DialogContent>
                {selectedSchool && (
                        <Box>
                        <Typography variant="h5" gutterBottom>
                           {data[0].schoolName}
                        </Typography>
                        <Typography variant="body1"><strong>Address:</strong> {data[0].address.street},{data[0].address.city},{data[0].address.state}-{data[0].address.pincode}
                        </Typography>
                        <Typography variant="body1"><strong>Year of Establishment:</strong> {data[0].establishedYear}</Typography>
                        <Typography variant="body1"><strong>Principal:</strong> {data[0].principalName}</Typography>
                        <Typography variant="body1"><strong>Board:</strong> {data[0].schoolBoardOrAffiliation}</Typography>
                        <Typography variant="body1"><strong>Public/Private:</strong> {data[0].schoolType}</Typography>
                        <Typography variant="body1"><strong>Website:</strong> {data[0].website}</Typography>

                        </Box>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>);
};

export default OnboardingRequest;
