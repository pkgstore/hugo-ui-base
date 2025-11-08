import * as clipboardCode from './modules/clipboard.code';
import * as date from './modules/date';
import * as fancybox from './modules/fancybox';
import * as modal from './modules/modal';
import * as navbar from './modules/navbar';
import * as qrcode from './modules/qrcode';
import * as search from './modules/search';
import * as select from './modules/select';
import * as share from './modules/share';
import * as tabs from './modules/tabs';
import * as tooltip from './modules/tooltip';

export function init() {
  clipboardCode.$init();
  date.$init();
  fancybox.$init();
  modal.$init();
  navbar.$init();
  qrcode.$init();
  search.$init();
  select.$init();
  share.$init();
  tabs.$init();
  tooltip.$init();
}
