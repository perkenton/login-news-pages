export type NewsType = {
  id: number,
  title: string,
  text: string,
  image: string,
  source: string,
}

export const news: NewsType[] = [
  {
    id: 1,
    title: 'В Китае нашли останки гигантского носорога массой в шесть слонов',
    text: 'Китайские и американские палеонтологи сделали уникальное открытие. Они обнаружили крупнейшее сухопутное млекопитающее, когда-либо ходившее по Земле.',
    image: 'https://www.ridus.ru/images/2021/6/20/1288594/in_article_370e6da1d1.jpg',
    source: 'https://www.ridus.ru/news/356561'
  },
  {
    id: 2,
    title: 'Как едят фламинго?',
    text: 'Если большинство пернатых клюют еду, наклоняя голову, то фламинго переворачивают ее, почти касаясь макушкой земли.',
    image: 'https://krasivosti.pro/uploads/posts/2021-04/thumbs/1619014147_30-krasivosti_pro-p-straus-i-flamingo-ptitsi-krasivo-foto-31.jpg',
    source: 'https://naukatehnika.com/kak-edyat-flamingo.html'
  },
  {
    id: 3,
    title: 'Птицы узнают друг у друга о неправильной еде',
    text: 'Птицы и звери не трогают ярко окрашенную добычу: ярко-красная лягушка, скорее всего, ядовита, а жёлто-красная оса может ужалить.',
    image: 'https://www.nkj.ru/upload/iblock/cb0/cb0d2787c2edb0b66a07456feddd202e.jpg',
    source: 'https://www.nkj.ru/news/41826/'
  }
]