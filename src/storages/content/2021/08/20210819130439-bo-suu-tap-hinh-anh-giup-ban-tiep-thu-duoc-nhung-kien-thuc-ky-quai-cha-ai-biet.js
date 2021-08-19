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
"timestamp": '19/08/2021 01:04 PM',
"title": 'Bộ sưu tập hình ảnh giúp bạn tiếp thu được những kiến thức kỳ quái chả ai biét',
"description": 'Không phải thứ gì quá phi thường nhưng các hình ảnh này đem lại rất nhiều sự thú vị.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/8/19/photo-1-16293792348581858519105.jpg',
"alt": 'HÌNH ẢNH,MÃN NHÃN,',
"category": 'news',
"date": '19/08/2021',
"time": '01:04 PM',
"link": '/bo-suu-tap-hinh-anh-giup-ban-tiep-thu-duoc-nhung-kien-thuc-ky-quai-cha-ai-biet',
"zcomponent": 'page_20210819130439',
"filepath": './20210819130439-bo-suu-tap-hinh-anh-giup-ban-tiep-thu-duoc-nhung-kien-thuc-ky-quai-cha-ai-biet.js'
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
  "Bộ sưu tập hình ảnh giúp bạn tiếp thu được những kiến thức kỳ quái chả ai biét";
const author = "DS";
const source = "Trí Thức Trẻ";
const timestamp = "19/08/2021 01:04 PM";
const description =
  "Không phải thứ gì quá phi thường nhưng các hình ảnh này đem lại rất nhiều sự thú vị.";
const link =
  "bo-suu-tap-hinh-anh-giup-ban-tiep-thu-duoc-nhung-kien-thuc-ky-quai-cha-ai-biet";
const tagparam = ["HÌNH ẢNH", "MÃN NHÃN"];
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

export default function page_20210819130439() {
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
                    <p></p>
                    <p>
                      1. Tàu vũ trụ NASA trông như đồ chơi khi chụp theo phong
                      cách tilt-shift.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/19/photo-1-16293792348581858519105.jpg"
                      alt="1, HÌNH ẢNH,MÃN NHÃN,"
                      note=""
                    />
                    <p>
                      2. Căn nhà chưa bày đồ đạc ư? Không đâu, thùng đàn guitar
                      đấy.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/19/photo-1-16293790952291215340153.jpg"
                      alt="2, HÌNH ẢNH,MÃN NHÃN,"
                      note=""
                    />
                    <p>
                      3. Vỉa hè được thi công trải thảm thay vì lát như bình
                      thường.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/19/photo-1-1629379097029478037446.jpg"
                      alt="3, HÌNH ẢNH,MÃN NHÃN,"
                      note=""
                    />
                    <p>4. Hậu trường của một nhà hát thú vị như thế này đây.</p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/19/photo-2-16293790971401541291357.jpg"
                      alt="4, HÌNH ẢNH,MÃN NHÃN,"
                      note=""
                    />
                    <p>
                      5. Mặt dưới của lá sen trông ấn tượng chẳng kém mặt trên.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/19/photo-3-16293790973551071271895.jpg"
                      alt="5, HÌNH ẢNH,MÃN NHÃN,"
                      note=""
                    />
                    <p>6. Bộ xương của một con rùa cạn. </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/19/photo-4-16293790981581765846277.jpg"
                      alt="6, HÌNH ẢNH,MÃN NHÃN,"
                      note=""
                    />
                    <p>
                      7. Phần chìm dưới nước của một tàu chiến hiện đại không hề
                      đơn giản.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/19/photo-5-1629379097813522943659.jpg"
                      alt="7, HÌNH ẢNH,MÃN NHÃN,"
                      note=""
                    />
                    <p>
                      8. Hệ thống mạch máu của bàn tay người, thật sự bất ngờ!
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/19/photo-6-1629379097449451084391.jpg"
                      alt="8, HÌNH ẢNH,MÃN NHÃN,"
                      note=""
                    />
                    <p>9. Cái mũi trên lưng cá voi xanh.</p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/19/photo-7-16293790974291151562224.jpg"
                      alt="9, HÌNH ẢNH,MÃN NHÃN,"
                      note=""
                    />
                    <p>10. Phôi thai người trên đầu kim.</p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/19/photo-8-16293790975491862300254.jpg"
                      alt="10, HÌNH ẢNH,MÃN NHÃN,"
                      note=""
                    />
                    <RelationNewsInPage category={category} />
                    <p>
                      11. Đỉnh núi Everest cực kỳ lộn xộn kia cực kỳ nhiều rác,
                      đồ đạc và xác người nữa.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/19/photo-9-16293790975201499872672.jpg"
                      alt="11, HÌNH ẢNH,MÃN NHÃN,"
                      note=""
                    />
                    <p>12 Bên trong máy chụp cắt lớp.</p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/19/photo-10-16293790975831729356999.jpg"
                      alt="12, HÌNH ẢNH,MÃN NHÃN,"
                      note=""
                    />
                    <p>13. Ngọc trai đã được tạo ra như thế nào?</p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/19/photo-11-16293790980041339696053.jpg"
                      alt="13, HÌNH ẢNH,MÃN NHÃN,"
                      note=""
                    />
                    <p>
                      14. Cửa kho tiền của một ngân hàng phương tây từ những năm
                      1800.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/19/photo-12-16293790980362122578767.jpg"
                      alt="14, HÌNH ẢNH,MÃN NHÃN,"
                      note=""
                    />
                    <p>
                      15. Cột điện không phải được lắp ráp tại chỗ mà được mang
                      đến nhờ máy bay lên thẳng.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/19/photo-13-1629379097626990163061.jpg"
                      alt="15, HÌNH ẢNH,MÃN NHÃN,"
                      note=""
                    />
                    <p>16. Mắt người sau khi vừa phẫu thuật ghép giác mạc.</p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/19/photo-14-16293790990401871801315.jpg"
                      alt="16, HÌNH ẢNH,MÃN NHÃN,"
                      note=""
                    />
                    <p>17. Giải phẫu một quả pháo hoa.</p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/19/photo-17-1629379097669239304779.jpg"
                      alt="17, HÌNH ẢNH,MÃN NHÃN,"
                      note=""
                    />
                    <p>18. Hệ thống sưởi dưới sàn nhà rất phức tạp.</p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/19/photo-20-16293790986201909528611.jpg"
                      alt="18, HÌNH ẢNH,MÃN NHÃN,"
                      note=""
                    />
                    <p>19. Tuyệt tác cơ khí bên trong lens máy ảnh.</p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/19/photo-21-16293790978371990361184.jpg"
                      alt="19, HÌNH ẢNH,MÃN NHÃN,"
                      note=""
                    />
                    <p>20. Mặt cắt của tàu container lớn nhất thế giới.</p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/19/photo-22-1629379097918945043209.jpg"
                      alt="20, HÌNH ẢNH,MÃN NHÃN,"
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
