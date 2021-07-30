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
"timestamp": '29/06/2021 09:50 PM',
"title": 'Ôn thi trên sóng và bất ngờ được donate quá nhiều, cô gái quyết định làm streamer, không đi tìm việc nữa',
"description": 'Mục đích livestream ôn thi của nữ streamer này đơn giản chỉ là quá cô đơn mà thôi.',
"src": 'https://raw.githubusercontent.com/huyetnguyet/huyetnguyet.github.io/main/src/',
"alt": 'streamer,ôn thi,áp lực thi cử,',
"category": 'images',
"date": '29/06/2021',
"time": '09:50 PM',
"link": '/on-thi-tren-song-va-bat-ngo-duoc-donate-qua-nhieu-co-gai-quyet-dinh-lam-streamer-khong-di-tim-viec-nua',
"zcomponent": 'page_20210629215024',
"filepath": './20210629215024-on-thi-tren-song-va-bat-ngo-duoc-donate-qua-nhieu-co-gai-quyet-dinh-lam-streamer-khong-di-tim-viec-nua.js'
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
  "Ôn thi trên sóng và bất ngờ được donate quá nhiều, cô gái quyết định làm streamer, không đi tìm việc nữa";
const author = "A ĐỒI,";
const source = "Trí Thức Trẻ";
const timestamp = "29/06/2021 09:50 PM";
const description =
  "Mục đích livestream ôn thi của nữ streamer này đơn giản chỉ là quá cô đơn mà thôi.";
const link =
  "on-thi-tren-song-va-bat-ngo-duoc-donate-qua-nhieu-co-gai-quyet-dinh-lam-streamer-khong-di-tim-viec-nua";
const tagparam = ["streamer", "ôn thi", "áp lực thi cử"];
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

export default function page_20210629215024() {
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
                  <p>
                    Nếu các bạn chưa biết thì Hàn Quốc được biết tới là quốc gia
                    có <strong>áp lực thi cử</strong> lớn nhất thế giới. Vì vậy
                    mà học sinh, sinh viên Hàn Quốc rất dễ rơi vào tình trạng
                    stress hay nặng hơn là trầm cảm ở mỗi kỳ thi. Để tránh rơi
                    vào tình trạng tâm lý xấu thì một nữ sinh viên năm cuối có
                    tên Meng Ji đã nghĩ ra cách giải quyết là livestream quá
                    trình <strong>ôn thi</strong> tốt nghiệp của mình. Cô gái
                    này từng chia sẻ rằng việc được trò chuyện với khán giả khi
                    ôn thi giúp cô bớt cô đơn và học tập tốt hơn.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629215024--10-462143.jpg")
                        .default
                    }
                    alt="1, streamer,ôn thi,áp lực thi cử,"
                    note="Meng Ji - Nữ nhân vật chính trong câu chuyện"
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629215024--11-252507.png")
                        .default
                    }
                    alt="2, streamer,ôn thi,áp lực thi cử,"
                    note="Cô nàng từng lên sóng livestream quá trình ôn thi để bớt stress"
                  />
                  <p>
                    Với gương mặt khả ái, nụ cười rạng rõ và tính cách vui vẻ,
                    Meng Ji đã thành công trong việc thu hút được một lượng lớn
                    khán giả. Thậm chí cô nàng còn liên tục nhận được 2-3 nghìn
                    quả "bóng bay" (một vật phẩm donate) với mỗi buổi lên sóng.
                    Theo chia sẻ của Meng Ji thì trong vòng 1 tháng livestream{" "}
                    <strong>ôn thi</strong> tốt nghiệp thì cô đã nhận được tổng
                    cộng 5650 USD tiền "bóng bay" (tương đương với 130 triệu
                    VNĐ).
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629215024--12-513015.jpg")
                        .default
                    }
                    alt="3, streamer,ôn thi,áp lực thi cử,"
                    note="Meng Ji đã nhận được số tiền donate không hề nhỏ chỉ sau 1 tháng livestream"
                  />
                  <p>
                    Có lẽ sau thành công vô cùng bất ngờ này, Meng Ji đã nhận ra
                    được tiềm năng lớn của mình đối với công việc{" "}
                    <strong>streamer</strong>. Vì vậy sau khi thi tốt nghiệp đại
                    học xong, Meng Ji đã thông báo rằng mình sẽ trở thành một
                    streamer toàn thời gian thay vì tìm kiếm các công việc
                    truyền thống. Đương nhiên là Meng Ji sẽ không{" "}
                    <strong>ôn thi</strong> trên sóng nữa, cô đã chuyển sang các
                    nội dung như Mukbang, nhảy múa, trò chuyện trên sóng.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629215024--13-101780.jpg")
                        .default
                    }
                    alt="4, streamer,ôn thi,áp lực thi cử,"
                    note="Nữ streamer này đã thật sự lột xác sau không lâu sau đó"
                  />
                  <RelationNewsInPage category={category} />
                  <p>
                    Đây có thể xem là bước ngoặt đối với cuộc đời của Meng Ji
                    khi cô nàng trở nên nổi tiếng một cách nhanh chóng. Hơn nữa,
                    ngoại hình của nữ <strong>streamer</strong> này cũng thay
                    đổi lớn khi Meng Ji tập trung hơn vào việc chăm sóc bản
                    thân. Không còn hình tượng cô sinh viên mộc mạc nữa, Meng Ji
                    giờ đây lột xác thành một nữ streamer xinh đẹp, sắc sảo và
                    vô cùng cá tính. Những khán giả trung thành của cô nàng đều
                    tỏ ra ủng hộ hết mình sự thay đổi này.
                  </p>
                  <p>
                    Sau khoảng 1 năm gắn bó với công việc{" "}
                    <strong>streamer</strong>, Meng Ji đã có những thành quả
                    bước đầu như sở hữu khoảng 50 nghìn lượt đăng ký cùng danh
                    hiệu "Best BJ" tại nền tảng Afreeca TV. Sẽ không quá bất ngờ
                    nếu như Meng Ji tiếp tục gặt hái thêm nhiều thành công trong
                    tương lai.
                  </p>
                  <p>Ảnh: Internet</p>
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
