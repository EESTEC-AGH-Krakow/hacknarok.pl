import LayoutWithNavbar from "./LayoutWithNavbar";
import About from "./Pages/About";
import Partners from "./Pages/Partners";
import LandingPage from "./Pages/LandingPage";
import Map from "./Pages/Map";
import Gallery from "./Pages/Gallery";
import Faq from "./Pages/Faq";

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
                    title: "Jak dojechać",
                    component: <Map />,
                },
                {
                    title: "Galeria",
                    component: <Gallery />,
                },
                {
                    title: "FAQ",
                    component: <Faq />,
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
