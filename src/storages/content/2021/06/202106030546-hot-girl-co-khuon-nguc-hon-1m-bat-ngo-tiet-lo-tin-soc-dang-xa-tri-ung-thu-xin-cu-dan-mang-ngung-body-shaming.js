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
 <ContentItem
 title="Hot girl có khuôn ngực hơn 1m bất ngờ tiết lộ tin sốc: đang xạ trị ung thư, xin cư dân mạng ngưng body shaming"
content="Thông tin đang điều trị ung thư từ phía hot girl ngực “khủng” khiến fan của cô nàng không ngừng lo lắng." 
src="https://gamek.mediacdn.vn/133514250583805952/2021/6/1/photo-1-16225441898391637114654.jpg" 
alt="Hot Girl" 
category="images" 
time="03/06/2021 05:46 PM" 
link="/hot-girl-co-khuon-nguc-hon-1m-bat-ngo-tiet-lo-tin-soc-dang-xa-tri-ung-thu-xin-cu-dan-mang-ngung-body-shaming"/>

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
  "Hot girl có khuôn ngực hơn 1m bất ngờ tiết lộ tin sốc: đang xạ trị ung thư, xin cư dân mạng ngưng body shaming";
const author = "Kayle";
const source = "Trí Thức Trẻ";
const date = "03/06/2021";
const time = "05:46 PM";
const description =
  "Thông tin đang điều trị ung thư từ phía hot girl ngực “khủng” khiến fan của cô nàng không ngừng lo lắng.";
const link =
  "hot-girl-co-khuon-nguc-hon-1m-bat-ngo-tiet-lo-tin-soc-dang-xa-tri-ung-thu-xin-cu-dan-mang-ngung-body-shaming";
const tagparam = ["hot-girl", "nguc-khung", "ung-thu", "body-shaming"];
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

export default function page_20210603054621() {
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
              <div className="author">{author}</div> - Theo {source} | {date}{" "}
              {time}
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
                      Nổi lên từ hai năm trước với lý do sở hữu vòng 1 cực
                      khủng, lên đến 110cm, Trần Minh Thiên Di phải vượt lên ánh
                      nhìn soi mói của bạn bè và những người xung quanh để tự
                      tin, thậm chí không ngại công khai những tấm hình lộ da
                      thịt và đường cong cơ thể lên mạng xã hội. Đến nay, dù
                      không hoạt động nghệ thuật hay tham gia showbiz nhưng hot
                      girl 20 tuổi vẫn thu hút sự quan tâm, chú ý của hàng trăm
                      nghìn người theo dõi.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/1/photo-1-16225441898391637114654.jpg"
                      alt="Hot Girl"
                      note=""
                    />
                    <p>
                      Mỗi bài đăng của cô nàng có được lượt tương tác cũng như
                      bình luận lớn. Và trong thời gian gần đây, Thiên Di thường
                      xuyên nhận phải những dòng comment có tính chất body
                      shaming, chê bai ngoại hình với thái độ tiêu cực quá đáng.
                      Vậy nên cô nàng buộc phải lên tiếng trên Facebook cá nhân.
                      Cũng từ đây mà người hâm mộ được hot girl tiết lộ bí mật
                      cực sốc: Cô nàng mắc bệnh ung thư tuyến giáp và đang trong
                      giai đoạn xạ trị.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/1/screenshot1022-1622544245302463623850.jpg"
                      alt="Hot Girl"
                      note=""
                    />
                    <p>
                      “Mọi người theo dõi mình cũng biết mình đang điều trị bệnh
                      K giáp, việc điều trị bệnh làm mình phải đi bệnh viện liên
                      tục. Mỗi lần xạ trị là mình phải bồi bổ cơ thể mình phải
                      ăn thật nhiều để cơ thể không vì xạ trị mà yếu đi nên việc
                      mình ốm mập bất thường là có nguyên do cả.
                    </p>
                    <RelationNewsInPage />
                    <p>
                      Vậy nên các bạn đừng bảo mình mập, sề hay còi quá mình
                      buồn lắm. Mình không phải người nổi tiếng hay gì cả nên
                      đừng áp đặt mình theo quy chuẩn các bạn. Cảm ơn vì theo
                      dõi và đọc những gì mình viết”.
                    </p>
                    <p>
                      Từ bất ngờ đến lo lắng là tâm trạng chung của những người
                      yêu mến Thiên Di. Fan của cô nàng liên tục gửi những lời
                      động viên đồng thời chúc cho sức khỏe của cô gái trẻ sớm
                      bình phục.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/1/screenshot1021-16225443242041497203529-16225443679701188850745.png"
                      alt="Hot Girl"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/1/screenshot1020-16225443242221853069600-1622544397836485704646.png"
                      alt="Hot Girl"
                      note=""
                    />
                    <p>
                      Với gương mặt thiên thần, nước da trắng nõn, vòng một
                      khủng, phong cách thời trang sexy thậm chí “hở bạo”, cô
                      gái sinh năm 2001 thu hút lượng tương tác lớn trên mạng xã
                      hội. Cô đang sở hữu hai thương hiệu thời trang của riêng
                      mình với mặt hàng là giày dép và quần áo. Tất nhiên, những
                      sản phẩm này cũng cá tính không kém chủ nhân của thương
                      hiệu.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/1/photo-1-1622544424897856281336.jpg"
                      alt="Hot Girl"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/1/photo-1-1622544450002230129564.jpg"
                      alt="Hot Girl"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/1/photo-1-16225444592331401587238.jpg"
                      alt="Hot Girl"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/1/photo-1-1622544470593407216972.jpg"
                      alt="Hot Girl"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/1/photo-1-16225444974331669275802.jpg"
                      alt="Hot Girl"
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
