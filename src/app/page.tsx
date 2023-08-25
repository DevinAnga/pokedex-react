import Image from "next/image";
import bulbasaur from "./bulbasaur.png";
import ivysaur from "/ivysaur.png";
import venusaur from "/venusaur.png";
import charmander from "/charmander.png";
import charmeleon from "/charmeleon.png";
import charizard from "/charizard.png";
import squirtle from "/squirtle.png";
import wartortle from "/wartortle.png";
import blastoise from "/blastoise.png";
import caterpie from "/caterpie.png";
import metapod from "/metapod.png";
import butterfree from "/butterfree.png";
// function toggleMenu() {
//   const myLinks = document.getElementById("myLinks");
//   const navOverlay = document.getElementsByClassName("navigation-overlay")[0];
//   const body = document.getElementById("body");

//   if (myLinks.style.display === "block") {
//     myLinks.style.display = "none";
//     navOverlay.classList.add("hidden");
//     body.classList.remove("navOpened");
//   } else {
//     myLinks.style.display = "block";
//     navOverlay.classList.remove("hidden");
//     body.classList.add("navOpened");
//   }
// }

export default function Home() {
  return (
    <>
      <body id="body">
        <header className="header">
          <div className="nav-mobile">
            <a
              aria-label="Hamburger menu toggles menu"
              className="hamburger-icon icon"
              // onClick={toggleMenu}
            >
              <i className="fa fa-bars"></i>
            </a>
            <a href="#" className="login-button">
              Log In
            </a>
            <div id="myLinks" className="background-white">
              <ul className="nav-list">
                <li className="nav-list-item-red-mobile">
                  <a
                    aria-label="Return to Pokedex page here"
                    href="./index.html"
                  >
                    Pokédex
                  </a>
                </li>
                <li className="nav-list-item-orange-mobile">
                  Video Games & Apps
                </li>
                <li className="nav-list-item-yellow-mobile">
                  Trading Card Game
                </li>
                <li className="nav-list-item-green-mobile">Pokémon TV</li>
                <li className="nav-list-item-light-blue-mobile">
                  Play! Pokémon Events
                </li>
                <li className="nav-list-item-dark-blue-mobile">News</li>
              </ul>
            </div>
          </div>
          <div className="nav-desktop">
            <div className="background-white">
              <ul className="nav-list-desktop">
                <li className="nav-list-item-desktop nav-list-item-red-desktop">
                  <a
                    aria-label="Return to Pokedex page here"
                    href="./index.html"
                  >
                    Pokédex
                  </a>
                </li>
                <li className="nav-list-item-desktop nav-list-item-orange-desktop">
                  Video Games & Apps
                </li>
                <li className="nav-list-item-desktop nav-list-item-yellow-desktop">
                  Trading Card Game
                </li>
                <li className="nav-list-item-desktop nav-list-item-green-desktop">
                  Pokémon TV
                </li>
                <li className="nav-list-item-desktop nav-list-item-light-blue-desktop">
                  Play! Pokémon Events
                </li>
                <li className="nav-list-item-desktop nav-list-item-dark-blue-desktop">
                  News
                </li>
              </ul>
            </div>
          </div>
          <h3 className="pokedex-title">Pokédex</h3>
        </header>
        <section id="search-header" className="search-header">
          <div className="section">
            <div className="header-content">
              <div>
                <div className="search-container">
                  <form className="header-search-form">
                    <div>
                      <label className="header-label" htmlFor="search">
                        Name or Number
                      </label>
                    </div>
                    <div className="search-end">
                      <input
                        id="search"
                        className="search-bar"
                        type="text"
                        placeholder=""
                        name="search"
                      />
                      <button
                        type="submit"
                        className="search-button"
                        aria-label="Click to search Pokedex using input text"
                      >
                        <i className="fa fa-search"></i>
                      </button>
                    </div>
                  </form>
                  <span className="search-subtext">
                    Use the Advanced Search to explore Pokémon by type,
                    weakness, Ability, and more!
                  </span>
                </div>
              </div>
              <div>
                <span className="search-text">
                  Search for a Pokémon by name or using its National Pokémon
                  number.
                </span>
              </div>
            </div>
          </div>
        </section>
        <main id="main" className="main">
          <div className="main-content">
            <div className="section">
              <div className="drop-down-wrapper">
                <label className="drop-down-text" htmlFor="poke-search">
                  Sort By
                  <br />
                </label>
                <select
                  className="sort-select"
                  name="poke-search"
                  id="poke-search"
                >
                  <option value="lowest-number">Lowest Number (First)</option>
                  <option value="highest-number">Highest Number (First)</option>
                  <option value="A-Z">A-Z</option>
                  <option value="Z-A">Z-A</option>
                </select>
              </div>
              <div className="poke-wrapper">
                <div>
                  <Image
                    className="poke-picture"
                    src={bulbasaur}
                    alt="A happy Bulbasaur"
                  />
                  <span className="poke-number"> #0001</span>
                  <h2 className="poke-name">Bulbasaur</h2>
                  <div className="type-list-grid">
                    <ul className="type-list">
                      <li className="type-list-item grass">Grass</li>
                      <li className="type-list-item poison">Poison</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <Image
                    className="poke-picture"
                    src={ivysaur}
                    alt="A regal Ivysaur"
                  />
                  <span className="poke-number"> #0002</span>
                  <h2 className="poke-name">Ivysaur</h2>
                  <div>
                    <ul className="type-list">
                      <li className="type-list-item grass">Grass</li>
                      <li className="type-list-item poison">Poison</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <Image
                    className="poke-picture"
                    src={venusaur}
                    alt="An angry Venusaur"
                  />
                  <span className="poke-number"> #0003</span>
                  <h2 className="poke-name">Venusaur</h2>
                  <div>
                    <ul className="type-list">
                      <li className="type-list-item grass">Grass</li>
                      <li className="type-list-item poison">Poison</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <Image
                    className="poke-picture"
                    src={charmander}
                    alt="A happy Charmander"
                  />
                  <span className="poke-number"> #0004</span>
                  <h2 className="poke-name">Charmander</h2>
                  <div>
                    <ul className="type-list">
                      <li className="type-list-item fire">Fire</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <Image
                    className="poke-picture"
                    src={charmeleon}
                    alt="A regal Charmeleon"
                  />
                  <span className="poke-number"> #0005</span>
                  <h2 className="poke-name">Charmeleon</h2>
                  <div>
                    <ul className="type-list">
                      <li className="type-list-item fire">Fire</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <Image
                    className="poke-picture"
                    src={charizard}
                    alt="A Regal Charizard"
                  />
                  <span className="poke-number"> #0006</span>
                  <h2 className="poke-name">Charizard</h2>
                  <div>
                    <ul className="type-list">
                      <li className="type-list-item fire">Fire</li>
                      <li className="type-list-item flying">Flying</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <Image
                    className="poke-picture"
                    src={squirtle}
                    alt="A silly Squirtle"
                  />
                  <span className="poke-number"> #0007</span>
                  <h2 className="poke-name">Squirtle</h2>
                  <div>
                    <ul className="type-list">
                      <li className="type-list-item water">Water</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <Image
                    className="poke-picture"
                    src={wartortle}
                    alt="A squared up Wartortle"
                  />
                  <span className="poke-number"> #0008</span>
                  <h2 className="poke-name">Wartortle</h2>
                  <div>
                    <ul className="type-list">
                      <li className="type-list-item water">Water</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <Image
                    className="poke-picture"
                    src={blastoise}
                    alt="A smug Blastoise"
                  />
                  <span className="poke-number"> #0009</span>
                  <h2 className="poke-name">Blastoise</h2>
                  <div>
                    <ul className="type-list">
                      <li className="type-list-item water">Water</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <Image
                    className="poke-picture"
                    src={caterpie}
                    alt="A cute Caterpie"
                  />
                  <span className="poke-number"> #00010 </span>
                  <h2 className="poke-name">Caterpie</h2>
                  <div>
                    <ul className="type-list">
                      <li className="type-list-item bug">Bug</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <Image
                    className="poke-picture"
                    src={metapod}
                    alt="A sleepy Metapod"
                  />
                  <span className="poke-number"> #0011 </span>
                  <h2 className="poke-name">Metapod</h2>
                  <div>
                    <ul className="type-list">
                      <li className="type-list-item bug">Bug</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <Image
                    className="poke-picture"
                    src={butterfree}
                    alt="A curious Butterfree"
                  />
                  <span className="poke-number"> #0012 </span>
                  <h2 className="poke-name">Butterfree</h2>
                  <div>
                    <ul className="type-list">
                      <li className="type-list-item bug">Bug</li>
                      <li className="type-list-item flying">Flying</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="more-pokemon-button-wrapper">
                <button className="more-pokemon-button" type="button">
                  Load more Pokémon
                </button>
              </div>
            </div>
          </div>
        </main>
        <div className="navigation-overlay hidden"></div>
      </body>
    </>
  );
}
