import React from "react";
import "../../components/page.css";
import { AdsHorizontal, AdsVertical } from "../../components/adsMethods";
import { RandomFeature } from "../../components/methods";

import {
  Content,
  ContentImage,
  FacebookShareButton,
} from "../../components/content";

/* ---------------------------------------------------------------- */

/*

 <ContentItem title="Gái xinh nổi tiếng với loạt vlog trên ô tô khoe ảnh quá bạo, phải 'zoom' sát rạt vòng 1 mới chịu"
content="Xem ảnh của Phương Uyên xong mà không đỏ mặt mới lạ." 
src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/3/17/1605698522582714691872591309494835808438833n-1615981035635385712321.jpg" 
alt="Mang Xa Hoi, Phuong Uyen, Gai Xinh, Cap Doi Lam Vlog Tren O To, " 
category="images" 
time="04/06/2021 04:39 PM" 
link="/gai-xinh-noi-tieng-voi-loat-vlog-tren-o-to-khoe-anh-qua-bao-phai-zoom-sat-rat-vong-1-moi-chiu"/>

{title="Gái xinh nổi tiếng với loạt vlog trên ô tô khoe ảnh quá bạo, phải 'zoom' sát rạt vòng 1 mới chịu",
content="Xem ảnh của Phương Uyên xong mà không đỏ mặt mới lạ." ,
src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/3/17/1605698522582714691872591309494835808438833n-1615981035635385712321.jpg" ,
alt="Mang Xa Hoi, Phuong Uyen, Gai Xinh, Cap Doi Lam Vlog Tren O To, " ,
category="images" ,
time="04/06/2021 04:39 PM" ,
link="/gai-xinh-noi-tieng-voi-loat-vlog-tren-o-to-khoe-anh-qua-bao-phai-zoom-sat-rat-vong-1-moi-chiu",component="page_20210604043950",
filepath="../storages/content/20210604043950-gai-xinh-noi-tieng-voi-loat-vlog-tren-o-to-khoe-anh-qua-bao-phai-zoom-sat-rat-vong-1-moi-chiu.js"},

Gái xinh nổi tiếng với loạt vlog trên ô tô khoe ảnh quá bạo, phải 'zoom' sát rạt vòng 1 mới chịu
Xem ảnh của Phương Uyên xong mà không đỏ mặt mới lạ.
https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/3/17/1605698522582714691872591309494835808438833n-1615981035635385712321.jpg
Mang Xa Hoi, Phuong Uyen, Gai Xinh, Cap Doi Lam Vlog Tren O To, 
images
04/06/2021
04:39 PM
/gai-xinh-noi-tieng-voi-loat-vlog-tren-o-to-khoe-anh-qua-bao-phai-zoom-sat-rat-vong-1-moi-chiu
page_20210604043950
../storages/content/20210604043950-gai-xinh-noi-tieng-voi-loat-vlog-tren-o-to-khoe-anh-qua-bao-phai-zoom-sat-rat-vong-1-moi-chiu.js




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
  "Gái xinh nổi tiếng với loạt vlog trên ô tô khoe ảnh quá bạo, phải 'zoom' sát rạt vòng 1 mới chịu";
const author = "THẾ HUÂN,";
const source = "Pháp luật & Bạn đọc";
const date = "04/06/2021";
const time = "04:39 PM";
const description = "Xem ảnh của Phương Uyên xong mà không đỏ mặt mới lạ.";
const link =
  "gai-xinh-noi-tieng-voi-loat-vlog-tren-o-to-khoe-anh-qua-bao-phai-zoom-sat-rat-vong-1-moi-chiu";
const tagparam = [
  "mang-xa-hoi",
  "phuong-uyen",
  "gai-xinh",
  "cap-doi-lam-vlog-tren-o-to",
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

export default function page_20210604043950() {
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
              <div className="author">{author}</div> - Theo {source} | {date}{" "}
              {time}
            </p>
          </div>
          <FacebookShareButton link={facebookLinkShare} />

          <div class="containerContent">
            <AdsHorizontal />
            <div className="content">
              <div className="contentContainer">
                <p className="description">{description}</p>
                <div className="contentBody">
                  <p>
                    Nếu là người chơi hệ YouTube và thích thú xem các vlog yêu
                    đương của giới trẻ, hẳn bạn sẽ chẳng xa lạ gì mấy với cặp
                    đôi Phương Uyên và Anh Kiệt. Vào hồi đầu năm nay, cặp đôi
                    nổi tiếng với loạt clip yêu đương được quay trong ô tô đã
                    chính thức đường ai nấy đi bằng 1 loạt phốt "tưng bừng" trên
                    MXH.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/3/17/1605698522582714691872591309494835808438833n-1615981035635385712321.jpg"
                    alt="Mang Xa Hoi, Phuong Uyen, Gai Xinh, Cap Doi Lam Vlog Tren O To, "
                    note="Dân tình ai nấy đều bỏng mắt khi xem loạt ảnh này"
                  />
                  <p>
                    Tạm gác lại những ồn ào, Phương Uyên trở lại làm cô nàng độc
                    thân gợi cảm. Vốn sống ở Tây nên gu ăn mặc nào giờ của
                    Phương Uyên vẫn vô cùng phóng khoáng. Đặc biệt vì sở hữu
                    body đẹp nên cô nàng cũng không ngại chuyện đăng ảnh sexy
                    lên mạng xã hội cho dân tình cùng ngắm. Tuy nhiên, lần nào
                    Phương Uyên đăng ảnh gợi cảm cũng khiến những người follow
                    cô nàng đỏ mặt vì quá bạo, như bộ ảnh gần đây chẳng hạn.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/3/17/1599389172500693901486271067869735359349079n-16159810357461757070592.jpg"
                    alt="Mang Xa Hoi, Phuong Uyen, Gai Xinh, Cap Doi Lam Vlog Tren O To, "
                    note="
                    Thời tiết lạnh cóng là thế nhưng Phương Uyên vẫn dũng cảm...
                    cởi áo khoác khoe trọn vòng 1"
                  />

                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/3/17/16183816428272158674991079103870899625918442n-1615981106784115863959.jpg"
                    alt="Mang Xa Hoi, Phuong Uyen, Gai Xinh, Cap Doi Lam Vlog Tren O To, "
                    note="Biểu cảm 'hư hỏng' của Phương Uyên"
                  />
                  <p>
                    Tất nhiên chuyện Phương Uyên hở bạo thì ai cũng biết rõ mồn
                    một rồi, nhưng thời tiết bên Mỹ đang khá lạnh, cô nàng vẫn
                    không ngại "vạch áo" khoe vòng 1 chỉ để đăng vài tấm lên
                    Instagram thế này đúng là khá khen cho nghị lực của Phương
                    Uyên.
                  </p>
                  <p>
                    Trong bộ ảnh, Uyên khoác ngoài cái áo ấm được cởi một cách
                    hờ hững, bên trong là lớp áo nội y khoe trọn vòng 1 "căng
                    cực" khiến netizen liên tục trầm trồ vì body sexy. Nhìn
                    những hình ảnh cực kỳ thần thái, tự tin của Phương Uyên,
                    không ít người phải thốt lên: đúng là con gái xinh đẹp nhất
                    khi chẳng thuộc về ai.
                  </p>
                  <p>Những hình ảnh trước của Phương Uyên</p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/3/17/1505721402013901517453487117941801745795558n-1615981370630847505558.jpg"
                    alt="Mang Xa Hoi, Phuong Uyen, Gai Xinh, Cap Doi Lam Vlog Tren O To, "
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/3/17/1455669294175558993552215615000048781755883n-16159813707691608205960.jpg"
                    alt="Mang Xa Hoi, Phuong Uyen, Gai Xinh, Cap Doi Lam Vlog Tren O To, "
                    note=""
                  />
                  <ContentImage
                    src="https://nv.vi-serve.com/vis-media/472/931/gejQOG8BsAhKjBq4_jRc_720p.MP4"
                    alt="Mang Xa Hoi, Phuong Uyen, Gai Xinh, Cap Doi Lam Vlog Tren O To, "
                    note=""
                  />
                  <p>
                    Cô nàng rất thường xuyên thả thính bằng ảnh gợi cảm trên
                    Instagram
                  </p>
                  <p>Nguồn: Tổng hợp</p>
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
