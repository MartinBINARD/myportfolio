import { ArrowUp, Chrome, createIcons, Github, Linkedin, Menu, Twitter, X, Youtube } from 'lucide';
import { handleHeaderNavMenu } from "./header";
import { handleScroll } from './scroll';
import { submitFormOnClick } from './submitFormOnClick';
import { swipeSlidesOnPortfolio } from './swipeSlidesOnPortfolio';

createIcons({ icons: { Menu, X, Github, Linkedin, Twitter, Chrome, Youtube, ArrowUp }});

handleHeaderNavMenu();
submitFormOnClick();
handleScroll();
swipeSlidesOnPortfolio()
