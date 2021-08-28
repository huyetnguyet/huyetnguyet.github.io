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
"timestamp": '28/08/2021 08:37 AM',
"title": 'Top 10 tựa game hành động phiêu lưu hay nhất trên PC (P.2)',
"description": 'Nếu anh em là tín đồ của thể loại game phiêu lưu, hành động, khám phá... thì chắc chắn không thể bỏ qua 10 cái tên vô cùng đình đám này rồi.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/8/23/photo-1-1629660434065250463231.png',
"alt": 'GAME,GAME ĐỈNH,GAME HAY,TOP GAME,PHIÊU LƯU,GAME HÀNH ĐỘNG,THẾ GIỚI GAME,CỘNG ĐỒNG MẠNG,',
"category": 'games',
"date": '28/08/2021',
"time": '08:37 AM',
"link": '/top-10-tua-game-hanh-dong-phieu-luu-hay-nhat-tren-pc-p2',
"zcomponent": 'page_20210828083737',
"filepath": './20210828083737-top-10-tua-game-hanh-dong-phieu-luu-hay-nhat-tren-pc-p2.js'
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
const title = "Top 10 tựa game hành động phiêu lưu hay nhất trên PC (P.2)";
const author = "Axium Fox";
const source = "Trí Thức Trẻ";
const timestamp = "28/08/2021 08:37 AM";
const description =
  "Nếu anh em là tín đồ của thể loại game phiêu lưu, hành động, khám phá... thì chắc chắn không thể bỏ qua 10 cái tên vô cùng đình đám này rồi.";
const link = "top-10-tua-game-hanh-dong-phieu-luu-hay-nhat-tren-pc-p2";
const tagparam = [
  "GAME",
  "GAME ĐỈNH",
  "GAME HAY",
  "TOP GAME",
  "PHIÊU LƯU",
  "GAME HÀNH ĐỘNG",
  "THẾ GIỚI GAME",
  "CỘNG ĐỒNG MẠNG",
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

export default function page_20210828083737() {
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
                      Với sự phát triển chóng mặt của ngành{" "}
                      <strong>game</strong>, rất nhiều trò chơi đã tận dụng sức
                      mạnh đến từ yếu tố công nghệ, engine... để biến những trò
                      chơi trong thể loại <strong>phiêu lưu</strong> nhà động
                      thành những bom tấn để đời. Chẳng hạn, trong các tựa game
                      phiêu lưu sẽ mang đến cho game thủ những khung cảnh bạt
                      ngàn đầy huyền ảo cùng những pha hành động, diệt trùm vô
                      cùng nghẹt thở.
                    </p>
                    <p>
                      Dưới đây là top 10 tựa <strong>game</strong> hành động{" "}
                      <strong>phiêu lưu</strong> hay nhất trên PC cho anh em
                      "quẩy quên sầu".
                    </p>
                    <h5>Batman: Arkham City</h5>
                    <p></p>
                    <p></p>
                    <p>
                      Với mục đích diệt trừ tệ nạn tại thành phố Gotham, Batman
                      đã có một màn tái xuất vô cùng đặc sắc trong phần Arkham
                      City, giúp trò này trở thành một trong những tựa{" "}
                      <strong>game</strong> hành động <strong>phiêu lưu</strong>{" "}
                      thành công nhất trên PC với đề tài siêu anh hùng. Cơ bản
                      thì phần này chắt lọc những gì tinh túy nhất trong phần
                      đầu (Arkham Asylum) và mở rộng nó ra bằng một thế giới
                      rộng lớn để làm phần nền cho cốt truyện đầy kịch tính.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/23/photo-1-1629660434065250463231.png"
                      alt="1, GAME,GAME ĐỈNH,GAME HAY,TOP GAME,PHIÊU LƯU,GAME HÀNH ĐỘNG,THẾ GIỚI GAME,CỘNG ĐỒNG MẠNG,"
                      note=""
                    />

                    <p>
                      Trong <strong>game</strong>, bạn sẽ được được bước vào thế
                      giới của của hiệp sĩ bóng đêm Batman để bảo vệ thành phố
                      Arkham khỏi những âm mưu đen tối và xấu xa. So với phiên
                      bản đầu tiên, Arkham City mang đến một Arkham rộng hơn,
                      chi tiết hơn và tất nhiên là "ngầu" hơn. Tựa game cũng kết
                      hợp chút yếu tố trinh thám như trong phim Batman, đem đến
                      cho người chơi những cuộc <strong>phiêu lưu</strong> đầy
                      hấp dẫn.{" "}
                    </p>
                    <p>
                      Hơn nữa, cốt truyện của Batman: Arkham City đầy rẫy những
                      tội ác của những tên tội phạm khét tiếng nhất, từ đó mang
                      đến các pha combat với những combo "bốp chát" rất đẹp mắt
                      và vô cùng thỏa mãn. Được nhiều nhà phê bình đánh giá ở
                      mức đỉnh của chóp, cho đến bây giờ Batman: Arkham City vẫn
                      được xem như một ví dụ điển hình của <strong>game</strong>{" "}
                      hành động <strong>phiêu lưu</strong> "phải chơi" trên PC.
                    </p>
                    <h5>Horizon Zero Dawn</h5>
                    <p></p>
                    <p></p>
                    <p>
                      Ngay từ khi được công bố lần đầu thì nhiều{" "}
                      <strong>game</strong> thủ đã vô cùng hứng thú với với bối
                      cảnh của Horizon Zero Dawn. Câu chuyện bắt đầu vào thế kỷ
                      31, sau khi nền văn minh tiên tiến của nhân loại bị diệt
                      vong. Máy móc đã trỗi dậy trở thành những sinh vật cơ khí
                      hùng mạnh thống trị Trái Đất. Bạn sẽ vào vai Alloy, một nữ
                      thợ săn sinh ra và lớn lên ở thế giới hậu tận thế, mang
                      trong mình sứ mệnh ngăn chặn một tà giáo, những kẻ tôn thờ
                      một trí tuệ nhân tạo hủy diệt thế giới.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/23/photo-1-1629660436011359471463.jpg"
                      alt="2, GAME,GAME ĐỈNH,GAME HAY,TOP GAME,PHIÊU LƯU,GAME HÀNH ĐỘNG,THẾ GIỚI GAME,CỘNG ĐỒNG MẠNG,"
                      note=""
                    />
                    <p>
                      Tựa <strong>game</strong> thế giới mở này dễ gây ấn tượng
                      với người chơi nhất là ở cách mà các nhà phát triển tạo ra
                      các sinh vật cơ khí giả tưởng. Chúng rất ngầu, bắt mắt và
                      cho một cảm giác không thể tìm thấy ở bất kỳ tựa game nào
                      khác. Game cũng cực kỳ khéo léo trong việc hòa quyện những
                      yếu tố tưởng chừng như chẳng liên quan gì đến nhau là tiền
                      sử, hậu tận thế và công nghệ tương lai một cách hài hòa.
                    </p>
                    <h5>Dark Souls</h5>
                    <p></p>
                    <p></p>
                    <p>
                      Sự nghiệp làm <strong>game</strong> của "thánh buôn hành"
                      Hidetaka Miyazaki đã để lại cho đời vô số tác phẩm ấn
                      tượng. Trong đó thì Dark Souls cực kỳ đặc sắc vì nó là
                      khởi đầu cho series nổi tiếng nhất và có sức ảnh hưởng
                      nhất của ông.{" "}
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/23/photo-2-16296604365171524258599.jpg"
                      alt="3, GAME,GAME ĐỈNH,GAME HAY,TOP GAME,PHIÊU LƯU,GAME HÀNH ĐỘNG,THẾ GIỚI GAME,CỘNG ĐỒNG MẠNG,"
                      note=""
                    />

                    <p>
                      Trong <strong>game</strong>, bạn sẽ vào vai Chosen Undead
                      (xác sống được chọn) để tiếp tục công việc của thần ánh
                      sáng Gwyn và kéo dài thời đại của lửa. Nghe thì giống như
                      một tựa game kiểu anh hùng cứu cả thế gian. Tuy nhiên càng
                      chơi, bạn sẽ càng thấy chuyện không đơn giản như vậy.
                      Ngoài những con boss khỏe kinh hoàng và bọn quái có thể
                      nhảy ra từ góc khuất cạp bay nửa thanh máu thì người chơi
                      còn phải đối mặt với những lựa chọn vô cùng khó khăn.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p></p>
                    <p></p>
                    <p>
                      Tuy nhiên nói thế không có nghĩa là Dark Souls chỉ biết
                      ngược đãi người chơi, có có nét quyến rũ của riêng nó. Tựa{" "}
                      <strong>game</strong> mang đến một thế giới hoang tàn u ám
                      nhưng cũng nhiều bí mật để khám phá, ẩn chứa những câu
                      chuyện đầy cảm xúc đằng sau. Có thể "dân ngoại đạo" chỉ
                      thấy Dark Souls là một tựa <strong>game hành động</strong>{" "}
                      trên PC và console, song với những ai đã từng trải nghiệm
                      hàng chục giờ thì Dark Souls là một tựa game có nội dung
                      vô cùng sâu sắc, mang đầy những triết lý sâu xa.
                    </p>
                    <h5>The Witcher 3: Wild Hunt</h5>
                    <p></p>
                    <p></p>
                    <p>
                      The Witcher 3: Wild Hunt không chỉ là siêu phẩm trong thời
                      đại của nó. Thậm chí đến tận năm 2021, sau 6 năm ra mắt
                      thì đây vẫn là một trong những tựa <strong>game</strong>{" "}
                      <strong>phiêu lưu</strong> hành động thế giới mở đẹp nhất,
                      hay nhất và cũng đáng chơi nhất trên PC. Từ hình ảnh, nội
                      dung, nhân vật đều được CD Project hoàn thiện cực ở mức
                      trên cả tuyệt vời.{" "}
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/23/photo-3-1629660437040152870043.png"
                      alt="4, GAME,GAME ĐỈNH,GAME HAY,TOP GAME,PHIÊU LƯU,GAME HÀNH ĐỘNG,THẾ GIỚI GAME,CỘNG ĐỒNG MẠNG,"
                      note=""
                    />

                    <p>
                      Vào vai gã thợ săn quỷ hào hiệp sát gái Geralt trên con
                      đường tìm lại người yêu và cô con gái nuôi bé bỏng của
                      mình. Từng bước chân khám phá của bạn trong{" "}
                      <strong>game</strong> đều vô cùng thú vị, game sẽ vẽ ra cả
                      một thế giới đầy những điều bí ẩn, hay ho.
                    </p>
                    <p></p>
                    <p></p>
                    <p>
                      Mỗi nhân vật đều có một nét cuốn hút rất riêng. Từ tay thợ
                      săn quỷ với nụ cười mê hoặc chị em như Geralt cho đến cô
                      gái trẻ mạnh mẽ phóng khoáng như Ciri; Yennefer thì cao
                      ngạo và khó nắm bắt nhưng ẩn sau chiếc áo choàng đen đó
                      của nàng là một tâm hồn mong manh.{" "}
                    </p>
                    <p>
                      Càng chơi nhiều, bạn sẽ càng thấy trò này cuốn hút. Thực
                      chất, sau khi hoàn thành cốt truyện chính thì bạn vẫn còn
                      hàng tá thứ khác để làm và khám phá, và đây cũng là lý do
                      giúp The Witcher 3 trở thành tựa <strong>game</strong> rất
                      đáng để chơi thử. Ngoài ra thì cảnh vật trong trò này cũng
                      rất phong phú và bắt mắt, nếu chặt chém chán rồi thì bạn
                      cưỡi ngựa đi ngắm cảnh cũng không phải là một ý tưởng tồi
                      đâu.
                    </p>

                    <p></p>
                    <p>
                      Nguồn <strong>Game</strong> Rant biên dịch GVN360
                    </p>
                    <p></p>
                    <p></p>
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
