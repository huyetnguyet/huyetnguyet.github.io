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
"timestamp": '29/06/2021 09:46 PM',
"title": 'Pokémon có thể giao tiếp với con người bằng cách nào? Nói chuyện, tâm linh, trực giác,... đều được cả',
"description": 'Bạn đã bao giờ thắc mắc Pokémon có thể giao tiếp với con người bằng cách nào hay chưa?',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/19/photo-1-162409752103114445468.jpg',
"alt": 'POKÉMON,POKÉMON GIAO TIẾP VỚI CON NGƯỜI,POKÉMON NÓI CHUYỆN,MEOWTH,MEOWTH NÓI CHUYỆN,',
"category": 'games',
"date": '29/06/2021',
"time": '09:46 PM',
"link": '/pokemon-co-the-giao-tiep-voi-con-nguoi-bang-cach-nao-noi-chuyen-tam-linh-truc-giac-deu-duoc-ca',
"zcomponent": 'page_20210629214607',
"filepath": './20210629214607-pokemon-co-the-giao-tiep-voi-con-nguoi-bang-cach-nao-noi-chuyen-tam-linh-truc-giac-deu-duoc-ca.js'
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
  "Pokémon có thể giao tiếp với con người bằng cách nào? Nói chuyện, tâm linh, trực giác,... đều được cả";
const author = "MT";
const source = "Pháp luật và bạn đọc";
const timestamp = "29/06/2021 09:46 PM";
const description =
  "Bạn đã bao giờ thắc mắc Pokémon có thể giao tiếp với con người bằng cách nào hay chưa?";
const link =
  "pokemon-co-the-giao-tiep-voi-con-nguoi-bang-cach-nao-noi-chuyen-tam-linh-truc-giac-deu-duoc-ca";
const tagparam = [
  "POKÉMON",
  "POKÉMON GIAO TIẾP VỚI CON NGƯỜI",
  "POKÉMON NÓI CHUYỆN",
  "MEOWTH",
  "MEOWTH NÓI CHUYỆN",
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

export default function page_20210629214607() {
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
                      Từ video game, anime hay thậm chí là tác phẩm live action,
                      thương hiệu <strong>Pokémon</strong> luôn đề cao sự gắn
                      kết giữa con người và Pokémon. Cùng nhau luyện tập, chiến
                      đấu và tìm hiểu những vùng đất mới lạ là điểm cốt lõi làm
                      nên Pokémon. Phần lớn các Pokémon chỉ có thể sử dụng ngôn
                      ngữ của chúng để giao tiếp, một số ít như{" "}
                      <strong>Meowth</strong> nói chuyện được. Tuy nhiên các
                      Pokémon cũng có những cách sau đây để giao tiếp với con
                      người.
                    </p>
                    <h5>10. Giao tiếp bằng tên gọi</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/19/photo-1-162409752103114445468.jpg"
                      alt="1, POKÉMON,POKÉMON GIAO TIẾP VỚI CON NGƯỜI,POKÉMON NÓI CHUYỆN,MEOWTH,MEOWTH NÓI CHUYỆN,"
                      note=""
                    />
                    <p>
                      Trong video game và anime, <strong>Pokémon</strong> phần
                      lớn chỉ có thể phát âm ra tên của chúng. Và một vài
                      Pokémon cũng đã sáng tạo từ cách giao tiếp này. Pikachu là
                      một ví dụ điển hình, như Piiika-Chuuuuuuuu khi muốn sử
                      dụng tuyệt kỹ Thunderbolt, còn Pika-Pi có nghĩa gọi tên
                      của Satoshi/Ash. Hay như Piplup với âm thanh Pip-lup-lup.
                    </p>
                    <h5>
                      9. Đôi lúc, <strong>Pokémon</strong> có thể giao tiếp bằng
                      ảo ảnh
                    </h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/19/photo-1-1624097522847979803369.jpg"
                      alt="2, POKÉMON,POKÉMON GIAO TIẾP VỚI CON NGƯỜI,POKÉMON NÓI CHUYỆN,MEOWTH,MEOWTH NÓI CHUYỆN,"
                      note=""
                    />
                    <p>
                      Một vài <strong>Pokémon</strong> có thể giao tiếp với con
                      người thông qua ảo ảnh, nhưng chỉ là tạm thời. Trong một
                      tập phim ở anime, Ninetales đã tạo ra ảo ảnh của cô gái có
                      tên là Lokoko và có thể giao tiếp bình thường. Còn trong
                      video game, Zoroark có thể giao tiếp với người chơi bằng
                      việc giả dạng thành một người du hành tại khu vực rừng
                      Lostlorn.
                    </p>
                    <h5>8. Ngôn ngữ cơ thể</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/19/photo-2-16240975233451150618143.jpg"
                      alt="3, POKÉMON,POKÉMON GIAO TIẾP VỚI CON NGƯỜI,POKÉMON NÓI CHUYỆN,MEOWTH,MEOWTH NÓI CHUYỆN,"
                      note=""
                    />
                    <p>
                      <strong>Pokémon</strong> có thể giao tiếp bằng ngôn ngữ cơ
                      thể, như khi Pikachu thường hay làm trong anime để trò
                      chuyện cùng với Satoshi. Điều này đôi khi cũng đem lại
                      những phút giây hài hước. Mỗi Pokémon sẽ có ngôn ngữ cơ
                      thể của riêng mình mà phản ánh đúng với bản chất và tính
                      cách của chúng.
                    </p>
                    <h5>
                      7. <strong>Pokémon</strong> hệ tâm linh và những cái tên
                      khác có thể giao tiếp bằng thần giao cách cảm
                    </h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/19/photo-3-16240975239042004151202.jpg"
                      alt="4, POKÉMON,POKÉMON GIAO TIẾP VỚI CON NGƯỜI,POKÉMON NÓI CHUYỆN,MEOWTH,MEOWTH NÓI CHUYỆN,"
                      note=""
                    />
                    <p>
                      Một vài <strong>Pokémon</strong> vẫn có thể nói chuyện
                      trực tiếp với con người, qua khả năng thần giao cách cảm.
                      Đây chính là năng lực từ các Pokémon hệ tâm linh, Pokémon
                      huyền thoại và Pokémon hệ siêu linh như Lugia.
                    </p>
                    <p>
                      Một <strong>Pokémon</strong> khác là Ralts có khả năng đọc
                      vị cảm xúc của con người, mà có thể liên kết bằng năng lực
                      tâm linh. Trong tập 8 "Do I Hear a Ralts?" của anime, Max
                      đã nghe thấy lời cầu cứu từ một Pokémon Ralts đang gặp
                      nạn.
                    </p>
                    <h5>6. Bằng trực giác</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/19/photo-4-1624097523376433826248.jpg"
                      alt="5, POKÉMON,POKÉMON GIAO TIẾP VỚI CON NGƯỜI,POKÉMON NÓI CHUYỆN,MEOWTH,MEOWTH NÓI CHUYỆN,"
                      note=""
                    />
                    <p>
                      Những nhà huấn luyện khi đã đạt đến được mức độ thấu hiểu
                      cảm xúc và thái độ từ <strong>Pokémon</strong> đôi lúc
                      cũng có khả năng giao tiếp bằng trực giác. Tuy chưa đến
                      mức như giao tiếp bằng thần giao cách cảm, nhưng đây cũng
                      là một cách thức thú vị. Một ví dụ điển hình là
                      Satoshi/Ash bằng trực giác của mình có thể hiểu ra được là
                      Pikachu muốn sử dụng Thunderbolt.
                    </p>
                    <h5>5. Theo một vài trường hợp đặc biệt</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/19/photo-1-16240976381291084974977.jpg"
                      alt="6, POKÉMON,POKÉMON GIAO TIẾP VỚI CON NGƯỜI,POKÉMON NÓI CHUYỆN,MEOWTH,MEOWTH NÓI CHUYỆN,"
                      note=""
                    />
                    <p>
                      Có một vài trường hợp nhất định mà{" "}
                      <strong>Pokémon</strong> có thể giao tiếp với con người.
                      Ví dụ như trong ba phần game Red, Blue và Yellow, Doduo
                      của nhân vật Copycat sẽ nói ra một câu mỗi khi mà người
                      chơi lại gần
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Hồn ma của Marowak cũng có khả năng giao tiếp. Còn trong
                      Generation II, Murkrow của nhóm Rocket sẽ tiết lộ với
                      người chơi về mật khẩu để mở khóa và tiến vào bên trong
                      căn phòng vận hành điện năng.
                    </p>
                    <h5>
                      4. Thần giao cách cảm thông qua người khác hoặc sử dụng
                      Meowth
                    </h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/19/photo-1-1624097639493863932311.jpg"
                      alt="7, POKÉMON,POKÉMON GIAO TIẾP VỚI CON NGƯỜI,POKÉMON NÓI CHUYỆN,MEOWTH,MEOWTH NÓI CHUYỆN,"
                      note=""
                    />
                    <p>
                      Đôi lúc, <strong>Pokémon</strong> cũng có thể tận dụng khả
                      năng thần giao cách cảm để giao tiếp thông qua một người
                      khác. Như trong Sword and Shield, khi Calyrex có thể giao
                      tiếp bằng nhân vật Peony với người chơi. Trong một vài
                      thời điểm, <strong>Meowth</strong> có thể trở thành người
                      phiên dịch, truyền tải thông điệp từ Pokémon tới con
                      người, như hai tập phim "Tentacool and Tentacruel" và "A
                      Shipful of Shivers" ở anime.
                    </p>
                    <h5>3. Rotom Pokédex</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/19/photo-2-16240976399861230050714.jpg"
                      alt="8, POKÉMON,POKÉMON GIAO TIẾP VỚI CON NGƯỜI,POKÉMON NÓI CHUYỆN,MEOWTH,MEOWTH NÓI CHUYỆN,"
                      note=""
                    />
                    <p>
                      Rotom là một <strong>Pokémon</strong> hệ ma/điện có thể
                      biến đổi thành một thiết bị gia dụng. Trong Sun and Moon
                      và Ultra Sun and Ultra Moon, Pokémon này có thể trò chuyện
                      với con người bằng cách sử dụng Pokédex Gen 4.
                    </p>
                    <p>
                      Đây là một sáng kiến mà cho phép Pokédex kết hợp với
                      Rotom. Rotom Pokédex là một trường hợp hiếm hoi, kể cả ở
                      khu vực Alola, khi được tạo ra để giúp cho con người và{" "}
                      <strong>Pokémon</strong> giao tiếp.
                    </p>
                    <h5>
                      2. Một số <strong>Pokémon</strong> có thể bắt chước tiếng
                      người
                    </h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/19/photo-3-16240976405071772677210.jpg"
                      alt="9, POKÉMON,POKÉMON GIAO TIẾP VỚI CON NGƯỜI,POKÉMON NÓI CHUYỆN,MEOWTH,MEOWTH NÓI CHUYỆN,"
                      note=""
                    />
                    <p>
                      Một vài nhà huấn luyện có thể tập cho{" "}
                      <strong>Pokémon</strong> của mình cách bắt chước hoặc nhại
                      lại giọng nói. Đây là một cách nói chuyện theo kiểu gián
                      tiếp, ví dụ như Copycat trong anime dạy cho Doduo. Chatot,
                      một Pokémon mang ngoại hình như loài vẹt, cũng có thể học
                      cách nhại lại câu nói của con người. Đôi khi Chatot còn
                      chuyển những câu chữ ấy vào bài hát do nó tự nghĩ ra.
                    </p>
                    <h5>1. Meowth</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/19/photo-4-16240975555821275080336.jpg"
                      alt="10, POKÉMON,POKÉMON GIAO TIẾP VỚI CON NGƯỜI,POKÉMON NÓI CHUYỆN,MEOWTH,MEOWTH NÓI CHUYỆN,"
                      note=""
                    />
                    <p>
                      Một vài <strong>Pokémon</strong> có thể nói chuyện một
                      cách trực tiếp với con người. Như <strong>Meowth</strong>{" "}
                      trong anime, khi Pokémon này đã tự mình luyện tập cách
                      phát âm, rồi từ đó ghép lại thành một câu hoàn chỉnh trong
                      việc giao tiếp. Cũng có một vài trường hợp đặc biệt, như
                      Pikachu trong phần phim điện ảnh Pokémon: I Choose You.
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
