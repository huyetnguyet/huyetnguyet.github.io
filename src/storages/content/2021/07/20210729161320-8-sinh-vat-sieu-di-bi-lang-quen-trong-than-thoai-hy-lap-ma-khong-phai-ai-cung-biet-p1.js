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
"timestamp": '29/07/2021 04:13 PM',
"title": '8 sinh vật siêu dị bị lãng quên trong thần thoại Hy Lạp mà không phải ai cũng biết (P.1)',
"description": 'Bên cạnh những anh hùng, thần thánh và các chuyến phiêu lưu thú vị, thần thoại Hy Lạp còn là kho tàng giới thiệu vô số sinh vật hoặc quái vật cực dị như Dracaenae, Onocentaur hãy mãng xà Cerastes...',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/5/campebyhighdarktemplardd3kenh-fullview-16254955842141325519901.jpg',
"alt": 'KHÁM PHÁ,THẦN THOẠI,LỊCH SỬ,THẦN THOẠI HY LẠP,ĐỜI SỐNG,',
"category": 'news',
"date": '29/07/2021',
"time": '04:13 PM',
"link": '/8-sinh-vat-sieu-di-bi-lang-quen-trong-than-thoai-hy-lap-ma-khong-phai-ai-cung-biet-p1',
"zcomponent": 'page_20210729161320',
"filepath": './20210729161320-8-sinh-vat-sieu-di-bi-lang-quen-trong-than-thoai-hy-lap-ma-khong-phai-ai-cung-biet-p1.js'
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
  "8 sinh vật siêu dị bị lãng quên trong thần thoại Hy Lạp mà không phải ai cũng biết (P.1)";
const author = "Green";
const source = "Trí Thức Trẻ";
const timestamp = "29/07/2021 04:13 PM";
const description =
  "Bên cạnh những anh hùng, thần thánh và các chuyến phiêu lưu thú vị, thần thoại Hy Lạp còn là kho tàng giới thiệu vô số sinh vật hoặc quái vật cực dị như Dracaenae, Onocentaur hãy mãng xà Cerastes...";
const link =
  "8-sinh-vat-sieu-di-bi-lang-quen-trong-than-thoai-hy-lap-ma-khong-phai-ai-cung-biet-p1";
const tagparam = [
  "KHÁM PHÁ",
  "THẦN THOẠI",
  "LỊCH SỬ",
  "THẦN THOẠI HY LẠP",
  "ĐỜI SỐNG",
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

export default function page_20210729161320() {
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
                      Có rất nhiều sinh vật <strong>thần thoại</strong> quen
                      thuộc với chúng ta ngày nay có nguồn gốc từ{" "}
                      <strong>thần thoại Hy Lạp</strong> như ma cà rồng, nhân
                      mã, nhân sư… Thậm chí, một số nhân vật còn trở thành nguồn
                      cảm hứng bất tận cho việc sáng tạo trên nhiều lĩnh vực như
                      Medusa, Pegasus và Minotaur.
                    </p>
                    <p>
                      Những sinh vật <strong>thần thoại</strong> này còn được
                      biết đến và kể lại là nhờ vào các nguồn tài liệu văn học
                      phong phú cũng như các bằng chứng khảo cổ. Tuy nhiên, chắc
                      chắn rằng chúng ta vẫn vẫn để lỡ mất nhiều loài sinh vật
                      kì dị trong <strong>thần thoại Hy Lạp</strong>.
                    </p>
                    <h5>Dracaenae</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/5/campebyhighdarktemplardd3kenh-fullview-16254955842141325519901.jpg"
                      alt="1, KHÁM PHÁ,THẦN THOẠI,LỊCH SỬ,THẦN THOẠI HY LẠP,ĐỜI SỐNG,"
                      note=""
                    />
                    <p>
                      Tiên cá với hình dạng nửa người nửa cá thì hẳn là ai cũng
                      biết, vì chúng rất phổ biến trong văn hóa đại chúng. Nhưng
                      còn dracaenae thì sao?
                    </p>
                    <p>
                      Dracaenae là một sinh vật trong{" "}
                      <strong>thần thoại</strong> Hy Lạp. Phần thân trên của
                      dracaenae là một phụ nữ xinh đẹp và thân dưới là một con
                      rồng gớm ghiếc. Dracaenae nổi tiếng nhất có lẽ là Kampe,
                      nhân vật đã được giao nhiệm vụ canh giữ những cánh cổng
                      của ngục Tartaros. Kampe khá đáng sợ, ả được miêu tả có
                      phần cơ thể của rồng, một cái đuôi của bọ cạp có thể tiêm
                      nọc độc chết người, xung quanh chân Kampe là hàng trăm con
                      rắn, phần đầu của năm mươi con thú như gấu chẳng hạn,
                      quanh eo ả là những con sói và một đôi cánh lớn màu đen.
                    </p>
                    <h5>Chim Stymphalian</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/5/david-demaret-stymphalian-birds-16254956290971471486897.jpg"
                      alt="2, KHÁM PHÁ,THẦN THOẠI,LỊCH SỬ,THẦN THOẠI HY LẠP,ĐỜI SỐNG,"
                      note=""
                    />
                    <p>
                      Loài chim trong <strong>thần thoại</strong> này được biết
                      đến nhiều ở kỳ công thứ sáu của Herakles, chúng có âm
                      thanh cực kỳ đáng sợ. Tên của chúng lấy theo nơi chúng cư
                      ngụ – một đầm lầy có thật ở Stymphalia. Tương truyền loài
                      chim này ăn thịt người với lưỡi kiếm giống như những chiếc
                      lông vũ kim loại mà chúng có thể phóng về phía cách mục
                      tiêu của mình. Chiếc mỏ của chúng bằng đồng và phân thải
                      ra có độc.
                    </p>
                    <RelationNewsInPage category={category} />
                    <h5>Cerastes</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/5/tumblro6ih4alceb1v9qvuco21280-1625495695311292560304.jpg"
                      alt="3, KHÁM PHÁ,THẦN THOẠI,LỊCH SỬ,THẦN THOẠI HY LẠP,ĐỜI SỐNG,"
                      note=""
                    />
                    <p>
                      Cerastes, có nghĩa là "có sừng", là một loại mãng xà trong
                      truyền thuyết Hy Lạp. Nó được cho là hoàn toàn không có
                      xương mà chỉ có một cặp sừng lớn, tương tự như sừng cừu.
                      Leonardo Da Vinci viết về các cerastes và miêu tả chúng
                      như những kẻ săn mồi ẩn nấp.
                    </p>
                    <p>
                      Người ta cho rằng cerastes trong{" "}
                      <strong>thần thoại</strong> được sáng tạo dựa trên một
                      loài vật có thật. Loài rắn có sừng, chúng có những cục u
                      giống như sừng trên mắt và thường săn mồi theo cách phục
                      kích, được xem là nguồn cảm hứng đời thực cho sinh vật
                      thần thoại này. Tuy nhiên, rắn có sừng không hạ được đối
                      thủ nào to lớn như cerastes trong truyền thuyết.
                    </p>
                    <h5>Onocentaur</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/5/1200px-curiouscreaturesinzoology28153825137072928cropped29-16254957891461784764808.jpg"
                      alt="4, KHÁM PHÁ,THẦN THOẠI,LỊCH SỬ,THẦN THOẠI HY LẠP,ĐỜI SỐNG,"
                      note=""
                    />
                    <p>
                      Onocentaur là loài họ hàng kém trang nhã hơn của centaur.
                      Onocentaur cũng chỉ có nửa người, nhưng nửa còn lại không
                      phải ngựa mà là lừa. Pythagoras và sau này là Aelian đều
                      miêu tả onocentaur như một loài có tính khí hoang dã, hung
                      bạo và khó mà nhận nhầm được.
                    </p>
                    <p>
                      Onocentaur được mô tả là có hai chân sau của một con lừa
                      trong khi nửa thân trước thì phức tạp hơn một chút, nó vừa
                      có thể dùng cánh tay làm chân trước khi chạy, vừa có thể
                      sử dụng để xách đồ nếu cần.
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
