import "../src/styles/index.scss";
import { AnimatePresence } from "framer-motion";
import Footer from "../src/componants/Footer/footer";
import Header from "../src/componants/Header/header";
import client from "../lib/apollo";
import { ApolloProvider } from "@apollo/client";
import ContextProvider from "../Context/Context";

function MyApp({ Component, pageProps, router }) {
  return (
    <div>
      <ContextProvider>
        <ApolloProvider client={client}>
          <Header />

          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>

          <Footer />
        </ApolloProvider>
      </ContextProvider>
    </div>
  );
}

export default MyApp;
//  <ApolloProvider client={client}>
// </ApolloProvider>
