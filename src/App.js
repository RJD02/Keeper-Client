import { useState } from "react";
import { Header } from "./components/Header/Header";
import styles from "./App.module.css";
import Footer from "./components/Footer/Footer";
import Notes from "./components/Notes/Notes";
function App() {
  const [refresh, setRefresh] = useState(false);
  const refreshHandler = () => {
    setRefresh((st) => !st);
  };
  return (
    <div className={styles["app"]}>
      <Header refresh={refreshHandler} />
      <Footer />
      <Notes refresh={refresh} />
    </div>
  );
}

export default App;
