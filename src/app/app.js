import { Chrome, createIcons, Github, Linkedin, Menu, Twitter, X, Youtube } from 'lucide';
import { handleHeaderNavMenu } from "./header";
import { submitFormOnClick } from './submitFormOnClick';

createIcons({ icons: { Menu, X, Github, Linkedin, Twitter, Chrome, Youtube }});

handleHeaderNavMenu();
submitFormOnClick();