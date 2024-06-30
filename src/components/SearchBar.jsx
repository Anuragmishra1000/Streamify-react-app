import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper, IconButton } from '@mui/material'
import { Search } from '@mui/icons-material'

const SearchBar = () => {
   const [searchTerm, setSearchTerm] = useState("")
   const navigate = useNavigate();

   const handleSubmit = (e) => {
      e.preventDefault();

      if (searchTerm) {
         navigate(`/search/${searchTerm}`)

         setSearchTerm("");
      }
   }
   return (
      <Paper component="form" 
         elevation={2}
         onSubmit={handleSubmit}
         sx={{
            borderRadius: 20,
            border: '1px solid #e3e3e3',
            pl: 1.2,
            boxShadow: 'none',
            mr: { xs: 1, sm: 2, md: 5 },
            display: 'flex',
            alignItems: 'center',
            width: { xs: '100%', sm: 'auto' }, // full width on small screens, auto on larger
            maxWidth: { xs: 'none', sm: '400px' } // set a max-width for larger screens
         }}
      >
         <input className='search-bar'
            placeholder='Search...'
            value={searchTerm}
            onChange={(e) => { setSearchTerm(e.target.value) }}
            style={{
               flex: 1,
               border: 'none',
               outline: 'none',
               padding: '5px 10px',
               minWidth: '0', // to allow input to shrink on small screens
               width: '100%', // full width on small screens
               boxSizing: 'border-box', // to include padding in width calculation
            }}
         />
         <IconButton className='search-icon' type='submit' sx={{ p: '10px', color: 'red' }} aria-label='search'
         >
            <Search />
         </IconButton>
      </Paper>
   )
}

export default SearchBar
