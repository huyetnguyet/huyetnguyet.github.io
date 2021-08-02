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
"timestamp": '29/06/2021 10:03 PM',
"title": 'Hiker Games chia sẻ những hình ảnh đầu tiên về Quân đội Việt Nam trong 300475',
"description": '300475 đang phát triển rất tốt.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/29/photo-1-1624943482294517114223.jpg',
"alt": 'HÌNH ẢNH ĐẦU TIÊN,QUÂN ĐỘI VIỆT NAM,NHÀ PHÁT TRIỂN,GAME THUẦN VIỆT,',
"category": 'games',
"date": '29/06/2021',
"time": '10:03 PM',
"link": '/hiker-games-chia-se-nhung-hinh-anh-dau-tien-ve-quan-doi-viet-nam-trong-300475',
"zcomponent": 'page_20210629220356',
"filepath": './20210629220356-hiker-games-chia-se-nhung-hinh-anh-dau-tien-ve-quan-doi-viet-nam-trong-300475.js'
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
  "Hiker Games chia sẻ những hình ảnh đầu tiên về Quân đội Việt Nam trong 300475";
const author = "TVG";
const source = "Pháp luật và bạn đọc";
const timestamp = "29/06/2021 10:03 PM";
const description = "300475 đang phát triển rất tốt.";
const link =
  "hiker-games-chia-se-nhung-hinh-anh-dau-tien-ve-quan-doi-viet-nam-trong-300475";
const tagparam = [
  "HÌNH ẢNH ĐẦU TIÊN",
  "QUÂN ĐỘI VIỆT NAM",
  "NHÀ PHÁT TRIỂN",
  "GAME THUẦN VIỆT",
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

export default function page_20210629220356() {
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
                    Như thông tin chúng tôi đã đưa, vào ngày 6/5 vừa qua,{" "}
                    <strong>nhà phát triển</strong> Hiker Games (cha đẻ của{" "}
                    <strong>game thuần Việt</strong> 7554) đã chính thức thông
                    báo về dự án mới có tên 300475. Đây sẽ là tựa game về đề tài
                    lịch sử, tái hiện lại chiến dịch Hồ Chí Minh huyền thoại.
                    Khác với dự án c, 300475 sẽ được triển khai theo hình thức
                    huy động vốn từ cộng đồng. Game sẽ được chia làm 3 giai đoạn
                    phát triển, kéo dài trong vòng khoảng 30 tháng. Hiker Games
                    đặt kỳ vọng sẽ huy động được khoảng 20 tỷ để thực hiện dự án
                    300475.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/29/photo-1-1624943482294517114223.jpg"
                    alt="1, HÌNH ẢNH ĐẦU TIÊN,QUÂN ĐỘI VIỆT NAM,NHÀ PHÁT TRIỂN,GAME THUẦN VIỆT,"
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
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/29/photo-1-16249434838181721265893.jpg"
                    alt="2, HÌNH ẢNH ĐẦU TIÊN,QUÂN ĐỘI VIỆT NAM,NHÀ PHÁT TRIỂN,GAME THUẦN VIỆT,"
                    note=""
                  />
                  <p>
                    Trong một thông tin mới cập nhật thì{" "}
                    <strong>nhà phát triển</strong> Hiker Games đã chia sẻ những{" "}
                    <strong>hình ảnh đầu tiên</strong> về mô hình của người
                    chiến sĩ giải phóng miền Nam được phát triển dự trên công
                    nghệ đồ họa Unreal Engine 4 tiên tiến nhất hiện nay. Mặc dù
                    vẫn đang trong quá trình phát triển đầu tiên và đây cũng
                    không phải là mô hình cuối cùng, nhưng chúng ta có thể thấy
                    rằng Hiker Games đã chăm chút tỉ mỉ và dày công xây dựng,
                    tìm hiểu về người lính cụ Hồ như thế nào để cho ra mô hình
                    người chiến sĩ giải phóng miền Nam chân thật nhất, , những
                    người đã huy sinh biết bao sương máu để giành lại độc lập
                    nước nhà.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/29/photo-2-16249434853462062129321.jpg"
                    alt="3, HÌNH ẢNH ĐẦU TIÊN,QUÂN ĐỘI VIỆT NAM,NHÀ PHÁT TRIỂN,GAME THUẦN VIỆT,"
                    note=""
                  />
                  <p>
                    Theo đó, mô hình của người chiến sĩ giải phóng miền Nam sẽ
                    là một sự "lột xác" so với người lính Việt Minh trong tựa
                    game 7554 trước đó. Nhờ có công nghệ đồ họa Unreal Engine 4
                    tối tân thì mọi chi tiết từ trang phục như áo quần mũ cho
                    đến khuôn mặt, vóc dáng đều toát lên sự mạnh mẽ, anh dũng
                    như hiền hậu của người chiến sĩ giải phóng miền Nam. Ngoài
                    ra, Hiker Games cũng chia sẻ mô hình lính Mỹ trong 300475
                    được cải thiện rất nhiều so với mô hình lính Pháp trong
                    7554.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/29/photo-3-16249434843431018207555.jpg"
                    alt="4, HÌNH ẢNH ĐẦU TIÊN,QUÂN ĐỘI VIỆT NAM,NHÀ PHÁT TRIỂN,GAME THUẦN VIỆT,"
                    note=""
                  />
                  <p>
                    Đặc biệt <strong>nhà phát triển</strong> Hiker Games cho
                    biết rằng, studio đã gần như cơ bản hoàn thành các phần kỹ
                    thuật cho phần Teaser Video cũng như chuẩn bị công bố cho
                    cộng đồng game thủ Việt cũng như thế giới trong thời gian
                    tới. Studio cũng đã xong phần thô về môi trường, sơ đồ, bố
                    trí , bố cục không gian, tuy nhiên vẫn cần thời gian để
                    Hiker Games có thể hoàn thiện từng hạng mục khi mà khối
                    lượng công việc về đồ họa là rất lớn. Nhưng nhà phát triển
                    Hiker Games hứa hẹn rằng studio đang phát triển rất tích cực
                    Teaser Video và sẽ sớm công bố tới cộng đồng game thủ Việt.
                  </p>
                  <RelationNewsInPage category={category} />
                  <p>
                    Được biết, ra mắt vào ngày 16/12/2011, 7554 là tựa game FPS
                    đầu tiên do bàn tay người Việt Nam (Hiker Games) sản xuất
                    100%. Được phát triển dựa trên sự kiện lịch sử có thật, đó
                    chính là đại thắng Điện Biên Phủ tháng 05 năm 1954, 7554 đưa
                    game thủ vào vai các chiến sĩ Việt Minh cùng các đồng đội
                    của mình chiến đấu chống lại quân đội thực dân Pháp trong
                    chiến dịch Điện Biên Phủ lịch sử. Thời gian thấm thoát thoi
                    đưa, tính đến thời điểm hiện tại thì 7554 đã chính thức ra
                    mắt được hơn 10 năm. Để kỷ niệm 10 năm ra mắt 7554 cũng như
                    67 năm chiến thắng Điện Biên Phủ, mới đây Hiker Games đã
                    công bố dự án game mới lấy đề tài giải phóng miền Nam với
                    tên gọi 300475.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/29/photo-5-16249434838381986249913.jpg"
                    alt="5, HÌNH ẢNH ĐẦU TIÊN,QUÂN ĐỘI VIỆT NAM,NHÀ PHÁT TRIỂN,GAME THUẦN VIỆT,"
                    note=""
                  />
                  <p>
                    Theo Hiker Games chia sẻ, đây sẽ là tựa game tái hiện lại
                    cũng chiến đầy gian khổ cũng như hào hùng của bộ đội nhân
                    dân Việt Nam trong cuộc chiến tranh chống Mỹ cứu nước cũng
                    như giải phóng miền Nam thống nhất đất nước. Hiker Games
                    đang kêu gọi vốn từ cộng đồng game thủ Việt, những người yêu
                    quý làng game nước nhà cũng như yêu thích lịch sử Việt Nam
                    nói chúng và 7554 nói riêng (cụ thể khoảng 20 tỷ VNĐ). Để
                    studio có thể phát triển và hoàn thành tựa game 300475 trước
                    ngày 30 tháng 04 năm 2025, tức là trước dịp lễ kỷ niệm 50
                    năm Thống nhất đất nước.
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
