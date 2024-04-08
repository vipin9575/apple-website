import "./App.css";
import { BottomNav } from "./components/bottom-nav/BottomNav";
import { Footer } from "./components/footer/Footer";
import { MainBottom } from "./components/main/MainBottom";
import { MainTop } from "./components/main/MainTop";
import { TopNav } from "./components/top-nav/TopNav";
function App() {
  return (
    <div>
      <TopNav />
      <BottomNav />
      <MainTop />
      <MainBottom />
      <Footer />
    </div>
  );
}

export default App;
