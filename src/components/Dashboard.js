import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import DescriptionIcon from '@mui/icons-material/Description';
import LayersIcon from '@mui/icons-material/Layers';
import CssBaseline from '@mui/material/CssBaseline';

// Define the navigation structure
const NAVIGATION = [
  {
    kind: 'header',
    title: 'Main items',
  },
  {
    segment: 'dashboard',
    title: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
    segment: 'users',
    title: 'Users',
    icon: <ShoppingCartIcon />,
  },
  {
    segment: 'workouts',
    title: 'Workouts',
    icon: <BarChartIcon />,
  },
  {
    kind: 'divider',
  },
  {
    kind: 'header',
    title: 'Analytics',
  },
  {
    segment: 'exercises',
    title: 'Exercises',
    icon: <DescriptionIcon />,
  },
  {
    segment: 'sets',
    title: 'Sets',
    icon: <DescriptionIcon />,
  },
  {
    segment: 'logs',
    title: 'Logs',
    icon: <LayersIcon />,
  },
];

// Define the theme for the dashboard
const demoTheme = createTheme({
  palette: {
    mode: 'light', // Switch to 'dark' if you want dark mode
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

// Define the page content based on route
function DemoPageContent({ pathname }) {
  return (
    <Box
      sx={{
        py: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Typography>Dashboard content for {pathname}</Typography>
    </Box>
  );
}

DemoPageContent.propTypes = {
  pathname: PropTypes.string.isRequired,
};

// Define the main dashboard layout component
function DashboardLayoutBasic() {
  // State to manage current path
  const [pathname, setPathname] = React.useState('/dashboard');

  return (
    <ThemeProvider theme={demoTheme}>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            p: 2,
            bgcolor: 'background.paper',
          }}
        >
          <Typography variant="h6">FitTrack Dashboard</Typography>
          <Box>
            {NAVIGATION.map((item) => (
              <Box
                key={item.segment}
                onClick={() => setPathname(`/${item.segment}`)}
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  cursor: 'pointer',
                  px: 2,
                }}
              >
                {item.icon}
                <Typography>{item.title}</Typography>
              </Box>
            ))}
          </Box>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <DemoPageContent pathname={pathname} />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default DashboardLayoutBasic;
