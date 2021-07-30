import React from "react";
import "components/page.css";
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
"timestamp": '16/06/2021 11:31 AM',
"title": 'Những tựa game bạo lực 18+ khiến người chơi phải tránh xa vì quá đáng sợ',
"description": 'Mức độ bạo lực của các tựa game dãn nhãn không dành cho người dưới 18 tuổi này có thể khiến không ít người phải sửng sốt.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/6/14/i-medieval-ii-total-war-digital-16236590681821075933505.jpg',
"alt": 'Game, games, ',
"category": 'games',
"date": '16/06/2021',
"time": '11:31 AM',
"link": '/nhung-tua-game-bao-luc-18-khien-nguoi-choi-phai-tranh-xa-vi-qua-dang-so',
"zcomponent": 'page_20210616113102',
"filepath": './20210616113102-nhung-tua-game-bao-luc-18-khien-nguoi-choi-phai-tranh-xa-vi-qua-dang-so.js'
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
  "Những tựa game bạo lực 18+ khiến người chơi phải tránh xa vì quá đáng sợ";
const author = "DS";
const source = "Trí Thức Trẻ";
const timestamp = "16/06/2021 11:31 AM";
const description =
  "Mức độ bạo lực của các tựa game dãn nhãn không dành cho người dưới 18 tuổi này có thể khiến không ít người phải sửng sốt.";
const link =
  "nhung-tua-game-bao-luc-18-khien-nguoi-choi-phai-tranh-xa-vi-qua-dang-so";
const tagparam = ["game", "18"];
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

export default function page_20210616113102() {
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
                <div className="contentBody">
                  <p>
                    Đối với các tựa <strong>game</strong> nhập vai hoặc đối
                    kháng hướng đến người chơi trưởng thành, những chi tiết nhạy
                    cảm như bạo lực, ẩu đả… không còn quá mới mẻ. Thậm chí, ở
                    nhiều tựa game thì bạo lực gần như là một phần chắc chắn
                    phải có, gắn liền với cốt truyện lẫn gameplay. Thế nhưng,
                    ngay cả khi người chơi chấp nhận sự xuất hiện của những tình
                    tiết bạo lực, thì vẫn có không ít tựa game bị liệt vào danh
                    sách cần phải cân nhắc thật kỹ trước khi chơi vì mức độ máu
                    me vượt quá sức chịu đựng của nhiều người.
                  </p>
                  <h3>1.Total War: Medieval II</h3>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/6/14/i-medieval-ii-total-war-digital-16236590681821075933505.jpg"
                    alt="1Game, games, "
                    note=""
                  />
                  <p>
                    Tựa <strong>game</strong> video lấy này lấy bối cảnh lịch sử
                    thời Trung Cổ, người chơi có nhiệm vụ điều hành một vương
                    quốc và thống lĩnh một đội quân hùng hậu. Để xây dựng vương
                    quốc của mình, người chơi phải liên tục tham gia các cuộc
                    chiến với những đội quân khác. Tất nhiên, để mô phỏng chân
                    thực không khí chiến trường thì mức độ bạo lực sẽ không hề
                    nhẹ nhàng.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/14/medieval-ii-total-war-13-16236591086651734039680.jpg"
                    alt="2Game, games, "
                    note=""
                  />
                  <p>
                    Người chơi sẽ phải chuẩn bị tinh thần nhìn thấy cả biển thi
                    thể cả người lẫn ngựa nằm la liệt trên những con đường đá
                    dẫn đến các tòa thành. Khói lửa, máu và xác chết số lượng
                    lớn có thể khiến một vài người yếu tim cảm thấy bị ám ảnh.
                  </p>
                  <h3>2. Mafia III</h3>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/6/14/capsule616x353-1623659143586332332679.jpg"
                    alt="3Game, games, "
                    note=""
                  />
                  <p>
                    Series trò chơi này lại gây ám ảnh về bạo lực theo một cách
                    khác. Có thể những màn combat của <strong>game</strong>{" "}
                    không quá dữ dội, nhưng việc nhập vai một nhân vật chiến đấu
                    với mafia để trả thù, đánh đấm và sát hại người khác không
                    hề dễ chịu. Vấn đề ở đây là các nhân vật mà người chơi ra
                    tay hạ thủ không phải lũ quái vật, không phải sinh vật huyền
                    bí, cũng chẳng phải phù thủy pháp sư… mà chỉ là những con
                    người bình thường. Chắc chắn không nhiều người chơi thích
                    trải nghiệm cảm giác làm John Wick chút nào, dù xem thì cũng
                    gay cấn đấy.
                  </p>
                  <h3>3. Mortal Kombat</h3>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/14/mljpxw1nmzywroaayrwll1rl-16236591902501619134835.jpg"
                    alt="4Game, games, "
                    note=""
                  />
                  <p>
                    Mortal Kombat xuất hiện trong mọi cuộc bầu chọn{" "}
                    <strong>game</strong> bạo lực vì đơn giản mức độ đẫm máu,
                    đánh đấm giữa các nhân vật quá khủng khiếp. Ngay cả khi có
                    cốt truyện cùng hệ thống nhân vật được phát triển khá tỉ mỉ
                    thì tất cả những điều này đều không đóng vai trò quan trọng
                    lắm đối với người chơi, hầu hết người ta chỉ quan tâm đến
                    các màn combat mang tính bạo lực đơn thuần.
                  </p>
                  <RelationNewsInPage category={category} />
                  <h3>4. Call of Duty: Modern Warfare 2</h3>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/14/call-of-duty-modern-warfare-2-wallpaper-16236592376361650061908.jpg"
                    alt="5Game, games, "
                    note=""
                  />
                  <p>
                    Một nhiệm vụ ở đầu <strong>game</strong> đã từng khiến nhiều
                    game thủ cảm thấy sai sai, đó là nhiệm vụ mà nhóm khủng bố
                    đến sân bay và thực hiện vụ xả súng sát hại nhiều người vô
                    tội. May mắn cho Call of Duty: Modern Warfare 2 là tựa game
                    ra mắt vào năm 2009, khi các vụ xả súng ngoài đời thực chưa
                    phổ biến.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/6/14/-1623659266126492235655.jpg"
                    alt="6Game, games, "
                    note=""
                  />
                  <p>
                    Tuy nhiên,có lẽ chính các nhà phát triển{" "}
                    <strong>game</strong> cũng ý thức được độ quá đà của chi
                    tiết này, thế nên họ đã đưa ra tuyên bố miễn trừ trách nhiệm
                    cũng như để nhiệm vụ ở dạng tùy chọn không bắt buộc. Nhiệm
                    vụ bạo lực này trong game khác hẳn với Mortal Kombat hay
                    GTA, khi các tựa game được nhắc đến chí ít còn có dòng cảnh
                    báo rằng người chơi đang chơi game, còn ở Call of Duty thì
                    đó hoàn toàn là những hình ảnh mô phỏng chân thực lại một vụ
                    khủng bố.
                  </p>
                  <h3>5. Grand Theft Auto</h3>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/14/maxresdefault-16236594013661752962089.jpg"
                    alt="7Game, games, "
                    note=""
                  />
                  <p>
                    Bạo lực trong Call of Duty gây khó chịu vì mức độ chân thực,
                    thì bạo lực trong GTA gây ám ảnh vì cốt truyện mở của nó. Ở
                    tựa <strong>game</strong> này bối cảnh và thiết lập câu
                    chuyện đều khá thoải mái, ngay cả ở những nhiệm vụ bạo lực
                    như kết liễu vài người đi đường, cho nổ tung cả dãy xe hoặc
                    trực thăng cảnh sát, giết vài tên móc túi… Người chơi có thể
                    trải nghiệm bất kỳ hình thức bạo lực điên rồ nào mà họ muốn
                    thông qua tựa game, nhưng kết cục thì nhân vật của họ không
                    phải trả giá.
                  </p>
                  <p>
                    Ngoài năm tựa <strong>game</strong> kể trên, một số cái tên
                    đình đám khác cũng nổi tiếng là có một cốt truyện hoặc
                    gameplay bạo lực đến rùng rợn như Manhunt, Devil May Cry,
                    God of War…
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/14/diesel2fproductv22fgrand-theft-auto-v2fhome2fgtavegsartwork1920x1080hero-carouselv06-1920x1080-1503e4b1320d5652dd4f57466c8bcb79424b3fc0-16236594259141766843371.jpg"
                    alt="8Game, games, "
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
