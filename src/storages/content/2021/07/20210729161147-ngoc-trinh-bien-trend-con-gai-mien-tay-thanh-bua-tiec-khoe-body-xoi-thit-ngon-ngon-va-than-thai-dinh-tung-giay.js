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
"timestamp": '29/07/2021 04:11 PM',
"title": 'Ngọc Trinh biến trend “con gái miền Tây” thành bữa tiệc khoe body “xôi thịt” ngồn ngộn và thần thái đỉnh từng giây!',
"description": 'Ơ kìa, Ngọc Trinh đầu tư cả bộ bikini mới cho hợp màu siêu xe để đu trend luôn đây này.',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/5/2128928609278650014018717643360140152334194n-16254945848162093186802-16254946051841629841253.jpg',
"alt": 'Ngọc Trinh,sao khoe body,body sao việt,showbiz Việt,Body Ngọc Trinh,đại chiến bikini,',
"category": 'stars',
"date": '29/07/2021',
"time": '04:11 PM',
"link": '/ngoc-trinh-bien-trend-con-gai-mien-tay-thanh-bua-tiec-khoe-body-xoi-thit-ngon-ngon-va-than-thai-dinh-tung-giay',
"zcomponent": 'page_20210729161147',
"filepath": './20210729161147-ngoc-trinh-bien-trend-con-gai-mien-tay-thanh-bua-tiec-khoe-body-xoi-thit-ngon-ngon-va-than-thai-dinh-tung-giay.js'
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
  "Ngọc Trinh biến trend “con gái miền Tây” thành bữa tiệc khoe body “xôi thịt” ngồn ngộn và thần thái đỉnh từng giây!";
const author = "HẠ ANH,";
const source = "Trí Thức Trẻ";
const timestamp = "29/07/2021 04:11 PM";
const description =
  "Ơ kìa, Ngọc Trinh đầu tư cả bộ bikini mới cho hợp màu siêu xe để đu trend luôn đây này.";
const link =
  "ngoc-trinh-bien-trend-con-gai-mien-tay-thanh-bua-tiec-khoe-body-xoi-thit-ngon-ngon-va-than-thai-dinh-tung-giay";
const tagparam = [
  "Ngọc Trinh",
  "sao khoe body",
  "body sao việt",
  "showbiz Việt",
  "Body Ngọc Trinh",
  "đại chiến bikini",
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

export default function page_20210729161147() {
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
                <RelationNews category={category} />
                <div className="desktop">
                  <AdsHorizontal />
                </div>
                <div className="contentBody">
                  <p>
                    Nếu có danh hiệu "chị ong nâu nâu" chăm chỉ phô diễn body
                    nhất showbiz thì ắt hẳn không bỏ quên{" "}
                    <strong>Ngọc Trinh</strong> được. Đều như vắt tranh, "Nữ
                    hoàng nội y" đưa người hâm mộ đi từ bất ngờ này đến bất ngờ
                    khác khi có đến 1001 cách để trưng trổ đường cong gắt như
                    đường đua.
                  </p>
                  <p>
                    Hết thả dáng bên dưới hồ bơi trong "lâu đài" mới của Vũ Khắc
                    Tiệp, <strong>Ngọc Trinh</strong> tiếp tục dùng đạo cụ là
                    siêu xe gần 10 tỷ đồng "sống ảo". Đầu tư nhất, "Nữ hoàng nội
                    y" thiết kế riêng 1 bộ bikini cùng màu siêu xe và cắt xẻ táo
                    bạo khiến dân tình toát mồ hôi thay vì sợ sơ hở 1 chút sẽ lộ
                    điểm nhạy cảm ngay và luôn.
                  </p>
                  <p>
                    Để màn khoe body thêm đặc sắc, <strong>Ngọc Trinh</strong>{" "}
                    đã mượn trend "con gái miền Tây" biến hình đang hot trên
                    TikTok. Nhìn "cô Thắm" Ngọc Trinh thay đổi trong 1 nốt nhạc
                    mà netizen muốn ngất ngang vì quá sexy. Chỉ với clip 24 giây
                    thôi mà "Nữ hoàng nội y" như mở 1 bữa tiệc khoe visual và 3
                    vòng ngồn ngộn gây choáng ngợp.
                  </p>

                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/5/2128928609278650014018717643360140152334194n-16254945848162093186802-16254946051841629841253.jpg"
                    alt="2, Ngọc Trinh,sao khoe body,body sao việt,showbiz Việt,Body Ngọc Trinh,đại chiến bikini,"
                    note=""
                  />
                  <p>
                    Clip: <strong>Ngọc Trinh</strong> đu trend biến hình, 24
                    giây thôi mà như bữa tiệc “xôi thịt” ngồn ngộn (Nguồn:
                    Instagram nhân vật)
                  </p>
                  <p>
                    Mở đầu clip, dân tình hơi bất ngờ vì hôm nay{" "}
                    <strong>Ngọc Trinh</strong> hoá "cô Thắm" miền Tây dịu dàng
                    quá...
                  </p>
                  <p>
                    Ai ngờ vài giây sau, "Nữ hoàng nội y" đã xuất hiện quyền lực
                    bên con siêu xe 10 tỷ. Động tác bước ra khỏi xế xịn thôi mà{" "}
                    <strong>Ngọc Trinh</strong> cũng uốn éo vài "đường quyền" để
                    khoe đường cong
                  </p>
                  <RelationNewsInPage category={category} />
                  <p>
                    <strong>Ngọc Trinh</strong> sở hữu lưng trần "cực phẩm", mỗi
                    lần lắc lư đều khiến dân tình "say theo điệu nhạc chất".
                    Nhưng 1 bộ phận netizen cũng thót tim vì lo lắng người đẹp
                    Trà Vinh sẽ lộ điểm nhạy cảm vì bộ bikini cắt xẻ quá táo bạo
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/5/3248a2-16254881699361367521953.jpg"
                    alt="1, Ngọc Trinh,sao khoe body,body sao việt,showbiz Việt,Body Ngọc Trinh,đại chiến bikini,"
                    note="Thần thái của Ngọc Trinh vô cùng cuốn hút và luôn toát ra sự tự tin, sexy"
                  />
                  <p></p>
                  <p>
                    Clip: Trước đó, <strong>Ngọc Trinh</strong> thả dáng trong
                    bikini nhỏ xíu, khiến Vũ Khắc Tiệp trầm trồ khen ngợi hết
                    lời
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/5/ngoc-trinh-bikini-venussecret-02png-1625488169748763120039.jpeg"
                    alt="3, Ngọc Trinh,sao khoe body,body sao việt,showbiz Việt,Body Ngọc Trinh,đại chiến bikini,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/5/unnamed-2-1625488168948643930824.jpg"
                    alt="4, Ngọc Trinh,sao khoe body,body sao việt,showbiz Việt,Body Ngọc Trinh,đại chiến bikini,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/5/12877797423148090719832273023006246883941858o-1607142013786493200946-16254881706021904749140.jpg"
                    alt="5, Ngọc Trinh,sao khoe body,body sao việt,showbiz Việt,Body Ngọc Trinh,đại chiến bikini,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/5/2136078589094784699085523904162980397024454n-16254945835341019153681.jpg"
                    alt="6, Ngọc Trinh,sao khoe body,body sao việt,showbiz Việt,Body Ngọc Trinh,đại chiến bikini,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/5/2138706225397681305103165335046031132886363n-16254945840622072041232.jpg"
                    alt="7, Ngọc Trinh,sao khoe body,body sao việt,showbiz Việt,Body Ngọc Trinh,đại chiến bikini,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/5/2138706225397681305103165335046031132886363n-16254945840622072041232.jpg"
                    alt="8, Ngọc Trinh,sao khoe body,body sao việt,showbiz Việt,Body Ngọc Trinh,đại chiến bikini,"
                    note=""
                  />
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
