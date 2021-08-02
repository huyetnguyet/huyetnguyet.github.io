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
"timestamp": '10/06/2021 01:18 PM',
"title": '10 game chiến thuật cho bạn làm thống soái, chỉ huy hàng trăm vạn quân (Phần 1)',
"description": 'Những tựa game chiến thuật luôn có sức cuốn hút kỳ lạ.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/6/10/photo-1-1623342880158183739885.jpg',
"alt": 'Game Chien Thuat, Chien Tranh The Gioi, Company Of Heroes 2, Hearts Of Iron Iv, Total War Three Kingdoms, ',
"category": 'games',
"date": '10/06/2021',
"time": '01:18 PM',
"link": '/10-game-chien-thuat-cho-ban-lam-thong-soai-chi-huy-hang-tram-van-quan-phan-1',
"zcomponent": 'page_20210610131836',
"filepath": './20210610131836-10-game-chien-thuat-cho-ban-lam-thong-soai-chi-huy-hang-tram-van-quan-phan-1.js'
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
  "10 game chiến thuật cho bạn làm thống soái, chỉ huy hàng trăm vạn quân (Phần 1)";
const author = "Real Madrid";
const source = "Pháp luật và bạn đọc";
const timestamp = "10/06/2021 01:18 PM";
const description = "Những tựa game chiến thuật luôn có sức cuốn hút kỳ lạ.";
const link =
  "10-game-chien-thuat-cho-ban-lam-thong-soai-chi-huy-hang-tram-van-quan-phan-1";
const tagparam = [
  "game-chien-thuat",
  "chien-tranh-the-gioi",
  "company-of-heroes-2",
  "hearts-of-iron-iv",
  "total-war-three-kingdoms",
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

export default function page_20210610131836() {
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
                  <h4>Company of Heroes 2</h4>
                  <p>
                    <strong>Company of Heroes 2</strong> là sản phẩm của Relic
                    Entertainment và được Sega phát hành vào năm 2013. Nội dung
                    game sẽ lấy bối cảnh chiến tranh thế giới thứ hai và tập
                    trung vào những mặt trận ở phía Đông, nơi bạn sẽ được "thử
                    sức" cùng với quân đội Nga để đẩy lùi những cuộc tấn công
                    của Đức Quốc Xã.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/6/10/photo-1-1623342880158183739885.jpg"
                    alt="Game Chien Thuat, Chien Tranh The Gioi, Company Of Heroes 2, Hearts Of Iron Iv, Total War Three Kingdoms, "
                    note=""
                  />
                  <p>
                    Nhắc lại về dòng game Company of Heroes, đây là trò chơi đã
                    từng làm mưa làm gió đối với giới game thủ ưa thích thể loại
                    game chiến thuật. Ra mắt lần đầu tiên vào năm 2006, Company
                    of Heroes đã đạt ngay được số điểm gần như tuyệt đối trên
                    các trang tin tức nước ngoài, cụ thể như IGN đã không "ngần
                    ngại" tặng 9.4 trong tổng số 10 điểm dành cho tựa game này.
                  </p>
                  <p>
                    Kế thừa phiên bản đầu tiên,{" "}
                    <strong>Company of Heroes 2</strong> đã mang trong mình
                    những gì tinh túy nhất của bậc đàn anh đi trước như là khả
                    năng chỉ huy, môi trường bị phá hủy giờ đây sẽ được nâng lên
                    một tầm cao mới nhờ vào engine Essence 3.0 "cây nhà lá
                    vườn". Với mức đánh giá tích cực lên đến 85% trên Steam, bạn
                    chắc chắn sẽ không phải thất vọng về tựa game này.
                  </p>
                  <h4>Hearts of Iron IV</h4>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/6/10/photo-1-16233429030121961995328.jpg"
                    alt="Game Chien Thuat, Chien Tranh The Gioi, Company Of Heroes 2, Hearts Of Iron Iv, Total War Three Kingdoms, "
                    note=""
                  />
                  <p>
                    <strong>Hearts of Iron IV</strong> là phần tiếp theo của
                    series game chiến thuật đình đám do hãng Paradox Development
                    Studio sản xuất. Phần lớn nội dung trong loạt game đại chiến
                    lược Hearts of Iron tập trung vào Thế chiến II, cho phép
                    người chơi kiểm soát bất kỳ quốc gia đã tồn tại trong thời
                    kỳ 1936-1948.{" "}
                  </p>
                  <p>
                    <strong>Hearts of Iron IV</strong> cho phép người chơi đảm
                    nhiệm một nhà quân sự tài ba và phải đối mặt với những khía
                    cạnh quan trọng khác của chiến tranh như nghiên cứu khoa học
                    kỹ thuật, ngoại giao và xây dựng công trình kiến trúc cho
                    đất nước mà ta lựa chọn ban đầu. Trò chơi có một cơ chế
                    gameplay phức tạp và rất có chiều sâu khiến người chơi cần
                    tính toán từng bước cẩn thận để giành chiến thắng.
                  </p>
                  <RelationNewsInPage category={category} />
                  <p>
                    Mọi thứ trong "<strong>Hearts Of Iron IV</strong>" đều được
                    quy về mặt chiến thuật, từ sự cân bằng quân đội, hải quân,
                    không quân, đến những nhu cầu về tài nguyên và công nghiệp.
                    Đây là một game chiến thuật đúng nghĩa và bạn có thể chơi
                    theo vô vàn cách, nó cung cấp cho bạn hàng trăm hàng ngàn
                    giờ chơi game thú vị.
                  </p>
                  <h4>Sid Meier’s Civilization VI</h4>{" "}
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/6/10/photo-1-1623342939751394569665.jpg"
                    alt="Game Chien Thuat, Chien Tranh The Gioi, Company Of Heroes 2, Hearts Of Iron Iv, Total War Three Kingdoms, "
                    note=""
                  />
                  <p>
                    Với quy mô bản đồ rộng lớn, trò chơi cho phép người chơi gắn
                    bó với thành phố của mình từ thuở hồng hoang cho tới khi
                    phát triển hiện đại vươn ra tầm vũ trụ. Kế thừa và phát huy
                    những tinh hoa của các đàn anh đi trước, Civilization VI đã
                    hoàn thành rất tốt sứ mệnh của mình.
                  </p>
                  <p>
                    Với điểm số trung bình 88/100, C6 đã lọt top những tựa game
                    chiến thuật hay nhất mọi thời đại trên Metacritic. Chưa dừng
                    lại ở đó, tại nhiều sự kiện lớn trong năm 2016, sản phẩm của
                    2K Games đã gắt hại được rất nhiều giải thưởng cho hạng mục
                    "game chiến thuật hay nhất năm". Có thể coi, Civilization VI
                    chính là phiên bản thành công nhất của toàn bộ dòng game
                    này.
                  </p>
                  <h4>Wargame: Red Dragon</h4>{" "}
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/6/10/photo-1-16233429953961840312968.jpg"
                    alt="Game Chien Thuat, Chien Tranh The Gioi, Company Of Heroes 2, Hearts Of Iron Iv, Total War Three Kingdoms, "
                    note=""
                  />
                  <p>
                    Wargame: Red Dragon được đặt trong một thế giới giả tưởng,
                    nơi mà nhân loại luôn chìm trong chiến tranh. Đỉnh điểm là
                    cuộc xung đột của nhiều quốc gia tạo thành Thế chiến 3 vào
                    thập niên cuối cùng của thế kỷ 20.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/6/10/photo-1-1623343018845751034403.jpg"
                    alt="Game Chien Thuat, Chien Tranh The Gioi, Company Of Heroes 2, Hearts Of Iron Iv, Total War Three Kingdoms, "
                    note=""
                  />
                  <p>
                    Wargame: Red Dragon có sự đa dạng lớn trong lối chơi khi sở
                    hữu đến 17 khối quân sự khác nhau, cùng với đó là 1450 đơn
                    vị chiến đấu, từ lục quân đến không quân. Kể cả với những
                    người chơi có kinh nghiệm trong thể loại chiến thuật thì
                    cũng sẽ phải cảm thấy ngợp với sự đồ sộ và rộng lớn của
                    Wargame: Red Dragon.
                  </p>
                  <p>
                    Trò chơi được đánh giá có độ khó cao, đòi hỏi game thủ phải
                    tìm tòi, nghiên cứu và vận dụng nhiều kỹ năng mang tính
                    logic để giải quyết. Không chỉ phải thắng lợi trên chiến
                    trường, Wargame: Red Dragon còn xây dựng một hệ thống ngoại
                    giao phức tạp và cực kỳ logic. Mỗi kết quả trên chiến trường
                    sẽ tạo ra thay đổi lớn trên bàn đàm phán và buộc bạn phải
                    tùy cơ ứng biến trong các tình huống khác nhau.
                  </p>
                  <h4>Total War: Three Kingdoms</h4>{" "}
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/10/photo-1-16233432653011718031787.jpg"
                    alt="Game Chien Thuat, Chien Tranh The Gioi, Company Of Heroes 2, Hearts Of Iron Iv, Total War Three Kingdoms, "
                    note=""
                  />
                  <p>
                    Three Kingdoms là phần game mới trong series game chiến
                    thuật nổi tiếng Total War. Đương nhiên, với tên gọi như vậy,
                    nội dung của game sẽ tập trung toàn bộ vào thời kỳ Tam Quốc,
                    một giai đoạn chiến tranh tàn khốc trong lịch sử Trung Hoa.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/6/10/photo-1-1623343072672292006426.jpg"
                    alt="Game Chien Thuat, Chien Tranh The Gioi, Company Of Heroes 2, Hearts Of Iron Iv, Total War Three Kingdoms, "
                    note=""
                  />
                  <p>
                    Game lấy bối cảnh vào thời suy tàn của nhà Hán (Trung Quốc)
                    khi triều đình ngày càng bê tha, thối nát, khiến kinh tế suy
                    sụp và bạo loạn xảy ra triền miên. Bắt đầu từ sự kiện 18 lộ
                    chư hầu (do Viên Thiệu làm minh chủ) nổi dậy chống lại sự
                    bạo ngược của Đổng Trác, Total War: Three Kingdoms sẽ đưa
                    bạn về một trong những thời kỳ chiến loạn tàn khốc nhất
                    trong lịch sử Trung Quốc.
                  </p>
                  <p>
                    Chủ đề trung tâm của Total War: Three Kingdoms dựa trên một
                    câu nói nổi tiếng: "Cái gì hợp lâu sẽ tan, cái gì tan lâu sẽ
                    hợp". Một đế chế được hưởng nhiều thế kỷ thịnh vượng sẽ chia
                    thành nhiều lãnh địa khác nhau được cai trị bởi các lãnh
                    chúa và gia tộc cho đến thời điểm đó chỉ còn lại ba vương
                    quốc. Từ đó, ba phe phái này sẽ trải qua cuộc xung đột nội
                    bộ và bên ngoài của chính họ cho đến khi đất được thống nhất
                    một lần nữa.
                  </p>
                  <p>(Còn tiếp...)</p>
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
