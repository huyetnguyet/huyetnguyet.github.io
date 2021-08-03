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
"timestamp": '29/07/2021 04:13 PM',
"title": 'Cosplay nhân vật Street Fighter trong Free Fire, các hot girl Việt nóng bỏng và sexy với vòng 3 "hút mắt"',
"description": 'Nhân vật này được người chơi Free Fire chào đón, sau thông tin đây là thành quả từ màn hợp tác toàn cầu của tựa game này với Street Fighter V.',
"src": 'https://gamek.mediacdn.vn/thumb_w/660/133514250583805952/2021/7/5/373-3737940street-fighter-v-street-fighter-game-chun-li-16255024378632038847535.png',
"alt": 'HOT GIRL,FREE FIRE,CHUN-LI,CHI CỦ CẢI,LÊN BỐNG,',
"category": 'images',
"date": '29/07/2021',
"time": '04:13 PM',
"link": '/cosplay-nhan-vat-street-fighter-trong-free-fire-cac-hot-girl-viet-nong-bong-va-sexy-voi-vong-3-hut-mat',
"zcomponent": 'page_20210729161332',
"filepath": './20210729161332-cosplay-nhan-vat-street-fighter-trong-free-fire-cac-hot-girl-viet-nong-bong-va-sexy-voi-vong-3-hut-mat.js'
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
  'Cosplay nhân vật Street Fighter trong Free Fire, các hot girl Việt nóng bỏng và sexy với vòng 3 "hút mắt"';
const author = "Kayle";
const source = "Trí Thức Trẻ";
const timestamp = "29/07/2021 04:13 PM";
const description =
  "Nhân vật này được người chơi Free Fire chào đón, sau thông tin đây là thành quả từ màn hợp tác toàn cầu của tựa game này với Street Fighter V.";
const link =
  "cosplay-nhan-vat-street-fighter-trong-free-fire-cac-hot-girl-viet-nong-bong-va-sexy-voi-vong-3-hut-mat";
const tagparam = ["HOT GIRL", "FREE FIRE", "CHUN-LI", "CHI CỦ CẢI", "LÊN BỐNG"];
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

export default function page_20210729161332() {
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
                      Mới đây, thông tin về sự kiện toàn cầu “Free Fighter” - cơ
                      hội để người chơi <strong>Free Fire</strong> có thể mang
                      vào trong trận đấu những bộ trang phục độc đáo của hai
                      nhân vật game được yêu thích: Ryu và{" "}
                      <strong>Chun-li</strong>. Bên cạnh đó, sự kiện sẽ có thêm
                      một loạt những nội dung độc quyền trong game, giao diện
                      đặc biệt, skin vật phẩm mới,...
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/660/133514250583805952/2021/7/5/373-3737940street-fighter-v-street-fighter-game-chun-li-16255024378632038847535.png"
                      alt="1, HOT GIRL,FREE FIRE,CHUN-LI,CHI CỦ CẢI,LÊN BỐNG,"
                      note=""
                    />
                    <p>
                      Trong đó, ấn tượng nhất là bộ sưu tập bao gồm trang phục
                      biểu tượng của <strong>Chun-Li</strong>, gồm có chiếc
                      qipao xanh dương, vòng tay gai, cùng với skin bom keo mang
                      hình tượng nữ võ sĩ.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/660/133514250583805952/2021/7/5/tai-xuong-16255024379281571638415.jpeg"
                      alt="2, HOT GIRL,FREE FIRE,CHUN-LI,CHI CỦ CẢI,LÊN BỐNG,"
                      note=""
                    />
                    <p>
                      Phấn khích trước dự án này cũng như tham gia vào hoạt động
                      chào mừng sự kiện này, hai cái tên đình đám làng game cũng
                      như mạng xã hội là <strong>Chi Củ Cải</strong> và Lê Bống
                      đã tiết lộ những hình ảnh đầu tiên khi tham gia cosplay
                      nhân vật này.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/660/133514250583805952/2021/7/5/20774198429662484803622107430060936405892991n-16255025212351475423649.jpeg"
                      alt="3, HOT GIRL,FREE FIRE,CHUN-LI,CHI CỦ CẢI,LÊN BỐNG,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/660/133514250583805952/2021/7/5/2094080332966248400362218129438174972965325n-16255025212401070762264.jpeg"
                      alt="4, HOT GIRL,FREE FIRE,CHUN-LI,CHI CỦ CẢI,LÊN BỐNG,"
                      note=""
                    />
                    <p>
                      Vũ Ngọc Kim Chi nổi lên từ đầu năm 2019 với vai trò là
                      streamer của tựa game Liên Minh Huyền Thoại được Dũng CT
                      động viên và giúp đỡ. Đến nay, sau hai năm nỗ lực, cô nàng
                      đã chứng minh được khả năng của mình cũng như có được vị
                      trí nhất định. Đặc biệt, Chi được người hâm mộ cho là bóng
                      hồng sexy nhất làng game.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/5/photo-1-1625502592899564130080.jpg"
                      alt="5, HOT GIRL,FREE FIRE,CHUN-LI,CHI CỦ CẢI,LÊN BỐNG,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/5/photo-1-16255026104631166869500.jpg"
                      alt="6, HOT GIRL,FREE FIRE,CHUN-LI,CHI CỦ CẢI,LÊN BỐNG,"
                      note=""
                    />
                    <p>
                      Không chỉ phát huy được “nội tại” ở lĩnh vực streamer,{" "}
                      <strong>hot girl</strong> sinh năm 1999 này còn là mẫu
                      ảnh, KOL có tiếng. Với phong cách sexy của mình, “bóng
                      hồng” đến từ Hải Phòng này nhiều lần “đốt mắt” anh em game
                      thủ, và cosplay <strong>Chun-li</strong> cũng không ngoại
                      lệ.
                    </p>
                    <RelationNewsInPage category={category} />

                    <p>
                      Trước đó, nhiều phiên bản cosplay <strong>Chun-Li</strong>{" "}
                      đã khiến cộng đồng mạng phải tranh cãi:
                    </p>

                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/5/photo-1-16255027440271029618874.jpg"
                      alt="7, HOT GIRL,FREE FIRE,CHUN-LI,CHI CỦ CẢI,LÊN BỐNG,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/5/photo-1-16255027636631649527432.jpg"
                      alt="8, HOT GIRL,FREE FIRE,CHUN-LI,CHI CỦ CẢI,LÊN BỐNG,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/5/photo-1-16255028162851056202691.jpg"
                      alt="9, HOT GIRL,FREE FIRE,CHUN-LI,CHI CỦ CẢI,LÊN BỐNG,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/5/photo-1-16255028246921224650663.jpg"
                      alt="10, HOT GIRL,FREE FIRE,CHUN-LI,CHI CỦ CẢI,LÊN BỐNG,"
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
