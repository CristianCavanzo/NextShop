import React from 'react';
import styled from 'styled-components';
import { Header } from '@components/Header';
import { Title } from '@components/Title';

const MyOrdersComponent = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    place-items: center;
    .myOrders_container {
        display: grid;
        grid-template-rows: auto 1fr auto;
        width: 300px;
    }
`;

const MyOrdersContent = styled.div`
    display: flex;
    flex-direction: column;
`;

const Order = styled.div`
    display: grid;
    grid-template-columns: auto 1fr auto auto;
    gap: 16px;
    margin-bottom: 24px;
    align-items: center;
    figure {
        margin: 0;
    }
    figure img {
        width: 70px;
        height: 70px;
        border-radius: 20px;
        object-fit: cover;
    }
    p:nth-child(2) {
        color: var(--very-light-pink);
    }
    p:nth-child(3) {
        font-size: var(--md);
        font-weight: bold;
    }
`;

const MyOrders = ({ children, orders }) => {
    return (
        <React.Fragment>
            <Header />
            <MyOrdersComponent>
                <div className="myOrders_container">
                    <Title text_aling="left" margin_bottom="40px">
                        My Orders
                    </Title>
                    <MyOrdersContent>
                        {children}
                        {orders.map((order, key) => (
                            <Order key={key}>
                                <figure>
                                    <img src={order.img} alt={order.product} />
                                </figure>
                                <p>{order.product}</p>
                                <p>{order.price}</p>
                            </Order>
                        ))}
                    </MyOrdersContent>
                </div>
            </MyOrdersComponent>
        </React.Fragment>
    );
};

export { MyOrders };
