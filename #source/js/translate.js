var arrlang = {
   'eng': {
      'home': 'Home',
      'about': 'About me',
      'skills': 'Skills',
      'portfolio': 'Portfolio',
      'contacts': 'Contacts',
      'name': 'Kravchenko Vladislav',
      'spec': 'Front-end developer',
      'life-info': '21 years old, Zaporizhzhia Ukraine',
      'about1': 'Hi, my name is Vlad - front-end developer from the glorious city of Zaporozhye, Ukraine',
      'about2': 'At the moment I am studying at the 4th year at the National University "Zaporozhye Polytechnic",specializing in "Software Engineer".',
      'about3': 'I have been studying web programming for 4 months, you can familiarize yourself with my work below, the source code of the projects is published on the github in the public domain (link to my github in contacts)',
      'about4': 'Ready to develop web applications and websites with wonderful people.',
      'about5': 'In addition to the tools indicated in the skill field, I have practical skills with such tools as: Prepros, WebPack, jQuery, SQL, Gulp4, Node.js, Http, PostGreSql',
      'skills_stack': 'I work in such programs as',
      'call__to__action': ' Want to know more or just chat? You are welcome!',
      'send__massage': 'Send message',
      'social_net': 'My social network',
      'my_email': 'My email: daitevoitipozalysta@gmail.com'


   },
   'ru': {
      'home': 'Главная',
      'about': 'Обо мне',
      'skills': 'Умения',
      'portfolio': 'Портфолио',
      'contacts': 'Контакты',
      'name': 'Кравченко Владислав',
      'spec': 'Front-end разработчик',
      'life-info': '21 год, Запорожье Украина',
      'about1': 'Привет, меня зовут Влад - Front-end разработчик из славного города Запорожье, Украина',
      'about2': 'На данный момент я учусь на 4 курсе Национального университета «Запорожская политехника» по специальности "Инженер программного обеспечения"',
      'about3': 'Я изучаю веб-программирование 4 месяца, с моими работами вы можете ознакомиться ниже, исходный код проектов опубликован на github в открытом доступе (ссылка на мой github в контактах)',
      'about4': 'Готов к разработке веб-приложений и веб-сайтов с любителями своего дела.',
      'about5': 'Помимо инструментов, указанных в поле навыка, имею практические навыки работы с такими инструментами, как: Prepros, WebPack, jQuery, SQL, Gulp4, Node.js, Http, PostGreSql',
      'skills_stack': 'Имею навыки работы с такими инструментами',
      'call__to__action': 'Хочешь узнать больше или же просто пообщаться? Добро пожаловать!',
      'send__massage': 'Отправить сообщение',
      'social_net': 'Я в социальных сетях',
      'my_email': 'Моя почта: daitevoitipozalysta@gmail.com'
   }
}

$(function () {
   $('.header__content__language__item').click(function () {
      var lang = $(this).attr('id');

      $('.lang').each(function (index, item) {
         $(this).text(arrlang[lang][$(this).attr('key')]);
      });
   });
});