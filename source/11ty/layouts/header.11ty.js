module.exports = function (path) {
  return `
        <header class="c-header">
            <div class="l-container">
                <div class="c-header__inner">
                    <h1 class="c-header__logo">
                        <a href="${path}"><img src="${path}images/common/logo01.svg" alt="Nihonshokuenseizo"></a>
                        <a href="${path}"><img src="${path}images/common/logo02.svg" alt="Nihonseien"></a>
                    </h1>
                    <div class="c-btn c-btn--pdf pc-only">
                        <a href="#">カタログ<br>ダウンロード</a>
                    </div>
                    <div class="c-btn c-btn--shop pc-only">
                        <a href="#">オンライン<br> ショップ</a>
                    </div>
                    <div class="c-btn c-btn--contact pc-only">
                        <a href="#">お問合せ</a>
                    </div>
                </div>
                <nav class="c-gnav">
                    <ul>
                        <li><a href="#">こだわりの“天日塩”とは</a></li>
                        <li class="over">
                            <span href="#">製品ラインナップ</span>
                            <ul class="c-gnav__sub">
                                <li>
                                    <a href="#"><span>［業務用］煎ごう塩シリーズ</span></a>
                                </li>
                                <li>
                                    <a href="#"><span>［業務用］洗浄塩シリーズ</span></a>
                                </li>
                                <li>
                                    <a href="#"><span>プロソルトシリーズ</span></a>
                                </li>
                                <li>
                                    <a href="#"><span>家庭用ソルトシリーズ</span></a>
                                </li>
                            </ul>
                        </li>
                        <li><a href="#">安心・安全の品質管理力</a></li>
                        <li><a href="#">SDGsの取り組み</a></li>
                        <li><a href="#">企業情報</a></li>
                        <!-- <li><a href="#">採用情報</a></li> -->
                    </ul>
                    <div class="c-btn c-btn--pdf">
                        <a href="#">カタログ<br>ダウンロード</a>
                    </div>
                    <div class="c-btn c-btn--shop">
                        <a href="#">オンライン<br> ショップ</a>
                    </div>
                    <div class="c-btn c-btn--contact">
                        <a href="#">お問合せ</a>
                    </div>
                </nav>
            </div>
            <label class="c-iconmenu">
				<span class="c-iconmenu__line"></span>
			</label>
        </header>`;
};
