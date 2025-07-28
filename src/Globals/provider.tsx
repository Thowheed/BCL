// "use client"
// import { persistor, store } from "@/store";

// import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";

// function Providers({ children }: any) {
//     return (
//         <Provider store={store}>
//             <PersistGate loading={null} persistor={persistor}>
//                 {children}
//             </PersistGate>
//         </Provider>
//     )
// }
// export default Providers

// import { ReactNode } from "react";
// "use client";
// import { persistor, store } from "@/store";
// import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";

// function Providers({ children }: { children: ReactNode }) {
//     return (
//         <Provider store={store}>
//             <PersistGate loading={null} persistor={persistor}>
//                 {children}
//             </PersistGate>
//         </Provider>
//     );
// }

// export default Providers;


'use client';

import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '@/store';

interface ProvidersProps {
  children: ReactNode;
}

function Providers({ children }: ProvidersProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}

export default Providers;
