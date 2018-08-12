import MobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll";
import StickyHeader from "./modules/StickyHeader";
import $ from "jquery";

const mobileMenu = new MobileMenu();
const featuresRevealOnScroll = new RevealOnScroll($(".feature-item"), "85%");
const testimonialsRevealOnScroll = new RevealOnScroll($(".testimonial"), "65%");
const stickyHeader = new StickyHeader();
