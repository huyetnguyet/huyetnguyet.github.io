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
"timestamp": '29/07/2021 04:25 PM',
"title": 'Thành gái độc thân, body Dương Mịch ngày càng "mlem": Nhìn màn hở bạo khoe vòng eo sexy ở sự kiện hôm nay là rõ',
"description": 'Hình ảnh trong sự kiện tối ngày 27/7 của Dương Mịch khiến dân tình cảm thấy nghẹt thở vì độ sexy ngút ngàn.',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/27/photo-1-1627390920786544123096.jpg',
"alt": 'Dương Mịch,sao Hoa ngữ,body của sao,vóc dáng mỹ nhân Hoa ngữ,Mỹ nhân Hoa ngữ,nhan sắc mỹ nhân Hoa ngữ,nhan sắc mỹ nhân showbiz,',
"category": 'stars',
"date": '29/07/2021',
"time": '04:25 PM',
"link": '/thanh-gai-doc-than-body-duong-mich-ngay-cang-mlem-nhin-man-ho-bao-khoe-vong-eo-sexy-o-su-kien-hom-nay-la-ro',
"zcomponent": 'page_20210729162550',
"filepath": './20210729162550-thanh-gai-doc-than-body-duong-mich-ngay-cang-mlem-nhin-man-ho-bao-khoe-vong-eo-sexy-o-su-kien-hom-nay-la-ro.js'
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
  'Thành gái độc thân, body Dương Mịch ngày càng "mlem": Nhìn màn hở bạo khoe vòng eo sexy ở sự kiện hôm nay là rõ';
const author = "NHÃ AN,";
const source = "Doanh nghiệp và Tiếp thị";
const timestamp = "29/07/2021 04:25 PM";
const description =
  "Hình ảnh trong sự kiện tối ngày 27/7 của Dương Mịch khiến dân tình cảm thấy nghẹt thở vì độ sexy ngút ngàn.";
const link =
  "thanh-gai-doc-than-body-duong-mich-ngay-cang-mlem-nhin-man-ho-bao-khoe-vong-eo-sexy-o-su-kien-hom-nay-la-ro";
const tagparam = [
  "Dương Mịch",
  "sao Hoa ngữ",
  "body của sao",
  "vóc dáng mỹ nhân Hoa ngữ",
  "Mỹ nhân Hoa ngữ",
  "nhan sắc mỹ nhân Hoa ngữ",
  "nhan sắc mỹ nhân showbiz",
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

export default function page_20210729162550() {
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
                    Trang Sina đưa tin, chiều tối ngày 27/7,{" "}
                    <strong>Dương Mịch</strong> nhận lời mời tham dự 1 sự kiện
                    tuyên truyền cho nhãn hàng tại Thượng Hải. Lại 1 lần nữa,
                    người đẹp xứ Trung gây bão toàn cõi mạng với visual cực kỳ
                    xuất sắc, đặc biệt là chiếc váy màu trắng bó sát cơ thể,
                    được cắt cúp khoe khéo đường cong bốc lửa. Vẫn biết body của
                    Dương Mịch "đỉnh của chóp" nhưng Cnet vẫn phải tròn mắt thán
                    phục trước mỗi lần nữ thần nhan sắc dự sự kiện.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/27/photo-1-16273909785261379167032.jpg"
                    alt="1, Dương Mịch,sao Hoa ngữ,body của sao,vóc dáng mỹ nhân Hoa ngữ,Mỹ nhân Hoa ngữ,nhan sắc mỹ nhân Hoa ngữ,nhan sắc mỹ nhân showbiz,"
                    note="Dương Mịch xuất hiện rạng ngời tại sự kiện tối ngày hôm nay"
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/27/photo-1-16273910238771346167231.jpg"
                    alt="2, Dương Mịch,sao Hoa ngữ,body của sao,vóc dáng mỹ nhân Hoa ngữ,Mỹ nhân Hoa ngữ,nhan sắc mỹ nhân Hoa ngữ,nhan sắc mỹ nhân showbiz,"
                    note="Cận cảnh nhan sắc thanh thuần của quý cô độc thân đắt giá nhất nhì Cbiz hiện nay"
                  />
                  <p>
                    Cô nàng khoe khí chất xuất thần khiến bao fanboy "đổ rầm
                    rầm"
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/27/photo-1-1627391001159237920496.jpg"
                    alt="3, Dương Mịch,sao Hoa ngữ,body của sao,vóc dáng mỹ nhân Hoa ngữ,Mỹ nhân Hoa ngữ,nhan sắc mỹ nhân Hoa ngữ,nhan sắc mỹ nhân showbiz,"
                    note="Chiếc váy của Dương Mịch diện ngày hôm nay xẻ tà cực kỳ táo bạo, khoe khéo đôi chân dài thon nuột. Tuy nhiên, có lẽ mọi sự chú ý sẽ đổ dồn về vòng eo con kiến đáng ngưỡng mộ"
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/27/photo-1-16273908959251053985070.jpg"
                    alt="4, Dương Mịch,sao Hoa ngữ,body của sao,vóc dáng mỹ nhân Hoa ngữ,Mỹ nhân Hoa ngữ,nhan sắc mỹ nhân Hoa ngữ,nhan sắc mỹ nhân showbiz,"
                    note="Khoảnh khắc thả dáng ấn tượng của người đẹp Tam Sinh Tam Thế. Nhìn vòng 2 săn chắc thế này là đủ hiểu cô nàng đã chăm chỉ tập luyện giữ dáng đến nhường nào"
                  />
                  <p>
                    Trên MXH, netizen đều nhận xét rằng, sau khi ẩn ý tuyên bố
                    chia tay với tình cũ Ngụy Đại Huân,{" "}
                    <strong>Dương Mịch</strong> ngày càng "bung xoã", chăm diện
                    đồ hở khoe body nuột nà. Rất nhiều fan còn ghi lại được hình
                    ảnh lúc Dương Mịch cúi người, vòng 1 căng đầy cùng vòng 3
                    nảy nở đều được "phô diễn" hết mức. Vóc dáng "mlem" thế này,
                    Dương Mịch đúng là biết cách khiến dân tình "xịt máu mũi"
                    đây mà.
                  </p>
                  <RelationNewsInPage category={category} />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/27/photo-1-16273909626531088973390.jpg"
                    alt="5, Dương Mịch,sao Hoa ngữ,body của sao,vóc dáng mỹ nhân Hoa ngữ,Mỹ nhân Hoa ngữ,nhan sắc mỹ nhân Hoa ngữ,nhan sắc mỹ nhân showbiz,"
                    note="Bức ảnh gây bão MXH của Dương Mịch ngày hôm nay. Chiếc váy tôn lên body đẹp nức nở của mỹ nhân Tam Sinh Tam Thế"
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/27/photo-1-1627390932290597500717.jpg"
                    alt="6, Dương Mịch,sao Hoa ngữ,body của sao,vóc dáng mỹ nhân Hoa ngữ,Mỹ nhân Hoa ngữ,nhan sắc mỹ nhân Hoa ngữ,nhan sắc mỹ nhân showbiz,"
                    note="Vóc dáng nóng bỏng nhường này..."
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/27/photo-1-16273923651551464332433.jpg"
                    alt="7, Dương Mịch,sao Hoa ngữ,body của sao,vóc dáng mỹ nhân Hoa ngữ,Mỹ nhân Hoa ngữ,nhan sắc mỹ nhân Hoa ngữ,nhan sắc mỹ nhân showbiz,"
                    note=".... cùng bóng lưng nuột nà càng khiến cho vợ cũ Lưu Khải Uy bốc lửa hơn bao giờ hết"
                  />
                  <p>
                    Bên cạnh đó, studio của nữ diễn viên tiếp tục tung thêm bộ
                    ảnh tạo hình trước giờ G dự sự kiện. Gu ăn mặc tinh tế cùng
                    sắc vóc hoàn hảo của người đẹp khiến cho{" "}
                    <strong>Dương Mịch</strong> khẳng định được vị thế mỹ nhân
                    hàng đầu Cbiz.
                  </p>
                  <p>Bộ ảnh khiến dân tình "đứng ngồi không yên" là đây</p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/27/photo-1-1627390920786544123096.jpg"
                    alt="8, Dương Mịch,sao Hoa ngữ,body của sao,vóc dáng mỹ nhân Hoa ngữ,Mỹ nhân Hoa ngữ,nhan sắc mỹ nhân Hoa ngữ,nhan sắc mỹ nhân showbiz,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/27/photo-1-1627390988971797327556.jpg"
                    alt="9, Dương Mịch,sao Hoa ngữ,body của sao,vóc dáng mỹ nhân Hoa ngữ,Mỹ nhân Hoa ngữ,nhan sắc mỹ nhân Hoa ngữ,nhan sắc mỹ nhân showbiz,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/27/photo-1-1627390850688724671279.jpg"
                    alt="10, Dương Mịch,sao Hoa ngữ,body của sao,vóc dáng mỹ nhân Hoa ngữ,Mỹ nhân Hoa ngữ,nhan sắc mỹ nhân Hoa ngữ,nhan sắc mỹ nhân showbiz,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/27/photo-1-16273905713131396928166.jpg"
                    alt="11, Dương Mịch,sao Hoa ngữ,body của sao,vóc dáng mỹ nhân Hoa ngữ,Mỹ nhân Hoa ngữ,nhan sắc mỹ nhân Hoa ngữ,nhan sắc mỹ nhân showbiz,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/27/photo-1-16273905713131396928166.jpg"
                    alt="12, Dương Mịch,sao Hoa ngữ,body của sao,vóc dáng mỹ nhân Hoa ngữ,Mỹ nhân Hoa ngữ,nhan sắc mỹ nhân Hoa ngữ,nhan sắc mỹ nhân showbiz,"
                    note=""
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
