import { setActiveLinkSectionOnScroll } from "./setActiveLinkSectionOnScroll";
import { showScrollUpOnScroll } from "./showScrollUpOnScroll";

export const handleScroll = () => {
  showScrollUpOnScroll();
  setActiveLinkSectionOnScroll();
};