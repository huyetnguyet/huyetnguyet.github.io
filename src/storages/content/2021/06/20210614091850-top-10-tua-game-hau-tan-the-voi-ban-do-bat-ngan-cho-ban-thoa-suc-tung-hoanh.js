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
"timestamp": '14/06/2021 09:18 AM',
"title": 'Top 10 tựa game hậu tận thế với bản đồ bạt ngàn cho bạn thỏa sức tung hoành',
"description": 'Những tựa game cho anh em tha hồ giải trí.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/12/photo-1-16234965349261716902608.jpg',
"alt": 'Game, Cong Dong Mang, The Gioi Mo, Tin Tuc Game, Game Hay, ',
"category": 'games',
"date": '14/06/2021',
"time": '09:18 AM',
"link": '/top-10-tua-game-hau-tan-the-voi-ban-do-bat-ngan-cho-ban-thoa-suc-tung-hoanh',
"zcomponent": 'page_20210614091850',
"filepath": './20210614091850-top-10-tua-game-hau-tan-the-voi-ban-do-bat-ngan-cho-ban-thoa-suc-tung-hoanh.js'
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
  "Top 10 tựa game hậu tận thế với bản đồ bạt ngàn cho bạn thỏa sức tung hoành";
const author = "Axium Fox";
const source = "Pháp luật và bạn đọc";
const timestamp = "14/06/2021 09:18 AM";
const description = "Những tựa game cho anh em tha hồ giải trí.";
const link =
  "top-10-tua-game-hau-tan-the-voi-ban-do-bat-ngan-cho-ban-thoa-suc-tung-hoanh";
const tagparam = [
  "game",
  "cong-dong-mang",
  "the-gioi-mo",
  "tin-tuc-game",
  "game-hay",
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

export default function page_20210614091850() {
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
                      Qua từng năm tháng thì những tựa <strong>game</strong> thế
                      giới mở càng có bản đồ rộng lớn và đồng thời bên trong
                      cũng ẩn chứa rất nhiều điều hay ho cho game thủ khám phá.
                      Bên cạnh những bối cảnh thành phố trù phú, hiện đại thì
                      chúng ta cũng không thiếu những tựa game lấy bối cảnh hậu
                      tận thế mang màu sắc hoang tàn, đầy ảm đạm. Sau đây là top
                      10 tựa game hậu tận thế với bản đồ bạt ngàn cho bạn thỏa
                      sức tung hoành.
                    </p>
                    <h3>Days Gone – gần 22,5 km²</h3>

                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/12/photo-1-16234965349261716902608.jpg"
                      alt="Game, Cong Dong Mang, The Gioi Mo, Tin Tuc Game, Game Hay, "
                      note=""
                    />
                    <p>
                      Khi nhắc đến những tựa <strong>game</strong> đại dịch
                      zombie hay tận thế zombie, người ta thường sẽ liên tưởng
                      ngay tới những thành phố, đô thị đông đúc nhiều người
                      sống. Có thể nói, đây gần như được xem là một mô-típ kinh
                      điển khi các tựa game nổi tiếng như The Last of Us và The
                      Walking Dead đều thực hiện theo "tiêu chuẩn" này. Tuy
                      nhiên, Days Gone thì lại khác. Tựa game hậu tận thế zombie
                      này lấy bối cảnh ở những vùng đất hoang dã của nước Mỹ.
                    </p>
                    <p>
                      Cốt truyện <strong>game</strong> xoay quanh một anh chàng
                      lái xe đơn độc đi lang thang trên những con đường quanh co
                      của vùng Oregon sau khi trận dịch bùng phát và lấn át sự
                      sống. Do bản đồ game rất rộng, game thủ có thể phóng trên
                      con xe yêu dấu hàng giờ từ khu vực này đến khu vực khác mà
                      không cảm thấy chán.
                    </p>
                    <h3>Metro Exodus – 58 km²</h3>

                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/12/photo-1-16234965366761116540454.png"
                      alt="Game, Cong Dong Mang, The Gioi Mo, Tin Tuc Game, Game Hay, "
                      note=""
                    />
                    <p>
                      Câu chuyện của loạt series <strong>game</strong> Metro lấy
                      bối cảnh hậu tận thế này kể về nước Nga sau sự kiện chiến
                      tranh hạt nhân. Vụ nổ đã khiến toàn bộ bề mặt Trái Đất hầu
                      như không thể ở được nữa, nên số ít những con người còn
                      sống sót sau thảm họa ấy buộc phải chui xuống dưới lòng
                      đất và xây dựng lại xã hội loài người trong một mạng lưới
                      tàu điện ngầm. Bên cạnh đó, bức xạ từ vụ nổ cũng tác động
                      đến các loài động vật hoang dã, khiến chúng bị đột biến và
                      có hình dạng bất thường.
                    </p>
                    <p>
                      Các bạn sẽ theo chân một nhóm người sống sót rời khỏi
                      đường hầm tàu điện ngầm với hy vọng có thể kiếm thấy một
                      chỗ ở mới trên đất liền. Cốt truyện chính của Metro Exodus
                      sẽ không để bạn khám phá hết toàn bộ các vùng trên mặt
                      đất, nhưng nếu bạn thích thì có thể thử đi "du lịch" một
                      chuyến và tham quan luôn các loài động vật đột biến khát
                      máu. GVN 360 tụi mình nghĩ rằng đây sẽ là một chuyến "du
                      lịch" không hề nhàm chán tí nào đâu.
                    </p>
                    <h3>The Legend Of Zelda: Breath Of The Wild – 61,83 km²</h3>

                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/12/photo-2-1623496538198304507768.jpg"
                      alt="Game, Cong Dong Mang, The Gioi Mo, Tin Tuc Game, Game Hay, "
                      note=""
                    />
                    <p>
                      Trước khi ra mắt, đã có rất nhiều người nghi ngờ về sự
                      thành công của một tựa <strong>game</strong> Zelda được
                      làm theo thể loại thế giới mở. Tuy nhiên, sau khi ra mắt
                      thì Breath of The Wild lại trở thành một trong những phần
                      game được yêu thích nhất trong toàn bộ series Zelda.{" "}
                    </p>
                    <p>
                      Cốt truyện <strong>game</strong> bắt đầu bằng việc Link
                      tình dậy thì phát hiện ra trong lúc cậu "ngủ" đã có một
                      thảm họa kinh hoàng xảy ra và phá hủy Hyrule. Mặc dù các
                      thị trấn và con người vẫn còn sống, phần lớn nền văn minh
                      của Hyrule đã bị xóa bỏ hoàn toàn và Ganon vẫn còn bị mắc
                      kẹt bên trong đài.
                    </p>
                    <RelationNewsInPage category={category} />

                    <p>
                      Trong quá trình khám phá vùng đất rộng lớn của Breath of
                      The Wild, Link sẽ học được một số mẹo và cách để có thể
                      chạy, leo và lướt qua các chướng ngại vật. Tính đến nay
                      thì phần <strong>game</strong> hậu tận thế này là phần
                      game Zelda có bản đồ rộng nhất trong toàn bộ series.
                    </p>
                    <h3>Biomutant – 62,16 km²</h3>

                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/12/photo-3-16234965376991055463903.jpg"
                      alt="Game, Cong Dong Mang, The Gioi Mo, Tin Tuc Game, Game Hay, "
                      note=""
                    />
                    <p>
                      Trước khi tựa <strong>game</strong> này ra mắt, cộng đồng
                      game thủ đã đồn đoán rất nhiều về thời lượng cũng như là
                      kích thước bản đồ trong Biomutant. Giờ game đã ra mắt, và
                      hầu như những ai đã chơi qua game này đều cảm thấy thế
                      giới trong Biomutant rất rộng lớn, một phần là nhờ nó có
                      rất nhiều thứ để khám phá.
                    </p>
                    <p>
                      <strong>Game</strong> có bối cảnh hậu tận thế trong một
                      thế giới với hệ sinh thái toàn những sinh vật bị biến dị
                      do chất độc và phóng xạ. Bạn sẽ vào vai một sinh vật được
                      đột biến gen trên hành trình giải cứu thế giới (hoặc là
                      phá hủy nó). Trên đường đi, bạn sẽ bắt gặp rất nhiều bộ
                      tộc, quái vật, băng cướp khác nhau với đủ loại vũ khí có
                      thể hành bạn nhừ tử. Song song đó là hệ thống nhiệm vụ
                      phong phú, cho phép bạn khám phá các ngóc ngách trong
                      Biomutant.
                    </p>
                    <h3>Mad Max – 123,8 km²</h3>

                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/12/photo-4-16234965371931679330266.jpg"
                      alt="Game, Cong Dong Mang, The Gioi Mo, Tin Tuc Game, Game Hay, "
                      note=""
                    />
                    <p>
                      Một trong những bài học rút ra được trong tựa{" "}
                      <strong>game</strong> hậu tận thế này, đó là nếu bạn muốn
                      đi đến bất kì nơi đâu cũng cần phải có một chiếc xe vận
                      hành ổn định và đủ xăng cho nó chạy. Tương tự như trong
                      phim, phiên bản game cũng tập trung vào những con xe vô
                      cùng hầm hố.
                    </p>
                    <p>
                      Bạn sẽ được điều khiển Max, tuy bị mất xe lúc đầu{" "}
                      <strong>game</strong> nhưng sau đó đã gặp được một người
                      thợ máy đầy tài năng, khuyến khích anh ta nhanh chóng ráp
                      một con xe mới cho riêng mình. Đó là chiếc Magnum Opus. Để
                      tìm linh kiện và phụ kiện cho chiếc xe này, bạn cần phải
                      lái xe băng qua vùng đất cằn cỗi, chống lại lũ cướp, chiếm
                      các căn cứ, và hỗ trợ những người xung quanh, giúp họ
                      thiết lập lại trật tự cho vùng đất này.
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
