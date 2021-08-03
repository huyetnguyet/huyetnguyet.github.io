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
"timestamp": '03/08/2021 11:12 AM',
"title": 'Bao năm qua, người chơi Counter-Strike 1.1 bị “lừa” bởi bí mật vũ khí trong game, đa số chẳng hề hay biết',
"description": 'Có một sự thật khó thú vị mà bao năm nay, game thủ Counter-Strike phiên bản 1.1 bị qua mặt mà không hề hay biết.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/2/photo-1-1627922207809764016793.jpg',
"alt": 'COUNTER-STRIKE 1.1,CS:GO,COUNTER-STRIKE,COUNTER STRIKE,COUNTER STRIKE 1.1,TIN TỨC GAME,',
"category": 'games',
"date": '03/08/2021',
"time": '11:12 AM',
"link": '/bao-nam-qua-nguoi-choi-counter-strike-11-bi-lua-boi-bi-mat-vu-khi-trong-game-da-so-chang-he-hay-biet',
"zcomponent": 'page_20210803111232',
"filepath": './20210803111232-bao-nam-qua-nguoi-choi-counter-strike-11-bi-lua-boi-bi-mat-vu-khi-trong-game-da-so-chang-he-hay-biet.js'
}



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
  "Bao năm qua, người chơi Counter-Strike 1.1 bị “lừa” bởi bí mật vũ khí trong game, đa số chẳng hề hay biết";
const author = "Vergil";
const source = "Pháp luật và bạn đọc";
const timestamp = "03/08/2021 11:12 AM";
const description =
  "Có một sự thật khó thú vị mà bao năm nay, game thủ Counter-Strike phiên bản 1.1 bị qua mặt mà không hề hay biết.";
const link =
  "bao-nam-qua-nguoi-choi-counter-strike-11-bi-lua-boi-bi-mat-vu-khi-trong-game-da-so-chang-he-hay-biet";
const tagparam = [
  "COUNTER-STRIKE 1.1",
  "CS:GO",
  "COUNTER-STRIKE",
  "COUNTER STRIKE",
  "COUNTER STRIKE 1.1",
  "TIN TỨC GAME",
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

export default function page_20210803111232() {
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
                      <strong>
                        <strong>Counter-Strike</strong> 1.1
                      </strong>{" "}
                      là một tựa game được xem là huyền thoại của dòng game bắn
                      súng và quan trọng là tựa game này có vị trí đặc biệt quan
                      trọng trong tâm trí của biết bao thế hệ game thủ Việt.
                      Counter-Strike 1.1 được khai sinh bởi một nhà phát triển
                      gốc Việt là Lê Minh. Có lẽ, hiếm có tựa game nào gắn bó
                      với cả một thời thanh xuân, thơ ấu đầy dữ dội của thế hệ
                      game thủ 8x, 9x. Tuy nhiên, Counter-Strike 1.1 lại chưa sở
                      hữu một bí mật thú vị mà ít người để ý.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/2/photo-1-1627922207809764016793.jpg"
                      alt="1, COUNTER-STRIKE 1.1,CS:GO,COUNTER-STRIKE,COUNTER STRIKE,COUNTER STRIKE 1.1,TIN TỨC GAME,"
                      note=""
                    />
                    <p>
                      Được biết, Lê Minh là một người thuận tay trái, đó chính
                      là lý do khi phát triển{" "}
                      <strong>
                        <strong>Counter-Strike</strong> 1.1
                      </strong>{" "}
                      đã thiết kế tất cả vũ khí trong game nằm ở phía trái của
                      màn hình. Điều này dẫn đến một vấn đề là khi đưa hệ thống
                      vũ khí này về bên phải như bình thường thì sẽ phải thiết
                      kế lại toàn bộ từ đầu, do hai mặt bên của các loại súng là
                      hoàn toàn không giống nhau.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/2/cs16-02-1627922485929802000485.jpg"
                      alt="2, COUNTER-STRIKE 1.1,CS:GO,COUNTER-STRIKE,COUNTER STRIKE,COUNTER STRIKE 1.1,TIN TỨC GAME,"
                      note=""
                    />
                    <p>
                      Do vậy, để tiết kiệm thời gian mà lê Minh đã “lật” ngược
                      số vũ khí này trở lại, khiến cho đại đa số người chơi đều
                      dùng súng trong game bị “ngược” so với nguyên mẫu ngoài
                      đời thật. Lấy ví dụ về khẩu AK 47 huyền thoại, theo nguyên
                      mẫu của Mikhail Timofeyevich Kalashnikov thiết kế ngoài
                      đời thật, phần bệ khóa nòng và thoi đẩy sẽ nằm ở mặt bên
                      phải của khẩu súng.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Thế nhưng, trong{" "}
                      <strong>
                        <strong>Counter-Strike</strong> 1.1
                      </strong>
                      , phần này lại nằm ở phía bên trái, ngược hoàn toàn so với
                      vũ khí ngoài đời thật. Không chỉ AK 47 mà tất cả các loại
                      vũ khí có phần lên đạn nằm ở bên phải đều ngược so với
                      súng thật. Đó là một điều mà ít có game thủ để ý trong
                      suốt chiều dài lịch sử của tựa game này.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/2/photo-1-1627922386912172539172.jpg"
                      alt="3, COUNTER-STRIKE 1.1,CS:GO,COUNTER-STRIKE,COUNTER STRIKE,COUNTER STRIKE 1.1,TIN TỨC GAME,"
                      note=""
                    />
                    <p>
                      Tất nhiên, điều này chỉ xảy ra trong{" "}
                      <strong>
                        <strong>Counter-Strike</strong> 1.1
                      </strong>
                      . Các phiên bản Counter-Strike sau này hay{" "}
                      <strong>CS:GO</strong> hiện nay đều được sửa lại theo đúng
                      mô hình chuẩn ngoài đời. Thế nhưng, đây không phải là một
                      sai lầm, mà đơn giản là một ký ức, kỷ niệm và sự thật rất
                      thú vị trong tựa game huyền thoại này mà thôi
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/2/photo-1-1627922511436249089597.jpg"
                      alt="4, COUNTER-STRIKE 1.1,CS:GO,COUNTER-STRIKE,COUNTER STRIKE,COUNTER STRIKE 1.1,TIN TỨC GAME,"
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
