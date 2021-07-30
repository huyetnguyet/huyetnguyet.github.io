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
"timestamp": '29/06/2021 09:47 PM',
"title": 'Mở tour "suối nước nóng" giá 12 triệu, nàng hot girl phim 18+ bẽ bàng khi không ai đăng ký, lên tiếng chỉ trích fan thậm tệ',
"description": 'Cô nàng hot girl tỏ ra khá xấu hổ sau khi không mấy người quan tâm tới tour du lịch của mình.',
"src": 'https://raw.githubusercontent.com/huyetnguyet/huyetnguyet.github.io/main/src/',
"alt": 'HOT GIRL,GÁI XINH,CỘNG ĐỒNG MẠNG,PHIM AV,AV,PHIM 18+,YUURI ASADA,',
"category": 'images',
"date": '29/06/2021',
"time": '09:47 PM',
"link": '/mo-tour-suoi-nuoc-nong-gia-12-trieu-nang-hot-girl-phim-18-be-bang-khi-khong-ai-dang-ky-len-tieng-chi-trich-fan-tham-te',
"zcomponent": 'page_20210629214718',
"filepath": './20210629214718-mo-tour-suoi-nuoc-nong-gia-12-trieu-nang-hot-girl-phim-18-be-bang-khi-khong-ai-dang-ky-len-tieng-chi-trich-fan-tham-te.js'
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
  'Mở tour "suối nước nóng" giá 12 triệu, nàng hot girl phim 18+ bẽ bàng khi không ai đăng ký, lên tiếng chỉ trích fan thậm tệ';
const author = "Mặt Trứng";
const source = "Pháp luật và bạn đọc";
const timestamp = "29/06/2021 09:47 PM";
const description =
  "Cô nàng hot girl tỏ ra khá xấu hổ sau khi không mấy người quan tâm tới tour du lịch của mình.";
const link =
  "mo-tour-suoi-nuoc-nong-gia-12-trieu-nang-hot-girl-phim-18-be-bang-khi-khong-ai-dang-ky-len-tieng-chi-trich-fan-tham-te";
const tagparam = [
  "HOT GIRL",
  "GÁI XINH",
  "CỘNG ĐỒNG MẠNG",
  "PHIM AV",
  "AV",
  "PHIM 18+",
  "YUURI ASADA",
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

export default function page_20210629214718() {
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
                    Bên cạnh việc đóng phim bình thường, một trong những hoạt
                    động cũng rất hay được các cô nàng <strong>hot girl</strong>{" "}
                    của ngành công nghiệp <strong>AV</strong> Nhật Bản sử dụng
                    đó chính là mở các tour du lịch cho fan với mình, và điểm
                    đến thường xuyên là các suối nước nóng có tiếng. Đây được
                    xem là cách để chẳng những mang lại một nguồn thu nhập cũng
                    khá ổn mà còn tăng thêm sự tương tác, tri ân fan hâm mộ của
                    các cô nàng hot girl trong ngành. Tuy nhiên, không phải ai
                    cũng có thể thành công với phương án "kinh doanh" này, điển
                    hình như trường hợp thất bại đầy bẽ bàng của cô nàng{" "}
                    <strong>Yuuri Asada</strong> dưới đây.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629214718--10-425021.jpg")
                        .default
                    }
                    alt="1, HOT GIRL,GÁI XINH,CỘNG ĐỒNG MẠNG,PHIM AV,AV,PHIM 18+,YUURI ASADA,"
                    note="Yuuri Asada - cô nàng hot girl xinh đẹp trong câu chuyện"
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629214718--11-875061.jpg")
                        .default
                    }
                    alt="2, HOT GIRL,GÁI XINH,CỘNG ĐỒNG MẠNG,PHIM AV,AV,PHIM 18+,YUURI ASADA,"
                    note="Nhan sắc ấn tượng của cô nàng"
                  />
                  <p>
                    Sở hữu gương mặt hack tuổi, cực kỳ xinh xắn, thậm chí không
                    ít người còn cho rằng Yuuri là phiên bản gợi cảm hơn nữa của
                    Rina Ishihara - một tiền bối cực kỳ nổi tiếng trong quá khứ
                    trong làng{" "}
                    <strong>
                      phim <strong>AV</strong>
                    </strong>{" "}
                    Nhật Bản. Và cô nàng này cũng tài năng, nổi tiếng tới mức
                    còn giành được cả SOD Award - một giải thưởng khá danh giá
                    của studio hàng đầu. Tuy nhiên, hình ảnh của Yuuri không
                    phải lúc nào cũng long lanh trong mắt các fan hâm mộ, nhất
                    là sau khi cô nàng mở một tour du lịch suối nước nóng cực kỳ
                    thất bại.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629214718--12-156115.jpg")
                        .default
                    }
                    alt="3, HOT GIRL,GÁI XINH,CỘNG ĐỒNG MẠNG,PHIM AV,AV,PHIM 18+,YUURI ASADA,"
                    note="Yuuri rất xinh đẹp và gợi cảm cũng như dành nhiều giải thưởng danh giá"
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629214718--13-781737.jpg")
                        .default
                    }
                    alt="4, HOT GIRL,GÁI XINH,CỘNG ĐỒNG MẠNG,PHIM AV,AV,PHIM 18+,YUURI ASADA,"
                    note="Nhưng lại bất ngờ thất bại khi tự tổ chức một tour du lịch cho fan"
                  />
                  <p>
                    Theo đó, cách đây không lâu, cô nàng{" "}
                    <strong>hot girl</strong> đã mở một tour du lịch mang tên
                    "Chuyến đi suối nước nóng hai ngày một đêm". Tất nhiên,
                    những ai đăng ký đều sẽ có cơ hội được trải nghiệm một
                    chuyến đi hứa hẹn sẽ cực kỳ mỹ mãn với cô nàng hot girl nóng
                    bỏng. Điều kiện cũng rất đơn giản, khi bạn chỉ cần bỏ ra
                    khoảng 60.000 yên (xấp xỉ 12 triệu VNĐ) tiền lệ phí là được.
                    Tuy nhiên, điều khiến cho <strong>cộng đồng mạng</strong>{" "}
                    cảm thấy khá phân vân chính là việc Yuuri không hề tiết lộ
                    các "quyền lợi" của người tham gia.
                  </p>
                  <RelationNewsInPage category={category} />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629214718--14-165155.jpg")
                        .default
                    }
                    alt="5, HOT GIRL,GÁI XINH,CỘNG ĐỒNG MẠNG,PHIM AV,AV,PHIM 18+,YUURI ASADA,"
                    note="Chuyến đi của cô nàng hot girl xinh đẹp nghe qua thì có vẻ hấp dẫn"
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629214718--15-010264.jpg")
                        .default
                    }
                    alt="6, HOT GIRL,GÁI XINH,CỘNG ĐỒNG MẠNG,PHIM AV,AV,PHIM 18+,YUURI ASADA,"
                    note="Nhưng thực tế lại chẳng được mấy người quan tâm"
                  />
                  <p>
                    Và điều này khiến cho nhiều người cảm thấy lo ngại rằng có
                    khả năng khi tới đó, họ sẽ chỉ được nhìn thấy hoặc nói
                    chuyện với thần tượng là cùng. Lo lắng này càng có cơ sở khi
                    số lượng người đi không giới hạn, trong khi thời gian biểu
                    vẫn chỉ có hai ngày một đêm không thay đổi. Do đó, kết quả,
                    chỉ có hai fan đăng ký đi cùng Yuuri.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629214718--16-872598.jpg")
                        .default
                    }
                    alt="7, HOT GIRL,GÁI XINH,CỘNG ĐỒNG MẠNG,PHIM AV,AV,PHIM 18+,YUURI ASADA,"
                    note="Mở tour khá hoành tráng, nhưng cuối cùng chỉ có hai fan đăng ký đi cùng Yuuri"
                  />
                  <p>
                    Điều này khiến cho cô nàng cảm thấy cực kỳ phẫn nộ. Tới mức
                    mà sau đó, Yuuri còn lên hẳn mạng xã hội đăng một dòng trạng
                    thái dài để chỉ trích fan hâm mộ - những người bị cho là keo
                    kiệt không bỏ ra nổi 12 triệu cho một chuyến đi. Tuy nhiên,
                    đúng là biết trách ai bây giờ, suy cho cùng, người chịu ảnh
                    hưởng nhiều nhất sau vụ việc cũng là cô nàng{" "}
                    <strong>hot girl</strong> mà thôi.
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
