import '../styles/globals.css'
import UserLayout from '../components/User/Layout';
// import PublicLayout from '../components/Public/Layout';
import 'antd/dist/antd.css';
import '../styles/style.scss';
import type { AppProps } from 'next/app';
import { compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../reducers';

const store = createStore(
  rootReducer
  // (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose)()
);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
export default MyApp
