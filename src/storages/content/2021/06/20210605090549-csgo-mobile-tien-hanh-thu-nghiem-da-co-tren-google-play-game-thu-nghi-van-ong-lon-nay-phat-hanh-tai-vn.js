import React from "react";
import "components/page.css";
import { AdsHorizontal, AdsVertical } from "components/adsMethods";
import { RandomFeature } from "components/methods";

import { Content, ContentImage, FacebookShareButton } from "components/content";

import { Helmet } from "react-helmet";

/* ---------------------------------------------------------------- */

/*

 <ContentItem title="“CS:GO Mobile” tiến hành thử nghiệm, đã có trên Google Play, game thủ nghi vấn ông lớn này phát hành tại VN?"\description="Mới đây, một Fanpage tại Việt Nam đã đăng tải thông tin về tựa game được cho là rất giống với CS:GO và dự đoán một ông lớn sẽ phát hành." 
src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/5/photo-1-16228904622902071607147.jpg" 
alt="Csgo, Csgo Mobile, The Origin Mission, Garena, Vng, Tin Tuc Game, Valve, " 
category="games" 
time="05/06/2021 09:05 AM" 
link="/csgo-mobile-tien-hanh-thu-nghiem-da-co-tren-google-play-game-thu-nghi-van-ong-lon-nay-phat-hanh-tai-vn"/>

{title:"“CS:GO Mobile” tiến hành thử nghiệm, đã có trên Google Play, game thủ nghi vấn ông lớn này phát hành tại VN?",\description:"Mới đây, một Fanpage tại Việt Nam đã đăng tải thông tin về tựa game được cho là rất giống với CS:GO và dự đoán một ông lớn sẽ phát hành." ,
src:"https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/5/photo-1-16228904622902071607147.jpg" ,
alt:"Csgo, Csgo Mobile, The Origin Mission, Garena, Vng, Tin Tuc Game, Valve, " ,
category:"games" ,
time:"05/06/2021 09:05 AM" ,
link:"/csgo-mobile-tien-hanh-thu-nghiem-da-co-tren-google-play-game-thu-nghi-van-ong-lon-nay-phat-hanh-tai-vn",component:"page_20210605090549",
filepath:"../storages/content/20210605090549-csgo-mobile-tien-hanh-thu-nghiem-da-co-tren-google-play-game-thu-nghi-van-ong-lon-nay-phat-hanh-tai-vn.js"},

“CS:GO Mobile” tiến hành thử nghiệm, đã có trên Google Play, game thủ nghi vấn ông lớn này phát hành tại VN?
Mới đây, một Fanpage tại Việt Nam đã đăng tải thông tin về tựa game được cho là rất giống với CS:GO và dự đoán một ông lớn sẽ phát hành.
https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/5/photo-1-16228904622902071607147.jpg
Csgo, Csgo Mobile, The Origin Mission, Garena, Vng, Tin Tuc Game, Valve, 
games
05/06/2021
09:05 AM
/csgo-mobile-tien-hanh-thu-nghiem-da-co-tren-google-play-game-thu-nghi-van-ong-lon-nay-phat-hanh-tai-vn
page_20210605090549
../storages/content/20210605090549-csgo-mobile-tien-hanh-thu-nghiem-da-co-tren-google-play-game-thu-nghi-van-ong-lon-nay-phat-hanh-tai-vn.js




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
  "“CS:GO Mobile” tiến hành thử nghiệm, đã có trên Google Play, game thủ nghi vấn ông lớn này phát hành tại VN?";
const author = "Lee Chueng Hee";
const source = "Pháp luật và bạn đọc";
const date = "05/06/2021";
const time = "09:05 AM";
const description =
  "Mới đây, một Fanpage tại Việt Nam đã đăng tải thông tin về tựa game được cho là rất giống với CS:GO và dự đoán một ông lớn sẽ phát hành.";
const link =
  "csgo-mobile-tien-hanh-thu-nghiem-da-co-tren-google-play-game-thu-nghi-van-ong-lon-nay-phat-hanh-tai-vn";
const tagparam = [
  "csgo",
  "csgo-mobile",
  "the-origin-mission",
  "garena",
  "vng",
  "tin-tuc-game",
  "valve",
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

export default function page_20210605090549() {
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
            <AdsHorizontal />
            <div className="content">
              <div className="contentContainer">
                <p className="description">{description}</p>
                <div className="contentBody">
                  <p>
                    Tất nhiên, điều đầu tiên phải khẳng định đây không phải là
                    phiên bản CS:GO Mobile chính chủ mà chỉ là “hàng fake”. Tựa
                    game này có tên là The Origin Mission và xây dựng đồ họa
                    cũng như lối chơi dựa trên CS:GO.Vì vậy, không ít game thủ
                    đã nhận định tựa game này giống với tựa game FPS kinh điển
                    của Valve. Tuy nhiên thì đây lại không phải sản phẩm có bản
                    quyền chính thức từ Valve, do đó rất dễ bị “ăn gậy” bản
                    quyền.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/5/photo-1-16228904622902071607147.jpg"
                    alt="Csgo, Csgo Mobile, The Origin Mission, Garena, Vng, Tin Tuc Game, Valve, "
                    note=""
                  />
                  <p>
                    Tựa game này hiện tại đã xuất hiện trên Google Play thị
                    trường Thái Lan, hỗ trợ cả ngôn ngữ tiếng Anh và đang trong
                    quá trình thử nghiệm kín trước khi chính thức phát hành.
                    Việc có mặt trên Google Play cho thấy “CS:GO Mobile” đã,
                    đang và sẽ quyết tâm phát hành trên nền tảng di động, bất
                    chấp việc tựa game này có khả năng sẽ bị ăn gậy bản quyền.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/5/photo-1-1622890466835744985811.jpg"
                    alt="Csgo, Csgo Mobile, The Origin Mission, Garena, Vng, Tin Tuc Game, Valve, "
                    note=""
                  />
                  <p>
                    Theo như đồn đoán của Fanpage Cộng đồng Game Mobile China
                    thì The Origin Mission rất có thể sẽ được phát hành bởi
                    Garena giống như bom tấn Free Fire đang được phát hành tại
                    thị trường Đông Nam Á. Điều này không phải là không có lý
                    bởi sân chơi khu vực Đông Nam Á vốn là địa chỉ quen thuộc
                    của Garena.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/5/photo-2-1622890466794863614784.jpg"
                    alt="Csgo, Csgo Mobile, The Origin Mission, Garena, Vng, Tin Tuc Game, Valve, "
                    note=""
                  />
                  <p>
                    Tuy nhiên cần phải lưu ý, Thái Lan cũng là quốc gia mà thị
                    phần của VNG chiếm tỉ trọng rất lớn. VNG từng phát hành
                    Crossfire Legends tại Thái Lan, do vậy nếu trong trường hợp
                    tựa game “CS:GO Mobile” này được cấp phép phát hành mà không
                    bị kiện bởi Valve thì không biết chừng lại có một cuộc tranh
                    đoạt thị phần giữa hai ông lớn này.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/5/photo-1-1622890470389424679942.jpg"
                    alt="Csgo, Csgo Mobile, The Origin Mission, Garena, Vng, Tin Tuc Game, Valve, "
                    note=""
                  />
                  <p>
                    Tất nhiên, đấy là trong trường hợp Valve không ngó ngàng đến
                    vấn đề bản quyền của tựa game “CS:GO Mobile” này, còn nếu
                    không thì số phận của nó có lẽ cũng sẽ giống như Area F2 khi
                    có thể đột tử bất cứ lúc nào.
                  </p>
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
