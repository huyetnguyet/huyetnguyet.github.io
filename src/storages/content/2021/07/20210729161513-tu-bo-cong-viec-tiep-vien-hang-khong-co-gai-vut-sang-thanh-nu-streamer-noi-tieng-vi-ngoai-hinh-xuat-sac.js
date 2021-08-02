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
"timestamp": '29/07/2021 04:15 PM',
"title": 'Từ bỏ công việc tiếp viên hàng không, cô gái vụt sáng thành nữ streamer nổi tiếng vì ngoại hình xuất sắc',
"description": 'Nữ streamer này đã chinh phục được rất nhiều khán giả với ngoại hình "miễn chê" của mình.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/7/8/1-16257332777721350470292.png',
"alt": 'GÁI XINH,HOT GIRL,STREAMER,NỮ STREAMER,',
"category": 'images',
"date": '29/07/2021',
"time": '04:15 PM',
"link": '/tu-bo-cong-viec-tiep-vien-hang-khong-co-gai-vut-sang-thanh-nu-streamer-noi-tieng-vi-ngoai-hinh-xuat-sac',
"zcomponent": 'page_20210729161513',
"filepath": './20210729161513-tu-bo-cong-viec-tiep-vien-hang-khong-co-gai-vut-sang-thanh-nu-streamer-noi-tieng-vi-ngoai-hinh-xuat-sac.js'
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
  "Từ bỏ công việc tiếp viên hàng không, cô gái vụt sáng thành nữ streamer nổi tiếng vì ngoại hình xuất sắc";
const author = "A Đồi";
const source = "Trí Thức Trẻ";
const timestamp = "29/07/2021 04:15 PM";
const description =
  'Nữ streamer này đã chinh phục được rất nhiều khán giả với ngoại hình "miễn chê" của mình.';
const link =
  "tu-bo-cong-viec-tiep-vien-hang-khong-co-gai-vut-sang-thanh-nu-streamer-noi-tieng-vi-ngoai-hinh-xuat-sac";
const tagparam = ["GÁI XINH", "HOT GIRL", "STREAMER", "NỮ STREAMER"];
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

export default function page_20210729161513() {
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
                    Với việc tình hình dịch bệnh vẫn đang diễn ra phức tạp, rất
                    nhiều người đã rơi vào hoàn cảnh khó khăn khi không thể gắn
                    bó được với công việc của mình. Cô nàng có biệt danh là Bami
                    trong câu chuyện cũng không phải ngoại lệ khi cô buộc phải
                    từ bỏ công việc tiếp viên hàng không của mình. Tuy nhiên
                    điều này lại dẫn tới bước ngoặt lớn cho sự nghiệp của Bami
                    khi cô quyết định chuyển hẳn sang làm{" "}
                    <strong>streamer</strong> toàn thời gian vào thời điểm cách
                    đây 1 năm.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/8/photo-1-16257331685952122989293.jpg"
                    alt="1, GÁI XINH,HOT GIRL,STREAMER,NỮ STREAMER,"
                    note="Bami - Nữ nhân vật chính trong câu chuyện"
                  />
                  <p>
                    Thực tế thì Bami cũng từng có niềm đam mê với việc sáng tạo
                    nội dung khi cô có một kênh YouTube nho nhỏ với khoảng 6
                    nghìn lượt đăng ký. Nội dung chính mà Bami thực hiện đó là
                    review ẩm thực hay các khách sạn sang trọng trong quá trình
                    cô thực hiện công việc của một tiếp viên hàng không. Tuy
                    nhiên mảnh đất YouTube lại không phù hợp với Bami khi cô
                    nàng chẳng thể phát triển hơn.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/8/photo-1-16257331836881558245428.png"
                    alt="2, GÁI XINH,HOT GIRL,STREAMER,NỮ STREAMER,"
                    note="Bami từng thử sức với công việc YouTuber nhưng không thành công"
                  />
                  <p>
                    Như đã nói ở trên thì vào giai đoạn tháng 6 năm 2020, Bami
                    đã chuyển hẳn sang làm <strong>streamer</strong> toàn thời
                    gian. Với gương mặt khả ái cùng một thân hình "chuẩn không
                    cần chỉnh", Bami nhanh chóng thu hút được rất nhiều người
                    theo dõi. Thậm chí chỉ sau một thời gian ngắn làm quen với
                    công việc streamer thì Bami đã được nền tảng AfreecaTV trao
                    danh hiệu "Best BJ".
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/8/photo-1-1625733196860421062414.jpg"
                    alt="3, GÁI XINH,HOT GIRL,STREAMER,NỮ STREAMER,"
                    note="Cô nàng tỏ ra có duyên với nghề streamer"
                  />
                  <RelationNewsInPage category={category} />
                  <p>
                    Những tưởng Bami sẽ có một sự nghiệp{" "}
                    <strong>streamer</strong> thành công thì cô nàng lại có một
                    pha "tự hủy" cực mạnh vào thời điểm giữa tháng 5 vừa qua. Cụ
                    thể thì trong một lần đổi mới nội dung livestream, Bami đã
                    nằm trên giường với bộ đồ gợi cảm để lên sóng. Trong quá
                    trình buổi stream diễn ra, <strong>nữ streamer</strong> này
                    thường xuyên có những hành động mang mục đích hướng sự chú ý
                    của khán giả vào vòng một của mình. Hệ quả là cô nàng đã bị
                    cấm kênh trong vòng 1 tuần vì hành vi phản cảm này.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/5/25/photo-1-16219279216221261860646.gif"
                    alt="4, GÁI XINH,HOT GIRL,STREAMER,NỮ STREAMER,"
                    note="Hành động có phần phản cảm này đã khiến Bami bị cấm kênh"
                  />
                  <p>
                    Có lẽ Bami cũng rút ra được kinh nghiệm sau án phạt kể trên
                    và đã hạn chế những hành động phản cảm như vậy và tập trung
                    vào thế mạnh ngoại hình của bản thân. Điều này đã khiến pha
                    "tự hủy" của Bami hồi tháng 5 kể trên không gây ra hậu quả
                    quá nặng nề. Ngược lại thì cô nàng đã trở nên vô cùng nổi
                    tiếng với việc có thêm hơn 20 nghìn lượt theo dõi mới chỉ
                    sau hơn 1 tháng. Hy vọng rằng cô nàng sẽ không có những pha
                    "tự hủy" như trên và tiếp tục phát triển hơn trong tương
                    lai.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/8/photo-2-1625733169729849561130.gif"
                    alt="5, GÁI XINH,HOT GIRL,STREAMER,NỮ STREAMER,"
                    note="Việc bỏ đi những pha câu view phản cảm đã giúp Bami được khán giả yêu quý hơn rất nhiều"
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/8/1-16257332777721350470292.png"
                    alt="6, GÁI XINH,HOT GIRL,STREAMER,NỮ STREAMER,"
                    note=""
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/8/2-16257332778881401972231.png"
                    alt="7, GÁI XINH,HOT GIRL,STREAMER,NỮ STREAMER,"
                    note=""
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
