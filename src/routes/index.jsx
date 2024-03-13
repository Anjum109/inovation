import React from 'react';
import DashboardLayout from '../layout/DashboardLayout';
import { Route, Routes } from 'react-router-dom';
import Product from '../pages/Product';
import DesignTeam from '../pages/DesignTeam';
import MarkettingTeam from '../pages/MarkettingTeam';
import Developmentteam from '../pages/Developmentteam';

const ProjectRoutes = () => {
    return (
        <Routes>
            {/* Define a specific path for the route */}
            <Route element={<DashboardLayout />}>
                <Route path='/' element={<Product />} />
                <Route path='/product' element={<Product />} />
                <Route path='/designteam' element={<DesignTeam />} />
                <Route path='/markettingteam' element={<MarkettingTeam />} />
                <Route path='/developmentteam' element={<Developmentteam />} />

            </Route>
        </Routes>
    );
};

export default ProjectRoutes;
