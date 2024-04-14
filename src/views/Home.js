function Home() {
    return (
      <main>
        <h1>React Hooks Demo</h1>
          <div className="list-group col-10 col-md-4 text-center mt-4">
            <a href="/usestate" className= "list-group-item list-group-item-action list-group-item-light">UseState</a>
            <a href="/useeffect" className="list-group-item list-group-item-action list-group-item-light">UseEffect</a>
            <a href="/useref" className="list-group-item list-group-item-action list-group-item-light">UseRef</a>
            <a href="/UseContext/PropDrilling" className="list-group-item list-group-item-action list-group-item-light">Prop Drilling</a>
            <a href="/UseContext/ContextWithConsumer" className="list-group-item list-group-item-action list-group-item-light">Context API</a>
            <a href="/UseContext/UseContext" className="list-group-item list-group-item-action list-group-item-light">UseContext</a>
          </div>
      </main>
    );
  }
  
  export default Home;
  