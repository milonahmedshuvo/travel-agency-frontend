"use client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { useMemo } from "react";
import { makeStore } from "../store";



export default function ReduxStoreProvider({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  const { store, persistor } = useMemo(() => {
    const store = makeStore();
    const persistor = persistStore(store);
    return { store, persistor };
  }, []);


  return (
    <Provider store={store}>
      <PersistGate 
        loading={<div>Loading Redux state...</div>} 
        persistor={persistor}
      >
        {children}
      </PersistGate>
    </Provider>
  );
}