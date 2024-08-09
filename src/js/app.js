/**
 * !(i)
 * The code is included in the final file only when a function is called, for example: FLSFunctions.spollers();
 * Or when the entire file is imported, for example: import "files/script.js";
 * Unused code does not end up in the final file.

 * If we want to add a module, we should uncomment it.
 */

import { SetVH } from './modules/SetVH.js';
import BaseHelpers from './helpers/BaseHelpers.js';
import HeaderBtnToggle from './modules/HeaderBtnToggle.js';
import HeaderChatBtnToggle from './modules/HeaderChatBtnToggle.js';
import { SmoothScroll } from './modules/SmoothScroll.js';
import PopupManager from './modules/PopupManager.js';
import initializeAllSliders from './modules/SwiperInit.js';
import { InitializePhoneInputs } from './modules/InputMaskTel.js';
import FaqCard from './modules/FaqCard.js';
import ChatVersionToggle from './modules/ChatVersionToggle.js';
import ChatTabs from './modules/ChatTabs.js';
import ChatTabsMobile from './modules/ChatTabsMobile.js';
import ChatMessageForm from './modules/ChatMessageForm.js';
import AddScrollClass from './modules/AddScrollClass.js';

// set vh
SetVH();

// check webp/loaded page/device type
BaseHelpers.checkWebpSupport();
BaseHelpers.addTouchClass();
BaseHelpers.addLoadedClass();

document.addEventListener('DOMContentLoaded', function() {
  // header nav mobile toggle
  new HeaderBtnToggle();
  // header chat nav mobile toggle
  new HeaderChatBtnToggle();
  // nav active anchor
  const smoothScroll = new SmoothScroll('.js-anchor', '--scroll-offset', 650);
  // modal init
  new PopupManager();
  // slider init
  initializeAllSliders();
  // faq card
  new FaqCard();
  // input mask tel
  InitializePhoneInputs('.js-input-tel');
  // chat version choose/toggle
  ChatVersionToggle();
  // chat tabs
  ChatTabs();
  // chat tabs mobile
  new ChatTabsMobile(
    '[data-tab-nav-aside]',
    '[data-tab-content-aside]',
    'is-active',
    'is-show',
    'data-tab-nav-aside',
    'data-tab-content-aside'
  );

  new ChatTabsMobile(
    '[data-subtab-nav-aside]',
    '[data-subtab-content-aside]',
    'is-active',
    'is-show',
    'data-subtab-nav-aside',
    'data-subtab-content-aside'
  );

  // chat btn-send remove disabled
  ChatMessageForm();
  // add class when scroll
  AddScrollClass();
});