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
"timestamp": '14/06/2021 09:30 AM',
"title": 'HLV Park Hang-seo bị cấm chỉ đạo trận UAE',
"description": 'Sau một pha tranh cãi nảy lửa với cầu thủ Malaysia trong trận đấu rạng sáng 12/6, ông Park Hang-seo đã phải nhận một thẻ vàng.',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/12/photo-2-1623441592144528997364.jpg',
"alt": 'Viet Nam Vs Malaysia Tai Vong Loai World Cup 2022, Tuyen Viet Nam, Viet Nam Vs Malaysia, Park Hang Seo, ',
"category": 'news',
"date": '14/06/2021',
"time": '09:30 AM',
"link": '/hlv-park-hang-seo-bi-cam-chi-dao-tran-uae',
"zcomponent": 'page_20210614093003',
"filepath": './20210614093003-hlv-park-hang-seo-bi-cam-chi-dao-tran-uae.js'
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
const title = "HLV Park Hang-seo bị cấm chỉ đạo trận UAE";
const author = "THÀNH ĐẠT,";
const source = "Nhịp sống Việt";
const timestamp = "14/06/2021 09:30 AM";
const description =
  "Sau một pha tranh cãi nảy lửa với cầu thủ Malaysia trong trận đấu rạng sáng 12/6, ông Park Hang-seo đã phải nhận một thẻ vàng.";
const link = "hlv-park-hang-seo-bi-cam-chi-dao-tran-uae";
const tagparam = [
  "viet-nam-vs-malaysia-tai-vong-loai-world-cup-2022",
  "tuyen-viet-nam",
  "viet-nam-vs-malaysia",
  "park-hang-seo",
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

export default function page_20210614093003() {
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
              >
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
                      Đây đã là thẻ vàng thứ 2 của chiến lược gia người Hàn Quốc
                      tại vòng loại World Cup 2022. Thẻ đầu tiên của ông phải
                      nhận là ở trận đối đầu với tuyển Thái Lan. Điều này khiến
                      HLV Park Hang-seo sẽ bị cấm chỉ đạo trận đấu cuối cùng gặp
                      các cầu thủ UAE. Trước đó người đồng hương của ông là Shin
                      Tae-yong cũng đã bị cấm chỉ đạo trận đấu cùng giờ giữa
                      Indonesia và UAE. Không có HLV Park Hang-seo sẽ là một
                      thiếu vắng đáng quan ngại cho đội tuyển Việt Nam trước
                      lượt trận cuối gặp ĐT UAE.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/12/photo-1-1623441590371992434621.jpg"
                      alt="Viet Nam Vs Malaysia Tai Vong Loai World Cup 2022, Tuyen Viet Nam, Viet Nam Vs Malaysia, Park Hang Seo, "
                      note="Tình huống dẫn đến thẻ vàng cho HLV Park Hang-seo (Ảnh: Hiếu Lương)"
                    />
                    <p>
                      Sau một pha bóng thô bạo của 1 cầu thủ Malaysia với Nguyễn
                      Phong Hồng Duy, HLV Park Hang-seo đã phản ứng vô cùng
                      quyết liệt. Một màn đôi co nảy lửa giữa thầy Park và
                      Krasniqi đã xảy ra khiến trọng tài chính quyết định rút
                      thẻ phạt cho cả hai.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/12/photo-1-1623441592698671558657.png"
                      alt="Viet Nam Vs Malaysia Tai Vong Loai World Cup 2022, Tuyen Viet Nam, Viet Nam Vs Malaysia, Park Hang Seo, "
                      note="Ông cũng đã phải nổi nóng với CĐV (Ảnh: Hiếu Lương)"
                    />
                    <p>
                      Đây không phải lần đầu tiên HLV Park Hang-seo bị phạt vì
                      lỗi phản ứng. Trước đó ông từng bị phạt tới 5000 USD và
                      cấm chỉ đạo 4 trận giao hữu vì phản ứng với trọng tài ở
                      SEA Games 2019. Ông từng hóm hỉnh trêu đùa về vấn đề này:
                      "Ở Hàn Quốc, tôi bị đuổi suốt".
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Ở trận đấu cùng giờ ngày 11/6, UAE đã vùi dập Indonesia
                      5-0 và tạo ra sức ép rất lớn cho ngôi đầu bảng của ĐT Việt
                      Nam. Hai đội sẽ gặp nhau trong trận đấu cuối cùng vào ngày
                      15/6.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/12/photo-2-1623441592144528997364.jpg"
                      alt="Viet Nam Vs Malaysia Tai Vong Loai World Cup 2022, Tuyen Viet Nam, Viet Nam Vs Malaysia, Park Hang Seo, "
                      note="Ở trận đấu cùng giờ ĐT UAE đã giành thắng lợi 5-0 và áp sát ĐT Việt Nam. Trận đấu cuối của hai đội sẽ trở nên vô cùng nóng bỏng (Ảnh: UAEFA)"
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
