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
"timestamp": '11/08/2021 11:00 AM',
"title": 'Lệ Quyên đáp trả khi loạt "ảnh cưới" chụp với Lâm Bảo Châu bị mỉa mai "như hai mẹ con"',
"description": 'Trên trang cá nhân, Lệ Quyên chia sẻ đầy ẩn ý về loạt khoảnh khắc được dân tình xôn xao là ảnh cưới.',
"src": 'https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/3-16278737249272036986130-16286560802871304075358-1628683934743661208012.png',
"alt": 'lệ quyên,Lệ Quyên và Lâm Bảo Châu,Lệ Quyên và Lâm Bảo Châu hẹn hò,Lệ Quyên ly hôn,con trai lệ quyên,ca sĩ lệ quyên,Lâm Bảo Châu,sao hẹn hò,sao Việt,showbiz Việt,',
"category": 'life',
"date": '11/08/2021',
"time": '11:00 AM',
"link": '/le-quyen-dap-tra-khi-loat-anh-cuoi-chup-voi-lam-bao-chau-bi-mia-mai-nhu-hai-me-con',
"zcomponent": 'page_20210811110028',
"filepath": './20210811110028-le-quyen-dap-tra-khi-loat-anh-cuoi-chup-voi-lam-bao-chau-bi-mia-mai-nhu-hai-me-con.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "life";
const categoryLink = "/life";
const title =
  'Lệ Quyên đáp trả khi loạt "ảnh cưới" chụp với Lâm Bảo Châu bị mỉa mai "như hai mẹ con"';
const author = "DUN,";
const source = "Pháp luật & Bạn đọc";
const timestamp = "11/08/2021 11:00 AM";
const description =
  "Trên trang cá nhân, Lệ Quyên chia sẻ đầy ẩn ý về loạt khoảnh khắc được dân tình xôn xao là ảnh cưới.";
const link =
  "le-quyen-dap-tra-khi-loat-anh-cuoi-chup-voi-lam-bao-chau-bi-mia-mai-nhu-hai-me-con";
const tagparam = [
  "lệ quyên",
  "Lệ Quyên và Lâm Bảo Châu",
  "Lệ Quyên và Lâm Bảo Châu hẹn hò",
  "Lệ Quyên ly hôn",
  "con trai lệ quyên",
  "ca sĩ lệ quyên",
  "Lâm Bảo Châu",
  "sao hẹn hò",
  "sao Việt",
  "showbiz Việt",
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

export default function page_20210811110028() {
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
                      Cách đây không lâu, mạng xã hội rầm rộ lan truyền nhiều
                      hình ảnh được cho là ảnh cưới của Lệ Quyên và bạn trai Lâm
                      Bảo Châu. Đã có rất nhiều ý kiến trái chiều nổ ra xoay
                      quanh bộ ảnh này. Trong đó, một vài người bình luận kém
                      duyên về vẻ ngoài của cặp đôi lệch tuổi, còn thẳng thừng
                      nhận xét cả hai trông như mẹ con.
                    </p>
                    <p>
                      Ngoài ra, cộng động mạng còn bàn tán xôn xao và dự đoán
                      cặp đôi sẽ sớm về chung một nhà sau khi thực hiện ảnh
                      cưới. Tuy nhiên, hôm qua (10/8), Lệ Quyên đã có động thái
                      mới ngầm phủ nhận những thông tin trên. Theo đó, trên
                      trang cá nhân, Lệ Quyên cho đăng tải hình ảnh diện áo dài
                      được chụp tại Huế, kèm theo đó là dòng trạng thái: "Chỉ là
                      một chút bụi bám nơi vạt áo. Giống như để mưu sinh kiếm
                      miếng cơm manh áo nên ta cho phép. Hiểu không? Tặng mọi
                      người bộ áo dài tiếp theo. Hết dịch Quyên tặng trọn bộ
                      nhé. Bữa giờ không hiểu sao rò rỉ ảnh kém chất lượng, bực
                      hết cả mình". Rất có thể, những hình ảnh của Lệ Quyên và
                      Lâm Bảo Châu bị rò rỉ trước đó có thể chỉ là bộ ảnh kỷ
                      niệm, chứ không phải là ảnh cưới như mọi người suy đoán.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/11/base64-16286835205171879220166.png"
                      alt="1, lệ quyên,Lệ Quyên và Lâm Bảo Châu,Lệ Quyên và Lâm Bảo Châu hẹn hò,Lệ Quyên ly hôn,con trai lệ quyên,ca sĩ lệ quyên,Lâm Bảo Châu,sao hẹn hò,sao Việt,showbiz Việt,"
                      note="Lệ Quyên đính kèm chia sẻ đầy ẩn ý trong hình ảnh mới trên mạng xã hội"
                    />
                    <p>
                      Chia sẻ của Lệ Quyên thu hút sự chú ý của cộng đồng mạng
                      bởi lẽ trước đó, một vài netizen đã để lại bình luận kém
                      duyên về bộ ảnh bị rò rỉ. Thậm chí, có người còn thẳng
                      thừng nhận xét cả hai trông như mẹ con
                    </p>
                    <p>
                      Kể từ khi công khai mối quan hệ yêu đương, Lệ Quyên và
                      tình trẻ Lâm Bảo Châu rất tích cực phát "cẩu lương" trên
                      mạng xã hội
                    </p>
                    <RelationNewsInPage category={category} />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/1-1627873724763449127402-16286560801081874228065-16286839249732135043529.png"
                      alt="2, lệ quyên,Lệ Quyên và Lâm Bảo Châu,Lệ Quyên và Lâm Bảo Châu hẹn hò,Lệ Quyên ly hôn,con trai lệ quyên,ca sĩ lệ quyên,Lâm Bảo Châu,sao hẹn hò,sao Việt,showbiz Việt,"
                      note="Cặp đôi chị - em này được dân mạng quan tâm rất nhiều"
                    />

                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/3-16278737249272036986130-16286560802871304075358-1628683934743661208012.png"
                      alt="3, lệ quyên,Lệ Quyên và Lâm Bảo Châu,Lệ Quyên và Lâm Bảo Châu hẹn hò,Lệ Quyên ly hôn,con trai lệ quyên,ca sĩ lệ quyên,Lâm Bảo Châu,sao hẹn hò,sao Việt,showbiz Việt,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/2-16278737248741030330304-1628656080218633923643-16286839116092038973792.png"
                      alt="4, lệ quyên,Lệ Quyên và Lâm Bảo Châu,Lệ Quyên và Lâm Bảo Châu hẹn hò,Lệ Quyên ly hôn,con trai lệ quyên,ca sĩ lệ quyên,Lâm Bảo Châu,sao hẹn hò,sao Việt,showbiz Việt,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/4-1627873724964639807206-1628656080369894469058-16286838984091008898603.png"
                      alt="5, lệ quyên,Lệ Quyên và Lâm Bảo Châu,Lệ Quyên và Lâm Bảo Châu hẹn hò,Lệ Quyên ly hôn,con trai lệ quyên,ca sĩ lệ quyên,Lâm Bảo Châu,sao hẹn hò,sao Việt,showbiz Việt,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/11/167439974102216357246571034842787608660530319nxvjc-16286842298331620048544.jpg"
                      alt="6, lệ quyên,Lệ Quyên và Lâm Bảo Châu,Lệ Quyên và Lâm Bảo Châu hẹn hò,Lệ Quyên ly hôn,con trai lệ quyên,ca sĩ lệ quyên,Lâm Bảo Châu,sao hẹn hò,sao Việt,showbiz Việt,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/11/0o9a5533-5619-1611373263-1628684246619570163215.jpg"
                      alt="7, lệ quyên,Lệ Quyên và Lâm Bảo Châu,Lệ Quyên và Lâm Bảo Châu hẹn hò,Lệ Quyên ly hôn,con trai lệ quyên,ca sĩ lệ quyên,Lâm Bảo Châu,sao hẹn hò,sao Việt,showbiz Việt,"
                      note=""
                    />
                    <p>Ảnh: Instagram nhân vật, Sưu tầm</p>
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
