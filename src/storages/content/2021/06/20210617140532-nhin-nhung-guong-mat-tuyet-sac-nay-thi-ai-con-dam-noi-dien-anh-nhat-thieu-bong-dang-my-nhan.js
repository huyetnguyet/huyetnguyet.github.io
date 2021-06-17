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
"timestamp": '17/06/2021 02:05 PM',
"title": 'Nhìn những gương mặt tuyệt sắc này thì ai còn dám nói điện ảnh Nhật thiếu bóng dáng mỹ nhân?',
"description": 'Khi nhắc đến nhan sắc châu Á, không chỉ Hoa ngữ mới sở hữu những vẻ đẹp khuynh nước khuynh thành, mà Nhật Bản cũng hội tụ hàng loạt mỹ nhân thần thái chẳng kém ai.',
"src": 'https://raw.githubusercontent.com/huyetnguyet/huyetnguyet.github.io/main/src/storages/images/content/2021/20210617140532--10-493002.jpg',
"alt": 'My Nhan Nhat, Dien Anh Nhat, Gai Xinh, Gai Nhat, Sayuri Yoshinaga, Rie Miyazawa, Tokiwa Takako, ',
"category": 'images',
"date": '17/06/2021',
"time": '02:05 PM',
"link": '/nhin-nhung-guong-mat-tuyet-sac-nay-thi-ai-con-dam-noi-dien-anh-nhat-thieu-bong-dang-my-nhan',
"zcomponent": 'page_20210617140532',
"filepath": './20210617140532-nhin-nhung-guong-mat-tuyet-sac-nay-thi-ai-con-dam-noi-dien-anh-nhat-thieu-bong-dang-my-nhan.js'
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
  "Nhìn những gương mặt tuyệt sắc này thì ai còn dám nói điện ảnh Nhật thiếu bóng dáng mỹ nhân?";
const author = "Mẹ Sề";
const source = "Pháp luật và bạn đọc";
const timestamp = "17/06/2021 02:05 PM";
const description =
  "Khi nhắc đến nhan sắc châu Á, không chỉ Hoa ngữ mới sở hữu những vẻ đẹp khuynh nước khuynh thành, mà Nhật Bản cũng hội tụ hàng loạt mỹ nhân thần thái chẳng kém ai.";
const link =
  "nhin-nhung-guong-mat-tuyet-sac-nay-thi-ai-con-dam-noi-dien-anh-nhat-thieu-bong-dang-my-nhan";
const tagparam = [
  "my-nhan-nhat",
  "dien-anh-nhat",
  "gai-xinh",
  "gai-nhat",
  "sayuri-yoshinaga",
  "rie-miyazawa",
  "tokiwa-takako",
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

export default function page_20210617140532() {
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
                    Trước độ nhiệt cũng như sự đẩy mạnh quảng bá của các đối thủ
                    đến từ Trung Quốc và Hàn Quốc, làng phim Nhật Bản được xem
                    là kín tiếng và có phần yếu thế hơn hẳn. Cũng vì vậy mà dù
                    sỡ hữu cả tài lẫn sắc, các diễn viên Nhật Bản thường không
                    có độ phủ sóng rộng rãi cũng như nhận được sự yêu mến nhiều
                    từ khán giả quốc tế.
                  </p>
                  <p>
                    Thế nhưng không vì thế mà điện ảnh xứ anh đào thiếu vắng đi
                    những nhan sắc khiến người xem phải thương nhớ. Với vẻ đẹp
                    đa dạng, độc đáo và có phần khác lạ so với quan niệm cái đẹp
                    chung, rất khó để đánh giá nhan sắc của các nữ diễn viên
                    Nhật trên một quy chuẩn cố định.{" "}
                  </p>
                  <p>
                    Dưới đây là những gương mặt tiêu biểu cho nhan sắc nước Nhật
                    khiến người khác phải xao xuyến mỗi khi ngắm nhìn. Bất kể là
                    minh tinh gạo cội hay những ngôi sao trẻ đang lên, nhan sắc
                    của họ là minh chứng cho thời đại không photoshop, không
                    phẫu thuật thẩm mỹ, tất cả đều chân thực đến hoàn hảo. Đó là
                    một thứ dung nhan thoát tục mà thế hệ sau không thể nào
                    không ngưỡng mộ.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210617140532--11-707551.jpg")
                        .default
                    }
                    alt="1My Nhan Nhat, Dien Anh Nhat, Gai Xinh, Gai Nhat, Sayuri Yoshinaga, Rie Miyazawa, Tokiwa Takako, "
                    note="Miho Nakayama"
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210617140532--12-294113.jpg")
                        .default
                    }
                    alt="2My Nhan Nhat, Dien Anh Nhat, Gai Xinh, Gai Nhat, Sayuri Yoshinaga, Rie Miyazawa, Tokiwa Takako, "
                    note="Sakurai Sachiko sở hữu nét đẹp quá đỉnh."
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210617140532--13-354344.jpg")
                        .default
                    }
                    alt="3My Nhan Nhat, Dien Anh Nhat, Gai Xinh, Gai Nhat, Sayuri Yoshinaga, Rie Miyazawa, Tokiwa Takako, "
                    note="Kanako Higuchi"
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210617140532--14-068610.jpg")
                        .default
                    }
                    alt="4My Nhan Nhat, Dien Anh Nhat, Gai Xinh, Gai Nhat, Sayuri Yoshinaga, Rie Miyazawa, Tokiwa Takako, "
                    note="Narimi Arimori"
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210617140532--15-46234.jpeg")
                        .default
                    }
                    alt="5My Nhan Nhat, Dien Anh Nhat, Gai Xinh, Gai Nhat, Sayuri Yoshinaga, Rie Miyazawa, Tokiwa Takako, "
                    note="Shizuka Kudo là mỹ nữ hàng đầu của Nhật vào những năm 1980."
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210617140532--16-11736.jpeg")
                        .default
                    }
                    alt="6My Nhan Nhat, Dien Anh Nhat, Gai Xinh, Gai Nhat, Sayuri Yoshinaga, Rie Miyazawa, Tokiwa Takako, "
                    note="Maju Ozawa"
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210617140532--17-167396.jpg")
                        .default
                    }
                    alt="7My Nhan Nhat, Dien Anh Nhat, Gai Xinh, Gai Nhat, Sayuri Yoshinaga, Rie Miyazawa, Tokiwa Takako, "
                    note="Mai Hosho"
                  />
                  <RelationNewsInPage category={category} />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210617140532--19-956101.jpg")
                        .default
                    }
                    alt="8My Nhan Nhat, Dien Anh Nhat, Gai Xinh, Gai Nhat, Sayuri Yoshinaga, Rie Miyazawa, Tokiwa Takako, "
                    note="Ryoko Hirosue"
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210617140532--20-919121.jpg")
                        .default
                    }
                    alt="9My Nhan Nhat, Dien Anh Nhat, Gai Xinh, Gai Nhat, Sayuri Yoshinaga, Rie Miyazawa, Tokiwa Takako, "
                    note="Không cần tô điểm quá nhiều, Aoi Yu vẫn khiến người ta phải trầm trồ vì thần thái và nụ cười ngọt ngào."
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210617140532--21-278514.jpg")
                        .default
                    }
                    alt="10My Nhan Nhat, Dien Anh Nhat, Gai Xinh, Gai Nhat, Sayuri Yoshinaga, Rie Miyazawa, Tokiwa Takako, "
                    note="Satomi Ishihara"
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210617140532--22-329335.jpg")
                        .default
                    }
                    alt="11My Nhan Nhat, Dien Anh Nhat, Gai Xinh, Gai Nhat, Sayuri Yoshinaga, Rie Miyazawa, Tokiwa Takako, "
                    note="Gakky Yui"
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210617140532--23-962647.jpg")
                        .default
                    }
                    alt="12My Nhan Nhat, Dien Anh Nhat, Gai Xinh, Gai Nhat, Sayuri Yoshinaga, Rie Miyazawa, Tokiwa Takako, "
                    note="Nana Komatsu"
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210617140532--24-154210.jpg")
                        .default
                    }
                    alt="13My Nhan Nhat, Dien Anh Nhat, Gai Xinh, Gai Nhat, Sayuri Yoshinaga, Rie Miyazawa, Tokiwa Takako, "
                    note="Sở hữu nhan sắc thanh tú, ngọt ngào cùng nụ cười dễ mến, Mei Nagano dễ dàng chiếm được cảm tình của người đối diện."
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210617140532--25-823531.jpg")
                        .default
                    }
                    alt="14My Nhan Nhat, Dien Anh Nhat, Gai Xinh, Gai Nhat, Sayuri Yoshinaga, Rie Miyazawa, Tokiwa Takako, "
                    note="Được xem là hiện tượng mới của điện ảnh Nhật Bản, cô nàng sinh năm 2000 - Minami Hamabe từng một thời gây sốt bởi vẻ ngoài xinh đẹp như truyện tranh của mình."
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210617140532--26-966438.jpg")
                        .default
                    }
                    alt="15My Nhan Nhat, Dien Anh Nhat, Gai Xinh, Gai Nhat, Sayuri Yoshinaga, Rie Miyazawa, Tokiwa Takako, "
                    note="Miyawaki Sakura"
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210617140532--27-371000.jpg")
                        .default
                    }
                    alt="16My Nhan Nhat, Dien Anh Nhat, Gai Xinh, Gai Nhat, Sayuri Yoshinaga, Rie Miyazawa, Tokiwa Takako, "
                    note="Minatozaki Sana"
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210617140532--28-250709.jpg")
                        .default
                    }
                    alt="17My Nhan Nhat, Dien Anh Nhat, Gai Xinh, Gai Nhat, Sayuri Yoshinaga, Rie Miyazawa, Tokiwa Takako, "
                    note="Myoui Mina"
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210617140532--10-493002.jpg")
                        .default
                    }
                    alt="18My Nhan Nhat, Dien Anh Nhat, Gai Xinh, Gai Nhat, Sayuri Yoshinaga, Rie Miyazawa, Tokiwa Takako, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210617140532--18-012046.jpg")
                        .default
                    }
                    alt="19My Nhan Nhat, Dien Anh Nhat, Gai Xinh, Gai Nhat, Sayuri Yoshinaga, Rie Miyazawa, Tokiwa Takako, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210617140532--29-485276.jpg")
                        .default
                    }
                    alt="20My Nhan Nhat, Dien Anh Nhat, Gai Xinh, Gai Nhat, Sayuri Yoshinaga, Rie Miyazawa, Tokiwa Takako, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210617140532--30-635430.jpg")
                        .default
                    }
                    alt="21My Nhan Nhat, Dien Anh Nhat, Gai Xinh, Gai Nhat, Sayuri Yoshinaga, Rie Miyazawa, Tokiwa Takako, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210617140532--31-00379.jpeg")
                        .default
                    }
                    alt="22My Nhan Nhat, Dien Anh Nhat, Gai Xinh, Gai Nhat, Sayuri Yoshinaga, Rie Miyazawa, Tokiwa Takako, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210617140532--32-18551.jpeg")
                        .default
                    }
                    alt="23My Nhan Nhat, Dien Anh Nhat, Gai Xinh, Gai Nhat, Sayuri Yoshinaga, Rie Miyazawa, Tokiwa Takako, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210617140532--33-844187.jpg")
                        .default
                    }
                    alt="24My Nhan Nhat, Dien Anh Nhat, Gai Xinh, Gai Nhat, Sayuri Yoshinaga, Rie Miyazawa, Tokiwa Takako, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210617140532--34-795142.jpg")
                        .default
                    }
                    alt="25My Nhan Nhat, Dien Anh Nhat, Gai Xinh, Gai Nhat, Sayuri Yoshinaga, Rie Miyazawa, Tokiwa Takako, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210617140532--35-037118.jpg")
                        .default
                    }
                    alt="26My Nhan Nhat, Dien Anh Nhat, Gai Xinh, Gai Nhat, Sayuri Yoshinaga, Rie Miyazawa, Tokiwa Takako, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210617140532--36-859952.jpg")
                        .default
                    }
                    alt="27My Nhan Nhat, Dien Anh Nhat, Gai Xinh, Gai Nhat, Sayuri Yoshinaga, Rie Miyazawa, Tokiwa Takako, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210617140532--37-183695.jpg")
                        .default
                    }
                    alt="28My Nhan Nhat, Dien Anh Nhat, Gai Xinh, Gai Nhat, Sayuri Yoshinaga, Rie Miyazawa, Tokiwa Takako, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210617140532--38-084484.jpg")
                        .default
                    }
                    alt="29My Nhan Nhat, Dien Anh Nhat, Gai Xinh, Gai Nhat, Sayuri Yoshinaga, Rie Miyazawa, Tokiwa Takako, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210617140532--39-295432.jpg")
                        .default
                    }
                    alt="30My Nhan Nhat, Dien Anh Nhat, Gai Xinh, Gai Nhat, Sayuri Yoshinaga, Rie Miyazawa, Tokiwa Takako, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210617140532--40-629824.jpg")
                        .default
                    }
                    alt="31My Nhan Nhat, Dien Anh Nhat, Gai Xinh, Gai Nhat, Sayuri Yoshinaga, Rie Miyazawa, Tokiwa Takako, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210617140532--41-788231.jpg")
                        .default
                    }
                    alt="32My Nhan Nhat, Dien Anh Nhat, Gai Xinh, Gai Nhat, Sayuri Yoshinaga, Rie Miyazawa, Tokiwa Takako, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210617140532--42-963099.jpg")
                        .default
                    }
                    alt="33My Nhan Nhat, Dien Anh Nhat, Gai Xinh, Gai Nhat, Sayuri Yoshinaga, Rie Miyazawa, Tokiwa Takako, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210617140532--43-080473.jpg")
                        .default
                    }
                    alt="34My Nhan Nhat, Dien Anh Nhat, Gai Xinh, Gai Nhat, Sayuri Yoshinaga, Rie Miyazawa, Tokiwa Takako, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210617140532--44-273003.jpg")
                        .default
                    }
                    alt="35My Nhan Nhat, Dien Anh Nhat, Gai Xinh, Gai Nhat, Sayuri Yoshinaga, Rie Miyazawa, Tokiwa Takako, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210617140532--45-98949.jpeg")
                        .default
                    }
                    alt="36My Nhan Nhat, Dien Anh Nhat, Gai Xinh, Gai Nhat, Sayuri Yoshinaga, Rie Miyazawa, Tokiwa Takako, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210617140532--46-135705.jpg")
                        .default
                    }
                    alt="37My Nhan Nhat, Dien Anh Nhat, Gai Xinh, Gai Nhat, Sayuri Yoshinaga, Rie Miyazawa, Tokiwa Takako, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210617140532--47-81039.jpeg")
                        .default
                    }
                    alt="38My Nhan Nhat, Dien Anh Nhat, Gai Xinh, Gai Nhat, Sayuri Yoshinaga, Rie Miyazawa, Tokiwa Takako, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210617140532--48-107232.jpg")
                        .default
                    }
                    alt="39My Nhan Nhat, Dien Anh Nhat, Gai Xinh, Gai Nhat, Sayuri Yoshinaga, Rie Miyazawa, Tokiwa Takako, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210617140532--49-871896.jpg")
                        .default
                    }
                    alt="40My Nhan Nhat, Dien Anh Nhat, Gai Xinh, Gai Nhat, Sayuri Yoshinaga, Rie Miyazawa, Tokiwa Takako, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210617140532--50-717564.jpg")
                        .default
                    }
                    alt="41My Nhan Nhat, Dien Anh Nhat, Gai Xinh, Gai Nhat, Sayuri Yoshinaga, Rie Miyazawa, Tokiwa Takako, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210617140532--51-092951.jpg")
                        .default
                    }
                    alt="42My Nhan Nhat, Dien Anh Nhat, Gai Xinh, Gai Nhat, Sayuri Yoshinaga, Rie Miyazawa, Tokiwa Takako, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210617140532--52-063436.jpg")
                        .default
                    }
                    alt="43My Nhan Nhat, Dien Anh Nhat, Gai Xinh, Gai Nhat, Sayuri Yoshinaga, Rie Miyazawa, Tokiwa Takako, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210617140532--53-301784.jpg")
                        .default
                    }
                    alt="44My Nhan Nhat, Dien Anh Nhat, Gai Xinh, Gai Nhat, Sayuri Yoshinaga, Rie Miyazawa, Tokiwa Takako, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210617140532--54-057826.jpg")
                        .default
                    }
                    alt="45My Nhan Nhat, Dien Anh Nhat, Gai Xinh, Gai Nhat, Sayuri Yoshinaga, Rie Miyazawa, Tokiwa Takako, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210617140532--55-857068.jpg")
                        .default
                    }
                    alt="46My Nhan Nhat, Dien Anh Nhat, Gai Xinh, Gai Nhat, Sayuri Yoshinaga, Rie Miyazawa, Tokiwa Takako, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210617140532--56-467064.jpg")
                        .default
                    }
                    alt="47My Nhan Nhat, Dien Anh Nhat, Gai Xinh, Gai Nhat, Sayuri Yoshinaga, Rie Miyazawa, Tokiwa Takako, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210617140532--57-512947.jpg")
                        .default
                    }
                    alt="48My Nhan Nhat, Dien Anh Nhat, Gai Xinh, Gai Nhat, Sayuri Yoshinaga, Rie Miyazawa, Tokiwa Takako, "
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
