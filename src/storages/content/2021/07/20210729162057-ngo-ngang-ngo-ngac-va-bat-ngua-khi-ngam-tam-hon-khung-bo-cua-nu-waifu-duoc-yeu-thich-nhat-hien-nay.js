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
"timestamp": '29/07/2021 04:20 PM',
"title": '"Ngỡ ngàng, ngơ ngác và bật ngửa" khi ngắm tâm hồn khủng bố của nữ waifu được yêu thích nhất hiện nay',
"description": 'Loạt ảnh cosplay cô nàng Sayu Ogiwara trong anime Cạo Râu Xong, Tôi Nhặt Gái Về Nhà do nữ coser 芥川Aku thể hiện đã khiến anh em không thể rời mắt.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/19/-16266772503211234007580.jpg',
"alt": 'CẠO RÂU XONG,TÔI NHẶT GÁI VỀ NHÀ,SAYU OGIWARA,芥川AKU,COSER,COSPLAY,GÁI XINH,',
"category": 'images',
"date": '29/07/2021',
"time": '04:20 PM',
"link": '/ngo-ngang-ngo-ngac-va-bat-ngua-khi-ngam-tam-hon-khung-bo-cua-nu-waifu-duoc-yeu-thich-nhat-hien-nay',
"zcomponent": 'page_20210729162057',
"filepath": './20210729162057-ngo-ngang-ngo-ngac-va-bat-ngua-khi-ngam-tam-hon-khung-bo-cua-nu-waifu-duoc-yeu-thich-nhat-hien-nay.js'
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
  '"Ngỡ ngàng, ngơ ngác và bật ngửa" khi ngắm tâm hồn khủng bố của nữ waifu được yêu thích nhất hiện nay';
const author = "Mẹ Sề";
const source = "Pháp luật và bạn đọc";
const timestamp = "29/07/2021 04:20 PM";
const description =
  "Loạt ảnh cosplay cô nàng Sayu Ogiwara trong anime Cạo Râu Xong, Tôi Nhặt Gái Về Nhà do nữ coser 芥川Aku thể hiện đã khiến anh em không thể rời mắt.";
const link =
  "ngo-ngang-ngo-ngac-va-bat-ngua-khi-ngam-tam-hon-khung-bo-cua-nu-waifu-duoc-yeu-thich-nhat-hien-nay";
const tagparam = [
  "CẠO RÂU XONG",
  "TÔI NHẶT GÁI VỀ NHÀ",
  "SAYU OGIWARA",
  "芥川AKU",
  "COSER",
  "COSPLAY",
  "GÁI XINH",
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

export default function page_20210729162057() {
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
                      Với nội dung nhân văn cùng nhân vật nữ chính ấn tượng,
                      anime <strong>Cạo Râu Xong</strong>,{" "}
                      <strong>Tôi Nhặt Gái Về Nhà</strong> chính là một trong
                      những cái tên đình đám nhất của anime mùa xuân 2021. Do
                      đó, ngày càng có nhiều <strong>coser</strong> chọn các
                      waifu trong bộ phim hoạt hình này để hóa thân thành.{" "}
                    </p>
                    <p>
                      Đáng chú ý ở chỗ, tuy <strong>Cạo Râu Xong</strong>,{" "}
                      <strong>Tôi Nhặt Gái Về Nhà</strong> không phải là một
                      anime 18+ xôi thịt, thế nhưng các nhân vật trong tác phẩm
                      này khi được các nàng <strong>coser</strong>{" "}
                      <strong>cosplay</strong> lại, họ bỗng trở nên... cực kỳ
                      khiêu gợi và quyến rũ. Đặc biệt nữ chính{" "}
                      <strong>Sayu Ogiwara</strong> là gương mặt được cosplay
                      nhiều nhất, các phiên bản hóa trang thành cô nàng này đều
                      rất nóng bỏng và hút mắt.
                    </p>
                    <p>
                      Dưới đây mời các bạn cùng xem loạt ảnh{" "}
                      <strong>cosplay</strong> cô nàng{" "}
                      <strong>Sayu Ogiwara</strong> do nữ <strong>coser</strong>{" "}
                      <strong>芥川Aku</strong> thể hiện nhé! Đảm bảo khó mà rời
                      mắt được đó!
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/19/1626677152592646766036-16266771648542087629670.jpg"
                      alt="1, CẠO RÂU XONG,TÔI NHẶT GÁI VỀ NHÀ,SAYU OGIWARA,芥川AKU,COSER,COSPLAY,GÁI XINH,"
                      note="Sayu Ogiwara phiên bản người thật nóng bỏng như thế này có làm anh em điêu đứng?"
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/19/-16266772433611736615094.jpg"
                      alt="2, CẠO RÂU XONG,TÔI NHẶT GÁI VỀ NHÀ,SAYU OGIWARA,芥川AKU,COSER,COSPLAY,GÁI XINH,"
                      note="Bạn có hài lòng với những hình ảnh cosplay của nữ coser 芥川Aku thành waifu Sayu không?"
                    />
                    <RelationNewsInPage category={category} />
                    <p>
                      Bạn cảm thấy những hình ảnh <strong>cosplay</strong> trên
                      thế nào? Chúng quá khác biệt so với{" "}
                      <strong>Cạo Râu Xong</strong>,{" "}
                      <strong>Tôi Nhặt Gái Về Nhà</strong> hay đã mô tả chính
                      xác "nội dung" mà anime truyền tải?
                    </p>
                    <p>
                      Và nếu câu chuyện của <strong>Cạo Râu Xong</strong>,{" "}
                      <strong>Tôi Nhặt Gái Về Nhà</strong> xảy ra với chính bạn
                      và nữ chính là 1 cô nàng bốc lửa như ở trên xin được ở
                      nhờ, liệu bạn có đủ sức hành động như nam chính Yoshida
                      hay không?
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/19/-16266772503211234007580.jpg"
                      alt="3, CẠO RÂU XONG,TÔI NHẶT GÁI VỀ NHÀ,SAYU OGIWARA,芥川AKU,COSER,COSPLAY,GÁI XINH,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/19/-1626677172875190949201.jpg"
                      alt="4, CẠO RÂU XONG,TÔI NHẶT GÁI VỀ NHÀ,SAYU OGIWARA,芥川AKU,COSER,COSPLAY,GÁI XINH,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/19/1626677180381376351716-162667719946990418992.jpg"
                      alt="5, CẠO RÂU XONG,TÔI NHẶT GÁI VỀ NHÀ,SAYU OGIWARA,芥川AKU,COSER,COSPLAY,GÁI XINH,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/19/-1626677210510556619792.jpg"
                      alt="6, CẠO RÂU XONG,TÔI NHẶT GÁI VỀ NHÀ,SAYU OGIWARA,芥川AKU,COSER,COSPLAY,GÁI XINH,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/19/-1626677234148282609770.jpg"
                      alt="7, CẠO RÂU XONG,TÔI NHẶT GÁI VỀ NHÀ,SAYU OGIWARA,芥川AKU,COSER,COSPLAY,GÁI XINH,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/19/-1626677263828638216072.jpg"
                      alt="8, CẠO RÂU XONG,TÔI NHẶT GÁI VỀ NHÀ,SAYU OGIWARA,芥川AKU,COSER,COSPLAY,GÁI XINH,"
                      note=""
                    />
                  </div>
                  <AdsHorizontal />
                </div>

                <RandomFeature />

                <div className="source">Source: {source}</div>

                <FacebookShareButton link={facebookLinkShare} />

                <div className="tags">Tags: {updatedTags}</div>
              </div>
            </div>
          </div>
        </div>
      </Content>
    </>
  );
}
