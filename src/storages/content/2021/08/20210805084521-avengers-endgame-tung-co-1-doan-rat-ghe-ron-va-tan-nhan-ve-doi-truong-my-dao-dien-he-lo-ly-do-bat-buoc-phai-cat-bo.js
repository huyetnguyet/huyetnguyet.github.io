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
"timestamp": '05/08/2021 08:45 AM',
"title": 'Avengers: Endgame từng có 1 đoạn rất ghê rợn và tàn nhẫn về Đội trưởng Mỹ, đạo diễn hé lộ lý do bắt buộc phải cắt bỏ',
"description": 'Trong cảnh phim này của Avengers: Endgame, Thanos đã thực sự chém đầu Đội trưởng Mỹ không khoan nhượng.',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/5/photo-1-1628139198044442413037.jpg',
"alt": 'Avengers: Endgame (2019),marvel,phim marvel,Captain America,Thanos,phim Âu Mỹ,vũ trụ điện ảnh marvel,',
"category": 'news',
"date": '05/08/2021',
"time": '08:45 AM',
"link": '/avengers-endgame-tung-co-1-doan-rat-ghe-ron-va-tan-nhan-ve-doi-truong-my-dao-dien-he-lo-ly-do-bat-buoc-phai-cat-bo',
"zcomponent": 'page_20210805084521',
"filepath": './20210805084521-avengers-endgame-tung-co-1-doan-rat-ghe-ron-va-tan-nhan-ve-doi-truong-my-dao-dien-he-lo-ly-do-bat-buoc-phai-cat-bo.js'
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
  "Avengers: Endgame từng có 1 đoạn rất ghê rợn và tàn nhẫn về Đội trưởng Mỹ, đạo diễn hé lộ lý do bắt buộc phải cắt bỏ";
const author = "HIEUTHUBA,";
const source = "Trí Thức Trẻ";
const timestamp = "05/08/2021 08:45 AM";
const description =
  "Trong cảnh phim này của Avengers: Endgame, Thanos đã thực sự chém đầu Đội trưởng Mỹ không khoan nhượng.";
const link =
  "avengers-endgame-tung-co-1-doan-rat-ghe-ron-va-tan-nhan-ve-doi-truong-my-dao-dien-he-lo-ly-do-bat-buoc-phai-cat-bo";
const tagparam = [
  "Avengers: Endgame (2019)",
  "marvel",
  "phim marvel",
  "Captain America",
  "Thanos",
  "phim Âu Mỹ",
  "vũ trụ điện ảnh marvel",
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

export default function page_20210805084521() {
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
                      Bom tấn lớn nhất của Vũ trụ Điện ảnh{" "}
                      <strong>Marvel</strong> (MCU) - Avengers: Endgame hóa ra
                      từng có một phân đoạn hoàn toàn khác, tàn bạo hơn rất
                      nhiều. Tuy nhiên sau nhiều suy tính, 2 đạo diễn của phim
                      đã quyết định không cho vào phim vì nó không tạo được hiệu
                      ứng như mong muốn. Cảnh phim bị loại ở Avengers: Endgame
                      sẽ cho thấy hình ảnh <strong>Captain America</strong>{" "}
                      bị... chặt đầu.
                    </p>
                    <p>
                      Cụ thể, cảnh phim này sẽ bao gồm <strong>Thanos</strong>{" "}
                      phiên bản 2014 tới xâm lăng Trái Đất và đánh nhau với hội
                      Avengers, trong khi cô con gái Nebula sẽ du hành tới năm
                      2023 để mở ra cánh cổng tới trận chiến cuối cùng.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/5/photo-1-16281390617761979944486.jpg"
                      alt="1, Avengers: Endgame (2019),marvel,phim marvel,Captain America,Thanos,phim Âu Mỹ,vũ trụ điện ảnh marvel,"
                      note="2 anh em nhà Russo là đạo diễn của Avengers: Endgame"
                    />
                    <p>
                      Khi ở trên Trái Đất, <strong>Thanos</strong> đáng lẽ đã
                      không chỉ giết <strong>Captain America</strong>, thêm vào
                      đó còn chặt lìa đầu của siêu anh hùng này. Sau đó, hắn ta
                      sẽ cầm chiếc đầu đó bước qua cánh cổng dịch chuyển để tới
                      năm 2023, ném nó trước mặt Captain American thời hiện tại.
                    </p>
                    <p>
                      Điều này có thể trở thành hiện thực vì theo quy luật của
                      MCU, việc thay đổi quá khứ sẽ không tạo ra "hiệu ứng cánh
                      bướm" mà thay vào đó, sẽ tạo ra một dòng thực tại mới.
                      Chính vì thế, <strong>Captain America</strong>n thời hiện
                      tại vẫn sống khỏe, nhưng sẽ phải nhìn thấy cái đầu của
                      mình bị quăng quật trong tay <strong>Thanos</strong>.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Cảnh phim bị "xóa sổ" này từng khiến nhiều khán giả hãi
                      hùng, tò mò vì nó có nội dung khác biệt hoàn toàn so với
                      những gì khán giả đã xem trong Avengers: Endgame. Khi trả
                      lời phỏng vấn tại sự kiện San Diego Comic-Con, cặp đôi đạo
                      diễn Anthony và Joe Russo đã hé lộ rằng họ phân vân rất
                      lâu, muốn giữ cảnh phim này và chỉ quyết định loại bỏ nó
                      khi biết nó không hiệu quả.
                    </p>
                    <p>
                      Đạo diễn Joe Russo chia sẻ: "Anthony và tôi đã bám lấy
                      concept này, rằng chúng tôi muốn <strong>Thanos</strong>{" "}
                      tiến tới hội Avengers và ném đầu của{" "}
                      <strong>Captain America</strong> xuống dưới đất. Chúng tôi
                      không thể từ bỏ ý tưởng ấy, rồi cuối cùng bàn bạc lại với
                      nhau, 'Được rồi, nếu không làm vậy thì sao? Có cách nào để
                      chuyển tới hồi 3 của phim không?' Và rồi mọi thứ trở nên
                      như bộ phim bây giờ."
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/5/photo-1-1628139198044442413037.jpg"
                      alt="2, Avengers: Endgame (2019),marvel,phim marvel,Captain America,Thanos,phim Âu Mỹ,vũ trụ điện ảnh marvel,"
                      note=""
                    />
                    <p>
                      Chính 2 biên kịch của Avengers: Endgame là Christopher
                      Markus và Stephen McFeely đã đính chính rằng họ không hề
                      có định giết hẳn nhân vật <strong>Captain America</strong>
                      . Mục đích của cảnh phim này chỉ là họ muốn cho Captain
                      America nhìn thấy cái đầu của mình. Tuy nhiên, biên kịch
                      Stephen McFeely cũng giải thích rằng ý tưởng này hóa ra
                      lại khá phức tạp, trong khi nội dung phim đã có nhiều điểm
                      khó hiểu với khán giả.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/5/photo-1-16281392377122044890947.jpg"
                      alt="3, Avengers: Endgame (2019),marvel,phim marvel,Captain America,Thanos,phim Âu Mỹ,vũ trụ điện ảnh marvel,"
                      note=""
                    />
                    <p>
                      Nếu sử dụng ý tưởng bị xóa sổ này, có lẽ Avengers: Endgame
                      sẽ không chỉ vô cùng rắc rối mà còn ghê rợn hơn rất nhiều!
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
