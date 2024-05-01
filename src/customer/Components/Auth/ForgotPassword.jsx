import { API_BASE_URL } from '../../../config/api'
import { Grid, TextField, Button } from "@mui/material";
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Forgotpassword = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();
        let data = await fetch(`${API_BASE_URL}/auth/forgot-password`, {
            method: 'POST',
            body: JSON.stringify({ email }),
            headers: {
                'content-type': 'application/json'
            }
        })
        try {
            data = await data.json();
            console.log("Response from server:", data);
            if (!data.status) {
                alert('Email not Registered');
                navigate('/register')
            }
            else {
                alert('check your email to reset the password')
                navigate('/login')
            }
        }
        catch (e) {
            console.log(e);
        }
    }
    return (
        
        <div className='shadow-lg'>
            <h3 className="text-center text-red-600 font-bold text-xl mb-5">Forgot Password</h3>
            <p className='mb-3'>Enter your email and we'll send you a link to reset your password</p>
            <form className="w-full" onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="email"
                            name="email"
                            label="Email"
                            fullWidth
                            autoComplete="given-name"
                            onChange={(e) => setEmail(e.target.value)}
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
                            Send
                        </Button>
                    </Grid>
                </Grid>
            </form>
            <div className="mt-3 flex items-center">
                <p>don't have account ?</p>
                <Button onClick={() => navigate("/register")} size="small">
                    Register
                </Button>
            </div>
        </div>
        
    )
}

export default Forgotpassword;