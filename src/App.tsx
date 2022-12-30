import LayoutWithNavbar from "./LayoutWithNavbar";
import About from "./Pages/About";
import LandingPage from "./Pages/LandingPage";

function App() {
  return (
    <LayoutWithNavbar
      pages={[
        {
          title: "Strona główna",
          component: <LandingPage />,
        },
        {
          title: "O wydarzeniu",
          component: <About />,
        },
      ]}
    />
  );
}

export default App;
