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
"timestamp": '29/07/2021 04:15 PM',
"title": '9 điểm "phi logic" từ Harry Potter: Voldemort có thể bị hạ gục đơn giản, nhà ngục Azkaban chắc chắn có vấn đề!',
"description": 'Có những thắc mắc lạ lùng mà ngay cả fan cứng Harry Potter cũng phải lắc đầu không giải thích được.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/7/8/photo-1-16257387231192055409347.jpg',
"alt": 'AZKABAN,NHÀ NGỤC AZKABAN,HARRY POTTER,VOLDEMORT,CHI TIẾT PHI LÝ TRONG HARRY POTTER,',
"category": 'news',
"date": '29/07/2021',
"time": '04:15 PM',
"link": '/9-diem-phi-logic-tu-harry-potter-voldemort-co-the-bi-ha-guc-don-gian-nha-nguc-azkaban-chac-chan-co-van-de',
"zcomponent": 'page_20210729161530',
"filepath": './20210729161530-9-diem-phi-logic-tu-harry-potter-voldemort-co-the-bi-ha-guc-don-gian-nha-nguc-azkaban-chac-chan-co-van-de.js'
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
  '9 điểm "phi logic" từ Harry Potter: Voldemort có thể bị hạ gục đơn giản, nhà ngục Azkaban chắc chắn có vấn đề!';
const author = "CHI PHẠM";
const source = "Trí thức trẻ";
const timestamp = "29/07/2021 04:15 PM";
const description =
  "Có những thắc mắc lạ lùng mà ngay cả fan cứng Harry Potter cũng phải lắc đầu không giải thích được.";
const link =
  "9-diem-phi-logic-tu-harry-potter-voldemort-co-the-bi-ha-guc-don-gian-nha-nguc-azkaban-chac-chan-co-van-de";
const tagparam = [
  "AZKABAN",
  "NHÀ NGỤC AZKABAN",
  "HARRY POTTER",
  "VOLDEMORT",
  "CHI TIẾT PHI LÝ TRONG HARRY POTTER",
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

export default function page_20210729161530() {
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
            <AdsHorizontal />
            <div className="content">
              <div className="contentContainer">
                <p className="description">{description}</p>
                <RelationNews category={category} />
                <div className="desktop">
                  <AdsHorizontal />
                </div>
                <div className="contentBody">
                  <p>
                    Với hệ thống nhân vật dày đặc và dòng thời gian khổng lồ,
                    loạt phim <strong>Harry Potter</strong> cho đến nay vẫn làm
                    người xem tò mò bởi nhiều bí ẩn chưa được bật mí. Dẫu biết
                    cái gì thuộc về giả tưởng thì không thể nào sát với hiện
                    thực. Vậy mà một số khán giả của Harry Potter vẫn chỉ ra vô
                    số điều thắc mắc, phần lớn liên quan đến thế giới phù thủy,
                    hoặc ít nhiều liên hệ tới cuộc sống "Muggle" hiện đại. Nếu
                    bạn cũng quan tâm đến học viện Hogwarts và hội bạn Harry -
                    Ron - Hermione thì hãy thử trả lời cho "1001 câu hỏi vì sao"
                    sau đây, biết đâu lại có lời giải thích xứng đáng!
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/8/f3647463566427a45452d5f6872513d3d2d3630313930373936312e313534303332393339376431316432633733353232383439353937362e676966-16255007074171927545241-1625738582749478787170.gif"
                    alt="1, AZKABAN,NHÀ NGỤC AZKABAN,HARRY POTTER,VOLDEMORT,CHI TIẾT PHI LÝ TRONG HARRY POTTER,"
                    note="Bạn có hay thắc mắc về vũ trụ Harry Potter?"
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/8/photo-1-1625738597851256276076.jpg"
                    alt="2, AZKABAN,NHÀ NGỤC AZKABAN,HARRY POTTER,VOLDEMORT,CHI TIẾT PHI LÝ TRONG HARRY POTTER,"
                    note="Nếu có vũ khí hiện đại của dân Muggle thì hẳn Voldemort đã bị tiêu diệt rất nhanh gọn"
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/8/4c3e875acc88eb82996f522fe33c3ebd-1625500968032752712361-16257386111891943941331.gif"
                    alt="3, AZKABAN,NHÀ NGỤC AZKABAN,HARRY POTTER,VOLDEMORT,CHI TIẾT PHI LÝ TRONG HARRY POTTER,"
                    note="Lẽ ra phụ huynh nên tìm hiểu kỹ về bảo hiểm và các vấn đề an toàn khi cho con em theo học tại Hogwarts, bởi lẽ đây là trận địa của rất nhiều cuộc chiến nguy hiểm, đã vậy còn có nguy cơ gặp quái vật"
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/8/tumblrinlinen7fxibcybq1raitd9540-1625501316528833586129-16257386384051023054235.gif"
                    alt="4, AZKABAN,NHÀ NGỤC AZKABAN,HARRY POTTER,VOLDEMORT,CHI TIẾT PHI LÝ TRONG HARRY POTTER,"
                    note="Giả sử bạn là phụ huynh của Hermione thì có lo lắng không khi con mình bị quái vật tấn công trong nhà vệ sinh?"
                  />
                  <p>
                    Dường như học viện Hogwarts không mấy đề cập đến tình hình
                    tài chính, vậy thì ai trả lương cho giáo viên, chưa kể là
                    chi phí đắt đỏ để sửa chữa cơ sở vật chất?
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/8/photo-1-16257385597531812861283.png"
                    alt="5, AZKABAN,NHÀ NGỤC AZKABAN,HARRY POTTER,VOLDEMORT,CHI TIẾT PHI LÝ TRONG HARRY POTTER,"
                    note="Toàn bộ công việc tại Hogwarts chẳng lẽ dựa vào đội ngũ gia tinh làm việc không công?"
                  />
                  <p>
                    Thế giới phù thủy trong <strong>Harry Potter</strong> có
                    thần chú, chổi bay và độc dược, nhưng còn phương tiện giải
                    trí thì sao?
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/8/photo-1-1625738563940182864509.jpg"
                    alt="6, AZKABAN,NHÀ NGỤC AZKABAN,HARRY POTTER,VOLDEMORT,CHI TIẾT PHI LÝ TRONG HARRY POTTER,"
                    note="Thử tưởng tượng dân phù thủy làm phim với tất cả hiệu ứng này xem!"
                  />
                  <p>
                    Họ có thể tạo ra rất nhiều dịch vụ thú vị nhờ vào phép
                    thuật, chẳng hạn như: rạp chiếu phim thực tế ảo, gameshow
                    tương tác qua màn hình, công viên giải trí thần kỳ nhất quả
                    đất…
                  </p>
                  <RelationNewsInPage category={category} />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/8/afe459d4d4ef761d239542733227fc8c-16255018133481416719325-16257386692061659758430.gif"
                    alt="7, AZKABAN,NHÀ NGỤC AZKABAN,HARRY POTTER,VOLDEMORT,CHI TIẾT PHI LÝ TRONG HARRY POTTER,"
                    note="Đúng là cánh tay gãy của Harry Potter từng được chữa lành nhờ thần chú"
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/8/tumblre8462e5c5ba9e303ad17d0eff5ecc66bfca9660e500-16255021156051160153232-16257386869731687848453.gif"
                    alt="8, AZKABAN,NHÀ NGỤC AZKABAN,HARRY POTTER,VOLDEMORT,CHI TIẾT PHI LÝ TRONG HARRY POTTER,"
                    note="Vậy còn những bệnh lây nhiễm như COVID-19 thì sao? Sẽ có thần chú mới hay không có tác động nào đến dòng máu phù thủy thuần chủng?"
                  />
                  <p>
                    Vấn đề này từng được đề cập ở phiên bản tiểu thuyết. Khi đó
                    con của Ron và Hermione tự hỏi vì sao mọi người lại nhìn
                    chằm chằm vào gia đình mình, và Ron thừa nhận mình là người
                    nổi tiếng.
                  </p>
                  <p>
                    Để đào tạo nên những phù thủy ưu tú, có thể hòa nhập vào thế
                    giới hiện đại thì trường Hogwart nên trang bị thêm nhiều môn
                    học cơ bản và ít nhiều tương tự với thế giới Muggle. Dẫu sao
                    thế giới này vẫn đang được điều hành bởi xã hội Muggle khoa
                    học, vậy nên chương trình học nặng về phép thuật có thể làm
                    giới phù thủy "lạc hậu".
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/8/photo-2-1625738563486687426864.jpg"
                    alt="9, AZKABAN,NHÀ NGỤC AZKABAN,HARRY POTTER,VOLDEMORT,CHI TIẾT PHI LÝ TRONG HARRY POTTER,"
                    note="Hiệu trưởng Dumbledore thọ 115 tuổi khi qua đời, vậy nhưng cả truyện lẫn phim đều không nhắc gì về lý do ông sống lâu tới vậy"
                  />
                  <p>
                    <strong>Azkaban</strong> được cho là chỉ có tù nhân và Giám
                    Ngục bên trong. Vậy chẳng lẽ khu vực nhà bếp cũng do một tay
                    Giám Ngục quản lý? Nếu không thì quả thực Azkaban là một nơi
                    kinh dị vì để cho tù nhân đói lả…
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/8/photo-1-1625738709444747805461.jpg"
                    alt="10, AZKABAN,NHÀ NGỤC AZKABAN,HARRY POTTER,VOLDEMORT,CHI TIẾT PHI LÝ TRONG HARRY POTTER,"
                    note="Azkaban là một nhà ngục kinh hoàng nơi tù nhân bị đày đọa cả về thể xác lẫn tinh thần"
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/8/photo-1-16257387231192055409347.jpg"
                    alt="11, AZKABAN,NHÀ NGỤC AZKABAN,HARRY POTTER,VOLDEMORT,CHI TIẾT PHI LÝ TRONG HARRY POTTER,"
                    note=""
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/8/photo-3-16257385613971002434548.jpg"
                    alt="12, AZKABAN,NHÀ NGỤC AZKABAN,HARRY POTTER,VOLDEMORT,CHI TIẾT PHI LÝ TRONG HARRY POTTER,"
                    note=""
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/8/photo-4-16257385619631515984871.png"
                    alt="13, AZKABAN,NHÀ NGỤC AZKABAN,HARRY POTTER,VOLDEMORT,CHI TIẾT PHI LÝ TRONG HARRY POTTER,"
                    note=""
                  />
                  <p>Nguồn ảnh: Universal Studios</p>
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
