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
"timestamp": '07/08/2021 03:44 PM',
"title": 'Những bản mod phá game nhất mà game thủ Skyrim không nên cài đặt',
"description": 'Phần lớn người chơi Skyrim đều thống nhất rằng các bản mod này cực kỳ phá game',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/5/bgsdecember2020modslcard776x470-1628159608167711147384.jpg',
"alt": 'KHÁM PHÁ,GAME,OPEN WORLD GAME,SKYRIM,',
"category": 'games',
"date": '07/08/2021',
"time": '03:44 PM',
"link": '/nhung-ban-mod-pha-game-nhat-ma-game-thu-skyrim-khong-nen-cai-dat',
"zcomponent": 'page_20210807154455',
"filepath": './20210807154455-nhung-ban-mod-pha-game-nhat-ma-game-thu-skyrim-khong-nen-cai-dat.js'
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
  "Những bản mod phá game nhất mà game thủ Skyrim không nên cài đặt";
const author = "Green";
const source = "Trí Thức Trẻ";
const timestamp = "07/08/2021 03:44 PM";
const description =
  "Phần lớn người chơi Skyrim đều thống nhất rằng các bản mod này cực kỳ phá game";
const link = "nhung-ban-mod-pha-game-nhat-ma-game-thu-skyrim-khong-nen-cai-dat";
const tagparam = ["KHÁM PHÁ", "GAME", "OPEN WORLD GAME", "SKYRIM"];
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

export default function page_20210807154455() {
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
                      Các bản mod là một phần giúp cho <strong>Skyrim</strong>{" "}
                      trở nên hấp dẫn hơn. Tuy nhiên, trong nhiều trường hợp
                      những bản mod lại khiến cho người chơi cực kỳ thất vọng.
                      Vì vậy, để giúp các newbie tránh được trải nghiệm tồi tệ
                      với Skyrim, một số <strong>game</strong> thủ đã liệt kê
                      những bản mod tệ hại không nên sử dụng nếu người chơi
                      không muốn rơi vào tình trạng xóa đi chơi lại.
                    </p>
                    <h5>1. Open Cities</h5>
                    <p>
                      Về cơ bản Open Cities là một bản mod giúp tích hợp các
                      thành phố lớn như Whiterun, Solitude, Riosystem, Windhelm
                      và Markarth được tích hợp "liền mạch" thay vì chia ô riêng
                      biệt. Khi sử dụng bản mod này, người chơi có thể đi vào
                      các thành phố lớn mà không cần phải tải màn hình.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/5/bgsdecember2020modslcard776x470-1628159608167711147384.jpg"
                      alt="1, KHÁM PHÁ,GAME,OPEN WORLD GAME,SKYRIM,"
                      note=""
                    />
                    <p>
                      Tuy nhiên, Open Cities gặp vấn đề ở chỗ tối ưu hóa rất
                      kém. Ngay cả trong các thiết lập được sửa đổi nhẹ, người
                      chơi chắc chắn sẽ liên tục gặp sự cố khi cố gắng di chuyển
                      nhanh đến các thành phố hoặc không thì cảnh quan lẫn các
                      yếu tố trở nên cực kỳ lộn xộn. Điển hình là sự cố người
                      chơi gặp phải khi đưa con tàu từ Raven Rock đến Windhelm.
                    </p>
                    <p>
                      Điều đáng buồn là bản mod này không được sửa chữa. Người
                      tạo bản mod cũng tạo nhiều bản mod khác rất được ưa chuộng
                      như Live Another Life, Paarthurnax Dilemma, Cut Room
                      Floor… nhưng chỉ riêng Open Cities, mọi thứ lại tệ theo
                      hướng không có bản vá hay sửa chữa nào.
                    </p>
                    <h5>2. JContainers</h5>
                    <p>
                      Một bản mod bắt buộc, giúp cung cấp thêm các bản mod khác
                      với khả năng lưu trữ dữ liệu. Tuy nhiên, không ít người
                      chơi cho biết, JContainers đã "giết chết" một số bản mod
                      tâm đắc của họ theo đúng nghĩa đen.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/5/elder-scrolls-v-skyrim-scr10-56ab9bc33df78cf772b5529f-16281596378591728820753.jpg"
                      alt="2, KHÁM PHÁ,GAME,OPEN WORLD GAME,SKYRIM,"
                      note=""
                    />
                    <p>
                      Một vài "thảm kịch" mà kha khá người chơi từng gặp phải
                      khi cài JContainers là mất đi mod AH Hotkeys. JContainers
                      khiến AH Hotkeys biến mất không còn dấu vết và điều tồi tệ
                      hơn nữa, đó là người chơi không bao giờ có thể khôi phục
                      được cài đặt 100%. Tương tự, "bi kịch" tiếp tục với mod
                      Ion Cannon – một bản mod giúp tạo ra đòn tấn công có khả
                      năng phá hủy mọi thứ trong phạm vi 10 yard.
                    </p>
                    <RelationNewsInPage category={category} />
                    <h5>3. Revenge of Colette</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/5/1-1547713412280234932274-1628159655502310648480.jpg"
                      alt="3, KHÁM PHÁ,GAME,OPEN WORLD GAME,SKYRIM,"
                      note=""
                    />
                    <p>
                      Bản mod này nhằm giúp trường học trở nên thú vị một chút
                      với vài câu thần chú vô nghĩa, và đồng thời đa dạng hóa
                      các tư thế đứng làm phép. Ý tưởng thì là vậy, nhưng cách
                      mod hoạt động có vẻ hơi lệch mục đích ban đầu khi một đòn
                      phép có thể tiêu diệt luôn rồng. Revenge of Colette được
                      nhiều người chơi đánh giá ngắn gọn: Không đáng để thử.
                    </p>
                    <h5>4. For the Raincloak</h5>
                    <p>
                      Nếu người chơi ủng hộ Stormcloak và muốn thử xem nếu Jarl
                      Balgruuf gia nhập phe Ulfric thì mọi chuyện sẽ ra sao, thì
                      bản mod này chính là thứ họ cần. Tuy nhiên, nó lại vô cùng
                      phá <strong>game</strong> khi làm hỏng hoàn toàn các nhiệm
                      vụ trong cuộc nội chiến.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/5/348674351-1628159686488532385824.jpg"
                      alt="4, KHÁM PHÁ,GAME,OPEN WORLD GAME,SKYRIM,"
                      note=""
                    />
                    <p>
                      Trò chơi bỗng nhiên thay đổi một cách đáng kể khi các pháo
                      đài không bị quân của hoàng gia chiếm đóng và người chơi
                      phải lao vào giải quyết từng tên cướp hết đợt này đến đợt
                      khác. Nhiệm vụ vốn chỉ mất vài giờ kéo dài đến vài ngày.
                      Cuối cùng người chơi không thể tấn công vào Solitude vì
                      Ulfric không xuất hiện trong bài phát biểu trước cuộc tấn
                      công. Tóm lại, trò chơi đột nhiên trở nên xa lạ đến mức
                      không tưởng.
                    </p>
                    <h5>5. Mod ngẫu nhiên hóa item</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/5/skyrim-special-edition-viet-hoa-thumb-1628159715600671070678.jpg"
                      alt="5, KHÁM PHÁ,GAME,OPEN WORLD GAME,SKYRIM,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/5/elder-scrolls-v-skyrim-viet-hoa-2-16281597411991433973180.jpg"
                      alt="6, KHÁM PHÁ,GAME,OPEN WORLD GAME,SKYRIM,"
                      note=""
                    />
                    <p>
                      Hiểu đơn giản gì bản mod này cho phép các item cố định trở
                      thành ngẫu nhiên. Khi cài mod này, một mẩu bánh mì có thể
                      bị thay bằng thanh kiếm. Dù mod khá vui, nhưng nó khiến
                      mọi thứ thay đổi và dẫn đến nhiều sự cố dở khóc dở cười.
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
