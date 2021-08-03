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
"timestamp": '30/07/2021 12:17 PM',
"title": 'Những khung cảnh quen thuộc của game thủ Việt thời còn chưa có Internet, nhìn là thấy cả bầu trời kỷ niệm (p1)',
"description": 'Những hình ảnh đáng quý gợi về không biết bao nhiêu cảm xúc cho thế hệ các game thủ.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/7/26/photo-1-1627302216562611661450.jpg',
"alt": 'TIN TỨC GAME,GAME THỦ,GAME,',
"category": 'games',
"date": '30/07/2021',
"time": '12:17 PM',
"link": '/nhung-khung-canh-quen-thuoc-cua-game-thu-viet-thoi-con-chua-co-internet-nhin-la-thay-ca-bau-troi-ky-niem-p1',
"zcomponent": 'page_20210730121708',
"filepath": './20210730121708-nhung-khung-canh-quen-thuoc-cua-game-thu-viet-thoi-con-chua-co-internet-nhin-la-thay-ca-bau-troi-ky-niem-p1.js'
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
  "Những khung cảnh quen thuộc của game thủ Việt thời còn chưa có Internet, nhìn là thấy cả bầu trời kỷ niệm (p1)";
const author = "Mặt Trứng";
const source = "Trí Thức Trẻ";
const timestamp = "30/07/2021 12:17 PM";
const description =
  "Những hình ảnh đáng quý gợi về không biết bao nhiêu cảm xúc cho thế hệ các game thủ.";
const link =
  "nhung-khung-canh-quen-thuoc-cua-game-thu-viet-thoi-con-chua-co-internet-nhin-la-thay-ca-bau-troi-ky-niem-p1";
const tagparam = ["TIN TỨC GAME", "GAME THỦ", "GAME"];
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

export default function page_20210730121708() {
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
                      Thế hệ{" "}
                      <strong>
                        <strong>game</strong> thủ
                      </strong>{" "}
                      thời nay có vô vàn những thú vui để giải trí. Chỉ với một
                      chiếc smartphone, chúng có thể thỏa thích tìm kiếm, hòa
                      mình vào những cái tên như PUBG Mobile, Liên Quân Mobile
                      hay Free Fire. Tuy nhiên, đôi khi "dư thừa" quá lại khiến
                      chúng ta nhớ về thời xưa - về những hình ảnh, ký ức thời
                      mà làng game Việt vẫn còn sơ khai hơn bao giờ hết. Khi mà
                      Internet hay ADSL vẫn còn là thuật ngữ lạ tai, PC vẫn đang
                      cài Win98 và điện tử 4 nút là thú vui giải trí "nhà giàu"
                      của những đứa trẻ thời bấy giờ. Cùng lên chuyến xe du hành
                      thời gian và về lại làng game trong giai đoạn đấy nhé.
                    </p>
                    <p>Những hình ảnh điện tử 4 nút không thể nào quên</p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/26/photo-1-16273019836061381612534.jpg"
                      alt="1, TIN TỨC GAME,GAME THỦ,GAME,"
                      note="Trò chơi này xứng đáng được gọi là Boom Online của những năm 9x"
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/26/photo-1-16273019996021744542299.jpg"
                      alt="2, TIN TỨC GAME,GAME THỦ,GAME,"
                      note="Olympic ngay gần ta"
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/26/photo-1-16273020220621688870194.jpg"
                      alt="3, TIN TỨC GAME,GAME THỦ,GAME,"
                      note="Bóng đá chưởng"
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/26/photo-1-16273020449511568425022.jpg"
                      alt="4, TIN TỨC GAME,GAME THỦ,GAME,"
                      note="Chip và Dean này"
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/26/photo-1-1627302065472299720211.jpg"
                      alt="5, TIN TỨC GAME,GAME THỦ,GAME,"
                      note="Một trong những tựa game được đánh giá là hay nhất trên điện tử 4 nút"
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/26/photo-1-16273020890121776659172.jpg"
                      alt="6, TIN TỨC GAME,GAME THỦ,GAME,"
                      note="Trò này chắc cũng chẳng còn lạ lẫm nhỉ"
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/26/photo-1-1627302118179192862706.jpg"
                      alt="7, TIN TỨC GAME,GAME THỦ,GAME,"
                      note="Game đối kháng thời đấy đây"
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/26/photo-1-1627302134582227968297.jpg"
                      alt="8, TIN TỨC GAME,GAME THỦ,GAME,"
                      note="Cả đây nữa"
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/26/photo-1-16273021425081613114695.jpg"
                      alt="9, TIN TỨC GAME,GAME THỦ,GAME,"
                      note="Băng Ninja rùa thời ấy là vật phẩm khá hiếm"
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/26/photo-1-16273021636411086168146.jpg"
                      alt="10, TIN TỨC GAME,GAME THỦ,GAME,"
                      note="Đá bóng thường tuy không cuốn bằng đá bóng chưởng nhưng vẫn hay nhé"
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/26/photo-1-1627302182759635957462.jpg"
                      alt="11, TIN TỨC GAME,GAME THỦ,GAME,"
                      note="Còn đây là game phiêu lưu đi bàn siêu hay thời bấy giờ"
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/26/photo-1-16273022058431133461522.jpg"
                      alt="12, TIN TỨC GAME,GAME THỦ,GAME,"
                      note="Trò này nhìn quen không anh em"
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/26/photo-1-16273022389621738084992.jpg"
                      alt="14, TIN TỨC GAME,GAME THỦ,GAME,"
                      note="Megaman thời 4 nút"
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/26/photo-1-16273022929591658300786.jpg"
                      alt="15, TIN TỨC GAME,GAME THỦ,GAME,"
                      note="Trò này thì chịu, chẳng thể nhớ tên nữa"
                    />
                    <RelationNewsInPage category={category} />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/26/photo-1-16273024618951624309096.jpg"
                      alt="16, TIN TỨC GAME,GAME THỦ,GAME,"
                      note="Thời xưa chơi game nó chỉ cần như thế này thôi, móc đâu ra điều hòa với ghế gaming"
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/26/photo-1-1627303108907115438291.jpg"
                      alt="17, TIN TỨC GAME,GAME THỦ,GAME,"
                      note="PC gaming ngày xưa đây"
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/26/photo-1-1627302560893306708453.jpg"
                      alt="18, TIN TỨC GAME,GAME THỦ,GAME,"
                      note="Phần mềm diệt virus bất hủ nhé"
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/26/photo-1-1627302609852339942813.jpg"
                      alt="19, TIN TỨC GAME,GAME THỦ,GAME,"
                      note="Quán net thời đó còn phải trang bị webcam để phục vụ Yahoo nhé"
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/26/photo-1-16273026595831359367112.jpg"
                      alt="20, TIN TỨC GAME,GAME THỦ,GAME,"
                      note="Gunbound phiên bản đầu tiên"
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/26/photo-1-16273026817801656713302.jpg"
                      alt="21, TIN TỨC GAME,GAME THỦ,GAME,"
                      note="Khu rừng siêu quen thuộc"
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/26/photo-1-1627302716743535077153.jpg"
                      alt="22, TIN TỨC GAME,GAME THỦ,GAME,"
                      note="Tiền bối của Facebook Messenger đây"
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/26/photo-1-1627302759738844183932.jpg"
                      alt="23, TIN TỨC GAME,GAME THỦ,GAME,"
                      note="Đoàn thuyền thân thuộc với mọi game thủ"
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/26/photo-1-16273029437521324750232.jpg"
                      alt="24, TIN TỨC GAME,GAME THỦ,GAME,"
                      note="Màn hình default thời kỳ sau của các quán net"
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/26/photo-1-16273029222821384453693.jpg"
                      alt="25, TIN TỨC GAME,GAME THỦ,GAME,"
                      note="Anh em chơi Half Life đều phải biết ngôi nhà này"
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/26/photo-1-1627303055863674677655.jpg"
                      alt="26, TIN TỨC GAME,GAME THỦ,GAME,"
                      note="Một thú vui khác mà chỉ game thủ đời đầu mới hiểu"
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/26/photo-1-16273031919111158445829.jpg"
                      alt="27, TIN TỨC GAME,GAME THỦ,GAME,"
                      note="Đồ ăn quán net"
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/26/photo-1-1627303370542279615833.jpg"
                      alt="28, TIN TỨC GAME,GAME THỦ,GAME,"
                      note="Còn đây là kho tàng của mọi đứa trẻ ngày ấy"
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/26/photo-1-1627302216562611661450.jpg"
                      alt="29, TIN TỨC GAME,GAME THỦ,GAME,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/26/photo-1-16273023098071325391884.jpg"
                      alt="30, TIN TỨC GAME,GAME THỦ,GAME,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/26/photo-1-1627302875636230060608.jpg"
                      alt="31, TIN TỨC GAME,GAME THỦ,GAME,"
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
