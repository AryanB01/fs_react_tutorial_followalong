import { useState } from "react";

// Step 1: Define the PropDrilling component as a function
function PropDrilling() {
    // Step 2: Set up state to manage the username
    const [user, setUser] = useState("Jihan");

    // Step 3: Render the main component
    return (
        <main className="left">
            <h6>Prop Drilling Demo</h6>
            {/* Step 4: Pass user state and setUser function as props to the Home component */}
            <Home user={user} setUser={setUser} />
        </main>
    );
}

// Step 5: Define the Home component as a function and pass user and setUser as a prop (2nd Great-grandparent)
function Home({ user, setUser }) {
    // Step 6: Render the Home component
    return (
        <>
            <h1>{`Home: Logged in as ${user}`}</h1>
            {/* Step 7: Pass user state and setUser function as props to the BlogPage component */}
            <BlogPage user={user} setUser={setUser} />
        </>
    );
}

// Step 8: Define the BlogPage component (1st Great-grandparent)
function BlogPage({ user, setUser }) {
    // Step 9: Render the BlogPage component
    return (
        <>
            <h1>Blog Page</h1>
            {/* Step 10: Pass user state and setUser function as props to the BlogPost component */}
            <BlogPost user={user} setUser={setUser} />
        </>
    );
}

// Step 11: Define the BlogPost component (Grandparent)
function BlogPost({ user, setUser }) {
    // Step 12: Render the BlogPost component
    return (
        <>
            <h1>Blog Post</h1>
            {/* Step 13: Pass user state and setUser function as props to the Comments component */}
            <Comments user={user} setUser={setUser} />
        </>
    );
}

// Step 14: Define the Comments component (Parent)
function Comments({ user, setUser }) {
    // Step 15: Render the Comments component
    return (
        <>
            <h1>Comments</h1>
            {/* Step 16: Pass user state and setUser function as props to the Visitor component */}
            <Visitor user={user} setUser={setUser} />
        </>
    );
}

// Step 17: Define the Visitor component (Child - contains username)
function Visitor({ user, setUser }) {
    // Step 18: Render the Visitor component
    return (
        <>
            <h1>{`Visitor: Comment as ${user}`}</h1>
        </>
    );
}

// Step 19: Export the PropDrilling component
export default PropDrilling;
