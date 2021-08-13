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
"timestamp": '11/08/2021 10:50 AM',
"title": 'Nhờ Jisoo (BLACKPINK) một ứng dụng tăng 160 bậc trên App Store, nhiều người đăng kí đến nỗi đơ luôn cả app',
"description": 'Đây không phải lần đầu Jisoo khiến một ứng dụng trở nên nổi tiếng.',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/10/22955807010161020224965396189254754894077920n-1628579327444746997901.jpg',
"alt": 'gương mặt đại diện,nền tảng mới,Google Play Store,fan hâm mộ,jisoo,Celebe,Blackpink,ứng dụng,app,MXH,',
"category": 'stars',
"date": '11/08/2021',
"time": '10:50 AM',
"link": '/nho-jisoo-blackpink-mot-ung-dung-tang-160-bac-tren-app-store-nhieu-nguoi-dang-ki-den-noi-do-luon-ca-app',
"zcomponent": 'page_20210811105013',
"filepath": './20210811105013-nho-jisoo-blackpink-mot-ung-dung-tang-160-bac-tren-app-store-nhieu-nguoi-dang-ki-den-noi-do-luon-ca-app.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "stars";
const categoryLink = "/stars";
const title =
  "Nhờ Jisoo (BLACKPINK) một ứng dụng tăng 160 bậc trên App Store, nhiều người đăng kí đến nỗi đơ luôn cả app";
const author = "HẠNH KOY,";
const source = "Trí Thức Trẻ";
const timestamp = "11/08/2021 10:50 AM";
const description =
  "Đây không phải lần đầu Jisoo khiến một ứng dụng trở nên nổi tiếng.";
const link =
  "nho-jisoo-blackpink-mot-ung-dung-tang-160-bac-tren-app-store-nhieu-nguoi-dang-ki-den-noi-do-luon-ca-app";
const tagparam = [
  "gương mặt đại diện",
  "nền tảng mới",
  "Google Play Store",
  "fan hâm mộ",
  "jisoo",
  "Celebe",
  "Blackpink",
  "ứng dụng",
  "app",
  "MXH",
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

export default function page_20210811105013() {
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
                      Vào ngày 9/8, <strong>MXH</strong> <strong>CELEBe</strong>{" "}
                      đã chính thức đăng tải hình ảnh{" "}
                      <strong>gương mặt đại diện</strong> cho nền tảng này. Rất
                      nhanh chóng, các hình ảnh của <strong>Jisoo</strong> đã
                      tràn ngập trên MXH này khiến fan ồ ạt tải về làm{" "}
                      <strong>ứng dụng</strong> bị lag, không thể đăng nhập,
                      đăng kí hay thậm chí là bấm follow tài khoản cũng không
                      được.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/10/691-802-162-971-16285792648452105552875.png"
                      alt="1, gương mặt đại diện,nền tảng mới,Google Play Store,fan hâm mộ,jisoo,Celebe,Blackpink,ứng dụng,app,MXH,"
                      note="Những hình ảnh của Jisoo trên nền tảng mới"
                    />
                    <p>
                      Bên cạnh đó, <strong>ứng dụng</strong> này còn chơi lớn
                      khi để hình ảnh xem trước của ứng dụng trên{" "}
                      <strong>App</strong> Store và{" "}
                      <strong>Google Play Store</strong> là "chị cả"{" "}
                      <strong>BLACKPINK</strong> khiến fan đứng ngồi không yên.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/10/22955807010161020224965396189254754894077920n-1628579327444746997901.jpg"
                      alt="2, gương mặt đại diện,nền tảng mới,Google Play Store,fan hâm mộ,jisoo,Celebe,Blackpink,ứng dụng,app,MXH,"
                      note=""
                    />
                    <p>
                      <strong>CELEBe</strong> là một nền tảng{" "}
                      <strong>MXH</strong> của Hàn Quốc, giúp kết nối giữa{" "}
                      <strong>fan hâm mộ</strong> và thần tượng, một phần lợi
                      nhuận của <strong>ứng dụng</strong> này sẽ được trích vào
                      quỹ từ thiện.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      <strong>Ứng dụng</strong> này đã tăng gần 160 bậc trên
                      bảng xếp hạng <strong>App</strong> Store Social
                      Networking, theo ghi nhận thứ hạng cao nhất của ứng dụng
                      này là 12. Trước đó <strong>CELEBe</strong> chưa từng đặt
                      chân vào top 150 của bảng xếp hạng, vào trước ngày công bố
                      hợp tác dùng <strong>Jisoo</strong> nó chỉ đứng thứ 169 mà
                      thôi.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/10/23340334730103023025840902801174588100769830n-1628579409511532905980.jpg"
                      alt="3, gương mặt đại diện,nền tảng mới,Google Play Store,fan hâm mộ,jisoo,Celebe,Blackpink,ứng dụng,app,MXH,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/10/anh-chup-man-hinh-2021-05-13-luc-220216-16209181780231355668973-1628580526921628637680.png"
                      alt="4, gương mặt đại diện,nền tảng mới,Google Play Store,fan hâm mộ,jisoo,Celebe,Blackpink,ứng dụng,app,MXH,"
                      note=""
                    />
                    <ContentImage
                      src="https://static-cmsads.admicro.vn/cmsads/2021/05/BANN-1620702934595.png"
                      alt="5, gương mặt đại diện,nền tảng mới,Google Play Store,fan hâm mộ,jisoo,Celebe,Blackpink,ứng dụng,app,MXH,"
                      note=""
                    />
                    <p>
                      Đây không phải là lần đầu tiên nhờ <strong>Jisoo</strong>{" "}
                      mà một <strong>ứng dụng</strong> "leo top" nhanh như thế
                      này. Trước đây, khi cô nàng tham gia game Kartrider Rush,
                      Blinks cũng đã nhanh chóng tải game khiến nó nhanh chóng
                      tăng vượt bậc thứ hạng được tải về. Theo bảng xếp hạng do
                      Mobile Index công bố, số lượng người dùng Kartrider trong
                      tháng 4 là 1,59 triệu, đứng thứ 2 top game di động tại Hàn
                      Quốc.
                    </p>
                    <ContentImage
                      src="https://static-cmsads.admicro.vn/cmsads/2021/05/BANN-1620702934595.png"
                      alt="6, gương mặt đại diện,nền tảng mới,Google Play Store,fan hâm mộ,jisoo,Celebe,Blackpink,ứng dụng,app,MXH,"
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
