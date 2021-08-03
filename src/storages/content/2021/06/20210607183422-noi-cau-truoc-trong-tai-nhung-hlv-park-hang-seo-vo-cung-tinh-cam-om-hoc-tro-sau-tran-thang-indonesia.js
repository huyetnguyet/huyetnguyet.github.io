import React from "react";
import "components/page.scss";
import { AdsHorizontal, AdsVertical } from "components/adsMethods";
import { RandomFeature, RelationNews } from "components/methods";

import { Content, ContentImage, FacebookShareButton } from "components/content";

import { Helmet } from "react-helmet";

/* ---------------------------------------------------------------- */

/*

 {
"timestamp": 07/06/2021 06:34 PM",
"title": Nổi cáu trước trọng tài, nhưng HLV Park Hang-seo vô cùng tình cảm ôm học trò sau trận thắng Indonesia",
"description": HLV Park Hang-seo luôn có những khoảnh khắc đầy thú vị từ việc nổi cáu với trọng tài đến cử chỉ tình cảm, ấm áp dành cho học trò.",
"src": ",
"alt": Tuyen Viet Nam Tham Du Vong Loai World Cup 2022, Tuyen Viet Nam, Park Hang Seo, Bong Da, ",
"category": news",
"date": 07/06/2021",
"time": 06:34 PM",
"link": "/noi-cau-truoc-trong-tai-nhung-hlv-park-hang-seo-vo-cung-tinh-cam-om-hoc-tro-sau-tran-thang-indonesia",
"zcomponent": page_20210607183422",
"filepath": ./20210607183422-noi-cau-truoc-trong-tai-nhung-hlv-park-hang-seo-vo-cung-tinh-cam-om-hoc-tro-sau-tran-thang-indonesia.js"
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
  "Nổi cáu trước trọng tài, nhưng HLV Park Hang-seo vô cùng tình cảm ôm học trò sau trận thắng Indonesia";
const author = "HIẾU LƯƠNG,";
const source = "Nhịp sống Việt";
const timestamp = "07/06/2021 06:34 PM";
const description =
  "HLV Park Hang-seo luôn có những khoảnh khắc đầy thú vị từ việc nổi cáu với trọng tài đến cử chỉ tình cảm, ấm áp dành cho học trò.";
const link =
  "noi-cau-truoc-trong-tai-nhung-hlv-park-hang-seo-vo-cung-tinh-cam-om-hoc-tro-sau-tran-thang-indonesia";
const tagparam = [
  "tuyen-viet-nam-tham-du-vong-loai-world-cup-2022",
  "tuyen-viet-nam",
  "park-hang-seo",
  "bong-da",
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

export default function page_20210607183422() {
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
                    <ContentImage
                      src="https://sport5.mediacdn.vn/thumb_w/700/158855217956261888/2021/6/8/aa06ea70b532416c1823-16230937319701751848566.jpg"
                      alt="Tuyen Viet Nam Tham Du Vong Loai World Cup 2022, Tuyen Viet Nam, Park Hang Seo, Bong Da, "
                      note="HLV Park Hang-seo luôn được người hâm mộ yêu mến không chỉ bởi cái tài dẫn dắt mà mỗi khi ông xuất hiện đều để lại một ấn tượng vô cùng thú vị (Ảnh: Hiếu Lương)"
                    />
                    <p>
                      Ở trận đấu Việt Nam giành chiến thắng 4-0 trước Indonesia
                      này HLV Park Hang-seo lại gây chú ý với những tình huống
                      "phân bua" với trọng tài để bảo vệ học trò và sau khi trận
                      đấu kết thúc ông ân cần ôm từng "đứa con" của mình (Ảnh:
                      Hiếu Lương)
                    </p>
                    <p>
                      HLV Park Hang-seo cùng ban huấn luyện của tuyển Việt Nam
                      không thể kiềm chế được bức xúc sau tình huống tiền vệ
                      Tuấn Anh bị số 5 bên phía Indonesia vào bóng thô bạo nhưng
                      lại không phải nhận thẻ đỏ (Ảnh: Hiếu Lương)
                    </p>
                    <ContentImage
                      src="https://sport5.mediacdn.vn/158855217956261888/2021/6/8/088e2df964bb90e5c9aa-1623090894156736198950.jpg"
                      alt="Tuyen Viet Nam Tham Du Vong Loai World Cup 2022, Tuyen Viet Nam, Park Hang Seo, Bong Da, "
                    />
                    <ContentImage
                      src="https://sport5.mediacdn.vn/158855217956261888/2021/6/8/c7a93ee161a395fdccb2-16230937311031857117219.jpg"
                      alt="Tuyen Viet Nam Tham Du Vong Loai World Cup 2022, Tuyen Viet Nam, Park Hang Seo, Bong Da, "
                      note=""
                    />
                    <ContentImage
                      src="https://sport5.mediacdn.vn/158855217956261888/2021/6/8/847770e839aacdf494bb-1623093731629843965531.jpg"
                      alt="Tuyen Viet Nam Tham Du Vong Loai World Cup 2022, Tuyen Viet Nam, Park Hang Seo, Bong Da, "
                      note=""
                    />
                    <ContentImage
                      src="https://sport5.mediacdn.vn/158855217956261888/2021/6/8/4fb6e62daf6f5b31027e-16230937333481969912972.jpg"
                      alt="Tuyen Viet Nam Tham Du Vong Loai World Cup 2022, Tuyen Viet Nam, Park Hang Seo, Bong Da, "
                      note=""
                    />
                    <p>
                      Thầy Park ngay lập lực đã tìm đến trọng tài để "phua bua"
                      rõ ràng cho tình huống của Tuấn Anh bị phạm lỗi khiến anh
                      buộc phải "rút khỏi sân" để "giữ chân" (Ảnh: Hiếu Lương)
                    </p>
                    <ContentImage
                      src="https://sport5.mediacdn.vn/158855217956261888/2021/6/8/18db8a5bd51921477808-16230937329872015519681.jpg"
                      alt="Tuyen Viet Nam Tham Du Vong Loai World Cup 2022, Tuyen Viet Nam, Park Hang Seo, Bong Da, "
                      note=""
                    />
                    <ContentImage
                      src="https://sport5.mediacdn.vn/158855217956261888/2021/6/8/3a7829fa76b882e6dba9-16230937312841517797883.jpg"
                      alt="Tuyen Viet Nam Tham Du Vong Loai World Cup 2022, Tuyen Viet Nam, Park Hang Seo, Bong Da, "
                      note=""
                    />
                    <p>
                      Sau trận đấu vị chiến lượng gia người Hàn Quốc tìm Quang
                      Hải, người đã lập công và "ôm" trò vào lòng (Ảnh: Hiếu
                      Lương)
                    </p>
                    <ContentImage
                      src="https://sport5.mediacdn.vn/158855217956261888/2021/6/8/449e9a01c543311d6852-16230937322791901608105.jpg"
                      alt="Tuyen Viet Nam Tham Du Vong Loai World Cup 2022, Tuyen Viet Nam, Park Hang Seo, Bong Da, "
                      note=""
                    />
                    <ContentImage
                      src="https://sport5.mediacdn.vn/158855217956261888/2021/6/8/0238b8ace7ee13b04aff-1623093731462256284109.jpg"
                      alt="Tuyen Viet Nam Tham Du Vong Loai World Cup 2022, Tuyen Viet Nam, Park Hang Seo, Bong Da, "
                      note=""
                    />
                    <ContentImage
                      src="https://sport5.mediacdn.vn/158855217956261888/2021/6/8/0ca8c2169d54690a3045-16230937337291708469637.jpg"
                      alt="Tuyen Viet Nam Tham Du Vong Loai World Cup 2022, Tuyen Viet Nam, Park Hang Seo, Bong Da, "
                      note="Sau đó ông Park đi hỏi han, chúc mừng và bắt tay từng cầu
                    thủ của tuyển Việt Nam (Ảnh: Hiếu Lương)"
                    />

                    <ContentImage
                      src="https://sport5.mediacdn.vn/158855217956261888/2021/6/8/59cbc76098226c7c3533-16230937321137832650.jpg"
                      alt="Tuyen Viet Nam Tham Du Vong Loai World Cup 2022, Tuyen Viet Nam, Park Hang Seo, Bong Da, "
                      note="Ông Park còn đặc biệt 'xoa đầu' và nói chuyện với tiền vệ
                    Phan Văn Đức (Ảnh: Hiếu Lương)"
                    />

                    <ContentImage
                      src="https://sport5.mediacdn.vn/thumb_w/700/158855217956261888/2021/6/8/750f56770935fd6ba424-16230937317891460558085.jpg"
                      alt="Tuyen Viet Nam Tham Du Vong Loai World Cup 2022, Tuyen Viet Nam, Park Hang Seo, Bong Da, "
                      note="HLV trưởng ĐT Việt Nam cũng rất thân thiện bắt tay khi cầu thủ Indonesia đến chào hỏi (Ảnh: Hiếu Lương)"
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
