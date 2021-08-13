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
"timestamp": '08/08/2021 10:22 PM',
"title": '12 chi tiết "siêu ẩn" trong bom tấn Gia Đình Siêu Nhân của Pixar cho fan cứng: Một cảnh quay còn được Avengers bắt chước!',
"description": 'Siêu phẩm hoạt hình The Incredibles (Gia Đình Siêu Nhân) khéo léo cài cắm loạt chi tiết ẩn khiến người hâm mộ khó có thể nhận ra nếu chỉ xem một lần.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/9/photo-1-16284753259481392693130.jpg',
"alt": 'GIA ĐÌNH SIÊU NHÂN,THE INCREDIBLES,PIXAR,PHIM HOẠT HÌNH,',
"category": 'news',
"date": '08/08/2021',
"time": '10:22 PM',
"link": '/12-chi-tiet-sieu-an-trong-bom-tan-gia-dinh-sieu-nhan-cua-pixar-cho-fan-cung-mot-canh-quay-con-duoc-avengers-bat-chuoc',
"zcomponent": 'page_20210808222213',
"filepath": './20210808222213-12-chi-tiet-sieu-an-trong-bom-tan-gia-dinh-sieu-nhan-cua-pixar-cho-fan-cung-mot-canh-quay-con-duoc-avengers-bat-chuoc.js'
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
  '12 chi tiết "siêu ẩn" trong bom tấn Gia Đình Siêu Nhân của Pixar cho fan cứng: Một cảnh quay còn được Avengers bắt chước!';
const author = "Sixteenten";
const source = "Pháp Luật & Bạn Đọc";
const timestamp = "08/08/2021 10:22 PM";
const description =
  "Siêu phẩm hoạt hình The Incredibles (Gia Đình Siêu Nhân) khéo léo cài cắm loạt chi tiết ẩn khiến người hâm mộ khó có thể nhận ra nếu chỉ xem một lần.";
const link =
  "12-chi-tiet-sieu-an-trong-bom-tan-gia-dinh-sieu-nhan-cua-pixar-cho-fan-cung-mot-canh-quay-con-duoc-avengers-bat-chuoc";
const tagparam = [
  "GIA ĐÌNH SIÊU NHÂN",
  "THE INCREDIBLES",
  "PIXAR",
  "PHIM HOẠT HÌNH",
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

export default function page_20210808222213() {
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
                      Hai phần Incredibles (<strong>Gia Đình Siêu Nhân</strong>)
                      có lẽ là một trong những kiệt tác điện ảnh xuất sắc nhất
                      trong lịch sử làm <strong>phim hoạt hình</strong> của{" "}
                      <strong>Pixar</strong> . Thu về 1,8 tỷ đô ở ngoài phòng
                      vé, loạt phim này đã mở ra một tương lai rực rỡ cho thể
                      loại phim siêu anh hùng dưới dạng hoạt hình, được đánh giá
                      xuất sắc từ giới phê bình và mang về hai giải thưởng Oscar
                      danh giá.
                    </p>
                    <p>
                      Hai phần của Incredibles thu về doanh thu khủng và đánh
                      giá cao từ giới phê bình
                    </p>
                    <p>
                      Điều đã đưa hai phần Incredibles trở thành kiệt tác có lẽ
                      không chỉ đến từ nội dung hay phần hình ảnh xuất sắc mà
                      còn cả những tình tiết khó đoán, được lồng ghép vô cùng
                      thông minh vào thời lượng của bộ phim.
                    </p>
                    <h5>The Incredibles</h5>
                    <p>
                      Ngay trong lần đầu giới thiệu{" "}
                      <strong>gia đình siêu nhân</strong> đến với khán giả, nhà
                      sản xuất của <strong>The Incredibles</strong> đã thể hiện
                      bộ óc "đỉnh cao" với hàng loạt chi tiết thú vị, được kết
                      nối một cách thông minh với nhau. Bộ phim còn có một cảnh
                      quay dường như được bom tấn nhà MCU - Avengers: Infinity
                      War tái sử dụng lại.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/9/photo-1-16284753259481392693130.jpg"
                      alt="1, GIA ĐÌNH SIÊU NHÂN,THE INCREDIBLES,PIXAR,PHIM HOẠT HÌNH,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/9/photo-1-162847532810041005706.gif"
                      alt="2, GIA ĐÌNH SIÊU NHÂN,THE INCREDIBLES,PIXAR,PHIM HOẠT HÌNH,"
                      note=""
                    />
                    <p>
                      Kari nói "Mozart sẽ giúp cho những đứa bé sơ sinh thông
                      minh hơn". Ngay sau đó, khi cô ấy bật Mozart cho
                      Jack-Jack, đôi mắt của cậu bé mở to và lần đầu bộc lộ sức
                      mạnh của bản thân.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/9/photo-2-1628475328848819983386.jpg"
                      alt="3, GIA ĐÌNH SIÊU NHÂN,THE INCREDIBLES,PIXAR,PHIM HOẠT HÌNH,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/9/photo-3-1628475328163776229847.jpg"
                      alt="4, GIA ĐÌNH SIÊU NHÂN,THE INCREDIBLES,PIXAR,PHIM HOẠT HÌNH,"
                      note=""
                    />
                    <p>
                      Trang phục "Incrediboy" tự chế của Buddy có phần logo kết
                      hợp biểu tượng "i" của Mr. Incredibles với hình lưỡi liềm
                      để tạo thành chữ "b"
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/9/photo-4-1628475328205167203933.png"
                      alt="5, GIA ĐÌNH SIÊU NHÂN,THE INCREDIBLES,PIXAR,PHIM HOẠT HÌNH,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/9/photo-5-16284753282651360281699.gif"
                      alt="6, GIA ĐÌNH SIÊU NHÂN,THE INCREDIBLES,PIXAR,PHIM HOẠT HÌNH,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/9/photo-6-16284753283111228767468.gif"
                      alt="7, GIA ĐÌNH SIÊU NHÂN,THE INCREDIBLES,PIXAR,PHIM HOẠT HÌNH,"
                      note=""
                    />
                    <p>
                      Trong đám cưới của Helen và Bob Parr, bốn siêu anh hùng
                      ngồi hàng ghế số 2 - Thunderhead, Stratogayle, Meta Man và
                      Dynaguy đã chết vì tấm áo choàng.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/9/photo-7-1628475328362351597606.gif"
                      alt="8, GIA ĐÌNH SIÊU NHÂN,THE INCREDIBLES,PIXAR,PHIM HOẠT HÌNH,"
                      note=""
                    />
                    <p>
                      Frozen hỏi vợ "Honey, em có thấy áo choàng của anh
                      không?". Honey không phải là cách gọi thân thương mà anh
                      dành cho vợ, đó thật sự là họ của vợ anh
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/9/photo-8-16284753289114481905.jpg"
                      alt="9, GIA ĐÌNH SIÊU NHÂN,THE INCREDIBLES,PIXAR,PHIM HOẠT HÌNH,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/9/photo-9-16284753284171225577134.jpg"
                      alt="10, GIA ĐÌNH SIÊU NHÂN,THE INCREDIBLES,PIXAR,PHIM HOẠT HÌNH,"
                      note=""
                    />
                    <p>
                      Trang phục đầu tiên của Elastigirl và Mr. Incredible có
                      màu đỏ và xanh nước biển, con gái đầu lòng của họ tên là
                      Violet
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/9/photo-10-1628475328466488211554.jpg"
                      alt="11, GIA ĐÌNH SIÊU NHÂN,THE INCREDIBLES,PIXAR,PHIM HOẠT HÌNH,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/9/photo-11-162847532896713374664.png"
                      alt="12, GIA ĐÌNH SIÊU NHÂN,THE INCREDIBLES,PIXAR,PHIM HOẠT HÌNH,"
                      note=""
                    />
                    <p>
                      Bạn còn nhớ Bob Parr luôn kêu phòng làm việc của anh quá
                      nhỏ, lý do vì nó bị một cây cột chiếm mất phần lớn diện
                      tích
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/9/photo-12-16284753285061568670372.jpg"
                      alt="13, GIA ĐÌNH SIÊU NHÂN,THE INCREDIBLES,PIXAR,PHIM HOẠT HÌNH,"
                      note=""
                    />
                    <p>
                      Hòn đảo này có tên là Nomanisan, có thể là cụm từ viết tắt
                      của "No man is an island" (câu nói chỉ ra rằng không một
                      ai là hoàn hảo cả, rồi họ cũng sẽ nhờ đến sự giúp đỡ của
                      một ai đó)
                    </p>
                    <RelationNewsInPage category={category} />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/9/photo-13-16284753290011405045267.gif"
                      alt="14, GIA ĐÌNH SIÊU NHÂN,THE INCREDIBLES,PIXAR,PHIM HOẠT HÌNH,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/9/photo-14-1628475328550605475751.jpg"
                      alt="15, GIA ĐÌNH SIÊU NHÂN,THE INCREDIBLES,PIXAR,PHIM HOẠT HÌNH,"
                      note=""
                    />
                    <p>
                      Phân cảnh trong Avengers: Infinity War được lấy cảm hứng
                      từ The Incredibles
                    </p>
                    <h5>Incredibles 2</h5>

                    <p>
                      Phải mất 14 năm, phần tiếp theo của{" "}
                      <strong>Gia Đình Siêu Nhân</strong> mới ra mắt khán giả.
                      Thế nhưng, những chi tiết trong phần 2 vẫn được liên kết
                      một cách chặt chẽ với phần đầu tiên, tạo cảm giác bồi hồi
                      cho những khán giả trung thành với bộ phim. Ngoài ra, nhà
                      sản xuất vẫn tung ra thêm một số "trứng phục sinh" khác để
                      người hâm mộ "vắt óc" tìm đáp án.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/9/photo-15-1628475328596959884224.jpg"
                      alt="16, GIA ĐÌNH SIÊU NHÂN,THE INCREDIBLES,PIXAR,PHIM HOẠT HÌNH,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/9/photo-16-1628475328652941966142.jpg"
                      alt="17, GIA ĐÌNH SIÊU NHÂN,THE INCREDIBLES,PIXAR,PHIM HOẠT HÌNH,"
                      note=""
                    />
                    <p>
                      Trang phục mới của Elastigirl (được thiết kế bởi Devtech)
                      là bộ đồ duy nhất bị hư hại sau trận chiến cuối cùng,
                      khẳng định chất lượng của những thiết kế mà Edna Mode từng
                      làm cho <strong>gia đình siêu nhân</strong> này
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/9/photo-17-16284753286931001587950.jpg"
                      alt="18, GIA ĐÌNH SIÊU NHÂN,THE INCREDIBLES,PIXAR,PHIM HOẠT HÌNH,"
                      note=""
                    />
                    <p>
                      Đừng bất ngờ, nhân vật Usher mà Frozone từng gặp được lồng
                      tiếng bởi chính ca sĩ kiêm nhạc sĩ Usher
                    </p>
                    <p>
                      Bức tranh trên tường miêu tả sự xa cách giữa Helen và gia
                      đình cô
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/9/photo-18-1628475328747451557726.jpg"
                      alt="19, GIA ĐÌNH SIÊU NHÂN,THE INCREDIBLES,PIXAR,PHIM HOẠT HÌNH,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/9/photo-19-1628475328799359933506.jpg"
                      alt="20, GIA ĐÌNH SIÊU NHÂN,THE INCREDIBLES,PIXAR,PHIM HOẠT HÌNH,"
                      note=""
                    />
                    <p>
                      Duke Caboom trong Toy Story 4 là một trong những món đồ
                      chơi của Jack-Jack
                    </p>
                    <p>
                      Với những chi tiết khó có thể phát hiện trong lần đầu xem
                      phim trên, phải khẳng định rằng <strong>Pixar</strong> rất
                      tận tâm vào từng bom tấn của hãng và vũ trụ{" "}
                      <strong>phim hoạt hình</strong> với 24 tác phẩm thành công
                      rực rỡ.
                    </p>
                    <p>Nguồn ảnh: Pixar</p>
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
