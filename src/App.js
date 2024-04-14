import React from "react";

// page components
import Home from "./views/Home";
import UseState from "./views/UseState";
import UseEffect from "./views/UseEffect";
import UseRef from "./views/UseRef";

// useContext components
import PropDrilling from "./views/UseContext/PropDrilling";
import UseContext from "./views/UseContext/UseContext";
import ContextProvider from "./views/UseContext/ContextProvider";
import ContextWithConsumer from "./views/UseContext/ContextWithConsumer";

// global components
import Back from "./views/Back";

// dependencies
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
    return (
        <div>
            <Back />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/usestate" element={<UseState />} />
                    <Route path="/useeffect" element={<UseEffect />} />
                    <Route path="/useref" element={<UseRef />} />
                    <Route path="/UseContext/PropDrilling" element={<PropDrilling />} />
                    <Route path="/UseContext/ContextWithConsumer" element={<ContextWithConsumer />} />
                    <Route path="/UseContext/UseContext" element={<ContextProvider><UseContext /></ContextProvider>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
