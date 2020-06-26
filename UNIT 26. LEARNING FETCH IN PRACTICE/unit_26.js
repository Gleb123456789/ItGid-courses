// Task 1 ============================================
/* Отправьте GET запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1. Выведите в out-1 результат. Запускаться функция должна по нажатию b-1. */

document.querySelector('.b-1').onclick = function () {
  fetch('http://getpost.itgid.info/index2.php?auth=5ADcB96BA48d3f80&action=1')
    .then(function (response) {
      return response.text();
    })
    .then(function (data) {
      document.querySelector('.out-1').innerHTML = data;
    });
};
// ваше событие здесь!!!

// Task 2 ============================================
/* Отправьте GET запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. Добавьте параметр name с вашим именем на латинице. Если все сделано верно, сервер пришлет строку hello ваше имя. Выведите в out-2 результат. Запускаться функция должна по нажатию b-2. */

document.querySelector('.b-2').onclick = function () {
  fetch('http://getpost.itgid.info/index2.php?auth=5ADcB96BA48d3f80&action=2&name=Gleb')
    .then(function (response) {
      return response.text();
    })
    .then(function (data) {
      document.querySelector('.out-2').innerHTML = data;
    });
};

// ваше событие здесь!!!

// Task 3 ============================================
/*  Отправьте GET запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел.  Выведите в out-3 результат. Запускаться функция должна по нажатию b-3. */

document.querySelector('.b-3').onclick = function () {
  fetch('http://getpost.itgid.info/index2.php?auth=5ADcB96BA48d3f80&action=3&num1=10&num2=10')
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      document.querySelector('.out-3').innerHTML = data;
    });
};

// ваше событие здесь!!!

// Task 4 ============================================
/*  Отправьте GET запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в заданном диапазоне. Не забывайте указывать параметр auth (ключ в чате).  Выведите в out-4 результат. Запускаться функция должна по нажатию b-4. */

document.querySelector('.b-4').onclick = function () {
  fetch('http://getpost.itgid.info/index2.php?auth=5ADcB96BA48d3f80&action=4&num1=10&num2=12')
    .then((response) => response.text())
    .then((data) => {
      document.querySelector('.out-4').innerHTML = data;
    });
};

// ваше событие здесь!!!

// Task 5 ============================================
/*  Отправьте GET запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5. Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-5 результат. Запускаться функция должна по нажатию b-5. */

document.querySelector('.b-5').onclick = function () {
  fetch('http://getpost.itgid.info/index2.php?auth=5ADcB96BA48d3f80&action=5')
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      document.querySelector('.out-5').innerHTML = data;
    });
};

// ваше событие здесь!!!

// Task 6 ============================================
/*  Отправьте GET запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-6 результат. Запускаться функция должна по нажатию b-6. */

document.querySelector('.b-6').onclick = function () {
  fetch('http://getpost.itgid.info/index2.php?auth=5ADcB96BA48d3f80&action=6&num1=10&num2=12')
    .then((response) => response.text())
    .then((data) => {
      document.querySelector('.out-6').innerHTML = data;
    });
};

// ваше событие здесь!!!

// Task 7 ============================================
/*  Отправьте GET запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7. Если все сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-7 результат. Запускаться функция должна по нажатию b-7. */

document.querySelector('.b-7').onclick = function () {
  fetch('http://getpost.itgid.info/index2.php?auth=5ADcB96BA48d3f80&action=7')
    .then((response) => response.text())
    .then((data) => {
      document.querySelector('.out-7').innerHTML = data;
    });
};

// ваше событие здесь!!!

// Task 8 ============================================
/* Отправьте GET запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет ваш возраст. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-8 результат. Запускаться функция должна по нажатию b-8.*/

document.querySelector('.b-8').onclick = function () {
  fetch('http://getpost.itgid.info/index2.php?auth=5ADcB96BA48d3f80&action=8&year=1991')
    .then(function (response) {
      return response.text();
    })
    .then(function (data) {
      document.querySelector('.out-8').innerHTML = data;
    });
};

// ваше событие здесь!!!

// Task 9 ============================================
/* Отправьте GET запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 9. В качестве параметра по очереди укажите m = 1, d=1, y=1. Если все сделано верно, сервер возвратит дату или месяц или год. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-9 результат. Запускаться функция должна по нажатию b-9. */

document.querySelector('.b-9').onclick = function () {
  fetch('http://getpost.itgid.info/index2.php?auth=5ADcB96BA48d3f80&action=9&m=1&d=1&y=1')
    .then(function (response) {
      return response.text();
    })
    .then(function (data) {
      document.querySelector('.out-9').innerHTML = data;
    });
};

// ваше событие здесь!!!

// Task 10 ============================================
// Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1. Если все сделано верно, сервер пришлет строку hello. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-10 результат. Запускаться функция должна по нажатию b-10.

document.querySelector('.b-10').onclick = function () {
  fetch('http://getpost.itgid.info/index2.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'auth=5ADcB96BA48d3f80&action=1',
  })
    .then(function (response) {
      return response.text();
    })
    .then(function (data) {
      document.querySelector('.out-10').innerHTML = data;
    });
};

// Task 11 ============================================
/*  Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. Добавьте параметр name с вашим именем на латинице. Если все сделано верно, сервер пришлет строку hello ваше имя. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-11 результат. Запускаться функция должна по нажатию b-11. */

document.querySelector('.b-11').onclick = function () {
  fetch('http://getpost.itgid.info/index2.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'auth=5ADcB96BA48d3f80&action=2&name=Gleb',
  })
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      document.querySelector('.out-11').innerHTML = data;
    });
};

// ваше событие здесь!!!

// Task 12 ============================================
/*  Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-12 результат. Запускаться функция должна по нажатию b-12.*/

document.querySelector('.b-12').onclick = function () {
  fetch('http://getpost.itgid.info/index2.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'auth=5ADcB96BA48d3f80&action=3&num1=10&num2=20',
  })
    .then(function (response) {
      return response.text();
    })
    .then(function (data) {
      document.querySelector('.out-12').innerHTML = data;
    });
};

// ваше событие здесь!!!

// Task 13 ============================================
/*  Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в заданном диапазоне. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-13 результат. Запускаться функция должна по нажатию b-13.*/

document.querySelector('.b-13').onclick = function () {
  fetch('http://getpost.itgid.info/index2.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'auth=5ADcB96BA48d3f80&action=4&num1=10&num2=20',
  })
    .then((response) => response.text())
    .then((data) => {
      document.querySelector('.out-13').innerHTML = data;
    });
};

// ваше событие здесь!!!

// Task 14 ============================================
/*  Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5. Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-14 результат. Запускаться функция должна по нажатию b-14.*/

document.querySelector('.b-14').onclick = function () {
  fetch('http://getpost.itgid.info/index2.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'auth=5ADcB96BA48d3f80&action=5',
  })
    .then((response) => response.text())
    .then((data) => {
      document.querySelector('.out-14').innerHTML = data;
    });
};

// ваше событие здесь!!!

// Task 15============================================
/*  Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-15 результат. Запускаться функция должна по нажатию b-15. */

document.querySelector('.b-15').onclick = function () {
  fetch('http://getpost.itgid.info/index2.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'auth=5ADcB96BA48d3f80&action=6&num1=10&num2=20',
  })
    .then((response) => response.text())
    .then((data) => {
      document.querySelector('.out-15').innerHTML = data;
    });
};

// ваше событие здесь!!!

// Task 16 ============================================
/*  Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7. Если все сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-16 результат. Запускаться функция должна по нажатию b-16. */

document.querySelector('.b-16').onclick = function () {
  fetch('http://getpost.itgid.info/index2.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'auth=5ADcB96BA48d3f80&action=7',
  })
    .then((response) => response.text())
    .then((data) => {
      document.querySelector('.out-16').innerHTML = data;
    });
};

// ваше событие здесь!!!

// Task 17 ============================================
/*  Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет ваш возраст. Не забывайте указывать параметр auth (ключ в чате).Выведите в out-17 результат. Запускаться функция должна по нажатию b-17. */

document.querySelector('.b-17').onclick = function () {
  fetch('http://getpost.itgid.info/index2.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'auth=5ADcB96BA48d3f80&action=8&year=1991',
  })
    .then((response) => response.text())
    .then((data) => {
      document.querySelector('.out-17').innerHTML = data;
    });
};

// ваше событие здесь!!!

// Task 18 ============================================
/*  Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 9. В качестве параметра по очереди укажите m = 1, d=1, y=1. Если все сделано верно, сервер возвратит дату или месяц или год. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-18 результат. Запускаться функция должна по нажатию b-18. */

document.querySelector('.b-18').onclick = function () {
  fetch('http://getpost.itgid.info/index2.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'auth=5ADcB96BA48d3f80&action=9&m=1&d=1&y=1',
  })
    .then((response) => response.text())
    .then((data) => {
      document.querySelector('.out-18').innerHTML = data;
    });
};

// ваше событие здесь!!!
