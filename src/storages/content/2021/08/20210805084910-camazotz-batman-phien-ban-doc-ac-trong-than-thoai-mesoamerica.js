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
"timestamp": '05/08/2021 08:49 AM',
"title": 'Camazotz – Batman phiên bản độc ác trong thần thoại Mesoamerica',
"description": 'Thần thoại Mesoamerican kể rằng sâu trong hang động tăm tối, có quái vật dơi Camazotz sinh sống. Nó là một trong 4 sinh vật đem đến sự hủy diệt trong thời kỳ mặt trời đầu tiên.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/8/4/camazotz0-1628071372472655698067.jpg',
"alt": 'KHÁM PHÁ,DƠI MA CÀ RỒNG,SINH VẬT HUYỀN BÍ,THẦN THOẠI,BATMAN,',
"category": 'news',
"date": '05/08/2021',
"time": '08:49 AM',
"link": '/camazotz-batman-phien-ban-doc-ac-trong-than-thoai-mesoamerica',
"zcomponent": 'page_20210805084910',
"filepath": './20210805084910-camazotz-batman-phien-ban-doc-ac-trong-than-thoai-mesoamerica.js'
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
const title = "Camazotz – Batman phiên bản độc ác trong thần thoại Mesoamerica";
const author = "Green";
const source = "Trí Thức Trẻ";
const timestamp = "05/08/2021 08:49 AM";
const description =
  "Thần thoại Mesoamerican kể rằng sâu trong hang động tăm tối, có quái vật dơi Camazotz sinh sống. Nó là một trong 4 sinh vật đem đến sự hủy diệt trong thời kỳ mặt trời đầu tiên.";
const link = "camazotz-batman-phien-ban-doc-ac-trong-than-thoai-mesoamerica";
const tagparam = [
  "KHÁM PHÁ",
  "DƠI MA CÀ RỒNG",
  "SINH VẬT HUYỀN BÍ",
  "THẦN THOẠI",
  "BATMAN",
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

export default function page_20210805084910() {
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
                      Camazotz (có nghĩa là “dơi tử thần” trong tiếng K’iche của
                      người Maya tại Guatemala) có nguồn gốc sâu xa trong{" "}
                      <strong>thần thoại</strong> Mesoamerica. Nó được miêu tả
                      như một loại dơi sống trong hang động rất nguy hiểm. Thuở
                      xa xưa, có những tín ngưỡng sùng bái sinh vật này xuất
                      hiện trong cộng đồng người da đỏ Zapotec ở Oaxaca, Mexico.
                      Hình tượng Camazot được đưa vào đền thờ của bộ tộc Maya
                      Quiche và trở thành các truyền thuyết dơi tử thần được ghi
                      lại trong văn học Maya.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/4/bat20mask-1628071348691713155572.jpg"
                      alt="1, KHÁM PHÁ,DƠI MA CÀ RỒNG,SINH VẬT HUYỀN BÍ,THẦN THOẠI,BATMAN,"
                      note="Người anh hùng sắp bị Camazotz tấn công"
                    />
                    <p>
                      Trong nhiều nền văn hóa, người ta xem dơi là một sinh vật
                      đe dọa. Chúng sống về đêm nên thường được gắn liền với cái
                      chết. Nhiều loài dơi được miêu tả với hình thù tương đối
                      kỳ dị, khiến cho con người cảm thấy không thoải mái khi
                      đối mặt với chúng.
                    </p>
                    <h5>Camazotz trong văn hóa Maya</h5>
                    <p>
                      Nền văn hóa Maya xem thần dơi Camazotz liên hệ đến cái
                      chết. Camazotz còn là tên một sinh vật quái dị sinh sống
                      trong hang động được gọi là “ngôi nhà của loài dơi” ở Popl
                      Vuh. Có rất nhiều giả thuyết lý giải về nguồn gốc của
                      Camazotz, một trong số đó có đề cập đến việc chúng được
                      sáng tạo dựa trên loài dơi hút máu khổng lồ đã tuyệt chủng
                      ở thời kỳ Pleistocene hoặc Holocene.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/4/camazotz0-1628071372472655698067.jpg"
                      alt="2, KHÁM PHÁ,DƠI MA CÀ RỒNG,SINH VẬT HUYỀN BÍ,THẦN THOẠI,BATMAN,"
                      note=""
                    />
                    <p>
                      Trong Popol Vuh, một văn bản <strong>thần thoại</strong>{" "}
                      của người Maya cổ, Camazotz sống trong hang động có tên
                      Zotzilaha. Người ta miêu tả Camazotz có thân hình gần
                      giống người, đầu dơi và có mũi gần giống dao đá lửa.
                      Camazotz thường tấn công các nạn nhân bằng vào cổ và chặt
                      đầu họ. Văn bản này cũng kể lại câu chuyện Camazotz chặt
                      đầu người anh hùng Hanahpu. Sinh vật thần bí được xem là
                      một trong bốn ác quỷ chịu trách nhiệm cho việc con người
                      bị xóa sổ ở thời đại mặt trời đầu tiên.
                    </p>
                    <RelationNewsInPage category={category} />
                    <h5>Những câu chuyện về dơi quỷ</h5>
                    <p>
                      Ở khu vực Nam và Trung Mỹ, quái vật và dơi quỷ rất phổ
                      biến. Điển hình có thể kể đến câu chuyện Chonchon ở Peru
                      và Chile, trong đó dơi quỷ được tạo ra khi một nhà giả
                      kim, được gọi là kaku, thực hiện một nghi lễ khiến cho cái
                      đầu bị chặt của ông ta mọc ra đôi tai dài khi chết. Đôi
                      tai dài này trở thành cặp cánh.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/4/maya-hero-hunahpu-1628071395563538961301.jpg"
                      alt="3, KHÁM PHÁ,DƠI MA CÀ RỒNG,SINH VẬT HUYỀN BÍ,THẦN THOẠI,BATMAN,"
                      note=""
                    />
                    <p>
                      Truyền thuyết về các quái vật dơi khổng lồ phổ biến ở rất
                      nhiều nơi. Vì thế, người ta đã đưa ra giả thuyết rằng
                      chúng đều bắt nguồn từ một sinh vật có thật nào đó – chẳng
                      hạn như <strong>dơi ma cà rồng</strong>. Tuy nhiên, cũng
                      có thể nó xuất phát từ một loài dơi khổng lồ từ kỷ
                      Pleistocen hoặc đầu Holocen.
                    </p>
                    <h5>Dơi ma cà rồng khổng lồ</h5>
                    <p>
                      Sinh vật đời thực được xem là có khả năng truyền cảm hứng
                      cho ra đời Camazotz nhất hiện nay có tên Desmodus Draculae
                      – một loài dơi khổng lồ có những hóa thạch được phát hiện
                      tại nhiều vùng thuộc châu Mỹ. Tuy nhiên, trong lịch sử có
                      rất nhiều trường hợp tuyên bố đã nhìn thấy những con dơi
                      khổng lồ hoặc sinh vật giống dơi.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/4/chonchon-16280714408651387883561.jpg"
                      alt="4, KHÁM PHÁ,DƠI MA CÀ RỒNG,SINH VẬT HUYỀN BÍ,THẦN THOẠI,BATMAN,"
                      note=""
                    />
                    <p>
                      Một trong số những trường hợp được báo cáo sớm nhất là vào
                      năm 1947, nhân chứng tên J. Harrison tuyên bố đã nhìn thấy
                      một sinh vật bay lớn có vẻ giống dơi khổng lồ. Vào đầu
                      những năm 1950, một cặp vợ chồng Brazil cũng đưa ra tuyên
                      bố tương tự.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/4/desmodus-draculae-1628071483757805601465.jpg"
                      alt="5, KHÁM PHÁ,DƠI MA CÀ RỒNG,SINH VẬT HUYỀN BÍ,THẦN THOẠI,BATMAN,"
                      note=""
                    />
                    <p>
                      Trường hợp ly kỳ hơn xảy ra vào năm 1975 tại Puerto Rico,
                      hàng loạt cuộc tấn công nhắm đến gia súc. Một người nông
                      dân cho biết đã bị hai sinh vật giống chim màu xám tấn
                      công liên tục. Chúng cũng xuất hiện tại những cuộc tàn sát
                      gia súc. Năm 1970, ở Texas, Mỹ cũng ghi nhận trường hợp
                      nhân chứng bắt gặp sinh vật giống dơi hói hoặc một loài
                      khủng long mỏ ngắn với khuôn mặt giống khỉ đột. Người ta
                      đã tìm thấy 3 dấu chân của sinh vật này.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/4/bat-god-from-zapotec-1628071501441921013775.jpg"
                      alt="6, KHÁM PHÁ,DƠI MA CÀ RỒNG,SINH VẬT HUYỀN BÍ,THẦN THOẠI,BATMAN,"
                      note=""
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
