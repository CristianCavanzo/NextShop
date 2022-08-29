import React from 'react';
import { MyOrders } from '../containers/MyOrders';

const Checkout = () => {
    return (
        <MyOrders
            orders={[
                {
                    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                    product: 'Bike',
                    price: '$30,00',
                },
            ]}
        />
    );
};

export { Checkout };
