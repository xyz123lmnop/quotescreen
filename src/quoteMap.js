import raulgonzalezQuotes from "./quotes/raulgonzalez";
import raulgonzalezImg from "./img/raulgonzalez.jpg";
import stefan11222Quotes from "./quotes/stefan11222";
import stefan11222Img from "./img/stefan11222.jpg";
import forhayleyQuotes from "./quotes/forhayley";
import forhayleyImg from "./img/forhayley.jpg";


class quoteMap {
  constructor() {
    this.quotesayers = ["raulgonzalez", "stefan11222", "forhayley"];
    this.quoteMap = {
      raulgonzalez: {
        quotes: raulgonzalezQuotes,
        img: raulgonzalezImg,
      },
      stefan11222: {
        quotes: stefan11222Quotes,
        img: stefan11222Img,
      },
      forhayley: {
        quotes: forhayleyQuotes,
        img: forhayleyImg
      }
    };
  }

  getRandomQuote() {
    const sayer = this.quotesayers[
      Math.floor(Math.random() * this.quotesayers.length)
    ];
    const quote = this.quoteMap[sayer]["quotes"][
      Math.floor(Math.random() * this.quoteMap[sayer]["quotes"].length)
    ];
    const img = this.quoteMap[sayer]["img"];
    return [quote, sayer, img];
  }

  getQuoteBySayer(sayer) {
    const quote = this.quoteMap[sayer]["quotes"][
      Math.floor(Math.random() * this.quoteMap[sayer]["quotes"].length)
    ];
    const img = this.quoteMap[sayer]["img"];
    return [quote, sayer, img];
  }
}

const qMap = new quoteMap();
export default qMap;
