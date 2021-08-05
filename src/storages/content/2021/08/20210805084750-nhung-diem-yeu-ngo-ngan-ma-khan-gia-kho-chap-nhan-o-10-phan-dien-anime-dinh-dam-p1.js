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
"timestamp": '05/08/2021 08:47 AM',
"title": 'Những điểm yếu ngớ ngẩn mà khán giả khó chấp nhận ở 10 phản diện anime đình đám (P.1)',
"description": 'Một số phản diện trong anime vô cùng tiềm năng, nhưng lại bị đánh bại theo cách không thể ngờ đến vì điểm yếu ngớ ngẩn.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/4/princess-tutu-duck-as-a-duck-dancing-1628064431920805535622.jpg',
"alt": 'KHÁM PHÁ,MANGA,ANIME,HOẠT HÌNH NHẬT BẢN,',
"category": 'games',
"date": '05/08/2021',
"time": '08:47 AM',
"link": '/nhung-diem-yeu-ngo-ngan-ma-khan-gia-kho-chap-nhan-o-10-phan-dien-anime-dinh-dam-p1',
"zcomponent": 'page_20210805084750',
"filepath": './20210805084750-nhung-diem-yeu-ngo-ngan-ma-khan-gia-kho-chap-nhan-o-10-phan-dien-anime-dinh-dam-p1.js'
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
  "Những điểm yếu ngớ ngẩn mà khán giả khó chấp nhận ở 10 phản diện anime đình đám (P.1)";
const author = "Green";
const source = "Trí Thức Trẻ";
const timestamp = "05/08/2021 08:47 AM";
const description =
  "Một số phản diện trong anime vô cùng tiềm năng, nhưng lại bị đánh bại theo cách không thể ngờ đến vì điểm yếu ngớ ngẩn.";
const link =
  "nhung-diem-yeu-ngo-ngan-ma-khan-gia-kho-chap-nhan-o-10-phan-dien-anime-dinh-dam-p1";
const tagparam = ["KHÁM PHÁ", "MANGA", "ANIME", "HOẠT HÌNH NHẬT BẢN"];
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

export default function page_20210805084750() {
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
                      Nhiều người sẽ lý giải rằng mọi nhân vật phản diện đều cần
                      có một điểm yếu để không trở thành bất bại. Tuy nhiên,
                      chắc chắn khán giả sẽ công nhận rằng ngay cả như vậy thì
                      cách xây dựng điểm yếu của các nhân vật phản diện dưới đây
                      cũng thật khó chấp nhận vì quá ngớ ngẩn.
                    </p>
                    <h5>
                      10. Raven không thể xử lý được một con vịt nhảy múa
                      (Princess Tutu)
                    </h5>
                    <p>
                      Xem Princess Tutu là một thế giới cổ tích huyền diệu pha
                      trộn với múa cổ điển, thì có nghĩa là rất nhiều vấn đề của
                      Duck sẽ được giải quyết khi cô biến thành công chúa Tutu
                      và nhảy theo nền nhạc cổ điển.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/4/princess-tutu-duck-as-a-duck-dancing-1628064431920805535622.jpg"
                      alt="1, KHÁM PHÁ,MANGA,ANIME,HOẠT HÌNH NHẬT BẢN,"
                      note=""
                    />
                    <p>
                      Cuối cùng, Duck và những người bạn của cô đi đến trận đấu
                      cuối cùng với Raven. Cô đánh mất chiếc bùa hộ mệnh ma
                      thuật cho phép cô biến thành con người. Vì thế, Duck đành
                      giữ nguyên hình dạng con vịt để nhảy múa, cùng các bạn
                      đánh bại Raven. Rõ ràng khán giả đều thấy thật vô lý khi
                      Raven không thể xử lý được một con vịt con.
                    </p>
                    <h5>9. Homunculi tự làm bản thân suy yếu</h5>
                    <p>
                      Trong bản chuyển thể <strong>anime</strong> của Fullmetal
                      Alchemist, Homunculi thậm chí còn kỳ lạ và khó hiểu hơn
                      bất kỳ chủng loài nào khác. Bất kỳ mối liên hệ nào với thứ
                      từng thuộc về họ trước đây đều biến họ trở thành kẻ hoàn
                      toàn vô dụng, tạo ra điểm yếu chí mạng khiến các State
                      Alchemist có thể tiêu diệt họ dễ dàng.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/4/fma-broken-mirror-homunculus-ed-16280644590241867417301.jpg"
                      alt="2, KHÁM PHÁ,MANGA,ANIME,HOẠT HÌNH NHẬT BẢN,"
                      note=""
                    />
                    <p>
                      Tuy nhiên, điểm yếu này không chỉ giới hạn ở những chi
                      tiết lớn về họ mà ngay cả những thứ nhỏ và đơn giản như
                      một sợi tóc cũng có thể trở thành điểm yếu.
                    </p>
                    <h5>
                      8. Aaroniero Arruruerie mất mọi thứ vì ánh mặt trời nhân
                      tạo
                    </h5>
                    <p>
                      Aaroniero Arruruerie là một nhân vật mạnh trong Bleach và
                      một trong số các chiến binh Espada mạnh nhất, nhưng anh ta
                      lại thực sự yếu ớt khi đứng dưới ánh mặt trời. Điểm yếu
                      này bao gồm cả ánh mặt trời nhân tạo, bằng chứng là trong
                      trận chiến với Rukia, cô đã phá tung trần nhà và lật ngược
                      tình thế.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/4/aaroniero-arruruerie-16280644813101176727660.jpg"
                      alt="3, KHÁM PHÁ,MANGA,ANIME,HOẠT HÌNH NHẬT BẢN,"
                      note=""
                    />
                    <p>
                      Dù điểm yếu này không thực sự giết được Aaroniero, nhưng
                      nó cũng làm cho khả năng biến hình của anh ta trở nên vô
                      dụng. Đó là một điểm yếu hết sức ngớ ngẩn vì nhân vật này
                      từng sống ở một lâu đài với ánh mặt trời giả.
                    </p>
                    <RelationNewsInPage category={category} />
                    <h5>
                      7. Slug ghét nghe tiếng huýt sáo (Dragon Ball Z: Lord
                      Slug)
                    </h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/4/dragon-ball-z-lord-slug-1628064498443543299647.jpg"
                      alt="4, KHÁM PHÁ,MANGA,ANIME,HOẠT HÌNH NHẬT BẢN,"
                      note=""
                    />
                    <p>
                      Trong khi loạt phim Dragon Ball tràn ngập những nhân vật
                      phản diện rất khác thường thì Slug xuất hiện. Hắn để cho
                      cái ác trong trái tim lấn lướt và trở thành siêu Namek
                      hiếm hoi. Tuy nhiên, một điểm yếu không ai lý giải nổi ở
                      Slug là việc hắn ta ghét huýt sáo, đến mức hắn muốn loại
                      bỏ hoàn toàn âm thanh đó.
                    </p>
                    <h5>
                      6. Kaguya Otsutsuki bị choáng váng vì quyến rũ chi thuật
                      của Naruto (Naruto: Shippuden)
                    </h5>
                    <p>
                      Có rất nhiều cách khả thi để Naruto và những người bạn
                      đánh bại đối thủ hùng mạnh như Kaguya Otsutsuki. Tuy
                      nhiên, trong Naruto: Shippuden, mọi chuyện lại diễn ra
                      theo hướng chẳng ai ngờ đến.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/4/kaguya-sparkling-shocked-naruto-16280651468011175456557.jpg"
                      alt="5, KHÁM PHÁ,MANGA,ANIME,HOẠT HÌNH NHẬT BẢN,"
                      note=""
                    />
                    <p>
                      Naruto đã dùng đến quyến rũ chi thuật khi đấu với Kaguya
                      Otsutsuki. Và đến bạn bè của cậu cũng không thể tin được
                      rằng một đàn ông khỏa thân lại có thể giúp họ giành được
                      lợi thế trong trận chiến.
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
