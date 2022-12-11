import React from 'react';
import Button from '../../components/button';

const Dashboard = () => {

    return (
        <div>
            <Button type="info" value="Info" clickEvent={() => alert('hi')}/>
            <Button type="warn" value="Warn" />
            <Button type="debug" value="Debug" clickEvent={() => alert('debug')} />
            <Button type="error" value="Error" />
            <Button type="default" value="Default" />
        </div>
    )
};

export default Dashboard;