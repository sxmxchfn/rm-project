import CharContainer from "./components/CharContainer";
import HeroSection from "./components/HeroSection";
function App() {
  return (
    <>
      <div className="w-full min-h-screen bg-gradient-to-br from-purple-900 via-green-900 to-black bg-[length:200%_200%] animate-[gradient_15s_ease_infinite] py-4">
        <HeroSection />
        <CharContainer />
      </div>
    </>
  );
}

export default App;
