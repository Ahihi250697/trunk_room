module.exports = function (path) {
  return `
        <footer class="c-footer">
            <div class="l-container">
                <div class="logo">
                    <a href="${path}"><img src="${path}images/common/logo01.svg" alt="Nihonshokuenseizo"></a>
                    <a href="${path}"><img src="${path}images/common/logo02.svg" alt="Nihonseien"></a>
                </div>
                <div class="c-footer__txt">
                    <a href="#" class="txt01">▶ 個人情報の取り扱いについて</a>
                    <p class="txt02">Copyright © Nippon Salt Manufacturing Co., Ltd. / Nihon Seien Co., Ltd. All Rights Reserved.</p>
                </div>
            </div>
            <p class="c-totop">
                <a href="#wapper"></a>
            </p>
        </footer>
    `;
};
