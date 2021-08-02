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
"timestamp": '29/07/2021 04:12 PM',
"title": 'Sướng mắt ngắm mỹ nhân Azur Lane diện áo cắt xẻ tạo dáng khoe đường cong nóng bỏng',
"description": 'Cùng chiêm ngưỡng màn cosplay mỹ nhân Saint Louis trong Azur Lane hở bạo dưới đây nhé!',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/5/photo-1-1625482170584801269582.jpeg',
"alt": 'AZUR LANE,MỸ NHÂN,GÁI XINH,COSER,COSPLAY,SAINT LOUIS,',
"category": 'images',
"date": '29/07/2021',
"time": '04:12 PM',
"link": '/suong-mat-ngam-my-nhan-azur-lane-dien-ao-cat-xe-tao-dang-khoe-duong-cong-nong-bong',
"zcomponent": 'page_20210729161220',
"filepath": './20210729161220-suong-mat-ngam-my-nhan-azur-lane-dien-ao-cat-xe-tao-dang-khoe-duong-cong-nong-bong.js'
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
  "Sướng mắt ngắm mỹ nhân Azur Lane diện áo cắt xẻ tạo dáng khoe đường cong nóng bỏng";
const author = "Mẹ Sề";
const source = "Pháp luật và bạn đọc";
const timestamp = "29/07/2021 04:12 PM";
const description =
  "Cùng chiêm ngưỡng màn cosplay mỹ nhân Saint Louis trong Azur Lane hở bạo dưới đây nhé!";
const link =
  "suong-mat-ngam-my-nhan-azur-lane-dien-ao-cat-xe-tao-dang-khoe-duong-cong-nong-bong";
const tagparam = [
  "AZUR LANE",
  "MỸ NHÂN",
  "GÁI XINH",
  "COSER",
  "COSPLAY",
  "SAINT LOUIS",
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

export default function page_20210729161220() {
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
                    <strong>Azur Lane</strong> là tựa game di động của Nhật Bản
                    có nội dung xoay quanh các… nhân vật nữ xinh đẹp và “đúng
                    chuẩn” số đo 3 vòng. Lấy cảm hứng từ các tàu chiến có thật
                    trong lịch sử, tựa game này đã "nữ tính hóa" những cỗ máy
                    sắt thép cục mịch ấy thành những nữ nhân tuyệt sắc. Những
                    tàu chiến khi hóa nữ nhân cái nào cũng đẹp hết nên người
                    chơi sẽ không cảm thấy nhàm chán khi tham gia tựa game này.{" "}
                  </p>
                  <p>
                    Với số lượng nhân vật nữ nhiều và vô cùng xinh đẹp, các{" "}
                    <strong>mỹ nhân</strong> trong tựa game đình đám{" "}
                    <strong>Azur Lane</strong> là đề tài hấp dẫn để các{" "}
                    <strong>coser</strong> khai thác. Trong bài viết hôm nay,
                    mời các bạn cùng ngắm mỹ nhân <strong>Saint Louis</strong>{" "}
                    bước ra đời thật nhé!
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/5/photo-1-1625482193076943294083.jpeg"
                    alt="1, AZUR LANE,MỸ NHÂN,GÁI XINH,COSER,COSPLAY,SAINT LOUIS,"
                    note="Ở đời thực, Saint Louis là chiếc cuối cùng trong số ba chiếc thiết giáp hạm tiền được chế tạo cho Hải quân Pháp trong giữa những năm 1890. Nó thường được chọn để phục vụ như một soái hạm."
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/5/photo-1-1625482186719953287966.jpeg"
                    alt="2, AZUR LANE,MỸ NHÂN,GÁI XINH,COSER,COSPLAY,SAINT LOUIS,"
                    note="Trong game, Saint Louis hóa thân thành 1 mỹ nhân xinh đẹp, có độ hiếm thuộc hàng priority và thuộc về phe Iris Libre."
                  />
                  <p>
                    <strong>Saint Louis</strong> có kỹ năng "Enforced HE Ammo"
                    và kỹ năng này được biết là có liên quan đến kỹ năng chỉ huy
                    của World Of Warships "Inertial Fuse for High Explosive" hay
                    viết tắt IFHE. Thế nên, được sở hữu Saint Louis là niềm ước
                    mơ của rất nhiều game thủ.
                  </p>
                  <RelationNewsInPage category={category} />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/5/photo-1-16254821640861290390270.jpeg"
                    alt="3, AZUR LANE,MỸ NHÂN,GÁI XINH,COSER,COSPLAY,SAINT LOUIS,"
                    note="Nữ cosplayer hóa thân trong bộ ảnh cosplay Azur Lane Saint Louis này có tên là @ 神探 火 狸 狸, là một trong những coser nổi tiếng xứ Trung."
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/5/photo-1-162548217985227147716.jpeg"
                    alt="4, AZUR LANE,MỸ NHÂN,GÁI XINH,COSER,COSPLAY,SAINT LOUIS,"
                    note="Cô được yêu thích vì sở hữu nhan sắc khả ái cùng thân hình nóng bỏng, giúp dễ hóa thân thành nhiều nhân vật khác nhau."
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/5/photo-1-1625482170584801269582.jpeg"
                    alt="5, AZUR LANE,MỸ NHÂN,GÁI XINH,COSER,COSPLAY,SAINT LOUIS,"
                    note=""
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/5/photo-1-1625482208079491000060.jpeg"
                    alt="6, AZUR LANE,MỸ NHÂN,GÁI XINH,COSER,COSPLAY,SAINT LOUIS,"
                    note=""
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/5/photo-1-1625482201508923233562.jpeg"
                    alt="7, AZUR LANE,MỸ NHÂN,GÁI XINH,COSER,COSPLAY,SAINT LOUIS,"
                    note=""
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/5/photo-1-1625482214720154701936.jpeg"
                    alt="8, AZUR LANE,MỸ NHÂN,GÁI XINH,COSER,COSPLAY,SAINT LOUIS,"
                    note=""
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/5/photo-1-1625482220476673514545.jpeg"
                    alt="9, AZUR LANE,MỸ NHÂN,GÁI XINH,COSER,COSPLAY,SAINT LOUIS,"
                    note=""
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/5/photo-1-16254822272731999678460.jpeg"
                    alt="10, AZUR LANE,MỸ NHÂN,GÁI XINH,COSER,COSPLAY,SAINT LOUIS,"
                    note=""
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/5/photo-1-1625482232644871333042.jpeg"
                    alt="11, AZUR LANE,MỸ NHÂN,GÁI XINH,COSER,COSPLAY,SAINT LOUIS,"
                    note=""
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/5/photo-1-1625482237605173390252.jpeg"
                    alt="12, AZUR LANE,MỸ NHÂN,GÁI XINH,COSER,COSPLAY,SAINT LOUIS,"
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
