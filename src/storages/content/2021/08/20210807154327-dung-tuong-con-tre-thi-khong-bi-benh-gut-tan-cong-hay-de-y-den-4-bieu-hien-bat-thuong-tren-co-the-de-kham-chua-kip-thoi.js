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
"timestamp": '07/08/2021 03:43 PM',
"title": 'Đừng tưởng còn trẻ thì không bị bệnh gút tấn công, hãy để ý đến 4 biểu hiện bất thường trên cơ thể để khám chữa kịp thời',
"description": 'Cách đây 10 đến 20 năm, bệnh gút được coi là bệnh của người trung niên và người già hoặc bệnh của người giàu, nhưng những năm gần đây, căn bệnh này đang có xu hướng tăng nhanh và trẻ hóa một cách chóng mặt.',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/7/-16283069036381614016449.jpg',
"alt": 'bệnh gút,thói quen ăn uống,trẻ hóa,',
"category": 'news',
"date": '07/08/2021',
"time": '03:43 PM',
"link": '/dung-tuong-con-tre-thi-khong-bi-benh-gut-tan-cong-hay-de-y-den-4-bieu-hien-bat-thuong-tren-co-the-de-kham-chua-kip-thoi',
"zcomponent": 'page_20210807154327',
"filepath": './20210807154327-dung-tuong-con-tre-thi-khong-bi-benh-gut-tan-cong-hay-de-y-den-4-bieu-hien-bat-thuong-tren-co-the-de-kham-chua-kip-thoi.js'
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
  "Đừng tưởng còn trẻ thì không bị bệnh gút tấn công, hãy để ý đến 4 biểu hiện bất thường trên cơ thể để khám chữa kịp thời";
const author = "KHUÊ LĂNG,";
const source = "Pháp luật & Bạn đọc";
const timestamp = "07/08/2021 03:43 PM";
const description =
  "Cách đây 10 đến 20 năm, bệnh gút được coi là bệnh của người trung niên và người già hoặc bệnh của người giàu, nhưng những năm gần đây, căn bệnh này đang có xu hướng tăng nhanh và trẻ hóa một cách chóng mặt.";
const link =
  "dung-tuong-con-tre-thi-khong-bi-benh-gut-tan-cong-hay-de-y-den-4-bieu-hien-bat-thuong-tren-co-the-de-kham-chua-kip-thoi";
const tagparam = ["bệnh gút", "thói quen ăn uống", "trẻ hóa"];
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

export default function page_20210807154327() {
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
                      Cách đây 10 đến 20 năm, <strong>bệnh gút</strong> được coi
                      là bệnh của người trung niên và người già hoặc bệnh của
                      người giàu, nhưng những năm gần đây, căn bệnh này đang có
                      xu hướng tăng nhanh và <strong>trẻ hóa</strong> một cách
                      chóng mặt.
                    </p>
                    <p>
                      Lý do là vì chất lượng cuộc sống đang ngày càng được nâng
                      cao, không phải những người giàu có hay nhiều tuổi mới
                      được ăn uống đầy đủ, xa hoa như trước kia. Ngoài ra, rất
                      nhiều bệnh tật khác có xu hướng <strong>trẻ hóa</strong>{" "}
                      cũng khiến sức khỏe con người “già” hơn so với tuổi thật,
                      sức đề kháng kém đi.{" "}
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/7/-16283069036381614016449.jpg"
                      alt="1, bệnh gút,thói quen ăn uống,trẻ hóa,"
                      note=""
                    />
                    <p>
                      Gút là bệnh mãn tính do rối loạn chuyển hóa purin trong
                      thận. Khiến thận không đào thải được axit uric trong máu,
                      chúng tích tụ và hình thành tinh thể tập trung tại các
                      khớp, không chỉ gây viêm khớp, sưng khớp khiến bệnh nhân
                      ngày càng khó vận động và còn vô cùng đau đớn.
                    </p>
                    <p>
                      Trong đó, <strong>thói quen ăn uống</strong> là nguyên
                      nhân hàng đầu dẫn đến <strong>bệnh gút</strong> ở người
                      trẻ gia tăng. Bao gồm thói quen ăn nhiều thịt, hải sản,
                      nội tạng động vật nhưng lại lười ăn rau củ, hay thường ăn
                      đồ chiên rán nhiều dầu mỡ, đồ đóng hộp, thức ăn nhanh,
                      uống nhiều bia rượu.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/7/-16283069046301676396971.jpg"
                      alt="2, bệnh gút,thói quen ăn uống,trẻ hóa,"
                      note=""
                    />
                    <p>
                      Không chỉ chứa nhiều đạm và purin, các loại đồ ăn uống kể
                      trên còn kích thích cơ thể sản sinh axit uric, ức chế đào
                      thải axit uric dẫn đến chất này tích tụ nhanh chóng và gây
                      ra <strong>bệnh gút</strong>.
                    </p>
                    <p>
                      Bên cạnh đó, nhịp sống hiện đại với sự phát triển của
                      thiết bị điện tử thông minh khiến giới trẻ ngày càng lười
                      vận động, thường ngồi lâu khiến <strong>bệnh gút</strong>{" "}
                      càng sớm "ghé thăm".
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/7/-1628306904157531385883.jpg"
                      alt="3, bệnh gút,thói quen ăn uống,trẻ hóa,"
                      note=""
                    />
                    <p>
                      Vì vậy, hãy rèn luyện <strong>thói quen ăn uống</strong>{" "}
                      và sinh hoạt lành mạnh, nếu có 4 biểu hiện sớm sau đây của{" "}
                      <strong>bệnh gút</strong>, hãy nhanh chóng đến gặp bác sĩ
                      để không phải hối hận sau này:
                    </p>
                    <RelationNewsInPage category={category} />
                    <h5>1. Khớp sưng và đỏ</h5>

                    <p>
                      Một trong những biểu hiện phổ biến nhất của{" "}
                      <strong>bệnh gút</strong> là các khớp có biểu hiện đỏ bất
                      thường hoặc sưng tấy không rõ nguyên nhân .
                    </p>
                    <p>
                      Do sự lắng đọng của các tinh thể urat dễ kích thích vùng
                      xương các khớp. Biểu hiện sưng hoặc đỏ, thậm chí đau nhức
                      nhẹ sẽ rõ ràng nhất về ban đêm, khi làm việc quá sức hay
                      khi bị kích thích lạnh.{" "}
                    </p>
                    <h5>2. Đau khớp, cứng khớp</h5>
                    <p>
                      Khi <strong>bệnh gút</strong> bắt đầu tấn công, việc đau
                      khớp, cứng khớp là điều không thể tránh khỏi. Nguyên nhân
                      do nồng độ axit uric máu trong cơ thể quá cao hình thành
                      các hạt tinh thể làm tổn thương xương, gây ra các cơn đau
                      dữ dội tại chỗ.{" "}
                    </p>
                    <p>
                      Cùng với cảm giác đau, khớp sẽ bị sưng, nóng, khó cử động,
                      thậm chí là tạm thời không thể cử động trong 1 thời gian
                      ngắn. Các triệu chứng này sẽ liên tục lặp lại, rất khó để
                      điều trị dứt điểm dù bạn đã được bác sĩ hướng dẫn theo
                      liệu trình.{" "}
                    </p>
                    <h5>3. Tổn thương da</h5>
                    <p>
                      Nếu vùng khớp hoặc vùng da xung quanh khớp đột nhiên có
                      biểu hiện bị tổn thương hoặc rất dễ trầy xước dù va quệt
                      nhẹ thì nên cẩn trọng.
                    </p>

                    <p>
                      <strong>Bệnh gút</strong> kéo dài lâu ngày sẽ gây ra các
                      vết thương ngoài da, vì các hạt tinh thể tác động trực
                      tiếp gây tổn thương các mô da. Nó cũng khiến da trở nên
                      cực kỳ nhạy cảm, mỏng manh, da bị kích ứng dễ bị tổn
                      thương và tăng nguy cơ nhiễm trùng.
                    </p>
                    <h5>4. Khô miệng</h5>
                    <p>
                      Khô miệng, khô lưỡi, luôn cảm thấy khát nước không chỉ là
                      biểu hiện của của mất nước, bệnh đường tiêu hóa hay bệnh
                      tiểu đường mà còn cảnh báo <strong>bệnh gút</strong>.{" "}
                    </p>
                    <p>
                      Nồng độ axit uric cao liên tục sẽ kích thích cơ thể, khiến
                      dây thần kinh liên tục phát ra tín hiệu thúc đẩy bệnh nhân
                      phải uống nhiều nước hơn để thận có thể đào thải axit uric
                      ra bên ngoài.{" "}
                    </p>
                    <p>Nguồn và ảnh: QQ, MSN, Eat This</p>
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
