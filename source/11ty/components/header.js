const { html } = require("htm/preact");

let lists = ["ホーム", "サイズ＆料金案内", "ご利用方法", "交通アクセス"];

module.exports = () => html`
  <header class="header">
    <div class="cm-container">
      <div class="header-wrap">
        <h1 class="header-logo">
          <a href="./" class="a-default a-hover">
            <span class="d-block">玉造の屋内型安心トランクルーム</span>
            <span class="d-block">トランクルーム真田山</span>
          </a>
        </h1>
        <div class="header-contact contact">
        <a href="#" class="contact-local a-default a-hover">
              <img src="./images/common/icon_local.png" alt="アクセス" />
            <span class="forSp">アクセス</span>
          </a>
          <div class="contact-phone">
            <img src="./images/common/icon_phone.png" alt="電話" height="30" />
            <span>06-6761-3461</span>
          </div>
          <a class="contact-email btn-oran a-default">
            <!-- <img src="./images/common/icon_mail.png" alt="メール" height="22" /> -->
            <figure>
            <svg xmlns="http://www.w3.org/2000/svg" width="44.422" height="31.489" viewBox="0 0 44.422 31.489"><path id="Path_2" data-name="Path 2" d="M39.242 74.535H5.181A5.18 5.18 0 000 79.715v21.129a5.18 5.18 0 005.181 5.18h34.061a5.18 5.18 0 005.181-5.18V79.715a5.18 5.18 0 00-5.181-5.18zm2.707 27.7l-.986 1.168-13.81-11.266-2.139 2.035a4.145 4.145 0 01-5.606 0l-2.139-2.035-13.809 11.27-.986-1.168 12.965-11.844L2.389 78.13l.772-1.022 19.05 14.435 19.051-14.435.771 1.022-13.05 12.265z" transform="translate(0 -74.535)" fill="#fff"/></svg>
            </figure>
            <span>見学予約・お申し込みはこちら</span>
            <span class="forSp">見学</span>
          </a>
          <div id="barNav">
          <span class="forSp"></span>
          <span class="forSp"></span>
          <span class="forSp"></span>
        </div>
        </div>
        
      </div>
      <nav class="header-nav nav">
        <ul class="nav-lists">
          ${lists.map(
            (list) =>
              html`<li class="nav-list">
                <a href="#" class="a-default">${list}</a>
              </li>`
          )}
        </ul>
      </nav>
    </div>
  </header>
`;
