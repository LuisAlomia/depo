import RoutesApp from "./RoutesApp";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import { DataContextProvider } from "./context/DataContext";

function App() {
  return (
    <DataContextProvider>
      <Navbar />
      <Layout>
        <RoutesApp />
      </Layout>
    </DataContextProvider>
  );
}

export default App;
