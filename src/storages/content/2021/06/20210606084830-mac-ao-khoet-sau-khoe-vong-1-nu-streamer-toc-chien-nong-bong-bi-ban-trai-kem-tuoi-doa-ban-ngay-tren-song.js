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

 <ContentItem title="Mặc áo khoét sâu khoe vòng 1, nữ streamer Tốc Chiến nóng bỏng bị bạn trai kém tuổi dọa “ban' ngay trên sóng"\description="Không thích người yêu ăn mặc hớ hênh khi livestream, bạn trai của nữ streamer nổi giận đùng đùng." 
src="https://gamek.mediacdn.vn/133514250583805952/2021/6/6/anh-chup-man-hinh-2021-06-06-luc-091820-1622947842625468028111.png" 
alt="Streamer, Lai Lai, Zeros, Toc Chien, " 
category="images" 
time="06/06/2021 08:48 AM" 
link="/mac-ao-khoet-sau-khoe-vong-1-nu-streamer-toc-chien-nong-bong-bi-ban-trai-kem-tuoi-doa-ban-ngay-tren-song"/>

{title:"Mặc áo khoét sâu khoe vòng 1, nữ streamer Tốc Chiến nóng bỏng bị bạn trai kém tuổi dọa “ban' ngay trên sóng",\description:"Không thích người yêu ăn mặc hớ hênh khi livestream, bạn trai của nữ streamer nổi giận đùng đùng." ,
src:"https://gamek.mediacdn.vn/133514250583805952/2021/6/6/anh-chup-man-hinh-2021-06-06-luc-091820-1622947842625468028111.png" ,
alt:"Streamer, Lai Lai, Zeros, Toc Chien, " ,
category:"images" ,
time:"06/06/2021 08:48 AM" ,
link:"/mac-ao-khoet-sau-khoe-vong-1-nu-streamer-toc-chien-nong-bong-bi-ban-trai-kem-tuoi-doa-ban-ngay-tren-song",component:"page_20210606084830",
filepath:"./20210606084830-mac-ao-khoet-sau-khoe-vong-1-nu-streamer-toc-chien-nong-bong-bi-ban-trai-kem-tuoi-doa-ban-ngay-tren-song.js"},

Mặc áo khoét sâu khoe vòng 1, nữ streamer Tốc Chiến nóng bỏng bị bạn trai kém tuổi dọa “ban' ngay trên sóng
Không thích người yêu ăn mặc hớ hênh khi livestream, bạn trai của nữ streamer nổi giận đùng đùng.
https://gamek.mediacdn.vn/133514250583805952/2021/6/6/anh-chup-man-hinh-2021-06-06-luc-091820-1622947842625468028111.png
Streamer, Lai Lai, Zeros, Toc Chien, 
images
06/06/2021
08:48 AM
/mac-ao-khoet-sau-khoe-vong-1-nu-streamer-toc-chien-nong-bong-bi-ban-trai-kem-tuoi-doa-ban-ngay-tren-song
page_20210606084830
./20210606084830-mac-ao-khoet-sau-khoe-vong-1-nu-streamer-toc-chien-nong-bong-bi-ban-trai-kem-tuoi-doa-ban-ngay-tren-song.js




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
  "Mặc áo khoét sâu khoe vòng 1, nữ streamer Tốc Chiến nóng bỏng bị bạn trai kém tuổi dọa “ban' ngay trên sóng";
const author = "Kayle";
const source = "Pháp luật và bạn đọc";
const date = "06/06/2021";
const time = "08:48 AM";
const description =
  "Không thích người yêu ăn mặc hớ hênh khi livestream, bạn trai của nữ streamer nổi giận đùng đùng.";
const link =
  "mac-ao-khoet-sau-khoe-vong-1-nu-streamer-toc-chien-nong-bong-bi-ban-trai-kem-tuoi-doa-ban-ngay-tren-song";
const tagparam = ["streamer", "lai-lai", "zeros", "toc-chien"];
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

export default function page_20210606084830() {
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
              >
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
                      Người hâm mộ đang rất tò mò, không biết mối quan hệ của
                      streamer Lai Lai và bạn trai kém tuổi Zeros có còn êm ấm
                      sau buổi livestream tối qua hay không.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/6/anh-chup-man-hinh-2021-06-06-luc-091820-1622947842625468028111.png"
                      alt="Streamer, Lai Lai, Zeros, Toc Chien, "
                      note=""
                    />
                    <p>
                      Chuyện là bóng hồng nóng bỏng của làng game Tốc Chiến sau
                      một thời gian “ở ẩn" chuyên việc kinh doanh, nay đã
                      “comeback" cộng đồng với vai trò là tuyển thủ, tham gia
                      một vài giải đấu và cũng đã chứng minh được kỹ năng của
                      mình. Mới đây cô nàng còn mạnh dạn stream lại để vừa chơi
                      game vừa có nhiều dịp trò chuyện với người hâm mộ.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/6/anh-chup-man-hinh-2021-06-06-luc-091446-16229478424341021902834.png"
                      alt="Streamer, Lai Lai, Zeros, Toc Chien, "
                      note=""
                    />
                    <p>
                      Để gây ấn tượng với fan, Lai Lai đã chọn trang phục là
                      chiếc áo body đơn giản nhưng lại có một cú khoét sâu ở
                      ngực, giúp cô nàng khoe được vòng một căng tràn. Với fan
                      nam thì điều này quả thật là rất “bổ mắt" thế nhưng đồng
                      nghĩa với chuyện anh chàng bạn trai của nữ streamer khó
                      chịu. Zeros công khai bình luận gay gắt trên sóng: “M mặc
                      cái áo???”, “Bỏ m được chưa?” và đỉnh điểm là “T bỏ m
                      nha"...
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/6/anh-chup-man-hinh-2021-06-06-luc-091727-16229478424601853109268.png"
                      alt="Streamer, Lai Lai, Zeros, Toc Chien, "
                      note=""
                    />
                    <p>
                      Phản ứng lại sự giận dữ của bạn trai, Lai Lai cố gắng
                      thanh minh: “Tại chiếc áo này dễ thương, em cũng thường
                      xuyên mặc qua anh mà". Tất nhiên nhiêu đó là không đủ để
                      xoa dịu, tuyển thủ bị VCS cấm vĩnh viễn nhấn mạnh: “Nhà
                      phải có nóc, mặc áo hoodie và quần thể dục vào, như vậy
                      mới được lên stream". Dẫu vậy thì nữ streamer dường như bỏ
                      ngoài tai, tiếp tục stream thêm gần hai tiếng đồng hồ.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/6/anh-chup-man-hinh-2021-06-06-luc-094015-16229478426422008683966.png"
                      alt="Streamer, Lai Lai, Zeros, Toc Chien, "
                      note=""
                    />
                    <p>
                      Lai Lai tên thật là Vũ Hoài Trinh, được biết đến là một
                      hot girl có tiếng trong cộng đồng game thủ Rules of
                      Survival, PUBG và hiện là Tốc Chiến. Vốn sở hữu gương mặt
                      xinh đẹp, thân hình nóng bỏng với số đo ba vòng gợi cảm,
                      đặc biệt là vòng 1 to tròn không tì vết, nên Lai Lai thu
                      hút được một lượng fan hâm mộ đáng kể trên trang cá nhân
                      Facebook và trên tài khoản Instagram.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/6/photo-1-16229479791921002492443.jpg"
                      alt="Streamer, Lai Lai, Zeros, Toc Chien, "
                      note=""
                    />
                    <p>
                      Chủ yếu stream trên Facebook, cô nàng gái xinh 9x này có
                      được lượng người xem, tương tác khá ổn định. Nữ streamer
                      được nhiều anh em game thủ nhận xét là người vui tính và
                      cực kì sexy mỗi lần lên stream. Sau scandal lộ ảnh nóng
                      show ngực, thì Lai Lai trở nên kín tiếng và ít hoạt động
                      trên mạng xã hội.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/6/photo-1-1622947994940271167544.jpg"
                      alt="Streamer, Lai Lai, Zeros, Toc Chien, "
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
