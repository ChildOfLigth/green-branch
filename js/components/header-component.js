class Header extends HTMLElement {
  constructor() {
    super();

    this.currentPage = null;

    this.render();
  }

  checkCurrentPage() {
    const currentUrl = window.location.pathname;
    const navLinks = this.querySelectorAll("[data-page-name]");

    navLinks.forEach((link) => {
      const pageName = link.dataset.pageName;

      if (!pageName) return;

      const isCurrentPage =
        currentUrl === "/" && pageName === "home"
          ? true
          : currentUrl.includes(pageName);

      link.classList.toggle("active", isCurrentPage);

      if (isCurrentPage) {
        this.createdNewCurrentPage(pageName);
      }
    });
  }

  createdNewCurrentPage(pageName) {
    this.currentPage = pageName;
  }

  showMenuBurger() {
    const burgerMenu = this.querySelector(".content_burger-menu");

    if (!burgerMenu) return;

    burgerMenu.classList.add("open");
  }

  closeMenuBurger() {
    const burgerMenu = this.querySelector(".content_burger-menu");

    if (!burgerMenu) return;

    burgerMenu.classList.remove("open");
  }

  render() {
    const mediaQuery = window.matchMedia("(max-width: 740px)");

    const checkScreen = () => {
      if (mediaQuery.matches) {
        this.innerHTML = `
          <div class="header_content">
            <img
              src="/imgs/icons/Logo.svg"
              alt="logo Green Line"
              class="content_logo"
            />

            <button class="content_menu-burger">
              <span></span>
              <span></span>
              <span></span>
            </button>

            <nav class="content_burger-menu">
              <ul class="burger-menu_links">
                <li class="links_el">
                  <a
                    href="/"
                    data-page-name="home"
                  >
                    Головна
                  </a>
                </li>

                <li class="links_dropdown-list">
                  <details>
                    <summary
                      class="links_el"
                      data-page-name="equipment"
                    >
                      Техніка
                    </summary>

                    <ul class="dropdown-menu_variants">
                      <li>
                        <a href="/pages/equipment.html?type=long-sword">
                          Довгий меч
                        </a>
                      </li>

                      <li>
                        <a href="/pages/equipment.html?type=sword">
                          Меч
                        </a>
                      </li>

                      <li>
                        <a href="/pages/equipment.html?type=espada">
                          Еспада
                        </a>
                      </li>

                      <li>
                        <a href="/pages/equipment.html?type=saber">
                          Шабля
                        </a>
                      </li>

                      <li>
                        <a href="/pages/equipment.html?type=spear">
                          Спис
                        </a>
                      </li>

                      <li>
                        <a href="/pages/equipment.html?type=unarmed">
                          Бій без зброї
                        </a>
                      </li>
                    </ul>
                  </details>
                </li>

                <li class="links_el" >
                  <a
                    href="/pages/about-us.html"
                    data-page-name="about-us"
                  >
                    Про нас
                  </a>
                </li>

                <li class="links_el" >
                  <a
                    href="/pages/card-index.html"
                    data-page-name="card-index"
                  >
                    Картотека
                  </a>
                </li>

                <li class="links_el">
                  <a
                    href="/pages/blog.html"
                    data-page-name="blog"
                  >
                    Блог
                  </a>
                </li>
              </ul>

              <button class="content_close-menu" >
               <img src="/imgs/icons/close.png" alt="Close icon" />
              </button>
            </nav>
          </div>
        `;
      } else {
        this.innerHTML = `
          <div class="header_content">
            <img
              src="/imgs/icons/Logo.svg"
              alt="logo Green Line"
              class="content_logo"
            />

            <nav class="content_nav-in-pages">
              <div class="nav-in-pages_content">
                <a
                  href="/"
                  data-page-name="home"
                  class="content_link"
                >
                  Головна
                </a>

                <div class="content_dropdown-menu">
                  <details>
                    <summary
                      data-page-name="equipment"
                      class="content_link"
                    >
                      Техніка

                      <img
                        src="/imgs/icons/bottom_arrow.svg"
                        alt="."
                        class="link_arrow-ico"
                      />
                    </summary>

                    <ul class="dropdown-menu_variants">
                      <li>
                        <a href="/pages/equipment.html?type=long-sword">
                          Довгий меч
                        </a>
                      </li>

                      <li>
                        <a href="/pages/equipment.html?type=sword">
                          Меч
                        </a>
                      </li>

                      <li>
                        <a href="/pages/equipment.html?type=espada">
                          Еспада
                        </a>
                      </li>

                      <li>
                        <a href="/pages/equipment.html?type=saber">
                          Шабля
                        </a>
                      </li>

                      <li>
                        <a href="/pages/equipment.html?type=spear">
                          Спис
                        </a>
                      </li>

                      <li>
                        <a href="/pages/equipment.html?type=unarmed">
                          Бій без зброї
                        </a>
                      </li>
                    </ul>
                  </details>
                </div>

                <a
                  href="/pages/about-us.html"
                  class="content_link"
                  data-page-name="about-us"
                >
                  Про нас
                </a>

                <a
                  href="/pages/card-index.html"
                  class="content_link"
                  data-page-name="card-index"
                >
                  Картотека
                </a>

                <a
                  href="/pages/blog.html"
                  class="content_link"
                  data-page-name="blog"
                >
                  Блог
                </a>

              </div>
            </nav>

            <a
              href="https://t.me/zelenaGilkaPereplutie#"
              class="content_nav-in-telegram"
            >
              Telegram
            </a>
          </div>
        `;
      }

      this.bindEvents();
      this.checkCurrentPage();
    };

    checkScreen();

    mediaQuery.addEventListener("change", checkScreen);
  }

  bindEvents() {
    const btnOpenMenu = this.querySelector(".content_menu-burger");
    const btnCloseMenu = this.querySelector(".content_close-menu");

    if (btnOpenMenu) {
      btnOpenMenu.addEventListener("click", this.showMenuBurger.bind(this));
    }

    if(btnCloseMenu) {
      btnCloseMenu.addEventListener("click", this.closeMenuBurger.bind(this));
    }
  }
}

customElements.define("header-component", Header);
