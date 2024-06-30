import React from 'react'
import { Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { logo } from '../utils/constants'
import SearchBar from './SearchBar'

const Navbar = () => (
    <Stack
        direction={{ xs: 'column', sm: 'row' }} // Stack direction changes based on screen size
        alignItems="center"
        p={2}
        spacing={2} // Added spacing between items
        sx={{ position: 'sticky', background: '#000', top: 0, justifyContent: 'space-between' }}>

        <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <img src={logo} alt="logo" height={45} />
            <Typography variant='h6'
                fontWeight="bold" ml={{ xs: 0, sm: 1.5 }} mb={1} mt={{ xs: 1, sm: 0 }}
                sx={{
                    color: 'white',
                    fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' }, // Responsive font size
                    whiteSpace: 'nowrap', // Prevent text from wrapping
                    overflow: 'hidden', // Hide overflow text
                    textOverflow: 'ellipsis', // Add ellipsis for overflow text
                }}
            >
                Streamify
            </Typography>
        </Link>
        <SearchBar />
    </Stack>
)

export default Navbar
