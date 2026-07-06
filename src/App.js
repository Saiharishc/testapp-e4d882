import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>TestApp</h1>
        <p>Welcome to TestApp!</p>
      </header>
      <section>
        <h2>API Endpoints</h2>
        <p><a href="/health">/health</a> - Health check</p>
        <p><a href="/test_data">/test_data</a> - Retrieve sample test data</p>
      </section>
    </div>
  );
}

export default App;
