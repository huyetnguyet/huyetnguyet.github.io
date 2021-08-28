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
"timestamp": '28/08/2021 08:44 AM',
"title": 'Não Bát Vàng là món thần khí gì mà khiến Ngộ Không kinh hồn bạt vía?',
"description": 'Não Bát Vàng vừa xuất hiện trong trailer của Black Myth: Wukong (Tôn Ngộ Không: Hắc Thần Thoại).',
"src": '',
"alt": 'TÔN NGỘ KHÔNG,TỀ THIÊN ĐẠI THÁNH,BLACK MYTH: WUKONG,NÃO BÁT VÀNG,NGÔ THỪA ÂN,KIM CÔ BỔNG,',
"category": 'games',
"date": '28/08/2021',
"time": '08:44 AM',
"link": '/nao-bat-vang-la-mon-than-khi-gi-ma-khien-ngo-khong-kinh-hon-bat-via',
"zcomponent": 'page_20210828084435',
"filepath": './20210828084435-nao-bat-vang-la-mon-than-khi-gi-ma-khien-ngo-khong-kinh-hon-bat-via.js'
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
  "Não Bát Vàng là món thần khí gì mà khiến Ngộ Không kinh hồn bạt vía?";
const author = "Real Madrid";
const source = "Trí Thức Trẻ";
const timestamp = "28/08/2021 08:44 AM";
const description =
  "Não Bát Vàng vừa xuất hiện trong trailer của Black Myth: Wukong (Tôn Ngộ Không: Hắc Thần Thoại).";
const link =
  "nao-bat-vang-la-mon-than-khi-gi-ma-khien-ngo-khong-kinh-hon-bat-via";
const tagparam = [
  "TÔN NGỘ KHÔNG",
  "TỀ THIÊN ĐẠI THÁNH",
  "BLACK MYTH: WUKONG",
  "NÃO BÁT VÀNG",
  "NGÔ THỪA ÂN",
  "KIM CÔ BỔNG",
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

export default function page_20210828084435() {
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
                      Trong trailer mới ra mắt của{" "}
                      <strong>Black Myth: Wukong</strong>, nếu bạn tinh ý thì sẽ
                      nhận thấy sự xuất hiện của một trong những món thần khí
                      mạnh nhất trong Tây Du Ký. Đó chính là Não Bạt Vàng, một
                      món bảo vật của Phật Di Lặc. Trong nguyên tác Tây Du Ký
                      của <strong>Ngô Thừa Ân</strong>,{" "}
                      <strong>Tôn Ngộ Không</strong> từng 1 lần đối đầu với món
                      thần khí này và hoàn toàn không có cách nào để chống cự.
                    </p>
                    <h5>
                      <strong>Tôn Ngộ Không</strong> bị nạn tại Tiểu Lôi Âm
                    </h5>
                    <p>
                      Trong kiếp nạn thứ 53 tại Tiểu Lôi Âm, 4 thầy trò Đường
                      Tăng đã gặp phải một trong những địch thủ mạnh nhất của họ
                      trên đường thỉnh kinh. Đó là Hoàng Mi Lão Quái. Y vốn là
                      một tiểu đồng bên cạnh Phật Di Lặc. Nhân lúc Di Lặc đi dự
                      hội, Hoàng Mi Lão Quái đã ăn cắp 2 món bảo bối rồi lén
                      xuống trần gian (1 trong 2 món thần khí này chính là Não
                      Bạt Vàng).
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/26/photo-1-16299140795351621868947.jpg"
                      alt="1, TÔN NGỘ KHÔNG,TỀ THIÊN ĐẠI THÁNH,BLACK MYTH: WUKONG,NÃO BÁT VÀNG,NGÔ THỪA ÂN,KIM CÔ BỔNG,"
                      note="Cảnh Tôn Ngộ Không bị nhốt trong Não Bạt Vàng của Tây Du Ký 1986"
                    />
                    <p>
                      Y tự xưng là Hoàng Mi Lão Phật rồi lập ra Tiểu Lôi Âm (giả
                      chúa Lôi Âm ở Tây Trúc). Sau khi lừa được thầy trò Đường
                      Tăng, Hoàng Mi Lão Quái đã dùng Não Bạt Vàng để nhốt{" "}
                      <strong>Tôn Ngộ Không</strong>. Phải nói đây chính là một
                      trong những kiếp nạn khó khăn nhất mà Tôn Ngộ Không gặp
                      phải. Dù thần thông quảng đại nhưng{" "}
                      <strong>Tề Thiên Đại Thánh</strong> không làm gì nổi Hoàng
                      Mi Lão Quái và các món thần khí của y.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/26/photo-1-1629914152174968433405.jpg"
                      alt="2, TÔN NGỘ KHÔNG,TỀ THIÊN ĐẠI THÁNH,BLACK MYTH: WUKONG,NÃO BÁT VÀNG,NGÔ THỪA ÂN,KIM CÔ BỔNG,"
                      note="Không nhờ đến sự giúp đỡ của chư thần và Phật Di Lặc thì Tôn Ngộ Không khó qua được kiếp nạn này."
                    />
                    <p>
                      Não Bạt Vàng lợi hại đến nỗi một khi đã nhốt ai đó thì sẽ
                      không thể thoát thân. <strong>Tôn Ngộ Không</strong> với
                      món vũ khí lợi hại bậc nhất thiên hạ là Như ý{" "}
                      <strong>kim cô bổng</strong> cũng không thể phá vỡ Não Bạt
                      Vàng để thoát thân. Nếu không nhờ đến sừng của vị Tinh tú
                      Cang Kim Long (thứ cứng nhất tam giới) thì có lẽ người đi
                      thỉnh kinh không phải là thầy trò Đường Tăng mà sẽ là
                      Hoàng Mi Lão Quái.
                    </p>
                    <RelationNewsInPage category={category} />
                    <h5>Não Bạt Vàng xuất hiện trong Black Myth: Wukong</h5>
                    <p>
                      Khi xem trailer mới nhất của{" "}
                      <strong>Black Myth: Wukong</strong>, nếu tinh ý bạn sẽ
                      phát hiện ra <strong>Não Bát Vàng</strong> ở những giây
                      cuối cùng của video. Bảo vật này xuất hiện sau cảnh{" "}
                      <strong>Tôn Ngộ Không</strong> đang bò lăn dưới đất vì bị
                      một vật gì đó hút lại. Đoạn thoại đầy ẩn ý với nội dung
                      "Ngươi đã chọn một linh hồn bất tử trong 6 cõi thì làm sao
                      có thể dễ dàng thoát đi như vậy" càng khiến cho người xem
                      cảm thấy tình cảnh của nhân vật chính lúc đó đang rất thê
                      thảm.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/26/untitled-16299143366252134470419.png"
                      alt="3, TÔN NGỘ KHÔNG,TỀ THIÊN ĐẠI THÁNH,BLACK MYTH: WUKONG,NÃO BÁT VÀNG,NGÔ THỪA ÂN,KIM CÔ BỔNG,"
                      note="Rất có thể đây là Não Bát Vàng trong Black Myth: Wukong"
                    />
                    <p>
                      Tương tự như 2 trailer trước đó, phần cốt truyện của đoạn
                      giới thiệu <strong>Black Myth: Wukong</strong> lần này
                      cũng khá mơ hồ và chưa rõ nét. Nhiều tình tiết được úp mở
                      một cách kỳ bí khiến người xem luôn phải đoán già đoán non
                      về cốt truyện của trò chơi. Chùng ta hãy cùng tiếp tục chờ
                      đợi đến ngày game ra mắt để xem thực hư câu chuyện này ra
                      sao.
                    </p>
                    <p></p>
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
