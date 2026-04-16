'use client';
import AppDataProvider from "../../../context/appContext.jsx";

const Providers = ({ children }) => {
    return (
       <AppDataProvider>
         {children}
       </AppDataProvider>
    );
};

export default Providers;