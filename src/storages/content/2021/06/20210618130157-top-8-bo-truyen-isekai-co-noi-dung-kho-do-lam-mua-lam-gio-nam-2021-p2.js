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
"timestamp": '18/06/2021 01:01 PM',
"title": 'Top 8 bộ truyện isekai có nội dung khó đỡ làm mưa làm gió năm 2021 (P.2)',
"description": 'Để tìm được nét độc đáo riêng giữa thị trường truyện isekai đang nở rộ, tác giả của những bộ truyện này đã quyết định nghĩ các ý tưởng siêu dị.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/17/the-karate-master-fights-truck-kun-16239215523831281995025.jpg',
"alt": 'ISEKAI,MANGA,',
"category": 'games',
"date": '18/06/2021',
"time": '01:01 PM',
"link": '/top-8-bo-truyen-isekai-co-noi-dung-kho-do-lam-mua-lam-gio-nam-2021-p2',
"zcomponent": 'page_20210618130157',
"filepath": './20210618130157-top-8-bo-truyen-isekai-co-noi-dung-kho-do-lam-mua-lam-gio-nam-2021-p2.js'
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
  "Top 8 bộ truyện isekai có nội dung khó đỡ làm mưa làm gió năm 2021 (P.2)";
const author = "DS";
const source = "Trí Thức Trẻ";
const timestamp = "18/06/2021 01:01 PM";
const description =
  "Để tìm được nét độc đáo riêng giữa thị trường truyện isekai đang nở rộ, tác giả của những bộ truyện này đã quyết định nghĩ các ý tưởng siêu dị.";
const link =
  "top-8-bo-truyen-isekai-co-noi-dung-kho-do-lam-mua-lam-gio-nam-2021-p2";
const tagparam = ["ISEKAI", "MANGA"];
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

export default function page_20210618130157() {
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
                      Thể loại <strong>isekai</strong> vẫn luôn bị đánh giá là
                      có nội dung sáo rỗng và lối mòn, nhưng những bộ truyện độc
                      nhất vô nhị này đã chứng minh rằng chỉ cần tác giả dám
                      nghĩ và vẽ thì ý tưởng mặn đến đâu cũng có.
                    </p>
                    <h3>
                      4. Karate Idiot in A Different World – Bậc thầy võ thuật
                      thách thức thế giới chuyển sinh
                    </h3>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/17/the-karate-master-fights-truck-kun-16239215523831281995025.jpg"
                      alt="1, ISEKAI,MANGA,"
                      note=""
                    />
                    <p>
                      Việc biến một nhân vật có năng lực tầm thường ở thế giới
                      thực trở nên vượt trội ở thế giới chuyển sinh là điều
                      thường thấy ở nhiều bộ <strong>isekai</strong>. Karate
                      Idiot in A Different World cũng không phải ngoại lệ.
                      Chuyện bắt đầu khi một võ sư karate vô danh tỉnh dậy ở thế
                      giới chuyển sinh sau khi tai nạn giao thông.
                    </p>
                    <p>
                      Anh ta nhận ra mình đang ở một thế giới mà những con người
                      và tạo vật kỳ diệu tồn tại, võ sư ngay lập tức lùng sục
                      khắp vùng đất này để tìm ra đối thủ mạnh nhất nhằm khiêu
                      chiến. Vậy là vị võ sư bắt đầu một chuyến phiêu lưu tìm
                      kiếm vị trí bá chủ karate, cũng trong cuộc phiêu lưu này
                      anh ta phải đối mặt với những sinh vật kỳ bí, phù thủy,
                      pháp sư… chỉ bằng ngón võ karate có sẵn.
                    </p>
                    <h3>
                      3. Girls Bravo – Yukinari Sasaki dị ứng với dàn harem đến
                      từ thế giới khác
                    </h3>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/17/the-girls-bravo-cast-16239216753511361531725.jpg"
                      alt="2, ISEKAI,MANGA,"
                      note=""
                    />
                    <p>
                      Girls Bravo được xem là tiền thân của các anime harem hiện
                      đại, đó là lý do vì sao người ta dễ dàng quên rằng nó là
                      một bộ anime hài thuộc thể loại <strong>isekai</strong>.
                      Câu chuyện theo chân Yukinari Sasaki, người rất sợ các cô
                      gái vì họ gây dị ứng cho cậu ta. Khi bị đá vào bồn tắm,
                      Yukinari tỉnh dậy ở Seiren, một thế giới song song nhưng
                      phụ nữ chiếm đa số.
                    </p>
                    <p>
                      Cốt truyện sau đó tất nhiên là sự kết hợp giữa harem và
                      hài lãng mạn, vì nhân vật nam chính được rất nhiều cô gái
                      theo đuổi. Girls Bravo được rất nhiều người yêu thích, dù
                      nội dung của nó đôi khi khá phi lý.
                    </p>
                    <h3>
                      2. Re:Creators – Các nhân vật hư cấu gần như quậy tung thế
                      giới thực
                    </h3>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/17/the-creations-line-up-16239216933781755801788.jpg"
                      alt="3, ISEKAI,MANGA,"
                      note=""
                    />
                    <p>
                      Nếu có <strong>isekai</strong> chuyển sinh sang thế giới
                      khác thì cũng có thể loại isekai ngược – khi một nhân vật
                      chuyển sinh về thế giới thực. Re:Creators là bộ truyện
                      kinh điển nhất mỗi khi nhắc đến thể loại không mới nhưng
                      hơi hiếm này. Trong phim, các nhân vật thuộc nhiều thể
                      loại tác phẩm hư cấu khác nhau đều chuyển sinh về thế giới
                      thực sau khi Altair triệu hồi họ để đảm bảo kết thúc cho
                      mình. Anime đã cho thấy ý tưởng một hiệp sĩ kỳ ảo hoặc
                      người máy có thể ảnh hưởng đến nước Nhật hiện đại như thế
                      nào, và tất nhiên đã được công chúng đón nhận rộng rãi.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Bên cạnh nhưng nhân vật thú vị như thám tử cyberpunk, cô
                      gái phép thuật, phù thủy… Re:Creators cũng đầu tư khá
                      nhiều vào nội dung khi khai thác những câu hỏi thường
                      không xuất hiện trong thế giới anime.
                    </p>
                    <h3>
                      1. SSSS Gridman – <strong>Isekai</strong> sáng thứ bảy
                      không hề vui
                    </h3>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/17/the-cast-of-ssss-gridman-1623921710925811453477.jpg"
                      alt="4, ISEKAI,MANGA,"
                      note=""
                    />
                    <p>
                      SSSS Gridman không chỉ là một tác phẩm tri ân tokusatsu
                      hiện đại mà còn là câu chuyện phản <strong>isekai</strong>
                      . Anime diễn ra trong thế giới isekai mộng mơ của Akane –
                      một fangirl kaiju khép kín. Nó cho thấy trí tưởng tượng
                      thoát ly bị xói mòn theo cách tồi tệ nhất.
                    </p>
                    <p>
                      Những gợi ý về thế giới <strong>isekai</strong> đặc biệt
                      này được đan cài xuyên suốt phim và chỉ được tiết lộ vào
                      khoảnh khắc cuối. SSSS Gridman nói về sự trốn chạy của
                      Akane và mong muốn thoát ra khỏi thế giới isekai của cô
                      hơn là ở trong đó. Sự thật bị che giấu vô cùng khốc liệt,
                      câu hỏi lẫn ý nghĩa ở SSSS Gridman cũng đòi hỏi khán giả
                      phải xem đi xem lại bộ anime này nhiều lần.
                    </p>
                    <p>
                      Bạn đọc có thể tham gia bàn luận, trao đổi thêm về các bộ
                      truyện webtoon và <strong>manga</strong> khác tại ĐÂY.
                    </p>
                  </div>
                  <AdsHorizontal />
                </div>

                <RandomFeature />

                <div className="source">Source: {source}</div>

                <FacebookShareButton link={facebookLinkShare} />

                <div className="tags">Tags: {updatedTags}</div>
              </div>
            </div>
          </div>
        </div>
      </Content>
    </>
  );
}
