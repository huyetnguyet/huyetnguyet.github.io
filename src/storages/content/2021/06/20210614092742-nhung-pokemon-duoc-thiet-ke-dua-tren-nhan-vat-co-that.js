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
"timestamp": '14/06/2021 09:27 AM',
"title": 'Những Pokémon được thiết kế dựa trên nhân vật có thật',
"description": 'Pokémon được lấy cảm hứng rất nhiều từ đời thực, trong đó có cả những người thực sự tồn tại.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/6/12/photo-1-1623514660251583445982.png',
"alt": 'Hitmonlee, Hitmonchan, Pokemon, Snorlax, ',
"category": 'games',
"date": '14/06/2021',
"time": '09:27 AM',
"link": '/nhung-pokemon-duoc-thiet-ke-dua-tren-nhan-vat-co-that',
"zcomponent": 'page_20210614092742',
"filepath": './20210614092742-nhung-pokemon-duoc-thiet-ke-dua-tren-nhan-vat-co-that.js'
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
const title = "Những Pokémon được thiết kế dựa trên nhân vật có thật";
const author = "DS";
const source = "Trí Thức Trẻ";
const timestamp = "14/06/2021 09:27 AM";
const description =
  "Pokémon được lấy cảm hứng rất nhiều từ đời thực, trong đó có cả những người thực sự tồn tại.";
const link = "nhung-pokemon-duoc-thiet-ke-dua-tren-nhan-vat-co-that";
const tagparam = ["hitmonlee", "hitmonchan", "pokemon", "snorlax"];
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

export default function page_20210614092742() {
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
                <div className="desktop">
                  <AdsHorizontal />
                </div>
                <div className="contentBody">
                  <h3>1. Snorlax</h3>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/6/12/photo-1-1623514660251583445982.png"
                    alt="Hitmonlee, Hitmonchan, Pokemon, Snorlax, "
                    note=""
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/6/12/photo-1-1623514683921352914343.png"
                    alt="Hitmonlee, Hitmonchan, Pokemon, Snorlax, "
                    note=""
                  />
                  <p>
                    Trong buổi phỏng vấn với tạp chí Yomiuri, ông Ken Sugimori,
                    giám độc nghệ thuật của series <strong>Pokemon</strong> mới
                    đây đã tiết lộ rằng, nhà sản xuất Koji Nishino chính là hình
                    mẫu cho <strong>Snorlax</strong>. Theo ông Sugimori cho
                    biết, Nishino được chọn vì ngoại hình cồng kềnh quá khổ của
                    mình, đồng thời Nishino cũng rất thích những thứ dễ thương.
                    Nghe cũng hợp lý so với Snorlax, đúng không?
                  </p>
                  <p>
                    Trước đó, cũng có những thông tin rằng Nishino có chút liên
                    quan tới chú <strong>Pokemon</strong> béo ú này. Cư dân
                    internet đã tìm thấy một hình ảnh của Nishino cùng dòng chữ
                    trích dẫn: "<strong>Snorlax</strong> giống như là con của
                    tôi".
                  </p>
                  <h3>2. Hitmonlee </h3>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/12/photo-1-16235151412241721899664.jpg"
                    alt="Hitmonlee, Hitmonchan, Pokemon, Snorlax, "
                    note=""
                  />
                  <p>
                    {" "}
                    <strong>Hitmonlee</strong> là một Pokémon hệ Fighting, và
                    cái hậu tố trong cái tên của nó liên quan tới một trong
                    những võ sĩ nổi tiếng nhất thế giới - Bruce Lee, hay còn
                    được biết đến với cái tên Lý Tiểu Long. Dù vậy, lại ít ai
                    biết tới một võ sĩ khác cũng có ảnh hưởng tạo nên Pokémon
                    này. Theo đó, tên tiếng Nhật của Hitmonlee là Sawamular. Đây
                    là cái tên dựa trên võ sĩ kickbox Tadashi Sawamura, người đã
                    có 94,6% tỉ lệ thắng trong suốt sự nghiệp thi đấu chuyên
                    nghiệp của mình.{" "}
                  </p>
                  <h3>3. Hitmonchan</h3>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/12/photo-1-1623515330182482249337.jpg"
                    alt="Hitmonlee, Hitmonchan, Pokemon, Snorlax, "
                    note=""
                  />
                  <p>
                    Tương tự <strong>Hitmonlee</strong>, Pokémon{" "}
                    <strong>Hitmonchan</strong> cũng được thiết kế dựa trên hình
                    tượng của 2 võ sĩ khác nhau. Cái tên đầu tiên là Jackie Chan
                    - Thành Long, ngôi sao võ thuật - phim ảnh nổi tiếng trên
                    khắp toàn cầu và được đông đảo công chúng biết tới. Cái tên
                    còn lại là tay đấm Hiroyuki Ebihara, người có 62 trận thắng
                    và 5 trận thua trong suốt sự nghiệp thi đấu. Các nhà làm
                    game đã tri ân ông bằng cái tên tiếng Nhật của Pokémon này
                    là Ebiwalar.
                  </p>
                  <RelationNewsInPage category={category} />
                  <h3>4. Wobbuffet</h3>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/12/photo-1-16235162421102045465855.jpg"
                    alt="Hitmonlee, Hitmonchan, Pokemon, Snorlax, "
                    note=""
                  />
                  <p>
                    {" "}
                    Wobbuffet là một Pokémon khá kỳ lạ. Nó đã được thay đổi vài
                    lần trong quá trình thiết kế của 2 tựa game Pokémon Gold &
                    Silver. Sau khi được chỉnh sửa lại, nó có một ngoại hình
                    trông khá hài hước và dí dỏm ở thời điểm hiện tại. Lý do của
                    việc này là Wobbuffet ít nhiều được lấy cảm hứng từ một diễn
                    viên hài Nhật Bản Hayashiya Sanpei. Hành động thích chạm tay
                    lên trán của Wobbuffet cũng được lấy từ hình tượng của danh
                    hài này.{" "}
                  </p>
                  <h3>5. Obstagoon</h3>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/12/photo-1-1623516299941621265571.jpg"
                    alt="Hitmonlee, Hitmonchan, Pokemon, Snorlax, "
                    note=""
                  />
                  <p>
                    Trước đây, loài Zigzagoon chỉ có 2 cấp độ, nhưng khi đặt
                    chân đất vùng đất Galar, nó đã có thêm cấp độ tiến hóa mới
                    có tên Obstagoon. Với thiết kế mang màu sắc trắng - xám -
                    đen cùng nhiều gai nhọn trên người, không khó để nhiều người
                    đã hình dung Pokémon này dường như được lấy cảm hứng một tay
                    chơi nhạc rock từng xuất hiện trong thập niên 80. Đáp án
                    "gần gũi" nhất có lẽ là siêu sao nhạc rock có tên Gene
                    Simmons thuộc ban nhạc hard rock Kiss.{" "}
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
