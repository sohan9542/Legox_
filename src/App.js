import { useState } from "react";
import logo from "./assets/logo.png";
import logob from "./assets/logo b.gif";
import home from "./assets/home.gif";
import blogo from "./assets/blogo.jpeg";
import bnb from "./assets/bnb.png";
import net from "./assets/net.png";
import tele from "./assets/tele.png";
import twitter from "./assets/twitter.png";
function App() {
  const [connect, setConnect] = useState(false);
  const [buy, setBuy] = useState(false);
  return (
    <div className="App bg-black min-h-screen flex items-center justify-center">
      <div className=" container flex items-center justify-center">
        <div className=" w-full  lg:w-1/3 text-white relative pt-28">
          <img src={logo} alt="" />
          <img src={logob} alt="" />

          {!connect ? (
            <>
              <div className=" relative mt-10">
                <img src={home} alt="" />
                <div
                  className=" absolute top-0 left-0 z-10 w-full h-full flex items-center justify-center"
                  style={{ background: "rgba(0,0,0,0.5)" }}
                >
                  <div className=" ">
                    <button
                      onClick={() => setConnect(true)}
                      className=" btn-primary"
                    >
                      Connect Wallet
                    </button>
                  </div>
                </div>
              </div>
              <div className=" w-full flex items-center justify-center">
                <img
                  src={blogo}
                  alt=""
                  className=" mt-3 w-40"
                  style={{ objectFit: "contain" }}
                />
              </div>
            </>
          ) : (
            <>
              <div className=" relative">
                <img src={bnb} alt="" className=" mt-20" />
                <div className=" absolute z-10 top-0 left-0 w-full h-full p-4">
                  <div className=" w-full flex items-center justify-between">
                    <p className=" text-pr">Contract</p>
                    <p className=" text-pr">0 BNB</p>
                  </div>
                  <div className=" w-full flex items-center justify-between pt-2">
                    <p className=" text-pr">Your Wallet</p>
                    <p className=" text-pr">0 BNB</p>
                  </div>
                  <div className=" w-full flex items-center justify-between pt-2">
                    <p className=" text-pr">Your Ghosts</p>
                    <p className=" text-pr">0</p>
                  </div>
                  <div className=" mt-8 w-full flex items-center justify-center">
                    <button className=" border-2 border-sr px-16 text_osa rounded-xl text-lg py-3 text-gray-400">
                      0 BNB
                    </button>
                  </div>
                  <div className=" mt-6 w-full flex items-center justify-center">
                    <button
                      className="  btn-primary-sm"
                      style={{
                        fontSize: "14px",
                        paddingLeft: "20px",
                        paddingRight: "20px",
                        paddingTop: "8px",
                        paddingBottom: "15px",
                      }}
                    >
                      Insert Coin
                    </button>
                  </div>
                  <div className=" w-full flex items-center justify-between pt-10">
                    <p className=" text-red-600  text_osa">Your Rewards</p>
                    <p className=" text-pr">BNB</p>
                  </div>
                  <div className=" mt-9 lg:mt-14 gap-2 w-full flex items-center justify-center">
                    <button
                      className="  btn-primary-sm"
                      style={{
                        fontSize: "12px",
                        paddingLeft: "29px",
                        paddingRight: "29px",
                        paddingTop: "8px",
                        paddingBottom: "15px",
                      }}
                    >
                      Compound
                    </button>
                    <button
                      className="  btn-primary-sm"
                      style={{
                        fontSize: "12px",
                        paddingLeft: "29px",
                        paddingRight: "29px",
                        paddingTop: "8px",
                        paddingBottom: "15px",
                      }}
                    >
                      Cash Out
                    </button>
                  </div>
                </div>
              </div>
              {buy === false && (
                <button
                  onClick={() => setBuy(true)}
                  className="  btn-primary mt-8 w-full"
                  style={{
                    fontSize: "19px",

                    paddingTop: "8px",
                    paddingBottom: "15px",
                  }}
                >
                  Buy BNB With Credit Card
                </button>
              )}
              <div
                className={
                  buy ? " custom_animation my-10" : " overflow-hidden h-0"
                }
              >
                <iframe
                  height="500"
                  title="chainbits widget"
                  src="https://buy.chainbits.com/?crypto=BNB&amp;fiat=USD&amp;amount=100"
                  frameborder={false}
                  allowtransparency
                  defaultcryptocurrency="BNB"
                  style={{ width: "100%" }}
                />
              </div>

              <div className=" rounded-3xl border-4 border-sr p-4 w-full my-10">
                <h1 className=" text-2xl text-gray-400 text-center text_osa">
                  Pac-Miner Facts
                </h1>
                <div className=" w-full flex items-center justify-between my-5">
                  <p className=" text-pr text-lg">Daily Return</p>
                  <p className=" text-red-700 text-lg">8%</p>
                </div>
                <div className=" w-full flex items-center justify-between my-5">
                  <p className=" text-pr text-lg">ROI</p>
                  <p className=" text-red-700 text-lg">2920%</p>
                </div>
                <div className=" w-full flex items-center justify-between my-5">
                  <p className=" text-pr text-lg">Dev Fees</p>
                  <p className=" text-red-700 text-lg">2.5%</p>
                </div>
              </div>
              <div className=" rounded-3xl border-4 border-sr p-4 w-full my-10">
                <h1 className=" text-2xl text-gray-400 text-center text_osa">
                  Referral Link
                </h1>
                <div className=" my-5">
                  <input
                    type="text"
                    value="https://pacminer.io/?ref=0xe781Fb1765D0129D0bF648232e32988aaFa09372"
                    className=" py-4 w-full px-3 border-2  text_osa border-sr rounded-xl outline-none bg-transparent"
                  />
                </div>
               <div className=" flex items-center justify-center my-10">
<button className=" btn-primary-sm" style={{fontSize:"14px", paddingLeft: "10px",
                        paddingRight: "10px",
                        paddingTop: "8px",
                        paddingBottom: "15px",}}>COPY LINK</button>
               </div>
               <p className=" px-2 text-pr pb-4 text-center">Earn bonus coins inserted in the miner from anyone who uses your referral link and from their own referrals</p>
               <div className=" w-full flex items-center justify-between my-1">
                  <p className=" text-red-700 text-lg">Level 1: (6%)</p>
                  <p className=" text-pr text-lg">Referral Bonus</p>
                </div>
               <div className=" w-full flex items-center justify-between my-1">
                  <p className=" text-red-700 text-lg">Level 1: (6%)</p>
                  <p className=" text-pr text-lg">Referral Bonus</p>
                </div>
               <div className=" w-full flex items-center justify-between my-1">
                  <p className=" text-red-700 text-lg">Level 1: (6%)</p>
                  <p className=" text-pr text-lg">Referral Bonus</p>
                </div>
               <div className=" w-full flex items-center justify-between my-1">
                  <p className=" text-red-700 text-lg">Level 1: (6%)</p>
                  <p className=" text-pr text-lg">Referral Bonus</p>
                </div>
              </div>
              <div className=" flex items-center justify-center gap-5 my-10">
<a href="#"><img src={net} className=" w-10" alt="" /></a>
<a href="#"><img src={tele} className=" w-10" alt="" /></a>
<a href="#"><img src={twitter} className=" w-10" alt="" /></a>
              </div>
            </>
          )}
        </div>
        {connect && (
          <button
            className=" btn-primary-sm  text-white absolute top-24 py-3 right-10 z-10"
            style={{ fontSize: "14px" }}
          >
            0
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
