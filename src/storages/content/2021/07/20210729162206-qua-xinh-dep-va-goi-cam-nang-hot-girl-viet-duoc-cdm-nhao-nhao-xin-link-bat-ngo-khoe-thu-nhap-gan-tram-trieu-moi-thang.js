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
"timestamp": '29/07/2021 04:22 PM',
"title": 'Quá xinh đẹp và gợi cảm, nàng hot girl Việt được CĐM nháo nhào xin link, bất ngờ khoe thu nhập gần trăm triệu mỗi tháng',
"description": 'Những thông tin về cô nàng hot girl này đang nhận được rất nhiều sự quan tâm từ phía cộng đồng mạng.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/7/19/photo-1-1626687793287460678808.jpg',
"alt": 'GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,ĐOAN NGHI,',
"category": 'images',
"date": '29/07/2021',
"time": '04:22 PM',
"link": '/qua-xinh-dep-va-goi-cam-nang-hot-girl-viet-duoc-cdm-nhao-nhao-xin-link-bat-ngo-khoe-thu-nhap-gan-tram-trieu-moi-thang',
"zcomponent": 'page_20210729162206',
"filepath": './20210729162206-qua-xinh-dep-va-goi-cam-nang-hot-girl-viet-duoc-cdm-nhao-nhao-xin-link-bat-ngo-khoe-thu-nhap-gan-tram-trieu-moi-thang.js'
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
  "Quá xinh đẹp và gợi cảm, nàng hot girl Việt được CĐM nháo nhào xin link, bất ngờ khoe thu nhập gần trăm triệu mỗi tháng";
const author = "Mặt Trứng";
const source = "Pháp luật và bạn đọc";
const timestamp = "29/07/2021 04:22 PM";
const description =
  "Những thông tin về cô nàng hot girl này đang nhận được rất nhiều sự quan tâm từ phía cộng đồng mạng.";
const link =
  "qua-xinh-dep-va-goi-cam-nang-hot-girl-viet-duoc-cdm-nhao-nhao-xin-link-bat-ngo-khoe-thu-nhap-gan-tram-trieu-moi-thang";
const tagparam = ["GÁI XINH", "HOT GIRL", "CỘNG ĐỒNG MẠNG", "ĐOAN NGHI"];
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

export default function page_20210729162206() {
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
                      Nếu bàn về <strong>gái xinh</strong>, chắc hẳn Việt Nam
                      chúng ta cũng không hề thua kém nếu phải đặt lên bàn cân
                      với bất kỳ quốc gia nổi tiếng nào như Nhật Bản, Hàn Quốc,
                      Thái Lan... Điều này có lẽ cũng chẳng cần phải bàn cãi
                      nhiều, khi mà chỉ riêng trong những năm gần đây thôi, đã
                      có khá nhiều cô nàng xuất hiện trên các trang báo quốc tế
                      và khiến cộng đồng phải xuýt xoa tán thưởng vì nhan sắc
                      cực phẩm của mình. Và gần đây, lại thêm một cái tên nữa
                      xuất hiện trong bản danh sách này. Cụ thể, đó là một cô
                      nàng <strong>hot girl</strong> khá xinh đẹp và cũng có cái
                      tên dễ thương không kém Đinh Triệu{" "}
                      <strong>Đoan Nghi</strong>.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/19/photo-1-16266870565781755851606.jpg"
                      alt="1, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,ĐOAN NGHI,"
                      note="Đoan Nghi - cô nàng hot girl xinh đẹp đang nhận được rất nhiều sự quan tâm"
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/19/photo-1-16266870731131913935840.jpg"
                      alt="2, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,ĐOAN NGHI,"
                      note="Nàng hot girl nhận được rất nhiều lời khen về nhan sắc"
                    />
                    <p>
                      Thực tế, cái tên <strong>Đoan Nghi</strong> đã bắt đầu
                      được nhiều người chú ý sau những hình ảnh mặc áo dài đầy
                      xinh đẹp cũng như khi cô nàng xuống phố cổ vũ cho đội
                      tuyển u23 Việt Nam cách đây ba năm. Tuy nhiên, phải tới
                      thời điểm hiện tại, nhan sắc của Đoan Nghi dường như mới
                      đạt tới "độ chín" và thật sự tạo nên một cơn sốt đối với{" "}
                      <strong>cộng đồng mạng</strong>. Cô nàng{" "}
                      <strong>hot girl</strong> sinh năm 2002 này nhận được rất
                      nhiều lời khen ngợi về sự nhẹ nhàng nhưng không kém phần
                      quyến rũ của mình. Ngoài ra, Đoan Nghi cũng đồng thời được
                      chú ý nhờ mang trong mình hai dòng máu Việt - Trung.{" "}
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/19/photo-1-1626687249657625826625.jpg"
                      alt="3, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,ĐOAN NGHI,"
                      note="Nàng hot girl sở hữu vẻ ngoài nhẹ nhàng, ngọt ngào"
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/19/photo-1-1626687296036497656621.jpg"
                      alt="4, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,ĐOAN NGHI,"
                      note="Nhưng cũng không kém phần gợi cảm, quyến rũ"
                    />
                    <p>
                      Sự nổi tiếng đôi khi cũng luôn đi kèm với những tai tiếng,
                      và bản thân <strong>Đoan Nghi</strong> cũng không tránh
                      khỏi những điều tiêu cực này. Cụ thể, cô nàng thường xuyên
                      gặp phải những bình luận nghi ngờ về sự thiếu "tự nhiên"
                      trong nhan sắc của mình. Nàng <strong>hot girl</strong>{" "}
                      thậm chí còn công khai luôn cả hình ảnh hồi nhỏ của bản
                      thân cũng như liên tục lên tiếng khẳng định rằng mình
                      không hề đụng chạm dao kéo.
                    </p>
                    <RelationNewsInPage category={category} />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/19/photo-1-16266874578541473221275.jpg"
                      alt="5, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,ĐOAN NGHI,"
                      note="Nàng hot girl khẳng định bản thân xinh tự nhiên"
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/19/photo-1-1626687424461183141924.jpg"
                      alt="6, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,ĐOAN NGHI,"
                      note="Không hề đụng chạm dao kéo"
                    />
                    <p>
                      Và bên cạnh vẻ ngoài xinh đẹp, quyến rũ ấy, chẳng mấy
                      người ngờ được rằng cô nàng <strong>hot girl</strong> cũng
                      rất tài năng. Mới đây, trong một bài phỏng vấn,{" "}
                      <strong>Đoan Nghi</strong> cũng chia sẻ rằng trước dịch
                      bệnh, nàng hot girl mặc dù mới 19 tuổi nhưng đã sở hữu thu
                      nhập cực khủng, có thời điểm lên tới gần trăm triệu mỗi
                      tháng nhờ vào công việc người mẫu ảnh, quảng cáo cũng như
                      kinh doanh thời trang. Tuy nhiên, đi kèm với đó, cô nàng
                      cũng cho rằng nổi tiếng khá "mệt" khi bản thân đã phải
                      chặn, xóa không biết bao nhiêu những tin nhắn quấy rối,
                      khiếm nhã. Thậm chí, có những tài khoản còn gửi hẳn hình
                      "nhạy cảm" cho cô nàng.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/19/photo-1-16266877438521829774275.jpg"
                      alt="7, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,ĐOAN NGHI,"
                      note="Công việc người mẫu ảnh, kinh doanh thời trang mang tới cho Đoan Nghi thu nhập rất cao"
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/19/photo-1-16266877334081929373816.jpg"
                      alt="8, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,ĐOAN NGHI,"
                      note="Nhưng đồng thời, sự nổi tiếng cũng khiến cô nàng phải nhận vô số những tin nhắn khiếm nhã"
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/19/photo-1-1626687819255123924759.jpg"
                      alt="9, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,ĐOAN NGHI,"
                      note="Đôi khi còn bị gửi cả những hình ảnh đầy nhạy cảm"
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/19/photo-1-1626687793287460678808.jpg"
                      alt="10, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,ĐOAN NGHI,"
                      note=""
                    />
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
