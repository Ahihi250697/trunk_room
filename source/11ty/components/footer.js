const { html } = require('htm/preact')

let nav = ['ホーム', 'サイズ＆料金案内', 'ご利用方法', '交通アクセス', '見学予約・お申込み', 'プライバシーポリシー', '運営会社']

module.exports = () =>html`
<div class="cm-container">
    <div class="footer-lineHead">
        <a href="./" class="a-default a-hover footer-logo">
            <span>トランクルーム真田山</span>
        </a>
        <p class="fax">〒543-0014　大阪市天王寺区玉造元町14-21</p>
        <p class="tel">TEL：06-6761-3461</p>
    </div>
    <nav class="footer-nav nav">
        <ul class="nav-lists">
            ${nav.map((text)=>html `<li class="nav-list">
                <a href="#" class="a-default a-hover">${text}</a>
            </li>
            `)}
        </ul>
    </nav>
</div>
<div class="copyright">
<div class="cm-container">
    <p>Copyright(c) トランクルーム真田山  All Rights Reserved.</p>
    </div>
</div>
<svg xmlns="http://www.w3.org/2000/svg" style="display:none" width="44.422" height="31.489" viewBox="0 0 44.422 31.489">
    <path id="icon-email" data-name="Path 2" d="M39.242 74.535H5.181A5.18 5.18 0 000 79.715v21.129a5.18 5.18 0 005.181 5.18h34.061a5.18 5.18 0 005.181-5.18V79.715a5.18 5.18 0 00-5.181-5.18zm2.707 27.7l-.986 1.168-13.81-11.266-2.139 2.035a4.145 4.145 0 01-5.606 0l-2.139-2.035-13.809 11.27-.986-1.168 12.965-11.844L2.389 78.13l.772-1.022 19.05 14.435 19.051-14.435.771 1.022-13.05 12.265z" transform="translate(0 -74.535)" fill="#fff"/>
</svg>
`;