import React, { createContext } from 'react';

const LoginContext = createContext({});

export const TokenProvider = LoginContext.Provider;

export default LoginContext;