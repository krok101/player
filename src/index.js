import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import store from './store/store';
import style from './styles/main.scss';

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(
    <Provider store={store}>
      <App/>
    </Provider>
  );
