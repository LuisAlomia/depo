import RoutesApp from "./RoutesApp";
import Layout from "./shared/components/Layout";
import Navbar from "./shared/components/Navbar";

function App() {
  return (
    <>
      <Layout>
        <Navbar />
        <RoutesApp />
      </Layout>
    </>
  );
}

export default App;
