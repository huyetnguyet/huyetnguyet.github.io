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
"timestamp": '29/07/2021 04:20 PM',
"title": 'Cổ điển nhưng không lỗi thời, Timing Hero vẫn thu hút hàng triệu game thủ thử sức trên toàn thế giới',
"description": 'Gạt đi định kiến về những tựa game trắng đen lỗi thời, Timing Hero sẽ là lựa chọn hoàn hảo cho những pha hành động mãn nhãn trong thời điểm hiện tại.',
"src": 'https://lh6.googleusercontent.com/YWHfqxRBujPr2kf9S6VFggV1_2Ds-TaO89iDF31b1oCAWavC7yuiQGfWQjx0RS8dlqDOXcfuYWVITLD8KKmX8F9iezCS0NOB4YtP0aMCNAOapuOKeNVuEPD6rXTAWZzgjrY_91v3',
"alt": 'TIMIING HERO,TIN TỨC GAME,',
"category": 'games',
"date": '29/07/2021',
"time": '04:20 PM',
"link": '/co-dien-nhung-khong-loi-thoi-timing-hero-van-thu-hut-hang-trieu-game-thu-thu-suc-tren-toan-the-gioi',
"zcomponent": 'page_20210729162000',
"filepath": './20210729162000-co-dien-nhung-khong-loi-thoi-timing-hero-van-thu-hut-hang-trieu-game-thu-thu-suc-tren-toan-the-gioi.js'
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
  "Cổ điển nhưng không lỗi thời, Timing Hero vẫn thu hút hàng triệu game thủ thử sức trên toàn thế giới";
const author = "Thế Anh";
const source = "Trí Thức Trẻ";
const timestamp = "29/07/2021 04:20 PM";
const description =
  "Gạt đi định kiến về những tựa game trắng đen lỗi thời, Timing Hero sẽ là lựa chọn hoàn hảo cho những pha hành động mãn nhãn trong thời điểm hiện tại.";
const link =
  "co-dien-nhung-khong-loi-thoi-timing-hero-van-thu-hut-hang-trieu-game-thu-thu-suc-tren-toan-the-gioi";
const tagparam = ["TIMIING HERO", "TIN TỨC GAME"];
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

export default function page_20210729162000() {
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
                      Timing Hero là một trò chơi hành động RPG Retro miễn phí
                      trên nền tảng di động. Đây là một tựa game cực kỳ vui
                      nhộn, thú vị và dễ chơi khi chỉ yêu cầu game thủ thực hiện
                      các thao tác đơn giản gồm di chuyển, tấn công và kỹ năng.
                      Tất cả những gì bạn cần làm chỉ là khéo léo căn thời gian
                      thật chuẩn xác để phản ứng kịp thời các hành động trong
                      các trận đấu nảy lửa.
                    </p>
                    <ContentImage
                      src="https://lh4.googleusercontent.com/oZB7Vqf7x6XfQr_dEhdLlwgWqrYh9N7MaH1Z-VCx5PCkvqGjaSQB7GSBmRNDE0boP6-Dczyi5F1tONuPvn08V5s4ALmk_QHoGQKCpqc8iTwOwZEPY-TyaaWyZZmk1P79NIFcImPV"
                      alt="1, TIMIING HERO,TIN TỨC GAME,"
                      note="Timing Hero nổi bật với hệ thống đồ họa cổ điển đơn sắc."
                    />
                    <p>
                      Phỏng theo cốt truyện tại một vùng đất xa xôi, nơi tồn tại
                      một vị vua với sức mạnh thần bí đã bảo vệ vương quốc với
                      12 sứ đồ. Khi nhà vua qua đời, họ cũng đột ngột biến mất
                      khiến cả quốc gia rơi vào sự hỗn loạn khi bị xâm chiếm bởi
                      chủng loài quái vật hung ác. Nhập vai vào 1 trong 12 anh
                      hùng năm xưa, bạn sẽ bắt đầu trải nghiệm cuộc chiến bất
                      tận chống lại lũ quái vật và kết thúc chiến tranh dưới
                      danh nghĩa của một người hùng đích thực.
                    </p>
                    <ContentImage
                      src="https://lh5.googleusercontent.com/IvgbvghcJItLXkoEsqCywmE4xZqIe0zmzYHksOllOW5GTCyK8KPhj48PawXe1ObVfrCZ_20SacMUzvI6C3hBZxblLzqnwnC-sAD0OsaEtKYRxjtS9blyALDQcrpQY2mAZUfo5YAe"
                      alt="2, TIMIING HERO,TIN TỨC GAME,"
                      note="Rất nhiều anh hùng mạnh mẽ cùng hệ thống quái vật phức tạp để người chơi thử sức."
                    />
                    <p>
                      Giống như tên gọi, điều quan trọng nhất mà bạn cần biết
                      khi thử sức với Timing Hero chính là việc căn thời gian
                      chuẩn để thực hiện các thao tác. Hiểu theo một cách đơn
                      giản, hệ điều khiển của bạn trong chiến đấu sẽ có 3 phím
                      di chuyển lên, xuống và giật lùi để né các chiêu thức tấn
                      công của kẻ địch. Sau đó, bạn mới có thể sử dụng thời khắc
                      sơ hở để tấn công và tung ra những chiêu thức riêng biệt
                      để kết liễu đối thủ.
                    </p>
                    <ContentImage
                      src="https://lh5.googleusercontent.com/4aiVuMA9fntHp1lxOAeKXt8TKEGvIcgckYPwtBqvBdfY2Se-l806ZxTPdoOwxupJjw59sRP4Wxo8rMnQUGEZH9VrMyjDjOMuv7eCZuN4syUC6Y2-lTea-oFKuxg3gABSzQEpkfhZ"
                      alt="3, TIMIING HERO,TIN TỨC GAME,"
                      note="Dù lối chơi vô cùng đơn giản nhưng độ khó lại hoàn toàn trái ngược sau mỗi vòng đấu"
                    />
                    <p>
                      Tại Timing Hero, có tới hơn 16 Boss quái vật khác nhau
                      cùng hàng trăm chủng loại tay sai thử thách người chơi tìm
                      hiểu và đánh bại. Đối với những newbie lần đầu trải
                      nghiệm, có thể khẳng định cảm giác vượt ải đến Boss là một
                      hành trình gian nan tưởng chừng như vô tận. Tuy nhiên,
                      trong quá trình chiến đấu, bạn sẽ dần dần được tích lũy
                      những điểm kinh nghiệm để nâng cấp các chỉ số cơ bản của
                      anh hùng cao hơn. Nhờ đó, bạn có thể tiến hóa và mở khóa
                      những kỹ năng mới mang nhiều giá trị như tấn công, cầm
                      chân, hồi phục, hồi sinh....
                    </p>
                    <ContentImage
                      src="https://lh3.googleusercontent.com/RJQeBmYeFvGpxTAiZmZOrdtDEugCQWceuvNfy-8fhdOCwfUFskm5DH6MsBhzsxVIeENmpsG_IstonW7G-WpbR2qU_EDYwYlnl4T-X6KoXVuTYuaQGMURUqn7rcqItsGrf2CECV5-"
                      alt="4, TIMIING HERO,TIN TỨC GAME,"
                      note="Bạn sẽ phải vượt qua hàng trăm quái vật khác nhau với sức mạnh đáng gờm."
                    />
                    <RelationNewsInPage category={category} />

                    <ContentImage
                      src="https://lh6.googleusercontent.com/k-nyrChPR7qai0WvbHCiaCwyO8XBdKJ1FAETnHJeJHKnYLPdV9cajnVL-SffskwPrkh2cJTfBigP5nC0dKzcrJfyPQQFv2EwNuC4dISEN4vL7ScdkyFzSSquiZixZprbJuCOfz5e"
                      alt="5, TIMIING HERO,TIN TỨC GAME,"
                      note="Các trận chiến với Boss sẽ vô cùng kịch tính, chỉ cần sơ sẩy một nhịp cũng đủ để khiến bạn phải bắt đầu lại từ điểm xuất phát."
                    />
                    <p>
                      Ngoài ra, bạn cũng sẽ được giới thiệu hệ thống cổ vật
                      (Items) để buff các hiệu ứng kỹ năng và sức mạnh cho anh
                      hùng. Các cổ vật này có thể thu nhập được khi tiêu diệt
                      Boss, tham gia sự kiện, nhiệm vụ hoặc mua trực tiếp bằng
                      tiền mặt. Tuy nhiên, cần lưu ý về những thuộc tính của các
                      anh hùng mà bạn đang sở hữu để tránh tình trạng khắc chế
                      hiệu ứng kỹ năng của các cổ vật khác nhau. Sử dụng chúng
                      như thế nào để tạo ra sức mạnh tối ưu nhất? Điều đó hoàn
                      toàn phụ thuộc vào khả năng khéo léo và tư duy nhanh nhẹn
                      của bạn.
                    </p>
                    <p>
                      Hệ thống cổ vật cũng được thiết kế mang tính biểu tượng và
                      sở hữu những khả năng mạnh mẽ.
                    </p>
                    <ContentImage
                      src="https://lh4.googleusercontent.com/Mfcl4JksYun9mILeod7gJg3d4JaqotA4uCwfhXlpk5_NNnSumA8ArNEhSkF7Rrw8aEmjiIak3Mw3rrsHM7L7e-769IrqawPYrTwMKD2p2SFQpKidj_FG1AMUkvKJ3ZFbkYCVXudO"
                      alt="6, TIMIING HERO,TIN TỨC GAME,"
                      note="Bạn có thể tìm hiểu rõ hơn sau khi thu nhập trực tiếp hoặc trả giá cho vật phẩm này."
                    />
                    <p>
                      Hiện tại, tựa game đang có 2 chế độ chơi vô cùng thú vị là
                      COLOSSEUM (Chiến thắng 12 trận trong khi luân phiên chuyển
                      đổi giữa 3 thành viên trong nhóm) và RAID (Chiến chống lại
                      quái vật trùm huyền thoại với 3 kỹ năng mạnh mẽ khác
                      nhau). Hãy cùng thử sức với những âm thanh thú vị của dòng
                      game 8bit cổ điển và đưa ra những đánh giá khách quan của
                      riêng mình về trò chơi này nhé!
                    </p>
                    <ContentImage
                      src="https://lh6.googleusercontent.com/YWHfqxRBujPr2kf9S6VFggV1_2Ds-TaO89iDF31b1oCAWavC7yuiQGfWQjx0RS8dlqDOXcfuYWVITLD8KKmX8F9iezCS0NOB4YtP0aMCNAOapuOKeNVuEPD6rXTAWZzgjrY_91v3"
                      alt="7, TIMIING HERO,TIN TỨC GAME,"
                      note=""
                    />
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
