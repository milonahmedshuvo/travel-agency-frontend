"use client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { useMemo } from "react";
import { makeStore } from "../store";


// STRIPE SETUP 
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Loading from "@/components/shared/loading/Loading";

const stripePromise = loadStripe("pk_test_51QmZ4RDhyWl1vHdf6mc3qGwy01FggtxkhqhmLRF1AC9JNwWmgPgoW5RAA2XNbpptbHe870nz9yODruy7S2dzCTVV001dlz7QZ8");



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

    <Elements stripe={stripePromise}> 
    <Provider store={store}>
      <PersistGate 
        loading={<div> <Loading/> </div>} 
        persistor={persistor}
      >
        {children}
      </PersistGate>
    </Provider>
    </Elements>
  );
}