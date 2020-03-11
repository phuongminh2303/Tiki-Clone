import axios from 'axios';
import {message} from 'antd';

export const GET_ALL_ORDERS = 'GET_ALL_ORDERS';
export const GET_MY_ORDERS = 'GET_MY_ORDERS';
export const GET_ALL_ORDERS_OF_A_SHOP = 'GET_ALL_ORDERS_OF_A_SHOP';
export const GET_SINGLE_ORDER_BY_ID = 'GET_SINGLE_ORDER_BY_ID';

const api_url = process.env.REACT_APP_API;

// 🔒 admin
export const getAllOrders= () => async (dispatch) => {
    const url = `${api_url}/api/v1/orders`;
    console.log(url);
    await axios.get(url)
        .then(res => {
            console.log(res);
            dispatch({
                type: GET_ALL_ORDERS,  //this call test dispatch. to dispsatch to our reducer
                orders: res.data.data
            });

            message.success("Got all orders");


        })
        .catch(err => {
                console.log('Error' + err);
                message.error("Error getting orders");
            }
        );
};


// 🔓
export const getAllOrdersOfAShop = (shopId) => async (dispatch) => {
    const url = `${api_url}/api/v1/shops/${shopId}/orders`;
    console.log(url);
    await axios.get(url)
        .then(res => {
            console.log(res);
            dispatch({
                type: GET_ALL_ORDERS_OF_A_SHOP,  //this call test dispatch. to dispsatch to our reducer
                orders: res.data.data
            });
            message.success("Got orders");
        })
        .catch(err => {
                console.log('Error' + err);
                message.error("Error getting orders");
            }
        );
};


// 🔓
export const getOrderById = (orderId) => async (dispatch) => {
    const url = `${api_url}/api/v1/orders/${orderId}`;
    console.log(url);
    await axios.get(url)
        .then(res => {
            console.log(res);
            dispatch({
                type: GET_SINGLE_ORDER_BY_ID,  //this call test dispatch. to dispsatch to our reducer
                order: res.data.data
            });

            message.success("Got order");


        })
        .catch(err => {
                console.log('Error' + err);
                message.error("Error getting order");
            }
        );

};

// 🔓
export const getOrdersByUserId = (userId) => async (dispatch) => {
    const url = `${api_url}/api/v1/orders`;
    console.log(url);
    await axios.get(url)
        .then(res => {
            console.log(res);
            const myOrders = res.data.data.filter(order => order.user._id === userId);
            dispatch({
                type: GET_MY_ORDERS,  //this call test dispatch. to dispsatch to our reducer
                orders: myOrders
            });

            message.success("Got orders");


        })
        .catch(err => {
                console.log('Error' + err);
                message.error("Error getting orders");
            }
        );

};

// 🔒
export const addNewOrder = (order) => async (dispatch) => {

    const url = `${api_url}/api/v1/orders/checkout`;
    console.log(url);
    await axios.post(url, order)
        .then(res => {
            console.log(res);
            message.success("Order added!");
        })
        .catch(err => {
                console.log('Error' + err);
                message.error("Error making order");
            }
        );
};

// 🔒
export const updateOrderById = (order, orderId) => async (dispatch) => {

    const url = `${api_url}/api/v1/orders/${orderId}`;
    console.log(url);
    await axios.put(url, order)
        .then(res => {
            console.log(res);
            message.success("Updated order");
        })
        .catch(err => {
                console.log('Error' + err);
                message.error("Error updating order");
            }
        );
};

// 🔒
export const deleteReviewById = (orderId) => async (dispatch) => {

    const url = `${api_url}/api/v1/orders/${orderId}`;
    console.log(url);
    await axios.delete(url)
        .then(res => {
            console.log(res);
            message.success("Deleted order");
        })
        .catch(err => {
                console.log('Error' + err);
                message.error("Error deleting order");
            }
        );
};