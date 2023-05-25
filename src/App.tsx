import LayoutWithNavbar from "./LayoutWithNavbar";
import About from "./Pages/About";
import Partners from "./Pages/Partners";
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
                {
                    title: "Partnerzy",
                    component: <Partners />,
                },
            ]}
        />
    );
}

export default App;
