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
"timestamp": '04/08/2021 06:56 PM',
"title": 'Các phi tần tuẫn táng cùng hoàng đế khi được phát hiện chân luôn ở tư thế mở rộng, trước khi chết đã xảy ra chuyện gì?',
"description": 'Những gì mà các phi tần mỹ nữ phải tuẫn táng cùng hoàng đế phải chịu đựng trước khi chết sẽ được hé lộ.',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/2/-1627902134049205873274.jpg',
"alt": 'thời cổ đại,cung tần mỹ nữ,Trung Quốc,',
"category": 'news',
"date": '04/08/2021',
"time": '06:56 PM',
"link": '/cac-phi-tan-tuan-tang-cung-hoang-de-chan-khi-duoc-phat-hien-chan-luon-o-tu-the-mo-rong-truoc-khi-chet-da-xay-ra-chuyen-gi',
"zcomponent": 'page_20210804185649',
"filepath": './20210804185649-cac-phi-tan-tuan-tang-cung-hoang-de-chan-khi-duoc-phat-hien-chan-luon-o-tu-the-mo-rong-truoc-khi-chet-da-xay-ra-chuyen-gi.js'
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
  "Các phi tần tuẫn táng cùng hoàng đế khi được phát hiện chân luôn ở tư thế mở rộng, trước khi chết đã xảy ra chuyện gì?";
const author = "PHẠM TRANG,";
const source = "Pháp luật & Bạn đọc";
const timestamp = "04/08/2021 06:56 PM";
const description =
  "Những gì mà các phi tần mỹ nữ phải tuẫn táng cùng hoàng đế phải chịu đựng trước khi chết sẽ được hé lộ.";
const link =
  "cac-phi-tan-tuan-tang-cung-hoang-de-chan-khi-duoc-phat-hien-chan-luon-o-tu-the-mo-rong-truoc-khi-chet-da-xay-ra-chuyen-gi";
const tagparam = ["thời cổ đại", "cung tần mỹ nữ", "Trung Quốc"];
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

export default function page_20210804185649() {
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
                      Những hoàng đế <strong>thời cổ đại</strong> sau khi qua
                      đời sẽ chọn một số người thân cận nhất bồi táng cùng,
                      trong đó bao gồm cả những mỹ nữ trong hậu cung. Nhưng khi
                      nhìn qua những bức ảnh bồi táng trong lịch sử, không biết
                      bạn có nhận ra rằng, những phi tần mỹ nữ khi bị bồi táng
                      chân luôn mở rộng ra hai bên? Các nàng đã trải qua chuyện
                      gì trước khi chết?
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/2/-1627902137300542074028.jpg"
                      alt="4, thời cổ đại,cung tần mỹ nữ,Trung Quốc,"
                      note=""
                    />
                    <p>
                      Trong xã hội phong kiến, người thống trị tối cao nhất là
                      hoàng đế và đương nhiên đây cũng là người có nhiều{" "}
                      <strong>cung tần mỹ nữ</strong>, kẻ hầu người hạ nhất khi
                      còn ngồi trên ngai vàng. Thật ra trong hậu cung, ngoại trừ
                      hoàng hậu thì tất cả những cung phi khác cũng chỉ là nô
                      tỳ, nhưng có địa vị cao hơn một chút. Trong lịch sử, những
                      phi tần có thể an ổn sống đến già rồi chết đi không có
                      nhiều.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/2/-1627902134049205873274.jpg"
                      alt="1, thời cổ đại,cung tần mỹ nữ,Trung Quốc,"
                      note=""
                    />
                    <p>
                      Hoàng đế khi còn tại vị thì “tiền hô hậu ủng”, nắm trong
                      tay cả thiên hạ. Cho nên từ lúc vẫn còn tại thế đã nghĩ ra
                      các nghi thức tang lễ đầy mê tín, hy vọng sau khi chết đi
                      vẫn có thể tiếp tục cuộc sống như vậy. Một trong những
                      nghi thức ám ảnh nhất chính là dùng người làm vật bồi
                      táng. Các phi tần đều là những người được hoàng đế sủng ái
                      khi còn sống nên đương nhiên sẽ rất nhiều người lâm vào
                      cảnh thảm thương này.
                    </p>
                    <p>
                      Thực sự cuộc đời của họ không tốt đẹp như chúng ta tưởng
                      tượng. Bên cạnh những người vốn có xuất thân cao quý thì
                      cũng không ít cung tần đến từ những gia đình bình thường.
                      Để làm rạng danh gia tộc, họ sẽ ứng tuyển vào cung. Nếu
                      may mắn được hoàng thượng để mắt tới, phong là phi tần thì
                      lập tức cả gia tộc cũng sẽ trở thành hoàng thân quốc
                      thích. Trong <strong>thời cổ đại</strong> mà nói, việc này
                      có ý nghĩa vô cùng lớn. Ít nhất cả phần đời còn lại, gia
                      tộc của họ không còn phải vì tiền tài mà lo lắng.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/2/-1627902137727838048062.jpg"
                      alt="2, thời cổ đại,cung tần mỹ nữ,Trung Quốc,"
                      note=""
                    />
                    <p>
                      Sau khi vào cung, họ cũng chỉ là người bình thường, nếu
                      không cẩn thận chẳng may có lời nói hoặc hành động mạo
                      phạm thiên tử, hoặc chỉ động chạm đến hoàng hậu hay những
                      phi tần của gia đình quyền thế khác thì sau này sẽ rất khó
                      sống. Các nàng khi sống luôn phải luồn cúi, sau khi chết
                      đi còn có khả năng phải tuẫn táng cùng hoàng đế.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Tuẫn táng đã bi thảm nhưng cách tuẫn táng còn khiến người
                      ta cảm thấy kinh hãi hơn gấp vạn lần. Những người bị đem
                      đi tuẫn táng thường bị chuốc rượu độc hoặc sẽ bị đánh ngất
                      rồi trói chặt và bỏ vào trong quan tài. Một số người còn
                      bị dìm trong thủy ngân để phòng xác chết sẽ thối rữa.
                    </p>
                    <p>
                      Sau khi trải qua quá trình sát hại tàn nhẫn đó, các phi
                      tần dần chờ đợi cuộc đời mình kết thúc trong sự tăm tối
                      dưới lòng đất. Trong thời gian đó, bất cứ ai cũng sẽ vùng
                      vẫy. Điều này khiến chân của họ xuất hiện tình trạng co
                      giật, nên khi phát hiện ra thi thể mới thấy hai chân mở
                      rộng ra như vậy. Đây là câu trả lời chính xác nhất cho vấn
                      đề trên.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/2/-1627902137300542074028.jpg"
                      alt="3, thời cổ đại,cung tần mỹ nữ,Trung Quốc,"
                      note=""
                    />
                    <p>
                      Phương thức tuẫn táng tàn khốc như vậy mãi đến thời Khang
                      Hy mới được bãi bỏ. Ở thời điểm hiện tại, hình thức chôn
                      cất chủ yếu đã chuyển sang hỏa táng, cũng hoàn toàn không
                      còn tồn tại hủ tục đáng sợ như trên, mạng sống của tất cả
                      mọi người đều đáng quý và bình đẳng như nhau.
                    </p>
                    <p>Theo: Newqq</p>
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
