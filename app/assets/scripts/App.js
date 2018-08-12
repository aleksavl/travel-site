import MobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll";
import $ from "jquery";

const mobileMenu = new MobileMenu();
const featuresRevealOnScroll = new RevealOnScroll($(".feature-item"), "85%");
const testimonialsRevealOnScroll = new RevealOnScroll($(".testimonial"), "65%");
