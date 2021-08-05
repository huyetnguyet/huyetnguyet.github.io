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
"timestamp": '05/08/2021 08:45 AM',
"title": 'Bà xã nhà Messi ngày càng trở nên nóng bỏng thế này, bảo sao đến bạn gái Ronaldo cũng phải "thả tim" lia lịa',
"description": 'Antonella Roccuzzo ngày càng trở nên bạo dạn và quyến rũ hơn thông qua những shoot hình đăng tải lên mạng xã hội.',
"src": 'https://sport5.mediacdn.vn/158855217956261888/2021/8/5/antonelaroccuzzo23148993836812276786435964785506388326497197n-1628156574716450839769.jpg',
"alt": 'messi,Bà xã Messi,Antonella Roccuzzo,bạn gái ronaldo,georgina,',
"category": 'news',
"date": '05/08/2021',
"time": '08:45 AM',
"link": '/ba-xa-nha-messi-ngay-cang-tro-nen-nong-bong-the-nay-bao-sao-den-ban-gai-ronaldo-cung-phai-tha-tim-lia-lia',
"zcomponent": 'page_20210805084510',
"filepath": './20210805084510-ba-xa-nha-messi-ngay-cang-tro-nen-nong-bong-the-nay-bao-sao-den-ban-gai-ronaldo-cung-phai-tha-tim-lia-lia.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "news";
const categoryLink = "/news";
const title =
  'Bà xã nhà Messi ngày càng trở nên nóng bỏng thế này, bảo sao đến bạn gái Ronaldo cũng phải "thả tim" lia lịa';
const author = "THÀNH AN,";
const source = "Nhịp Sống Việt";
const timestamp = "05/08/2021 08:45 AM";
const description =
  "Antonella Roccuzzo ngày càng trở nên bạo dạn và quyến rũ hơn thông qua những shoot hình đăng tải lên mạng xã hội.";
const link =
  "ba-xa-nha-messi-ngay-cang-tro-nen-nong-bong-the-nay-bao-sao-den-ban-gai-ronaldo-cung-phai-tha-tim-lia-lia";
const tagparam = [
  "messi",
  "Bà xã Messi",
  "Antonella Roccuzzo",
  "bạn gái ronaldo",
  "georgina",
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

export default function page_20210805084510() {
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
                      Từ hình ảnh một cô nàng kín đáo, thường lui về phía sau
                      hậu trường chăm sóc và vun vén hạnh phúc gia đình,{" "}
                      <strong>Antonella Roccuzzo</strong> như "lột xác" trong
                      khoảng 2 năm trở lại đây. Bà xã của Lionel{" "}
                      <strong>Messi</strong> bắt đầu phủ sóng nhiều hơn trên
                      mạng xã hội với những shoot hình quyến rũ, nóng bỏng
                    </p>
                    <p>
                      Khoảnh khắc xinh đẹp trong bộ bikini gợi cảm của Antonella
                      khi đi nghỉ tại Ibiza mới đây thu về tới hơn 2 triệu lượt
                      "thả tim". Trong đó, đáng chú ý có sự xuất hiện của bạn
                      gái Cristiano Ronaldo, <strong>Georgina</strong> Rodriguez
                    </p>
                    <ContentImage
                      src="https://sport5.mediacdn.vn/158855217956261888/2021/8/5/antonelaroccuzzo23088510810114814296686776516529911926699383n-1628156574316237539723.jpg"
                      alt="1, messi,Bà xã Messi,Antonella Roccuzzo,bạn gái ronaldo,georgina,"
                      note="Một shoot hình táo bạo khác của người đẹp xứ tango cũng lọt vào mắt xanh của Georgina"
                    />
                    <ContentImage
                      src="https://sport5.mediacdn.vn/thumb_w/700/158855217956261888/2021/8/5/2021-08-05164005-16281565735941672511998.png"
                      alt="2, messi,Bà xã Messi,Antonella Roccuzzo,bạn gái ronaldo,georgina,"
                      note="Lượt follow tài khoản Instagram của cô nàng cũng tăng chóng mặt thời gian qua, lên mức 15,7 triệu fan"
                    />
                    <p>
                      Để có thể tự tin khoe những đường cong nóng bỏng bên chàng
                      phu quân nức tiếng sân cỏ, Antonella cũng "học"{" "}
                      <strong>Georgina</strong>, chăm chỉ tập luyện trong phòng
                      gym
                    </p>
                    <RelationNewsInPage category={category} />
                    <ContentImage
                      src="https://sport5.mediacdn.vn/thumb_w/700/158855217956261888/2021/8/5/2021-08-05164036-16281565736911703756308.png"
                      alt="3, messi,Bà xã Messi,Antonella Roccuzzo,bạn gái ronaldo,georgina,"
                      note="Gia đình Messi trải qua kỳ nghỉ vui vẻ và hạnh phúc ở Ibiza, thiên đường du lịch quen thuộc và yêu thích của nhiều ngôi sao sân cỏ mỗi dịp hè về"
                    />
                    <ContentImage
                      src="https://sport5.mediacdn.vn/thumb_w/700/158855217956261888/2021/8/5/leomessi22980260312159019855917731198488685092845730n-1628156574924605053096.jpg"
                      alt="4, messi,Bà xã Messi,Antonella Roccuzzo,bạn gái ronaldo,georgina,"
                      note="Tại đây, siêu sao người Argentina được đoàn tụ với người bạn thân thiết Luis Suarez..."
                    />
                    <ContentImage
                      src="https://sport5.mediacdn.vn/thumb_w/700/158855217956261888/2021/8/5/antonelaroccuzzo2312940882497827601113576773067554813802302n-1628156574496944693805.jpg"
                      alt="5, messi,Bà xã Messi,Antonella Roccuzzo,bạn gái ronaldo,georgina,"
                      note="... và những chiến hữu như Neymar, Angel Di Maria, Marco Verratti, Leandro Paredes"
                    />
                    <ContentImage
                      src="https://sport5.mediacdn.vn/158855217956261888/2021/8/5/antonelaroccuzzo23148993836812276786435964785506388326497197n-1628156574716450839769.jpg"
                      alt="6, messi,Bà xã Messi,Antonella Roccuzzo,bạn gái ronaldo,georgina,"
                      note=""
                    />
                    <ContentImage
                      src="https://sport5.mediacdn.vn/thumb_w/700/158855217956261888/2021/8/5/2021-08-05164113-16281565737861060589877.png"
                      alt="7, messi,Bà xã Messi,Antonella Roccuzzo,bạn gái ronaldo,georgina,"
                      note=""
                    />
                    <ContentImage
                      src="https://sport5.mediacdn.vn/thumb_w/700/158855217956261888/2021/8/5/leomessi2283477493688033181169824614730512812673407n-16281565748031619339734.jpg"
                      alt="8, messi,Bà xã Messi,Antonella Roccuzzo,bạn gái ronaldo,georgina,"
                      note=""
                    />
                    <ContentImage
                      src="https://sport5.mediacdn.vn/thumb_w/700/158855217956261888/2021/8/5/neymarjr2323964852472164937110016400274478531355496n-162815657503981433542.jpg"
                      alt="9, messi,Bà xã Messi,Antonella Roccuzzo,bạn gái ronaldo,georgina,"
                      note=""
                    />
                    <ContentImage
                      src="https://static-cmsads.admicro.vn/cmsads/2021/05/BANN-1620702934595.png"
                      alt="10, messi,Bà xã Messi,Antonella Roccuzzo,bạn gái ronaldo,georgina,"
                      note=""
                    />
                    <ContentImage
                      src="https://static-cmsads.admicro.vn/cmsads/2021/05/BANN-1620702934595.png"
                      alt="11, messi,Bà xã Messi,Antonella Roccuzzo,bạn gái ronaldo,georgina,"
                      note=""
                    />
                    <p>Ảnh: Tổng hợp</p>
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
