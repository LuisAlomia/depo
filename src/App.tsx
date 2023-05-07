import Home from "./page/home/Home";
import Layout from "./shared/components/Layout";
import Navbar from "./shared/components/Navbar";

function App() {
  return (
    <>
      <Layout>
        <Navbar />
        <Home />
      </Layout>
    </>
  );
}

export default App;
