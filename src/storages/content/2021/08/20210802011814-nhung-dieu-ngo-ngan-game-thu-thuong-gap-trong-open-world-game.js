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
"timestamp": '02/08/2021 01:18 AM',
"title": 'Những điều ngớ ngẩn game thủ thường gặp trong open world game',
"description": 'Dù open world game được xây dựng với mục tiêu mô phỏng lại thế giới thực càng giống càng tốt, nhưng vẫn có những chi tiết cực kỳ ngớ ngẩn tồn tại trong phần lớn các tựa game.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/7/29/-16275505649941752679599.jpg',
"alt": 'KHÁM PHÁ,GAME OPEN WORLD,GAME ONLINE,TRÒ CHƠI ĐIỆN TỬ,GIẢI TRÍ,',
"category": 'games',
"date": '02/08/2021',
"time": '01:18 AM',
"link": '/nhung-dieu-ngo-ngan-game-thu-thuong-gap-trong-open-world-game',
"zcomponent": 'page_20210802011814',
"filepath": './20210802011814-nhung-dieu-ngo-ngan-game-thu-thuong-gap-trong-open-world-game.js'
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
const title = "Những điều ngớ ngẩn game thủ thường gặp trong open world game";
const author = "Green";
const source = "Trí Thức Trẻ";
const timestamp = "02/08/2021 01:18 AM";
const description =
  "Dù open world game được xây dựng với mục tiêu mô phỏng lại thế giới thực càng giống càng tốt, nhưng vẫn có những chi tiết cực kỳ ngớ ngẩn tồn tại trong phần lớn các tựa game.";
const link = "nhung-dieu-ngo-ngan-game-thu-thuong-gap-trong-open-world-game";
const tagparam = [
  "KHÁM PHÁ",
  "GAME OPEN WORLD",
  "GAME ONLINE",
  "TRÒ CHƠI ĐIỆN TỬ",
  "GIẢI TRÍ",
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

export default function page_20210802011814() {
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
                      Open world game thường được đánh giá cao ở việc xây dựng
                      thế giới lẫn gameplay. Tuy nhiên, không phải lúc nào các
                      chi tiết trong game cũng chân thực và chính xác như người
                      ta kỳ vọng. Ngược lại, trong rất nhiều tựa game, các tình
                      tiết ngớ ngẩn khó chấp nhận vẫn tồn tại nhan nhản.
                    </p>
                    <h5>1. Đất nông nghiệp</h5>
                    <p>
                      Đúng hơn là diện tích đất nông nghiệp mà người chơi có thể
                      nhìn thấy trong cả thế giới game rộng lớn. Có một thực tế
                      là trong nhiều tựa <strong>game open world</strong>, bối
                      cảnh thường diễn ra ở các thành phố. Thế nên khi vượt khỏi
                      phạm vi thành phố, người chơi sẽ thường xuyên bắt gặp một
                      ngôi làng nằm bơ vơ giữa vùng rừng núi hoang vu với một
                      vài con đường dẫn ra bên ngoài. Ngoài ra, sẽ có thêm vài
                      bãi đất trống, những khu rừng rậm rạp.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/29/-16275506223281926288782.jpg"
                      alt="2, KHÁM PHÁ,GAME OPEN WORLD,GAME ONLINE,TRÒ CHƠI ĐIỆN TỬ,GIẢI TRÍ,"
                      note=""
                    />
                    <p>
                      Tuy nhiên, tại sao lại chỉ có đất đai hoang vu? Trong thực
                      tế, những ngôi làng sẽ gắn với cuộc sống nông nghiệp, vì
                      thế lẽ ra cần có bãi chăn thả gia súc, cánh đồng, khu vườn
                      nào đó mới đúng. Nhưng có rất ít trò chơi nhớ đến điều
                      này.
                    </p>
                    <h5>2. Các pháo đài</h5>
                    <p>
                      Các pháo đài trong game được xây dựng ở những địa điểm vô
                      cùng ngớ ngẩn. Đó là nhận xét của nhiều game thủ lâu năm.
                      Đôi khi, chúng còn tọa lạc ở những vị trí dễ bị bao vây.
                      Ngoài ra, các nhà sản xuất game thường có xu hướng phóng
                      đại việc sử dụng pháo để đánh chiếm pháo đài, trong khi về
                      mặt chiến thuật thì đào hào bao quanh các bức tường có vẻ
                      được áp dụng phổ biến hơn.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/29/-16275506430921530410882.jpg"
                      alt="3, KHÁM PHÁ,GAME OPEN WORLD,GAME ONLINE,TRÒ CHƠI ĐIỆN TỬ,GIẢI TRÍ,"
                      note=""
                    />
                    <p>
                      Trò chơi hiếm hoi quan tâm đến vị trí xây pháo đài là
                      Elder Scrolls Online. Tuy nhiên, game vẫn thiếu những cái
                      bao và thang vốn được dùng cho việc đánh hạ một pháo đài.
                    </p>
                    <RelationNewsInPage category={category} />
                    <h5>3. Cách các NPC tương tác</h5>

                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/29/-16275505649941752679599.jpg"
                      alt="1, KHÁM PHÁ,GAME OPEN WORLD,GAME ONLINE,TRÒ CHƠI ĐIỆN TỬ,GIẢI TRÍ,"
                      note=""
                    />
                    <p>
                      Ví dụ trong trò chơi Ultima 9, theo chia sẻ từ một game
                      thủ, thiết lập các nhân vật NPC khiến anh ta cảm thấy bối
                      rối. Gameplay cho phép kiếm tiền bằng cách đi săn chuột,
                      còn rương châu báu thì ở khắp mọi nơi, nhưng bằng một cách
                      khó hiểu nào đó, thế giới trong game vẫn tồn tại những NPC
                      nghèo khổ đến mức phải đi lang thang.
                    </p>
                    <h5>4. Tỷ lệ khá phi logic</h5>
                    <p>
                      Có vẻ như để khắc họa thế giới chân thực nhất có thể nên
                      các nhà làm game thường thu nhỏ mọi thứ với tỷ lệ không
                      thật sự chuẩn. Những chi tiết ngớ ngẩn như 5 ngôi nhà với
                      20 dân thành một làng, 50 nhà thành một thành phố lớn…
                      xuất hiện nhan nhản. Trên quãng đường khoảng 200 m, cảnh
                      vật có thể biến đổi từ địa hình núi tuyết sang sa mạc khô
                      cằn chỉ trong chớp mắt.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/29/-162755059994929981080.jpg"
                      alt="4, KHÁM PHÁ,GAME OPEN WORLD,GAME ONLINE,TRÒ CHƠI ĐIỆN TỬ,GIẢI TRÍ,"
                      note=""
                    />
                    <p>
                      Một trong những ví dụ điển hình cho việc này là game Far
                      Cry 2, khi người chơi có thể đi dọc châu Phi chỉ trong 2
                      phút. Các địa hình sa mạc, thảo nguyên, rừng nhiệt đới,
                      thảo nguyên, sa mạc xuất hiện loanh quanh với nhau.
                    </p>
                    <h5>5. Sự tương tác với thế giới</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/29/-1627550671598106914089.jpg"
                      alt="5, KHÁM PHÁ,GAME OPEN WORLD,GAME ONLINE,TRÒ CHƠI ĐIỆN TỬ,GIẢI TRÍ,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/29/-16275506872771214093800.jpg"
                      alt="6, KHÁM PHÁ,GAME OPEN WORLD,GAME ONLINE,TRÒ CHƠI ĐIỆN TỬ,GIẢI TRÍ,"
                      note=""
                    />
                    <p>
                      Hầu hết các game thủ tìm đến open world game đều mong muốn
                      được trải nghiệm một thế giới mô phỏng gần giống thế giới
                      thực. Điều này có nghĩa là các NPC, gameplay… không phải
                      lúc nào cũng xoay quanh người chơi. Tuy nhiên, cho đến nay
                      hiếm trò chơi nào làm được như vậy, người chơi vẫn phải
                      gặp những NPC cung cấp dịch vụ, làm nhiệm vụ hướng dẫn chứ
                      không hề có cuộc sống riêng. Thậm chí, nếu chẳng may người
                      chơi lỡ hại ai đó thì họ cũng không phải cảm thấy hối hận
                      vì đấy chỉ là nhân vật phụ.
                    </p>
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
