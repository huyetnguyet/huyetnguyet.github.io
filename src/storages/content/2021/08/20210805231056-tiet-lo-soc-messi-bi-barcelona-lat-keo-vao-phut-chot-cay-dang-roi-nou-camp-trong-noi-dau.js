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
"timestamp": '05/08/2021 11:10 PM',
"title": 'Tiết lộ sốc: Messi bị Barcelona "lật kèo" vào phút chót, cay đắng rời Nou Camp trong nỗi đau',
"description": 'Có vẻ như chính Messi cũng không thể ngờ được mình lại không thể tiếp tục khoác áo Barcelona.',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/6/photo-1-1628216103335911731197.jpeg',
"alt": 'messi,barcelona,Messi bị Barcelona lật kèo,messi rời Barca,',
"category": 'news',
"date": '05/08/2021',
"time": '11:10 PM',
"link": '/tiet-lo-soc-messi-bi-barcelona-lat-keo-vao-phut-chot-cay-dang-roi-nou-camp-trong-noi-dau',
"zcomponent": 'page_20210805231056',
"filepath": './20210805231056-tiet-lo-soc-messi-bi-barcelona-lat-keo-vao-phut-chot-cay-dang-roi-nou-camp-trong-noi-dau.js'
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
  'Tiết lộ sốc: Messi bị Barcelona "lật kèo" vào phút chót, cay đắng rời Nou Camp trong nỗi đau';
const author = "NARA,";
const source = "Pháp Luật & Bạn Đọc";
const timestamp = "05/08/2021 11:10 PM";
const description =
  "Có vẻ như chính Messi cũng không thể ngờ được mình lại không thể tiếp tục khoác áo Barcelona.";
const link =
  "tiet-lo-soc-messi-bi-barcelona-lat-keo-vao-phut-chot-cay-dang-roi-nou-camp-trong-noi-dau";
const tagparam = [
  "messi",
  "barcelona",
  "Messi bị Barcelona lật kèo",
  "messi rời Barca",
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

export default function page_20210805231056() {
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
                      Sport.es - một trong các tờ báo nắm được nhiều chuyện
                      "thâm cung bí sử" về <strong>Barcelona</strong> nhất thế
                      giới - đã tiết lộ những chi tiết gây sốc xoay quanh chuyện{" "}
                      <strong>Messi</strong> ra đi.
                    </p>
                    <p>
                      Mọi vấn đề trong hợp đồng đã được ông Jorge{" "}
                      <strong>Messi</strong> - bố và cũng là đại diện của Messi
                      - thống nhất với <strong>Barcelona</strong> từ trước. Theo
                      dự kiến, Messi sẽ đến ký hợp đồng mới vào ngày 5/8, họp
                      báo công bố và có mặt tại sân tập ngày 6/8. Phía tiền đạo
                      người Argentina sẵn sàng giảm một nửa mức lương 71 triệu
                      euro/năm nhằm giúp CLB bớt khó khăn về tài chính.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/6/photo-1-16282161022991813586190.jpeg"
                      alt="1, messi,barcelona,Messi bị Barcelona lật kèo,messi rời Barca,"
                      note="Chủ tịch Barcelona Laporta đích thân mang tin xấu đến cho Messi"
                    />
                    <p>
                      Tuy nhiên, Chủ tịch <strong>Barcelona</strong> Laporta đã
                      bất ngờ có mặt tại sân Nou Camp để công bố thông tin gây
                      sốc vào phút chót. Vị chủ tịch mới đắc cử cho biết
                      Barcelona sẽ không ký hợp đồng với <strong>Messi</strong>{" "}
                      do những quy định về tiền lương tại La Liga.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Vô cùng ngạc nhiên, <strong>Messi</strong> cùng nhóm cộng
                      sự quyết định đưa ra một mức lương thấp hơn nữa và cho{" "}
                      <strong>Barcelona</strong> thời gian để cân nhắc. Tuy vậy,
                      đội chủ sân Nou Camp cuối cùng vẫn không tìm ra phương án
                      và đành kết thúc chuyện đàm phán ký hợp đồng mới.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/6/photo-1-1628216103335911731197.jpeg"
                      alt="2, messi,barcelona,Messi bị Barcelona lật kèo,messi rời Barca,"
                      note="Messi bị bất ngờ trước động thái của Barca"
                    />
                    <p>
                      Khi mọi chuyện chấm dứt, <strong>Messi</strong> thực sự
                      rất buồn. Sport.es cho biết tiền đạo người Argentina chưa
                      hề có kế hoạch nào khác ngoài việc tái ký với{" "}
                      <strong>Barcelona</strong>. Anh rời Nou Camp trong trạng
                      thái vô cùng hoang mang vì mọi dự tính đổ vỡ.
                    </p>
                    <p>
                      Hiện tại, <strong>Messi</strong> vẫn chưa đưa ra phát ngôn
                      sau khi chính thức chia tay <strong>Barcelona</strong> sau
                      hơn 20 năm gắn bó.
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
