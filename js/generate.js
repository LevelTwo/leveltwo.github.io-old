// Generates body given names of people
var introPage = [
  '<!-- INTRO CARD -->',
  '<div class="mdl-cell mdl-cell--12-col mdl-intro">',
    '<div class="mdl-card mdl-shadow--2dp">',
      '<div class="mdl-card__title">',
        '<h2 class="mdl-card__title-text">The Footballer or Mathematician Challenge</h2>',
      '</div>',
      '<div class="mdl-card__supporting-text">',
        '<p>',
          'Many footballers and mathematicians share strikingly similar names!',
        '</p>',
        '<p>',
          'Still not convinced? Take this 12-question challenge and see how many you can guess right!',
        '</p>',
      '</div>',
    '</div>',
  '</div>',
  '<!-- END INTRO CARD -->'
].join('');

function cardTemplate(name, number, info) {
  return [
    '<!-- QUESTION ' + number + ' -->',
    '<div id="q' + number + '" class="mdl-cell mdl-cell--12-col mdl-text-question">',
      '<div class="mdl-card mdl-shadow--2dp">',
        '<div class="mdl-card__title mdl-card--expand">',
          '<h2 class="mdl-card__title-text">' + name + '</h2>',
        '</div>',
        '<div class="mdl-card__actions mdl-card--border">',
          '<button class="mdl-button mdl-button--colored mdl-button--question mdl-js-button mdl-button--raised">',
            '<i class="material-icons center-icon">remove</i>',
            '<span class="mdl-checkbox__label">Footballer</span>',
          '</button>',
          '<button class="mdl-button mdl-button--colored mdl-button--question mdl-js-button mdl-button--raised">',
            '<i class="material-icons center-icon">remove</i>',
            '<span class="mdl-checkbox__label">Mathematician</span>',
          '</button>',
          '<button class="mdl-button mdl-button--colored mdl-js-button mdl-more-info" style="display: none;">',
            '<span class="more-info">More Info</span>',
            '<i class="material-icons center-icon more-info-icon">expand_more</i>',
          '</button>',
        '</div>',
        '<div class="mdl-card__supporting-text more-info" style="display: none;">',
          '<p>' + info + '</p>',
        '</div>',
      '</div>',
    '</div>',
    '<!-- END QUESTION ' + number + ' -->'
  ].join('');
}

function resultTemplate(number) {
  return [
    '<div class="mdl-cell mdl-cell--4-col">',
      '<div id="q' + number + '-result" class="mdl-card mdl-shadow--2dp">',
        '<div class="mdl-card__title">',
          '<a href="#q' + number + '">',
            '<h2 class="mdl-card__title-text">Question ' + number + '<i class="material-icons center-icon result-icon">help_outline</i></h2>',
        '</div>',
      '</div>',
    '</div>'
  ].join('');
}

var resultPage = [
  '<!-- RESULTS -->',
  '<div class="mdl-cell mdl-cell--12-col mdl-results">',
    '<div class="mdl-card mdl-shadow--2dp">',
      '<div class="mdl-card__title">',
        '<h2 class="mdl-card__title-text">Results</h2>',
      '</div>',
      '<div class="mdl-card__supporting-text">',
        '<p>',
          'This is the end of the quiz.',
        '</p>',
        '<p>',
          'You have answered <span class="score">0</span> out of 12 questions and <span class="score">0</span> / <span class="answered">0</span> (<span class="score-percentage">0%</span>) of your answers are correct.',
        '</p>',
        '<p>',
          '<span class="message">Start answering the quiz questions!</span>',
        '</p>',
      '</div>',
    '</div>',
  '</div>',
  '<!-- END RESULT -->'
].join('');

var intro = $.parseHTML(introPage);
$(".mdl-grid").append(intro);

for (n = 1; n < 13; n++) {
  var name = people[n-1];
  var card = $.parseHTML(cardTemplate(name, n, getDescription(name)));
  $(".mdl-grid").append(card);
}

var results = $.parseHTML(resultPage);
$(".mdl-grid").append(results);

for (n = 1; n < 13; n++) {
  var result = $.parseHTML(resultTemplate(n));
  $(".mdl-grid").append(result);
}
