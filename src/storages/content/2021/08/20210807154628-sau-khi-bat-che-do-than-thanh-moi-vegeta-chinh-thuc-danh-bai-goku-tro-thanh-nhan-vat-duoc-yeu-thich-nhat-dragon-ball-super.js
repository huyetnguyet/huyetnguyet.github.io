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
"timestamp": '07/08/2021 03:46 PM',
"title": 'Sau khi bật chế độ thần thánh mới, Vegeta chính thức đánh bại Goku trở thành nhân vật được yêu thích nhất Dragon Ball Super',
"description": 'Trong chapter 74 của Dragon Ball Super chúng ta đã được chứng kiến màn tỏa sáng của Vegeta trước trận đấu với Granolah. Sau khi thấy được sự biến đổi thần thánh mới, một cuộc thăm dò của Viz Media xác nhận rằng Vegeta là nhân vật được yêu thích nhất trong Dragon Ball Super.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/7/nh-1-16283235562581341148953.jpg',
"alt": 'DRAGON BALL SUPER,VEGETA,GOKU,THẦN HỦY DIỆT,BẢN NĂNG VÔ CỰC,GOD KI,',
"category": 'games',
"date": '07/08/2021',
"time": '03:46 PM',
"link": '/sau-khi-bat-che-do-than-thanh-moi-vegeta-chinh-thuc-danh-bai-goku-tro-thanh-nhan-vat-duoc-yeu-thich-nhat-dragon-ball-super',
"zcomponent": 'page_20210807154628',
"filepath": './20210807154628-sau-khi-bat-che-do-than-thanh-moi-vegeta-chinh-thuc-danh-bai-goku-tro-thanh-nhan-vat-duoc-yeu-thich-nhat-dragon-ball-super.js'
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
  "Sau khi bật chế độ thần thánh mới, Vegeta chính thức đánh bại Goku trở thành nhân vật được yêu thích nhất Dragon Ball Super";
const author = "SuSu";
const source = "Trí Thức Trẻ";
const timestamp = "07/08/2021 03:46 PM";
const description =
  "Trong chapter 74 của Dragon Ball Super chúng ta đã được chứng kiến màn tỏa sáng của Vegeta trước trận đấu với Granolah. Sau khi thấy được sự biến đổi thần thánh mới, một cuộc thăm dò của Viz Media xác nhận rằng Vegeta là nhân vật được yêu thích nhất trong Dragon Ball Super.";
const link =
  "sau-khi-bat-che-do-than-thanh-moi-vegeta-chinh-thuc-danh-bai-goku-tro-thanh-nhan-vat-duoc-yeu-thich-nhat-dragon-ball-super";
const tagparam = [
  "DRAGON BALL SUPER",
  "VEGETA",
  "GOKU",
  "THẦN HỦY DIỆT",
  "BẢN NĂNG VÔ CỰC",
  "GOD KI",
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

export default function page_20210807154628() {
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
                      Trong <strong>Dragon Ball Super</strong> chắc hẳn chúng ta
                      không còn xa lạ gì với những cuộc tranh luận của người hâm
                      mộ về <strong>Goku</strong> với <strong>Vegeta</strong> và
                      luôn nhận được nhiều ý kiến trái chiều. Cho đến nay, cuộc
                      tranh luận mới nhất đến từ Viz Media cho thấy Vegeta đã
                      vượt qua Goku để trở thành nhân vật nổi tiếng nhất của bộ
                      truyện. Lý do chính bởi vì sau sự biến đổi thần thánh mới
                      của Vegteta trong trận chiến chống lại Granolah, chàng
                      hoàng tử Saiyan đã nhận được sự yêu thích đến từ rất nhiều
                      fan hâm mộ.
                    </p>
                    <p>
                      Như chúng ta đã thấy trong chapter 74 của{" "}
                      <strong>Dragon Ball Super</strong>,{" "}
                      <strong>Vegeta</strong> đã có màn tỏa sáng trước trận đấu
                      với Granolah. Cho dù ban đầu có phần lép vế, nhưng sau đó
                      Vegeta đã vận khí và hóa thành một dạng mới trông ngầu lòi
                      và có vẻ mạnh mẽ hơn. Theo lời Vegeta, có vẻ dạng biến hóa
                      mới này là sự kết hợp giữa sức mạnh hủy diệt và khả năng
                      của người Saiyan. Đến Granola cũng phải hoảng sợ khi nhìn
                      thấy nên ta có thể chắc chắn dạng biến hóa này có thể mạnh
                      hơn cả Ultra Instinct của <strong>Goku</strong>.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/7/nh-1-16283235562581341148953.jpg"
                      alt="1, DRAGON BALL SUPER,VEGETA,GOKU,THẦN HỦY DIỆT,BẢN NĂNG VÔ CỰC,GOD KI,"
                      note=""
                    />
                    <p>
                      Chứng kiến cảnh tượng này nhiều fan đã đưa ra giả thuyết
                      rằng hình dạng mới của <strong>Vegeta</strong> là kết quả
                      của việc anh sử dụng sức mạnh của{" "}
                      <strong>Thần Hủy Diệt</strong>. Điều này không quá khó
                      hiểu khi trước đó Vegeta đã được đào tạo bởi Beerus, nghĩa
                      là sức mạnh của anh sẽ phát triển gần hơn với vị Thần này.
                      Ngoài ra, trước khi Vegeta rời khỏi nơi ở của Beerus, Thấn
                      Hủy Diệt cũng đã đưa cho anh đôi bông tai của mình để
                      chứng tỏ anh có thể sử dụng sức mạnh hủy diệt. Điều này sẽ
                      giải thích tại sao <strong>Goku</strong> cảm thấy hào
                      quang của Vegeta giống <strong>God Ki</strong> nhưng khác
                      với bình thường. Vegeta có thể đã đạt được God Ki giống
                      với Thần Hủy Diệt.
                    </p>
                    <p>
                      Có thể thấy từ một nhân vật phản diện trong Dragon Ball Z,{" "}
                      <strong>Vegeta</strong> đang dần có sự phát triển thành
                      một anh hùng trong Super. Từ một nhân vật xấu xa và bạo
                      lực, Vegeta đã trở thành một người tốt được nhiều người
                      yêu quý bởi tính cách đặc biệt của mình. Anh đã trở thành
                      một người đàn ông của gia đình luôn chiến đấu vì con trai,
                      từ chối lợi ích mà ở cạnh vợ khi đang mang thai, giữ lời
                      hứa và biết sửa chữa những sai trái trong quá khứ của
                      mình. Mặt khác thì <strong>Goku</strong> vẫn đứng im một
                      chỗ, mãi chỉ quan tâm đến trận chiến để nâng cao sức mạnh,
                      liên tục đặt vũ trụ vào nguy hiểm và đặc biệt vẫn bỏ bê
                      gia đình của mình.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/7/anh-2-16283235561731978196213.jpg"
                      alt="2, DRAGON BALL SUPER,VEGETA,GOKU,THẦN HỦY DIỆT,BẢN NĂNG VÔ CỰC,GOD KI,"
                      note=""
                    />
                    <p>
                      Không những thế một trong những điều tuyệt vời nhất mà
                      series <strong>Dragon Ball Super</strong> đã làm cho nhân
                      vật <strong>Vegeta</strong> là nâng tầm sức mạnh của anh
                      ngang hàng với <strong>Goku</strong>. Giải đấu Sức mạnh là
                      dấu hiệu đầu tiên cho thấy hoàng tử Saiyan cuối cùng đã
                      bắt đầu cuộc hành trình của riêng mình, khi tuyên bố rằng
                      Goku có thể giữ <strong>Bản năng Vô cực</strong> và anh sẽ
                      tìm thấy sức mạnh của riêng mình. Sau đó, anh đã đạt được
                      một cấp độ Super Saiyan Blue mới, mạnh mẽ hơn mà Goku vẫn
                      chưa bao giờ đạt tới. Và mới đây anh lại tiếp tục làm được
                      điều đó khi chứng minh bản thân đang dần đạt được sức mạnh
                      của Thần.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Điều làm cho hình dạng mới của <strong>Vegeta</strong> trở
                      nên ấn tượng hơn là anh đã đạt được nó thông qua đào tạo,
                      trái ngược với các lần mà <strong>Goku</strong> đạt được
                      sức mạnh mới khi cốt truyện cần đến. Cụ thể là mỗi khi gặp
                      đối thủ mạnh, tự nhiên Goku có thể nâng cấp khả năng chiến
                      đấu thông qua một điều gì đó. Điều này cho thấy Vegeta đã
                      nỗ lực và cố gắng đến nhường nào.
                    </p>
                    <p>
                      Bên cạnh đó nếu mọi người để ý thì{" "}
                      <strong>Dragon Ball Super</strong> có truyền thống là{" "}
                      <strong>Goku</strong> và <strong>Vegeta</strong> đối đầu
                      với một nhân vật phản diện nhưng lại chọn thay phiên nhau
                      thay vì chiến đấu cùng nhau. Thông thường Vegeta đi trước
                      và thất bại, sau đó Goku sẽ xuất hiện và cứu rỗi tất cả.
                      Thế nhưng đối với phần Super này thì Vegeta đã nhận được
                      một số sự tôn trọng khi Goku đã đánh trước và mắc phải
                      nhiều sai lầm. Cuối cùng Vegeta lại là người đi sau sửa
                      chữa những điều đó, như cách mà anh đã phát hiện ra những
                      điểm yếu và âm mưu của Granolah.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/7/anh-3-16283235561982055891626.jpg"
                      alt="3, DRAGON BALL SUPER,VEGETA,GOKU,THẦN HỦY DIỆT,BẢN NĂNG VÔ CỰC,GOD KI,"
                      note=""
                    />
                    <p>
                      Hiện tại người hâm mộ đang vô cùng phấn khích và liên tục
                      ủng hộ <strong>Vegeta</strong> sẽ đánh bại được Granolah
                      trong trận chiến lần này. Việc chiến thắng "chiến binh
                      mạnh nhất vũ trụ" trước mặt <strong>Goku</strong> rõ ràng
                      là một bước tiến vô cùng lớn đối với anh. Có lẽ giờ đây
                      chàng hoàng tử Vegeta của chúng ta đã không còn là người
                      đi sau Goku nữa, anh đã chứng minh được sức mạnh của chính
                      mình.
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
