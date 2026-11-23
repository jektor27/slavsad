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
    var diff = now - start;
    var dayOfYear = Math.floor(diff / 86400000);
    selected = quotes[dayOfYear % quotes.length];
  }

  var label = root.querySelector('[data-quote-label]');
  var quote = root.querySelector('[data-quote-text]');
  var note = root.querySelector('[data-quote-note]');

  if (label) label.textContent = 'Слово дня · ' + selected.date;
  if (quote) quote.textContent = selected.text;
  if (note) note.innerHTML = selected.note;
})();
