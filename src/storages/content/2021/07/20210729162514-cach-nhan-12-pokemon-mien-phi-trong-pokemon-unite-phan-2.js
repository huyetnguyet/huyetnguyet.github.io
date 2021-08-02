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
"timestamp": '29/07/2021 04:25 PM',
"title": 'Cách nhận 12 Pokémon miễn phí trong Pokémon Unite (Phần 2)',
"description": 'Hãy nhanh tay tham gia Pokémon Unite để nhận được nhiều phần quà miễn phí giá trị.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/26/photo-1-16272752477791676071344.jpg',
"alt": 'HUẤN LUYỆN VIÊN,POKÉMON,POKÉMON UNITE,MOBA POKÉMON,MOBA POKEMON,MOBA POKÉMON UNITE,',
"category": 'games',
"date": '29/07/2021',
"time": '04:25 PM',
"link": '/cach-nhan-12-pokemon-mien-phi-trong-pokemon-unite-phan-2',
"zcomponent": 'page_20210729162514',
"filepath": './20210729162514-cach-nhan-12-pokemon-mien-phi-trong-pokemon-unite-phan-2.js'
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
const title = "Cách nhận 12 Pokémon miễn phí trong Pokémon Unite (Phần 2)";
const author = "Real Madrid";
const source = "Pháp luật và bạn đọc";
const timestamp = "29/07/2021 04:25 PM";
const description =
  "Hãy nhanh tay tham gia Pokémon Unite để nhận được nhiều phần quà miễn phí giá trị.";
const link = "cach-nhan-12-pokemon-mien-phi-trong-pokemon-unite-phan-2";
const tagparam = [
  "HUẤN LUYỆN VIÊN",
  "POKÉMON",
  "POKÉMON UNITE",
  "MOBA POKÉMON",
  "MOBA POKEMON",
  "MOBA POKÉMON UNITE",
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

export default function page_20210729162514() {
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
                  <p>
                    Là một game thuộc series <strong>Pokémon</strong>, đương
                    nhiên một trong những công việc quan trọng của người chơi đó
                    là sưu tầm nhân vật. Sẽ có rất nhiều các loại Pokémon xuất
                    hiện trong trò chơi này. Một số loại miễn phí, một số loại
                    cần tham gia các sự kiện đặc biệt, một số khác lại cần phải
                    bỏ tiền ra mới mua được.
                  </p>
                  <p>
                    Để bắt đầu làm quen với <strong>Pokémon</strong> Unite,
                    chúng tôi xin giới thiệu 12 Pokémon mà các bạn có thể kiếm
                    được miễn phí của trò chơi này.
                  </p>
                  <p>
                    Cách nhận 12 <strong>Pokémon</strong> miễn phí trong{" "}
                    <strong>Pokémon Unite</strong> (Phần 1)
                  </p>
                  <h5>Venusaur</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/26/photo-1-16272752477791676071344.jpg"
                    alt="1, HUẤN LUYỆN VIÊN,POKÉMON,POKÉMON UNITE,MOBA POKÉMON,MOBA POKEMON,MOBA POKÉMON UNITE,"
                    note=""
                  />
                  <p>
                    Sau khi đạt 700 điểm chiến đấu, game thủ sẽ đạt cấp độ{" "}
                    <strong>Huấn luyện viên</strong> 5 và phần thưởng là Giấy
                    phép Hợp nhất Venusaur. Là một Pokemon thuộc loại Attacker,
                    Venusaur xuất sắc trong việc gây sát thương lớn từ xa. Khả
                    năng thụ động của nó làm tăng sát thương khi lượng hp xuống
                    thấp, điều này khuyến khích những người chơi dùng Venusaur
                    nên mạo hiểm và hung hãn hơn.
                  </p>
                  <h5>Alolan Ninetales</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/26/photo-1-16272754311881486516216.jpg"
                    alt="2, HUẤN LUYỆN VIÊN,POKÉMON,POKÉMON UNITE,MOBA POKÉMON,MOBA POKEMON,MOBA POKÉMON UNITE,"
                    note=""
                  />
                  <p>
                    Sau khi chơi game đủ 14 ngày, game thủ sẽ nhận được Giấy
                    phép Hợp nhất cho Alolan Ninetales. Sự kiện này bắt đầu khi
                    người chơi đăng nhập vào Pokemon Unite lần đầu tiên và sẽ
                    không kết thúc cho đến khi tất cả 14 phần quà được nhận (mỗi
                    ngày 1 lần).
                  </p>
                  <RelationNewsInPage category={category} />
                  <p>
                    Là một Pokemon thuộc loại Attacker, Alolan Ninetales không
                    chỉ có thể gây sát thương nặng mà còn khiến kẻ thù khó chạy
                    thoát nhờ lớp băng đóng băng của nó. Khả năng bị động của
                    Alolan Ninetales làm cho những hiệu ứng đóng băng mạnh hơn.
                    Người chơi nên cân nhắc sử dụng Alolan Ninetales nếu muốn
                    duy trì quyền kiểm soát chiến trường mà vẫn gây sát thương
                    cao.
                  </p>
                  <h5>Cinderace</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/26/photo-1-16272755711721378159578.jpg"
                    alt="3, HUẤN LUYỆN VIÊN,POKÉMON,POKÉMON UNITE,MOBA POKÉMON,MOBA POKEMON,MOBA POKÉMON UNITE,"
                    note=""
                  />
                  <p>
                    Giống như Alolan Ninetales, Cinderace có thể nhận được miễn
                    phí trong Quà chào mừng 14 ngày. Chỉ cần chơi trò chơi, đảm
                    bảo đăng nhập mỗi ngày, cho đến khi đạt đến mốc ngày thứ 8
                    là các bạn đã có thể nhận được Cinderace.{" "}
                  </p>
                  <p>
                    Cinderace là một loại Attacker <strong>Pokémon</strong>,
                    nhưng nó có tính cơ động cực cao. Khả năng bị động của
                    Cinderace cho phép nó đặt Cinders vào Pokémon đối phương và
                    gây thêm sát thương bất cứ khi nào Pokémon đó bị đánh.{" "}
                  </p>
                  <h5>Greninja</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/26/photo-1-1627275765073340324671.png"
                    alt="4, HUẤN LUYỆN VIÊN,POKÉMON,POKÉMON UNITE,MOBA POKÉMON,MOBA POKEMON,MOBA POKÉMON UNITE,"
                    note=""
                  />
                  <p>
                    Greninja cũng là phần thưởng trong gói sự kiện đăng nhập 14
                    ngày của <strong>Pokémon</strong> Unite. Greninja, một hot
                    Pokémon đang được rất nhiều game thủ yêu thích trong các bản
                    beta và demo của <strong>Pokémon Unite</strong>. Greninja có
                    3 cấp độ tiến hóa và đạt sức mạnh tối đa ở level 7 (thấp hơn
                    Charizard 2 level). Greninja là Pokémon thiên về tấn công
                    với sự cân bằng gần như hoàn hảo ở tất cả các nhiệm vụ.
                  </p>
                  <h5>Crustle</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/26/photo-1-16272758898301260596192.png"
                    alt="5, HUẤN LUYỆN VIÊN,POKÉMON,POKÉMON UNITE,MOBA POKÉMON,MOBA POKEMON,MOBA POKÉMON UNITE,"
                    note=""
                  />
                  <p>
                    Giấy phép Hợp nhất của Crustle có thể nhận được miễn phí nếu
                    người chơi hoàn thành toàn bộ Thử thách dành cho người mới
                    bắt đầu. Thử thách này mở khóa các nhiệm vụ mới mỗi ngày
                    trong 7 ngày, bắt đầu từ khi người chơi đăng nhập lần đầu
                    tiên. Tất cả các nhiệm vụ có giá trị 7 ngày phải được hoàn
                    thành trong vòng 30 ngày kể từ ngày bắt đầu trò chơi, nhưng
                    hoàn thành Ngày 7 sẽ mở khóa Crustle.
                  </p>
                  <p>
                    Chú cua đá Crustle là <strong>Pokémon</strong> hệ bọ và đá.
                    Pokémon này có 2 dạng tiến hóa và đạt sức mạnh tối đa ở
                    level 4. Giống Snorlax, đây cũng là Pokémon mang thiên hướng
                    chống chịu và hỗ trợ.
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
