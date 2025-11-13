export const $init = () => {
  $modal('.modal');
};

const $modal = ($selector) => {
  const $el = document.querySelectorAll($selector);
  const $len = $el.length;

  for (let $i = 0; $i < $len; ++$i) {
    const $modalId = '#' + $el[$i].id;
    if (window.location.href.indexOf($modalId) !== -1) {
      const $bsModal = new bootstrap.Modal($modalId);
      $bsModal.show();
    }
  }
};
