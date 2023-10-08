import React, { useState } from 'react';
import { Box } from '@mui/material';

import Exercises from '../components/Exercises';
import SearchExercises from '../components/SearchExercises';
import MainBanner from '../components/MainBanner';

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');

  return (
    <Box>
    
     <MainBanner>
     </MainBanner>
     <SearchExercises
     setExercises={setExercises}
     bodyPart={bodyPart}
     setBodyPart={setBodyPart}/>
    <Exercises
    setExercises={setExercises}
     bodyPart={bodyPart}
     setBodyPart={setBodyPart}/>
     
    </Box>
  )
}

export default Home
