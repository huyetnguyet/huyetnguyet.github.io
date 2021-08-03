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
"timestamp": '29/06/2021 09:45 PM',
"title": 'MC Mai Dora úp mở dự định cosplay Ahri để phỏng vấn, fan vội ngăn cản vì sợ tuyển thủ... không thể tập trung',
"description": 'Cô nàng MC nóng bỏng của VCS lại khiến fan nổ đom đóm mắt với dự định đầy táo bạo của mình.',
"src": 'https://raw.githubusercontent.com/huyetnguyet/huyetnguyet.github.io/main/src/storages/images/content/2021/20210629214547--10-065206.png',
"alt": 'LIÊN MINH HUYỀN THOẠI,MAI DORA,MC MAI DORA,GAME,TIN GAME,VCS MÙA HÈ 2021,VCS,LMHT,',
"category": 'images',
"date": '29/06/2021',
"time": '09:45 PM',
"link": '/mc-mai-dora-up-mo-du-dinh-cosplay-ahri-de-phong-van-fan-voi-ngan-can-vi-so-tuyen-thu-khong-the-tap-trung',
"zcomponent": 'page_20210629214547',
"filepath": './20210629214547-mc-mai-dora-up-mo-du-dinh-cosplay-ahri-de-phong-van-fan-voi-ngan-can-vi-so-tuyen-thu-khong-the-tap-trung.js'
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
  "MC Mai Dora úp mở dự định cosplay Ahri để phỏng vấn, fan vội ngăn cản vì sợ tuyển thủ... không thể tập trung";
const author = "Loris CarryUs";
const source = "Pháp luật và bạn đọc";
const timestamp = "29/06/2021 09:45 PM";
const description =
  "Cô nàng MC nóng bỏng của VCS lại khiến fan nổ đom đóm mắt với dự định đầy táo bạo của mình.";
const link =
  "mc-mai-dora-up-mo-du-dinh-cosplay-ahri-de-phong-van-fan-voi-ngan-can-vi-so-tuyen-thu-khong-the-tap-trung";
const tagparam = [
  "LIÊN MINH HUYỀN THOẠI",
  "MAI DORA",
  "MC MAI DORA",
  "GAME",
  "TIN GAME",
  "VCS MÙA HÈ 2021",
  "VCS",
  "LMHT",
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

export default function page_20210629214547() {
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
                      Trở lại sau sự cố ngất xỉu trên sóng stream mới đây, cô
                      nàng MC <strong>Mai Dora</strong> lại khiến các fan{" "}
                      <strong>LMHT</strong> Việt Nam được dịp "sốt sắng" khi
                      đăng tải hình ảnh cosplay trang phục Ahri Chiêu Hồn Thiên
                      Hồ đầy gợi cảm.
                    </p>
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629214547--10-065206.png")
                          .default
                      }
                      alt="1, LIÊN MINH HUYỀN THOẠI,MAI DORA,MC MAI DORA,GAME,TIN GAME,VCS MÙA HÈ 2021,VCS,LMHT,"
                      note=""
                    />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629214547--12-582041.jpg")
                          .default
                      }
                      alt="3, LIÊN MINH HUYỀN THOẠI,MAI DORA,MC MAI DORA,GAME,TIN GAME,VCS MÙA HÈ 2021,VCS,LMHT,"
                      note=""
                    />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629214547--13-590823.jpg")
                          .default
                      }
                      alt="4, LIÊN MINH HUYỀN THOẠI,MAI DORA,MC MAI DORA,GAME,TIN GAME,VCS MÙA HÈ 2021,VCS,LMHT,"
                      note=""
                    />
                    <p>
                      Chẳng những thế, cô nàng còn tuyên bố rằng mình đang suy
                      nghĩ rất nghiêm túc về việc sử dụng bộ trang phục này để
                      tham gia phần phỏng vấn tuyển thủ tại <strong>VCS</strong>{" "}
                      sắp tới. Khỏi phải nói, lời "thả thính" này chắc hẳn sẽ
                      khiến không ít fan đứng ngồi không yên. Tuy nhiên, khi góp
                      ý với cô nàng về dự định, phần lớn đều cho rằng{" "}
                      <strong>Mai Dora</strong> không nên làm vậy, vì họ lo sợ
                      các tuyển thủ sẽ... không thể tập trung vào chuyên môn,
                      khi đối diện với một nữ MC nóng bỏng trong bộ trang phục
                      quyến rũ nhất <strong>LMHT</strong>.
                    </p>
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629214547--11-734762.png")
                          .default
                      }
                      alt="2, LIÊN MINH HUYỀN THOẠI,MAI DORA,MC MAI DORA,GAME,TIN GAME,VCS MÙA HÈ 2021,VCS,LMHT,"
                      note=""
                    />
                    <p>
                      Phong cách thời trang phóng khoáng, cuốn hút của{" "}
                      <strong>Mai Dora</strong> tại <strong>VCS</strong> Mùa
                      Xuân 2021 vốn đã khiến không ít <strong>game</strong> thủ
                      rơi vào hoàn cảnh dở khóc dở cười vì bị bắt gặp "ánh mắt
                      lơ đãng" ngay trên sóng trực tiếp.
                    </p>

                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629214547--14-870472.jpg")
                          .default
                      }
                      alt="5, LIÊN MINH HUYỀN THOẠI,MAI DORA,MC MAI DORA,GAME,TIN GAME,VCS MÙA HÈ 2021,VCS,LMHT,"
                      note=""
                    />
                    <p>
                      Vì thế nên dù rất háo hức về màn xuất hiện của "Ahri"{" "}
                      <strong>Mai Dora</strong>, nhưng có lẽ khán giả{" "}
                      <strong>VCS</strong> vẫn phải nghĩ đến... đại cục nhiều
                      hơn. Gắm MC thì ai chẳng thích, nhưng vì MC quá cuốn hút
                      mà khiến các tuyển thủ không trả lời phỏng vấn nổi thì
                      cũng hơi "khoai".
                    </p>
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629214547--15-942392.jpg")
                          .default
                      }
                      alt="6, LIÊN MINH HUYỀN THOẠI,MAI DORA,MC MAI DORA,GAME,TIN GAME,VCS MÙA HÈ 2021,VCS,LMHT,"
                      note=""
                    />
                    <p>
                      Các fan <strong>VCS</strong> dù rất háo hức với màn
                      cosplay "dự định" của <strong>Mai Dora</strong>, nhưng
                      đồng thời cũng tỏ ra lo lắng cho các tuyển thủ khi phải
                      đứng trước cô nàng MC "hot" quá mức như vậy
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Trong bài đăng trên Facebook cá nhân,{" "}
                      <strong>Mai Dora</strong> cũng phản hồi về sự cố ngất xỉu
                      trên sóng trực tiếp mới đây. Nữ MC cho biết cô gặp vấn đề
                      về sức khỏe, nhưng không có gì quá nghiêm trọng. Trao đổi
                      với đại diện của nữ MC, được biết nguyên nhân là do cô
                      nàng đã hơi chủ quan, sinh hoạt không điều độ dẫn đến sức
                      khỏe bị ảnh hưởng.
                    </p>
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629214547--16-743105.jpg")
                          .default
                      }
                      alt="7, LIÊN MINH HUYỀN THOẠI,MAI DORA,MC MAI DORA,GAME,TIN GAME,VCS MÙA HÈ 2021,VCS,LMHT,"
                      note=""
                    />
                    <p>
                      <strong>Mai Dora</strong> cũng hứa hẹn sẽ hồi phục trạng
                      thái sức khỏe tốt nhất để chuẩn bị cho{" "}
                      <strong>
                        <strong>VCS</strong> Mùa Hè 2021
                      </strong>
                      . Rõ ràng, việc giải đấu <strong>LMHT</strong> Việt Nam bị
                      hoãn vô thời hạn đã khiến không ít khán giả cảm thấy phiền
                      lòng, nhưng với dự định cosplay Ahri của Chiêu Hồn Thiên
                      Hồ của Mai Dora, người hâm mộ hẳn sẽ có thêm lý do để kiên
                      nhẫn chờ đợi ngày VCS trở lại.
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
