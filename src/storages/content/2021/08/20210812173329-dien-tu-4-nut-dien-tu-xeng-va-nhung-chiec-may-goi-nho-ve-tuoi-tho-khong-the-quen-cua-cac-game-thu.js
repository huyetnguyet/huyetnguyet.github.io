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
"timestamp": '12/08/2021 05:33 PM',
"title": 'Điện tử 4 nút, điện tử xèng và những chiếc máy gợi nhớ về tuổi thơ không thể quên của các game thủ',
"description": 'Những chiếc máy này chắc chắn đã là một phần tuổi thơ không thể xóa nhòa đối với các game thủ thế hệ 8-9x.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/9/photo-1-1628488000334741755679.jpg',
"alt": 'GAME,GAME THỦ,TIN TỨC GAME,',
"category": 'games',
"date": '12/08/2021',
"time": '05:33 PM',
"link": '/dien-tu-4-nut-dien-tu-xeng-va-nhung-chiec-may-goi-nho-ve-tuoi-tho-khong-the-quen-cua-cac-game-thu',
"zcomponent": 'page_20210812173329',
"filepath": './20210812173329-dien-tu-4-nut-dien-tu-xeng-va-nhung-chiec-may-goi-nho-ve-tuoi-tho-khong-the-quen-cua-cac-game-thu.js'
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
  "Điện tử 4 nút, điện tử xèng và những chiếc máy gợi nhớ về tuổi thơ không thể quên của các game thủ";
const author = "Mặt Trứng";
const source = "Trí Thức Trẻ";
const timestamp = "12/08/2021 05:33 PM";
const description =
  "Những chiếc máy này chắc chắn đã là một phần tuổi thơ không thể xóa nhòa đối với các game thủ thế hệ 8-9x.";
const link =
  "dien-tu-4-nut-dien-tu-xeng-va-nhung-chiec-may-goi-nho-ve-tuoi-tho-khong-the-quen-cua-cac-game-thu";
const tagparam = ["GAME", "GAME THỦ", "TIN TỨC GAME"];
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

export default function page_20210812173329() {
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
                      Ngày nay, chơi <strong>game</strong> chưa bao giờ trở nên
                      dễ dàng như vậy. Bên cạnh việc nhà nào cũng thường có
                      riêng cho mình một dàn PC hay gặp nhiều hơn là những chiếc
                      laptop đời mới thì chỉ riêng việc sở hữu một smartphone
                      thôi, chúng ta đã có thể tận hưởng kho game một cách cực
                      kỳ thoải mái rồi. Tuy nhiên, nếu như ngược dòng thời gian
                      về khoảng hơn 20 năm trước, được chơi game đã là một niềm
                      vui cực lớn với những đứa trẻ ở thời điểm đấy rồi. Và cũng
                      chẳng có PC, smartphone xịn xò gì đâu, tất cả những thú
                      vui đều chỉ có thể được tìm thấy qua những chiếc máy điện
                      tử có phần đơn giản dưới đây.
                    </p>
                    <h5>Điện tử 4 nút</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/9/photo-1-1628487458201981311.jpg"
                      alt="1, GAME,GAME THỦ,TIN TỨC GAME,"
                      note="Điện tử 4 nút - món ăn tinh thần của không ít game thủ"
                    />
                    <p>
                      Đây có lẽ là một trong những chiếc máy huyền thoại của
                      không ít <strong>game</strong> thủ Việt đời đầu. Những
                      cuộn băng với 999 trò chơi, những chiếc tay cầm đi kèm với
                      phụ kiện là một khẩu súng. Tất cả đã làm nên tuổi thơ của
                      không biết bao nhiêu <strong>game thủ</strong>.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/9/photo-1-1628487580994224306246.jpg"
                      alt="2, GAME,GAME THỦ,TIN TỨC GAME,"
                      note="Full set phụ kiện là như thế này đây"
                    />
                    <p>
                      Cũng nhờ đó mà những "siêu phẩm" thời ấy như Ninja cứu mẹ,
                      Contra hay Rambo lùn mới xuất hiện và đi kèm với thuật ngữ
                      phá đảo nữa. Ngoài ra, các cuốn băng sở hữu nhiều trò hay
                      cũng trở nên hiếm có khó tìm mà theo như mẹo của nhiều
                      người, băng càng ít trò thì càng hay.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/9/photo-1-16284876157261380997066.jpg"
                      alt="3, GAME,GAME THỦ,TIN TỨC GAME,"
                      note="Băng 4 trò thì thường hay, hiếm"
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/9/photo-1-1628487715450686816833.jpg"
                      alt="4, GAME,GAME THỦ,TIN TỨC GAME,"
                      note="Còn tầm 77 trò thế này chỉ có lặp đi lặp lại thôi"
                    />
                    <RelationNewsInPage category={category} />
                    <h5>Điện tử xèng</h5>
                    <p>
                      Bên cạnh điện tử 4 nút, một công cụ giải trí được cho là
                      cao cấp hơn ở thời điểm ấy chính là điện tử xèng với các
                      "cỗ máy" thường được đặt ở các trung tâm giải trí, siêu
                      thị hoặc địa điểm nổi tiếng. Ở miền Bắc, nhiều người vẫn
                      thường gọi đó là điện tử Sega - mô phỏng theo tên của các
                      máy chơi <strong>game</strong> lúc bấy giờ.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/9/photo-1-1628487862789354586055.jpg"
                      alt="5, GAME,GAME THỦ,TIN TỨC GAME,"
                      note="Những chiếc máy điện tử xèng"
                    />
                    <p>
                      Đa phần chúng đều được trang trí khá hoành tráng, màu mè
                      với nhiều âm thanh vui nhộn. Kể ra, mỗi lượt chơi chỉ mất
                      từ 1-4 xéng và trị giá mỗi xèng ở thời đấy cũng chưa đắt
                      như bây giờ, chỉ khoảng 1000-2000 VNĐ mà thôi. Tuy nhiên
                      đó cũng là một khoản tiền không nhỏ với các{" "}
                      <strong>game</strong> thủ lúc bấy giờ rồi. Đua xe, bắn
                      súng đi bàn - điện tử xèng có đủ cả. Điều quan trọng là
                      bạn có tiền để chơi hay không thôi.
                    </p>
                    <h5>Nokia N-Gage</h5>
                    <p>
                      Đây có thể coi là chiếc máy có khả năng chơi{" "}
                      <strong>game</strong> phổ biến nhất ở Việt Nam thời điểm
                      sơ khai ấy - Nokia N-Gage. Những tựa game như rắn săn mồi
                      rồi sau đó là game java với đồ họa không thể "cùi bắp" hơn
                      nhưng lại mang tới sự mê mệt không hề nhỏ cho các{" "}
                      <strong>game thủ</strong> thời ấy.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/9/photo-1-1628488000334741755679.jpg"
                      alt="6, GAME,GAME THỦ,TIN TỨC GAME,"
                      note=""
                    />
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
