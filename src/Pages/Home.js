import React, { useState } from 'react';
import { Box } from '@mui/material';

import Exercises from '../components/Exercises';
import SearchExercises from '../components/SearchExercises';
import MainBanner from '../components/MainBanner';

const Home = () => {
  return (
    <Box>
    
     <MainBanner>
     </MainBanner>
     <SearchExercises>
    </SearchExercises>
     
    </Box>
  )
}

export default Home
