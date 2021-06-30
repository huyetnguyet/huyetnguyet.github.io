import React from "react";
import "components/page.css";
import { AdsHorizontal, AdsVertical } from "components/adsMethods";
import {
  RandomFeature,
  RelationNews,
  RelationNewsInPage,
} from "components/methods";

import { Content, ContentImage, FacebookShareButton } from "components/content";

/* ---------------------------------------------------------------- */

/*

 {
"timestamp": '17/06/2021 02:07 PM',
"title": 'Bị gạ combo "150 triệu + 1 căn nhà" cho một đêm ở cạnh, nàng hot girl Việt hài hước đáp trả "Em có nhà rồi"',
"description": 'Màn đối đáp rất thông minh và hài hước của cô nàng hot girl đang nhận được nhiều lời khen từ phía cộng đồng mạng.',
"src": 'https://raw.githubusercontent.com/huyetnguyet/huyetnguyet.github.io/main/src/storages/images/content/2021/20210617140755--14-128010.png',
"alt": 'Gai Xinh, Hot Girl, Vo Ngoc Tran, Cong Dong Mang, ',
"category": 'images',
"date": '17/06/2021',
"time": '02:07 PM',
"link": '/bi-ga-combo-150-trieu-1-can-nha-cho-mot-dem-o-canh-nang-hot-girl-viet-hai-huoc-dap-tra-em-co-nha-roi',
"zcomponent": 'page_20210617140755',
"filepath": './20210617140755-bi-ga-combo-150-trieu-1-can-nha-cho-mot-dem-o-canh-nang-hot-girl-viet-hai-huoc-dap-tra-em-co-nha-roi.js'
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
  'Bị gạ combo "150 triệu + 1 căn nhà" cho một đêm ở cạnh, nàng hot girl Việt hài hước đáp trả "Em có nhà rồi"';
const author = "Mặt Trứng";
const source = "Pháp luật và bạn đọc";
const timestamp = "17/06/2021 02:07 PM";
const description =
  "Màn đối đáp rất thông minh và hài hước của cô nàng hot girl đang nhận được nhiều lời khen từ phía cộng đồng mạng.";
const link =
  "bi-ga-combo-150-trieu-1-can-nha-cho-mot-dem-o-canh-nang-hot-girl-viet-hai-huoc-dap-tra-em-co-nha-roi";
const tagparam = ["gai-xinh", "hot-girl", "vo-ngoc-tran", "cong-dong-mang"];
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

export default function page_20210617140755() {
  return (
    <>
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
                <div className="contentBody">
                  <p>
                    Nhân vật chính trong câu chuyện lần này là Võ Ngọc Trân - cô
                    nàng <strong>hot girl</strong> có lẽ đã quá nổi tiếng với
                    cộng đồng mạng Việt Nam. Nổi danh là hot girl học đường,
                    thậm chí còn được lên cả báo nước ngoài nhờ vào nhan sắc
                    rạng rỡ, trẻ trung và cực kỳ xinh đẹp của mình, Võ Ngọc Trân
                    hiện tại cũng đang thu hút lượng lớn fan hâm mộ follow trên
                    trang cá nhân của mình với con số lên tới gần một triệu.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210617140755--10-466028.jpg")
                        .default
                    }
                    alt="1Gai Xinh, Hot Girl, Vo Ngoc Tran, Cong Dong Mang, "
                    note="Võ Ngọc Trân - cô nàng hot girl học đường nổi tiếng"
                  />
                  <p>
                    Đặc biệt, thời gian gần đây, cô nàng{" "}
                    <strong>hot girl</strong> còn liên tục đốt mắt các fan hâm
                    mộ khi thường xuyên diện các bộ trang phục gợi cảm, khoe
                    vòng một đầy đặn cực kỳ quyến rũ của mình. Xinh đẹp, gợi cảm
                    và đặc biệt là rất duyên dáng khi thường xuyên tương tác với
                    fan hâm mộ trên trang cá nhân, Võ Ngọc Trân đang là gương
                    mặt nhận được rất nhiều cảm tình từ phía cộng đồng mạng.
                  </p>
                  <p>
                    Thời gian gần đây, cô nàng liên tục đốt mắt fan với những
                    tạo hình trang phục sexy, gợi cảm
                  </p>
                  <RelationNewsInPage category={category} />
                  <p>
                    Xinh đẹp, nổi tiếng đôi khi cũng khiến cho nàng{" "}
                    <strong>hot girl</strong> gặp phải không ít phiền toái. Cụ
                    thể, cách đây không lâu, cô nàng từng phải lên tiếng cảnh
                    báo fan khi hình ảnh của mình bị lấy ra để lợi dụng lừa đảo.
                    Bên cạnh đó, phong cách quyến rũ của cô nàng cũng bị một số
                    người chỉ trích Và mới đây nhất, đó còn là những màn "gạ
                    gẫm", như hình ảnh trên story cá nhân mà cô nàng mới công
                    khai dưới đây.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210617140755--11-450457.png")
                        .default
                    }
                    alt="2Gai Xinh, Hot Girl, Vo Ngoc Tran, Cong Dong Mang, "
                    note=""
                  />
                  <p>
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210617140755--15-59258.jpeg")
                          .default
                      }
                      alt="6Gai Xinh, Hot Girl, Vo Ngoc Tran, Cong Dong Mang, "
                      note=""
                    />
                    Theo đó, dựa theo nội dung từ đoạn chat, nàng{" "}
                    <strong>hot girl</strong> bất ngờ được một nhân vật lạ mặt
                    gạ gẫm với những khoản cấp dưỡng tăng dần, từ 2.500$ cho tới
                    khi con số lên đến tận 150 triệu. Mặc dù đã từ chối khéo léo
                    và khẳng định không bao giờ "đi khách", thế nhưng nàng hot
                    girl vẫn tiếp tục nhận thêm những lời đề nghị có phần hấp
                    dẫn hơn với combo "150 triệu + 1 nhà" và đối tượng được giới
                    thiệu là chủ thầu xây dựng, với điều kiện chỉ cần "đồng ý
                    bên anh một hôm" là được.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210617140755--12-453136.png")
                        .default
                    }
                    alt="3Gai Xinh, Hot Girl, Vo Ngoc Tran, Cong Dong Mang, "
                    note="Cô nàng hot girl mới đây bất ngờ công khai tin nhắn bị gạ gẫm"
                  />
                  <p>
                    Đáp lại, Võ Ngọc Trân cũng tỏ ra khá lịch sự khi từ chối,
                    đồng thời hài hước chia sẻ rằng "Em có nhà rồi" để tránh đi
                    những sự quấy rối, làm phiền ở trên. Cách ứng xử mềm dẻo và
                    thông minh của cô nàng đang được cộng đồng mạng khen ngợi
                    rất nhiều. Nên nhớ, trong quá khứ, cô nàng cũng từng công
                    khai hình ảnh bản thân tự mua nhà, thậm chí tích lũy được số
                    tiền không nhỏ nhờ vào việc làm mẫu ảnh của mình.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210617140755--13-924800.png")
                        .default
                    }
                    alt="4Gai Xinh, Hot Girl, Vo Ngoc Tran, Cong Dong Mang, "
                    note="Với những lời đề nghị tăng dần theo thời gian"
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210617140755--14-128010.png")
                        .default
                    }
                    alt="5Gai Xinh, Hot Girl, Vo Ngoc Tran, Cong Dong Mang, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210617140755--16-122362.jpg")
                        .default
                    }
                    alt="7Gai Xinh, Hot Girl, Vo Ngoc Tran, Cong Dong Mang, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210617140755--17-204016.jpg")
                        .default
                    }
                    alt="8Gai Xinh, Hot Girl, Vo Ngoc Tran, Cong Dong Mang, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210617140755--18-555681.jpg")
                        .default
                    }
                    alt="9Gai Xinh, Hot Girl, Vo Ngoc Tran, Cong Dong Mang, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210617140755--19-438450.jpg")
                        .default
                    }
                    alt="10Gai Xinh, Hot Girl, Vo Ngoc Tran, Cong Dong Mang, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210617140755--20-482213.png")
                        .default
                    }
                    alt="11Gai Xinh, Hot Girl, Vo Ngoc Tran, Cong Dong Mang, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210617140755--21-354232.jpg")
                        .default
                    }
                    alt="12Gai Xinh, Hot Girl, Vo Ngoc Tran, Cong Dong Mang, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210617140755--22-059816.jpg")
                        .default
                    }
                    alt="13Gai Xinh, Hot Girl, Vo Ngoc Tran, Cong Dong Mang, "
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
