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
"timestamp": '28/08/2021 08:53 AM',
"title": 'Tai tiếng là vậy, thế nhưng Amouranth - nữ streamer gợi cảm nhất thế giới từng gánh chịu những "tiêu cực" như thế này đây',
"description": 'Amouranth xứng đáng được coi là nữ streamer gợi cảm bậc nhất thế giới ở thời điểm hiện tại.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/28/photo-1-1630147468983542067572.jpg',
"alt": 'GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,STREAMER,NỮ STREAMER,AMOURANTH,',
"category": 'images',
"date": '28/08/2021',
"time": '08:53 AM',
"link": '/tai-tieng-la-vay-the-nhung-amouranth-nu-streamer-goi-cam-nhat-the-gioi-tung-ganh-chiu-nhung-tieu-cuc-nhu-the-nay-day',
"zcomponent": 'page_20210828085306',
"filepath": './20210828085306-tai-tieng-la-vay-the-nhung-amouranth-nu-streamer-goi-cam-nhat-the-gioi-tung-ganh-chiu-nhung-tieu-cuc-nhu-the-nay-day.js'
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
  'Tai tiếng là vậy, thế nhưng Amouranth - nữ streamer gợi cảm nhất thế giới từng gánh chịu những "tiêu cực" như thế này đây';
const author = "Illusionary";
const source = "Pháp luật và bạn đọc";
const timestamp = "28/08/2021 08:53 AM";
const description =
  "Amouranth xứng đáng được coi là nữ streamer gợi cảm bậc nhất thế giới ở thời điểm hiện tại.";
const link =
  "tai-tieng-la-vay-the-nhung-amouranth-nu-streamer-goi-cam-nhat-the-gioi-tung-ganh-chiu-nhung-tieu-cuc-nhu-the-nay-day";
const tagparam = [
  "GÁI XINH",
  "HOT GIRL",
  "CỘNG ĐỒNG MẠNG",
  "STREAMER",
  "NỮ STREAMER",
  "AMOURANTH",
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

export default function page_20210828085306() {
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
                      <strong>Amouranth</strong> là một nhà sáng tạo nội dung
                      nổi tiếng với các dòng sản phẩm cosplay, nghệ thuật, ASMR
                      và bồn tắm nước nóng. Nữ <strong>streamer</strong> đã đánh
                      bật Pokimane khỏi vị trí dẫn đầu trên Twitch vào tháng 4
                      năm 2021. Làm được điều đó thật không dễ dàng và cuộc sống
                      của cô cũng không dễ dàng hơn từ đó. Tháng sau, Twitch đưa
                      ra quyết định gây sốc khi tạm dừng quảng cáo trên kênh của
                      Amouranth. Việc ấy đã ảnh hưởng đến thu nhập cô, tất nhiên
                      doanh thu giảm không phải là khó khăn duy nhất mà cô ấy
                      phải đối mặt.
                    </p>
                    <p>
                      <strong>Amouranth</strong> đã phải chịu đựng rất nhiều
                      thời điểm hỗn loạn trong suốt những năm của cô ấy trên
                      Twitch. Dưới đây là một số chi tiết bi thảm nhất
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/28/photo-1-1630147468983542067572.jpg"
                      alt="1, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,STREAMER,NỮ STREAMER,AMOURANTH,"
                      note=""
                    />

                    <p>
                      Người hâm mộ của <strong>Amouranth</strong> bị ám ảnh, sợ
                      thần tượng kết hôn
                    </p>
                    <p>
                      Một trong những khía cạnh căng thẳng nhất khi trở thành
                      một <strong>streamer</strong> nổi tiếng là đấu tranh để
                      duy trì một cuộc sống riêng tư bình yên. Điều này đặc biệt
                      khó khăn đối với <strong>Amouranth</strong> khi những
                      người theo dõi đôi khi không biết cách tôn trọng ranh
                      giới.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/28/photo-1-1630147662856522696194.jpg"
                      alt="2, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,STREAMER,NỮ STREAMER,AMOURANTH,"
                      note=""
                    />

                    <p>
                      Một trong những người hâm mộ của{" "}
                      <strong>Amouranth</strong> được cho là đã khiến điều này
                      trở nên cực kỳ đáng sợ khi bay đến gặp cô ấy trong ảo
                      tưởng rằng họ đã đính hôn. Đây là người mà cô chưa từng
                      tiếp xúc, nhưng anh ta sẽ nhắn tin cho cô không ngừng về
                      mối quan hệ tưởng tượng này. Đây không phải là sự cố duy
                      nhất của cô ấy với một stalker (kẻ theo dõi, đeo bám).
                    </p>
                    <p>
                      Vào tháng 8 năm 2021, <strong>Amouranth</strong> tiết lộ
                      rằng đã có một vụ đốt phá nhà cô đáng sợ. May mắn thay,
                      không ai bị thương, nhưng điều đó không thay đổi thực tế
                      là cô ấy đã đặt cuộc sống của mình vào tình trạng nguy
                      hiểm khi xuất hiện trước công chúng.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/28/photo-1-1630147371761785275208.jpg"
                      alt="3, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,STREAMER,NỮ STREAMER,AMOURANTH,"
                      note=""
                    />

                    <p>
                      Cuộc sống cá nhân của <strong>Amouranth</strong> đã bị ảnh
                      hưởng vì phát trực tuyến
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      <strong>Amouranth</strong> giải thích rằng cô ấy không
                      thích nghỉ ngơi vì thời gian đó có thể được dành cho việc
                      hướng tới mục tiêu lớn hơn của cô ấy là bắt đầu một trang
                      trại chăn nuôi. Amouranth tự nhận đã hy sinh sức khỏe tinh
                      thần của bản thân vì công việc của mình. Sau đó, cô ấy
                      than thở về việc cô ấy không thực sự có nhiều bạn đồng
                      hành ngoài những chú chó của mình.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/28/photo-1-1630147456579439157836.jpg"
                      alt="4, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,STREAMER,NỮ STREAMER,AMOURANTH,"
                      note=""
                    />

                    <p>
                      Sau đó, cô ấy nói về nỗi buồn và cách cô ấy thương tiếc
                      khi mất đi một phần của bản thân. Dễ dàng nhận thấy rằng
                      việc phát trực tuyến đã ảnh hưởng không nhỏ đến cuộc sống
                      cá nhân của cô ấy.
                    </p>

                    <p>
                      Quyền riêng tư của <strong>Amouranth</strong> có thể đã bị
                      xâm phạm bởi một creator khác
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/28/photo-1-16301475512771922725471.jpg"
                      alt="5, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,STREAMER,NỮ STREAMER,AMOURANTH,"
                      note=""
                    />

                    <p>
                      Vào năm 2018, Youtuber L OF THE DAY đã đăng tải một video
                      cáo buộc <strong>Amouranth</strong> bí mật kết hôn. Mặc dù
                      một tuyên bố như vậy có vẻ khó chịu hơn là nguy hiểm,
                      nhưng nó có thể đã mở ra nguy cơ cho nhiều kẻ rình rập
                      hơn.
                    </p>
                    <p>
                      Trước khi video được xuất bản, <strong>Amouranth</strong>{" "}
                      nói với Syfy Wire rằng cô không lo lắng nhiều về "những kẻ
                      theo dõi". Sau khi video đó được công bố, tình hình được
                      cho là đã thay đổi theo chiều hướng tồi tệ hơn. Không chỉ
                      thông tin nhạy cảm của riêng cô bị phanh phui mà cả gia
                      đình, bạn bè và công việc kinh doanh của cô đều bị ảnh
                      hưởng. Cô cũng bị buộc vào một tình huống khó khăn khi cô
                      chỉ có thể bác bỏ những tuyên bố này bằng cách tiết lộ
                      thêm thông tin cá nhân mà cô quyết tâm bảo vệ.
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
