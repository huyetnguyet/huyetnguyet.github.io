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
"timestamp": '08/08/2021 11:02 AM',
"title": 'Top 5 game open world có đồ họa đỉnh của chóp, theo bình chọn của game thủ',
"description": 'Có nhiều tựa game được khen ngợi về đồ họa, nhưng 5 tựa game này có lẽ là kinh điển nhất trong thể loại open world',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/6/5-800x450-16282376254711350454925.jpg',
"alt": 'GAME,',
"category": 'games',
"date": '08/08/2021',
"time": '11:02 AM',
"link": '/top-5-game-open-world-co-do-hoa-dinh-cua-chop-theo-binh-chon-cua-game-thu',
"zcomponent": 'page_20210808110202',
"filepath": './20210808110202-top-5-game-open-world-co-do-hoa-dinh-cua-chop-theo-binh-chon-cua-game-thu.js'
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
  "Top 5 game open world có đồ họa đỉnh của chóp, theo bình chọn của game thủ";
const author = "DS";
const source = "Trí Thức Trẻ";
const timestamp = "08/08/2021 11:02 AM";
const description =
  "Có nhiều tựa game được khen ngợi về đồ họa, nhưng 5 tựa game này có lẽ là kinh điển nhất trong thể loại open world";
const link =
  "top-5-game-open-world-co-do-hoa-dinh-cua-chop-theo-binh-chon-cua-game-thu";
const tagparam = ["GAME"];
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

export default function page_20210808110202() {
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
                      Đồ họa là yếu tố không thể thiếu giúp làm nên một tựa{" "}
                      <strong>game</strong> hay. Tuy nhiên, nó là yếu tố được
                      đánh giá khá chủ quan. Tùy từng tựa game và phong cách đồ
                      họa mà nhà phát triển lựa chọn, sẽ có tiêu chí khác nhau
                      để xếp loại.
                    </p>
                    <p>
                      Ví dụ, với tựa <strong>game</strong> có đồ họa mang hơi
                      hướm tả thực thì Witcher 3 hoặc Skyrim được đánh giá cao.
                      Final Fantasy 15 là game có đồ họa tốt theo phong cách
                      JRPG. Những tựa game như Borderland hay World of Warcraft
                      chắc chắn cũng có thể được xem là “tốt nhất” nếu xét các
                      tiêu chí do nhà phát triển đặt ra.
                    </p>
                    <p>
                      Dù không thể liệt kê một bảng xếp hạng tuyệt đối chính
                      xác, nhưng <strong>game</strong> thủ yêu thích dòng game
                      open world đã đề xuất một vài cái tên mà họ cho rằng đồ
                      họa cực kỳ tốt dưới đây.
                    </p>
                    <h5>The Witcher III: Wild Hunt</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/6/5-800x450-16282376254711350454925.jpg"
                      alt="1, GAME,"
                      note=""
                    />
                    <p>
                      Kể từ khi được ra mắt, The Wither III: Wild Hunt luôn nằm
                      trong danh sách các <strong>game</strong> open world hay
                      ho nhất của nhiều người. Ngoài gameplay và cốt truyện được
                      xây dựng tốt, đồ họa của game cũng là một điểm sáng được
                      các game thủ nhắc đến. Những phân cảnh thiên nhiên, chiến
                      đấu, sinh vật kỳ bí… trong game đều được thực hiện rất
                      tốt, mang đậm hơi hướm thần thoại.
                    </p>
                    <h5>Assassins Creed: Origins</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/6/photo-0-1502549947656-16282375943831823747027.jpg"
                      alt="2, GAME,"
                      note=""
                    />{" "}
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/6/photo-0-1509698244541-1628237655679159000288.jpg"
                      alt="3, GAME,"
                      note=""
                    />
                    <p>
                      Loạt <strong>game</strong> Assassins Creed chưa bao giờ là
                      kẻ thất bại khi bàn đến đồ họa. Origins cũng không phải
                      ngoại lệ. Ubisoft dường như đã làm rất tốt việc tái hiện
                      một Ai Cập cổ đại với vô số kỳ quan hùng vĩ, mọi góc độ
                      cảnh vật trong game đều tuyệt đẹp, đặc biệt là khi chơi
                      trên Xbox One X hoặc PC cao cấp.
                    </p>
                    <RelationNewsInPage category={category} />
                    <h5>Horizon: Zero Dawn</h5>
                    <p>
                      Series Killzone của Guerrilla <strong>Game</strong>s là
                      một tựa game có đồ họa rất đỉnh, nhưng với Horizon: Zero
                      Dawn, nhà sản xuất đã đưa mọi thứ lên tầm cao mới. Công cụ
                      trò chơi độc quyền của Guerrilla Games, Decima, là một sản
                      phẩm tuyệt vời đem đến sự kết hợp kỹ thuật trong thế giới
                      các dòng máy chơi game. Decima giúp Horizon: Zero Dawn trở
                      nên mượt mà hơn khi chơi trên PS4, phần đồ họa gần như xóa
                      nhòa ranh giới thực và ảo.
                    </p>{" "}
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/6/horizon-zero-dawn-30-04-2021-0-1628237694246499134327.jpg"
                      alt="4, GAME,"
                      note=""
                    />
                    <p>
                      Ngoài Horizon: Zero Dawn, một tựa <strong>game</strong>{" "}
                      khác của Guerrilla Games cũng sử dụng công cụ Decima là
                      Death Stranding (2019).
                    </p>
                    <h5>The Legend of Zelda: Breath of the Wild</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/6/screenshot-2021-06-15-at-17-38-11-16282377475331222583140.png"
                      alt="5, GAME,"
                      note=""
                    />
                    <p>
                      <strong>Game</strong> là một bước đột phá lớn và kinh điển
                      từ nhà sản xuất. Rất ít trò chơi có thể sáng ngang với
                      khung cảnh rộng lớn, địa hình trải rộng, mô phỏng lại tỉ
                      mỉ từng cái cây ngọn cỏ như trong Breath of the Wild.
                      Trong thời buổi các nhà sản xuất game chạy đua nhau, cho
                      ra đời những tựa game theo phong cách tả thực, thì
                      Nintendo lại chọn hướng đi riêng với đồ họa có hiệu ứng đổ
                      bóng. Kết quả là họ đã được đền đáp xứng đáng khi không
                      ngả theo số đông.
                    </p>
                    <h5>Series Grand Theft Auto</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/6/287-2870613gta-5-hd-wallpapers-pack-download-v-16282378129031619649171.jpg"
                      alt="6, GAME,"
                      note=""
                    />
                    <p>
                      Ở thể loại <strong>game</strong> open world, Grand Theft
                      Auto là cái tên không thể không nhắc đến. Cả ở chế độ chơi
                      trực tuyến lẫn ngoại tuyến, GTA đều thỏa mãn người chơi từ
                      gameplay đến đồ họa. Một điểm cộng khác cho game là khá
                      nhẹ nhàng, phần game như San Andreas, có thể chơi mượt
                      trên PC RAM 2-3GB và có cả mod để cải thiện đồ họa.
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
