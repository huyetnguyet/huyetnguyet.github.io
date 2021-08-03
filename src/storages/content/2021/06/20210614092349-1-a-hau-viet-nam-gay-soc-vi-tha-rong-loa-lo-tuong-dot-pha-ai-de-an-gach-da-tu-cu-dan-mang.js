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
"timestamp": '14/06/2021 09:23 AM',
"title": '1 Á hậu Việt Nam gây sốc vì mốt "thả rông", tưởng đột phá ai dè nhận "gạch đá" từ cư dân mạng',
"description": 'Hỡi những tín đồ thời trang! Đừng lên đồ như cô Á hậu này bởi mốt "no bra" không phải thứ vũ khí linh hoạt tới mức có thể áp dụng trên mọi trang phục.',
"src": 'https://raw.githubusercontent.com/huyetnguyet/huyetnguyet.github.io/main/src/storages/images/content/2021/20210614092349--10-271654.jpg',
"alt": 'A Hau Viet Nam, Thuy An, A Hau Thuy An, Loa Lo, Sao Xau, Sao Dep, Sao Do Thoi Trang, ',
"category": 'images',
"date": '14/06/2021',
"time": '09:23 AM',
"link": '/1-a-hau-viet-nam-gay-soc-vi-tha-rong-loa-lo-tuong-dot-pha-ai-de-an-gach-da-tu-cu-dan-mang',
"zcomponent": 'page_20210614092349',
"filepath": './20210614092349-1-a-hau-viet-nam-gay-soc-vi-tha-rong-loa-lo-tuong-dot-pha-ai-de-an-gach-da-tu-cu-dan-mang.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "images";
const categoryLink = "/images";
const title =
  '1 Á hậu Việt Nam gây sốc vì mốt "thả rông", tưởng đột phá ai dè nhận "gạch đá" từ cư dân mạng';
const author = "LÝ THẨM,";
const source = "Pháp luật & Bạn đọc";
const timestamp = "14/06/2021 09:23 AM";
const description =
  'Hỡi những tín đồ thời trang! Đừng lên đồ như cô Á hậu này bởi mốt "no bra" không phải thứ vũ khí linh hoạt tới mức có thể áp dụng trên mọi trang phục.';
const link =
  "1-a-hau-viet-nam-gay-soc-vi-tha-rong-loa-lo-tuong-dot-pha-ai-de-an-gach-da-tu-cu-dan-mang";
const tagparam = [
  "a-hau-viet-nam",
  "thuy-an",
  "a-hau-thuy-an",
  "loa-lo",
  "sao-xau",
  "sao-dep",
  "sao-do-thoi-trang",
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

export default function page_20210614092349() {
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
                      Thuý An là Á hậu 2 của cuộc thi Hoa hậu Việt Nam 2018,
                      đăng quang đã 3 năm có lẻ nhưng chẳng mấy ai biết nàng là
                      ai, đơn giản vì Thuý An hầu như không có lấy 1 hoạt động
                      trội bật để người đời khắc cốt ghi tâm.
                    </p>
                    <p>
                      <ContentImage
                        src={
                          require("storages/images/content/2021/20210614092349--10-271654.jpg")
                            .default
                        }
                        alt="A Hau Viet Nam, Thuy An, A Hau Thuy An, Loa Lo, Sao Xau, Sao Dep, Sao Do Thoi Trang, "
                        note="
                      Nhưng mới đây, nàng đã khiến người ta biết mình là ai theo 1
                      cách hơi ồn ào."
                      />
                    </p>
                    <p>
                      Mái tóc lai giữa tóc ép và tóc dập xù, mọc tua tủa 1 cách
                      ngẫu hứng không theo lề lối, cộng thêm mẫu thiết kế bờm
                      tóc đã có niên đại từ thuở bao cấp khiến hình ảnh của Thuý
                      An không đẹp xinh như mọi ngày. Nhưng điểm chết người nhất
                      ở cả outfit lại là cách nàng Á hậu kết hợp mốt "no bra"
                      với bộ suit từ chất liệu tweed này. Việc thiên về khoe
                      vòng 1 đã đem về cho phong cách của Thuý An nhiều lời chê
                      hơn là những lời khen.
                    </p>
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210614092349--11-569711.jpg")
                          .default
                      }
                      alt="A Hau Viet Nam, Thuy An, A Hau Thuy An, Loa Lo, Sao Xau, Sao Dep, Sao Do Thoi Trang, "
                      note=""
                    />
                    <p>Bình luận của netizen:</p>
                    <p>- "Không hề đẹp luôn!".</p>
                    <p>
                      - "Không hiểu phanh ngực như vậy làm gì, như thế này giống
                      kiểu khoe thân hơn là trở nên gợi cảm".
                    </p>
                    <p>- "Khá là phản cảm, không gợi cảm lắm đâu".</p>
                    <p>
                      - "Có phải mỗi mình tôi thấy bộ tóc và chiếc bờm quá lỗi
                      mốt và khó hiểu không?".
                    </p>
                    <p>
                      Sao Đỏ Thời Trang kết luận: Giơ cao đánh khẽ nhé! Có lẽ là
                      màn "lột xác", công cuộc cải cách về hình ảnh để Thuý An
                      thoát ra khỏi hình tượng Á hậu xưa cũ, tuy nhiên nàng vẫn
                      nên cân nhắc hơn 1 chút nữa về hướng thay đổi này bởi nhìn
                      vào ảnh hình kể trên, có ít những người công tâm nào dám
                      khẳng định đây là 1 nước đi đúng đắn.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Vậy cách để "thả rông" khi mặc suit 1 cách văn minh, tôn
                      trọng người nhìn và không xúc phạm cảm xúc của người xung
                      quanh là gì? Không Mặc Xấu xin phép đưa 1 vài gợi ý sau:
                    </p>
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210614092349--12-88860.jpeg")
                          .default
                      }
                      alt="A Hau Viet Nam, Thuy An, A Hau Thuy An, Loa Lo, Sao Xau, Sao Dep, Sao Do Thoi Trang, "
                      note=""
                    />
                    <p>
                      - Nên chọn những dáng suit menswear nam tính, có phần gai
                      góc vì nét mạnh mẽ vốn có của dáng suit này lại cực kỳ hợp
                      với mốt "no bra". Nói sao nhỉ! Bởi vì nam giới có bao giờ
                      mặc áo lót đâu!
                    </p>
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210614092349--13-05915.jpeg")
                          .default
                      }
                      alt="A Hau Viet Nam, Thuy An, A Hau Thuy An, Loa Lo, Sao Xau, Sao Dep, Sao Do Thoi Trang, "
                      note=""
                    />
                    <p>
                      - Chọn vải vóc đứng dáng, có độ cứng cáp vừa đủ giúp duy
                      trì phom dáng bộ đồ. Chất vải càng mềm và dễ nhăn, càng èo
                      uột thì khả năng "fail" càng cao.
                    </p>
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210614092349--14-37614.jpeg")
                          .default
                      }
                      alt="A Hau Viet Nam, Thuy An, A Hau Thuy An, Loa Lo, Sao Xau, Sao Dep, Sao Do Thoi Trang, "
                      note=""
                    />
                    <p>
                      - Dẫu thả rông thì cũng nên dán cái miếng che nhũ hoa để
                      tránh tình huống "tai nạn" nhé!
                    </p>
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210614092349--15-24063.jpeg")
                          .default
                      }
                      alt="A Hau Viet Nam, Thuy An, A Hau Thuy An, Loa Lo, Sao Xau, Sao Dep, Sao Do Thoi Trang, "
                      note=""
                    />
                    <p>Ảnh: Sưu tầm</p>
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
