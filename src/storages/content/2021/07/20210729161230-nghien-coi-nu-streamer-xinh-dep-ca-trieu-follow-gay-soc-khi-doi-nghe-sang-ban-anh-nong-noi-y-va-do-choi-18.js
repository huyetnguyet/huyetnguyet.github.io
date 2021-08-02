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
"timestamp": '29/07/2021 04:12 PM',
"title": 'Nghiện cởi, nữ streamer xinh đẹp cả triệu follow gây sốc khi đổi nghề sang bán ảnh nóng, nội y và đồ chơi 18+',
"description": 'Cô nàng streamer này cuối cùng cũng nhận ra đam mê và sở trường của mình.',
"src": '',
"alt": 'GÁI XINH,STREAMER,SAMA,NỮ STREAMER,CỘNG ĐỒNG MẠNG,HOT GIRL,',
"category": 'images',
"date": '29/07/2021',
"time": '04:12 PM',
"link": '/nghien-coi-nu-streamer-xinh-dep-ca-trieu-follow-gay-soc-khi-doi-nghe-sang-ban-anh-nong-noi-y-va-do-choi-18',
"zcomponent": 'page_20210729161230',
"filepath": './20210729161230-nghien-coi-nu-streamer-xinh-dep-ca-trieu-follow-gay-soc-khi-doi-nghe-sang-ban-anh-nong-noi-y-va-do-choi-18.js'
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
  "Nghiện cởi, nữ streamer xinh đẹp cả triệu follow gây sốc khi đổi nghề sang bán ảnh nóng, nội y và đồ chơi 18+";
const author = "Mặt Trứng";
const source = "Pháp luật và bạn đọc";
const timestamp = "29/07/2021 04:12 PM";
const description =
  "Cô nàng streamer này cuối cùng cũng nhận ra đam mê và sở trường của mình.";
const link =
  "nghien-coi-nu-streamer-xinh-dep-ca-trieu-follow-gay-soc-khi-doi-nghe-sang-ban-anh-nong-noi-y-va-do-choi-18";
const tagparam = [
  "GÁI XINH",
  "STREAMER",
  "SAMA",
  "NỮ STREAMER",
  "CỘNG ĐỒNG MẠNG",
  "HOT GIRL",
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

export default function page_20210729161230() {
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
                    <strong>Streamer</strong>, <strong>hot girl</strong> lộ
                    clip, ảnh nóng, hớ hênh trên sóng - đây đều là những thuật
                    ngữ mà nếu như ngược dòng thời gian khoảng 5-6 năm về trước
                    thôi, chắc chắn nó sẽ là chủ đề dậy sóng{" "}
                    <strong>cộng đồng mạng</strong>. Nhưng ở thời điểm hiện tại,
                    đa số chúng ta đều đã quá quen với những lùm xùm này, đôi
                    khi tới mức lãnh đạm và bàng quan. Vì đơn giản, tần suất các
                    vụ việc, scandal như vậy diễn ra quá nhiều và thậm chí còn
                    dần trở thành một trong những chiêu trò để trở nên nổi tiếng
                    nhanh chóng dưới tác động mạnh mẽ từ phía truyền thông. Một
                    ví dụ dễ thấy nhất có thể kể tới trường hợp của{" "}
                    <strong>Sama</strong> - một cô <strong>gái xinh</strong> đẹp
                    và đầy gợi cảm dưới đây.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/2/photo-1-1625229141688743020814.jpg"
                    alt="1, GÁI XINH,STREAMER,SAMA,NỮ STREAMER,CỘNG ĐỒNG MẠNG,HOT GIRL,"
                    note="Sama - cô nàng hot girl trong câu chuyện"
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/2/photo-1-1625229191264484638426.jpg"
                    alt="2, GÁI XINH,STREAMER,SAMA,NỮ STREAMER,CỘNG ĐỒNG MẠNG,HOT GIRL,"
                    note="Từ chỗ là một cái tên còn vô danh"
                  />
                  <p>
                    Tới từ Vân Nam Trung Quốc, <strong>Sama</strong> có thể coi
                    là một trong những ví dụ thành công kiểu mẫu cho trào lưu
                    các cô <strong>gái xinh</strong> đẹp đổ xô sang công việc{" "}
                    <strong>streamer</strong>. Xuất phát điểm là một cô gái bình
                    thường, thậm chí nhan sắc cũng không có quá nhiều điều nổi
                    bật, thế nhưng chính sự táo bạo trong phong cách, thậm chí
                    "nghiện" khoe thân đã giúp cho Sama nhanh chóng thu hút được
                    vô số sự chú ý.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/2/-1625229297869667301663.jpg"
                    alt="3, GÁI XINH,STREAMER,SAMA,NỮ STREAMER,CỘNG ĐỒNG MẠNG,HOT GIRL,"
                    note="Cô gái xinh đẹp nay đã là hot girl có tiếng với cả triệu follow"
                  />
                  <p>
                    Đúng quy luật, <strong>Sama</strong> sau đó cũng lấn dần
                    sang sự nghiệp <strong>streamer</strong>, phát sóng và với
                    nền tảng là lượng fan hùng hậu lên tới cả triệu người, cô
                    nàng bước đầu cũng gặt hái được một số thành công nhất định.
                    Tuy nhiên, với việc không có tài năng gì quá nổi trội, mọi
                    thứ dần trở nên tẻ nhạt, và đó cũng là lúc mà Sama quyết
                    định trở lại với "đam mê" của mình, khi theo đuổi công việc
                    có thể giúp cô nàng dễ dàng cởi hơn. Đó chính là bán và
                    quảng cáo cho những mặt hàng nội y, ảnh nóng bản thân và
                    thậm chí là cả một số vật dụng 18+.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/2/photo-1-1625229630712632192140.jpg"
                    alt="4, GÁI XINH,STREAMER,SAMA,NỮ STREAMER,CỘNG ĐỒNG MẠNG,HOT GIRL,"
                    note="Không quá thành công với sự nghiệp streamer"
                  />
                  <RelationNewsInPage category={category} />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/2/1625229643617692264864-16252296583741021805418.jpg"
                    alt="5, GÁI XINH,STREAMER,SAMA,NỮ STREAMER,CỘNG ĐỒNG MẠNG,HOT GIRL,"
                    note="Nàng hot girl dần dần chuyển dịch trở về làm người mẫu ảnh, đặc biệt là thực hiện những đề tài mang phong cách 18+"
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/2/1625229718045988560789-1625229729954262007203.jpg"
                    alt="6, GÁI XINH,STREAMER,SAMA,NỮ STREAMER,CỘNG ĐỒNG MẠNG,HOT GIRL,"
                    note="Cô nàng cũng đang là gương mặt được rất nhiều nhãn nội y chọn mặt gửi vàng"
                  />
                  <p>
                    Và dường như đây là nước đi đúng đắn của{" "}
                    <strong>Sama</strong>. Bất chấp việc vẫn thường xuyên gặp
                    phải không ít nghi vấn về nhan sắc có phần chỉnh sửa, thiếu
                    tự nhiên của mình, Sama vẫn luôn thu hút sự chú ý tối đa với
                    mỗi hình ảnh mà cô nàng đăng tải. Quả thật, đây mới là sở
                    trường của Sama chứ không phải là công việc{" "}
                    <strong>streamer</strong> phức tạp kia. Và dễ thấy, chỉ cần
                    bạn đủ táo bạo, xinh đẹp và gợi cảm, thành công sẽ tới một
                    cách dễ dàng trong thời đại mà mạng xã hội đang phát triển
                    như hiện nay. Hãy cứ nhìn ví dụ từ cô nàng Sama.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/2/1625229880456238857165-16252299033581382552292.jpg"
                    alt="7, GÁI XINH,STREAMER,SAMA,NỮ STREAMER,CỘNG ĐỒNG MẠNG,HOT GIRL,"
                    note="Streamer có vẻ là công việc không phù hợp với cô nàng"
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/2/1625229758642697765261-162522986972262773747.jpg"
                    alt="8, GÁI XINH,STREAMER,SAMA,NỮ STREAMER,CỘNG ĐỒNG MẠNG,HOT GIRL,"
                    note="Đây mới là phong cách sở trường của Sama"
                  />
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
