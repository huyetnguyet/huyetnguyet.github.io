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
"timestamp": '29/07/2021 04:08 PM',
"title": 'Những tựa game open-world bị ghẻ lạnh một cách oan uổng',
"description": 'Vì những lý do mà không ai hiểu nổi, các tựa game open-world này đã chìm vào quên lãng, dù chính người chơi của chúng đều khẳng định chất lượng tuyệt vời.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/6/30/-1625042149365447372853.jpg',
"alt": 'KHÁM PHÁ,OPEN-WORLD GAME,GIẢI TRÍ,TRÒ CHƠI ĐIỆN TỬ,THẾ GIỚI MỞ,',
"category": 'games',
"date": '29/07/2021',
"time": '04:08 PM',
"link": '/nhung-tua-game-open-world-bi-ghe-lanh-mot-cach-oan-uong',
"zcomponent": 'page_20210729160835',
"filepath": './20210729160835-nhung-tua-game-open-world-bi-ghe-lanh-mot-cach-oan-uong.js'
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
const title = "Những tựa game open-world bị ghẻ lạnh một cách oan uổng";
const author = "Green";
const source = "Trí Thức Trẻ";
const timestamp = "29/07/2021 04:08 PM";
const description =
  "Vì những lý do mà không ai hiểu nổi, các tựa game open-world này đã chìm vào quên lãng, dù chính người chơi của chúng đều khẳng định chất lượng tuyệt vời.";
const link = "nhung-tua-game-open-world-bi-ghe-lanh-mot-cach-oan-uong";
const tagparam = [
  "KHÁM PHÁ",
  "OPEN-WORLD GAME",
  "GIẢI TRÍ",
  "TRÒ CHƠI ĐIỆN TỬ",
  "THẾ GIỚI MỞ",
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

export default function page_20210729160835() {
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
                      Không phải lúc nào thị trường cũng đánh giá đúng giá trị
                      của một tựa game open-world. Đôi khi, chúng chỉ có chất
                      lượng trung bình, nhưng hiệu ứng truyền thống đã đẩy chúng
                      lên thành hàng siêu phẩm và ngược lại. Những tựa game dưới
                      đấy được nhiều game thủ đánh giá là có chất lượng tuyệt
                      vời, nhưng đáng tiếc lại bị ghẻ lạnh, chúng thực sự là
                      những hidden game trong dòng game open-world.
                    </p>
                    <h5>1. Dying Light</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/30/-1625042149365447372853.jpg"
                      alt="1, KHÁM PHÁ,OPEN-WORLD GAME,GIẢI TRÍ,TRÒ CHƠI ĐIỆN TỬ,THẾ GIỚI MỞ,"
                      note=""
                    />
                    <p>
                      Trong mắt nhiều người Dying Light là một tựa game thất
                      bại. Thế nhưng đối với những ai đủ kiên nhẫn dành thời
                      gian cho nó, chắc chắn họ sẽ phải công nhận rằng tựa game
                      này hoàn toàn có khả năng đánh bại những siêu phẩm như
                      Skyrim, Far Cry 3, AC: Brotherhood hay Fallout: New Vegas.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/30/-16250421656181354504600.jpg"
                      alt="2, KHÁM PHÁ,OPEN-WORLD GAME,GIẢI TRÍ,TRÒ CHƠI ĐIỆN TỬ,THẾ GIỚI MỞ,"
                      note=""
                    />
                    <p>
                      Điểm yếu chí mạng của Dying Light là cốt truyện và thiết
                      lập các nhiệm vụ quá nhàm chán, tệ hại. Và nếu đã chuẩn bị
                      sẵn tinh thần đón nhận điều này thì người chơi sẽ có thể{" "}
                      <strong>khám phá</strong> được cơ chế vận hành lẫn thế
                      giới tuyệt vời trong game.
                    </p>
                    <p>
                      Đồ họa của Dying Light rất tốt, ở mỗi khung cảnh hình ảnh
                      đều được đầu tư, chăm chút tỉ mỉ. Thế giới trong game sống
                      động hệt như đời thật và người chơi như có cảm hứng tìm
                      hiểu từng ngóc ngách của nó. Bên cạnh đó, Dying Light còn
                      cải tiến kỹ năng parkour cho người chơi khi kết hợp
                      parkour cơ bản của Mirror’s Edge với các góc nhìn đa dạng
                      hơn thay vì chỉ là góc nhìn của người chơi. Kết quả là sự
                      kết hợp này tạo ra một chuỗi kỹ năng cực kỳ mượt mà, chân
                      thực cuốn hút người chơi khi họ được thử cảm giác parkour
                      chạy trốn cả đội quân zombie.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/30/-162504217923496073163.jpg"
                      alt="3, KHÁM PHÁ,OPEN-WORLD GAME,GIẢI TRÍ,TRÒ CHƠI ĐIỆN TỬ,THẾ GIỚI MỞ,"
                      note=""
                    />
                    <p>
                      Các màn combat cận chiến của Dying Light cũng được game
                      thủ đánh giá cao. Cơ chế chiến đấu tinh chỉnh và bổ sung
                      thêm các kỹ năng, kho vũ khí đa dạng, giúp trải nghiệm
                      trận đấu trở nên thú vị nhưng không quá dễ dàng. Đặc biệt,
                      game giữ nguyên những cảnh xé xác, tấn công đẫm máu hệt
                      như trong phim kinh dị.
                    </p>
                    <h5>2. No Man’s Sky</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/30/19f982f28d736c878b323b2d78f7bd7d07d70c831a2f8b3244fcb1de41d75ae3productcardv2mobileslider639yeku-16250422205931755186161.jpg"
                      alt="4, KHÁM PHÁ,OPEN-WORLD GAME,GIẢI TRÍ,TRÒ CHƠI ĐIỆN TỬ,THẾ GIỚI MỞ,"
                      note=""
                    />
                    <p>
                      Tựa game No Man’s Sky vốn không được đánh giá cao, nhưng
                      nó thực sự là một lựa chọn không tồi nếu chơi cùng nhóm
                      bạn.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/30/4-15325781195291223447326-1625042241424104984354.jpg"
                      alt="5, KHÁM PHÁ,OPEN-WORLD GAME,GIẢI TRÍ,TRÒ CHƠI ĐIỆN TỬ,THẾ GIỚI MỞ,"
                      note=""
                    />
                    <p>
                      Giống như Fallout 76, người chơi sẽ cùng xuất hiện trên
                      một map, nhưng họ không bao giờ gặp nhau vì vũ trụ luôn mở
                      rộng. Game có cơ chế chiến đấu hơi kỳ quặc, nhưng các trận
                      chiến với tàu cướp không gian theo góc nhìn thứ nhất cực
                      kỳ thú vị. Người chơi sẽ được trải nghiệm cảm giác sử dụng
                      bộ phản lực để bay lượn quanh hành tinh với một khẩu súng
                      plasma trên tay.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Bên cạnh đó, game còn cho phép người chơi thiết lập các
                      tiền đồn ở nhiều hành tinh khác nhau, thực hiện thêm các
                      nhiệm vụ truy tìm mẫu vật, quản lý cuộc sống trên tiền
                      đồn… khiến trò chơi càng trở nên hấp dẫn hơn.
                    </p>
                    <h5>3. Mad Max</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/30/mad-max-danh-gia-game-1625042267302981197228.jpg"
                      alt="6, KHÁM PHÁ,OPEN-WORLD GAME,GIẢI TRÍ,TRÒ CHƠI ĐIỆN TỬ,THẾ GIỚI MỞ,"
                      note=""
                    />
                    <p>
                      Mặc dù trò chơi này không liên quan nhiều đến Mad Max:
                      Fury Road, Mad Max vẫn là một tựa game hấp dẫn.
                    </p>
                    <p>
                      Game cho người chơi nhập vào Max với nhiệm vụ chế tạo ra
                      chiếc xe nhanh nhất trong thế giới thiếu thốn của hậu tận
                      thế. Anh ta vô tình giúp đỡ cho những người sống sót trên
                      vùng đất hoang mạc cũng như kết bạn với những người bạn
                      lập dị trên cả quãng đường đi.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/30/madmaxgame2-16250423283541526495023.jpg"
                      alt="7, KHÁM PHÁ,OPEN-WORLD GAME,GIẢI TRÍ,TRÒ CHƠI ĐIỆN TỬ,THẾ GIỚI MỞ,"
                      note=""
                    />
                    <p>
                      Hệ thống chiến đấu của Mad Max được đánh giá có thể sáng
                      ngang tầm với Batman Arkham. Các tùy chỉnh phương tiện và
                      chiến đấu tạo ra một nền tảng tuyệt vời để trò chơi xây
                      dựng thế giới thỏa thích.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/30/b4b75f607712e4db10a89818a44b4f27-16250423710431599494915.jpg"
                      alt="8, KHÁM PHÁ,OPEN-WORLD GAME,GIẢI TRÍ,TRÒ CHƠI ĐIỆN TỬ,THẾ GIỚI MỞ,"
                      note=""
                    />
                    <p>
                      Vận xui của Mad Max có lẽ là việc nó ra cùng ngày với
                      Metal Gear Solid 5: The Phantom Pain, điều này khiến cho
                      nó mất đi hiệu quả truyền thông khi mà ngay sau đó còn
                      phải cạnh tranh với Assassin’s Creed: Syndicate và Fallout
                      4.
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
