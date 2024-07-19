import animateLogo from "./modules/animateLogo";
import buttonAnimation from "./modules/buttonAnimation";
import init3DModel from "./modules/init3DModel";
import hoverPortrait from "./modules/hoverPortrait";
import animateOnScrollMainSection from "./modules/animateOnScrollMainSection";
import updateRouteLine from "./modules/updateRouteLine";
import animateOnScrollSectionAbout from "./modules/animateOnScrollSectionAbout";
import animateDate from "./modules/animateDate";
import animateOnScrollPortfolioSection from "./modules/animateOnScrollPortfolioSection";
// import hoverCardPortfolio from "./modules/hoverCardPortfolio";
// import initSlider from "./modules/initSlider";
import animateCardPortfolioOnClick from "./modules/animateCardPortfolioOnClick";
import animateOnScrollCardPortfolio from "./modules/animateOnScrollCardPortfolio";
import animateSkillCardOnHover from "./modules/animateSkillCardOnHover";
import animateHeader from "./modules/animateHeader";
import globe from "./modules/globe";
import appearBg from "./modules/bgAppear";
import formValidation from "./modules/formValidation";
import formSend from "./modules/formSend";

formSend();
appearBg();
animateOnScrollCardPortfolio();
globe();
animateDate();
updateRouteLine();
hoverPortrait();
animateLogo();
buttonAnimation();
animateOnScrollMainSection();
animateOnScrollSectionAbout();
animateSkillCardOnHover();
animateOnScrollPortfolioSection();
animateHeader();
animateCardPortfolioOnClick();
init3DModel();