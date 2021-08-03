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
"timestamp": '29/07/2021 04:09 PM',
"title": 'Những trò chơi đặc biệt được mệnh danh "sách giáo khoa" cho cả làng game',
"description": 'Những trò chơi này đã góp phần xây dựng thể loại game trở nên chuẩn chỉ hơn, qua đó trở thành "tiêu chuẩn sách giáo khoa" cho việc làm game.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/30/photo-1-16250681605831005129831.jpg',
"alt": 'GAME,THỂ LOẠI,',
"category": 'games',
"date": '29/07/2021',
"time": '04:09 PM',
"link": '/nhung-tro-choi-dac-biet-gop-phan-dinh-hinh-ca-the-loai-game',
"zcomponent": 'page_20210729160913',
"filepath": './20210729160913-nhung-tro-choi-dac-biet-gop-phan-dinh-hinh-ca-the-loai-game.js'
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
  'Những trò chơi đặc biệt được mệnh danh "sách giáo khoa" cho cả làng game';
const author = "DS";
const source = "Trí Thức Trẻ";
const timestamp = "29/07/2021 04:09 PM";
const description =
  'Những trò chơi này đã góp phần xây dựng thể loại game trở nên chuẩn chỉ hơn, qua đó trở thành "tiêu chuẩn sách giáo khoa" cho việc làm game.';
const link = "nhung-tro-choi-dac-biet-gop-phan-dinh-hinh-ca-the-loai-game";
const tagparam = ["GAME", "THỂ LOẠI"];
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

export default function page_20210729160913() {
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
                    <h5>
                      1. The Sims - <strong>thể loại</strong> mô phỏng
                    </h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/30/photo-1-16250681605831005129831.jpg"
                      alt="1, GAME,THỂ LOẠI,"
                      note=""
                    />
                    <p>
                      Nói về The Sims, nhiều nhà thiết kế chỉ có thể đưa ra
                      những lời khen ngợi về bộ óc thiên tài của Will Wright.
                      Thật vậy, cha đẻ của dòng <strong>game</strong> mô phỏng
                      này chọn một hướng đi vô cùng khác biệt - mô phỏng cuộc
                      sống thường nhật của tất cả mọi người. Ông đã chọn làm
                      game về những người xung quanh, chứ không phải sử thi về
                      một vị anh hùng nào đó hay một cuộc chiến vĩ đại.
                    </p>
                    <p>
                      Với việc loại bỏ hết tất cả các yếu tố dư thừa và những
                      mục tiêu cuối <strong>game</strong> cùng tính chơi lại
                      cao, The Sims trở thành tựa game mê hoặc cho hàng triệu
                      người. Không có gì quá đặc biệt, chỉ cần sống vui là đủ,
                      hạnh phúc nữa thì càng tuyệt vời. Will Wright với quyết
                      định xuất sắc của mình đã biến The Sims thành chuẩn mục
                      của làng game thế giới
                    </p>
                    <h5>2. Warcraft III - Chiến thuật thời gian thực</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/30/photo-1-16250681380621851309520.jpg"
                      alt="2, GAME,THỂ LOẠI,"
                      note=""
                    />
                    <p>
                      Nhắc đến Blizzard và chiến thuật thời gian thực, nhiều
                      người vẫn sẽ lấn cấn giữa Starcraft và Warcraft III. Dù
                      vậy, Warcraft III vẫn được nhiều <strong>game</strong> thủ
                      ưa chuộng hơn, bởi nó đạt đến chuẩn mực gần như xuất sắc
                      nhất của làng game tại thời điểm đó. Cốt truyện hấp dẫn,
                      phần chơi đơn cuốn hút, các cutscene được thực hiện chuẩn
                      chỉ biến việc chơi single player của Warcraft III trở nên
                      rất tuyệt vời.{" "}
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Thế nhưng, chừng đó vẫn là chưa hết. Warcraft III còn có
                      chế độ chơi multiplayer cực kỳ cân bằng và hấp dẫn, từ đó
                      nó dần dần trở thành 1 tựa <strong>game</strong> thi đấu
                      và còn được nâng tầm thành "thể thao điện tử". Sẽ không
                      quá nếu nói rằng, thế giới của game chiến thuật thời gian
                      thực bao gồm Warcraft III và phần còn lại ở thời điểm nó
                      ra mắt.{" "}
                    </p>
                    <h5>3. Quake - FPS</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/30/photo-1-1625068120448545482920.jpg"
                      alt="3, GAME,THỂ LOẠI,"
                      note=""
                    />
                    <p>
                      Wolfenstein 3D và Doom là những cái tên đầu tiên của dòng{" "}
                      <strong>game</strong> FPS, nhưng cụm từ "chuẩn mực sách
                      giáo khoa" chắc chắn phải nhắc đến Quake. iD Software đã
                      đem tới một tựa game bắn súng chuẩn chỉ với gameplay đáp
                      ứng đầy đủ các tiêu chí của dòng game FPS tại thời điểm
                      đó.{" "}
                    </p>
                    <p>
                      Thậm chí, Quake còn là tựa <strong>game</strong> đầu tiên
                      xuất hiện dưới dạng thể thao điện tử, bởi nó là tựa game
                      đầu tiên có phần thưởng lớn cho người thắng cuộc và người
                      xem có thể theo dõi dưới góc nhìn của player - một điều đã
                      trở thành chuẩn mực của ngày nay. Thậm chí, các tựa game
                      FPS hiện đại vẫn còn chịu rất nhiều ảnh hưởng từ Quake.
                    </p>
                    <h5>4. Super Meat Boy - Platformer</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/30/photo-1-16250680580131499606318.png"
                      alt="4, GAME,THỂ LOẠI,"
                      note=""
                    />
                    <p>
                      Platformer gắn liền với rất nhiều cái tên nổi tiếng,bao
                      gồm cả những tượng đài như Mario hay Sonic. Nhưng Super
                      Meat Boy, với việc đi theo công thức mới đã gần như thay
                      đổi lại hoàn toàn định nghĩa cho dòng{" "}
                      <strong>game</strong> đi cảnh 2D này.
                    </p>
                    <p>
                      Việc nâng độ khó lên cực cao của Super Meat Boy đã làm cho
                      người chơi phải có sự tập trung cao độ. Chỉ cần có một sai
                      sót nhỏ, người chơi rất dễ mất mạng và phải làm lại từ
                      đầu. Dĩ nhiên, nó không khó đến mức làm cho người chơi cảm
                      thấy "no hope", mà vẫn đòi hỏi sự chuẩn chỉ ở mức cần
                      thiết. Việc này làm cho người chơi phải học hỏi sau mỗi
                      lần chết và tìm những cách khác nhau để vượt qua màn chơi.{" "}
                    </p>
                    <p>
                      Với lối chơi tạo nên chuẩn mực mới, Super Meat Boy đã tạo
                      nên một trào lưu các tựa <strong>game</strong> đi cảnh
                      theo hướng khó nhằn hơn, thế nhưng lại hấp dẫn hơn. Thế
                      nên, nó xứng đáng nằm trong danh sách này và đứng cạnh các
                      đàn anh đình đám đi trước.
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
