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
"timestamp": '05/08/2021 08:48 AM',
"title": 'Chẳng cần đẹp “nghiêng nước, nghiêng thành”, nghiêng như nữ streamer 19 tuổi này cũng đủ khiến fan nam ngây ngất',
"description": 'Khoe góc nghiêng thần thánh, nữ streamer 2002 lại khiến người xem “khó thở".',
"src": 'https://gamek.mediacdn.vn/thumb_w/660/133514250583805952/2021/8/5/22032532718207572814453247729205524555001674n-16281298282721637368836.jpeg',
"alt": 'STREAMER,LINH CHICHAN,HOT GIRL,NÓNG BỎNG,CỘNG ĐỒNG MẠNG,',
"category": 'images',
"date": '05/08/2021',
"time": '08:48 AM',
"link": '/chang-can-dep-nghieng-nuoc-nghieng-thanh-nghieng-nhu-nu-streamer-19-tuoi-nay-cung-du-khien-fan-nam-ngay-ngat',
"zcomponent": 'page_20210805084826',
"filepath": './20210805084826-chang-can-dep-nghieng-nuoc-nghieng-thanh-nghieng-nhu-nu-streamer-19-tuoi-nay-cung-du-khien-fan-nam-ngay-ngat.js'
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
  "Chẳng cần đẹp “nghiêng nước, nghiêng thành”, nghiêng như nữ streamer 19 tuổi này cũng đủ khiến fan nam ngây ngất";
const author = "Kayle";
const source = "Pháp luật và bạn đọc";
const timestamp = "05/08/2021 08:48 AM";
const description =
  'Khoe góc nghiêng thần thánh, nữ streamer 2002 lại khiến người xem “khó thở".';
const link =
  "chang-can-dep-nghieng-nuoc-nghieng-thanh-nghieng-nhu-nu-streamer-19-tuoi-nay-cung-du-khien-fan-nam-ngay-ngat";
const tagparam = [
  "STREAMER",
  "LINH CHICHAN",
  "HOT GIRL",
  "NÓNG BỎNG",
  "CỘNG ĐỒNG MẠNG",
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

export default function page_20210805084826() {
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
                      Vì nhiều lý do cá nhân, <strong>Linh Chichan</strong>{" "}
                      (Hoàng Nguyễn Linh Chi) không còn thường xuyên livestream
                      chơi game, trò chuyện cùng những người yêu mến của mình
                      được. Thay vào đó, nữ <strong>streamer</strong> đăng tải
                      hình ảnh cá nhân và cập nhật các hoạt động trong cuộc sống
                      thường ngày nhiều hơn. Qua đó, fan cũng có cơ hội trò
                      chuyện, tương tác với cô nàng xinh đẹp này.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/660/133514250583805952/2021/8/5/22032532718207572814453247729205524555001674n-16281298282721637368836.jpeg"
                      alt="1, STREAMER,LINH CHICHAN,HOT GIRL,NÓNG BỎNG,CỘNG ĐỒNG MẠNG,"
                      note=""
                    />
                    <p>
                      Vì đang trong mùa dịch không thể đi du lịch hay đến những
                      điểm vui chơi giải trí, mỹ nhân làng game này không tránh
                      khỏi việc nhung nhớ những cuộc vui, cô nàng đành phải đem
                      những tấm hình cũ ra để đăng tải. Tại đó, fan được dịp
                      chiêm ngưỡng góc nghiêng thần thánh của nữ{" "}
                      <strong>streamer</strong>.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/660/133514250583805952/2021/8/5/21711694318207619547781906460035913241510517n-1628129828174902678458.jpeg"
                      alt="2, STREAMER,LINH CHICHAN,HOT GIRL,NÓNG BỎNG,CỘNG ĐỒNG MẠNG,"
                      note=""
                    />

                    <p>
                      Với chiếc váy hai dây gợi cảm, những đường cắt xẻ táo bạo
                      trước khuôn ngực, hai bên sườn và để hở lưng trần, bộ
                      trang phục này giúp chủ nhân khoe trọn đôi gò bồng đảo
                      siêu gợi cảm và làn da trắng không tì vết.{" "}
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/660/133514250583805952/2021/8/5/22001408418207571881120003199280929214719923n-16281298282351584754526.jpeg"
                      alt="3, STREAMER,LINH CHICHAN,HOT GIRL,NÓNG BỎNG,CỘNG ĐỒNG MẠNG,"
                      note=""
                    />

                    <p>
                      Lợi thế về ngoại hình, đặc biệt là vòng một ngoại cỡ, cô
                      nàng <strong>streamer</strong> thu hút được một lượng
                      tương tác lớn từ fan hâm mộ. Có người còn cho rằng, chẳng
                      cần đẹp “nghiêng nước nghiêng thành", chỉ cần đẹp nghiêng
                      như <strong>Linh Chichan</strong> là xứng đáng được điểm
                      10 rồi. Tuy nhiên, bên cạnh đó cũng có nhiều quan điểm
                      trái chiều, “mặc hở 90% như thế này thì mặc làm gì”, đồng
                      thời lên án gu thời trang hớ hênh của cô nàng.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/660/133514250583805952/2021/8/5/21482003118207572314453292518078438399022218n-1628129828095442521145.jpeg"
                      alt="4, STREAMER,LINH CHICHAN,HOT GIRL,NÓNG BỎNG,CỘNG ĐỒNG MẠNG,"
                      note=""
                    />
                    <RelationNewsInPage category={category} />
                    <p>
                      Về phần mình, đây không phải lần đầu tiên, cô nàng 19 tuổi
                      chưng diện một chiếc đầm sexy, cô nàng từng gây sốt với
                      phiên bản xuống phố tương tự.{" "}
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/5/base64-1628130028906429478583.png"
                      alt="5, STREAMER,LINH CHICHAN,HOT GIRL,NÓNG BỎNG,CỘNG ĐỒNG MẠNG,"
                      note=""
                    />
                    <p>
                      Bản thân Linh cũng đã có những phản hồi về phong cách gợi
                      cảm của mình. Cụ thể, trước đó cô nàng chia sẻ rằng: "Thực
                      ra chẳng thể đánh giá được con người qua vẻ bề ngoài.
                      Nhiều bạn chụp ảnh nhìn sexy một tí nhưng không phải ai
                      cũng động được vào. Còn có nhiều người ăn mặc kín đáo
                      nhưng lại không phải thế. Vậy nên phải tiếp xúc mới biết
                      được chứ nhìn bên ngoài rồi nhận xét chỉ là đánh đồng
                      thôi!”.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/5/photo-1-16281298883361960259782.jpg"
                      alt="6, STREAMER,LINH CHICHAN,HOT GIRL,NÓNG BỎNG,CỘNG ĐỒNG MẠNG,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/5/photo-1-16281300659061520628145-16281300881632086754769.png"
                      alt="7, STREAMER,LINH CHICHAN,HOT GIRL,NÓNG BỎNG,CỘNG ĐỒNG MẠNG,"
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
