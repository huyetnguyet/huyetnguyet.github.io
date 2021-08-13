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
"timestamp": '08/08/2021 03:21 PM',
"title": 'Những hình phạt tàn độc do Võ Tắc Thiên nghĩ ra, "Ngọc nữ leo thang" trở thành cơn ác mộng của bất cứ ai',
"description": 'Những hình phạt do Võ Tắc Thiên sáng tạo ra đến cùng là ngoan độc đến nhường nào mới có thể khiến vạn người thuần phục như vậy?',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/8/20150204-020837-7041547560823743520x782-16283911549241546755802.jpg',
"alt": 'Võ Tắc Thiên,Lịch sử Trung Hoa,hành hình,',
"category": 'news',
"date": '08/08/2021',
"time": '03:21 PM',
"link": '/nhung-hinh-phat-tan-doc-do-vo-tac-thien-nghi-ra-ngoc-nu-leo-thang-tro-thanh-con-ac-mong-cua-bat-cu-ai',
"zcomponent": 'page_20210808152102',
"filepath": './20210808152102-nhung-hinh-phat-tan-doc-do-vo-tac-thien-nghi-ra-ngoc-nu-leo-thang-tro-thanh-con-ac-mong-cua-bat-cu-ai.js'
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
  'Những hình phạt tàn độc do Võ Tắc Thiên nghĩ ra, "Ngọc nữ leo thang" trở thành cơn ác mộng của bất cứ ai';
const author = "PHẠM TRANG,";
const source = "Doanh nghiệp và Tiếp thị";
const timestamp = "08/08/2021 03:21 PM";
const description =
  "Những hình phạt do Võ Tắc Thiên sáng tạo ra đến cùng là ngoan độc đến nhường nào mới có thể khiến vạn người thuần phục như vậy?";
const link =
  "nhung-hinh-phat-tan-doc-do-vo-tac-thien-nghi-ra-ngoc-nu-leo-thang-tro-thanh-con-ac-mong-cua-bat-cu-ai";
const tagparam = ["Võ Tắc Thiên", "Lịch sử Trung Hoa", "hành hình"];
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

export default function page_20210808152102() {
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
                      Như chúng ta đã biết, dọc chiều dài{" "}
                      <strong>lịch sử Trung Hoa</strong>,{" "}
                      <strong>Võ Tắc Thiên</strong> là nữ hoàng đế duy nhất. Để
                      có thể thống trị được vương triều chắc chắn là một hành
                      trình không hề dễ dàng, việc cả đất nước được đặt dưới
                      quyền cai trị của một người phụ nữ chắc chắn khiến cho
                      nhiều nam nhân không phục. Võ Tắc Thiên có thể ngồi vững
                      trên ngôi hoàng đế, ban đầu là nhờ thủ đoạn ngoan độc, sau
                      đó đã nghĩ ra vô số hình phạt tàn khốc để ổn định vị thế
                      của mình.
                    </p>
                    <p>
                      Trong số đó, hình phạt "Phượng hoàng phơi cánh" là hình
                      phạt oái oăm nhất. Ngoài ra còn có một hình phạt đặc biệt
                      dành riêng cho phụ nữ, được gọi là "Ngọc nữ leo thang"
                      khiến bất cứ người con gái nào nghe đến đều run rẩy.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/8/20150204-020837-7041547560823743520x782-16283911549241546755802.jpg"
                      alt="1, Võ Tắc Thiên,Lịch sử Trung Hoa,hành hình,"
                      note=""
                    />
                    <p>
                      Đầu tiên là hình phạt "Phượng hoàng phơi cánh". Hình phạt
                      này nghe qua có vẻ tao nhã nhưng nếu biết được cách thức
                      thực hiện của nó, chắc chắn ai cũng sẽ phải thay đổi suy
                      nghĩ. Vào thời điểm đó, "Phượng hoàng phơi cánh" là một
                      hình phạt tra tấn được xếp vào hàng kinh điển. Một đại
                      quan không chấp nhận bản thân phạm sai lầm, nhưng khi nghe
                      đến hình phạt này liền quỳ xuống nhận tội. Không ngoa khi
                      nói rằng, chỉ cần nghe đến đã khiến người ta sợ hãi không
                      thôi.
                    </p>
                    <p>
                      Vậy "Phượng hoàng phơi cánh" đáng sợ như nào? Đầu tiên sẽ
                      buộc người đó vào một cọc gỗ, hai tay mở rộng sang hai bên
                      và cố định phần chân. Chiếc cọc gỗ này được chia làm 2
                      nữa, một nửa trên có thể xoay tròn chuyển động nhưng nửa
                      dưới lại được cố định. Sau đó, phần trên của cọc sẽ quay.
                      Bằng cách này, phần thắt lưng của tù nhân chịu phạt sẽ bị
                      vặn xoắn theo chuyển động của phần cọc phía trên, thắt
                      lưng gãy rời. Dù đơn giản nhưng vô cùng kinh hãi.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/8/641-16283911549441185134585.jpg"
                      alt="2, Võ Tắc Thiên,Lịch sử Trung Hoa,hành hình,"
                      note=""
                    />
                    <p>
                      Khi ấy, <strong>Võ Tắc Thiên</strong> còn phát minh ra một
                      hình phạt khác dành riêng cho phụ nữ với cái tên mỹ miều -
                      Ngọc nữ leo thang. Tuy nhiên, so với "Phượng hoàng phơi
                      cánh" thì còn tàn độc hơn rất nhiều. Vì Võ Tắc Thiên cũng
                      là phụ nữ nên bà ta rất biết cách làm thế nào để một người
                      phụ nữ sống không bằng chết. Hình phạt này khiến bất cứ
                      người phụ nữ nào nghe xong cũng run chân.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Hình phạt này là cởi bỏ quần áo của người bị tra tấn, sau
                      đó treo cổ lên sợi dây thừng buộc ngang thanh xà. Sợi dây
                      thừng này hoạt động theo một nguyên lý, càng giãy giụa sẽ
                      càng thắt chặt vào cổ. Chưa dừng lại ở đó, họ sẽ để cô gái
                      này leo lên một chiếc thang khá mảnh trên mặt đất. Bên
                      dưới còn có bàn chông với nhiều gai sắc nhọn. Nếu không
                      thể giữ người trên chiếc thang đó, sẽ lập tức ngã xuống
                      bàn chông và chết. Nếu không cũng sẽ dần bị siết cổ đến
                      chết.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/8/1200us1ru-16283911549791373922879-1628391236475154339110.jpg"
                      alt="3, Võ Tắc Thiên,Lịch sử Trung Hoa,hành hình,"
                      note=""
                    />
                    <p>
                      Ngoài hai hình phạt này, có rất nhiều hình phạt tàn nhẫn
                      khác. Phải nói, <strong>Võ Tắc Thiên</strong> là một người
                      phụ nữ tàn độc thâm sâu. Điều này cũng chứng minh cho câu
                      "Nữ nhân không ngoan độc, địa vị bất ổn". Nhưng cũng chính
                      nhờ những hình phạt này mà Võ Tắc Thiên mới có thể cai trị
                      tốt nhà Đường, củng cố địa vị bản thân, không ai dám nổi
                      loạn.
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
