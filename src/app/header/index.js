import { closeMenuMobileOnLinkClicked } from "./closeMenuMobileOnLinkClicked";
import { toggleMenu } from "./toggleMenu";
export const handleHeaderNavMenu = () => {
  toggleMenu()
  closeMenuMobileOnLinkClicked()
}