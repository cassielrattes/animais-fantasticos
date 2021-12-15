import ScrollSuave from "./scroll-suave.js";
import initAccordion from "./accordion.js";
import initTabNav from "./tabnav.js";
import initModal from "./modal.js";
import initTooltip from "./tooltip.js";
import initDropdownMenu from "./dropdown-menu.js";
import initMenuMobile from "./menu-mobile.js";
import initFuncionamento from "./funcionamento.js";
import initFetchAnimais from "./fetch-animais.js";
import initFetchBitcoin from "./fetch-bitcoin.js";
import initAnimacaoScroll from "./scroll-animacao.js";

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

initAccordion();
initTabNav();
initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();
initAnimacaoScroll();
