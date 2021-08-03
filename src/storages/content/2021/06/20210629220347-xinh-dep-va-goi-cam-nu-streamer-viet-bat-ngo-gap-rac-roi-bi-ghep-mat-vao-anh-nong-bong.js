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
"timestamp": '29/06/2021 10:03 PM',
"title": 'Xinh đẹp và gợi cảm, nữ streamer Việt bất ngờ gặp rắc rối, bị "ghép mặt" vào ảnh nóng bỏng',
"description": 'Màn ghép ảnh không tì vết của cô nàng streamer này đã khiến cho khá nhiều người phải trầm trồ vì sự gợi cảm.',
"src": 'https://gamek.mediacdn.vn/thumb_w/660/133514250583805952/2021/6/28/screenshot854-1621392944405530986247-1624854174009612651548.png',
"alt": 'GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,STREAMER,NỮ STREAMER,QUỲNH ALEE,',
"category": 'stars',
"date": '29/06/2021',
"time": '10:03 PM',
"link": '/xinh-dep-va-goi-cam-nu-streamer-viet-bat-ngo-gap-rac-roi-bi-ghep-mat-vao-anh-nong-bong',
"zcomponent": 'page_20210629220347',
"filepath": './20210629220347-xinh-dep-va-goi-cam-nu-streamer-viet-bat-ngo-gap-rac-roi-bi-ghep-mat-vao-anh-nong-bong.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "stars";
const categoryLink = "/stars";
const title =
  'Xinh đẹp và gợi cảm, nữ streamer Việt bất ngờ gặp rắc rối, bị "ghép mặt" vào ảnh nóng bỏng';
const author = "Mặt Trứng";
const source = "Pháp luật và bạn đọc";
const timestamp = "29/06/2021 10:03 PM";
const description =
  "Màn ghép ảnh không tì vết của cô nàng streamer này đã khiến cho khá nhiều người phải trầm trồ vì sự gợi cảm.";
const link =
  "xinh-dep-va-goi-cam-nu-streamer-viet-bat-ngo-gap-rac-roi-bi-ghep-mat-vao-anh-nong-bong";
const tagparam = [
  "GÁI XINH",
  "HOT GIRL",
  "CỘNG ĐỒNG MẠNG",
  "STREAMER",
  "NỮ STREAMER",
  "QUỲNH ALEE",
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

export default function page_20210629220347() {
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
                      Nhân vật chính trong câu chuyện lần này là{" "}
                      <strong>Quỳnh Alee</strong>, một trong những{" "}
                      <strong>streamer</strong> đang nhận được rất nhiều sự chú
                      ý từ phía <strong>cộng đồng mạng</strong>. Sinh năm 2001,
                      cô nàng <strong>hot girl</strong> này hiện đang được biết
                      tới nhờ nhan sắc xinh đẹp, thân hình gợi cảm của mình cũng
                      như việc cực kỳ đam mê với tựa game lái xe Truck
                      Simulator. Tuy nhiên, điều này cũng khiến cho Quỳnh Alee
                      gặp phải vô số những rắc rối với anti fan, mà nổi bật nhất
                      chính là nhiều lần bị anti fan công kích, bình luận khiếm
                      nhã ngay trên sóng livetream và trong các bài đăng trên
                      Facebook cá nhân.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/28/photo-1-1624853654725352422951.jpg"
                      alt="1, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,STREAMER,NỮ STREAMER,QUỲNH ALEE,"
                      note="Quỳnh Alee - cô nàng streamer xinh đẹp và gợi cảm"
                    />
                    <p>
                      Nắm bắt lợi thế của bản thân, <strong>Quỳnh Alee</strong>{" "}
                      cũng khá thường xuyên khoe vẻ nóng bỏng của mình với những
                      bộ trang phục khoe đường cong, khoét cổ sâu. Tuy nhiên,
                      mới đây thôi, cô nàng lại bất ngờ gặp phải một rắc rối cực
                      kỳ khó đỡ. Cụ thể, trong một group chuyên chỉnh sửa ảnh
                      bất ngờ xuất hiện bức hình của Quỳnh Alee trong trang phục
                      bikini khoe vòng một siêu quyến rũ trên đồng cỏ. Nhìn qua
                      thì gần như chẳng có vết gợn nào, và đa số đều tỏ ra khá
                      trầm trồ trước nhan sắc xinh đẹp, quyến rũ của cô nàng{" "}
                      <strong>streamer</strong>.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/28/screenshot10-1624853789228889123671.png"
                      alt="2, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,STREAMER,NỮ STREAMER,QUỲNH ALEE,"
                      note="Bức ảnh đầy nóng bỏng và quyến rũ của Quỳnh Alee gần đây"
                    />
                    <p>
                      Hình ảnh này nhanh chóng nhận được vô số sự chú ý từ phía{" "}
                      <strong>cộng đồng mạng</strong>, trong đó đa số đều khen
                      ngợi vẻ đẹp nóng bỏng của cô nàng{" "}
                      <strong>streamer</strong>. Tuy nhiên, cũng có khá nhiều ý
                      kiến lên tiếng ngờ vực, cho rằng đây khả năng không phải
                      là hình ảnh nguyên gốc. Và quả thật, sau đó thì tất cả
                      cũng đều vỡ lẽ ra rằng, hóa ra người đăng đã tự lấy ảnh
                      của <strong>Quỳnh Alee</strong> để ghép với thân hình của
                      một cô gái khác.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Thực tế, với vẻ ngoài xinh đẹp của mình,{" "}
                      <strong>Quỳnh Alee</strong> cũng không ít lần khiến các
                      fan phải bỏng mắt với những màn khoe vòng một nóng bỏng.
                      Trong quá khứ, cô nàng từng không ngần ngại mà đu trend
                      thực hiện thử thách “Ký ngực fan 2K3” bằng cách sử dụng
                      vòng 1 để đỡ hộp sữa và nhận về những ý kiến khá trái
                      chiều.
                    </p>

                    <p>
                      Thậm chí, tồi tệ hơn nữa, có lần{" "}
                      <strong>Quỳnh Alee</strong> còn bất ngờ dính “phốt” lộ ảnh
                      sexy khêu gợi tràn lan trên các diễn đàn “đen”. Nhiều tài
                      khoản Facebook thậm chí còn nghi ngờ nữ{" "}
                      <strong>streamer</strong> này lộ clip “nóng” đồng thời
                      bình luận với thái độ khiêu khích, spam xin link công khai
                      ngay dưới các bài đăng của cô nàng này trên Facebook cá
                      nhân.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/28/photo-1-16248539153311712744944.jpg"
                      alt="3, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,STREAMER,NỮ STREAMER,QUỲNH ALEE,"
                      note="Cô nàng streamer từng bật khóc bất lực ngay trên sóng trước những bình luận ác ý từ phía anti-fan"
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/660/133514250583805952/2021/6/28/screenshot854-1621392944405530986247-1624854174009612651548.png"
                      alt="4, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,STREAMER,NỮ STREAMER,QUỲNH ALEE,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/660/133514250583805952/2021/6/28/screenshot856-16213929443741120468887-16248541740651947051190.png"
                      alt="5, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,STREAMER,NỮ STREAMER,QUỲNH ALEE,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/28/photo-1-16248542675811425333616.png"
                      alt="6, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,STREAMER,NỮ STREAMER,QUỲNH ALEE,"
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
