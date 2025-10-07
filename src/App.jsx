import React from "react";
function App() {
  return (
    <>
      <header className="flex justify-between py-4 px-8">
        <div>Logo</div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default App;
