import React from "react";
import "components/page.css";
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
"timestamp": '29/07/2021 04:08 PM',
"title": 'Ly kỳ bí ẩn chưa từng biết về Shapeshifter, những kẻ đáng sợ có khả năng biến hình người',
"description": 'Shapeshifter là những con quái vật duy nhất trải qua nhiều quá trình biến đổi dữ dội tới thế.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/1/photo-1-16251299149081972291856.jpg',
"alt": 'QUÁI VẬT,BIẾN HÌNH,SHAPESHIFTER,',
"category": 'news',
"date": '29/07/2021',
"time": '04:08 PM',
"link": '/ly-ky-bi-an-chua-tung-biet-ve-shapeshifter-nhung-ke-dang-so-co-kha-nang-bien-hinh-nguoi',
"zcomponent": 'page_20210729160826',
"filepath": './20210729160826-ly-ky-bi-an-chua-tung-biet-ve-shapeshifter-nhung-ke-dang-so-co-kha-nang-bien-hinh-nguoi.js'
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
  "Ly kỳ bí ẩn chưa từng biết về Shapeshifter, những kẻ đáng sợ có khả năng biến hình người";
const author = "DS";
const source = "Trí Thức Trẻ";
const timestamp = "29/07/2021 04:08 PM";
const description =
  "Shapeshifter là những con quái vật duy nhất trải qua nhiều quá trình biến đổi dữ dội tới thế.";
const link =
  "ly-ky-bi-an-chua-tung-biet-ve-shapeshifter-nhung-ke-dang-so-co-kha-nang-bien-hinh-nguoi";
const tagparam = ["QUÁI VẬT", "BIẾN HÌNH", "SHAPESHIFTER"];
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

export default function page_20210729160826() {
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
                <div className="contentBody">
                  <h5>Hình dáng của Shapeshifter</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/1/photo-1-16251299149081972291856.jpg"
                    alt="1, QUÁI VẬT,BIẾN HÌNH,SHAPESHIFTER,"
                    note=""
                  />
                  <p>
                    <strong>Shapeshifter</strong> là một trong những loài{" "}
                    <strong>quái vật</strong> bí hiểm nhất trong truyền thuyết.
                    Không có nhiều miêu tả về hình dáng thật của Shapeshifter,
                    dù là trong các truyền thuyết. Chúng thay đổi hình dạng liên
                    tục, thường là bắt chước những người chúng thấy và hay có
                    ngoại hình hấp dẫn để đi lừa bịp đàn ông.
                  </p>
                  <p>
                    Trong truyền thuyết cổ, khả năng <strong>biến hình</strong>{" "}
                    là một trong nhiều sức mạnh của các vị thần. Ngoài ra,{" "}
                    <strong>Shapeshifter</strong> có rất nhiều khả năng đặc biệt
                    khác, kể cả khả năng thay đổi hình dạng của chúng cũng không
                    hẳn là ma thuật mà giống như một lời nguyền mắc phải.
                  </p>
                  <p>
                    Chuyện dân gian kể về các vị thần lừa gạt chỉ có khả năng{" "}
                    <strong>biến hình</strong> là mạnh nhất, nhưng bởi bản tính
                    xảo quyệt nên chúng vẫn là một giống loài rất mạnh. Trong
                    những câu chuyện cổ tích lãng mạn, các nhân vật yếu đuối
                    biến hình sau khi bị nguyền rủa, lừa gạt bởi một thế lực ma
                    thuật.
                  </p>
                  <h5>
                    Sự xuất hiện của <strong>Shapeshifter</strong> trong các nền
                    văn hóa
                  </h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/1/photo-1-1625129975923443572721.jpg"
                    alt="2, QUÁI VẬT,BIẾN HÌNH,SHAPESHIFTER,"
                    note=""
                  />
                  <p>
                    Ở phương Đông, các nước như Nhật, Trung, Hàn đầy dấu vết của
                    loài sinh vật <strong>biến hình</strong> này: từ một hồ ly
                    có thể biến thành thiếu nữ xinh đẹp, hay ma quỷ đội lốt phụ
                    nữ dụ dỗ đàn ông. Những con <strong>quái vật</strong> này
                    thường rất độc ác, sử dụng vẻ ngoài đẹp đẽ để dụ dỗ đàn ông;
                    đôi khi chúng còn biến thành rắn, mèo,chim.
                  </p>
                  <p>
                    Trong thần thoại cổ, tất cả các vị thần hoặc tiểu thần đều
                    có khả năng <strong>biến hình</strong>, một số thay đổi hình
                    dạng nhiều hơn kẻ khác. Vị thần biển Proteus có thể biến từ
                    hình dạng này sang hình dạng khác khi bị kẻ thù truy đuổi.
                    Vị thần tối cao của đỉnh Olympus, Zeus thường biến đổi hình
                    dạng để tiếp cận những phụ nữ xinh đẹp lọt vào tầm mắt ông,
                    ví dụ như con thiên nga hay con bò.
                  </p>
                  <RelationNewsInPage category={category} />
                  <p>
                    Ngoài ra, <strong>shapeshifter</strong> nổi tiếng nhất thì
                    phải kể tới Loki, thần lừa gạt của thần thoại Bắc Âu. Nổi
                    tiếng vì khả năng <strong>biến hình</strong> cùng sự tinh
                    ranh, hắn có có khả năng cải trang thành bất cứ ai hay thứ
                    gì hắn muồn, thậm chí là... biến thành ngựa cái và sinh con.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/1/photo-1-1625130250412559833301.jpg"
                    alt="3, QUÁI VẬT,BIẾN HÌNH,SHAPESHIFTER,"
                    note=""
                  />
                  <p>
                    Ph cũng có khả năng <strong>biến hình</strong> đổi dạng
                    chính mình hay người khác trong văn hóa Celtic. Với khả năng
                    ma thuật, họ có thể biến thành bất cứ thứ gì mình muốn, thậm
                    chí đày đọa, nguyền rủa người khác – điều này có thể tìm
                    thấy rất nhiều trong các câu chuyện cổ tích.
                  </p>
                  <p>
                    Văn hóa Celtic cũng nhắc tới khả năng{" "}
                    <strong>biến hình</strong> của các phù thủy, pháp sư, ma cà
                    rồng. Sở hữu kỹ năng ma pháp cao cấp, những kẻ này cũng có
                    khả năng biến hình thành bất cứ thứ gì mà chúng muốn, từ
                    người cho đến <strong>quái vật</strong> hay động vật.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/1/photo-1-16251302173161701286398.png"
                    alt="4, QUÁI VẬT,BIẾN HÌNH,SHAPESHIFTER,"
                    note=""
                  />
                  <p>
                    Trong truyền thuyết của người Navajo tại lục địa Bắc Mỹ cũng
                    có nhắc tới chủng tộc khả năng đội lốt động vật như cú, chó,
                    quạ, cáo, mèo. Những kẻ này không quá nổi tiếng cũng như
                    thân thiện cho lắm, dù vậy họ cũng chẳng bao giờ hại con
                    người cả.{" "}
                  </p>
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
