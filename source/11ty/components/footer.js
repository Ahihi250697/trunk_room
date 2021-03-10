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
`;