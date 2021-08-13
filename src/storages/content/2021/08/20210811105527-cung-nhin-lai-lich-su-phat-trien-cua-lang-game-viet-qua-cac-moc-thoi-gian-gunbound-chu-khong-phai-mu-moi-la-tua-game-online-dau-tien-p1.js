import React from "react";
import "components/page.scss";
import { AdsHorizontal, AdsVertical } from "components/adsMethods";
import {
  RandomFeature,
  RelationNews,
  RelationNewsInPage,
} from "components/methods";

import { Content, ContentImage, FacebookShareButton } from "components/content";

import { Helmet } from "react-helmet";

/* ---------------------------------------------------------------- */

/*

 {
"timestamp": '11/08/2021 10:55 AM',
"title": 'Cùng nhìn lại lịch sử phát triển của làng game Việt qua các mốc thời gian - Gunbound chứ không phải MU mới là tựa game online đầu tiên? (p1)',
"description": 'Đây cũng là tựa game mà chẳng nhiều người nghĩ tới đã vô tình "hủy hoại" làng game Việt như thế đấy.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/6/photo-1-1628245014196765231890.jpg',
"alt": 'GAME,GAME THỦ,MU ONLINE,TIN TỨC GAME,VLTK,GUNBOUND,TS ONLINE,',
"category": 'games',
"date": '11/08/2021',
"time": '10:55 AM',
"link": '/cung-nhin-lai-lich-su-phat-trien-cua-lang-game-viet-qua-cac-moc-thoi-gian-gunbound-chu-khong-phai-mu-moi-la-tua-game-online-dau-tien-p1',
"zcomponent": 'page_20210811105527',
"filepath": './20210811105527-cung-nhin-lai-lich-su-phat-trien-cua-lang-game-viet-qua-cac-moc-thoi-gian-gunbound-chu-khong-phai-mu-moi-la-tua-game-online-dau-tien-p1.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "games";
const categoryLink = "/games";
const title =
  "Cùng nhìn lại lịch sử phát triển của làng game Việt qua các mốc thời gian - Gunbound chứ không phải MU mới là tựa game online đầu tiên? (p1)";
const author = "Mặt Trứng";
const source = "Trí Thức Trẻ";
const timestamp = "11/08/2021 10:55 AM";
const description =
  'Đây cũng là tựa game mà chẳng nhiều người nghĩ tới đã vô tình "hủy hoại" làng game Việt như thế đấy.';
const link =
  "cung-nhin-lai-lich-su-phat-trien-cua-lang-game-viet-qua-cac-moc-thoi-gian-gunbound-chu-khong-phai-mu-moi-la-tua-game-online-dau-tien-p1";
const tagparam = [
  "GAME",
  "GAME THỦ",
  "MU ONLINE",
  "TIN TỨC GAME",
  "VLTK",
  "GUNBOUND",
  "TS ONLINE",
];
const facebookLinkShare =
  "https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fhuyetnguyet.com%2F" +
  link +
  "&layout=button_count&size=small&width=77&height=20&appId";

const updatedTags = tagparam.map((tag) => {
  const link =
    "https://www.google.com/search?q=huyetnguyet+" + tag.replace(" ", "+");
  return (
    <a href={link} className="tag">
      {tag}
    </a>
  );
});

export default function page_20210811105527() {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <Content>
        <div className="page">
          <AdsVertical />
          <div className="path">
            <a href="/" className="pathName">
              home
            </a>
            <div className="pathName" style={{ color: "red" }}>
              {">"}
            </div>
            <a href={categoryLink} className="pathName">
              {category}
            </a>
          </div>
          <div className="title">
            <h1>{title}</h1>
          </div>
          <div className="info">
            <p>
              <div className="author">{author}</div> - Theo {source} |{" "}
              {timestamp}
            </p>
          </div>
          <FacebookShareButton link={facebookLinkShare} />

          <div class="containerContent">
            <AdsVertical />
            <div className="content">
              <div className="contentContainer">
                <p className="description">{description}</p>
                <RelationNews category={category} />
                <div className="contentBody">
                  <div className="contentBodyLeft">
                    <p>
                      Không thể phủ nhận rằng khi nói tới <strong>game</strong>{" "}
                      online, Việt Nam vẫn đang chỉ mới ở những bước khởi đầu
                      đầy chập chững và còn cả một chặng đường dài ở phía trước.
                      Và hãy cùng điểm lại những cột mốc phát triển quan trọng
                      của làng game Việt để xem chúng ta đã đi được tới đâu nhé.
                    </p>
                    <h5>6/2003: Dịch vụ ADSL lần đầu tiên được cung cấp</h5>
                    <p>
                      Đây có thể coi là bước ngoặt đánh dấu cho sự ra đời và
                      phát triển của làng <strong>game</strong> online Việt với
                      vô số những ứng dụng được ra mắt như Yahoo và đặc biệt
                      hơn, giúp <strong>game thủ</strong> tiếp cận dần với trào
                      lưu game online của tương lai.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/6/photo-1-1628244853412459797989.jpg"
                      alt="1, GAME,GAME THỦ,MU ONLINE,TIN TỨC GAME,VLTK,GUNBOUND,TS ONLINE,"
                      note="ADSL thời điểm đầu ở Việt Nam"
                    />
                    <p>
                      Cũng trong năm 2003, tựa <strong>game</strong> online đầu
                      tiên đã xuất hiện đó chính là MU "lậu", hay còn được biết
                      tới với nhiều cái tên như MU Việt Nam, MU Hà Nội. Mặc dù
                      được nhiều <strong>game thủ</strong> coi là huyền thoại,
                      thế nhưng tính tới nay, đây vẫn là tựa game không có bản
                      quyền. Nhưng <strong>MU Online</strong> đã đặt viên gạch
                      đầu tiên cho sự phát triển của game online và góp phần cho
                      ra đời không ít những thuật ngữ chuyên dụng như cắm chuột,
                      quẩy rồng, reset...
                    </p>

                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/6/photo-1-1628244878489341857925.jpg"
                      alt="2, GAME,GAME THỦ,MU ONLINE,TIN TỨC GAME,VLTK,GUNBOUND,TS ONLINE,"
                      note=""
                    />
                    <h5>1/2004: Gunboud ra mắt</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/6/photo-1-1628245014196765231890.jpg"
                      alt="3, GAME,GAME THỦ,MU ONLINE,TIN TỨC GAME,VLTK,GUNBOUND,TS ONLINE,"
                      note=""
                    />
                    <p>
                      {" "}
                      Có thể coi <strong>Gunbound</strong> chính là tựa{" "}
                      <strong>game</strong> online đầu tiên chính thức được ra
                      mắt tại Việt Nam. Với phong cách chơi đầy mới lạ, yêu cầu
                      cao về mặt kỹ năng nhưng nền đồ họa lại cực kỳ chibi, đáng
                      yêu, Gunbound đã không mất quá nhiều thời gian để chiếm
                      trọn tình yêu của các <strong>game thủ</strong>. Cũng từ
                      đó, thuật ngữ "gà" mới ra đời như một cách để ám chỉ các
                      game thủ yếu kém.
                    </p>
                    <RelationNewsInPage category={category} />
                    <h5>
                      Đầu năm 2005: Sự xuất hiện của tượng đài Võ Lâm Truyền Kỳ
                    </h5>

                    <p>
                      Không ai có thể phủ nhận rằng mặc dù có vô số những tên
                      tuổi đã tạo được dấu ấn sâu sắc trong lòng các{" "}
                      <strong>game</strong> thủ, thế nhưng chính Võ Lâm Truyền
                      Kỳ đã thật sự mở ra một trang mới cho làng game Việt, nơi
                      mà tất cả các <strong>game thủ</strong> đều bị cuốn hút
                      bởi phong cách game nhập vai "cày cuốc" rất mới lạ này.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/6/photo-1-1628245369049462902947.jpg"
                      alt="4, GAME,GAME THỦ,MU ONLINE,TIN TỨC GAME,VLTK,GUNBOUND,TS ONLINE,"
                      note=""
                    />
                    <p>
                      Và chính Võ Lâm Truyền Kỳ đã đặt dấu chân đầu tiên cho một
                      kỷ nguyên hưng thịnh của làng <strong>game</strong> online
                      Việt, khiến tên tuổi của nó chẳng bao giờ có thể phai mờ
                      theo thời gian. Chưa kể, sự tích và hành trình vất vả để
                      VNG đưa tựa game này về Việt Nam cũng là một trong những
                      chủ đề được nhiều <strong>game thủ</strong> nhớ mãi.
                    </p>
                    <h5>
                      5/2005: <strong>TS Online</strong> - anh cả của dòng{" "}
                      <strong>game</strong> turn-base tại Việt Nam ra đời
                    </h5>
                    <p>
                      Tới thời điểm hiện tại, không có nhiều các tựa{" "}
                      <strong>game</strong> turn-base thật sự chinh phục được{" "}
                      <strong>game thủ</strong> Việt. Thế nhưng nếu nói về tầm
                      ảnh hưởng cũng như sự yêu quý của game thủ Việt thì không
                      đâu khác, <strong>TS Online</strong> phải là cái tên được
                      nhắc tới.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/6/photo-1-1628245800980826868206.jpg"
                      alt="5, GAME,GAME THỦ,MU ONLINE,TIN TỨC GAME,VLTK,GUNBOUND,TS ONLINE,"
                      note=""
                    />
                    <p>
                      Lối chơi đơn giản, không màu mè nhưng sự kịch tính trong{" "}
                      <strong>game</strong>play và trên hết, vô số những tính
                      năng hấp dẫn đã góp phần đưa <strong>TS Online</strong> có
                      chỗ đứng trong hàng ngũ những huyền thoại như ngày hôm
                      nay.
                    </p>
                    <p>(Còn tiếp).</p>
                  </div>
                  <AdsHorizontal />
                </div>
              </div>

              <RandomFeature />

              <div className="source">Source: {source}</div>

              <FacebookShareButton link={facebookLinkShare} />

              <div className="tags">Tags: {updatedTags}</div>
            </div>
          </div>
        </div>
      </Content>
    </>
  );
}
