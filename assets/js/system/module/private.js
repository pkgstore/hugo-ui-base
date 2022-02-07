export function init() {
  private_content();
}

function private_content() {
  _event('load');
  _event('click');
}

function _event($action) {
  if ($action === 'load') {
    document.addEventListener("DOMContentLoaded", ($e) => {
      if (localStorage.getItem('private')) {
        _private('on');
        _button('on');
      } else {
        return 0;
      }
    });
  }

  if ($action === 'click') {
    document.getElementById('ext-btn-private').addEventListener('click', ($e) => {
      $e.preventDefault();
      if (localStorage.getItem('private')) {
        _private('off');
        _button('off');
      } else {
        _private('on');
        _button('on');
      }
    });
  }
}

function _private($action) {
  const $elBody = document.querySelector('body').classList;

  if ($action === 'on') {
    $elBody.replace('ext-private-disable', 'ext-private-enable');
    localStorage.setItem('private', 'enable');
  }

  if ($action === 'off') {
    $elBody.replace('ext-private-enable', 'ext-private-disable');
    localStorage.removeItem('private');
  }
}

function _button($action) {
  if ($action === 'on' && document.querySelector('#ext-btn-private .fa-eye')) {
    const $elPrivateBtn = document.querySelector('#ext-btn-private .fa-eye');

    $elPrivateBtn.classList.replace('fa-eye', 'fa-eye-slash');
  }
  if ($action === 'off' && document.querySelector('#ext-btn-private .fa-eye-slash')) {
    const $elPrivateBtn = document.querySelector('#ext-btn-private .fa-eye-slash');

    $elPrivateBtn.classList.replace('fa-eye-slash', 'fa-eye');
  }
}
