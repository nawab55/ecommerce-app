import { API_BASE_URL } from '../../../config/api'
import { Grid, TextField, Button } from "@mui/material";
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ResetPassword = () => {

    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    const { token } = useParams();
    const handleSubmit = async (event) => {
        event.preventDefault();
        let data = await fetch(`${API_BASE_URL}/auth/reset-password/` + token, {
            method: 'POST',
            body: JSON.stringify({ password }),
            headers: {
                'content-type': 'application/json'
            }
        })
        try {
            data = await data.json();
            console.log(data)
            alert('password change successfully')
            navigate('/home')
        }
        catch (e) {
            console.log(e)
        }
    }
    return (
        <div>
            <h3 className="text-center text-red-600 font-bold text-lg">Reset Password</h3>
            <div className='px-80 mt-5'>
            <form className="w-90" onSubmit={handleSubmit}>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="password"
                        name="password"
                        label="Password"
                        fullWidth
                        autoComplete="given-name"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Grid>
                {<br/>}

                <Grid item xs={12}>
                    <Button
                        className="bg-[#9155FD] w-full"
                        type="submit"
                        variant="contained"
                        size="large"
                        sx={{ padding: ".8rem 0" }}
                    >
                        Reset
                    </Button>
                </Grid>
            </form>
            </div>
        </div>
    )
}



export default ResetPassword