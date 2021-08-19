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
"timestamp": '19/08/2021 12:52 PM',
"title": 'Top 10 con rồng bá đạo nhất trong thế giới game (P.2)',
"description": 'Cứ nghe đến loài rồng thì hầu hết toàn hàng khủng...',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/16/photo-1-16290530066511307359247.jpg',
"alt": 'RỒNG,THẾ GIỚI GAME,GAME THỦ,LỊCH SỬ,TIN TỨC GAME,CỘNG ĐỒNG MẠNG,',
"category": 'games',
"date": '19/08/2021',
"time": '12:52 PM',
"link": '/top-10-con-rong-ba-dao-nhat-trong-the-gioi-game-p2',
"zcomponent": 'page_20210819125213',
"filepath": './20210819125213-top-10-con-rong-ba-dao-nhat-trong-the-gioi-game-p2.js'
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
const title = "Top 10 con rồng bá đạo nhất trong thế giới game (P.2)";
const author = "Axium Fox";
const source = "Trí Thức Trẻ";
const timestamp = "19/08/2021 12:52 PM";
const description = "Cứ nghe đến loài rồng thì hầu hết toàn hàng khủng...";
const link = "top-10-con-rong-ba-dao-nhat-trong-the-gioi-game-p2";
const tagparam = [
  "RỒNG",
  "THẾ GIỚI GAME",
  "GAME THỦ",
  "LỊCH SỬ",
  "TIN TỨC GAME",
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

export default function page_20210819125213() {
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
                      Nghe tới chữ <strong>rồng</strong> thôi là nhiều bạn đã
                      bắt đầu cảm thấy hào hứng rồi. Trong game, chúng có thể là
                      những con quái vật đáng sợ, hoặc là một loài cực kỳ thông
                      minh chỉ đường dẫn lối cho người chơi. Ngoài ra, chúng
                      cũng có tính cách, kích thước, nguồn gốc rất đa dạng. Bạn
                      có thể bắt gặp một chú rồng bước ra từ câu chuyện thần
                      thoại của Trung Quốc, Nhật Bản; hoặc thậm chí là một con
                      rồng với hình thù khác lạ cùng sức mạnh huyền bí tới từ
                      phương Tây. Để có cái nhìn chi tiết hơn, mời các bạn điểm
                      qua top 10 con rồng bá đạo nhất trong{" "}
                      <strong>thế giới game</strong> nhé.
                    </p>{" "}
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/16/photo-1-16290530066511307359247.jpg"
                      alt="1, RỒNG,THẾ GIỚI GAME,GAME THỦ,LỊCH SỬ,TIN TỨC GAME,CỘNG ĐỒNG MẠNG,"
                      note=""
                    />
                    <p>
                      Pokémon dành hẳn một phân loại <strong>rồng</strong> cho
                      những sinh vật trong game luôn các bạn ạ. Có rất nhiều con
                      rồng ấn tượng mà bạn có thể biết đến như Dragonite,
                      Salamence, Dragapult... nhưng có lẽ trường hợp đặc biệt
                      nhất là con Charizard trứ danh – nhìn chẳng khác gì con
                      rồng nhưng lại không thuộc phân loại rồng. Mãi đến phần
                      Pokémon X và Y, hãng GameFreak mới cho Mega Charizard X
                      đường đường chính chính được xếp vào loại rồng.
                    </p>{" "}
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/16/photo-1-1629053007889672653474.png"
                      alt="2, RỒNG,THẾ GIỚI GAME,GAME THỦ,LỊCH SỬ,TIN TỨC GAME,CỘNG ĐỒNG MẠNG,"
                      note=""
                    />
                    <p>
                      Trong phiên bản anime, con Charizard của Ash là một trong
                      những con Pokémon tạo ấn tượng sâu đậm nhất trong tâm trí
                      người xem. Còn trong game Pokémon gen 1 (Pokémon Red &
                      Green), bạn có thể dành thời gian và công sức để luyện
                      Dratini (đây là con <strong>rồng</strong> đúng nghĩa từ
                      trong trứng nước). Nhưng nếu muốn có một con rồng lửa thì
                      có thể nói Charizard là lựa chọn duy nhất.
                    </p>
                    <h5>Ruined Dragon – Super Mario Odyssey</h5>
                    <p>
                      Dòng game Mario cũng xuất hiện không ít con{" "}
                      <strong>rồng</strong>, nhưng riêng Ruined Dragon trong
                      game Super Mario Odyssey thì nó nổi bật hẳn các bạn ạ. Mấy
                      con rồng trong những phần Mario khác nhìn vẫn hợp tông đối
                      với game đó, nhưng còn con rồng này thì nhìn cứ như thể là
                      quái vật bên Dark Souls chứ không có chút gì giống trong
                      game Mario cả.
                    </p>{" "}
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/16/photo-2-1629053009916739058080.jpg"
                      alt="3, RỒNG,THẾ GIỚI GAME,GAME THỦ,LỊCH SỬ,TIN TỨC GAME,CỘNG ĐỒNG MẠNG,"
                      note=""
                    />
                    <p>
                      Có thể nói màn đối đầu với Ruined Dragon là một trong
                      những kỷ niệm đáng nhớ nhất của phần Odyssey. Sau khi khám
                      phá vương quốc Ruined Kingdom, bạn sẽ chạm mặt với Ruined
                      Dragon và sự kịch tính lúc này sẽ được đẩy lên mức cao
                      nhất. Chạm trán với nó khó hơn hẳn so với những con trùm
                      trước, và bạn có thể phải thử lại nhiều lần mới đánh bại
                      được Ruined Dragon. À, bật mí một chút là về sau bạn sẽ
                      phải đánh bại nó thêm một lần nữa nhé, và lần này thì
                      không còn "dễ như Mario ăn nấm" nữa đâu.
                    </p>
                    <h5>Hellkite Wyvern – Dark Souls</h5>{" "}
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/16/photo-3-16290530094091157808797.jpg"
                      alt="4, RỒNG,THẾ GIỚI GAME,GAME THỦ,LỊCH SỬ,TIN TỨC GAME,CỘNG ĐỒNG MẠNG,"
                      note=""
                    />
                    <p>
                      Nói về <strong>rồng</strong> trong game thì chắc chắn
                      không thiếu phần Dark Souls được. Cả series không thiếu
                      những con rồng đáng sợ, vừa to, vừa trâu, vừa khó đoán lại
                      cắn cực kỳ đau. Điển hình có thể kể đến như con rồng 3 mắt
                      Kalameet trong DLC Artorias of the Abyss của Dark Souls
                      hay con Midir biết bắn beam như Godzilla trong DLC The
                      Ringed City của Dark Souls III. Hellkite Wyvern thì có thể
                      không khỏe bằng bọn đó nhưng nó gây ám ảnh nhiều hơn, đặc
                      biệt là với người chơi mới.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Đây là con boss gác một cây cầu hẹp trong game, muốn qua
                      cây cầu đó thì bạn sẽ phải vật nhau với nó. Trong khi bạn
                      còn quá yếu ớt và thiếu chuẩn bị để đối mặt với những con
                      boss khỏe thì Dark Souls sẽ tát cho bạn một cú nhớ đời với
                      con <strong>rồng</strong> Hellkite Wyvern. Chơi qua Dark
                      Souls rồi thì bạn sẽ chẳng thể nào quên được cái cảm giác
                      bị nó lùa trên cầu đâu.
                    </p>
                    <h5>Rathalos - Monster Hunter</h5>
                    <p>
                      Rathalos là con quái vật mang tính biểu tượng của toàn bộ
                      series Monster Hunter. Có thể chúng không phải là những
                      con <strong>rồng</strong> mạnh nhất trong game nhưng chúng
                      là nổi tiếng nhất. Rathalos còn xuất hiện trong bộ phim
                      chuyển thể và thậm chí cả những ai chưa từng chơi Monster
                      Hunter cũng có thể biết chúng.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/16/photo-4-1629053008904414966926.jpg"
                      alt="5, RỒNG,THẾ GIỚI GAME,GAME THỦ,LỊCH SỬ,TIN TỨC GAME,CỘNG ĐỒNG MẠNG,"
                      note=""
                    />
                    <p>
                      Liệu có hơi ăn gian không khi lôi cả một loài{" "}
                      <strong>rồng</strong> vào danh sách? Có thể, tuy nhiên nếu
                      loại ra thì danh sách này lại thiếu một con rồng mang tính
                      biểu tượng trong <strong>thế giới game</strong>. Mà thậm
                      chí là đa số mọi người biết đến Rathalos thông qua tựa
                      game Super Smash Bros. Ultimate thậm chí còn chẳng biết nó
                      là một loài chứ không phải một con rồng nữa.
                    </p>
                    <h5>Alduin - Skyrim</h5>
                    <p>
                      Có rất nhiều <strong>rồng</strong> trong Skyrim nhưng
                      không phải con nào cũng ấn tượng như Alduin. Được tiên
                      đoán là con rồng của ngày tận thế và là nhân vật phản diện
                      chính của tựa game, Alduin luôn nổi bật. Ngay khi đáp
                      xuống Helgen, nó đã đại khai sát giới và biến nơi này
                      thành tro bụi. Đó là một màn phô diễn sức mạnh hoành tráng
                      và gây ấn tượng mạnh cho <strong>game thủ</strong>. Có thể
                      bạn sẽ thích nó lúc đó, tuy nhiên sau này khi tìm hiểu thì
                      bạn sẽ nhận ra rằng nó khó ưa hơn bạn nghĩ.
                    </p>{" "}
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/16/photo-5-162905300839335167787.jpg"
                      alt="6, RỒNG,THẾ GIỚI GAME,GAME THỦ,LỊCH SỬ,TIN TỨC GAME,CỘNG ĐỒNG MẠNG,"
                      note=""
                    />
                    <p>
                      Alduin không phải là <strong>rồng</strong> thông thường.
                      Nó là một thực thể thần thánh muốn hủy diệt loài người và
                      đưa dòng dõi loài rồng trở về thời đại hoàng kim. Thế nên
                      bạn mới phải lên đường tìm cách để đập nó. May mắn thay là
                      cuộc chiến với Alduin cũng không đến nỗi khó. Tuy nhiên kể
                      cả sau khi đánh bại được nó thì nó vẫn sẽ còn ám bạn dài
                      dài trong suốt quá trình chơi.
                    </p>
                    <p>Theo GVN360</p>
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
