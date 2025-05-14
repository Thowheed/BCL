"use client"
import { persistor, store } from "@/store";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

function Providers({ children }: any) {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                {children}
            </PersistGate>
        </Provider>
    )
}
export default Providers