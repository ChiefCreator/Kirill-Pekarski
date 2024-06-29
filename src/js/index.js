import animateLogo from "./modules/animateLogo";
import buttonAnimation from "./modules/buttonAnimation";
import init3DModel from "./modules/init3DModel";
import hoverPortrait from "./modules/hoverPortrait";
import animateOnScrollMainSection from "./modules/animateOnScrollMainSection";
import updateRouteLine from "./modules/updateRouteLine";
import animateOnScrollSectionAbout from "./modules/animateOnScrollSectionAbout";
import animateDate from "./modules/animateDate";

animateOnScrollMainSection();
animateOnScrollSectionAbout();
animateDate();
updateRouteLine();
hoverPortrait();
animateLogo();
buttonAnimation();
init3DModel();