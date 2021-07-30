import React from "react";
import "components/page.css";
import { AdsHorizontal, AdsVertical } from "components/adsMethods";
import { RandomFeature } from "components/methods";

import { Content, ContentImage, FacebookShareButton } from "components/content";

import { Helmet } from "react-helmet";

/* ---------------------------------------------------------------- */

/*

 {
"timestamp": 07/06/2021 06:35 PM",
"title": Nhiệt Ba ngày càng táo bạo tới ngộp thở: Hết khoe lưng trần sexy lại 'bắt lú' với váy xuyên thấu khoe vòng 1 căng tràn",
"description": Vẫn biết Địch Lệ Nhiệt Ba sở hữu sắc vóc hàng đầu Cbiz nhưng những hình ảnh trong sự kiện mới của cô nàng vẫn khiến dân tình 'xịt máu mũi'.",
"src": ",
"alt": Dich Le Nhiet Ba, Sao Hoa Ngu, My Nhan Hoa Ngu, Nhan Sac My Nhan Hoa Ngu, Voc Dang My Nhan Hoa Ngu, Body Cua Sao, ",
"category": images",
"date": 07/06/2021",
"time": 06:35 PM",
"link": "/nhiet-ba-ngay-cang-tao-bao-toi-ngop-tho-het-khoe-lung-tran-sexy-lai-bat-lu-voi-vay-xuyen-thau-khoe-vong-1-cang-tran",
"zcomponent": page_20210607183550",
"filepath": ./20210607183550-nhiet-ba-ngay-cang-tao-bao-toi-ngop-tho-het-khoe-lung-tran-sexy-lai-bat-lu-voi-vay-xuyen-thau-khoe-vong-1-cang-tran.js"
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "images";
const categoryLink = "/images";
const title =
  "Nhiệt Ba ngày càng táo bạo tới ngộp thở: Hết khoe lưng trần sexy lại 'bắt lú' với váy xuyên thấu khoe vòng 1 căng tràn";
const author = "NHÃ AN,";
const source = "Pháp luật & Bạn đọc";
const timestamp = "07/06/2021 06:35 PM";
const description =
  "Vẫn biết Địch Lệ Nhiệt Ba sở hữu sắc vóc hàng đầu Cbiz nhưng những hình ảnh trong sự kiện mới của cô nàng vẫn khiến dân tình 'xịt máu mũi'.";
const link =
  "nhiet-ba-ngay-cang-tao-bao-toi-ngop-tho-het-khoe-lung-tran-sexy-lai-bat-lu-voi-vay-xuyen-thau-khoe-vong-1-cang-tran";
const tagparam = [
  "dich-le-nhiet-ba",
  "sao-hoa-ngu",
  "my-nhan-hoa-ngu",
  "nhan-sac-my-nhan-hoa-ngu",
  "voc-dang-my-nhan-hoa-ngu",
  "body-cua-sao",
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

export default function page_20210607183550() {
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
            <AdsHorizontal />
            <div className="content">
              <div className="contentContainer">
                <p className="description">{description}</p>
                <div className="contentBody">
                  <p>
                    Sự kiện Thập Quang Thịnh Điển diễn ra ngày 7/6 chứng kiến
                    màn đổ bộ của dàn sao khủng xứ Trung. Đặc biệt, Địch Lệ
                    Nhiệt Ba trở thành mỹ nhân chiếm trọn spotlight nhờ tạo hình
                    cực kỳ nổi bật và cuốn hút. Không còn giữ hình ảnh công chúa
                    kẹo ngọt và có phần kín đáo như trước, nàng "Mỹ nhân Tân
                    Cương" ngày càng "bung xoã" hết mình, trở nên sexy và cực kỳ
                    quyến rũ.
                  </p>
                  <p>
                    Xuất hiện tại sự kiện hôm nay, Nhiệt Ba diện chiếc váy màu
                    xanh khoét ngực sâu, tuy nhiên tâm điểm chú ý lại đổ dồn về
                    thiết kế khoe trọn phần lưng trần cực kỳ quyến rũ và tinh
                    tế. Netizen chỉ có thể "xỉu up xỉu down" vì tạo hình gợi
                    cảm, sexy tới từng milimet.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/7/photo-1-1623074906558294967780.jpg"
                    alt="Dich Le Nhiet Ba, Sao Hoa Ngu, My Nhan Hoa Ngu, Nhan Sac My Nhan Hoa Ngu, Voc Dang My Nhan Hoa Ngu, Body Cua Sao, "
                    note="Địch Lệ Nhiệt Ba thả dáng tại sân khấu Thập Quang Thịnh Điển"
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/7/005nxdtrgy1gra1jcf2lrj31jk2bcb29-1623074841032544592020.jpg"
                    alt="Dich Le Nhiet Ba, Sao Hoa Ngu, My Nhan Hoa Ngu, Nhan Sac My Nhan Hoa Ngu, Voc Dang My Nhan Hoa Ngu, Body Cua Sao, "
                    note="Cô nàng thả dáng nhiệt tình, khoe visual tựa công chúa"
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/7/1987633923294407652971962261138023115599893n-1623074841045656086445.jpeg"
                    alt="Dich Le Nhiet Ba, Sao Hoa Ngu, My Nhan Hoa Ngu, Nhan Sac My Nhan Hoa Ngu, Voc Dang My Nhan Hoa Ngu, Body Cua Sao, "
                    note="Vậy nhưng chỉ đến khi cô nàng quay lưng đi, netizen mới chứng kiến tận mắt thiết kế ấn tượng khoe lưng trần gợi cảm của cô nàng"
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/7/005atwwnly1gra14rh2nvj33gg56ob2c-16230748421841731323721.jpg"
                    alt="Dich Le Nhiet Ba, Sao Hoa Ngu, My Nhan Hoa Ngu, Nhan Sac My Nhan Hoa Ngu, Voc Dang My Nhan Hoa Ngu, Body Cua Sao, "
                    note="Quả thật, Nhiệt Ba rất biết cách khiến người hâm mộ đi từ bất ngờ này tới bất ngờ khác"
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/7/0070t6wfly1gr9pzq792hj32zi4081kx-1623074844208220438469.jpg"
                    alt="Dich Le Nhiet Ba, Sao Hoa Ngu, My Nhan Hoa Ngu, Nhan Sac My Nhan Hoa Ngu, Voc Dang My Nhan Hoa Ngu, Body Cua Sao, "
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/7/photo-1-1623074941463777450429.jpg"
                    alt="Dich Le Nhiet Ba, Sao Hoa Ngu, My Nhan Hoa Ngu, Nhan Sac My Nhan Hoa Ngu, Voc Dang My Nhan Hoa Ngu, Body Cua Sao, "
                    note="Cô nàng khoe visual triệt để với chiếc váy ấn tượng này"
                  />
                  <p>
                    Không dừng lại ở đó, Nhiệt Ba còn khiến dân tình "choáng
                    nặng" hơn nữa vì chiếc váy xuyên thấu "bắt lú" ác liệt.
                    Không chỉ khoe body nuột nà, vòng 1 căng đầy của nữ thần Tam
                    Sinh Tam Thế mới là điều netizen xuýt xoa, cảm thấy "ngộp
                    thở".
                  </p>
                  Khoe body "hot hòn họt" thế này, bảo sao Nhiệt Ba càng ngày
                  càng đông fan
                  <p></p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/7/e8601a4cgy1gr9y5pld93j21ht21a7wh-1623074855215592682849.jpeg"
                    alt="Dich Le Nhiet Ba, Sao Hoa Ngu, My Nhan Hoa Ngu, Nhan Sac My Nhan Hoa Ngu, Voc Dang My Nhan Hoa Ngu, Body Cua Sao, "
                    note="Từ visual cho tới body, nữ diễn viên chẳng có bất cứ điểm gì phải chê"
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/7/1899710803295715952841137292776665352036338n-16230748556982057793509.jpeg"
                    alt="Dich Le Nhiet Ba, Sao Hoa Ngu, My Nhan Hoa Ngu, Nhan Sac My Nhan Hoa Ngu, Voc Dang My Nhan Hoa Ngu, Body Cua Sao, "
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/7/1900971343295717452840988115651203566335817n-1623074855708409541982.jpeg"
                    alt="Dich Le Nhiet Ba, Sao Hoa Ngu, My Nhan Hoa Ngu, Nhan Sac My Nhan Hoa Ngu, Voc Dang My Nhan Hoa Ngu, Body Cua Sao, "
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/7/1921652173295718786174188919407426215091284n-1623074855229439415709.jpeg"
                    alt="Dich Le Nhiet Ba, Sao Hoa Ngu, My Nhan Hoa Ngu, Nhan Sac My Nhan Hoa Ngu, Voc Dang My Nhan Hoa Ngu, Body Cua Sao, "
                    note="Chiếc váy xuyên thấu hot nhất hôm nay thuộc về Nhiệt Ba"
                  />
                  <p>Nguồn: Weibo</p>
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
