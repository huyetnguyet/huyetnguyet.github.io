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
"timestamp": '13/08/2021 09:28 AM',
"title": 'Những nhân vật đã từng phá vỡ được chiếc khiên của Captain America là ai?',
"description": 'Bất chấp sức mạnh đáng kinh ngạc đến từ chiếc khiên của Captain America, một số người vẫn có thể phá vỡ nó. Dưới đây là những nhân vật mạnh nhất đã từng làm được điều đó.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/13/photo-1-1628822349591989798565.jpg',
"alt": 'AVENGERS: ENDGAME,INFINITY GAUNTLET,CAPTAIN AMERICA,KHIÊN CỦA CAPTAIN AMERICA,KHIÊN CỦA CAPTAIN AMERICA BỊ VỠ,THANOS,',
"category": 'news',
"date": '13/08/2021',
"time": '09:28 AM',
"link": '/nhung-nhan-vat-da-tung-pha-vo-duoc-chiec-khien-cua-captain-america-la-ai',
"zcomponent": 'page_20210813092806',
"filepath": './20210813092806-nhung-nhan-vat-da-tung-pha-vo-duoc-chiec-khien-cua-captain-america-la-ai.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "news";
const categoryLink = "/news";
const title =
  "Những nhân vật đã từng phá vỡ được chiếc khiên của Captain America là ai?";
const author = "ĐỨC KHƯƠNG";
const source = "Trí thức trẻ";
const timestamp = "13/08/2021 09:28 AM";
const description =
  "Bất chấp sức mạnh đáng kinh ngạc đến từ chiếc khiên của Captain America, một số người vẫn có thể phá vỡ nó. Dưới đây là những nhân vật mạnh nhất đã từng làm được điều đó.";
const link =
  "nhung-nhan-vat-da-tung-pha-vo-duoc-chiec-khien-cua-captain-america-la-ai";
const tagparam = [
  "AVENGERS: ENDGAME",
  "INFINITY GAUNTLET",
  "CAPTAIN AMERICA",
  "KHIÊN CỦA CAPTAIN AMERICA",
  "KHIÊN CỦA CAPTAIN AMERICA BỊ VỠ",
  "THANOS",
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

export default function page_20210813092806() {
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
                      Có thể nói khoảnh khắc mà <strong>Thanos</strong> phá vỡ
                      chiếc khiên của <strong>Captain America</strong> trong{" "}
                      <strong>Avengers: Endgame</strong> là một cú sốc đối với
                      khán giả điện ảnh - một thứ mạnh như tấm khiên vibranium
                      của Captain America bị vỡ, nhưng trên thực tế, điều này
                      lại không quá bất ngờ đối với những người hâm mộ truyện
                      tranh bởi nó đã thực sự đã xảy ra một vài lần trong
                      Comics.
                    </p>
                    <p>
                      Một số lượng lớn nhân vật phản diện và anh hùng đã từng
                      làm chiếc khiên này vỡ vụn theo đúng nghĩa đen. Dưới đây
                      là những nhân vật đã phá vỡ chiếc khiên của{" "}
                      <strong>Captain America</strong> trong truyện tranh.
                    </p>
                    <h5>Molecule Man</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/13/photo-1-1628822349591989798565.jpg"
                      alt="1, AVENGERS: ENDGAME,INFINITY GAUNTLET,CAPTAIN AMERICA,KHIÊN CỦA CAPTAIN AMERICA,KHIÊN CỦA CAPTAIN AMERICA BỊ VỠ,THANOS,"
                      note=""
                    />

                    <p>
                      Molecule Man là một nhân vật phản diện của Thời kỳ Bạc (Kỷ
                      nguyên Bạc của truyện tranh, thời kỳ phát triển nghệ thuật
                      và thành công thương mại rộng rãi trong các tác phẩm
                      truyện tranh chính thống của Mỹ, chủ yếu là những tác phẩm
                      có nguyên mẫu siêu anh hùng), có thể coi đây là nhân vật
                      phản diện chính chống lại <strong>Captain America</strong>{" "}
                      vào đầu những năm 80.
                    </p>
                    <p>
                      Trong Avengers # 215, khi chiến đấu với team Avengers, hắn
                      đã dùng sức mạnh của mình (kiểm soát các phân tử) để phân
                      rã cây búa Mjolnir của Thor, ván trượt của Silver Surfer,
                      bộ giáp của Iron Man và cả chiếc khiên của{" "}
                      <strong>Captain America</strong>. Hắn làm điều đó một cách
                      vô cùng dễ dàng và gần như không cần phải đổ một giọt mồ
                      hôi.
                    </p>
                    <h5>Living Laser</h5>
                    <p>
                      Living Laser được biết đến nhiều hơn với vai trò là nhân
                      vật phản diện của Iron Man, thế nhưng ở những lần ra mắt
                      đầu tiên, nhân vật này lại là một phản diện chống lại{" "}
                      <strong>Captain America</strong> - trong Avengers # 34, và
                      lần gặp mặt này hắn đã khiến cho khiên của Cap bị vỡ.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/13/photo-1-1628822350791374984298.jpg"
                      alt="2, AVENGERS: ENDGAME,INFINITY GAUNTLET,CAPTAIN AMERICA,KHIÊN CỦA CAPTAIN AMERICA,KHIÊN CỦA CAPTAIN AMERICA BỊ VỠ,THANOS,"
                      note=""
                    />
                    <p>
                      Ở khoảng thời gian này, trong khi sức mạnh của Cap đã được
                      thiết lập khá tốt, thì bản chất chính xác của chiếc khiên
                      vẫn là một thứ gì đó chưa rõ ràng. Kết quả là, chiếc khiên
                      liên tục gặp phải sự cố trong những câu chuyện đầu tiên.
                      Chỉ sau này, thành phần hợp kim vibranium và khả năng gần
                      như bất khả xâm phạm của nó mới được thành lập.
                    </p>
                    <h5>Ultimate Valkyrie</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/13/photo-2-1628822351819509977989.jpeg"
                      alt="3, AVENGERS: ENDGAME,INFINITY GAUNTLET,CAPTAIN AMERICA,KHIÊN CỦA CAPTAIN AMERICA,KHIÊN CỦA CAPTAIN AMERICA BỊ VỠ,THANOS,"
                      note=""
                    />
                    <p>
                      Mọi thứ có một chút khác biệt trong Ultimate Universe.
                      Thực tại đã có một chút thay đổi, trong khi Đội trưởng Mỹ
                      có lẽ hơi "quá nhiệt tình và tràn đầy năng lượng" thì
                      Valkyrie vẫn là một thế lực hùng mạnh. Cô đã chứng minh
                      điều đó khi phá vỡ chiếc khiên của{" "}
                      <strong>Captain America</strong> trong một cuộc chiến tàn
                      khốc, thế nhưng đó hoàn toàn không phải lỗi của cô ấy -
                      Enchantress đã sử dụng phép thuật và chiếm hữu cơ thể của
                      Valkyrie.
                    </p>
                    <h5>The Serpent</h5>
                    <p>
                      Serpent là một nhân vật phản diện lâu đời khác của Marvel
                      đến từ Asgard, nhưng cuối cùng lại bị gông cùm dưới đáy
                      biển (Fear itself). Hắn là Anh trai của Odin, là bác của
                      Thor và Loki, Serpent là Thần Sợ hãi trong thần thoại Bắc
                      Âu. Ngoài ra hắn còn có một mối quan hệ gia đình khác với
                      Sin (con gái của Red Skull) - người đã giải thoát hắn ta
                      khỏi nhà tù và bắt đầu gieo rắc nỗi sợ hãi trên khắp thế
                      giới. Sau khi tự do, hắn đã biến rất nhiều siêu anh hùng
                      Marvel thành nô lệ của mình.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/13/photo-3-1628822351290858972378.jpg"
                      alt="4, AVENGERS: ENDGAME,INFINITY GAUNTLET,CAPTAIN AMERICA,KHIÊN CỦA CAPTAIN AMERICA,KHIÊN CỦA CAPTAIN AMERICA BỊ VỠ,THANOS,"
                      note=""
                    />
                    <p>
                      Khi các Avengers xuất hiện để lịch sự yêu cầu hắn ta dừng
                      việc ác lại, nhưng mọi chuyện đâu có dễ dàng như vậy. Hiển
                      nhiên, một trận chiến sinh tử đã phải nổ ra, khi Captain
                      chiến đấu với Serpent, anh chàng đã ném chiếc khiên của
                      mình về phía hắn.The Serpent đã chứng minh bản lĩnh
                      Asgardian của mình bằng cách phá vỡ chiếc khiên của{" "}
                      <strong>Captain America</strong> bằng tay không. May mắn
                      cho Captain America là sau khi Thor giết chết The Serpent,
                      chiếc khiên của anh đã được hàn lại nhưng nó vẫn có một
                      vết nứt ở chính giữa.
                    </p>
                    <h5>King Thor</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/13/photo-4-16288223538402452712.jpeg"
                      alt="5, AVENGERS: ENDGAME,INFINITY GAUNTLET,CAPTAIN AMERICA,KHIÊN CỦA CAPTAIN AMERICA,KHIÊN CỦA CAPTAIN AMERICA BỊ VỠ,THANOS,"
                      note=""
                    />
                    <p>
                      Như những gì cũng ta được thấy thì Thor trên màn ảnh rông
                      vẫn chưa có đủ sức mạnh để có thể đánh bại và đập nát
                      khiên của Cap. Thế nhưng mọi chuyện đã khác sau khi Odin
                      qua đời, lúc đó Thor trở thành King Thor - Vua của Asgard
                      và được thừa kế sức mạnh của Odin, thứ sức mạnh này đã
                      thay đổi luôn tính cách của Thor, và thúc đẩy anh đưa
                      quyền thống trị của người Asgardian đến Trái Đất. Bởi vậy
                      lúc này các Avengers buộc phải ngăn chặn hành động này của
                      người bạn, người đồng minh của họ. Tất nhiên, trong cuộc
                      chiến này, <strong>Captain America</strong> đã bị giết,
                      còn chiếc khiên thì bị phá hủy.
                    </p>
                    <h5>Ultron</h5>
                    <p>
                      Trong phiên bản truyện tranh của Age of Ultron , gã
                      android điên cuồng đã chiếm lĩnh Trái Đất (về cơ bản có
                      rất nhiều thực tại thay thế là nơi ai đó đã chiếm lấy thế
                      giới) và đội quân robot của hắn ta quét khắp thế giới để
                      tìm kiếm các Avengers.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/13/photo-5-1628822350813279705549.jpg"
                      alt="6, AVENGERS: ENDGAME,INFINITY GAUNTLET,CAPTAIN AMERICA,KHIÊN CỦA CAPTAIN AMERICA,KHIÊN CỦA CAPTAIN AMERICA BỊ VỠ,THANOS,"
                      note=""
                    />
                    <p>
                      Trong khi Ultron trở lại và kiểm soát cả thành phố New
                      York, những siêu anh hùng buộc phải tìm nơi ẩn náu sau
                      những thất bại của họ. Bên trong nơi ẩn náu mà độc giả có
                      thể thấy, một Steve Rogers đang ngồi cùng với tấm khiên
                      chỉ còn lại một mẩu.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Chúng ta không biết ai đã phá hủy chiếc khiên của Cap
                      trong thực tế này, chỉ biết rằng nó đã bị phá vỡ. Tuy
                      nhiên, người ta có thể cho rằng đó chính là Ultron.
                    </p>
                    <h5>Doctor Doom</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/13/photo-6-16288223533291912411949.jpg"
                      alt="7, AVENGERS: ENDGAME,INFINITY GAUNTLET,CAPTAIN AMERICA,KHIÊN CỦA CAPTAIN AMERICA,KHIÊN CỦA CAPTAIN AMERICA BỊ VỠ,THANOS,"
                      note=""
                    />
                    <p>
                      Doctor Doom được coi là một trong những nhân vật phản diện
                      thông minh bậc nhất của Marvel Universe và đã từng lừa cả
                      Beyonder, một thực thể với sức mạnh gần như vô hạn. Doom
                      đã ăn cắp sức mạnh của Beyonder và hạ gục rất nhiều siêu
                      anh hùng trong Marvel. Hắn thậm chí còn phá vỡ cả khiên
                      của <strong>Captain America</strong>, thứ được coi là biểu
                      tượng của sự bất khả xâm phạm trong Marvel.
                    </p>
                    <h5>Hyperion</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/13/photo-7-1628822352326775476744.jpg"
                      alt="8, AVENGERS: ENDGAME,INFINITY GAUNTLET,CAPTAIN AMERICA,KHIÊN CỦA CAPTAIN AMERICA,KHIÊN CỦA CAPTAIN AMERICA BỊ VỠ,THANOS,"
                      note=""
                    />
                    <p>
                      Trong vũ trụ truyện tranh, Hyperion đã từng đập vỡ chiếc
                      khiên của Cap, sự cố này cũng xảy ra trong một thực tế
                      khác, thực tế này được viếng thăm bởi phi hành đoàn từ
                      Exiles. Trong thực tế này, Hyperion tuyên bố mình là người
                      cai trị Trái Đất và sau đó giết tất cả các siêu anh hùng
                      đã cố gắng ngăn chặn anh ta. Khi{" "}
                      <strong>Captain America</strong> cố gắng làm vậy, hiển
                      nhiên Cap đã phải bỏ mạng và chiếc khiên cũng tan thành
                      từng mảnh.
                    </p>
                    <h5>Thanos</h5>
                    <p>
                      <strong>Avengers: Endgame</strong> không phải là lần đầu
                      tiên <strong>Thanos</strong> đập vỡ chiếc khiên của{" "}
                      <strong>Captain America</strong>. Trở lại The{" "}
                      <strong>Infinity Gauntlet</strong> năm 1991.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/13/photo-8-1628822352827702011935.jpg"
                      alt="9, AVENGERS: ENDGAME,INFINITY GAUNTLET,CAPTAIN AMERICA,KHIÊN CỦA CAPTAIN AMERICA,KHIÊN CỦA CAPTAIN AMERICA BỊ VỠ,THANOS,"
                      note=""
                    />
                    <p>
                      Câu chuyện bắt đầu khi bộ phim Infinity War kết thúc.{" "}
                      <strong>Thanos</strong> búng tay và xóa sổ một nửa sự sống
                      trong vũ trụ. Các siêu anh hùng còn sống sót đã quyết định
                      tấn công vào căn cứ của hắn dưới sự dẫn dắt của Adam
                      Warlock. Và trong cuộc chiến này, khi{" "}
                      <strong>Captain America</strong> cầm khiên lao vào Thanos,
                      gã Titan này đã phá nát chiếc khiên chỉ với một đòn duy
                      nhất rồi hạ gục luôn Captain America ngay sau đó.
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
