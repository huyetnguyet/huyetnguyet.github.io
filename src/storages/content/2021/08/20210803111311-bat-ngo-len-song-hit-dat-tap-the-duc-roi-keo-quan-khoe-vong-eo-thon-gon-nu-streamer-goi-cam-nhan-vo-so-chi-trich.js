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
"timestamp": '03/08/2021 11:13 AM',
"title": 'Bất ngờ lên sóng hít đất, tập thể dục rồi kéo quần khoe vòng eo thon gọn, nữ streamer gợi cảm nhận vô số chỉ trích',
"description": 'Cô nàng streamer đang là tâm điểm của mọi sự chú ý sau tiết mục lên sóng quá nóng bỏng vừa rồi.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/8/3/-16279627859881063865677.jpg',
"alt": 'HOT GIRL,CỘNG ĐỒNG MẠNG,HWA-JEONG,STREAMER,GÁI XINH,NỮ STREAMER,',
"category": 'images',
"date": '03/08/2021',
"time": '11:13 AM',
"link": '/bat-ngo-len-song-hit-dat-tap-the-duc-roi-keo-quan-khoe-vong-eo-thon-gon-nu-streamer-goi-cam-nhan-vo-so-chi-trich',
"zcomponent": 'page_20210803111311',
"filepath": './20210803111311-bat-ngo-len-song-hit-dat-tap-the-duc-roi-keo-quan-khoe-vong-eo-thon-gon-nu-streamer-goi-cam-nhan-vo-so-chi-trich.js'
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
  "Bất ngờ lên sóng hít đất, tập thể dục rồi kéo quần khoe vòng eo thon gọn, nữ streamer gợi cảm nhận vô số chỉ trích";
const author = "Mặt Trứng";
const source = "Pháp luật và bạn đọc";
const timestamp = "03/08/2021 11:13 AM";
const description =
  "Cô nàng streamer đang là tâm điểm của mọi sự chú ý sau tiết mục lên sóng quá nóng bỏng vừa rồi.";
const link =
  "bat-ngo-len-song-hit-dat-tap-the-duc-roi-keo-quan-khoe-vong-eo-thon-gon-nu-streamer-goi-cam-nhan-vo-so-chi-trich";
const tagparam = [
  "HOT GIRL",
  "CỘNG ĐỒNG MẠNG",
  "HWA-JEONG",
  "STREAMER",
  "GÁI XINH",
  "NỮ STREAMER",
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

export default function page_20210803111311() {
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
                      Vì những ảnh hưởng của dịch bệnh mà thời gian gần đây,
                      ngành công nghiệp livestream đang phát triển một cách mạnh
                      mẽ. Bản thân các <strong>streamer</strong> cũng liên tục
                      có những động thái kêu gọi người xem nên ở nhà, hạn chế ra
                      ngoài nếu như không thật sự cần thiết. Trong đó, nổi bật
                      nhất chắc phải kể tới <strong>Hwa-jeong</strong>, một{" "}
                      <strong>nữ streamer</strong> đầy gợi cảm, người mới đây
                      vừa phải nhận không ít những chỉ trích vì hướng dẫn người
                      xem cách thể dục tại gia, nhưng là theo một chiều hướng
                      chẳng biết nên gọi là tập luyện hay khoe thân phản cảm
                      nữa.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/3/photo-1-16279621044901139940847.gif"
                      alt="1, HOT GIRL,CỘNG ĐỒNG MẠNG,HWA-JEONG,STREAMER,GÁI XINH,NỮ STREAMER,"
                      note="Hwa-jeong - nữ streamer gợi cảm trong câu chuyện"
                    />
                    <p>
                      Sở hữu gương mặt xinh đẹp, thần thái cùng làn da trắng sứ,{" "}
                      <strong>Hwa-jeong</strong> luôn thu hút{" "}
                      <strong>cộng đồng mạng</strong> bởi sự gợi cảm, nóng bỏng
                      của mình những khi lên sóng. Thường xuyên mang tới những
                      màn vũ đạo nóng bỏng, tận dụng tối đa nhan sắc của mình
                      thế nên chẳng mất quá nhiều thời gian để cô nàng sở hữu
                      cho mình lượng fan hâm mộ khổng lồ. Tuy vậy, Hwa-jeong
                      cũng thường gắn liền với những lùm xùm không đáng có, mà
                      màn tập thể dục mới đây là minh chứng rõ nhất.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/3/photo-1-1627962460797716096739.jpg"
                      alt="2, HOT GIRL,CỘNG ĐỒNG MẠNG,HWA-JEONG,STREAMER,GÁI XINH,NỮ STREAMER,"
                      note="Hwa-jeong là một trong những nữ streamer vô cùng xinh đẹp"
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/3/photo-1-1627962433916910944725.gif"
                      alt="3, HOT GIRL,CỘNG ĐỒNG MẠNG,HWA-JEONG,STREAMER,GÁI XINH,NỮ STREAMER,"
                      note="Đồng thời thường xuyên dính vào những lùm xùm cũng bởi sự gợi cảm quá đà của mình"
                    />
                    <p>
                      Theo đó, chẳng hiểu vì lý do gì mà cô nàng{" "}
                      <strong>streamer</strong> xinh đẹp bất ngờ thể hiện bản
                      thân là người ưa thích tập luyện, rời hẳn ghế để xuống sàn
                      hướng dẫn fan các động tác cơ bản.{" "}
                      <strong>Hwa-jeong</strong> tập chăm thật, tới mức mồ hôi
                      ướt đẫm áo nhưng các động tác chống đẩy, hít đất của cô
                      nàng thì lại mang tới những tư thế khá phản cảm với vòng
                      ba luôn nhô cao như để khoe với người xem vậy.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/3/photo-1-1627962365632815369312.jpg"
                      alt="4, HOT GIRL,CỘNG ĐỒNG MẠNG,HWA-JEONG,STREAMER,GÁI XINH,NỮ STREAMER,"
                      note="Hình ảnh của cô nàng trong phiên livestream mới nhất"
                    />
                    <RelationNewsInPage category={category} />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/3/photo-1-1627962329314448915167.jpg"
                      alt="5, HOT GIRL,CỘNG ĐỒNG MẠNG,HWA-JEONG,STREAMER,GÁI XINH,NỮ STREAMER,"
                      note="Và màn chống đẩy, hít đất có phần khá phản cảm"
                    />
                    <p>
                      Nhưng nếu như chỉ dừng lại ở đây thì còn đỡ, đằng này, sau
                      khi đã trải qua quá trình tập luyện,{" "}
                      <strong>Hwa-jeong</strong> như thể muốn chứng minh cho
                      người xem thấy thành quả của nó thì phải. Đứng lên trước
                      camera, nàng <strong>streamer</strong> thản nhiên kéo tụt
                      một bên quần xuống, khoe vòng hai và xương chậu có phần
                      thon gọn của mình. Chẳng biết điều này có làm các fan của
                      Hwa-jeong cảm thấy phấn khích hay không, nhưng chắc chắn
                      nó mang tới một sự phản cảm nhất định dành cho không ít
                      người.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/3/photo-1-16279625922721441064837.png"
                      alt="6, HOT GIRL,CỘNG ĐỒNG MẠNG,HWA-JEONG,STREAMER,GÁI XINH,NỮ STREAMER,"
                      note="Hình ảnh có phần phản cảm sau đó của Hwa-jeong"
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/3/photo-1-1627962614505638212391.jpg"
                      alt="7, HOT GIRL,CỘNG ĐỒNG MẠNG,HWA-JEONG,STREAMER,GÁI XINH,NỮ STREAMER,"
                      note="Khiến cho cô nàng gặp vô số những chỉ trích"
                    />
                    <p>
                      Thực tế thì nếu đánh giá, mức độ khoe thân của{" "}
                      <strong>Hwa-jeong</strong> cũng không phải là quá phản
                      cảm, nhưng đó chỉ là khi mang ra so sánh với các nữ{" "}
                      <strong>streamer</strong> khác mà thôi. Tất nhiên, mức độ
                      này là chưa đủ để cảnh cáo hay đưa ra một án phạt dành cho
                      Hwa-jeong, thế nhưng nhiều người cũng đã dần liệt cô nàng
                      vào danh sách các streamer chiêu trò nên tránh rồi.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/3/-16279627859881063865677.jpg"
                      alt="8, HOT GIRL,CỘNG ĐỒNG MẠNG,HWA-JEONG,STREAMER,GÁI XINH,NỮ STREAMER,"
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
