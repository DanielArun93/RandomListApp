import logo from './logo.svg';
import './App.css';
import RandomFactPage from './Components/RandomFactPage/RandomFactPage';
import { ErrorBoundary } from "react-error-boundary";

function ErrorHandler({error}) {
  return (
    <div role="alert">
      <p>An error occurred:</p>
      <pre>{error.message}</pre>
    </div>
  )
}

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorHandler}>
      <div className="App">
      <RandomFactPage />
    </div>
    </ErrorBoundary>
  );
}

export default App;
