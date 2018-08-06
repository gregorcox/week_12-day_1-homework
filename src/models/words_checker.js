const PubSub = require('../../helpers/pub_sub.js');

const WordChecker = function () {

};

WordChecker.prototype.bindEvents = function () {
  PubSub.subscribe('InputView:text-inputted', (evt) => {
    const inputtedSentence = evt.detail;
    const result = this.numberOfWords(inputtedSentence);
    PubSub.publish('WordChecker:result', result);
  });
};

WordChecker.prototype.numberOfWords = function (sentence) {
  return sentence.split(" ").length;
};

module.exports = WordChecker;
