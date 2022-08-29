import React from 'react';
import { MyAccount } from '../containers/MyAccount';

const MyAccountPage = () => {
    return (
        <MyAccount isEditing={true} changeText="Save">
            Edit
        </MyAccount>
    );
};

export { MyAccountPage };
