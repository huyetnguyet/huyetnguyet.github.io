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
"timestamp": '29/07/2021 04:23 PM',
"title": 'Những Pokémon khiến người chơi phải đỏ mắt truy lùng qua từng phiên bản',
"description": 'Mỗi lần tìm chúng khó hơn mò kim đáy bể chỉ vì các nhà thiét kế tìm cách chơi khó.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/24/photo-1-16271432927312095336961.jpg',
"alt": 'POKÉMON,',
"category": 'games',
"date": '29/07/2021',
"time": '04:23 PM',
"link": '/nhung-pokemon-phai-do-mat-truy-lung-qua-tung-phien-ban',
"zcomponent": 'page_20210729162352',
"filepath": './20210729162352-nhung-pokemon-phai-do-mat-truy-lung-qua-tung-phien-ban.js'
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
  "Những Pokémon khiến người chơi phải đỏ mắt truy lùng qua từng phiên bản";
const author = "DS";
const source = "Trí Thức Trẻ";
const timestamp = "29/07/2021 04:23 PM";
const description =
  "Mỗi lần tìm chúng khó hơn mò kim đáy bể chỉ vì các nhà thiét kế tìm cách chơi khó.";
const link = "nhung-pokemon-phai-do-mat-truy-lung-qua-tung-phien-ban";
const tagparam = ["POKÉMON"];
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

export default function page_20210729162352() {
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
            <AdsHorizontal />
            <div className="content">
              <div className="contentContainer">
                <p className="description">{description}</p>
                <RelationNews category={category} />
                <div className="contentBody">
                  <h5>
                    1. Latios & Latias - <strong>Pokémon</strong> Ruby &
                    Sapphire
                  </h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/24/photo-1-16271432927312095336961.jpg"
                    alt="1, POKÉMON,"
                    note=""
                  />
                  <p>
                    Trong phiên bản Ruby & Sapphire, người chơi được diện kiến
                    bộ đôi <strong>Pokémon</strong> huyền thoại là Latios và
                    Latias. Thay vì đặt chúng ở những vị trí gần cuối game,
                    GameFreak lại quyết định cho người chơi chạm trán cặp đôi
                    này ngay từ những khung hình đầu tiên.{" "}
                  </p>
                  <p>
                    Dù vậy, đây không khác gì cú lừa. Người chơi được gặp thôi,
                    chứ bắt bộ đôi này khó hơn lên trời. Chúng liên tục di
                    chuyển qua nhiều địa điểm khác nhau, đòi hỏi người chơi phải
                    theo dấu trong Pokédex. Đó là còn chưa kể nếu không có
                    Masterball thì tỉ lệ bắt được là cực thấp nữa.
                  </p>
                  <p></p>
                  <h5>
                    2. Mew - <strong>Pokémon</strong> Red
                  </h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/24/photo-1-16271434925031652379484.png"
                    alt="2, POKÉMON,"
                    note=""
                  />
                  <p>
                    {" "}
                    Sau khi hoàn thành việc làm game, nhà thiết kế Satoshi
                    Tajiri đã đem tới sự bất ngờ cho chính đội ngũ làm game khi
                    chính ông đã quyết định đưa Mew vào các tựa game thế hệ 1 mà
                    không nói cho ai. Nhưng buồn ở chỗ, hệ máy Game Boy hồi ấy
                    bị giới hạn về chỗ trống, mặc dù data của Mew có trong game
                    nhưng game thủ không tài nào tìm ra nổi chú Pokemon huyền
                    thoại này. Nhiều người chơi đã nghĩ ra cách để "hack", lừa
                    hệ thống rằng "wild Mew" đã lộ diện, để họ có thể bắt. Ngạc
                    nhiên hơn nữa là pha hack này lại thành công.
                  </p>
                  <h5>
                    3. Munchlax - <strong>Pokémon</strong> Diamond & Pearl
                  </h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/24/photo-1-1627143702250683266989.png"
                    alt="3, POKÉMON,"
                    note=""
                  />
                  <p>
                    {" "}
                    Sau thành công của Snorlax, Game Freak đã nhanh chóng tạo ra
                    cấp độ tiến hóa trước của nó - Munchlax. Chú Pokemon này
                    cũng sớm nhận được sự yêu quý của đông đảo game thủ nhờ vẻ
                    ngoài cute hết cỡ của mình. Thế nhưng, để sở hữu được
                    Munchlax, đó lại là cả quá trình đầy khổ đau.
                  </p>
                  <RelationNewsInPage category={category} />
                  <p>
                    Để bắt được Munchlax, người chơi sẽ cần bôi mật ong lên một
                    cái cây nào đó ở lục địa Sinnoh. Dù vậy, chỉ có 21 cây có
                    thể quệt mật ong trên khắp lục địa Sinnoh mà thôi. Tiếp
                    theo, trong số 21 cây này thì lại chỉ có 4 cây có khả năng
                    có Munchlax lởn vởn đến mà thôi. Việc tiếp theo mà người
                    chơi cần làm là... chờ 6 tiếng ngoài đời thực, cho tới khi
                    nào những cây mật ong đó "động đậy" thì có nghĩa là đã có
                    Pokemon dính mồi. Thêm vào đó, tỉ lệ "spawn" của Munchlax
                    lại chỉ có 1%, quá nhiều công sức mà kết quả thì lại quá ít.
                  </p>
                  <h5>
                    4. Beldum - <strong>Pokémon</strong> Sun & Moon
                  </h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/24/photo-1-16271438816211180295500.png"
                    alt="4, POKÉMON,"
                    note=""
                  />
                  <p>
                    Trong các phiên bản tiền nhiệm, Beldum không hề khó tìm
                    nhưng đến Sun & Moon, nó lại hiếm một cách kỳ lạ. Beldum chỉ
                    xuất hiện ở các bãi cỏ gần đài quan sát nhưng tỉ lệ bắt gặp
                    được nó lại thấp đến vô lý, hơn hết, nếu có gặp thì tỉ lệ
                    bắt được Beldum lại còn nhỏ hơn nữa. Và buồn cười là, chiêu
                    thức duy nhất Beldum có được là Take Down, một đòn đánh
                    khiến địch thì chẳng đau mà nó lại tổn thương nhiều hơn.
                    Điều này khiến cho game thủ phải cẩn thận nếu không thì nó
                    sẽ tự lăn đùng ra chết nếu quá tay.
                  </p>
                  <h5>
                    5. Ditto - <strong>Pokémon</strong> GO
                  </h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/24/photo-1-16271441132671328353057.jpg"
                    alt="5, POKÉMON,"
                    note=""
                  />
                  <p>
                    Ditto là một trong những trường hợp thú vị nhất của{" "}
                    <strong>Pokémon</strong> GO. Để bắt được nó, người chơi sẽ
                    cần chạm trán với Rattata hoặc Pidgey rồi bắt chúng. Sau đó,
                    khi đã bị tóm vào Pokéball, chúng mới hiện thân thành Ditto
                    cải trang. Vấn đề ở chỗ, đây vẫn chỉ là lời đồn chứ chưa
                    được xác thực và trên thực tế thì gặp được Rattata hay
                    Pidgey cũng không hề đơn giản đâu.
                  </p>
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
