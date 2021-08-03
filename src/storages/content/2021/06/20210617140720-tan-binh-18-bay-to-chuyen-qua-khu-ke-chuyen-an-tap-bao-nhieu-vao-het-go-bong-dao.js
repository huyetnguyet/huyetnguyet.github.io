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
"timestamp": '17/06/2021 02:07 PM',
"title": 'Tân binh 18+ bày tỏ chuyện quá khứ, kể chuyện "ăn tập bao nhiêu vào hết gò bồng đảo"',
"description": 'Thân hình nhỏ nhắn cùng khuôn mặt dễ thương càng làm nổi bật hơn cặp gò bồng đảo nóng bỏng của Mahina Amane.',
"src": 'https://raw.githubusercontent.com/huyetnguyet/huyetnguyet.github.io/main/src/storages/images/content/2021/20210617140720--10-421968.jpg',
"alt": 'Mahina Amane, Idol, ',
"category": 'images',
"date": '17/06/2021',
"time": '02:07 PM',
"link": '/tan-binh-18-bay-to-chuyen-qua-khu-ke-chuyen-an-tap-bao-nhieu-vao-het-go-bong-dao',
"zcomponent": 'page_20210617140720',
"filepath": './20210617140720-tan-binh-18-bay-to-chuyen-qua-khu-ke-chuyen-an-tap-bao-nhieu-vao-het-go-bong-dao.js'
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
  'Tân binh 18+ bày tỏ chuyện quá khứ, kể chuyện "ăn tập bao nhiêu vào hết gò bồng đảo"';
const author = "DS";
const source = "Pháp luật và bạn đọc";
const timestamp = "17/06/2021 02:07 PM";
const description =
  "Thân hình nhỏ nhắn cùng khuôn mặt dễ thương càng làm nổi bật hơn cặp gò bồng đảo nóng bỏng của Mahina Amane.";
const link =
  "tan-binh-18-bay-to-chuyen-qua-khu-ke-chuyen-an-tap-bao-nhieu-vao-het-go-bong-dao";
const tagparam = ["mahina-amane", "idol"];
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

export default function page_20210617140720() {
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
            <AdsVertical />
            <div className="content">
              <div className="contentContainer">
                <p className="description">{description}</p>
                <RelationNews category={category} />
                <div className="contentBody">
                  <div className="contentBodyLeft">
                    <p>
                      Mỗi năm, ngành công nghiệp AV Nhật Bản lại đón nhận thêm
                      hàng nghìn những cô nàng diễn viên mới. Ai trong số họ
                      cũng đều mơ ước sẽ trở thành những ngôi sao mới. với ước
                      mơ giàu sang, danh vọng. Nhưng thực tế đôi khi lại khắc
                      nghiệt, khi mà theo thống kê, có khoảng 1/3 những cô nàng
                      tân binh thậm chí còn chẳng thể trụ được hết một năm đầu
                      mà đã vội vàng xin rút hoặc bị đào thải.{" "}
                    </p>{" "}
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210617140720--10-421968.jpg")
                          .default
                      }
                      alt="1Mahina Amane, Idol, "
                      note=""
                    />
                    <p>
                      Tất nhiên, vẫn có những điểm nhấn ngoại lệ, đơn cử như
                      trường hợp của <strong>Mahina Amane</strong> - một tân
                      binh được chú ý nhất trong năm nay và được mệnh danh là
                      diễn viên thấp nhất trong lịch sử ngành công nghiệp AV
                      Nhật Bản.
                    </p>
                    <p>
                      Amane Mahina sinh năm 2000, mới chỉ gia nhập ngành giải
                      trí vào tháng 5/2020 với tư cách diễn viên phim người lớn.
                      Hiện tại, cô nàng đang là diễn viên độc quyền của công ty
                      S1 và là 1 trong những tài năng trẻ được yêu thích nhất
                      của công ty này.
                    </p>
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210617140720--11-057648.jpg")
                          .default
                      }
                      alt="2Mahina Amane, Idol, "
                      note=""
                    />
                    <p>
                      Với nhan sắc trong sáng, ngọt ngào, cùng body nóng bỏng,
                      cô nàng này ngay lập tức đã thu hút sự chú ý lớn của công
                      chúng. Amane Mahina được ví von là "phiên bản thế hệ mới",
                      Aika Yumeno, 1 mỹ nữ ngực khủng khác cũng đang đầu quân
                      cho S1.
                    </p>
                    <p>
                      Sắp tới đây, cô nàng sẽ có lễ kỷ niệm 1 năm gia nhập vào
                      ngành 18+ từ ngày 19/6 tới. Vì dịch bệnh, thế nên Mahina
                      không có quá nhiều hoạt động để giao lưu với fan. Dù vậy,
                      cô nàng cũng rất hay đọc những bình luận trên mạng về bản
                      thân mình. Theo nhận xét của Mahina, dường như cô nàng
                      cũng thành công ở một chừng mực nào đó.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Trong sản phẩm đầu tay, Mahina quả thực rất bất ngờ về
                      hình ảnh của mình thật sự lung linh khi lên hình, thậm chí
                      ấn tượng hơn cả đời thực. Chiều cao nhỏ nhắn đã được đẩy
                      lên "ảo diệu", đồng thời vòng 1 thì đẹp và ấn tượng đến
                      mức chủ nhân của nó còn phải bất ngờ.
                    </p>
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210617140720--12-670369.jpg")
                          .default
                      }
                      alt="3Mahina Amane, Idol, "
                      note=""
                    />
                    <p>
                      Nói đến vòng một, cô nàng cho biết rằng hồi còn nhỏ cũng
                      chẳng nghĩ rằng gò bồng đảo của mình được như bây giờ. Hồi
                      giữa những năm cấp 2, Mahina là "bức tường" bền vững, mặc
                      cả áo lót thể thao, còn tự hỏi liệu vòng một có to lên
                      được không. Từ lúc đó, cô nàng bắt đầu ăn uống đều đặn
                      hơn, đồng thời tập tennis để rèn luyện cơ thể và chiều
                      cao. Trớ trêu thay, chỉ có vòng 1 tăng lên, còn chiều cao
                      của cô nàng chỉ dừng lại ở mức 1m45 mà thôi.{" "}
                    </p>
                    <p>
                      Ngực to thì quả thực rất tuyệt, nhưng nó đồng nghĩa với
                      việc thật là vướng víu. Bản thân Mahina cũng không cảm
                      thấy thoải mái với điều này, và cả những ánh mắt săm soi
                      từ đám bạn học cùng lớp. Cô nàng về sau mặc kệ tất cả vì
                      biết là cũng chẳng thể giấu được điều này.
                    </p>
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210617140720--13-136460.jpg")
                          .default
                      }
                      alt="4Mahina Amane, Idol, "
                      note=""
                    />
                    <p>Bài viết được thực hiện với sự trợ giúp của AV Crush.</p>
                  </div>
                  <AdsHorizontal />
                </div>

                <RandomFeature />

                <div className="source">Source: {source}</div>

                <FacebookShareButton link={facebookLinkShare} />

                <div className="tags">Tags: {updatedTags}</div>
              </div>
            </div>
          </div>
        </div>
      </Content>
    </>
  );
}
