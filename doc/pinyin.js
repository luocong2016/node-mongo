const pinyin = require('pinyin');

console.log(pinyin('厦门', {
  // 是否开启分词模式中文分词有助于极大的降低多音字问题。 但性能会极大的下降，内存也会使用更多。
  segment: true, 
}));

console.log(pinyin("厦门", {
  style: pinyin.STYLE_INITIALS,
  segment: true,
  heteronym: true
}));