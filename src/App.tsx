import LayoutWithNavbar from "./LayoutWithNavbar";
import About from "./Pages/About";
import Partners from "./Pages/Partners";
import LandingPage from "./Pages/LandingPage";
import Map from "./Pages/Map";
import Gallery from "./Pages/Gallery";
import Faq from "./Pages/Faq";
import Contact from "./Pages/Contact";
import InfoIcon from "@mui/icons-material/Info";
import PlaceIcon from "@mui/icons-material/Place";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import QuizIcon from "@mui/icons-material/Quiz";
import HandshakeIcon from "@mui/icons-material/Handshake";
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";
import Categories from "./Pages/Categories";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <LayoutWithNavbar
            pages={[
                {
                    title: "Strona główna",
                    component: <LandingPage />,
                    icon: <HomeIcon sx={{ color: "white" }} />,
                },
                {
                    title: "O wydarzeniu",
                    component: <About />,
                    icon: <InfoIcon sx={{ color: "white" }} />,
                },
                {
                    title: "Kategorie",
                    component: <Categories />,
                    icon: <InfoIcon sx={{ color: "white" }} />,
                },
                {
                    title: "Jak dojechać",
                    component: <Map />,
                    icon: <PlaceIcon sx={{ color: "white" }} />,
                },
                {
                    title: "Galeria",
                    component: <Gallery />,
                    icon: <PhotoLibraryIcon sx={{ color: "white" }} />,
                },
                {
                    title: "FAQ",
                    component: <Faq />,
                    icon: <QuizIcon sx={{ color: "white" }} />,
                },
                {
                    title: "Partnerzy",
                    component: <Partners />,
                    icon: <HandshakeIcon sx={{ color: "white" }} />,
                },
                {
                    title: "Kontakt",
                    component: <Contact />,
                    icon: <EmailIcon sx={{ color: "white" }} />,
                },
            ]}
        />
    );
}

export default App;
