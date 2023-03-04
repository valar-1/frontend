import CryptoConvert from 'crypto-convert';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';


 const converter = new CryptoConvert({
  cryptoInterval: 10000, // /Crypto prices update interval in ms (default 5 seconds on Node.js & 15 seconds on Browsers)
  fiatInterval: (60 * 1e3 * 60),//Fiat prices update interval (default every 1 hour)
  calculateAverage: true,  //Calculate the average crypto price from exchanges
  binance: false,
  bitfinex: false,
  coinbase: true,
  kraken: true
});

function PlaceCard({ title, stitle, usdPrice, image, titleUrl }) {
  const [convertedPrice, setConvertedPrice] = useState([{ value: usdPrice, symbol: 'USD' }, { value: 0, symbol: 'BTC' }, { value: 0, symbol: 'ETH' }]);
  const [index, setIndex] = useState(0);
  const amountRef = useRef(null);

  useEffect(() => {
    async function convertPrice() {
      await converter.ready();
      const btcPrice = await converter.USD.BTC(usdPrice);
      const ethPrice = await converter.USD.ETH(usdPrice);
      setConvertedPrice([{ value: usdPrice, symbol: 'USD' }, { value: btcPrice, symbol: 'BTC' }, { value: ethPrice, symbol: 'ETH' }]);
    }
    convertPrice();
  }, [usdPrice]);

  useEffect(() => {
    const interval = setInterval(() => {
      const amount = amountRef.current;
      amount.classList.remove('visible');
      setTimeout(() => {
        setIndex((index + 1) % 3);
        amount.classList.add('visible');
      }, 300);
    }, 2500);

    return () => clearInterval(interval);
  }, [index]);

  function formatPrice(price) {
    if (typeof price === 'number') {
      return price.toFixed(8);
    } else {
      return price;
    }
  }

  return (
    <div className="place-card">
      <Link href={titleUrl} className="card-image-wrap">
        <div className="card-place-image">
          <img src={image} className="card-img-top" alt="Place" />
        </div>
      </Link>
      <div className="card-content">
        <Link href={titleUrl}>
          <h4 className="card-title">{title}</h4>
          <p className="card-sub">{stitle}</p>
        </Link>
        <div className="card-price">
          <span className={`card-price__amount ${index === 0 ? '' : 'visible'}`} ref={amountRef}>
            {formatPrice(convertedPrice[index].value)} {convertedPrice[index].symbol}&nbsp;
          </span>
          <span className="card-price__label">/ &nbsp;per day</span>
        </div>
      </div>
    </div>
  );
} 

export default PlaceCard;
