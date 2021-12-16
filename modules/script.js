import Funcionamento from "./funcionamento.js";
import DropdownMenu from "./dropdown-menu.js";
import ScrollAnima from "./scroll-anima.js";
import ScrollSuave from "./scroll-suave.js";
import MenuMobile from "./menu-mobile.js";
import Accordion from "./accordion.js";
import Tooltip from "./tooltip.js";
import SlideNav from "./slide.js";
import TabNav from "./tabnav.js";
import Modal from "./modal.js";

import fetchAnimais from "./fetch-animais.js";
import fetchBitcoin from "./fetch-bitcoin.js";

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav(
    '[data-tab="menu"] li',
    '[data-tab="content"] section'
);
tabNav.init();

const modal = new Modal(
    "[data-modal='abrir']",
    "[data-modal='fechar']",
    "[data-modal='container']"
);
modal.init();

const tooltip = new Tooltip("[data-tooltip]");
tooltip.init();

const scrollAnima = new ScrollAnima('[data-anime="scroll"]');
scrollAnima.init();

const dropdownMenu = new DropdownMenu("[data-dropdown]");
dropdownMenu.init();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

const funcionamento = new Funcionamento("[data-semana]", "aberto");
funcionamento.init();

const slide = new SlideNav(".slide", ".slide-wrapper");
slide.init();
slide.addControl(".custom-controls");

fetchAnimais("./animaisapi.json", ".numeros-grid");
fetchBitcoin("https://blockchain.info/ticker", ".btc-preco");
