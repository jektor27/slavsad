(function () {
  var quotes = [
    {
      date: '24 ноября',
      month: 11,
      day: 24,
      text: '«Ускорить ужин — удлинить жизнь»',
      note: 'Народная мудрость о тёплом ужине и мере. В статье упомянута <a href="daily/ayurveda.html">Аюрведа</a> — древняя индийская традиция о здоровье и образе жизни; мы берём её бережно, как источник представлений, а не как обещание лечения.',
      link: 'daily/shafan.html'
    },
    {
      date: '25 ноября',
      month: 11,
      day: 25,
      text: '«В добром здоровье и сухая корка на пользу, а больному и мясные щи не впрок»',
      note: 'Народная мудрость о мере, здоровье и бережном отношении к себе. <a href="daily/stroynye-nogi.html">Заметка дня</a> — о простом движении для лёгкости.',
      link: 'daily/stroynye-nogi.html'
    },
    {
      date: '28 ноября',
      month: 11,
      day: 28,
      text: '«Какая еще красота требуется, коли в цветущем здоровье.»',
      note: 'Красота начинается не с баночки, а с порядка внутри. <a href="daily/kakaya-esche-krasota.html">Заметка дня</a> — о сурковом жире, народных поверьях и бережной границе.',
      link: 'daily/kakaya-esche-krasota.html'
    },
    {
      date: '29 ноября',
      month: 11,
      day: 29,
      text: '«Сердобольный врач ухудшает страдания»',
      note: 'Старое слово о мере в заботе. В <a href="daily/serdobolnyy-vrach-med.html">заметке дня</a> — народные поверья о меди в старину, бережно и без обещаний лечения.',
      link: 'daily/serdobolnyy-vrach-med.html'
    }
  ];

  var root = document.querySelector('[data-quote-day]');
  if (!root) return;

  var now = new Date();
  var month = now.getMonth() + 1;
  var day = now.getDate();

  var selected = quotes.find(function (q) { return q.month === month && q.day === day; });
  if (!selected) {
    var start = new Date(now.getFullYear(), 0, 0);
    var dayOfYear = Math.floor((now - start) / 86400000);
    selected = quotes[dayOfYear % quotes.length];
  }

  var label = root.querySelector('[data-quote-label]');
  var quote = root.querySelector('[data-quote-text]');
  var note = root.querySelector('[data-quote-note]');

  if (label) label.textContent = 'Слово дня · ' + selected.date;
  if (quote) quote.textContent = selected.text;
  if (note) note.innerHTML = selected.note;
})();
