import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { MainBlock } from './pages/mainBlock';
import { Sources } from './pages/sources';
import { Stats } from './pages/stats';
import { Team } from './pages/team';
import { Layout } from './components/Layout';
import { Tasks } from './pages/tasks';

const App = () => {
   return (
      <>
         <Routes>
            <Route path='/' element={<Layout />}>
               <Route index element={<MainBlock />} />
               <Route path='sources' element={<Sources />} />
               <Route path='stats' element={<Stats />} />
               <Route path='team' element={<Team />} />
               <Route path='tasks' element={<Tasks />} />
            </Route>
         </Routes>
      </>
   );
};

export default App;
