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
"timestamp": '28/08/2021 08:50 AM',
"title": 'Thêm mì khô vị bò gà của Công ty Thiên Hương bị thu hồi ở Na Uy',
"description": 'Bộ Y tế vừa nhận được cảnh báo của Na Uy về sản phẩm mì khô vị bò gà của Công ty Thiên Hương bị thu hồi do có chứa chất ethylene oxide.',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/28/photo-1-1630158555860314860585.jpg',
"alt": 'mì ăn liền,an toàn thực phẩm,tin nóng xã hội,',
"category": 'news',
"date": '28/08/2021',
"time": '08:50 AM',
"link": '/them-mi-kho-vi-bo-ga-cua-cong-ty-thien-huong-bi-thu-hoi-o-na-uy',
"zcomponent": 'page_20210828085030',
"filepath": './20210828085030-them-mi-kho-vi-bo-ga-cua-cong-ty-thien-huong-bi-thu-hoi-o-na-uy.js'
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
const title = "Thêm mì khô vị bò gà của Công ty Thiên Hương bị thu hồi ở Na Uy";
const author = "LINH TRẦN,";
const source = "Phụ nữ Việt Nam";
const timestamp = "28/08/2021 08:50 AM";
const description =
  "Bộ Y tế vừa nhận được cảnh báo của Na Uy về sản phẩm mì khô vị bò gà của Công ty Thiên Hương bị thu hồi do có chứa chất ethylene oxide.";
const link = "them-mi-kho-vi-bo-ga-cua-cong-ty-thien-huong-bi-thu-hoi-o-na-uy";
const tagparam = ["mì ăn liền", "an toàn thực phẩm", "tin nóng xã hội"];
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

export default function page_20210828085030() {
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
                      Bộ Y tế vừa nhận được cảnh báo của Na Uy về sản phẩm mì
                      khô vị bò gà của Công ty Thiên Hương bị thu hồi do có chứa
                      chất ethylene oxide.
                    </p>
                    <p>
                      Ngày 28/8, Cục <strong>An toàn thực phẩm</strong> (Bộ Y
                      tế) cho biết, hôm nay Cục nhận được thông tin cảnh báo của
                      Liên minh Châu Âu (EU) về việc đã thu hồi sản phẩm mì khô
                      vị bò gà (Dried noodles with chicken – and beefspices) tại
                      thị trường Na Uy do có chứa 0,052 mg/kg – ppm ethylene
                      oxide (vi phạm Chỉ thị của EU số 91/414/EEC). Đây là sản
                      phẩm do Công ty cổ phần thực phẩm Thiên Hương (Số 1 Lê Đức
                      Thọ, khu phố 02, Tân Thới Hiệp, Quận 12, TP. Hồ Chí Minh)
                      sản xuất.
                    </p>
                    <p>
                      Trước thông tin nêu trên, các cơ quan chức năng đang phối
                      hợp kiểm tra, xác minh vì vậy Cục{" "}
                      <strong>An toàn thực phẩm</strong> thông báo để người tiêu
                      dùng nắm được.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/28/photo-1-1630158555860314860585.jpg"
                      alt="1, mì ăn liền,an toàn thực phẩm,tin nóng xã hội,"
                      note="Công văn của Bộ NN&PTNT"
                    />
                    <p>
                      Cũng theo Cục <strong>An toàn thực phẩm</strong>, trước đó
                      Cục cũng nhận được thông báo thu hồi một số sản phẩm{" "}
                      <strong>mì ăn liền</strong> hương tôm chua cay nhãn hiệu
                      Hảo Hảo (Hao Hao Sour-Hot Shrimp Flavour Instant Noodle
                      Dish) và miến ăn liền hương sườn non nhãn hiệu Good (Good
                      Spare Ribs Flavour Instant Noodle Dish) của Công ty cổ
                      phần ACECOOK Việt Nam sản xuất. Lý do thu hồi là do Cơ
                      quan An toàn thực phẩm Ireland (FSAI) thông báo vì phát
                      hiện thuốc bảo vệ thực vật Ethylene Oxide.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Được biết, ethylene oxide là chất cấm sử dụng trong sản
                      xuất, chế biến thực phẩm. Hóa chất này thường được sử dụng
                      làm chất tẩy rửa, nếu tiếp xúc lâu dài sẽ ảnh hưởng đến
                      sức khỏe.
                    </p>
                    <p>
                      Cũng liên quan đến vụ thu hồi sản phẩm mì khô vị bò gà,
                      tối ngày 28/8, Bộ NN&PTNT cũng đã có công văn gửi Bộ Công
                      thương, Bộ Y tế và Công ty Thiên Hương làm rõ nhằm đảm bảo
                      sức khỏe người tiêu dùng.
                    </p>
                    <p></p>
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
