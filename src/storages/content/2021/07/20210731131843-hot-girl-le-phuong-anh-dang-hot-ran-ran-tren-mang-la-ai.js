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
"timestamp": '31/07/2021 01:18 PM',
"title": 'Hot girl Lê Phương Anh đang hot rần rần trên mạng là ai?',
"description": 'Cái tên Lê Phương Anh đang khiến không ít người chú ý.',
"src": 'https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/31/1742548851284859431909811985173040770867015n-16277027190401799624308.jpg',
"alt": 'Lê Phương Anh,gái xinh,hot girl,Cư dân mạng,cộng đồng mạng,',
"category": 'images',
"date": '31/07/2021',
"time": '01:18 PM',
"link": '/hot-girl-le-phuong-anh-dang-hot-ran-ran-tren-mang-la-ai',
"zcomponent": 'page_20210731131843',
"filepath": './20210731131843-hot-girl-le-phuong-anh-dang-hot-ran-ran-tren-mang-la-ai.js'
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
const title = "Hot girl Lê Phương Anh đang hot rần rần trên mạng là ai?";
const author = "M416,";
const source = "Pháp luật & Bạn đọc";
const timestamp = "31/07/2021 01:18 PM";
const description = "Cái tên Lê Phương Anh đang khiến không ít người chú ý.";
const link = "hot-girl-le-phuong-anh-dang-hot-ran-ran-tren-mang-la-ai";
const tagparam = [
  "Lê Phương Anh",
  "gái xinh",
  "hot girl",
  "Cư dân mạng",
  "cộng đồng mạng",
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

export default function page_20210731131843() {
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
                      Thông tin về <strong>Lê Phương Anh</strong> -{" "}
                      <strong>gái xinh</strong> đình đám đến từ Hà Nội hiện đang
                      là tâm điểm chú ý của <strong>cư dân mạng</strong>. Được
                      biết cô nàng này còn có biệt danh là Cún, sinh năm 1997 và
                      hiện đang sở hữu trang cá nhân với gần 330k lượt theo dõi.
                    </p>
                    <p>
                      Với những ai chăm "hóng" MXH, đặc biệt là thích "nằm vùng"
                      trong các group <strong>gái xinh</strong> thì chắc chẳng
                      còn xa lạ gì với Phương Anh. Không chỉ được biết đến nhờ
                      gương mặt dễ thương, làn da trắng không tì vết, cô nàng 24
                      tuổi này còn gây ấn tượng với body quyến rũ, vòng nào ra
                      vòng nấy. Chính phong cách sexy mà Phương Anh theo đuổi
                      cũng là lý do khiến lượng fan nam của cô nàng gần như "áp
                      đảo".
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/31/20953791913375689133055298121409334220040203n-16277026273801614270014.jpg"
                      alt="1, Lê Phương Anh,gái xinh,hot girl,Cư dân mạng,cộng đồng mạng,"
                      note="Phương Anh là hot girl khá nổi với gần 330k lượt follow trên trang cá nhân"
                    />
                    <p>
                      Style có phần sexy mà cô nàng theo đuổi là điều giúp thu
                      hút fan nam nhất
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/31/19429093413259863611304517015209931926913363n-16277027190381833876064.jpg"
                      alt="2, Lê Phương Anh,gái xinh,hot girl,Cư dân mạng,cộng đồng mạng,"
                      note="Đặc biệt là mỗi lần cô nàng diện bikini như thế này"
                    />
                    <p>
                      Ngoài việc siêu hot trên cõi mạng Việt, Phương Anh còn
                      từng "phá đảo" MXH xứ Trung hồi đầu năm 2020. Ở thời điểm
                      đó, Phương Anh cùng cô em gái Phương Uyên đã nhận được vô
                      số lời khen từ <strong>cư dân mạng</strong> nước ngoài.
                      Nhiều trang tin của Trung đã đưa tin về Phương Anh -
                      Phương Uyên với các tiêu đề như: "Cặp chị em Việt xinh đẹp
                      nóng bỏng khiến cư dân mạng không biết nên chọn chị hay
                      em", "Hai nữ sinh nhan sắc ấn tượng có thể làm bạn yêu
                      ngay từ cái nhìn đầu tiên"...
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Hai chị em Phương Anh (bên phải) và Phương Uyên (bên trái)
                    </p>
                    <p>
                      Hiện tại, Phương Anh đang làm công việc mẫu ảnh, nhận PR
                      từ các nhãn hàng. Thỉnh thoảng, cô nàng cũng góp mặt trong
                      một vài MV nhạc Việt.
                    </p>
                    <p>
                      Có một thông tin khá bất ngờ là Phương Anh thực tế đã lập
                      gia đình từ khá sớm và đã có em bé. Tuy nhiên, cô nàng khá
                      kín tiếng trong khoản chia sẻ về đời sống cá nhân nên
                      không nhiều người biết đến việc này. Dẫu vậy, phải công
                      nhận là câu "gái một con trông mòn con mắt" luôn đúng.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/31/1742548851284859431909811985173040770867015n-16277027190401799624308.jpg"
                      alt="3, Lê Phương Anh,gái xinh,hot girl,Cư dân mạng,cộng đồng mạng,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/31/14401351612342951736329048202997954828618107n-1627702719040894813345.jpg"
                      alt="4, Lê Phương Anh,gái xinh,hot girl,Cư dân mạng,cộng đồng mạng,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/31/11033905410814671222490442407162146527966075n-1627702719041770464497.jpg"
                      alt="5, Lê Phương Anh,gái xinh,hot girl,Cư dân mạng,cộng đồng mạng,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/31/15987500512636011040356441812515866486725266n-1627702760032896653024.jpg"
                      alt="6, Lê Phương Anh,gái xinh,hot girl,Cư dân mạng,cộng đồng mạng,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/31/3-16207448867921451251565-16277028461291407780224.jpg"
                      alt="7, Lê Phương Anh,gái xinh,hot girl,Cư dân mạng,cộng đồng mạng,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/31/751997838648760172414901778711798845800448o-15806492161611067795308-1627702846130631006220.jpg"
                      alt="8, Lê Phương Anh,gái xinh,hot girl,Cư dân mạng,cộng đồng mạng,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/31/751997838648760172414901778711798845800448o-15806492161611067795308-1627702846130631006220.jpg"
                      alt="9, Lê Phương Anh,gái xinh,hot girl,Cư dân mạng,cộng đồng mạng,"
                      note=""
                    />
                    <p>Ảnh: Tổng hợp</p>
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
