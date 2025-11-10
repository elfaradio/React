import React from "react";
import ReactDom from "react-dom/client";

function App() {
    return (
        <>
            <h1>hello icpc alam!!!</h1>
            <p>Se CP kore</p>
        </>
    );
}
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
// React.render(<App />)
const a = 2
console.log(a)