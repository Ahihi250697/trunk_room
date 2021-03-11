const { html } = require(`htm/preact`);

const h2 = (className, text) => {
  return html`
    <h2 class="style-h2 ${className}-title">
      <span class="text-title">${text}</span>
      <span class="line-under"></span>
    </h2>
  `;
};

let nofee = [
  ["home", "管理費"],
  ["peoples", "会員費"],
  ["protect", "セキュリティー関連費用"],
];

let dataUse = [
  "書類や備品などの保管",
  "季節物の衣類、\n寝具の保管と日用品",
  `意外とかさばる\n趣味の道具の保管`,
  `非常時の水・食料など\n防災用品`,
];

let lists = [
  [
    "24時間出入り自由",
    "24時間いつでも何でも出入自由です。夜間や休日でもご都合の良い時にご利用頂けます。",
  ],
  [
    "玉造駅からスグの好立地",
    "玉造駅の近隣に位置する好立地です。また、玉造筋沿いから入れますので、迷うことなくご利用頂け、どこからでもアクセス良好です。",
  ],
  [
    "警備システム完備、セキュリティ万全",
    "入口のワイヤレスカードキーと個別のルームキーで2種ロックセキュリティ万全！24時間防犯カメラ録画で警備。緊急時では警備員が駆けつけます。",
  ],
  [
    "安心・清潔に収納・保管",
    "案内型トランクルームなので湿気を防ぎカビや虫から荷物を守り、安心清潔に収納・保管頂けます。",
  ],
  [
    "駐車スペース有り",
    "トランクルームビル、入口に車を駐車可能。スムーズに荷物の出し入れができ、雨の日もらくらくです。",
  ],
  [
    "重い荷物も簡単に",
    "トランクルーム入口には台車を設置しておりますので荷物の運搬にご利用いただけます。",
  ],
];

module.exports = () => html `
    <section class="noFee">
      <div class="cm-container">
      ${h2("noFee", "３つの費用が一切不要")}
      <ul class="noFee-boxs">
        ${nofee.map(
          (list) => html`<li class="noFee-box">
            <div class="noFee-zero">
              <p class="wrapNum maker">
                <span class="yen">￥</span>
                <span class="zero">0</span>
              </p>
              <p class="notice">※注釈が入ります。注釈が入ります。</p>
            </div>
            <div class="noFee-target">
              <img src="./images/top/icon_${list[0]}.png" alt="${list[1]}" />
              <strong>${list[1]}</strong>
            </div>
          </li>`
        )}
      </ul>
      </div>
      <div class="storage">
        <figure class="Storage-img">
          <picture>
          <source media="(max-width: 767px)" srcset="./images/top/img_storage_sp.jpg" />
          <img src="./images/top/img_storage.jpg" alt="収納場所"/>
          </picture>
          
        </figure>
        <div class="storage-content">
          <p class="storage-passage">
            トランクルーム真田山は
            <br class="break-sp" />
            <span class="text-blue">安</span>
            <span class="text-blue">全</span>
            で
            <span class="text-blue">安</span>
            <span class="text-blue">心</span>
            できる
            <br />
            <span class="maker text-orange">収納場所</span>
            を提案します
          </p>
          <a href="#" class="a-default btn-oran btn-arrow">
            <span>部屋の種類と料金を見る</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27"><path id="Path_10" data-name="Path 10" d="M13.5 0A13.5 13.5 0 1027 13.5 13.5 13.5 0 0013.5 0zm6.765 13.679L13.832 19.8a1.554 1.554 0 01-2.142-2.251l2.622-2.495H8.1a1.554 1.554 0 110-3.108h6.212l-2.622-2.5A1.553 1.553 0 1113.832 7.2l6.433 6.12a.248.248 0 010 .358z" fill="#fff"/></svg>
          </a></div>
      </div>
    </section>
    <section class="useTarget">
      <div class="cm-container">
      ${h2("useTarget", "このような用途にご利用いただいております")}
        <ul class="useTarget-lists">
          ${dataUse.map(
            (text, index) => html`<li class="useTarget-list">
              <figure class="useTarget-img">
                <picture>
                  <source
                    media="(max-width:767px)"
                    srcset="./images/top/img_purposes${index + 1}_sp.jpg"
                  />
                  <img
                    class="img-default"
                    src="./images/top/img_purposes${index + 1}.jpg"
                    alt="${text}"
                  />
                </picture>
                <span class="order">0${index + 1}</span>
              </figure>
              <p class="useTarget-passage">${text}</p>
            </li>`
          )}
        </ul>
      </div>
    </section>
    <section class="sanadayama">
      <div class="cm-container">
      ${h2("sanadayama", "トランクルーム真田山について")}
      <ul class="sanadayama-lists">
        ${lists.map(
          (list, index) => html`<li class="sanadayama-list">
            <figure class="sanadayama-img">
              <img
                src="./images/top/img_Sanadayama${index + 1}.jpg"
                alt="${list[0]}"
              />
            </figure>
            <div class="sanadayama-contents">
              <h3 class="sanadayama-h3">${list[0]}</h3>
              <p class="sanadayama-passage">${list[1]}</p>
            </div>
          </li>`
        )}
      </ul>
      </div>
    </section>
    <section class="support">
    <div class="cm-container">
      <div class='support-board'>
        <h2 class="support-title">
          <img src="./images/top/icon_house.svg" alt="アイコンハウス"/>
          <span>見学予約・お問い合わせはこちらから</span>
        </h2>
        <p class="support-passage">見学のご希望やご不明点等ございましたら、\nお気軽にお問い合わせください。</p>
        <div class="support-inner">
          <div class="support-phone">
          <img class="img-default" src="./images/common/icon_phone.svg" alt="電話"/>
          <p><span class="num">06-6761-3461</span>
          <span class="text">営業時間：9:00～17:00</span>
          </p>
          </div>
          <div class="support-email">
            <a class="btn-email btn-oran a-default" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="44.422" height="31.489" viewBox="0 0 44.422 31.489">
            <path data-name="Path 2" d="M39.242 74.535H5.181A5.18 5.18 0 000 79.715v21.129a5.18 5.18 0 005.181 5.18h34.061a5.18 5.18 0 005.181-5.18V79.715a5.18 5.18 0 00-5.181-5.18zm2.707 27.7l-.986 1.168-13.81-11.266-2.139 2.035a4.145 4.145 0 01-5.606 0l-2.139-2.035-13.809 11.27-.986-1.168 12.965-11.844L2.389 78.13l.772-1.022 19.05 14.435 19.051-14.435.771 1.022-13.05 12.265z" transform="translate(0 -74.535)" fill="#fff"/>
            </svg>
              
              <span>見学予約・お申し込みはこちら</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    </section>
`;
