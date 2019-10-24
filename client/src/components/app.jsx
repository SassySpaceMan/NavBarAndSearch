import React from 'react';
import ReactDOM from 'react-dom';
import Topnavbar from './topnavbar.jsx';
import Search from './search.jsx'

class App extends React.Component{

  constructor() {
    super();
  }

render() {
  return (
    <div className = 'header-block'>
      <header>
      <div className='topnavcontainer'>
        <Topnavbar />
      </div>
        <div className= 'masthead'>
          <div className = 'icon'>
            <div className='logo'>
              <img src='rei-co-op-logo-white.svg' ></img>
            </div>
          <div className='searchAndNav'>
            <Search />
            <hr/>
            <nav className="RightSide">
                <ul className="SideActions">
                  <li className="action">SIGN IN
                  <span className="actionGraphics">
                    <svg className='sideGraphics' version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 6c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3m0-2c-2.764 0-5 2.238-5 5s2.236 5 5 5 5-2.238 5-5-2.236-5-5-5zM12 17c2.021 0 3.301.771 3.783 1.445-.683.26-1.969.555-3.783.555-1.984 0-3.206-.305-3.818-.542.459-.715 1.777-1.458 3.818-1.458m0-2c-3.75 0-6 2-6 4 0 1 2.25 2 6 2 3.518 0 6-1 6-2 0-2-2.354-4-6-4z"/></svg>
                    </span></li>
                  <li className="action">STORES <span className=
                  "actionGraphics" ><svg className="sideGraphics" version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 5c1.609 0 3.12.614 4.254 1.73 1.126 1.107 1.746 2.579 1.746 4.14s-.62 3.03-1.745 4.139l-4.255 4.184-4.254-4.186c-1.125-1.107-1.745-2.576-1.745-4.139s.62-3.032 1.745-4.141c1.135-1.113 2.647-1.727 4.254-1.727m0-2c-2.047 0-4.096.768-5.657 2.305-3.124 3.074-3.124 8.057 0 11.131l5.657 5.563 5.657-5.565c3.124-3.072 3.124-8.056 0-11.129-1.561-1.537-3.609-2.305-5.657-2.305zM12 8.499c.668 0 1.296.26 1.768.731.976.976.976 2.562 0 3.537-.473.472-1.1.731-1.768.731s-1.295-.26-1.768-.731c-.976-.976-.976-2.562 0-3.537.473-.471 1.101-.731 1.768-.731m0-1c-.896 0-1.792.342-2.475 1.024-1.367 1.367-1.367 3.584 0 4.951.684.684 1.578 1.024 2.475 1.024s1.792-.342 2.475-1.024c1.366-1.367 1.366-3.584 0-4.951-.683-.683-1.579-1.024-2.475-1.024z"/></svg></span></li>
                  <li class="action">CART <span  className="actionGraphics"><svg className='sideGraphics'  version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g><path d="M20.756 5.345c-.191-.219-.466-.345-.756-.345h-13.819l-.195-1.164c-.08-.482-.497-.836-.986-.836h-2.25c-.553 0-1 .447-1 1s.447 1 1 1h1.403l1.86 11.164.045.124.054.151.12.179.095.112.193.13.112.065c.116.047.238.075.367.075h11.001c.553 0 1-.447 1-1s-.447-1-1-1h-10.153l-.166-1h11.319c.498 0 .92-.366.99-.858l1-7c.041-.288-.045-.579-.234-.797zm-1.909 1.655l-.285 2h-3.562v-2h3.847zm-4.847 0v2h-3v-2h3zm0 3v2h-3v-2h3zm-4-3v2h-3l-.148.03-.338-2.03h3.486zm-2.986 3h2.986v2h-2.653l-.333-2zm7.986 2v-2h3.418l-.285 2h-3.133z"/><circle cx="8.5" cy="19.5" r="1.5"/><circle cx="17.5" cy="19.5" r="1.5"/></g></svg></span></li>
                </ul>
              </nav>
            <div className = 'bottomside'>

              <nav>
                <ul className = 'bottomList'>
                  <li className = 'categories'>Camp & Hike</li>
                  <li className = 'categories'>Climb</li>
                  <li className = 'categories'>Cycle</li>
                  <li className = 'categories'>Paddle</li>
                  <li className = 'categories'>Run</li>
                  <li className = 'categories'>Snow</li>
                  <li className = 'categories'>Travel</li>
                  <li className = 'categories'>Yoga</li>
                  <li className = 'categories'>Men</li>
                  <li className = 'categories'>Women</li>
                  <li className = 'categories'>Kids</li>
                  <li className = 'categories'>Deals</li>
                  <li className = 'categories'>More</li>
                  <li className = 'categories'>REI OUTLET</li>
                </ul>
              </nav>
            </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
  }

}

export default App
