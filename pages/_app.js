import "../styles/globals.css";
import "../styles/style.css";
import { Provider } from "react-redux";
import { store } from "../redux/app/store";
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
