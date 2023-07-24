import "@/app/globals.css";
import Layout from "@/components/layout/Layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <main className=" max-w-7xl mx-auto">
          <Component {...pageProps} />
        </main>
      </Layout>
    </QueryClientProvider>
  );
}

export default MyApp;
