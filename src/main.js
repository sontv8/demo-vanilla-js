import Navigo from "navigo";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";

const router = new Navigo("/", {linksSelector: "a"});

const print = (content) =>{
    document.querySelector('#app').innerHTML = content.render();
};


router.on({
    "/": () => {
        // print("Home Page");
        print(HomePage);
    },
    "/about": () => {
        // print( "About Page");
        print(AboutPage);
    },
});

router.resolve();