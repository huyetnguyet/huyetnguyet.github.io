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
"timestamp": '07/08/2021 03:44 PM',
"title": 'Dragon Ball: Dù sở hữu sức mạnh khủng nhưng 4 nhân vật này chưa từng chiến thắng ở bất kỳ cuộc chiến nào',
"description": 'Thật đáng ngạc nhiên khi có một số nhân vật chính trong Dragon Ball lại không có một chiến thắng nào xuyên suốt bộ truyện.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/8/6/anh-1-16282352607131499219046.gif',
"alt": 'DRAGON BALL,NHÂN VẬT DRAGON BALL,SON GOKU,7 VIÊN NGỌC RỒNG,',
"category": 'games',
"date": '07/08/2021',
"time": '03:44 PM',
"link": '/dragon-ball-du-so-huu-suc-manh-khung-nhung-4-nhan-vat-nay-chua-tung-chien-thang-o-bat-ky-cuoc-chien-nao',
"zcomponent": 'page_20210807154444',
"filepath": './20210807154444-dragon-ball-du-so-huu-suc-manh-khung-nhung-4-nhan-vat-nay-chua-tung-chien-thang-o-bat-ky-cuoc-chien-nao.js'
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
  "Dragon Ball: Dù sở hữu sức mạnh khủng nhưng 4 nhân vật này chưa từng chiến thắng ở bất kỳ cuộc chiến nào";
const author = "SuSu";
const source = "Trí Thức Trẻ";
const timestamp = "07/08/2021 03:44 PM";
const description =
  "Thật đáng ngạc nhiên khi có một số nhân vật chính trong Dragon Ball lại không có một chiến thắng nào xuyên suốt bộ truyện.";
const link =
  "dragon-ball-du-so-huu-suc-manh-khung-nhung-4-nhan-vat-nay-chua-tung-chien-thang-o-bat-ky-cuoc-chien-nao";
const tagparam = [
  "DRAGON BALL",
  "NHÂN VẬT DRAGON BALL",
  "SON GOKU",
  "7 VIÊN NGỌC RỒNG",
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

export default function page_20210807154444() {
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
                      Là một bộ truyện shounen nên có rất ít nhân vật trong{" "}
                      <strong>Dragon Ball</strong> có thể đi hết cả bộ truyện mà
                      không phải chiến đấu. Tuy nhiên, điều đó không có nghĩa là
                      họ giành chiến thắng. Mặc dù không có nhiều, nhưng có
                      những nhân vật thậm chí chưa bao giờ chiến thắng trong một
                      cuộc chiến thực sự.
                    </p>
                    <p>Và dưới đây chính là những nhân vật đó.</p>
                    <h5>Chiaotzu</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/6/anh-1-16282352607131499219046.gif"
                      alt="1, DRAGON BALL,NHÂN VẬT DRAGON BALL,SON GOKU,7 VIÊN NGỌC RỒNG,"
                      note=""
                    />
                    <p>
                      Là một người có siêu năng lực đặc biệt, Chiaotzu không chỉ
                      dừng lại ở việc có thể điều khiển được đồ vật, bay lượn
                      hay trù ếm đối phương khiến họ đau bụng mà cậu còn có thể
                      làm được rất nhiều thứ khác nhau. Tuy nhiên ngoài trận đấu
                      sơ bộ mà Chiaotzu cần phải thắng để tham gia Tenkaichi
                      Budokai lần thứ 22, thì cậu chưa bao giờ được cho thấy là
                      chiến thắng trong một trận đấu nghiêm túc trong toàn bộ{" "}
                      <strong>Dragon Ball</strong> .
                    </p>
                    <h5>Son Goten</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/6/anh-2-16282352607311784130068.gif"
                      alt="2, DRAGON BALL,NHÂN VẬT DRAGON BALL,SON GOKU,7 VIÊN NGỌC RỒNG,"
                      note=""
                    />
                    <p>
                      Son Goten là con trai út của Goku và Chichi, giống như anh
                      trai Gohan là đời lai giữa người trái đất và người Saiyan.
                      Chính điều này khiến cậu có khả năng sức mạnh hơn người.
                      Tuy nhiên thật đáng buồn khi thật sự Goten chưa từng có
                      một chiến thắng rõ ràng.
                    </p>
                    <p>
                      Trong mọi trận chiến thực sự mà Goten tham gia (kể cả với
                      tư cách Gotenks), anh ấy đều thua. Khoảnh khắc cậu tỏa
                      sáng thực sự duy nhất là trong{" "}
                      <strong>Dragon Ball</strong> Z khi nhìn thấy Buu giết
                      Chichi và bắt đầu tập luyện nghiêm túc. Tuy nhiên, điều
                      này không ảnh hưởng gì vì Goten không bao giờ chiến đấu
                      một nhân vật khác kể từ thời điểm này.
                    </p>
                    <RelationNewsInPage category={category} />
                    <h5>Android 16</h5>
                    <p>
                      Android 16 là sản phẩm hoàn hảo của Dr. Gero tạo ra. Anh
                      ta được lập trình với mục đích tiêu diệt Goku, nhưng dường
                      như anh có thể tự thoát khỏi những gì đã lập trình sẵn để
                      hoạt động theo ý thức riêng của mình và chỉ muốn sống yên
                      lành. Android 16 có rất nhiều sức mạnh thú vị như có một
                      eyebeam laser có thể chống lại Cell, và Super Ki Explosion
                      được coi là một trong những kỹ năng nổi bật nhất của anh.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/6/anh-3-1628235260740842733367.gif"
                      alt="3, DRAGON BALL,NHÂN VẬT DRAGON BALL,SON GOKU,7 VIÊN NGỌC RỒNG,"
                      note=""
                    />
                    <p>
                      Tuy nhiên vì tính cách của mình chúng ta mới thấy Android
                      16 chiến đấu hai lần và cả hai lần chống lại Cell là hai
                      lần đều kết thúc trong thảm bại. Sau đó Android 16 đã bị
                      Perfect Cell giết chết trong Cell Games.
                    </p>
                    <h5>Future Gohan</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/6/anh-4-162823526075865461909.gif"
                      alt="4, DRAGON BALL,NHÂN VẬT DRAGON BALL,SON GOKU,7 VIÊN NGỌC RỒNG,"
                      note=""
                    />
                    <p>
                      Future Gohan chắc chắn được xem là một nhân vật rất mạnh,
                      thế nhưng quá trình xuất hiện của anh lại không mấy sáng
                      sủa. Anh dành toàn bộ cuộc đời trưởng thành của mình để
                      chiến đấu trong trận chiến thua cuộc trước hai con người
                      nhân tạo đang muốn xóa sổ toàn bộ nhân loại. Trước khi qua
                      đời, Future Gohan bị mất cánh tay và không thể chiến thắng
                      trong một trận chiến duy nhất với Android 17 và 18.
                    </p>
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
