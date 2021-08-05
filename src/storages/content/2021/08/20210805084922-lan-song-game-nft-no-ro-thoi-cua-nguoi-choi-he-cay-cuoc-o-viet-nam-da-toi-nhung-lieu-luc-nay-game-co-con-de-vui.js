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
"timestamp": '05/08/2021 08:49 AM',
"title": 'Làn sóng game NFT nở rộ, thời của người chơi hệ "cày cuốc" ở Việt Nam đã tới nhưng liệu lúc này game có còn để vui?',
"description": 'Các tựa game NFT đa số đều chỉ phục vụ mục đích kiếm tiền của các game thủ thay vì tận hưởng niềm vui như trước.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/7/29/photo-1-16275550158302101498565.png',
"alt": 'TIN TỨC GAME,GAME THỦ,GAME,GAME NFT,',
"category": 'games',
"date": '05/08/2021',
"time": '08:49 AM',
"link": '/lan-song-game-nft-no-ro-thoi-cua-nguoi-choi-he-cay-cuoc-o-viet-nam-da-toi-nhung-lieu-luc-nay-game-co-con-de-vui',
"zcomponent": 'page_20210805084922',
"filepath": './20210805084922-lan-song-game-nft-no-ro-thoi-cua-nguoi-choi-he-cay-cuoc-o-viet-nam-da-toi-nhung-lieu-luc-nay-game-co-con-de-vui.js'
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
  'Làn sóng game NFT nở rộ, thời của người chơi hệ "cày cuốc" ở Việt Nam đã tới nhưng liệu lúc này game có còn để vui?';
const author = "Mặt Trứng";
const source = "Trí Thức Trẻ";
const timestamp = "05/08/2021 08:49 AM";
const description =
  "Các tựa game NFT đa số đều chỉ phục vụ mục đích kiếm tiền của các game thủ thay vì tận hưởng niềm vui như trước.";
const link =
  "lan-song-game-nft-no-ro-thoi-cua-nguoi-choi-he-cay-cuoc-o-viet-nam-da-toi-nhung-lieu-luc-nay-game-co-con-de-vui";
const tagparam = ["TIN TỨC GAME", "GAME THỦ", "GAME", "GAME NFT"];
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

export default function page_20210805084922() {
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
                      Bản chất của các tựa <strong>game</strong> khi ra đời gần
                      như chỉ phục vụ một mục đích duy nhất, mang tới niềm vui,
                      sự giải trí dành cho người chơi. Nhưng dần dần theo thời
                      gian, cùng với sự phát triển của ngành game, thuật ngữ này
                      cũng đã trở nên "biến tướng" hơn bao giờ hết. Có thể nhìn
                      thấy rõ nhất ở thị trường Việt Nam, khi kể từ thời mà
                      những tựa game MMORPG mang phong cách kiếm hiệp như Võ Lâm
                      Truyền Kỳ, Thiên Long Bát Bộ hay Kiếm Thế ra mắt, đã xuất
                      hiện không ít những thành phần dân cày, hay cao cấp hơn là
                      "dân buôn". Đó đều là cách gọi để ám chỉ những người sẽ
                      tìm cách kiếm lời thông qua tựa game mình đang chơi nhờ
                      vào việc mang tới các dịch vụ, vật phẩm đáp ứng nhu cầu
                      của các người chơi thông thường khác.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/29/photo-1-16275547086142111586795.jpg"
                      alt="1, TIN TỨC GAME,GAME THỦ,GAME,GAME NFT,"
                      note="Hệ thống dân buôn, dân cày bắt đầu được biết tới kể từ khi Võ Lâm Truyền Kỳ ra mắt"
                    />
                    <p>
                      Tất nhiên, điều này cũng dẫn tới thực trạng rất phổ biến
                      từng xảy ra trong quá khứ đó là tạo ra một loạt những acc
                      "clone" để tận dụng tối đa những tài nguyên từ trò chơi.
                      Dần dần, nó thật sự trở thành một vấn nạn tới mức mà đa số
                      những tựa <strong>game</strong> MMORPG hiện nay đều đã hạn
                      chế rất nhiều tính năng giao dịch trực tiếp giữa các nhân
                      vật, qua đó đánh một đòn mạnh vào các "dân cày" và hạn chế
                      tối đa sự hoạt động của nhóm <strong>game thủ</strong>{" "}
                      này.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/29/photo-1-16275550227232083551866.jpg"
                      alt="2, TIN TỨC GAME,GAME THỦ,GAME,GAME NFT,"
                      note="Axie Infinity - tựa game đang rất nổi ở thời điểm hiện tại"
                    />
                    <p>Và những diễn đàn "cày thuê" cũng mọc lên như nấm</p>
                    <p>
                      Nhưng rồi, với sự phát triển của các tựa{" "}
                      <strong>game</strong> NFT như thời điểm hiện tại, dân cày
                      lại thêm một lần nữa có dấu hiệu hồi sinh ở thị trường
                      Việt Nam. Chẳng cần nói đâu xa, Axie Infinity là một minh
                      chứng rõ ràng và cũng quen mặt với các{" "}
                      <strong>game thủ</strong> Việt nhất ở thời điểm hiện tại.
                      Đây được coi là một trong những tựa{" "}
                      <strong>game NFT</strong> thành công nhất, mang lại không
                      ít lợi nhuận cho người chơi. Tới mức mà ngay từ lúc này,
                      đã có cả một làn sóng "cày thuê" Axie Infinity xuất hiện.
                      Giá "cày thuê" cho game Axie Infinity hiện tại không hề rẻ
                      chút nào, dao động từ 2 đến 3 triệu VNĐ cho một tài khoản
                      theo như thông tin trên một số diễn đàn.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Và quả thật, trào lưu "Play to earn - chơi để kiếm tiền"
                      đã và đang thịnh hành hơn bao giờ hết qua sự thành công
                      của Axie Infinity. Nhiều{" "}
                      <strong>
                        <strong>game</strong> thủ
                      </strong>{" "}
                      nhìn nhận các tựa <strong>game NFT</strong> giờ đây như
                      một lựa chọn không thể phù hợp hơn khi vừa được chơi game,
                      vừa có thể tạo ra lợi nhuận. Và có lẽ chắc chẳng ai còn
                      quan tâm quá nhiều tới bản chất của các tựa game - chơi để
                      vui như trước.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/29/photo-1-16275552880992119713832.jpg"
                      alt="3, TIN TỨC GAME,GAME THỦ,GAME,GAME NFT,"
                      note="Chơi game để kiếm thu nhập đang là trào lưu hiện tại"
                    />
                    <p>
                      Bản chất các tựa <strong>game</strong> NFT đều khá đơn
                      giản khi chẳng có quá nhiều những phụ bản cầu kỳ, những
                      thử thách mang tính kiểm chứng người chơi. Về cơ bản, nó
                      chỉ là những cú click chuột cơ bản và chỉ cần làm quen tầm
                      1-2 lần, gần như ai cũng có thể nắm rõ. Thế nên, nếu như
                      hỏi rằng chơi <strong>game NFT</strong> có vui không thì
                      câu trả lời chắc chắn là không. Nhưng bù lại, nó có thể
                      mang tới lợi nhuận để thỏa mãn các "dân cày" chân chính.{" "}
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/29/photo-1-16275550158302101498565.png"
                      alt="4, TIN TỨC GAME,GAME THỦ,GAME,GAME NFT,"
                      note=""
                    />
                    <p>
                      Và <strong>game</strong> giờ đây đã trở thành công cụ,
                      không phải để giải trí mà mang thuần mục đích kiếm thu
                      nhập cho nhóm đối tượng này. Chưa biết liệu có thành công
                      mang lại thu nhập thật không, nhưng chắc chắn, sự hồn
                      nhiên và những điều thú vị khi trải nghiệm game của họ
                      cũng không còn và thuật ngữ <strong>game thủ</strong> có
                      lẽ cũng không nên dành cho những người này, khi với họ,
                      game là công cụ, công việc để tạo ra lợi nhuận mất rồi.
                      Cơn sốt tiền ảo tính ra đã góp phần "hủy hoại" làng game
                      thay vì nâng tầm nó như nhiều người thường nghĩ.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/29/photo-1-16275555885552060611114.jpg"
                      alt="5, TIN TỨC GAME,GAME THỦ,GAME,GAME NFT,"
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
