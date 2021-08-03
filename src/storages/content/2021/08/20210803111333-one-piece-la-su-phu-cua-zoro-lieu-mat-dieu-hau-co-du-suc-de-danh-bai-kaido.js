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
"timestamp": '03/08/2021 11:13 AM',
"title": 'One Piece: Là sự phụ của Zoro, liệu Mắt Diều Hâu có đủ sức để đánh bại Kaido?',
"description": 'Đây là câu hỏi mà nhiều fan One Piece thắc mắc khi mà Zoro đã có thể chém được Kaido thì với sức mạnh của mình liệu ông thầy Mắt Diều Hâu sẽ làm được gì Tứ Hoàng này hay không?',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/3/ha1-1627968691684392808561.jpg',
"alt": 'ONE PIECE,FAN ONE PIECE,CỘNG ĐỒNG ONE PIECE,TRUYỆN ONE PIECE,TỨ HOÀNG KAIDO,ARC WANO,ZORO VÀ MIHAWK,DRACULE MIHAWK,MẮT DIỀU HÂU MIHAWK,RORONOA ZORO,HAKI BÁ VƯƠNG,TỨ HOÀNG SHANKS,',
"category": 'games',
"date": '03/08/2021',
"time": '11:13 AM',
"link": '/one-piece-la-su-phu-cua-zoro-lieu-mat-dieu-hau-co-du-suc-de-danh-bai-kaido',
"zcomponent": 'page_20210803111333',
"filepath": './20210803111333-one-piece-la-su-phu-cua-zoro-lieu-mat-dieu-hau-co-du-suc-de-danh-bai-kaido.js'
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
  "One Piece: Là sự phụ của Zoro, liệu Mắt Diều Hâu có đủ sức để đánh bại Kaido?";
const author = "Sầu Thiên Thu";
const source = "Trí Thức Trẻ";
const timestamp = "03/08/2021 11:13 AM";
const description =
  "Đây là câu hỏi mà nhiều fan One Piece thắc mắc khi mà Zoro đã có thể chém được Kaido thì với sức mạnh của mình liệu ông thầy Mắt Diều Hâu sẽ làm được gì Tứ Hoàng này hay không?";
const link =
  "one-piece-la-su-phu-cua-zoro-lieu-mat-dieu-hau-co-du-suc-de-danh-bai-kaido";
const tagparam = [
  "ONE PIECE",
  "FAN ONE PIECE",
  "CỘNG ĐỒNG ONE PIECE",
  "TRUYỆN ONE PIECE",
  "TỨ HOÀNG KAIDO",
  "ARC WANO",
  "ZORO VÀ MIHAWK",
  "DRACULE MIHAWK",
  "MẮT DIỀU HÂU MIHAWK",
  "RORONOA ZORO",
  "HAKI BÁ VƯƠNG",
  "TỨ HOÀNG SHANKS",
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

export default function page_20210803111333() {
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
                      Như chúng ta đã biết thì Zoro đã bộc phát{" "}
                      <strong>Haki bá vương</strong> và tung một cú chém vào{" "}
                      <strong>Tứ Hoàng Kaido</strong> khiến Tứ Hoàng này bị
                      thương và để lại sẹo. Mặc dù vết thương mà anh gây ra vẫn
                      chưa bằng huyền thoại của Wano là Kozuki Oden. Vậy câu hỏi
                      đặt ra là liệu rằng <strong>Mắt Diều Hâu Mihawk</strong>{" "}
                      sẽ làm được gì trước Kaido và sức mạnh của cựu Thất Vũ Hải
                      này có đủ để tạo ra một trận chiến hấp dẫn với Kaido hay
                      không?
                    </p>
                    <p>
                      Đầu tiên vì cho tới nay{" "}
                      <strong>Mắt Diều Hâu Mihawk</strong> vẫn chưa thể hiện
                      nhiều sức mạnh của mình nên chúng ta sẽ sử dụng Zoro và
                      Shanks Tóc Đỏ để có thể đánh giá được sức mạnh của cựu
                      Thất Vũ Hải này nhé!.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/3/ha1-1627968691684392808561.jpg"
                      alt="1, ONE PIECE,FAN ONE PIECE,CỘNG ĐỒNG ONE PIECE,TRUYỆN ONE PIECE,TỨ HOÀNG KAIDO,ARC WANO,ZORO VÀ MIHAWK,DRACULE MIHAWK,MẮT DIỀU HÂU MIHAWK,RORONOA ZORO,HAKI BÁ VƯƠNG,TỨ HOÀNG SHANKS,"
                      note=""
                    />
                    <p>
                      Đầu tiên là Zoro, với ước mơ trở thành kiếm sĩ mạnh nhất
                      thế giới anh đã khẩn cầu Mihawk nhận mình làm đệ tử và tập
                      luyện 2 năm chăm chỉ dưới sự chỉ dạy của cựu Thất Vũ Hải.
                      Để rồi hiện tại với những gì học được Zoro đã có thể gây
                      ra vế thương cho Kaido, một kẻ được mệnh danh là sinh vật
                      mạnh nhất thế giới. Rõ ràng với tư cách là thầy của Zoro,
                      người được mệnh danh là kiếm sĩ mạnh nhất thế giới thời
                      điểm hiện tại thì Mihawk hoàn toàn đủ sức để gây ra vết
                      thương cho Kaido.
                    </p>
                    <p>
                      Người thứ 2 là Shanks Tóc Đỏ, một trong 4 Tứ Hoàng của thế
                      giới hải tặc trong <strong>One Piece</strong>. Mihawk được
                      biết đến là kỳ phùng địch thủ của Shanks khi 2 người từng
                      nhiều lần thử tài kiếm thuật với nhau. Chính bản thân
                      Shanks cũng rất tôn trọng và coi Mihawk là đối thủ lớn của
                      mình. Mà như chúng ta đã biết thì xét về sức mạnh và đẳng
                      cấp thì Shanks hoàn toàn không thua kém gì Kaido. Chính vì
                      vậy nếu Mihawk đối đầu sòng phẳng được với Shanks thì ông
                      cũng làm được điều này với Kaido.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/3/ha4-16279687053321080273217.png"
                      alt="2, ONE PIECE,FAN ONE PIECE,CỘNG ĐỒNG ONE PIECE,TRUYỆN ONE PIECE,TỨ HOÀNG KAIDO,ARC WANO,ZORO VÀ MIHAWK,DRACULE MIHAWK,MẮT DIỀU HÂU MIHAWK,RORONOA ZORO,HAKI BÁ VƯƠNG,TỨ HOÀNG SHANKS,"
                      note=""
                    />
                    <p>
                      Thêm một chi tiết nữa khiến cho Mihawk rất nguy hiểm khi
                      đối đầu với Kaido đó chính là thanh kiếm Yoru mà ông sở
                      hữu. Yoru là 1 trong 12 thanh Cực Phẩm Đại Bảo Kiếm. Nó là
                      1 trong số ít những thanh kiếm mạnh nhất, cao cấp nhất và
                      đẳng cấp nhất của thế giới <strong>One Piece</strong>.
                      Thêm vào đó thì Yoru cũng đã trở thành hắc kiếm, điều này
                      cho thấy <strong>Mắt Diều Hâu Mihawk</strong> đã làm chủ
                      được nó. Trong khi đó, ba thanh kiếm mà Zoro sử dụng vẫn
                      chưa biến thành màu đen.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Tuy nhiên một điều mà sẽ ảnh hưởng lớn đến trận chiến giữa
                      Mihawk và Kaido nếu nó diễn ra đó chính là{" "}
                      <strong>Haki bá vương</strong>. Mihawk được xác nhận là có
                      Haki bá vương và sức mạnh này của ông cho đến nay vẫn là
                      một câu hỏi mà nhiều fan thắc mắc. Nhiều khả năng với vị
                      thế của một hải tặc kỳ cựu và đầy kinh nghiệm thì Mihawk
                      có thể đã sử dụng được Haki bá vương kết hợp vào những đòn
                      tấn công của mình. Nếu điều này là sự thật thì khả năng
                      Mihawk gây ra những đòn tấn công cho Kaido là nguy hiểm
                      hơn Zoro hơn rất nhiều.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/3/ha3-16279687007751089150623.jpg"
                      alt="3, ONE PIECE,FAN ONE PIECE,CỘNG ĐỒNG ONE PIECE,TRUYỆN ONE PIECE,TỨ HOÀNG KAIDO,ARC WANO,ZORO VÀ MIHAWK,DRACULE MIHAWK,MẮT DIỀU HÂU MIHAWK,RORONOA ZORO,HAKI BÁ VƯƠNG,TỨ HOÀNG SHANKS,"
                      note=""
                    />
                    <p>
                      Tuy nhiên, nếu ai đã xem Kaido thể hiện sức mạnh ở Wano
                      thì năng lực trái ác quỷ hệ Zoan thần thoại của hắn thực
                      sự là một thử thách lớn dành cho Mihawk hay bất cứ đối thủ
                      nào khác. Kaido đã đấu với Cửu Hồng Bao, đỡ đòn 5 Siêu Tân
                      Tinh và rồi đánh bại Luffy. Hiện tại Kaido đang đối đầu
                      với Yamato và tỏ ra vẫn còn rất sung sức. Điều này chứng
                      tỏ khả năng chịu đựng và hồi phục kinh điển của trái ác
                      quỷ mà Kaido đang sử dụng. Thêm vào đó những đòn tấn công
                      của Kaido có sức sát thương diện rộng và nếu không cẩn
                      thận thì Mihawk hoàn toàn có thể bị đánh bại bất cứ lúc
                      nào.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/3/ha2-16279686961691036992521.jpg"
                      alt="4, ONE PIECE,FAN ONE PIECE,CỘNG ĐỒNG ONE PIECE,TRUYỆN ONE PIECE,TỨ HOÀNG KAIDO,ARC WANO,ZORO VÀ MIHAWK,DRACULE MIHAWK,MẮT DIỀU HÂU MIHAWK,RORONOA ZORO,HAKI BÁ VƯƠNG,TỨ HOÀNG SHANKS,"
                      note=""
                    />
                    <p>
                      Nhìn chung với tư cách là kiếm sĩ mạnh nhất thế giới cộng
                      thêm là một hải tặc có nhiều kinh nghiệm chiến đấu thì
                      Mihawk chắc chắn sẽ gây ra nhiều khó khăn cho Kaido. Tuy
                      nhiên để có thể đánh bại <strong>Tứ Hoàng Kaido</strong>{" "}
                      thì nhiều khả năng Mihawk vẫn chưa đủ khả năng. Nếu Kaido
                      là điểm 10 thì sức mạnh của Mihawk chắc nằm ở điểm 7.
                    </p>
                    <p>
                      Trên đây là ý kiến mang tính chủ quan của tác giả bài viết
                      về sức mạnh của Mihawk nếu cựu Thất Vũ Hải này đối đầu với{" "}
                      <strong>Tứ Hoàng Kaido</strong> trong{" "}
                      <strong>One Piece</strong>. Các bạn nghĩ sao về trận đấu
                      này? Hãy để lại ý kiến của mình nhé!
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
