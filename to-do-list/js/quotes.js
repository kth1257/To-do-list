const quotes = [
  {
    quote: "쓰러질 지 언정 무릎 꿇지 않는다.",
    author: " - 박지성",
  },
  {
    quote: "내일을 실현하는 데 유일한 한계는 오늘의 의심이다.",
    author: " - 루즈벨트",
  },
  {
    quote: "당신의 시간은 제한되어 있으니 다른 사람의 인생을 사느라 낭비하지 마라.",
    author: " - 스티브 잡스",
  },
  {
    quote: "꿈을 계속 간직하고 있으면 반드시 실현할 때가 온다.",
    author: " - 괴체",
  },
  {
    quote: "마음만을 가지고 있어서는 안된다. 반드시 실천하여야한다.",
    author: " - 이소룡",
  },
  {
    quote: "'혀'를 다스리는 것은 나지만 내뱉어진 '말'은 나를 다스린다.",
    author: " - 유재석",
  },
  {
    quote: "한번 포기하면 습관이 된다. 절대 포기하지 말아라.",
    author: " - 마이클 조던",
  },
  {
    quote: "성공은 수만 번의 실패를 감싸준다.",
    author: " - 조지 버나드 쇼",
  },
  {
    quote: "네 자신의 불행을 생각하지 않게 되는 가장 좋은 방법은 일에 몰두하는 것이다.",
    author: " - 베토벤",
  },
  {
    quote: "우리는 두려움의 홍수에 버티기 위해서 끊임없이 용기의 둑을 쌓아야 한다.",
    author: " - 마틴 루터 킹",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

// console.log(quotes[10 - 1]);
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
// Math.random은 0이상 1미만의 값을 가지기 때문에 배열의 길이 만큼 곱하고 floor로 내림해주면 10개의 배열이면 0 ~ 9까지의 값을 랜덤하게 받을 수 있다.

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author; 