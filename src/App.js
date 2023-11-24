import logo from "./assets/img/logo.png";
import dog from "./assets/img/dog-1.png";
import dog2 from "./assets/img/dog-2.png";
import x from "./assets/img/x.png";
import x2 from "./assets/img/x-2.png";
import tg from "./assets/img/tg.png";
import about from "./assets/img/about.png";
import home from "./assets/img/home.png";
import footerTitle from "./assets/img/footer-title.png";
import bgFooter from "./assets/img/bg-footer.png";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="relative container mx-auto px-2 lg:px-5 flex flex-col md:flex-row gap-5 justify-between items-center py-10">
        <a href="/" className="max-w-[83px]">
          <img src={logo} alt="logo" />
        </a>
        <ul className="flex gap-10 items-center text-lg">
          <li>
            <a href="/" className="transition-all hover:text-primary">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="transition-all hover:text-primary">
              Chart
            </a>
          </li>
          <li>
            <a href="#" className="transition-all hover:text-primary">
              Buy
            </a>
          </li>
          <li>
            <a href="#" className="transition-all hover:text-primary">
              How to buy
            </a>
          </li>
        </ul>

        <ul className="flex gap-5 items-center">
          <li>
            <a
              href="https://t.me/BabyMyroTG"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10"
            >
              <img alt="telegram" src={tg} />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/BabyMyroX"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10"
            >
              <img alt="x" src={x} />
            </a>
          </li>
        </ul>
      </header>

      <main>
        <section className="relative py-10 container mx-auto px-2 lg:px-5 text-center flex flex-col items-center">
          <h1 className="relative text-3xl md:text-4xl font-bold">
            The son of Myro the dog
          </h1>

          <div className="max-w-xl lg:max-w-2xl mx-auto mt-12">
            <img alt="dog" src={dog} />
          </div>

          <a className="absolute bottom-32 lg:bottom-52 btn-gradient w-fit mx-auto px-10 py-3 rounded-full font-bold transition-all hover:opacity-75">
            Buy $BABYMYRO
          </a>
        </section>

        <section id="about" className="py-20 container mx-auto px-2 lg:px-5">
          <h2 className="text-4xl lg:text-5xl font-bold text-center">
            About Myro’s Son
          </h2>
          <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-5 mt-10">
            <p className="max-w-lg leading-relaxed text-lg text-center lg:text-left">
              Baby Myro, the offspring of Myro, is an adorable decentralized
              cryptocurrency riding on the Solana blockchain. This tiny tot is
              part of a community-driven initiative with a mission to infuse
              accessibility and joy into the world of cryptocurrency.
              <br />
              <br />
              Baby Myro isn't just a digital currency; it's a little revolution
              in the making. We firmly believe in the transformative power of
              cryptocurrency and are dedicated to creating a world where it's
              not only accessible but also delightful for everyone, even our
              tiniest enthusiasts.
            </p>
            <div className="max-w-sm">
              <img src={about} alt="about" />
            </div>
          </div>
        </section>

        <section
          id="tokenomics"
          className="py-20 container mx-auto px-2 lg:px-5"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-center">
            Tokenomics
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
            <div className="box-gradient-wrapper rounded-xl">
              <div className="box-gradient px-5 py-8 rounded-xl">
                <h3 className="font-bold text-2xl mb-4">Symbol</h3>
                <span className="text-xl">$BABYMYRO</span>
              </div>
            </div>
            <div className="box-gradient-wrapper rounded-xl">
              <div className="box-gradient px-5 py-8 rounded-xl">
                <h3 className="font-bold text-2xl mb-4">Tax</h3>
                <span className="text-xl">0-0</span>
              </div>
            </div>
            <div className="box-gradient-wrapper rounded-xl">
              <div className="box-gradient px-5 py-8 rounded-xl">
                <h3 className="font-bold text-2xl mb-4">Liquidity</h3>
                <span className="text-xl">$Liquidity Burnt</span>
              </div>
            </div>
          </div>

          <div className="box-gradient-wrapper rounded-xl mt-10">
            <div className="box-gradient px-10 py-5 rounded-xl flex flex-col lg:flex-row justify-between">
              <h3 className="font-bold text-xl lg:text-2xl">Contract</h3>
              <span className="text-lg lg:text-2xl">
                0x00000000000000000000
              </span>
            </div>
          </div>
        </section>

        <section id="howtobuy" className="py-20 container mx-auto px-2 lg:px-5">
          <h2 className="text-4xl lg:text-5xl font-bold text-center">
            How To Buy $BABYMYRO
          </h2>

          <p className="text-center mt-12 text-lg">
            1. Install a Phantom wallet via:{" "}
            <a
              className="transition-all hover:text-primary"
              href="https://phantom.app/"
            >
              https://phantom.app/
            </a>
            <br />
            2. Purchase $SOL and send to the wallet
            <br />
            3. Swap $SOL to $BABYMYRO on Raydium with the link below
          </p>

          <a className="box-gradient-wrapper rounded-xl mt-10 w-fit mx-auto text-center transition-all  hover:opacity-75">
            <div className="box-gradient px-10 py-4 rounded-xl flex justify-center">
              <h3 className="font-bold text-xl">Buy $BABYMYRO</h3>
            </div>
          </a>
        </section>

        <section className="py-20 container mx-auto px-2 lg:px-5">
          <div className="flex flex-col-reverse items-center lg:flex-row justify-between gap-5">
            <div className="max-w-lg">
              <h2 className="text-4xl text-center lg:text-left lg:text-5xl font-bold">
                Follow Myro’s Son for more!
              </h2>
              <ul className="flex gap-5 justify-center lg:justify-normal items-center mt-10">
                <li>
                  <a
                    className="w-16"
                    href="https://t.me/BabyMyroTG"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img alt="telegram" src={tg} />
                  </a>
                </li>
                <li>
                  <a
                    className="w-16"
                    href="https://twitter.com/BabyMyroX"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img alt="x" src={x2} />
                  </a>
                </li>
              </ul>
            </div>
            <div className="max-w-[250px] lg:max-w-xs">
              <img src={home} alt="house" />
            </div>
          </div>
        </section>
      </main>

      <footer className="pt-20 relative">
        <div className="absolute -top-20">
          <img src={bgFooter} alt="bg-footer" />
        </div>
        <div className="relative container mx-auto px-2 lg:px-5 ">
          <div className="bg-black py-10 lg:py-20 px-0 lg:px-16 rounded-tl-[120px] rounded-tr-[120px] flex flex-col lg:flex-row text-center lg:text-left gap-5 justify-between items-center">
            <div className="max-w-xs absolute left-1/2 -translate-x-1/2">
              <img src={dog2} alt="dog-2" />
            </div>
            <div className="relative flex flex-col gap-2">
              <div className="max-w-[280px]">
                <img src={footerTitle} alt="" />
              </div>
              <h3 className="text-lg font-bold text-center">
                The son of Myro the dog
              </h3>
            </div>
            <p className="max-w-xs relative">
              Baby Myro, the offspring of Myro, is an adorable decentralized
              cryptocurrency riding on the Solana blockchain.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
