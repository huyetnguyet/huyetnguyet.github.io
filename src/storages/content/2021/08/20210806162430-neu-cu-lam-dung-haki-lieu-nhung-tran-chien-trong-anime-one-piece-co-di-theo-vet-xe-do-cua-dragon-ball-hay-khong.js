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
"timestamp": '06/08/2021 04:24 PM',
"title": 'Nếu cứ lạm dụng Haki liệu những trận chiến trong anime One Piece có đi theo "vết xe đổ" của Dragon Ball hay không?',
"description": 'Thời gian gần đây nhiều khán giả hâm mộ anime One Piece phàn nàn về việc Haki đang được các nhà làm phim khai thác quá đà.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/8/6/hai1-16282411964212135704424.jpg',
"alt": 'ONE PIECE,MANGA ONE PIECE,ANIME ONE PIECE,RORONOA ZORO,LUFFY VS LUCCI,EIICHIRO ODA,FAN ONE PIECE,CỘNG ĐỒNG ONE PIECE,NHỮNG NGƯỜI SỞ HỮU HAKI BÁ VƯƠNG,TỨ HOÀNG KAIDO,TỨ HOÀNG BIG MOM,KAIDO VÀ BIG MOM,',
"category": 'games',
"date": '06/08/2021',
"time": '04:24 PM',
"link": '/neu-cu-lam-dung-haki-lieu-nhung-tran-chien-trong-anime-one-piece-co-di-theo-vet-xe-do-cua-dragon-ball-hay-khong',
"zcomponent": 'page_20210806162430',
"filepath": './20210806162430-neu-cu-lam-dung-haki-lieu-nhung-tran-chien-trong-anime-one-piece-co-di-theo-vet-xe-do-cua-dragon-ball-hay-khong.js'
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
  'Nếu cứ lạm dụng Haki liệu những trận chiến trong anime One Piece có đi theo "vết xe đổ" của Dragon Ball hay không?';
const author = "Sầu Thiên Thu";
const source = "Trí Thức Trẻ";
const timestamp = "06/08/2021 04:24 PM";
const description =
  "Thời gian gần đây nhiều khán giả hâm mộ anime One Piece phàn nàn về việc Haki đang được các nhà làm phim khai thác quá đà.";
const link =
  "neu-cu-lam-dung-haki-lieu-nhung-tran-chien-trong-anime-one-piece-co-di-theo-vet-xe-do-cua-dragon-ball-hay-khong";
const tagparam = [
  "ONE PIECE",
  "MANGA ONE PIECE",
  "ANIME ONE PIECE",
  "RORONOA ZORO",
  "LUFFY VS LUCCI",
  "EIICHIRO ODA",
  "FAN ONE PIECE",
  "CỘNG ĐỒNG ONE PIECE",
  "NHỮNG NGƯỜI SỞ HỮU HAKI BÁ VƯƠNG",
  "TỨ HOÀNG KAIDO",
  "TỨ HOÀNG BIG MOM",
  "KAIDO VÀ BIG MOM",
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

export default function page_20210806162430() {
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
                      Một điều dễ nhận thấy trong <strong>One Piece</strong> đó
                      là khi bộ truyện này đi dần về những arc cuối cùng thì sức
                      mạnh Haki cũng được làm rõ. Trước đây chúng ta xuýt xoa
                      bao nhiêu trước màn đối chiến mãn nhãn giữa Luffy và Lucci
                      thì giờ đây những cuộc chiến sẽ kết thúc một cách khá
                      nhanh gọn bởi Haki. Nếu vận dụng tốt Haki quan sát, Haki
                      vũ trang và đặc biệt là Haki bá vương, đối thủ sẽ bị đánh
                      bại chỉ trong tích tắc.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/6/hai1-16282411964212135704424.jpg"
                      alt="1, ONE PIECE,MANGA ONE PIECE,ANIME ONE PIECE,RORONOA ZORO,LUFFY VS LUCCI,EIICHIRO ODA,FAN ONE PIECE,CỘNG ĐỒNG ONE PIECE,NHỮNG NGƯỜI SỞ HỮU HAKI BÁ VƯƠNG,TỨ HOÀNG KAIDO,TỨ HOÀNG BIG MOM,KAIDO VÀ BIG MOM,"
                      note=""
                    />
                    <p>
                      Không phủ nhận một thực tế rằng trước đây khi Oda chưa
                      nghĩ ra khái niệm Haki, những trận chiến của băng Mũ Rơm
                      nói chung và cá nhân Luffy nói riêng đều là những màn đấu
                      chiến hấp dẫn và nhiều cảm xúc. Hẳn đến bây giờ nhiều khán
                      giả vẫn đồng ý rằng trận chiến tay không giữa Luffy và
                      Lucci là một trong những cuộc đối đầu hấp dẫn nhất trong
                      anime <strong>One Piece</strong>.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/6/hai2-1628241200603591452495.jpg"
                      alt="2, ONE PIECE,MANGA ONE PIECE,ANIME ONE PIECE,RORONOA ZORO,LUFFY VS LUCCI,EIICHIRO ODA,FAN ONE PIECE,CỘNG ĐỒNG ONE PIECE,NHỮNG NGƯỜI SỞ HỮU HAKI BÁ VƯƠNG,TỨ HOÀNG KAIDO,TỨ HOÀNG BIG MOM,KAIDO VÀ BIG MOM,"
                      note=""
                    />
                    <p>
                      Thế nhưng phải khách quan mà nói rằng, Oda đã đúng khi
                      phát triển khái niệm Haki và sử dụng thứ sức mạnh này là
                      thước đo của những hải tặc mạnh mẽ nhất. Hiện tại Wano arc
                      đang là trận chiến dai dẳng và trải qua nhiều chap nhất
                      trong tất cả các arc. Một nơi như Wano sẽ không có chỗ cho
                      những kẻ yếu đuối, nơi mà kết quả sẽ được định đoạt ngay
                      lập tức nếu như bạn không đủ sức mạnh và Haki để có thể
                      đối đầu với những hải tặc thuộc hàng "quái vật" như Big
                      Mom hay Kaido. Trường hợp của Luffy trước Kaido là một ví
                      dụ điển hình, chỉ cần một đòn bọc Haki bá vương, Kaido đã
                      2 lần khiến Luffy bất tỉnh.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Oda đã đúng trong việc đưa Haki vào mạch truyện của{" "}
                      <strong>One Piece</strong> và phát triển sức mạnh này đến
                      thời điểm hiện tại thì câu hỏi đặt ra là các nhà làm phim
                      anime sẽ bằng cách nào để biến những trận chiến này không
                      đi vào "vết xe đổ" của Dragon Ball. Nhìn sang bộ anime nổi
                      tiếng về Son Goku, những trận chiến ban đầu cũng hết sức
                      gay cấn và chân thực nhưng càng về sau, khi sức mạnh ngày
                      càng được tăng cao, đôi khi người xem có cảm giác Dragon
                      Ball là một bộ anime với những trận chiến màu mè và đôi
                      khi là "hơi ảo" so với cảm xúc cũng như sự mong chờ của
                      khán giả.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/6/hai4-16282412118001570410361.jpg"
                      alt="3, ONE PIECE,MANGA ONE PIECE,ANIME ONE PIECE,RORONOA ZORO,LUFFY VS LUCCI,EIICHIRO ODA,FAN ONE PIECE,CỘNG ĐỒNG ONE PIECE,NHỮNG NGƯỜI SỞ HỮU HAKI BÁ VƯƠNG,TỨ HOÀNG KAIDO,TỨ HOÀNG BIG MOM,KAIDO VÀ BIG MOM,"
                      note=""
                    />
                    <p>
                      Trở lại với phần anime arc Wano, công bằng mà nói hiện tại
                      các nhà làm phim đang tái hiện rất tốt không khí của trận
                      hải chiến vĩ đại này và màn đối đầu đỉnh cao của những hải
                      tặc mạnh nhất. Ngoài một vài tình huống "cầm đèn chạy
                      trước ô tô" đi vào lòng đất như việc để Zoro bộc lộ Haki
                      bá vương quá sớm thì xét về tổng quát, arc Wano đang được
                      đầu tư về mặt hình ảnh, tạo hình nhân vật, âm nhạc và phối
                      màu rất hiện đại và bắt mắt. Tuy nhiên ranh giới giữa
                      những trận chiến được tô điểm và những cuộc đối đầu màu
                      mè, làm quá lố là rất mong manh. Hy vọng rằng anime của
                      arc Wano nói riêng cũng như <strong>One Piece</strong> nói
                      chung sẽ được xây dựng đúng hướng trong tương lai. Các bạn
                      thấy sao về điều này, hãy để lại ý kiến của mình nhé!
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/6/hai3-16282412052981043995023.jpg"
                      alt="4, ONE PIECE,MANGA ONE PIECE,ANIME ONE PIECE,RORONOA ZORO,LUFFY VS LUCCI,EIICHIRO ODA,FAN ONE PIECE,CỘNG ĐỒNG ONE PIECE,NHỮNG NGƯỜI SỞ HỮU HAKI BÁ VƯƠNG,TỨ HOÀNG KAIDO,TỨ HOÀNG BIG MOM,KAIDO VÀ BIG MOM,"
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
