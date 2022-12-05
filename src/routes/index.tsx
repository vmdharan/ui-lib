import React from 'react';
import { Outlet } from 'react-router-dom';

const Root = () => (
    <div>
        <div>Content 1</div>
        <div>
            Content - Outlet
            <Outlet />
        </div>
    </div>
);

export default Root;