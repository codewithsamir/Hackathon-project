import React from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Avatar,
  Button,
  Breadcrumbs,
  Link,
  Box,
  Divider,
} from '@mui/material';
import 'tailwindcss/tailwind.css';
import Dashboardlayout from '@/components/Dashboard/Dashboardlayout';

const ProfilePage = () => {
  return (
    <Dashboardlayout>
    <Box className="w-full h-full bg-gray-100">
      {/* Breadcrumb Navigation */}
      {/* <Container maxWidth="lg" className="py-4">
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Link underline="hover" color="inherit" href="/dashboard">
            Dashboard
          </Link>
          <Typography color="text.primary">Profile</Typography>
        </Breadcrumbs>
      </Container> */}

      {/* Profile Section */}
      <Container maxWidth="lg" className="py-8">
        <Grid container spacing={4}>
          {/* Profile Overview */}
          <Grid item xs={12} md={4}>
            <Card className="shadow-lg">
              <CardContent className="flex flex-col items-center text-center">
                <Avatar
                  alt="User Name"
                  src="https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFufDB8fDB8fHww"
                  sx={{ width: 120, height: 120 }}
                />
                <Typography variant="h5" component="div" className="mt-4">
                  User Name
                </Typography>
                <Typography variant="body2" color="text.secondary" className="mt-1">
                  user@example.com
                </Typography>
                <Typography variant="body2" color="text.secondary" className="mt-1">
                  Member since: Jan 2022
                </Typography>
                <Button variant="contained" color="primary" className="mt-4">
                  Edit Profile
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Account Settings and Progress */}
          <Grid item xs={12} md={8}>
            <Card className="shadow-lg">
              <CardContent>
                {/* Account Settings Section */}
                <Typography variant="h6" component="div">
                  Account Settings
                </Typography>
                <Divider className="my-2" />
                <Typography variant="body2" color="text.secondary" className="mt-2">
                  Manage your account settings and preferences below:
                </Typography>
                <Box className="flex flex-wrap mt-4">
                  <Button variant="contained" color="primary" className="mr-4">
                    Change Password
                  </Button>
               
                </Box>

                {/* Progress Section */}
                <Typography variant="h6" component="div" className="mt-6">
                  Learning Progress
                </Typography>
                <Divider className="my-2" />
                <Typography variant="body2" color="text.secondary" className="mt-2">
                  Track your progress across enrolled courses:
                </Typography>
                <Box className="mt-4">
                  <Typography variant="body1" className="mb-1">
                    Data Science Bootcamp: <span className="font-bold">75% Complete</span>
                  </Typography>
                  <Typography variant="body1" className="mb-1">
                    Web Development Mastery: <span className="font-bold">50% Complete</span>
                  </Typography>
                  <Typography variant="body1">
                    AI Fundamentals: <span className="font-bold">30% Complete</span>
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

    
    </Box>
    </Dashboardlayout>
  );
};

export default ProfilePage;
