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
"timestamp": '19/08/2021 01:04 PM',
"title": '4 đặc điểm thường có ở những cô nàng rất dễ thụ thai ngay trong lần "thả" đầu tiên, xem thử bạn có thuộc nhóm này hay không',
"description": 'Khi hội tụ đủ 4 yếu tố sau đây thì khả năng có thai sau khi quan hệ là rất cao đó bạn nhé!',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/19/photo-1-1629391651892469745276.jpg',
"alt": 'Sức khỏe sinh sản,sức khỏe thể chất,thời điểm rụng trứng,nguy cơ vô sinh,tế bào mỡ,',
"category": 'life',
"date": '19/08/2021',
"time": '01:04 PM',
"link": '/4-dac-diem-thuong-co-o-nhung-co-nang-rat-de-thu-thai-ngay-trong-lan-tha-dau-tien-xem-thu-ban-co-thuoc-nhom-nay-hay-khong',
"zcomponent": 'page_20210819130430',
"filepath": './20210819130430-4-dac-diem-thuong-co-o-nhung-co-nang-rat-de-thu-thai-ngay-trong-lan-tha-dau-tien-xem-thu-ban-co-thuoc-nhom-nay-hay-khong.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "life";
const categoryLink = "/life";
const title =
  '4 đặc điểm thường có ở những cô nàng rất dễ thụ thai ngay trong lần "thả" đầu tiên, xem thử bạn có thuộc nhóm này hay không';
const author = "SƠ RI,";
const source = "Pháp luật & Bạn đọc";
const timestamp = "19/08/2021 01:04 PM";
const description =
  "Khi hội tụ đủ 4 yếu tố sau đây thì khả năng có thai sau khi quan hệ là rất cao đó bạn nhé!";
const link =
  "4-dac-diem-thuong-co-o-nhung-co-nang-rat-de-thu-thai-ngay-trong-lan-tha-dau-tien-xem-thu-ban-co-thuoc-nhom-nay-hay-khong";
const tagparam = [
  "Sức khỏe sinh sản",
  "sức khỏe thể chất",
  "thời điểm rụng trứng",
  "nguy cơ vô sinh",
  "tế bào mỡ",
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

export default function page_20210819130430() {
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
                      Khi hội tụ đủ 4 yếu tố sau đây thì khả năng có thai sau
                      khi quan hệ là rất cao đó bạn nhé!
                    </p>
                    <h5>1. Có kinh nguyệt đều đặn</h5>
                    <p>
                      Đối với nữ giới, chuyện mang thai và sinh con là điều rất
                      được quan tâm. Nhưng để thụ thai thành công ngay trong lần
                      "thả" đầu tiên thì còn phụ thuộc vào yếu tố sức khỏe từ cả
                      hai giới.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/19/photo-1-1629391651892469745276.jpg"
                      alt="1, Sức khỏe sinh sản,sức khỏe thể chất,thời điểm rụng trứng,nguy cơ vô sinh,tế bào mỡ,"
                      note=""
                    />
                    <p>
                      Tuy nhiên, bạn vẫn có thể nhận biết xem mình có thuộc nhóm
                      dễ thụ thai hay không thông qua 4 biểu hiện đặc trưng sau
                      đây.
                    </p>
                    <p>
                      Kinh nguyệt là chuỗi ngày ám ảnh mà nữ giới phải đối mặt
                      hàng tháng. Kinh nguyệt của nữ giới không chỉ liên quan
                      đến <strong>sức khỏe thể chất</strong> mà còn ảnh hưởng
                      tới cả chuyện mang thai sau này.
                    </p>
                    <p>
                      Với những cô nàng có kinh nguyệt đều đặn thì hãy yên tâm
                      vì tử cung và buồng trứng của bạn tương đối khỏe mạnh.
                      Điều này cũng góp phần giúp quá trình rụng trứng diễn ra
                      ổn định và từ đó bạn có thể nắm bắt được thời điểm quan hệ
                      chuẩn xác nhất để tăng tỷ lệ thụ thai thành công.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Thế nhưng, nếu chu kỳ kinh nguyệt hàng tháng diễn ra không
                      đều thì quá trình rụng trứng sẽ thay đổi thất thường. Một
                      khi quá trình rụng trứng không bình thường thi việc nắm
                      bắt <strong>thời điểm rụng trứng</strong> để tăng khả năng
                      thụ thai là rất thấp.
                    </p>

                    <h5>2. Tay chân ấm</h5>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/19/photo-1-16293916769601099805699.jpg"
                      alt="2, Sức khỏe sinh sản,sức khỏe thể chất,thời điểm rụng trứng,nguy cơ vô sinh,tế bào mỡ,"
                      note=""
                    />

                    <p>
                      Thường thì những người có tử cung ấm sẽ có cơ hội thụ thai
                      cao hơn những cô nàng để tử cung bị nhiễm lạnh. Bởi những
                      cô nàng có tử cung lạnh thì tay chân cũng sẽ lạnh và dễ bị
                      đau bụng khi tới ngày hành kinh.
                    </p>

                    <h5>3. Tử cung ngả nhiều về phía trước</h5>
                    <p>
                      Do khi tử cung bị lạnh thì quá trình làm tổ của trứng sẽ
                      bị ảnh hưởng và thậm chí còn làm tăng{" "}
                      <strong>nguy cơ vô sinh</strong> cao.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/19/photo-1-1629391702394771674968.jpg"
                      alt="3, Sức khỏe sinh sản,sức khỏe thể chất,thời điểm rụng trứng,nguy cơ vô sinh,tế bào mỡ,"
                      note=""
                    />
                    <p>
                      Đặc điểm này rất khó để cảm nhận mà chỉ có thể phát hiện
                      khi bạn đi siêu âm. Vị trí của tử cung nếu ngả nhiều về
                      phía trước sẽ giúp tinh trùng dễ dàng đi đến ống dẫn trứng
                      để tăng cơ hội thụ thai cao hơn.
                    </p>
                    <p>
                      Còn đối với những cô nàng có tử cung ngả nhiều về sau thì
                      cũng không nên quá lo lắng. Nếu tử cung ở môi trường tốt
                      và thể trạng tốt thì việc thụ thai thành công chỉ còn là
                      vấn đề về thời gian.
                    </p>

                    <h5>4. Duy trì cân nặng bình thường</h5>
                    <p>
                      Quá gầy hay quá béo cũng không đều không có lợi cho việc
                      thụ thai của nữ giới. Bởi những cô nàng có ngoại hình quá
                      to thì các <strong>tế bào mỡ</strong> thừa trong cơ thể sẽ
                      ảnh hưởng đến chu kỳ kinh nguyệt, từ đó gây rối loạn nội
                      tiết và dẫn đến tình trạng trứng kém phát triển, gây vô
                      sinh cao.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/19/photo-1-16293917397762021335326.jpg"
                      alt="4, Sức khỏe sinh sản,sức khỏe thể chất,thời điểm rụng trứng,nguy cơ vô sinh,tế bào mỡ,"
                      note=""
                    />
                    <p>
                      Còn người quá gầy thì lại dễ bị rối loạn nội tiết hoặc suy
                      dinh dưỡng. Đây đều là những yếu tố không có lợi cho việc
                      thụ thai. Vậy nên, bạn cần duy trì được cân nặng bình
                      thường để tăng cơ hội thụ thai tốt hơn.
                    </p>
                    <p>Nguồn và ảnh: Sohu, Healthline</p>
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
