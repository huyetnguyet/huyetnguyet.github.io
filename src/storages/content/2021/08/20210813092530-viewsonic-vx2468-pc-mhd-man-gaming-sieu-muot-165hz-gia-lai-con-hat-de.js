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
"timestamp": '13/08/2021 09:25 AM',
"title": 'ViewSonic VX2468-PC-MHD: Màn gaming siêu mượt 165Hz, giá lại còn "hạt dẻ"',
"description": 'Mẫu màn hình gaming mới toanh tới từ ViewSonic, với một thiết kế sáng tạo và độc đáo, đi kèm với hiệu năng ấn tượng. Sản phẩm này được kỳ vọng làm mọi game thủ hài lòng với mức giá vô cùng hợp lý.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/12/nested-sequence-0900030624still003-1628771661082495164199.jpg',
"alt": 'MÀN HÌNH VIEWSONIC,MÀN HÌNH GAMING,VX2468-PC-MHD,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,',
"category": 'tech',
"date": '13/08/2021',
"time": '09:25 AM',
"link": '/viewsonic-vx2468-pc-mhd-man-gaming-sieu-muot-165hz-gia-lai-con-hat-de',
"zcomponent": 'page_20210813092530',
"filepath": './20210813092530-viewsonic-vx2468-pc-mhd-man-gaming-sieu-muot-165hz-gia-lai-con-hat-de.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "tech";
const categoryLink = "/tech";
const title =
  'ViewSonic VX2468-PC-MHD: Màn gaming siêu mượt 165Hz, giá lại còn "hạt dẻ"';
const author = "Đồ Chơi Game Thủ";
const source = "Pháp luật và bạn đọc";
const timestamp = "13/08/2021 09:25 AM";
const description =
  "Mẫu màn hình gaming mới toanh tới từ ViewSonic, với một thiết kế sáng tạo và độc đáo, đi kèm với hiệu năng ấn tượng. Sản phẩm này được kỳ vọng làm mọi game thủ hài lòng với mức giá vô cùng hợp lý.";
const link =
  "viewsonic-vx2468-pc-mhd-man-gaming-sieu-muot-165hz-gia-lai-con-hat-de";
const tagparam = [
  "MÀN HÌNH VIEWSONIC",
  "MÀN HÌNH GAMING",
  "VX2468-PC-MHD",
  "CỘNG ĐỒNG MẠNG",
  "TIN TỨC GAME",
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

export default function page_20210813092530() {
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
                      ViewSonic là một thương hiệu quá quen thuộc với những mẫu
                      màn hình hiệu năng cao mà giá cả phải chăng cho anh em
                      game thủ rồi. Hiện nay có vẻ như tần số quét 144Hz vẫn
                      chưa khiến nhiều anh em thỏa mãn, vì vậy ViewSonic đã mang
                      về Việt Nam mẫu màn hình <strong>VX2468-PC-MHD</strong>{" "}
                      với tần số quét lên tới 165Hz cùng AMD FreeSync Premium hỗ
                      trợ chơi game cực mượt.
                    </p>
                    <p>
                      Với mức giá chỉ khoảng hơn 5 triệu Đồng, đây là mẫu{" "}
                      <strong>màn hình gaming</strong> mà sẽ khiến rất nhiều
                      game thủ xao xuyến. Và với cấu hình và thiết kế ấn tượng
                      nó gần như nằm trong top những màn hình vô địch trong phân
                      khúc.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/12/sequence-0300032718still012-1628771661114356140425.png"
                      alt="1, MÀN HÌNH VIEWSONIC,MÀN HÌNH GAMING,VX2468-PC-MHD,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,"
                      note="Màn hình 24 inch vẫn được coi là chuẩn mực để chơi game"
                    />
                    <p>Màn hình cong ViewSonic VX2468-PC-MHD</p>
                    <p>
                      Rất nhiều người quan niệm rằng màn hình kích cỡ càng lớn
                      thì chơi game mới tốt. Nhưng trên thực tế, có rất nhiều
                      tựa game và thể loại thì màn hình 24 inch lại hiệu quả
                      nhất vì người chơi có thể nhìn bao quát được toàn bộ các
                      hình ảnh hiển thị trên màn hình. Với một kích cỡ màn hình
                      như vậy, thì độ phân giải Full HD là hoàn toàn hợp lý,
                      hình ảnh thể hiện rất sắc nét và không hề có hiện tượng bị
                      rỗ.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/12/nested-sequence-0900030624still003-1628771661082495164199.jpg"
                      alt="2, MÀN HÌNH VIEWSONIC,MÀN HÌNH GAMING,VX2468-PC-MHD,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,"
                      note=""
                    />

                    <p>
                      Về mặt thiết kế, có thể nói ViewSonic đã mang đến cho
                      chúng ta một sản phẩm "vừa lạ lại vừa quen", khi mang
                      trong mình thiết kế đơn giản của các dòng màn hình tầm
                      trung, tuy nhiên vẫn được cách điệu một chút ở phần chân
                      đế, làm nó trở nên nổi bật hơn. Phần chân đế được làm dạng
                      cong, để phù hợp hơn với độ cong 1500R của tấm nền màn
                      hình. Nếu như bạn muốn sử dụng các thanh hay giá đỡ chuẩn
                      VESA thì đừng lo vì chiếc màn hình này cũng hỗ trợ đầy đủ.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/12/sequence-0300033305still010-16287716610951661152344.png"
                      alt="3, MÀN HÌNH VIEWSONIC,MÀN HÌNH GAMING,VX2468-PC-MHD,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,"
                      note=""
                    />
                    <p>
                      Sản phẩm này cũng được trang bị phần điều khiển dạng cần
                      joystick để giúp các bạn dễ điều hướng hơn trong quá trình
                      thiết lập màn hình. Một điểm cải tiến rất đáng chú ý của
                      ViewSonic trên thiết kế của hãng.
                    </p>
                    <p>
                      Bây giờ hãy cùng đến với phần trải nghiệm sử dụng. Như đã
                      nói ở trên, <strong>VX2468-PC-MHD</strong> sở hữu tất cả
                      những yếu tố bạn cần trên một chiến màn hình chơi game
                      đích thực. Tần số quét 165Hz, AMD FreeSync Premium, thời
                      gian phản hồi 1ms (MPRT)… Đây chính là những yếu tố để bạn
                      có thể trải nghiệm các tựa game một cách đã đời nhất, đặc
                      biệt là những tựa game FPS. Hiện tượng xé hình hay bóng mờ
                      xảy ra rất ít và nếu như bạn không "săm soi" thì sẽ không
                      thể nhận ra.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Không chỉ quan tâm tới game thủ PC, ViewSonic cũng rất ưu
                      ái các game thủ chơi trên các hệ máy console. Chiếc màn
                      hình này sẽ hỗ trợ tần số quét lên tới 120Hz cho các tựa
                      game trên Xbox và PlayStation thế hệ mới. Nên nếu như bạn
                      có nhu cầu chơi game đa hệ máy từ PC đến console, thì đây
                      là một giải pháp cực kỳ hợp lý với túi tiền của bạn.
                    </p>
                    <p>
                      Những công nghệ như: Giảm ánh sáng xanh và khử nhấp nháy
                      (bảo vệ mắt), cài đặt màu sắc ViewMode… đã quá quen thuộc
                      trên những chiếc <strong>màn hình gaming</strong> của
                      ViewSonic. Nó giống như những gia vị cần phải có cho một
                      trải nghiệm chơi game hoàn hảo.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/12/sequence-0300033703still007-1628771661074489264547.png"
                      alt="4, MÀN HÌNH VIEWSONIC,MÀN HÌNH GAMING,VX2468-PC-MHD,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,"
                      note=""
                    />
                    <p>
                      Điểm trừ nho nhỏ của sản phẩm này có thể là ở phần cổng
                      kết nối, chúng ta sẽ chỉ có 2 cổng HDMI và 1 cổng DP - khá
                      hạn chế về mặt kết nối nhưng có lẽ với tầm giá này thì khó
                      có thể đòi hỏi hơn được.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/12/nested-sequence-0900041402still004-16287716610861638623569.jpg"
                      alt="5, MÀN HÌNH VIEWSONIC,MÀN HÌNH GAMING,VX2468-PC-MHD,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,"
                      note=""
                    />
                    <p>
                      Tổng kết lại, <strong>VX2468-PC-MHD</strong> vẫn là một
                      chiếc <strong>màn hình gaming</strong> mang đậm triết lí
                      của ViewSonic, đó chính là "đơn giản và hiệu quả". Không
                      cần một ngoại hình quá hầm hố và phức tạp, chiếc màn hình
                      này sẽ chinh phục bạn và ví tiền của bạn bằng hiệu năng và
                      trải nghiệm ấn tượng mà nó mang lại, với một mức giá vô
                      cùng hợp lý.
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
