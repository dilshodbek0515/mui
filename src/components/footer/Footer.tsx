import { Box, Typography, Link } from '@mui/material'
const Footer = () => {
  return (
    <div>
      <Box
        component='footer'
        sx={{
          backgroundColor: 'primary.main',
          color: 'white',
          py: 3,
          textAlign: 'center'
        }}
      >
        <Typography variant='body1'>
          © {new Date().getFullYear()} MUI
        </Typography>
        <Box sx={{ mt: 1 }}>
          <Link href='/' color='inherit' sx={{ mx: 1 }}>
            Home
          </Link>
          <Link href='/hero' color='inherit' sx={{ mx: 1 }}>
            Hero
          </Link>
          <Link href='/about' color='inherit' sx={{ mx: 1 }}>
            About
          </Link>
          <Link href='/respice' color='inherit' sx={{ mx: 1 }}>
            Respice
          </Link>
          <Link href='/charts' color='inherit' sx={{ mx: 1 }}>
            Charts
          </Link>
        </Box>
      </Box>
    </div>
  )
}

export default Footer
