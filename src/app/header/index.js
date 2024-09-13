import { closeMenuMobileOnLinkClicked } from "./closeMenuMobileOnLinkClicked";
import { toggleBlurToHeaderOnScroll } from "./toggleBlurToHeaderOnScroll";
import { toggleMenu } from "./toggleMenu";

export const handleHeaderNavMenu = () => {
  toggleMenu()
  closeMenuMobileOnLinkClicked()
  toggleBlurToHeaderOnScroll()
}