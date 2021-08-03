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
"timestamp": 07/06/2021 06:36 PM",
"title": Fan Việt Nam chế loạt ảnh hài hước sau trận thắng Indonesia",
"description": Đội tuyển Việt Nam giành chiến thắng dễ dàng 4-0 trước đội tuyển Indonesia. Fan Việt Nam được dịp chế ảnh 'cà khịa' lối đá thô bạo của thầy trò HLV Shin Tae-yong.",
"src": https://sport5.mediacdn.vn/thumb_w/700/158855217956261888/2021/6/8/19348880914978784438780196833412912387709210n-1623093367726564978067.jpg",
"alt": Tuyen Viet Nam Tham Du Vong Loai World Cup 2022, World Cup 2022, Tuyen Viet Nam Indonesia, Bong Da, ",
"category": news",
"date": 07/06/2021",
"time": 06:36 PM",
"link": "/fan-viet-nam-che-loat-anh-hai-huoc-sau-tran-thang-indonesia",
"zcomponent": page_20210607183618",
"filepath": ./20210607183618-fan-viet-nam-che-loat-anh-hai-huoc-sau-tran-thang-indonesia.js"
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
const title = "Fan Việt Nam chế loạt ảnh hài hước sau trận thắng Indonesia";
const author = "XT6,";
const source = "Nhịp sống Việt";
const timestamp = "07/06/2021 06:36 PM";
const description =
  "Đội tuyển Việt Nam giành chiến thắng dễ dàng 4-0 trước đội tuyển Indonesia. Fan Việt Nam được dịp chế ảnh 'cà khịa' lối đá thô bạo của thầy trò HLV Shin Tae-yong.";
const link = "fan-viet-nam-che-loat-anh-hai-huoc-sau-tran-thang-indonesia";
const tagparam = [
  "tuyen-viet-nam-tham-du-vong-loai-world-cup-2022",
  "world-cup-2022",
  "tuyen-viet-nam-indonesia",
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

export default function page_20210607183618() {
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
                      src="https://sport5.mediacdn.vn/thumb_w/700/158855217956261888/2021/6/8/19348880914978784438780196833412912387709210n-1623093367726564978067.jpg"
                      alt="Tuyen Viet Nam Tham Du Vong Loai World Cup 2022, World Cup 2022, Tuyen Viet Nam Indonesia, Bong Da, "
                      note=""
                    />
                    <p>
                      Điểm nhấn hiệp 1 của trận đấu là pha phạm lỗi thô bạo của
                      hậu vệ Pratama khi anh vào bóng bằng gầm giày với Tuấn Anh
                      khiến khán giả phẫn nộ. Sau tình huống đó, Duy Mạnh đã lao
                      vào bóp cổ, đẩy hậu vệ này, không cho anh ta cự cãi. Fan
                      Việt Nam được dịp chế ảnh "cà khịa" hậu vệ Indonesia khi
                      anh hoàn toàn yếu thế hơn Duy Mạnh (Ảnh: Owker)
                    </p>
                    <ContentImage
                      src="https://sport5.mediacdn.vn/158855217956261888/2021/6/8/1915434891203815502200755837650515480167529n-1623093400218287278282.jpg"
                      alt="Tuyen Viet Nam Tham Du Vong Loai World Cup 2022, World Cup 2022, Tuyen Viet Nam Indonesia, Bong Da, "
                      note="
                    Sau tình huống đó, thầy Park thể hiện thái độ không hài lòng
                    với quyết định của trọng tài. Tuy nhiên biểu cảm của ông lại
                    rất đáng yêu trong bức ảnh chế của người hâm mộ (Ảnh: Phan
                    Nguyen)"
                    />
                    <p>
                      Sang hiệp 2, ĐTVN thi đấu hưng phấn và liên tiếp ghi 4 bàn
                      thắng vào lưới Indonesia. Một hiệp đấu khá nhàn của thủ
                      môn Tấn Trường khi anh không phải làm việc quá nhiều (Ảnh:
                      Văn Tặng, Xuân Tài)
                    </p>
                    <ContentImage
                      src="https://sport5.mediacdn.vn/158855217956261888/2021/6/8/19076165445139741619465414148602185973451660n-1623097859995180874920.jpg"
                      alt="Tuyen Viet Nam Tham Du Vong Loai World Cup 2022, World Cup 2022, Tuyen Viet Nam Indonesia, Bong Da, "
                      note=""
                    />{" "}
                    <ContentImage
                      src="https://sport5.mediacdn.vn/thumb_w/700/158855217956261888/2021/6/8/1879116192623829890028348724185176521303690n-1623093367547361987680.jpg"
                      alt="Tuyen Viet Nam Tham Du Vong Loai World Cup 2022, World Cup 2022, Tuyen Viet Nam Indonesia, Bong Da, "
                      note="Văn Toàn vào sân ngay từ đầu và tạo ra nhiều cơ hội nguy hiểm, tuy nhiên anh vẫn kém may mắn khi không thể ghi bàn vào lưới Indonesia. Anh cũng bị các cầu thủ bên phía Indonesia kèm rất sát và liên tục phạm lỗi (Ảnh: Owker)"
                    />
                    <ContentImage
                      src="https://sport5.mediacdn.vn/158855217956261888/2021/6/8/1921706943161999566592113442390134495044317n-1623093367684781884904.jpg"
                      alt="Tuyen Viet Nam Tham Du Vong Loai World Cup 2022, World Cup 2022, Tuyen Viet Nam Indonesia, Bong Da, "
                      note=""
                    />
                    <p></p>
                    <ContentImage
                      src="https://sport5.mediacdn.vn/158855217956261888/2021/6/8/18998023235182922183964844316269676853282665n-16230933676491535090752.jpg"
                      alt="Tuyen Viet Nam Tham Du Vong Loai World Cup 2022, World Cup 2022, Tuyen Viet Nam Indonesia, Bong Da, "
                      note=""
                    />
                    <p>
                      Những câu bình luận "đi vào lòng người" của BLV Tạ Biên
                      Cương (Ảnh: Cao thủ, Top comments)
                    </p>
                    <ContentImage
                      src="https://sport5.mediacdn.vn/158855217956261888/2021/6/8/1957145953096369473022504928693204171482570n-1623096979878200877999.png"
                      alt="Tuyen Viet Nam Tham Du Vong Loai World Cup 2022, World Cup 2022, Tuyen Viet Nam Indonesia, Bong Da, "
                      note=""
                    />
                    <ContentImage
                      src="https://sport5.mediacdn.vn/158855217956261888/2021/6/8/1900718993082128708557275143951502745452764n-16230933676601034596943.jpg"
                      alt="Tuyen Viet Nam Tham Du Vong Loai World Cup 2022, World Cup 2022, Tuyen Viet Nam Indonesia, Bong Da, "
                      note=""
                    />
                    <ContentImage
                      src="https://sport5.mediacdn.vn/158855217956261888/2021/6/8/van-tang-162309336778316954076.jpg"
                      alt="Tuyen Viet Nam Tham Du Vong Loai World Cup 2022, World Cup 2022, Tuyen Viet Nam Indonesia, Bong Da, "
                      note=""
                    />
                    <ContentImage
                      src="https://sport5.mediacdn.vn/158855217956261888/2021/6/8/1906647873205154863453997983932237722209258n-16230933676721292629104.jpg"
                      alt="Tuyen Viet Nam Tham Du Vong Loai World Cup 2022, World Cup 2022, Tuyen Viet Nam Indonesia, Bong Da, "
                      note=""
                    />
                    Thủ môn Indonesia nhận cái kết đắng khi "coi thường" sức
                    mạnh của đội tuyển Việt Nam (Ảnh: Top Comments)
                    <ContentImage
                      src="https://sport5.mediacdn.vn/158855217956261888/2021/6/8/1920130625358691044638803843889482476120649n-16230960051911292390294.png"
                      alt="Tuyen Viet Nam Tham Du Vong Loai World Cup 2022, World Cup 2022, Tuyen Viet Nam Indonesia, Bong Da, "
                      note=""
                    />
                    <ContentImage
                      src="https://sport5.mediacdn.vn/thumb_w/700/158855217956261888/2021/6/8/19586192436340064168574676580336466947845491n-1623096855038769553696.png"
                      alt="Tuyen Viet Nam Tham Du Vong Loai World Cup 2022, World Cup 2022, Tuyen Viet Nam Indonesia, Bong Da, "
                      note="
                    Công Phượng không đi tìm bàn thắng mà bàn thắng tự tìm đến với
                    Công Phượng (Ảnh: Top Comments)"
                    />
                    <ContentImage
                      src="https://sport5.mediacdn.vn/thumb_w/700/158855217956261888/2021/6/8/19165550344281616405370947842425317650523292n-1623096005181317317929.png"
                      alt="Tuyen Viet Nam Tham Du Vong Loai World Cup 2022, World Cup 2022, Tuyen Viet Nam Indonesia, Bong Da, "
                      note="Với lối đá phạm lỗi nhiều như của Indonesia không thể ghi được nhiều bàn thắng thì mình hãy ghi thật nhiều thẻ vàng. HLV Shin Tae-yong nhận 2 thẻ vàng và chính thức bị cấm chỉ đạo ở trận đấu tiếp theo. (Ảnh: V Gaming)"
                    />
                    <ContentImage
                      src="https://sport5.mediacdn.vn/thumb_w/700/158855217956261888/2021/6/8/19483104222219193879423164977693857693245100n-1623096453086746527586.jpg"
                      alt="Tuyen Viet Nam Tham Du Vong Loai World Cup 2022, World Cup 2022, Tuyen Viet Nam Indonesia, Bong Da, "
                      note="Poster rất độc đáo về Indonesia của một fan Việt Nam (Ảnh: Nguyen The Anh)"
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
