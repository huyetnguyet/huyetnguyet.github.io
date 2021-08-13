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
"timestamp": '13/08/2021 09:28 AM',
"title": 'Lê Bống đăng ảnh giường chiếu tình tứ bên gái lạ cùng clip toàn tiếng “nhạy cảm”, hot girl thân mật kia là ai?',
"description": 'Đăng ảnh giường chiếu tình tứ bên gái lạ cùng clip toàn tiếng “nhạy cảm”, Lê Bống khiến CĐM đỏ mặt truy lùng danh tính hot girl.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/13/photo-1-16288263234501839838603.jpg',
"alt": 'LÊ BỐNG,TRANG LÊ,GÁI XINH,TIKTOK,HOT GIRL,TIKTOKER,CỘNG ĐỒNG MẠNG,CĐM,MXH,MẠNG XÃ HỘI,',
"category": 'images',
"date": '13/08/2021',
"time": '09:28 AM',
"link": '/le-bong-dang-anh-giuong-chieu-tinh-tu-ben-gai-la-cung-clip-toan-tieng-nhay-cam-hot-girl-than-mat-kia-la-ai',
"zcomponent": 'page_20210813092850',
"filepath": './20210813092850-le-bong-dang-anh-giuong-chieu-tinh-tu-ben-gai-la-cung-clip-toan-tieng-nhay-cam-hot-girl-than-mat-kia-la-ai.js'
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
  "Lê Bống đăng ảnh giường chiếu tình tứ bên gái lạ cùng clip toàn tiếng “nhạy cảm”, hot girl thân mật kia là ai?";
const author = "Lee Chueng Hee";
const source = "Pháp luật và bạn đọc";
const timestamp = "13/08/2021 09:28 AM";
const description =
  "Đăng ảnh giường chiếu tình tứ bên gái lạ cùng clip toàn tiếng “nhạy cảm”, Lê Bống khiến CĐM đỏ mặt truy lùng danh tính hot girl.";
const link =
  "le-bong-dang-anh-giuong-chieu-tinh-tu-ben-gai-la-cung-clip-toan-tieng-nhay-cam-hot-girl-than-mat-kia-la-ai";
const tagparam = [
  "LÊ BỐNG",
  "TRANG LÊ",
  "GÁI XINH",
  "TIKTOK",
  "HOT GIRL",
  "TIKTOKER",
  "CỘNG ĐỒNG MẠNG",
  "CĐM",
  "MXH",
  "MẠNG XÃ HỘI",
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

export default function page_20210813092850() {
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
                      Mới đây, <strong>Lê Bống</strong> đã khiến cho{" "}
                      <strong>cộng đồng mạng</strong> được một phen “đỏ mặt” khi
                      cô nàng đăng ảnh “giường chiếu” rất tình tứ bên cạnh một
                      cô gái lạ. Đặc biệt, hai cô nàng còn lựa chọn những tư thế
                      rất gợi cảm cũng như cho thấy sự nóng bỏng của cơ thể.
                      Ngay lập tức, những hình ảnh này đã khiến cho cư dân mạng
                      lập tức đi tìm “info” của cô gái lạ xuất hiện bên cạnh Lê
                      Bống là ai?
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/13/photo-1-16288263234501839838603.jpg"
                      alt="1, LÊ BỐNG,TRANG LÊ,GÁI XINH,TIKTOK,HOT GIRL,TIKTOKER,CỘNG ĐỒNG MẠNG,CĐM,MXH,MẠNG XÃ HỘI,"
                      note=""
                    />

                    <p>
                      Hóa ra, cô nàng có cái tên <strong>Trang Lê</strong> này
                      cũng là một trong những “<strong>hot girl</strong>” trên{" "}
                      <strong>mạng xã hội</strong> Facebook và{" "}
                      <strong>TikTok</strong>. Từng được mệnh danh là một trong
                      những huấn luyện viên thể hình nóng bỏng nhất tại Việt
                      Nam, Trang Lê từng có nhiều video clip TikTok xuất hiện
                      cùng hot girl <strong>Lê Bống</strong>. Có lẽ cả hai đều
                      có chung niềm đam mê với bộ môn này.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/13/photo-1-16288263357311866317682.jpg"
                      alt="2, LÊ BỐNG,TRANG LÊ,GÁI XINH,TIKTOK,HOT GIRL,TIKTOKER,CỘNG ĐỒNG MẠNG,CĐM,MXH,MẠNG XÃ HỘI,"
                      note=""
                    />

                    <p>
                      Cũng chính vì lẽ đó mà cả <strong>Lê Bống</strong> lẫn{" "}
                      <strong>Trang Lê</strong> đều sở hữu thân hình gợi cảm và
                      nóng bỏng. Trên trang cá nhân của mình, không khó để bắt
                      gặp những hình ảnh khoe trọn ngoại hình vô cùng hấp dẫn
                      của vị huấn luyện viên này.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/660/133514250583805952/2021/8/13/photo-1-16288263701431674409127.jpg"
                      alt="3, LÊ BỐNG,TRANG LÊ,GÁI XINH,TIKTOK,HOT GIRL,TIKTOKER,CỘNG ĐỒNG MẠNG,CĐM,MXH,MẠNG XÃ HỘI,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/660/133514250583805952/2021/8/13/photo-1-1628826350554558132507.jpg"
                      alt="4, LÊ BỐNG,TRANG LÊ,GÁI XINH,TIKTOK,HOT GIRL,TIKTOKER,CỘNG ĐỒNG MẠNG,CĐM,MXH,MẠNG XÃ HỘI,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/660/133514250583805952/2021/8/13/photo-1-1628826359998910685673.jpg"
                      alt="5, LÊ BỐNG,TRANG LÊ,GÁI XINH,TIKTOK,HOT GIRL,TIKTOKER,CỘNG ĐỒNG MẠNG,CĐM,MXH,MẠNG XÃ HỘI,"
                      note=""
                    />

                    <p>
                      Quay lại với <strong>Lê Bống</strong>, mới đây cô nàng vừa
                      đăng tải một video clip lên <strong>TikTok</strong> với
                      toàn tiếng “ơ” nghe tương đối nhạy cảm và dễ khiến cho
                      người nghe “hiểu nhầm”. Đó cũng chính là lý do mà cô nàng
                      phải đăng caption khuyên người xem “bật nhỏ volume thôi
                      nhé” để tránh cho phụ huynh lầm tưởng sang một ý nghĩa
                      khác.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p></p>

                    <p>
                      <strong>Lê Bống</strong> hiện tại vẫn là một trong số
                      những <strong>hot girl</strong> nổi tiếng bậc nhất trên{" "}
                      <strong>mạng xã hội</strong> và được xem là hot{" "}
                      <strong>TikTok</strong>er có lượng người theo dõi rất lớn.
                      Tuy gặp nhiều vấn đề với cư dân mạng trong thời gian gần
                      đây song không thể phủ nhận được sức hút của cô nàng là
                      khó có thể đo đếm được ở thời điểm này.{" "}
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/13/-16288267243291770557505.jpg"
                      alt="6, LÊ BỐNG,TRANG LÊ,GÁI XINH,TIKTOK,HOT GIRL,TIKTOKER,CỘNG ĐỒNG MẠNG,CĐM,MXH,MẠNG XÃ HỘI,"
                      note=""
                    />

                    <p>
                      Vừa qua, <strong>Lê Bống</strong> cũng đăng tải hình ảnh
                      trong phòng thu, liệu cô nàng có quyết định dấn thân vào
                      con đường nghệ thuật, sau khi đã trở thành “nữ chính”
                      trong MV của Văn Mai Hương hay không thì tất cả còn phải
                      đợi thời gian trả lời xem cô nàng lắm chiêu này định làm
                      gì.
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
