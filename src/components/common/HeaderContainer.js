import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from './Header';
import { logout } from '../../reducers/auth';

const HeaderContainer = () => {
    const { user } = useSelector(({ auth }) => ({ user: auth.user }));
    const dispatch = useDispatch();
    const onLogout = () => {
        dispatch(logout());
    }

    return <Header user={user} onLogout={onLogout}/>;
}

export default HeaderContainer;