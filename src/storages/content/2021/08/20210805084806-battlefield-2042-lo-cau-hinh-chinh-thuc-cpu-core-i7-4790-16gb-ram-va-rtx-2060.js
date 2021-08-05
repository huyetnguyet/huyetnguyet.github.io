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
"timestamp": '05/08/2021 08:48 AM',
"title": 'Battlefield 2042 lộ cấu hình chính thức, CPU Core i7 4790, 16GB RAM và RTX 2060',
"description": 'Cấu hình Battlefield 2042 khá nặng.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/5/photo-1-16281361355451053647608.jpg',
"alt": 'LỘ CẤU HÌNH,CHIẾN DỊCH QUẢNG BÁ,BATTLEFIELD 2042,CARD ĐỒ HỌA,CẤU HÌNH TỐI THIỂU,GAME THỦ VIỆT,',
"category": 'games',
"date": '05/08/2021',
"time": '08:48 AM',
"link": '/battlefield-2042-lo-cau-hinh-chinh-thuc-cpu-core-i7-4790-16gb-ram-va-rtx-2060',
"zcomponent": 'page_20210805084806',
"filepath": './20210805084806-battlefield-2042-lo-cau-hinh-chinh-thuc-cpu-core-i7-4790-16gb-ram-va-rtx-2060.js'
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
  "Battlefield 2042 lộ cấu hình chính thức, CPU Core i7 4790, 16GB RAM và RTX 2060";
const author = "TVG";
const source = "Pháp luật và bạn đọc";
const timestamp = "05/08/2021 08:48 AM";
const description = "Cấu hình Battlefield 2042 khá nặng.";
const link =
  "battlefield-2042-lo-cau-hinh-chinh-thuc-cpu-core-i7-4790-16gb-ram-va-rtx-2060";
const tagparam = [
  "LỘ CẤU HÌNH",
  "CHIẾN DỊCH QUẢNG BÁ",
  "BATTLEFIELD 2042",
  "CARD ĐỒ HỌA",
  "CẤU HÌNH TỐI THIỂU",
  "GAME THỦ VIỆT",
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

export default function page_20210805084806() {
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
                      Trong <strong>chiến dịch quảng bá</strong> để chuẩn bị cho
                      ngày ra mắt của bom tấn <strong>Battlefield 2042</strong>{" "}
                      mới đây, nhà phát hành EA đã chính thức cho biết rằng bản
                      thử nghiệp beta đầu tiên của Battlefield 2042 sẽ bắt đầu
                      vào tuần tới, với lời mời qua email hướng dẫn chi tiết
                      cách tham gia thử nghiệm beta sẽ được gửi cho những game
                      thủ được chọn. Ngoài ra, EA còn cho biết thêm về yêu cầu
                      cấu hình sắp tới của bom tấn Battlefield 2042.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/5/photo-1-16281361355451053647608.jpg"
                      alt="1, LỘ CẤU HÌNH,CHIẾN DỊCH QUẢNG BÁ,BATTLEFIELD 2042,CARD ĐỒ HỌA,CẤU HÌNH TỐI THIỂU,GAME THỦ VIỆT,"
                      note=""
                    />
                    <p>
                      Theo đó bản Beta sẽ diễn ra từ ngày 12 đến ngày 16 tháng
                      8, bao gồm có 5 phiên kéo dài 3 giờ với phiên cuối cùng
                      dài 9 giờ để cung cấp cho "vài nghìn người tham gia" vào
                      bản Beta của <strong>Battlefield 2042</strong>. EA nhấn
                      mạnh rằng, đây là phiên bản Close beta tương tự như thử
                      nghiệm beta vào cuối tuần trước cho Halo Infinite khi sẽ
                      không có bất kỳ game thủ nào được livestream chơi bản Beta
                      của Battlefield 2042. Thử nghiệm chỉ dành cho PC,
                      PlayStation 5 và Xbox Series X | S.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/5/photo-1-16281361384891554349194.jpg"
                      alt="2, LỘ CẤU HÌNH,CHIẾN DỊCH QUẢNG BÁ,BATTLEFIELD 2042,CARD ĐỒ HỌA,CẤU HÌNH TỐI THIỂU,GAME THỦ VIỆT,"
                      note=""
                    />
                    <p>
                      Đặc biệt, để phục vụ cho bản Beta lần này thì EA đã chính
                      thức công bố yêu cầu cấu hình sắp tới của bom tấn{" "}
                      <strong>Battlefield 2042</strong>. Theo đó thì game thủ sẽ
                      cần ít nhất CPU Intel Core i5 6600K, 8GB RAM và GPU NVIDIA
                      GeForce GTX 1050 Ti thì mới có thể chơi được Battlefield
                      2042. Ngoài ra, nếu muốn có trải nghiệm tuyệt nhất
                      Battlefield 2042 Max Settings thì game thủ phải cần có CPU
                      Intel Core i7 4790, 8GB RAM và{" "}
                      <strong>card đồ họa</strong> GeForce RTX 2060 / Radeon RX
                      5600 XT trở lên.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Yêu cầu <strong>cấu hình tối thiểu</strong> của
                      Battlefield 2042
                    </p>
                    <p>OS: 64-bit Windows 10</p>
                    <p>CPU: Intel Core i5 6600K</p>
                    <p>Memory: 8GB</p>
                    <p>Graphics card: Nvidia GeForce GTX 1050 Ti</p>
                    <p>Yêu cầu cấu hình đề nghị của Battlefield 2042</p>
                    <p>OS: 64-bit Windows 10</p>
                    <p>Processor: Intel Core i7 4790 or AMD Ryzen 5 3600</p>
                    <p>Memory: 16GB</p>
                    <p>Video Memory: 8GB</p>
                    <p>
                      Graphics card: NVIDIA GeForce RTX 2060 or AMD Radeon RX
                      5600 XT
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/5/photo-2-1628136137506551221772.jpg"
                      alt="3, LỘ CẤU HÌNH,CHIẾN DỊCH QUẢNG BÁ,BATTLEFIELD 2042,CARD ĐỒ HỌA,CẤU HÌNH TỐI THIỂU,GAME THỦ VIỆT,"
                      note=""
                    />
                    <p>
                      Được biết, <strong>Battlefield 2042</strong> là một tựa
                      game multiplayer thuần túy cho phép 128 người chơi đối đầu
                      với nhau trên 7 bản đồ lớn và vào vai 4 class khác nhau.
                      Lần đầu tiên trong lịch sử Battlefield, game thủ sẽ có thể
                      tham gia vào các trận chiến với 128 người chơi trên cùng
                      một bản đồ. Nhà phát triển DICE nói rằng 7 bản đồ là những
                      địa điểm có thật ngoài đời khác nhau, môi trường khác nhau
                      khi game ra mắt, mỗi bản đồ cung cấp trải nghiệm thiên tai
                      luôn thay đổi khi các tòa nhà đổ nát và môi trường xấu đi
                      khi các trận chiến diễn ra. Tựa game sẽ có content mới ra
                      theo mùa và sẽ ra mắt vào ngày 22 tháng 10 trên PS4, PS5,
                      Xbox One, Xbox Series X/S và PC.
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
