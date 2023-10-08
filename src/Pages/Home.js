import React, { useState } from 'react';
import { Box } from '@mui/material';

import Exercises from '../components/Excercises';
import SearchExercises from '../components/SearchExcercises';
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
