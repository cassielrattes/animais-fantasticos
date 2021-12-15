import ScrollSuave from "./scroll-suave.js";
import Accordion from "./accordion.js";
import TabNav from "./tabnav.js";
import Modal from "./modal.js";
import initTooltip from "./tooltip.js";
import initDropdownMenu from "./dropdown-menu.js";
import initMenuMobile from "./menu-mobile.js";
import initFuncionamento from "./funcionamento.js";
import initFetchAnimais from "./fetch-animais.js";
import initFetchBitcoin from "./fetch-bitcoin.js";
import initAnimacaoScroll from "./scroll-animacao.js";

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

modal.toggleModal();

initTooltip();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();
initAnimacaoScroll();
