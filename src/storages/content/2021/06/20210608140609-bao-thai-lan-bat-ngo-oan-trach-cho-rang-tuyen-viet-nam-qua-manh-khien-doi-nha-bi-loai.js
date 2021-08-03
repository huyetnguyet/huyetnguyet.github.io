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
"timestamp": 08/06/2021 02:06 PM",
"title": Báo Thái Lan bất ngờ “oán trách”, cho rằng tuyển Việt Nam quá mạnh khiến đội nhà bị loại",
"description": Truyền thông Thái Lan cho rằng chính sự xuất sắc của tuyển Việt Nam đã góp phần khiến đội nhà phải sớm chấm dứt giấc mơ World Cup.",
"src": https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/8/photo-1-162314340016446582388.jpg",
"alt": Thai Lan, Viet Nam, Vong Loai World Cup 2022, ",
"category": news",
"date": 08/06/2021",
"time": 02:06 PM",
"link": "/bao-thai-lan-bat-ngo-oan-trach-cho-rang-tuyen-viet-nam-qua-manh-khien-doi-nha-bi-loai",
"zcomponent": page_20210608140609",
"filepath": ./20210608140609-bao-thai-lan-bat-ngo-oan-trach-cho-rang-tuyen-viet-nam-qua-manh-khien-doi-nha-bi-loai.js"
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
  "Báo Thái Lan bất ngờ “oán trách”, cho rằng tuyển Việt Nam quá mạnh khiến đội nhà bị loại";
const author = "TIỂU MÃ,";
const source = "Pháp luật&Bạn đọc";
const timestamp = "08/06/2021 02:06 PM";
const description =
  "Truyền thông Thái Lan cho rằng chính sự xuất sắc của tuyển Việt Nam đã góp phần khiến đội nhà phải sớm chấm dứt giấc mơ World Cup.";
const link =
  "bao-thai-lan-bat-ngo-oan-trach-cho-rang-tuyen-viet-nam-qua-manh-khien-doi-nha-bi-loai";
const tagparam = ["thai-lan", "viet-nam", "vong-loai-world-cup-2022"];
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

export default function page_20210608140609() {
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
                      Tuyển Việt Nam và Thái Lan không chạm trán nhau tại UAE do
                      hai đội đã đối đầu 2 trận ở bảng G vòng loại World Cup với
                      các kết quả bất phân thắng bại (từ năm 2019). Thế nhưng,
                      hiện tuyển Thái Lan và Việt Nam lại đang thể hiện phong độ
                      trái ngược và ở vào hoàn cảnh đối lập nhau.
                    </p>
                    <p>
                      Tuyển Thái Lan gần như đã bị loại sau trận thua UAE. Ngược
                      lại, tuyển Việt Nam thênh thang cơ hội tiến vào vòng loại
                      thứ 3 dành cho 12 đội xuất sắc nhất châu Á.
                    </p>
                    <p>
                      Đáng chú ý, hãng truyền thông Spring News của Thái Lan
                      trưa 8/6 đăng tải bài bình luận nói về 5 lý do chính khiến
                      "Voi chiến" bị loại khỏi đấu trường vòng loại World Cup.
                      Một lý do quan trọng được tờ báo này nhắc tới đó chính là
                      sức mạnh của tuyển Việt Nam.
                    </p>
                    <p>
                      Spring News viết: "Ngược lại với tuyển Thái Lan thì tuyển
                      Việt Nam - đối thủ lớn của 'Voi chiến' lại thể hiện quá
                      tốt dưới sự chỉ đạo của HLV Park Hang-seo. Họ đang nắm quá
                      nhiều cơ hội để lần đầu tiên trong lịch sử tiến vào vòng
                      loại cuối cùng dành cho 12 đội tuyển xuất sắc nhất châu Á.
                    </p>
                    <p>
                      Việt Nam - đối thủ lớn nhất của chúng ta ở khu vực Đông
                      Nam Á đã cho thấy sự phát triển mạnh mẽ về nhiều mặt.
                      Những giải đấu gần đây, Việt Nam đều tỏ ra mạnh mẽ hơn
                      nhiều khi cạnh tranh cùng với Thái Lan. Điều này phản ánh
                      rõ một sự thật rằng Việt Nam có thể tiến xa hơn Thái Lan ở
                      đấu trường quốc tế".
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/8/photo-1-16231433964261324745085.png"
                      alt="Thai Lan, Viet Nam, Vong Loai World Cup 2022, "
                      note="Spring News cho rằng sức mạnh của tuyển Việt Nam là 1 trong 5 nguyên nhân khiến tuyển Thái Lan bị loại sớm"
                    />
                    <p>
                      Ngoài việc đề cập tới sức mạnh của tuyển Việt Nam, tờ
                      Spring News chỉ ra 4 lý do chính khác khiến Thái Lan chấm
                      dứt giấc mơ World Cup.
                    </p>
                    <p>
                      Lý do đầu tiên được nhắc tới thuộc về yếu tố khách quan do
                      tác động của dịch Covid-19, khiến các cầu thủ Thái Lan
                      phải nghỉ thi đấu trong thời gian quá dài, dẫn tới việc
                      các tuyển thủ bị hao tổn rất nhiều về cả thể lực lẫn phong
                      độ, kỹ chiến thuật.
                    </p>
                    <p>
                      Nguyên nhân tiếp theo nằm ở những phương án chiến thuật
                      của HLV Nishino đã không mang lại tác dụng trước hai đối
                      thủ Indonesia và UAE. Spring News cho rằng HLV Nishino đã
                      thất bại khi chèo lái tuyển Thái Lan bởi trong tổng số 11
                      trận dẫn dắt "Voi chiến", nhà cầm quân người Nhật chỉ
                      thắng đúng 1 trận trong khi thua 5, hòa 5.
                    </p>
                    <p>
                      Vai trò của HLV Nishino cũng là lý do quan trọng khiến
                      "Voi chiến" bị loại
                    </p>
                    <p>
                      Lý do nữa nằm ở việc tuyển Thái Lan vắng một số trụ cột
                      đang thi đấu tại J.League như nhạc trưởng Chanathip
                      Songkrasin hay hậu vệ cánh Theerathorn Bunmathan. Chính
                      điều này ảnh hưởng tới cả khả năng tấn công lẫn phòng ngự
                      của "Voi chiến" ở hai trận vừa qua tại vòng loại World
                      Cup.
                    </p>
                    <p>
                      Yếu tố cuối cùng được nhắc tới nằm ở vấn đề tâm lý. Tờ
                      Spring News cho rằng tuyển Thái Lan chưa thể hiện được
                      khát khao chiến thắng ở hai trận đã qua và đó là một trong
                      những lý do "Voi chiến" bị loại. Theo tờ báo xứ Chùa Vàng,
                      "Voi chiến" cần biết đứng dậy sau khi vấp ngã và họ phải
                      làm tất cả để giành chiến thắng ở trận cuối cùng gặp
                      Malaysia (ngày 15/6) ngay cả khi không còn cơ hội đi tiếp.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/8/photo-2-16231434006821621492048.jpg"
                      alt="Thai Lan, Viet Nam, Vong Loai World Cup 2022, "
                      note="Tờ báo Thái Lan cho rằng đội nhà bị loại sớm vì 5 lý do chính"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/8/photo-1-162314340016446582388.jpg"
                      alt="Thai Lan, Viet Nam, Vong Loai World Cup 2022, "
                      note=""
                    />
                  </div>
                  <AdsHorizontal />
                </div>

                <RandomFeature />

                <div className="source">Source: {source}</div>

                <FacebookShareButton link={facebookLinkShare} />

                <div className="tags">Tags: {updatedTags}</div>
              </div>
            </div>
          </div>
        </div>
      </Content>
    </>
  );
}
