import * as tabs from './module/tabs.min';
import * as date from './module/date.min';
import * as select from './module/select.min';
import * as share from './module/share.min';
import * as qrcode from './module/qrcode.min';
import * as navbar from './module/navbar.min';
import * as site_resize from './module/site_resize.min';
import * as private_content from './module/private.min';
import * as hljs from './module/hljs.min';

import * as konami from './module/konami.min';
import * as console from './module/console.min';

export function init() {
  tabs.init();
  date.init();
  select.init();
  share.init();
  qrcode.init();
  navbar.init();
  site_resize.init();
  private_content.init();
  hljs.init();

  konami.init();
  console.init();
}
