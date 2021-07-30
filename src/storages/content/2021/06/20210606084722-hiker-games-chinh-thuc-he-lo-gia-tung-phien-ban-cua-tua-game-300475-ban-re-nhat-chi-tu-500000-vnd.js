import React from "react";
import "components/page.css";
import { AdsHorizontal, AdsVertical } from "components/adsMethods";
import { RandomFeature } from "components/methods";

import { Content, ContentImage, FacebookShareButton } from "components/content";

import { Helmet } from "react-helmet";

/* ---------------------------------------------------------------- */

/*

 <ContentItem title="Hiker Games chính thức hé lộ giá bán gói donate từng phiên bản của tựa game 300475, bản rẻ nhất là 1.000.000 VND"\description="Game thủ hãy chuẩn bị tiền để mua 300475." 
src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/6/photo-1-1622912847306429666092.jpg" 
alt="Nha Phat Trien, Game Thuan Viet, Chien Dich Ho Chi Minh, 300475, Cong Dong Game Thu, " 
category="games" 
time="06/06/2021 08:47 AM" 
link="/hiker-games-chinh-thuc-he-lo-gia-tung-phien-ban-cua-tua-game-300475-ban-re-nhat-chi-tu-500000-vnd"/>

{title:"Hiker Games chính thức hé lộ giá bán gói donate từng phiên bản của tựa game 300475, bản rẻ nhất là 1.000.000 VND",\description:"Game thủ hãy chuẩn bị tiền để mua 300475." ,
src:"https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/6/photo-1-1622912847306429666092.jpg" ,
alt:"Nha Phat Trien, Game Thuan Viet, Chien Dich Ho Chi Minh, 300475, Cong Dong Game Thu, " ,
category:"games" ,
time:"06/06/2021 08:47 AM" ,
link:"/hiker-games-chinh-thuc-he-lo-gia-tung-phien-ban-cua-tua-game-300475-ban-re-nhat-chi-tu-500000-vnd",component:"page_20210606084722",
filepath:"./20210606084722-hiker-games-chinh-thuc-he-lo-gia-tung-phien-ban-cua-tua-game-300475-ban-re-nhat-chi-tu-500000-vnd.js"},

Hiker Games chính thức hé lộ giá bán gói donate từng phiên bản của tựa game 300475, bản rẻ nhất là 1.000.000 VND
Game thủ hãy chuẩn bị tiền để mua 300475.
https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/6/photo-1-1622912847306429666092.jpg
Nha Phat Trien, Game Thuan Viet, Chien Dich Ho Chi Minh, 300475, Cong Dong Game Thu, 
games
06/06/2021
08:47 AM
/hiker-games-chinh-thuc-he-lo-gia-tung-phien-ban-cua-tua-game-300475-ban-re-nhat-chi-tu-500000-vnd
page_20210606084722
./20210606084722-hiker-games-chinh-thuc-he-lo-gia-tung-phien-ban-cua-tua-game-300475-ban-re-nhat-chi-tu-500000-vnd.js




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
  "Hiker Games chính thức hé lộ giá bán gói donate từng phiên bản của tựa game 300475, bản rẻ nhất là 1.000.000 VND";
const author = "TVG";
const source = "Pháp luật và bạn đọc";
const date = "06/06/2021";
const time = "08:47 AM";
const description = "Game thủ hãy chuẩn bị tiền để mua 300475.";
const link =
  "hiker-games-chinh-thuc-he-lo-gia-tung-phien-ban-cua-tua-game-300475-ban-re-nhat-chi-tu-500000-vnd";
const tagparam = [
  "nha-phat-trien",
  "game-thuan-viet",
  "chien-dich-ho-chi-minh",
  "300475",
  "cong-dong-game-thu",
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

export default function page_20210606084722() {
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
              <div className="author">{author}</div> - Theo {source} | {date}{" "}
              {time}
            </p>
          </div>
          <FacebookShareButton link={facebookLinkShare} />

          <div class="containerContent">
            <AdsHorizontal />
            <div className="content">
              <div className="contentContainer">
                <p className="description">{description}</p>
                <div className="contentBody">
                  <p>
                    Như thông tin chúng tôi đã đưa, vào ngày 6/5 vừa qua, nhà
                    phát triển Hiker Games (cha đẻ của game thuần Việt 7554) đã
                    chính thức thông báo về dự án mới có tên 300475. Đây sẽ là
                    tựa game về đề lịch sử, tái hiện lại chiến dịch Hồ Chí Minh
                    huyền thoại. Khác với dự án 7554, 300475 sẽ được triển khai
                    theo hình thức huy động vốn từ cộng đồng. Game sẽ được chia
                    làm 3 giai đoạn phát triển, kéo dài trong vòng khoảng 30
                    tháng. Hiker Games đặt kỳ vọng sẽ huy động được khoảng 20 tỷ
                    để thực hiện dự án 300475.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/6/photo-1-1622912847306429666092.jpg"
                    alt="Nha Phat Trien, Game Thuan Viet, Chien Dich Ho Chi Minh, 300475, Cong Dong Game Thu, "
                    note=""
                  />
                  <p>
                    Ngay sau khi Hiker Games công bố dự án, cộng đồng game thủ
                    Việt đã ngay lập tức hưởng ứng chiến dịch kêu gọi vốn phát
                    triển tựa game 300475. Người có nhiều thì ủng hộ nhiều,
                    người có ít thì ủng hộ ít vì trong mình ai cũng có tinh thần
                    yêu nước và ủng hộ sản phẩm nước nhà, đặc biệt là một tựa
                    game FPS kể về lịch sử hào hùng của dân tộc Việt như 300475.
                    Nhằm không phụ lòng cộng đồng game thủ và đặc biệt là những
                    game thủ đã ủng hộ thì bắt đầu bắt tay vào thực hiện những
                    bước phát triển đầu tiên của 300475.
                  </p>
                  <p>
                    Trong một thông tin mới cập nhật thì nhà phát triển Hiker
                    Games đã chính thức tiết lộ giá bán của tựa game 300475đang
                    được cộng đồng game thủ Việt đón chờ từng ngày trên trang
                    web chính thức của Hiker Games. Theo đó thì 300475 sẽ có
                    nhiều phiên bản và mức giá bán gói donate khác nhau dành cho
                    game thủ lựa chọn, như phiên bản Digital, phiên bản vật lý,
                    phiên bản đặc biệt,v.v.....Mức giá bán gói donate rẻ nhất sẽ
                    là 1.000.0000 VNĐ, đây là một mức giá vô cùng phù hợp đối
                    với một tựa game do chính người viết phát triển, có bối cảnh
                    và đề tài lịch sử Việt Nam như 300475.
                  </p>
                  <p>Cụ thể, giá và ưu đãi của từng phiên bản sẽ như sau:</p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/6/6/photo-1-16229128498131286329015.jpg"
                    alt="Nha Phat Trien, Game Thuan Viet, Chien Dich Ho Chi Minh, 300475, Cong Dong Game Thu, "
                    note=""
                  />
                  <p>
                    *Phiên bản Digital Download: có giá 1.000.0000 VNĐ, đây là
                    phiên bản cơ bản mà game thủ chỉ cần mua và tải xuống về PC,
                    Laptop của mình. Đặc biệt, nếu game thủ ủng hộ dự án 300475
                    trong quá trình phát triển hiện nay sẽ được giảm giá 50% so
                    với giá game chính thức.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/6/6/photo-2-16229128488211357680759.jpg"
                    alt="Nha Phat Trien, Game Thuan Viet, Chien Dich Ho Chi Minh, 300475, Cong Dong Game Thu, "
                    note=""
                  />
                  <p>
                    *Phiên bản vật lý (bản đĩa): có giá tương tự Digital là
                    1.000.0000 VNĐ, đây là phiên bản đĩa, game thủ mua về vừa có
                    thể chơi và lưu trữ đĩa làm kỷ niệm. Ngoài ra, game thủ sẽ
                    còn nhận được 1 đĩa Sound Track của game với những bản nhạc
                    hào hùng trong 300475.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/6/6/photo-3-1622912848260774234340.jpg"
                    alt="Nha Phat Trien, Game Thuan Viet, Chien Dich Ho Chi Minh, 300475, Cong Dong Game Thu, "
                    note=""
                  />
                  <p>
                    *Phiên bản vật lý nâng cao: có giá 2.000.0000 VNĐ, đây là
                    phiên bản đặc biệt khi game thủ vừa có thể nhận được code
                    tải game như bản Digital mà vừa nhận được đĩa game như bản
                    vật lý thông thường. Ngoài ra, game thủ còn nhận được 1
                    chiếc áo phông của game, 1 DVD ghi lại phía sau hậu trường
                    game và 1 Poster cảm ơn của đội ngũ sản xuất. Và game thủ sẽ
                    là người được ưu tiên chơi thử trước các phiên bản beta của
                    300475.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/6/6/photo-4-16229128487551969357314.jpg"
                    alt="Nha Phat Trien, Game Thuan Viet, Chien Dich Ho Chi Minh, 300475, Cong Dong Game Thu, "
                    note=""
                  />
                  <p>
                    *Phiên bản sưu tập: có giá 3.000.0000 VNĐ, đây là phiên bản
                    đặc biệt tương tự như phiên bản vật lý nâng cao nhưng game
                    thủ sẽ còn được nhận thêm một cuốn Artwork vô cùng đẹp mắt
                    của game làm kỷ niệm.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/6/6/photo-5-16229128482871052920341.jpg"
                    alt="Nha Phat Trien, Game Thuan Viet, Chien Dich Ho Chi Minh, 300475, Cong Dong Game Thu, "
                    note=""
                  />
                  <p>
                    *Phiên bản đặc biệt: có giá 5.000.0000 VNĐ. Như tên gọi thì
                    đây là phiên bản vô cùng đặc biệt, ngoài những quà tăng như
                    phiên bản sưu tập, thì game thủ còn nhận được thêm 1 bộ
                    tượng in 3D các nhân vật chính trong 300475, đây sẽ là tượng
                    3D của các chiến sĩ quân giải phóng miền Nam Việt Nam.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/6/6/photo-6-16229128503192094221774.jpg"
                    alt="Nha Phat Trien, Game Thuan Viet, Chien Dich Ho Chi Minh, 300475, Cong Dong Game Thu, "
                    note=""
                  />
                  <p>
                    *Phiên bản nhà tài trợ: Đây là phiên bản dành cho những game
                    thủ (nhà tài trợ) đã ủng hộ dự án 300475 số tiền lên tới
                    30.000.0000 VNĐ. Để tri ân cho nhà tài trợ thì Hiker Games
                    sẽ dựng mô hình 3D của chính những game thủ mua phiên bản
                    này vào trong 300475. Ngoài ra, game thủ cũng sẽ nhận được
                    tất cả những ưu đãi của phiên bản đặc biệt.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/6/6/photo-7-16229128492671289392476.jpg"
                    alt="Nha Phat Trien, Game Thuan Viet, Chien Dich Ho Chi Minh, 300475, Cong Dong Game Thu, "
                    note=""
                  />
                  <p>
                    *Phiên bản nhà tài trợ đặc biệt: đây là phiên bản cao cấp
                    nhất và đắt nhất của 300475 khi có giá lên tới 50.000.0000
                    VNĐ. Đây là phiên bản dành cho những game thủ (nhà tài trợ)
                    đã ủng hộ dự án 300475 số tiền lên tới 50.000.0000 VNĐ. Để
                    tri ân cho nhà tài trợ thì Hiker Games sẽ sử dụng tên game
                    thủ mua phiên bản này cho một trong các nhân vật trong kịch
                    bản, tặng riêng một artwork vẽ chân dung game thủ trong bối
                    cảnh game và tên game thủ sẽ xuất hiện trong credit của game
                    với tư cách là thành viên đội ngũ sản xuất. Ngoài ra, game
                    thủ cũng sẽ nhận được tất cả những ưu đãi của phiên bản nhà
                    tài trợ.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/6/photo-8-1622912849326280789333.jpg"
                    alt="Nha Phat Trien, Game Thuan Viet, Chien Dich Ho Chi Minh, 300475, Cong Dong Game Thu, "
                    note=""
                  />
                  <p>
                    Theo ghi nhận của chúng tôi từ thông tin từ trang web chính
                    thức của Hiker Games, mặc dù mới chỉ 1 tháng đầu tiên tựa
                    game 300475 được công bố tuy nhiên đã có tới 526 game thủ
                    ủng hộ vốn phát triển tựa game FPS Việt này. Trong đó, 379
                    game thủ đã mua Gói Digital Download trị giá 500.000 VNĐ, 65
                    game thủ đã mua Gói Phiên Bản Vật Lý trị giá 1.000.000 VNĐ
                    và đặc biệt là 4 game thủ đã Gói Phiên Bản Nhà Tài Trợ Đặc
                    Biệt có trị giá 50 triệu VNĐ để ủng hộ cho Hiker Games và dự
                    án phát triển tựa game 300475.
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
