// Step 1: Import React
import React from "react";

// Step 2: Create a context using createContext


// Step 3: Define a component named ContextProvider as a function which provides a value to the consumer
function ContextProvider() {

  // Step 4: Define the value you want to provide through context
  

  // Step 5: Return the Context.Provider component with the value provided
  return (
    <main className="m-3 p-3">
      
    </main>
  );
}

// Step 7: Define a component that consumes the context using Context.Consumer from ContextProvider
function ContextwithConsumer() {
  return (
    <main className="m-3 p-3">
     
    </main>
  );
}

// Step 9: Export the ContextProvider component
export default ContextProvider;
