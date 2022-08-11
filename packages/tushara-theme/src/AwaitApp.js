import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import { HashRouter } from 'react-router-dom'


export default function AwaitApp() {
  return <div>
        <HashRouter>
            <App />
        </HashRouter>
    </div>;
}






