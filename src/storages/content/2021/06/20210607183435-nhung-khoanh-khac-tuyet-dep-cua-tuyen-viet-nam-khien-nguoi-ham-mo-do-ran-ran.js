import React from "react";
import "components/page.scss";
import { AdsHorizontal, AdsVertical } from "components/adsMethods";
import { RandomFeature } from "components/methods";

import { Content, ContentImage, FacebookShareButton } from "components/content";

import { Helmet } from "react-helmet";

/* ---------------------------------------------------------------- */

/*

 {
"timestamp": 07/06/2021 06:34 PM",
"title": Những khoảnh khắc tuyệt đẹp của tuyển Việt Nam khiến người hâm mộ 'đổ rần rần'",
"description": Một chiến thắng ngọt ngào đầy bản lĩnh 4-0 trước Indonesia minh chứng cho sự nỗ lực không ngừng nghỉ của tuyển Việt Nam. Thầy trò HLV Park Hang-seo đã mạnh mẽ vượt qua thử thách đầu tiên trên đất UAE.",
"src": ",
"alt": Nhan Hieu Danh Cho Nam, Dong Hanh Cung Dtqgvn, Mensbiore, ",
"category": news",
"date": 07/06/2021",
"time": 06:34 PM",
"link": "/nhung-khoanh-khac-tuyet-dep-cua-tuyen-viet-nam-khien-nguoi-ham-mo-do-ran-ran",
"zcomponent": page_20210607183435",
"filepath": ./20210607183435-nhung-khoanh-khac-tuyet-dep-cua-tuyen-viet-nam-khien-nguoi-ham-mo-do-ran-ran.js"
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
  "Những khoảnh khắc tuyệt đẹp của tuyển Việt Nam khiến người hâm mộ 'đổ rần rần'";
const author = "BẢO BÌNH,";
const source = "Nhịp Sống Việt";
const timestamp = "07/06/2021 06:34 PM";
const description =
  "Một chiến thắng ngọt ngào đầy bản lĩnh 4-0 trước Indonesia minh chứng cho sự nỗ lực không ngừng nghỉ của tuyển Việt Nam. Thầy trò HLV Park Hang-seo đã mạnh mẽ vượt qua thử thách đầu tiên trên đất UAE.";
const link =
  "nhung-khoanh-khac-tuyet-dep-cua-tuyen-viet-nam-khien-nguoi-ham-mo-do-ran-ran";
const tagparam = [
  "nhan-hieu-danh-cho-nam",
  "dong-hanh-cung-dtqgvn",
  "mensbiore",
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

export default function page_20210607183435() {
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
                <div className="contentBody">
                  <ContentImage
                    src="https://sport5.mediacdn.vn/thumb_w/700/158855217956261888/2021/6/8/10471ae36da199ffc0b0-16230908898911426351252.jpg"
                    alt="Nhan Hieu Danh Cho Nam, Dong Hanh Cung Dtqgvn, Mensbiore, "
                    note="Tuyển Việt Nam bước vào trận đấu với Indonesia với sự cổ vũ cuồng nhiệt của người hâm mộ từ quê nhà Việt Nam và cả cổ động viên đang có mặt tại UAE (Ảnh: Hiếu Lương)"
                  />
                  <ContentImage
                    src="https://sport5.mediacdn.vn/thumb_w/700/158855217956261888/2021/6/8/ca344fbc38fecca095ef-16230908907001263561600.jpg"
                    alt="Nhan Hieu Danh Cho Nam, Dong Hanh Cung Dtqgvn, Mensbiore, "
                    note="Nhóm cầu thủ không được đăng ký thi đấu cũng đưa tay lên ngôi sao trên ngực áo với tất cả tình yêu khi Quốc ca của Việt nam vang lên (Ảnh: Hiếu Lương)"
                  />
                  <ContentImage
                    src="https://sport5.mediacdn.vn/thumb_w/700/158855217956261888/2021/6/8/c3896e602722d37c8a33-16230908886631632591943.jpg"
                    alt="Nhan Hieu Danh Cho Nam, Dong Hanh Cung Dtqgvn, Mensbiore, "
                    note="Trận đấu mà các cầu thủ đều rất nỗ lực, hàng phòng ngự có sự góp mặt của đội trưởng Quế Ngọc Hải chơi rất chắc chắn (Ảnh: Hiếu Lương)"
                  />
                  <ContentImage
                    src="https://sport5.mediacdn.vn/158855217956261888/2021/6/8/b17d8ccadc8828d67199-16230908895691822300921.jpg"
                    alt="Nhan Hieu Danh Cho Nam, Dong Hanh Cung Dtqgvn, Mensbiore, "
                    note=""
                  />
                  <ContentImage
                    src="https://sport5.mediacdn.vn/158855217956261888/2021/6/8/7d1422b772f586abdfe4-1623090890878150523468.jpg"
                    alt="Nhan Hieu Danh Cho Nam, Dong Hanh Cung Dtqgvn, Mensbiore, "
                    note="
                    Sự nỗ lực không ngừng nghỉ của tiền đạo Tiến Linh, vượt qua
                    hàng hậu vệ của đối thủ để mở tỉ số cho Việt Nam (Ảnh: Hiếu
                    Lương)"
                  />
                  <ContentImage
                    src="https://sport5.mediacdn.vn/158855217956261888/2021/6/8/d29878172855dc0b8544-16230908924561135473651.jpg"
                    alt="Nhan Hieu Danh Cho Nam, Dong Hanh Cung Dtqgvn, Mensbiore, "
                    note="
                    Bàn thắng mở tỉ số ngọt ngào mở ra những chiến công liên
                    tiếp sau đó của toàn đội. Nụ cười của Tiến Linh toát lên sự
                    tin tin, bản lĩnh đã đốn tim hàng triệu người hâm mộ (Ảnh:
                    Hiếu Lương)"
                  />
                  <ContentImage
                    src="https://sport5.mediacdn.vn/158855217956261888/2021/6/8/6789cf399f7b6b25326a-16230908905311280246809.jpg"
                    alt="Nhan Hieu Danh Cho Nam, Dong Hanh Cung Dtqgvn, Mensbiore, "
                    note=""
                  />
                  <ContentImage
                    src="https://sport5.mediacdn.vn/158855217956261888/2021/6/8/758b8e9adcd8288671c9-16230908920051071043165.jpg"
                    alt="Nhan Hieu Danh Cho Nam, Dong Hanh Cung Dtqgvn, Mensbiore, "
                    note=""
                  />
                  <ContentImage
                    src="https://sport5.mediacdn.vn/158855217956261888/2021/6/8/d52598facdb839e660a9-16230908912622075557923.jpg"
                    alt="Nhan Hieu Danh Cho Nam, Dong Hanh Cung Dtqgvn, Mensbiore, "
                    note=""
                  />
                  <ContentImage
                    src="https://sport5.mediacdn.vn/158855217956261888/2021/6/8/bfc9dadf9c9d68c3318c-1623090894558275325224.jpg"
                    alt="Nhan Hieu Danh Cho Nam, Dong Hanh Cung Dtqgvn, Mensbiore, "
                    note="Những giọt mồ hôi trên trán Quang Hải dưới thời tiết khắc
                    nghiệt gần 40 độ tại UAE khiến pha ăn mừng của anh càng trở
                    nên ngạo nghễ (Ảnh: Hiếu Lương)"
                  />
                  <ContentImage
                    src="https://sport5.mediacdn.vn/158855217956261888/2021/6/8/cc272d9379d18d8fd4c0-1623090892240257497283.jpg"
                    alt="Nhan Hieu Danh Cho Nam, Dong Hanh Cung Dtqgvn, Mensbiore, "
                    note=""
                  />
                  <ContentImage
                    src="https://sport5.mediacdn.vn/158855217956261888/2021/6/8/21ec54d70095f4cbad84-16230908903561181976114.jpg"
                    alt="Nhan Hieu Danh Cho Nam, Dong Hanh Cung Dtqgvn, Mensbiore, "
                    note="Còn tiền đạo Công Phượng mang đặc sản ăn mừng tại V.League
                    ra tận vòng loại World Cup 2022 (Ảnh: Hiếu Lương)"
                  />
                  <ContentImage
                    src="https://sport5.mediacdn.vn/158855217956261888/2021/6/8/51a5c478923a66643f2b-16230916800251460495620.jpg"
                    alt="Nhan Hieu Danh Cho Nam, Dong Hanh Cung Dtqgvn, Mensbiore, "
                    note=""
                  />
                  <ContentImage
                    src="https://sport5.mediacdn.vn/158855217956261888/2021/6/8/61ff3c586a1a9e44c70b-16230916801561753473675.jpg"
                    alt="Nhan Hieu Danh Cho Nam, Dong Hanh Cung Dtqgvn, Mensbiore, "
                    note="  Không gì là không thể khi hậu vệ cũng có chuyển hóa cơ hội
                    thành bàn thắng (Ảnh: Hiếu Lương)"
                  />
                  <ContentImage
                    src="https://sport5.mediacdn.vn/158855217956261888/2021/6/8/b2fee61baf595b070248-162309089322997380574.jpg"
                    alt="Nhan Hieu Danh Cho Nam, Dong Hanh Cung Dtqgvn, Mensbiore, "
                    note=""
                  />
                  <ContentImage
                    src="https://sport5.mediacdn.vn/158855217956261888/2021/6/8/bd2c8923c161353f6c70-1623090891103188184294.jpg"
                    alt="Nhan Hieu Danh Cho Nam, Dong Hanh Cung Dtqgvn, Mensbiore, "
                    note="'Nốt trầm' duy nhất là hình ảnh Tuấn Anh bị phạm lỗi và buộc
                    rời sân để 'giữ chân' khiến người hâm mộ vô cùng thương xót.
                    Tuy nhiên, sự kiên cường, nén đau cống hiến vì màu cờ sắc áo
                    của Tuấn Anh đã trở thành hình mẫu của sự tự tin và khí
                    phách nam nhi trong mắt người hâm mộ nước nhà (Ảnh: Hiếu
                    Lương)"
                  />
                  <ContentImage
                    src="https://sport5.mediacdn.vn/thumb_w/700/158855217956261888/2021/6/8/088e2df964bb90e5c9aa-1623090894156736198950.jpg"
                    alt="Nhan Hieu Danh Cho Nam, Dong Hanh Cung Dtqgvn, Mensbiore, "
                    note=" Ban huấn luyện của Việt Nam đồng lòng lên tiếng khi 'trò
                    cưng' Tuấn Anh bị phạm lỗi thô bạo (Ảnh: Hiếu Lương)"
                  />
                  <ContentImage
                    src="https://sport5.mediacdn.vn/158855217956261888/2021/6/8/daa4a0a2e8e01cbe45f1-16230908890161222515936.jpg"
                    alt="Nhan Hieu Danh Cho Nam, Dong Hanh Cung Dtqgvn, Mensbiore, "
                    note=""
                  />
                  <ContentImage
                    src="https://sport5.mediacdn.vn/158855217956261888/2021/6/8/4c8f2cc25780a3defa91-1623090888347590531882.jpg"
                    alt="Nhan Hieu Danh Cho Nam, Dong Hanh Cung Dtqgvn, Mensbiore, "
                    note=""
                  />
                  <ContentImage
                    src="https://sport5.mediacdn.vn/thumb_w/700/158855217956261888/2021/6/8/b62bffe6aaa45efa07b5-1623092097216241920637.jpg"
                    alt="Nhan Hieu Danh Cho Nam, Dong Hanh Cung Dtqgvn, Mensbiore, "
                    note="Đây là trận đấu mà tuyển Việt Nam đã rất điềm đạm, 'tự tin
                    đối mặt' đoàn kết để đem về chiến thắng 4-0 (Ảnh: Hiếu
                    Lương)"
                  />
                  Một chiến thắng không thể tuyệt vời hơn, tạo niềm tin, sự tự
                  tin cho hành trình chinh phục vòng loại World Cup 2022 của
                  tuyển Việt Nam. Ở trận đấu tiếp theo, tuyển Việt Nam "sẵn sàng
                  đối mặt với thử thách" mang tên Malaysia vào 23h45 ngày 11/6
                  (Ảnh: Hiếu Lương)
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
