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
"timestamp": '06/08/2021 09:38 AM',
"title": '8 game có cốt truyện sinh ra để "lừa" game thủ (P1)',
"description": 'Những tựa game này có cốt truyện hết sức "hại não" và game thủ sẽ bị lừa nhiều lần khi chơi.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/8/6/photo-1-16282515535541214055067.png',
"alt": 'DOKI DOKI LITERATURE CLUB,HEAVY RAIN,FARCRY 3,CONTRA,',
"category": 'games',
"date": '06/08/2021',
"time": '09:38 AM',
"link": '/8-game-co-cot-truyen-sinh-ra-de-lua-game-thu-p1',
"zcomponent": 'page_20210806093837',
"filepath": './20210806093837-8-game-co-cot-truyen-sinh-ra-de-lua-game-thu-p1.js'
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
const title = '8 game có cốt truyện sinh ra để "lừa" game thủ (P1)';
const author = "Real Madrid";
const source = "Pháp luật và bạn đọc";
const timestamp = "06/08/2021 09:38 AM";
const description =
  'Những tựa game này có cốt truyện hết sức "hại não" và game thủ sẽ bị lừa nhiều lần khi chơi.';
const link = "8-game-co-cot-truyen-sinh-ra-de-lua-game-thu-p1";
const tagparam = [
  "DOKI DOKI LITERATURE CLUB",
  "HEAVY RAIN",
  "FARCRY 3",
  "CONTRA",
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

export default function page_20210806093837() {
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
                    <h5>Doki Doki Literature Club!</h5>
                    <p>
                      Trong <strong>Doki Doki Literature Club</strong>!, người
                      chơi sẽ được làm quen với Sayori - một cô gái tôn vinh
                      hạnh phúc trên tất cả, Natsuki - dễ thương với kỹ năng
                      giao tiếp tuyệt vời, Yuri - ít nói và bí ẩn nhưng thích
                      tìm niềm vui trong những cuốn sách. Và cuối cùng là Monika
                      - cô nàng đứng đầu CLB văn thơ này. Sau khi gặp gỡ từng
                      người bạn sẽ bắt đầu làm quen và tìm hiểu sâu hơn đến tính
                      cách cũng như cuộc sống của họ, từ đó chọn cho mình một
                      tình yêu đích thực.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/6/photo-1-16282515535541214055067.png"
                      alt="1, DOKI DOKI LITERATURE CLUB,HEAVY RAIN,FARCRY 3,CONTRA,"
                      note=""
                    />
                    <p>
                      Một khi đi sâu vào tìm hiểu từng cô gái, bạn sẽ thấy nằm
                      sâu bên trong họ là một con người ghê tởm và đáng sợ gấp
                      vô vàn lần. Qua những lời thơ những tưởng mang ý nghĩa ảo
                      mộng của họ, bạn sẽ dần khám phá ra những sự thật hãi hùng
                      về bản chất của mỗi người. Nhưng ngay khi bạn cảm thấy sự
                      nghi ngờ của mình bắt dấy lên cao thì ngay lập tức{" "}
                      <strong>Doki Doki Literature Club</strong> khiến bạn nhận
                      một cú sốc thật sự. Một nhân vật trong game qua đời. Ngay
                      sau khi chi tiết này xảy ra, hình ảnh của nhân vật đã qua
                      đời trong game bỗng dưng bị lỗi, và cứ giật giật liên tục
                      không ngừng.
                    </p>
                    <p>
                      Đến lần chơi thứ hai,{" "}
                      <strong>Doki Doki Literature Club</strong> nhốt người chơi
                      trong thế giới của chính nó, và bạn sẽ cảm thấy sợ hãi tột
                      độ vì đến chiếc máy tính của mình còn chẳng điều khiển
                      được chứ đừng nói gì nhân vật trong game. Game cũng rất
                      "khôn", biết xoa dịu game thủ, tạo ra cảm giác an toàn,
                      khiến họ lơ là việc chuẩn bị tinh thần trước một cú hù dọa
                      đầy chất lượng, tim bắn ra khỏi lồng ngực.
                    </p>
                    <h5>Heavy Rain</h5>
                    <p>
                      Tất cả những vụ án mạng bí ẩn đều có lấy một hoặc hai nút
                      thắt không ai ngờ tới nào đó, và đối với một tựa game
                      trinh thám đậm tính điện ảnh như "
                      <strong>Heavy Rain</strong>", nó đã không hề thiếu đi yếu
                      tố hấp dẫn này. Trong quá trình chơi game, người chơi sẽ
                      điều khiển nhiều nhân vật khác nhau, truy tìm manh mối về
                      một bé trai bị bắt cóc bởi một tên giết người hàng loạt.{" "}
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/6/photo-1-1628251311289950502067.jpg"
                      alt="2, DOKI DOKI LITERATURE CLUB,HEAVY RAIN,FARCRY 3,CONTRA,"
                      note=""
                    />
                    <p>
                      Nút thắt lớn nhất, gây bất ngờ nhất của "
                      <strong>Heavy Rain</strong>" chính là khi thân phận thực
                      sự của tên sát nhân được hé lộ: Ông ta chính là vị thám tử
                      tư đang điều tra vụ án này, và người chơi đã dành không ít
                      thời gian điều khiển ông ta. Quả là một nút thắt chết
                      người khiến cho người chơi nào cũng phải gãi đầu gãi tai.
                    </p>
                    <RelationNewsInPage category={category} />
                    <h5>FarCry 3</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/6/photo-1-1628251697627292419462.jpg"
                      alt="3, DOKI DOKI LITERATURE CLUB,HEAVY RAIN,FARCRY 3,CONTRA,"
                      note=""
                    />
                    <p>
                      Far Cry 3 cũng có một đoạn kết thuộc vào hàng ác mộng nếu
                      bạn thật sự đặt bản thân của mình vào đó. Trò chơi khép
                      lại với cảnh tượng bạn tiêu diệt toàn bộ những người bạn
                      còn lại, sau đó bản thân bạn bị đâm xuyên qua giữa tim như
                      một phần của một nghi thức hiến tế cổ xưa. Nó thật sự là
                      một trong những đoạn kết kinh dị và ấn tương nhất.
                    </p>
                    <h5>Contra</h5>
                    <p>
                      Với những người đã từng gắn bó tuổi thơ với hệ máy NES,
                      chắc hẳn đã chơi "nhẵn mặt" mọi ngóc nghách trong{" "}
                      <strong>Contra</strong>. Nguồn gốc cụm từ "phá đảo" cũng
                      chính là bắt nguồn từ đây khi trùm cuối Red Falcon bị diệt
                      và hòn đảo của tập đoàn tội ác này cũng nổ tan thành mây
                      khói. Tuy nhiên, có một sự thật mà rất nhiều người không
                      biết. Màn "phá đảo" trên không phải là kết thúc duy nhất
                      của Contra. Trước khi được phổ biến trên hệ máy NES,
                      Contra trên Amstad CPC với tên gọi Gryzor đã có một kết
                      thúc buồn bã, tan thương hơn rất nhiều.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/6/photo-1-1628251784530169926475.jpg"
                      alt="4, DOKI DOKI LITERATURE CLUB,HEAVY RAIN,FARCRY 3,CONTRA,"
                      note=""
                    />
                    <p>
                      Vẫn với những màn chơi nảy lửa, vẫn là cuộc thư hùng cuối
                      cùng với Red Falcon, tuy nhiên cái kết trong Gryzor lại
                      khiến nhiều người bàng hoàng. Vào khoảng khắc cuối cùng
                      trước khi Red Falcon bị tiêu diệt, tên độc tài này đã kích
                      hoạt một hệ thống đặc biệt, cho phá hủy toàn bộ thế giới.
                      Kết cục là bạn vẫn tiêu diệt được tên trùm gian ác này
                      nhưng trái đất cũng đã tan biến.
                    </p>
                    <p>
                      Sau này, khi chuyển sang hệ máy NES, Konami đã thay đổi
                      phần kết của game để nó trở nên nhân văn và có hậu hơn.
                      Kết quả, cụm từ "phá đảo" được ra đời và duy trì trong
                      cộng đồng game thủ Việt cho đến tận bây giờ.
                    </p>
                    <p>(Còn tiếp...)</p>
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
