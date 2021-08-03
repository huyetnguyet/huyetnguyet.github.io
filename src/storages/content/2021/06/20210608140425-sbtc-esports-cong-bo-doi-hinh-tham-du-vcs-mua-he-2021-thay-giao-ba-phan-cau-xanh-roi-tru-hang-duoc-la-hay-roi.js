import React from "react";
import "components/page.scss";
import { AdsHorizontal, AdsVertical } from "components/adsMethods";
import { RandomFeature, RelationNews } from "components/methods";

import { Content, ContentImage, FacebookShareButton } from "components/content";

import { Helmet } from "react-helmet";

/* ---------------------------------------------------------------- */

/*

 {
"timestamp": 08/06/2021 02:04 PM",
"title": SBTC Esports công bố đội hình tham dự VCS Mùa Hè 2021, Thầy Giáo Ba phán câu xanh rời: Trụ hạng được là hay rồi",
"description": Mất đi dàn sao của mình, SBTC Esports có vẻ như chỉ đặt một mục tiêu khiêm tốn tại VCS Mùa Hè 2021.",
"src": https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/8/photo-1-1623169862035949007145.jpg",
"alt": Lien Minh Huyen Thoai, Sbtc Esports, games, Tin Game, Game, Lmht, Tin Tuc Game, Tin Lmht, Tin Lol, Vcs Mua He 2021, Vcs, Thay Giao Ba, ",
"category": games",
"date": 08/06/2021",
"time": 02:04 PM",
"link": "/sbtc-esports-cong-bo-doi-hinh-tham-du-vcs-mua-he-2021-thay-giao-ba-phan-cau-xanh-roi-tru-hang-duoc-la-hay-roi",
"zcomponent": page_20210608140425",
"filepath": ./20210608140425-sbtc-esports-cong-bo-doi-hinh-tham-du-vcs-mua-he-2021-thay-giao-ba-phan-cau-xanh-roi-tru-hang-duoc-la-hay-roi.js"
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "games";
const categoryLink = "/games";
const title =
  "SBTC Esports công bố đội hình tham dự VCS Mùa Hè 2021, Thầy Giáo Ba phán câu xanh rời: Trụ hạng được là hay rồi";
const author = "Loris CarryUs";
const source = "Pháp luật và bạn đọc";
const timestamp = "08/06/2021 02:04 PM";
const description =
  "Mất đi dàn sao của mình, SBTC Esports có vẻ như chỉ đặt một mục tiêu khiêm tốn tại VCS Mùa Hè 2021.";
const link =
  "sbtc-esports-cong-bo-doi-hinh-tham-du-vcs-mua-he-2021-thay-giao-ba-phan-cau-xanh-roi-tru-hang-duoc-la-hay-roi";
const tagparam = [
  "lien-minh-huyen-thoai",
  "sbtc-esports",
  "se",
  "tin-game",
  "game",
  "lmht",
  "tin-tuc-game",
  "tin-lmht",
  "tin-lol",
  "vcs-mua-he-2021",
  "vcs",
  "thay-giao-ba",
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

export default function page_20210608140425() {
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
                      Mới đây, <strong>SBTC Esports</strong> đã chính thức đưa
                      ra thông báo về danh sách đội hình tham dự{" "}
                      <strong>VCS</strong> Mùa Hè 2021. Không có nhiều thông tin
                      quá bất ngờ, khi những bản hợp đồng "tin đồn" trước đó như
                      TH (đổi tên thành Hiro02) hay CBL đều đã xuất hiện, và
                      SBTC Esports của giải mùa hè sẽ là một đội tuyển hoàn toàn
                      khác biệt so với chính họ ở giải mùa xuân:
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/8/photo-1-1623169862035949007145.jpg"
                      alt="Lien Minh Huyen Thoai, Sbtc Esports, games, Tin Game, Game, Lmht, Tin Tuc Game, Tin Lmht, Tin Lol, Vcs Mua He 2021, Vcs, Thay Giao Ba, "
                      note=""
                    />
                    <p>
                      - Đường trên: Trần "Hiro02" Lê Trung Hậu (TH), Đinh
                      "Marcus" Bùi Quốc Cường.
                    </p>
                    <p>- Đi rừng: Nguyễn "K1THY1" Nhật Trường.</p>
                    <p>- Đường giữa: Trần "Vin" Hoài Vinh (Vince).</p>
                    <p>- Xạ thủ: Nguyễn "Celebrity" Phước Long Hiệp.</p>
                    <p>
                      - Hỗ trợ: Nguyễn "Slay" Ngọc Hùng, Nguyễn "CBL" Võ Thành
                      Luân.
                    </p>
                    <p>- HLV trưởng : Ngô "Violet" Mạnh Quyền.</p>
                    <p>- HLV team Academy: Võ "Petland" Huỳnh Quang Huy.</p>
                    <p>- Quản lý team: Phan "JayX" Ngọc Tiến.</p>
                    <p>- Trợ lý HLV: Trần "HYPE" Hữu Toàn.</p>
                    <p>
                      Trong số các tuyển thủ của <strong>SBTC Esports</strong>{" "}
                      tham dự <strong>VCS</strong> Mùa Hè 2021, Marcus và K1THY1
                      là hai thành viên được đôn lên từ đội Academy, sau đợt
                      tuyển chọn khá gắt gao hồi đầu mùa hè vừa qua. Ngoài ra,
                      Vin, TH cũng là những tuyển thủ trẻ tiềm năng đã từng có
                      kinh nghiệm thi đấu tại VCS.
                    </p>
                    <p>
                      Trong bối cảnh mất đi hàng loạt ngôi sao đẳng cấp, thì có
                      lẽ sự bổ sung nhân sự được kỳ vọng nhất của{" "}
                      <strong>SE</strong> trong kỳ chuyển nhượng vừa qua là vị
                      trí hỗ trợ, khi CBL - Tuyển thủ từng vô địch{" "}
                      <strong>VCS</strong> trong màu áo Team Flash, gia nhập để
                      thay thế vị trí của Venus. Rốt cuộc thì sau nhiều biến cố,
                      khu vực đường dưới sẽ trở thành nơi "gửi gắm niềm tin" của
                      SE, khi đây là vị trí tập hợp những ngôi sao đẳng cấp nhất
                      mà họ có thể sở hữu.
                    </p>
                    <p>
                      So với thời điểm trình làng <strong>VCS</strong> cách đây
                      nửa năm và vẫn còn "ôm mộng vô địch" với đội hình toàn
                      sao, lực lượng của <strong>SBTC Esports</strong> hiện tại
                      rõ ràng đã yếu đi khá nhiều, với việc mất đi Zeros, Dia1,
                      Yijin. Và có lẽ vì vậy nên mục tiêu tại giải VCS Mùa Hè
                      2021 của đội tuyển này cũng "khiêm tốn" hơn nhiều. Thậm
                      chí, khi thông báo đội hình của <strong>SE</strong> được
                      công bố, Thầy Giáo Ba - Người sáng lập đội, còn phán một
                      câu xanh rờn: "Line-up này trụ hạng được là hay rồi đó."
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/8/thay-giao-ba-16231702432751004425151.png"
                      alt="Lien Minh Huyen Thoai, Sbtc Esports, games, Tin Game, Game, Lmht, Tin Tuc Game, Tin Lmht, Tin Lol, Vcs Mua He 2021, Vcs, Thay Giao Ba, "
                      note=""
                    />
                    <p>
                      Trước đó, khi nhận định về đội hình dự kiến của SBTC ở
                      giải đấu lần này, BLV Hoàng Luân cũng thẳng thắn cho rằng{" "}
                      <strong>SE</strong> nhiều khả năng chỉ có thể cán đích ở
                      vị trí top 7/8. Có lẽ, việc sứt mẻ lực lượng nghiêm trọng
                      cũng khiến nhiều fan SE buộc phải đồng tình với những nhận
                      định này, khi viễn cảnh đua trụ hạng là điều hoàn toàn có
                      thể xảy đến khi Tam Kê bước vào giải với một đội hình trẻ
                      và chưa có nhiều kinh nghiệm chinh chiến.
                    </p>
                    <p>
                      Một số người hâm mộ lạc quan thì có thể mơ tới việc{" "}
                      <strong>SE</strong> trở thành một Saigon Buffalo thứ 2,
                      nhưng có vẻ điều này sẽ khó xảy ra, bởi thực tế những
                      thành viên SGB hiện tại đều là sản phẩm ưu tú từ lò đào
                      tạo trẻ của đội, trong khi SE thì mới khởi động mô hình
                      Academy được... vài tuần.
                    </p>
                    <p>
                      Có lẽ động thái tích cực nhất mà các fan{" "}
                      <strong>SE</strong> có thể kỳ vọng, đó là việc Team
                      Academy của họ sẽ được định hướng phát triển lâu dài, và
                      hứa hẹn sẽ cho ra lò nhiều tài năng trẻ triển vọng trong
                      tương lai.
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
