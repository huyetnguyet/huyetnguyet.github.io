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
"timestamp": '04/08/2021 06:56 PM',
"title": '"Làm tổ" trên giường cả ngày mà không biết 7 cách nâng "mood" phòng ngủ thì khó mà thư giãn',
"description": 'Phòng ngủ của bạn sẽ chill hơn nếu biết 7 mẹo nhỏ mà có võ này.',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/4/photo-1-16280664391501236439911.jpg',
"alt": 'phòng ngủ,bóng đèn led,nến thơm,máy lọc không khí,vỏ gối,house n home,',
"category": 'life',
"date": '04/08/2021',
"time": '06:56 PM',
"link": '/lam-to-tren-giuong-ca-ngay-ma-khong-biet-7-cach-nang-mood-phong-ngu-thi-kho-ma-thu-gian',
"zcomponent": 'page_20210804185624',
"filepath": './20210804185624-lam-to-tren-giuong-ca-ngay-ma-khong-biet-7-cach-nang-mood-phong-ngu-thi-kho-ma-thu-gian.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "life";
const categoryLink = "/life";
const title =
  '"Làm tổ" trên giường cả ngày mà không biết 7 cách nâng "mood" phòng ngủ thì khó mà thư giãn';
const author = "HÀ BÍCH NGỌC,";
const source = "Doanh nghiệp và Tiếp thị";
const timestamp = "04/08/2021 06:56 PM";
const description =
  "Phòng ngủ của bạn sẽ chill hơn nếu biết 7 mẹo nhỏ mà có võ này.";
const link =
  "lam-to-tren-giuong-ca-ngay-ma-khong-biet-7-cach-nang-mood-phong-ngu-thi-kho-ma-thu-gian";
const tagparam = [
  "phòng ngủ",
  "bóng đèn led",
  "nến thơm",
  "máy lọc không khí",
  "vỏ gối",
  "house n home",
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

export default function page_20210804185624() {
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
                      Trong những ngày cách ly ở nhà, nơi bạn gắn bó nhất có lẽ
                      là chiếc giường thân yêu. Vì vậy, đầu tư cho{" "}
                      <strong>phòng ngủ</strong> chắc chắn là quyết định vô cùng
                      xứng đáng. Không tốn quá nhiều tiền, vài thay đổi nhỏ dưới
                      đây sẽ giúp phòng ngủ có cảm giác thư giãn hơn bao giờ
                      hết.
                    </p>
                    <h5>1. Thắp nến thơm</h5>
                    <p>
                      Mùi thơm của nến sẽ giúp bạn cảm thấy thực sự thư giãn mỗi
                      khi bước vào <strong>phòng ngủ</strong>. Các mùi như oải
                      hương, cam cúc, hoa hồng sẽ phát huy tác dụng nếu bạn gặp
                      phải tình trạng mất ngủ, hay lo lắng, căng thẳng.
                    </p>
                    <h5>2. Đầu tư 1 chiếc máy lọc không khí</h5>
                    <p>
                      Nấm mốc, lông vật nuôi và bệnh di ứng có thể gây ra 1 số
                      bệnh về hô hấp và khiến cơ thể bạn luôn phải đối mặt với
                      căng thẳng. Một bộ lọc không khí trong{" "}
                      <strong>phòng ngủ</strong> sẽ giúp thanh lọc không gian và
                      cải thiện giấc ngủ.
                    </p>
                    <h5>3. Chọn màu xanh dương cho phòng ngủ</h5>
                    <p>
                      Màu xanh lam có tác dụng làm dịu, thư giãn đầu óc và giúp
                      ru bạn vào giấc ngủ. Nếu căn phòng được sơn một lớp sơn
                      mới, hãy chọn tông màu xanh dương. Nếu không, hãy thử thêm
                      chăn, gối và thảm màu xanh dương.
                    </p>
                    <h5>4. Không đặt TV trong phòng ngủ</h5>
                    <p>
                      Đặt TV ở không gian nghỉ ngơi khiến bạn không thể thư giãn
                      hoàn toàn trước khi đi ngủ. Nếu có thói quen xem phim đêm
                      khuya, hãy xem nó trong phòng khác trước khi đi ngủ. Bạn
                      sẽ thấy mình ngủ ngon hơn và bớt căng thẳng hơn.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>5. Không đặt sách trong phòng ngủ</p>
                    <p>
                      Nhiều người có thói quen đọc sách trước khi đi ngủ. Nhưng
                      tương tự như ti vi, điều này không có lợi chút nào vì nó
                      sẽ khiến bạn khó thư giãn, đồng thời khiến{" "}
                      <strong>phòng ngủ</strong> bừa bộn hơn.{" "}
                    </p>
                    <h5>
                      6. Giữ <strong>vỏ gối</strong> sạch sẽ{" "}
                    </h5>
                    <p>
                      Điều này đặc biệt cần thiết với những ai bị dị ứng. Bạn
                      chỉ cần cởi <strong>vỏ gối</strong> ra và cho vào máy giặt
                      trong vòng mười phút để giúp vỏ gối vừa sạch sẽ, vừa thơm
                      tho, đồng thời loại bỏ gàu và các loại tế bào chết.
                    </p>
                    <h5>7. Chọn ánh sáng phù hợp</h5>
                    <p>
                      Trong <strong>phòng ngủ</strong>, bạn nên chọn{" "}
                      <strong>bóng đèn LED</strong> màu trắng để có ánh sáng dịu
                      nhẹ, không quá sáng mà cũng không quá tối.
                    </p>

                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/4/photo-1-16280664391501236439911.jpg"
                      alt="1, phòng ngủ,bóng đèn led,nến thơm,máy lọc không khí,vỏ gối,house n home,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/4/photo-1-1628066472400436731385.jpg"
                      alt="3, phòng ngủ,bóng đèn led,nến thơm,máy lọc không khí,vỏ gối,house n home,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/4/photo-1-1628066507452320211979.jpg"
                      alt="5, phòng ngủ,bóng đèn led,nến thơm,máy lọc không khí,vỏ gối,house n home,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/4/photo-1-16280663912891506787828.jpg"
                      alt="7, phòng ngủ,bóng đèn led,nến thơm,máy lọc không khí,vỏ gối,house n home,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/4/photo-1-16280663227811980450161.jpg"
                      alt="8, phòng ngủ,bóng đèn led,nến thơm,máy lọc không khí,vỏ gối,house n home,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/4/photo-1-1628066602263110158094.jpg"
                      alt="9, phòng ngủ,bóng đèn led,nến thơm,máy lọc không khí,vỏ gối,house n home,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/4/photo-1-1628066726385150558000.jpg"
                      alt="10, phòng ngủ,bóng đèn led,nến thơm,máy lọc không khí,vỏ gối,house n home,"
                      note=""
                    />
                    <p>Nguồn ảnh: Internet</p>
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
