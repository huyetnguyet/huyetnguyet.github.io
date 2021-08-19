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
"timestamp": '15/08/2021 04:05 PM',
"title": 'Top 10 Pokémon hệ độc nổi bật qua các thế hệ, Gengar vẫn được chú ý nhất',
"description": 'Ash đã gặp rất nhiều Pokémon mạnh trong chuyến du hành của mình, bao gồm cả những loài hệ độc.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/15/photo-1-1629002882487880472230.jpg',
"alt": 'BULBASAUR,GENGAR,POKÉMON,POKÉMON HỆ ĐỘC,CÁC LOÀI POKÉMON,',
"category": 'games',
"date": '15/08/2021',
"time": '04:05 PM',
"link": '/top-10-pokemon-he-doc-noi-bat-qua-cac-the-he-gengar-van-duoc-chu-y-nhat',
"zcomponent": 'page_20210815160531',
"filepath": './20210815160531-top-10-pokemon-he-doc-noi-bat-qua-cac-the-he-gengar-van-duoc-chu-y-nhat.js'
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
  "Top 10 Pokémon hệ độc nổi bật qua các thế hệ, Gengar vẫn được chú ý nhất";
const author = "MT";
const source = "Trí Thức Trẻ";
const timestamp = "15/08/2021 04:05 PM";
const description =
  "Ash đã gặp rất nhiều Pokémon mạnh trong chuyến du hành của mình, bao gồm cả những loài hệ độc.";
const link =
  "top-10-pokemon-he-doc-noi-bat-qua-cac-the-he-gengar-van-duoc-chu-y-nhat";
const tagparam = [
  "BULBASAUR",
  "GENGAR",
  "POKÉMON",
  "POKÉMON HỆ ĐỘC",
  "CÁC LOÀI POKÉMON",
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

export default function page_20210815160531() {
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
                      Qua rất nhiều thế hệ <strong>Pokémon</strong> từng xuất
                      hiện, <strong>Pokémon hệ độc</strong> thường hay được phe
                      phản diện tận dụng. Điều này có thể là do năng lực làm ta
                      liên tưởng đến sự đau đớn cũng như cái chết. Nhưng cũng có
                      không ít những nhà huấn luyện bên phe thiện biết cách sử
                      dụng năng lực của Pokémon hệ độc.
                    </p>
                    <p>
                      Sau đây hãy cùng nhau điểm qua những{" "}
                      <strong>Pokémon</strong> hệ độc tiêu biểu nhất.
                    </p>
                    <h5>10. Eternatus</h5>
                    <p>
                      Eternatus xuất hiện trong <strong>Pokémon</strong>{" "}
                      Journeys, khi là đối tượng mà Rose muốn sử dụng nhằm hấp
                      thụ sức mạnh của Pokémon này. Eternatus sau đó đã trốn
                      thoát ra khỏi nhà máy năng lượng và gây ra khá nhiều rắc
                      rối
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/15/photo-1-1629002882487880472230.jpg"
                      alt="1, BULBASAUR,GENGAR,POKÉMON,POKÉMON HỆ ĐỘC,CÁC LOÀI POKÉMON,"
                      note=""
                    />
                    <p>
                      Đặc biệt là hình dạng nâng cấp Eternamax, kết quả từ việc
                      hấp thụ năng lượng ở mức quá tải. Chính vì lẽ đó, mà toàn
                      bộ <strong>Pokémon</strong> của Ash và Goh ban đầu đã dễ
                      dàng bị đánh bại. Sau đó cả nhóm đã phải hợp lực cùng với
                      hai Pokémon huyền thoại là Zacian và Zamazenta mới ngăn
                      được Eternatus lại.
                    </p>
                    <h5>9. Nidoking và Nidoqueen</h5>
                    <p>
                      Trong <strong>Pokémon</strong>, nhân vật Gary Oak là cái
                      tên sử dụng rất tốt Nidoqueen và Nidoking, mặc dù sau đó
                      chịu thua trước Mewtwo ở Kanto với Golam tại Indigo
                      Plateau.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/15/photo-1-1629002884867882810320.jpg"
                      alt="2, BULBASAUR,GENGAR,POKÉMON,POKÉMON HỆ ĐỘC,CÁC LOÀI POKÉMON,"
                      note=""
                    />
                    <p>
                      Nidoqueen và Nidoking còn được bộ đôi Oscar, Andi sử dụng.
                      Tận dụng năng lực triệt để, bộ đôi này đã đánh bại Ash với
                      May trong cuộc hành trình tới Hoenn.
                    </p>
                    <h5>8. Muk</h5>
                    <p>
                      Trong cuộc hành trình của mình tại khu vực Kanto, Ash đã
                      gặp và bắt được Muk, một <strong>Pokémon</strong> hệ độc.
                      Pokémon này đã giúp cho cậu vượt qua được trận đấu tại
                      Indigo Plateau khi đánh bại Bellsprout. Đó còn là đánh bại
                      hai Pokémon khác gồm Blastoise và Scizor của Gary.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/15/photo-2-16290028843691197106429.jpg"
                      alt="3, BULBASAUR,GENGAR,POKÉMON,POKÉMON HỆ ĐỘC,CÁC LOÀI POKÉMON,"
                      note=""
                    />
                    <p>
                      Tuy nhiên, điểm đáng tiếc là Muk lại không có quá nhiều
                      đất diễn và khá lu mờ so với những cái tên khác trong dàn{" "}
                      <strong>Pokémon</strong> của Ash.
                    </p>
                    <h5>7. Nihilego</h5>
                    <p>
                      Trong <strong>Pokémon</strong>: Sun and Moon, nhân vật
                      Lillie có nỗi sợ dành cho Pokémon khi lúc nhỏ cô từng bị
                      tấn công. Và cái tên lúc đó chính là Pokémon hệ đá và độc,
                      Nihilego.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/15/photo-3-1629002885389676629010.jpg"
                      alt="4, BULBASAUR,GENGAR,POKÉMON,POKÉMON HỆ ĐỘC,CÁC LOÀI POKÉMON,"
                      note=""
                    />
                    <p>
                      Nihilego còn bắt cóc mẹ của Lillie, Lusamine khi được Faba
                      triệu hồi ra từ siêu lỗ sâu. <strong>Pokémon</strong> này
                      đã khống chế Lusamine trong trận đấu với Gladion, Ash và
                      chính bà. Cuối cùng Nihilego đã bị Lusamine đánh bại.
                    </p>
                    <h5>6. Toxicroak và Croagunk</h5>
                    <p>
                      Trong Sinnoh. Saturn đã sử dụng Toxicroak trong trận đấu
                      và gây ra rất nhiều khó khăn cho Ash và những người bạn
                      của mình.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/15/photo-4-16290028849071943516082.jpg"
                      alt="5, BULBASAUR,GENGAR,POKÉMON,POKÉMON HỆ ĐỘC,CÁC LOÀI POKÉMON,"
                      note=""
                    />
                    <p>
                      <strong>Pokémon</strong> hệ độc và giác đấu này có hạ gục
                      luôn cả Chimlar của Ash rồi lần lược Electivire và Umbreon
                      của Gary Oak. Toxicroak, đặc biệt là hình dạng nâng cấp
                      Croakgunk sở hữu các tuyệt kỹ mạnh mẽ như Dark Pulse,
                      Sludge Bomb, Poison Jab, Rock Smash và X-Scissor.
                    </p>

                    <h5>5. Venomoth</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/15/photo-1-1629002910137811844416.jpg"
                      alt="6, BULBASAUR,GENGAR,POKÉMON,POKÉMON HỆ ĐỘC,CÁC LOÀI POKÉMON,"
                      note=""
                    />
                    <p>
                      Venomoth là <strong>Pokémon</strong> hệ độc và côn trùng
                      được sử dụng bởi thủ lĩnh nhà thi đấu khu vực Kanto, Koga
                      trong loạt anime. Với khả năng của mình, Venomoth đã đánh
                      bại được Pidgeotto của Ash, nhưng trận đấu lại bị gián
                      đoạn bởi băng Rocket.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Trong Hoenn <strong>Pokémon</strong> League, Venomoth là
                      Pokémon thuộc quyền sở hữu của nhân vật Katie với khả năng
                      ngăn Torkoal và Swellow sử dụng tuyệt kỹ.
                    </p>
                    <h5>4. Naganadel</h5>
                    <p>
                      Naganadel là hình dạng nâng cấp của Poipole, xuất hiện
                      trong phần Sun and Moon và được Ash sử dụng tại giải đấu
                      Manalo. Là một <strong>Pokémon</strong> hệ độc và rồng,
                      Naganadel sở hữu tầm hoạt động rộng và sử dụng Tuyệt chiêu
                      Thunderbolt để đánh bại Guzzlord của giáo sư Kukui.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/15/photo-1-162900291159457020266.jpg"
                      alt="7, BULBASAUR,GENGAR,POKÉMON,POKÉMON HỆ ĐỘC,CÁC LOÀI POKÉMON,"
                      note=""
                    />
                    <p>
                      Naganadel góp một phần quan trọng cho chiến tích lần đầu
                      vô địch một giải đấu <strong>Pokémon</strong> của Ash.
                    </p>
                    <h5>3. Drapion</h5>
                    <p>
                      Xuất hiện trong phần anime Diamond and Pearl, Drapion là{" "}
                      <strong>Pokémon</strong> hệ độc và bóng tối được một trong
                      những thành viên thuộc Elite Four, Aaron sử dụng để đấu
                      với Cynthia và Pokémon Garchomp của cô. Ngoài ra còn có
                      một Drapion khác được Paul sử dụng khi đấu với Ash.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/15/photo-2-1629002912109108199218.jpg"
                      alt="8, BULBASAUR,GENGAR,POKÉMON,POKÉMON HỆ ĐỘC,CÁC LOÀI POKÉMON,"
                      note=""
                    />
                    <p>
                      Drapion có tuyệt chiêu Toxic Spikes, với khả năng phóng
                      độc vào <strong>Pokémon</strong> của đối thủ. Lần lượt
                      những Buizel, Staraptor và Torterra đều bị đánh bại trước
                      khi Ash lật ngược thế cờ bằng Gliscor.
                    </p>
                    <h5>2. Bulbasaur</h5>
                    <p>
                      <strong>Bulbasaur</strong> là một trong những{" "}
                      <strong>Pokémon</strong> mà đã gắn liền với Ash trong
                      series anime đầu tiên, cùng nhau vượt qua nhiều đối thủ
                      khác nhau. Pokémon hệ cỏ và độc này có sự linh hoạt trong
                      việc sử dụng khả năng và tỏ ra rất có ích.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/15/photo-3-1629002911089911493567.jpg"
                      alt="9, BULBASAUR,GENGAR,POKÉMON,POKÉMON HỆ ĐỘC,CÁC LOÀI POKÉMON,"
                      note=""
                    />
                    <p>
                      Còn với hình dạng nâng cấp Venusaur tuy chưa có quá nhiều
                      thời lượng chiến đấu trong anime, nhưng lại rất được giáo
                      sư Kukui và Drake tin dùng. Đây sẽ là một sự bổ sung tuyệt
                      vời dành cho Ash.
                    </p>
                    <h5>1. Gengar</h5>
                    <p>
                      Cuối cùng sẽ là <strong>Gengar</strong>,{" "}
                      <strong>Pokémon</strong> hệ độc và ma. Pokémon này kể từ
                      khi được giới thiệu đã trở thành cái tên đáng tin cậy cho
                      những nhà huấn luyện như Morty, Agatha, Fantina và Drake.
                      Ash cũng đã có cho riêng mình một Gengar trong phần anime
                      Pokémon Journeys.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/15/photo-4-1629002900173560391411.jpg"
                      alt="10, BULBASAUR,GENGAR,POKÉMON,POKÉMON HỆ ĐỘC,CÁC LOÀI POKÉMON,"
                      note=""
                    />
                    <p>
                      Khi sử dụng <strong>Gengar</strong>, Ash phải học cách tư
                      duy nhiều hơn để nghĩ ra chiến thuật tấn công hợp lý, như
                      tuyệt chiêu Hypnosis. Thành quả như khi Gengar đã giúp cho
                      nhóm của Ash đánh bại băng Rocket.
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
