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
"timestamp": '29/07/2021 04:20 PM',
"title": 'Những loài quái vật kỳ quái trong truyền thuyết châu Á',
"description": 'Với trí tưởng tượng độc đáo, người châu Á đã tưởng tượng ra rất nhiều con quái vật ma quái và có phần dị hợm vô cùng.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/7/19/-16266845034714681647.jpg',
"alt": 'QUÁI VẬT,YÊU QUÁI,',
"category": 'news',
"date": '29/07/2021',
"time": '04:20 PM',
"link": '/nhung-loai-quai-vat-ky-quai-trong-truyen-thuyet-chau-a',
"zcomponent": 'page_20210729162037',
"filepath": './20210729162037-nhung-loai-quai-vat-ky-quai-trong-truyen-thuyet-chau-a.js'
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
const title = "Những loài quái vật kỳ quái trong truyền thuyết châu Á";
const author = "DS";
const source = "Trí Thức Trẻ";
const timestamp = "29/07/2021 04:20 PM";
const description =
  "Với trí tưởng tượng độc đáo, người châu Á đã tưởng tượng ra rất nhiều con quái vật ma quái và có phần dị hợm vô cùng.";
const link = "nhung-loai-quai-vat-ky-quai-trong-truyen-thuyet-chau-a";
const tagparam = ["QUÁI VẬT", "YÊU QUÁI"];
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

export default function page_20210729162037() {
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
                    <h5>1. Nue</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/19/-16266845034714681647.jpg"
                      alt="1, QUÁI VẬT,YÊU QUÁI,"
                      note=""
                    />
                    <p>
                      {" "}
                      <strong>Quái vật</strong> Nue là một sản phẩm tưởng tượng
                      tới từ thần thoại Nhật Bản. Trong truyền thuyết, Nue là
                      một con vật to lớn, hình thù dị hợm, mang trên mình bộ
                      phận của tất cả các loài vật khác. Quái vật Nue.Người ta
                      kể rằng, năm 1153, hoàng đế Konoe gặp những cơn ác mộng
                      mỗi đêm và đổ bệnh. Sau này, một người tài giỏi là
                      Yorimasu Minamoto phát hiện ra mỗi khi vua ngủ, một đám
                      mây đen lại bay tới trên cung điện. Ông ta bắn tên vào đó,
                      một con Nue chết và vua Konoe khỏi bệnh.
                    </p>
                    <h5>2. Penangglan</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/19/photo-1-1626684418174192619315.jpg"
                      alt="2, QUÁI VẬT,YÊU QUÁI,"
                      note=""
                    />
                    <p>
                      {" "}
                      Penangglan được xem là ma cà rồng của Malaysia. Nó có
                      khuôn mặt của một người phụ nữ sắc sảo, tuy nhiên phần cổ
                      lại không có da thịt và nối thẳng tới tim, thân dưới chỉ
                      có dạ dày và ruột. Bình thường, Penangglan có hình dáng
                      giống như một người phụ nữ, nhưng khi giật mình, nó sẽ lộ
                      nguyên hình. Ngoài ra, nó có thể đi xuyên tường hoặc biến
                      thành thể lỏng và chui qua những lỗ hở trong nhà.
                    </p>
                    <p>
                      Theo truyền thuyết, Penangglan thường lấy máu người làm
                      thức ăn. Cách thông dụng nhất để phòng tránh là sử dụng
                      gai của loại lá có tên Mengkuang để làm bị thương con{" "}
                      <strong>quái vật</strong>. Ngoài ra, có thể trộn lá này
                      với rượu và tưới xung quanh nhà.
                    </p>
                    <h5>3. Kui</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/19/-16266846686011610781223.jpg"
                      alt="3, QUÁI VẬT,YÊU QUÁI,"
                      note=""
                    />
                    <p>
                      Kui là một sinh vật thần thoại Trung Quốc. Kui được sinh
                      ra tại núi Liubo trên biển phía Đông Á. Nó trông giống như
                      một con bò màu xám, tuy nhiên chỉ có đúng 1 chân. Khi
                      những cơn bão đến, cơ thể Kui sẽ phát ra ánh sáng và tiếng
                      gầm của nó sẽ vang dội như sấm. Trong truyền thuyết, con
                      người thường săn Kui và lột da chúng để làm trống.
                    </p>
                    <RelationNewsInPage category={category} />
                    <h5>4. Kasa-obake</h5>

                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/19/photo-1-16266847103471591736203.jpg"
                      alt="4, QUÁI VẬT,YÊU QUÁI,"
                      note=""
                    />
                    <p>
                      Kasa-obake là con <strong>quái vật</strong> thành tinh từ
                      một chiếc ô. Nó là kẻ chuyên đi lừa gạt và rất thích dọa
                      nạt con người. Tuy nhiên, chúng cũng rất thích chơi đùa,
                      chúng sẽ rất hạnh phúc khi được chơi với bất cứ ai, đặc
                      biệt là những người có vẻ ngoài trẻ con. Karakasa rất
                      thích bay lượn lòng vòng trong những ngày trời mưa. Nhiều
                      người nghĩ rằng con quái vật làm họ buồn cười hơn là đáng
                      sợ.
                    </p>
                    <h5>5. Akaname</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/19/photo-1-16266853979992030044110.jpg"
                      alt="5, QUÁI VẬT,YÊU QUÁI,"
                      note=""
                    />
                    <p>
                      Akaname, con <strong>quái vật</strong> đến từ xứ Phù Tang,
                      có lẽ là con quái vật kỳ quặc nhất trong danh sách này. Nó
                      thường được mô tả là có thân hình màu đỏ, chân tay dài và
                      khuôn mặt bẩn thỉu gớm ghiếc. Akaname tường có sở thích
                      liếm sạch phòng tắm bẩn bằng chiếc lưỡi dài của mình và
                      đồng thời phun ra bọt độc. Nhiều người tin rằng nguồn gốc
                      của con quái vật này là từ những ông bố, bà mẹ muốn khuyến
                      khích con cái của họ luôn phải giữ phòng tắm thật sạch sẽ.
                    </p>
                  </div>
                  <AdsHorizontal />
                </div>

                <RandomFeature />

                <div className="source">Source: {source}</div>

                <FacebookShareButton link={facebookLinkShare} />

                <div className="tags">Tags: {updatedTags}</div>
              </div>
            </div>
          </div>
        </div>
      </Content>
    </>
  );
}
