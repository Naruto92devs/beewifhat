import main from './images/main.png';
import hero from './images/hero-img.png';
import twitter from './images/twitter.png';
import telegram from './images/telegram.png';
import bee from './images/bee.png';
import bee1 from './images/MAD BEE 1.png';
import btn1 from './images/btn1.png';
import about from './images/about.png';
import about_bg from './images/about bg.png';
import join from './images/join.png';
import forces1 from './images/join forces 1.png';
import token1 from './images/tokenomics 1.png';
import taxbox from './images/tax box.png';
import token from './images/tokenomics.png';
import map1 from './images/roadmap 1.png';
import group from './images/Group.png';
import gif1 from './images/1.gif';
import gif2 from './images/2.gif';
import gif3 from './images/3.gif';
import gif4 from './images/4.gif';
import gif5 from './images/5.gif';
import map_bee1 from './images/map-bee1.png';
import map_bee2 from './images/map-bee2.png';
import token_img from './images/token-img.png';
import tweet from './images/TWEETS.png';
import tweet1 from './images/tweet.png';
import tweet2 from './images/tweet1.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <section className="hero-section" id="home">
        <header className="header">
          <nav className="navbar">
            <div className="left-side-menu">
              <a href="#home">
                <img src={main} alt="logo" />
                BEE WIF HAT
              </a>
            </div>
            <div className="centr-menu">
              {/* <a href="#">
                          <img src="assets/images/facebook.png" alt="facebook">
                      </a> */}
              <a href="/" target="_blank">
                <img src={twitter} alt="twitter" />
              </a>
              <a href="/" target="_blank">
                <img src={telegram} alt="telegram" />
              </a>
            </div>
            <div className="navbar-toggle">
              <span />
              <span />
              <span />
            </div>
          </nav>
        </header>
        <img className="madbee" src={bee1} alt="logo" />
        <a href="/" className="btn">
          <img src={btn1} alt="btn" />
          <li>Buy Now</li>
        </a>
        <img className="main" src={hero} alt="logo" />
        <img className="bee-image" src={bee} alt="logo" />
      </section>
      <div className="about" id="about">
        <img className='gif1' src={gif1} alt='logo' />
        <img className="heading" src={about} alt="logo" />
        <div className="content">
          <p>
            Hey there, fellow memelords and investors! Welcome to Bee Wif Hat, the wildest ride in the Memecoin universe. We're here to make you laugh, and oh boy, make you rich too!
          </p>
          <p>
            Why choose boring old investments when you can join the Bee Wif Hat revolution? 
          </p>
          <img className="about-bg" src={about_bg} alt="logo" />
          <a href="/" className="btn">
            <img src={btn1} alt="btn" />
            <li>JOIN TELEGRAM</li>
          </a>
        </div>
        {/* <div className="row">
          <div className="box">
            <img src="assets/images/box1.png" alt="logo" />
            <h2>Memes + Money = Magic</h2>
            <p>
              We've cracked the code, folks! Mad Bee combines the power of memes and
              honey to create pure magic. Join the hottest memes and watch your
              tokens go from "meh" to "yeah!"
            </p>
          </div>
          <div className="box">
            <img src="assets/images/box2.png" alt="logo" />
            <h2>Community of Champions</h2>
            <p>
              At Mad Bee, it's all about the fam. Our community is packed with
              memeing experts, financial wizards, and passionate crypto enthusiasts
              hyped up on memes. Join the party, share epic memes, and become part
              of a movement that will make you say, "This is where I belong!
            </p>
          </div>
        </div>
        <div className="row">
          <div className="box">
            <img src="assets/images/box3.png" alt="logo" />
            <h2>Haters Gonna Hate, Zap Gonna Zap</h2>
            <p>
              We're not here to play nice, we're here to dominate. With our verified
              smart contracts and liquidity locked, we're ready to mad away any
              doubts or worries.
            </p>
          </div>
          <div className="box">
            <img src="assets/images/box2.png" alt="logo" />
            <h2>Moonshot Profits</h2>
            <p>
              Howl at the moon with joy because Mad Bee’s got your back. Our team of
              memeologists scours the internet depths for the next big thing, the
              "can't-stop-sharing" meme! Get ready to ride the wave of viral
              sensations and make it rain!
            </p>
          </div>
        </div>
        <p className="claim">
          Disclaimer: Memecoin investing is a wild and exciting adventure, but it
          carries risks. Always do your research, consult with financial wizards,
          and only invest what you're willing to lose. Stay meme-savvy and ride the
          meme wave with caution. Mad Bee takes no responsibility for excessive
          meme-induced laughter, any losses or unexpected riches. Let the memes be
          with you!
        </p> */}
      </div>
      <div className="join" id="join">
        <div className="left">
          <img src={join} alt="logo" />
        </div>
          <img className="mene" src={gif2} alt="logo" />
        <div className="right">
          <img className="img" src={forces1} alt="logo" />
          <p>
          It's time to join forces with Bee Wif Hat and unleash the meme magic like never before. Get ready for wild gains, gut-busting laughter, and a journey that'll have you saying, "I can't believe I invested in something this awesome!" Don't miss out on the fun and mad your way to meme greatness now!
          </p>
          <a href="/" className="btn">
            <img src={btn1} alt="btn" />
            <li>JOIN TELEGRAM</li>
          </a>
        </div>
      </div>
      <section className='tweets'>
        <img className="heading" src={tweet} alt="logo" />
        <img className="gif3" src={gif3} alt="logo" />
        <div className='content'>
          <img src={tweet1} alt="logo" />
          <img src={tweet2} alt="logo" />
        </div>
        
      </section>
      <section className="tokenomics" id="token">
      <img className="gif4" src={gif4} alt="logo" />
      <img className="token-img" src={token_img} alt="logo" />
        <div className="left">
          <img className="img" src={token1} alt="logo" />
          <h3>1.000.000.000  - Total Supply</h3>
          <a href="/" className="btn">
            <img src={taxbox} alt="tax" />
            <li>1% TAX</li>
          </a>
          <ul>
            <li>Name : Bee Wif Hat </li>
            <li>Ticker : ERIC</li>
          </ul>
        </div>
        <div className="right">
          <img src={token} alt="tokenomics" />
        </div>
      </section>
      <div className="map" id="map">
        <img className="img" src={map1} alt="logo" />
        <img className="gif5" src={gif5} alt="logo" />
        <img className="map_bee1" src={map_bee1} alt="logo" />
        <img className="map_bee2" src={map_bee2} alt="logo" />
        <p>Welcome to the Memecoin Roadmap of Epicness!</p>
        <div className="row">
          <div className="left">
            <img src={group} alt="logo" />
            <h3>The Launch 🚀</h3>
            <ul>
              <li>
                {" "}
                We unleash Bee Wif Hat to the world, creating a buzz that's louder than a thousand memes combined.
              </li>
              <li>
                {" "}
                Memelords gather, investors unite, and our community starts expanding faster than a meme goes viral.
              </li>
              <li>
              We'll announce our audited smart contracts, putting any doubts to rest, and paving the way for meme-filled success.
              </li>
            </ul>
          </div>
          <div className="left">
            <img src={group} alt="logo" />
            <h3>Memetic Expansion 🌐</h3>
            <ul>
              <li>
                {" "}
                We'll collaborate with top meme experts, creating partnerships that'll make our meme arsenal unstoppable.
              </li>
              <li>
                {" "}
                The Bee Wif Hat community becomes a meme hub, sharing laughs, viral sensations, and epic moments of memetic brilliance.
              </li>
              <li>
                {" "}
                We embark on a mission to conquer social media platforms, spreading Bee Wif Hat memes far and wide, ensuring that no corner of the internet remains untouched.
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="left">
            <img src={group} alt="logo" />
            <h3>Memecoin Takeover 💰</h3>
            <ul>
              <li>
              Strategic exchanges list Bee Wif Hat, opening up new avenues for memelords and investors to dive headfirst into the action.
              </li>
              <li>
              Our meme magic attracts big-league investors, fueling Bee Wif Hat’s growth and catapulting it to new heights.
              </li>
              <li>
              We launch innovative features, like meme NFTs and meme-based games, creating a memecoin empire that'll make others go "Wow, much innovation."
              </li>
            </ul>
          </div>
          <div className="left">
            <img src={group} alt="logo" />
            <h3>World Domination 🌍</h3>
            <ul>
              <li>
                {" "}
                Memes take over the real world as Bee Wif Hat becomes a household name, gracing billboards, advertisements, & the dreams of memelords everywhere.
              </li>
              <li>
              Bee Wif Hat hosts epic meme competitions, rewarding the dankest memes with sky-high prizes, leaving the world in awe of our memetic genius.
              </li>
              <li>
              We solidify partnerships with meme celebrities & influencers, joining forces to bring memes & money to the masses, while wearing shades and laughing all the way to the bank.
              </li>
            </ul>
          </div>
        </div>
        <div className="claim">
        *Disclaimer: This roadmap is a memetic creation designed purely for the purpose of humor and entertainment. While we strive to make dreams come true, actual results may vary. Remember, invest responsibly, stay meme-savvy, and don't forget to laugh along the way!
        </div>
      </div>
      <div className="wrapper">
        <footer className="footer">
          <header className="header">
            <nav className="navbar">
              <div className="left-side-menu">
                <a href="#home" className="home internal-links">
                  <img src={main} alt="logo" />
                  BEE WIF HAT
                </a>
              </div>
              <div className="center-menu">
                <a href="#about" className="tg hm1 internal-links">
                  <li>ABOUT</li>
                </a>
                <a href="#token" className="tg hm2 internal-links">
                  <li>TOKENOMICS</li>
                </a>
                <a href="#join" className="tg hm2 internal-links">
                  <li>Join Forces</li>
                </a>
                <a href="#map" className="tg hm3 internal-links">
                  <li>ROADMAP</li>
                </a>
                <div className="right-side-menu">
                  {/* <a href="#" class="link internal-links">
                                  <img src="assets/images/facebook.png" alt="facebook">
                              </a> */}
                  <a
                    href="/"
                    target="_blank"
                    className="link"
                  >
                    <img src={twitter} alt="twitter" />
                  </a>
                  <a
                    href="/"
                    target="_blank"
                    className="link"
                  >
                    <img src={telegram} alt="telegram" />
                  </a>
                </div>
              </div>
              <div className="navbar-toggle">
                <span />
                <span />
                <span />
              </div>
            </nav>
          </header>
        </footer>
        <section className="rights">
          <p>©2024 Bee Wif Hat. All rights reserved.</p>
        </section>
      </div>
    </div>
  );
}

export default App;
