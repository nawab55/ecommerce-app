import React from 'react'
import { Grid, TextField, Button, Box, Snackbar, Alert } from "@mui/material";

const handleSubmit = (e) => {
    e.preventDefault();
}

const Profile = () => {
    return (
        <div className="pt-20 px-80">
            <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="firstName"
                            name="firstName"
                            label="First Name"
                            fullWidth
                            autoComplete="given-name"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="lastName"
                            name="lastName"
                            label="Last Name"
                            fullWidth
                            autoComplete="given-name"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            disabled
                            type="email"
                            id="email"
                            name="email"
                            label="Email"
                            fullWidth
                            autoComplete="given-name"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="password"
                            name="password"
                            placeholder='*******'
                            label="Password"
                            fullWidth
                            autoComplete="given-name"
                            type="password"
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Button
                            className="bg-[#9155FD] w-full"
                            type="submit"
                            variant="contained"
                            size="large"
                            sx={{ padding: ".8rem 0" }}
                        >
                            Update
                        </Button>
                    </Grid>
                </Grid>
            </form> </div>)
}

export default Profile