import React from "react";
import "components/page.css";
import { AdsHorizontal, AdsVertical } from "components/adsMethods";
import { RandomFeature } from "components/methods";

import { Content, ContentImage, FacebookShareButton } from "components/content";

import { Helmet } from "react-helmet";

/* ---------------------------------------------------------------- */

/*

 <ContentItem title="Valorant liên tục 'đạt đỉnh', Riot hé lộ ra mắt phiên bản Mobile khiến game thủ phấn khích"\description="Trung bình trong 1 tháng, số lượng người Valorant đã đạt tới đỉnh 14 triệu người chơi. Không chỉ dừng lại ở đó, Riot còn đang chuẩn bị mang Valorant lên điện thoại." 
src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/4/photo-1-162279923339857968698.jpg" 
alt="Valorant, Riot, Tin Tuc Game, Cong Dong Mang, Valorant Mobile, " 
category="games" 
time="05/06/2021 09:01 AM" 
link="/valorant-lien-tuc-dat-dinh-riot-he-lo-ra-mat-phien-ban-mobile-khien-game-thu-phan-khich"/>

{title:"Valorant liên tục 'đạt đỉnh', Riot hé lộ ra mắt phiên bản Mobile khiến game thủ phấn khích",\description:"Trung bình trong 1 tháng, số lượng người Valorant đã đạt tới đỉnh 14 triệu người chơi. Không chỉ dừng lại ở đó, Riot còn đang chuẩn bị mang Valorant lên điện thoại." ,
src:"https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/4/photo-1-162279923339857968698.jpg" ,
alt:"Valorant, Riot, Tin Tuc Game, Cong Dong Mang, Valorant Mobile, " ,
category:"games" ,
time:"05/06/2021 09:01 AM" ,
link:"/valorant-lien-tuc-dat-dinh-riot-he-lo-ra-mat-phien-ban-mobile-khien-game-thu-phan-khich",component:"page_20210605090159",
filepath:"../storages/content/20210605090159-valorant-lien-tuc-dat-dinh-riot-he-lo-ra-mat-phien-ban-mobile-khien-game-thu-phan-khich.js"},

Valorant liên tục 'đạt đỉnh', Riot hé lộ ra mắt phiên bản Mobile khiến game thủ phấn khích
Trung bình trong 1 tháng, số lượng người Valorant đã đạt tới đỉnh 14 triệu người chơi. Không chỉ dừng lại ở đó, Riot còn đang chuẩn bị mang Valorant lên điện thoại.
https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/4/photo-1-162279923339857968698.jpg
Valorant, Riot, Tin Tuc Game, Cong Dong Mang, Valorant Mobile, 
games
05/06/2021
09:01 AM
/valorant-lien-tuc-dat-dinh-riot-he-lo-ra-mat-phien-ban-mobile-khien-game-thu-phan-khich
page_20210605090159
../storages/content/20210605090159-valorant-lien-tuc-dat-dinh-riot-he-lo-ra-mat-phien-ban-mobile-khien-game-thu-phan-khich.js




<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "games";
const categoryLink = "/games";
const title =
  "Valorant liên tục 'đạt đỉnh', Riot hé lộ ra mắt phiên bản Mobile khiến game thủ phấn khích";
const author = "Axium Fox";
const source = "Pháp luật và bạn đọc";
const date = "05/06/2021";
const time = "09:01 AM";
const description =
  "Trung bình trong 1 tháng, số lượng người Valorant đã đạt tới đỉnh 14 triệu người chơi. Không chỉ dừng lại ở đó, Riot còn đang chuẩn bị mang Valorant lên điện thoại.";
const link =
  "valorant-lien-tuc-dat-dinh-riot-he-lo-ra-mat-phien-ban-mobile-khien-game-thu-phan-khich";
const tagparam = [
  "valorant",
  "riot",
  "tin-tuc-game",
  "cong-dong-mang",
  "valorant-mobile",
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

export default function page_20210605090159() {
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
            <AdsHorizontal />
            <div className="content">
              <div className="contentContainer">
                <p className="description">{description}</p>
                <div className="contentBody">
                  <p>
                    Tính tới nay thì tựa game FPS Valorant pha trộn giữa bắn
                    súng và chiến thuật đã ra mắt người chơi trên toàn thế giới
                    được 1 năm rồi. Và để chúc mừng sinh nhật cho đứa con tròn 1
                    tuổi của mình, Riot đã thông báo rằng số lượng người chơi
                    trung bình 1 tháng giờ đây đã tăng lên con số 14 triệu người
                    chơi cùng lúc - một con số khiến nhiều đối thủ phải ngưỡng
                    mộ. Cùng với đó, họ cũng chuẩn bị mở rộng phạm vi tiếp cận
                    game thủ bằng cách đưa Valorant lên điện thoại.
                  </p>

                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/4/photo-1-162279923339857968698.jpg"
                    alt="Valorant, Riot, Tin Tuc Game, Cong Dong Mang, Valorant Mobile, "
                    note=""
                  />
                  <p>
                    Ngoài thông tin về việc tựa game này sẽ mở rộng trên nền
                    tảng mobile ra, Riot không cung cấp thông tin gì thêm. Điều
                    đó cũng có nghĩa là chúng ta chưa thể biết ngày ra mắt,
                    phiên bản mobile sẽ có những thay đổi gì so với phiên bản PC
                    hoặc là liệu Riot có bê nguyên xi từ phiên bản PC xuống
                    mobile hay không?{" "}
                  </p>
                  <p>
                    Tuy nhiên, đối với những game thủ mobile không có điều kiện
                    mua PC mà vẫn muốn được trải nghiệm Valorant thì đây quả
                    thật là một tin đáng mừng.
                  </p>
                  <p>
                    Bên cạnh đó, nhân ngày sinh nhật của Valorant, Riot cũng tổ
                    chức một sự kiện kéo dài 1 tháng với nhiều tính năng và
                    chương trình hay ho dành cho game thủ. Bao gồm người chơi sẽ
                    được nhận các thẻ "player card" và các thẻ sự kiện miễn phí
                    trong suốt tháng 6.
                  </p>
                  <p>Tóm tắt:</p>
                  <p>
                    - Để chúc mừng sinh nhật Valorant tròn 1 tuổi, Riot đã thông
                    báo lượng người chơi trung bình 1 tháng đã tăng lên con số
                    14 triệu.{" "}
                  </p>
                  <p>
                    - Đồng thời, Riot cũng tiết lộ họ sắp đưa Valorant lên điện
                    thoại.
                  </p>
                  <p>- Tuy nhiên, Riot không cung cấp thông tin gì thêm.</p>
                  <p>
                    - Riot còn tổ chức một sự kiện kéo dài 1 tháng với nhiều
                    tính năng và chương trình hay ho dành cho game thủ Chương
                    trình bao gồm các thẻ "player card" và các thẻ sự kiện miễn
                    phí trong suốt tháng 6.
                  </p>
                  <p>Nguồn pcgamesn biên dịch GVN360</p>
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
