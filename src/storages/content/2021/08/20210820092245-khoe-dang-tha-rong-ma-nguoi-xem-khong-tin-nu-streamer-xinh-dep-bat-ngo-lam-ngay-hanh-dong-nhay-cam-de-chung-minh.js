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
"timestamp": '20/08/2021 09:22 AM',
"title": 'Khoe đang "thả rông" mà người xem không tin, nữ streamer xinh đẹp bất ngờ làm ngay hành động nhạy cảm để chứng minh',
"description": 'Thế mới thấy chiêu trò của các cô nàng streamer ngày càng tinh vi và khó lường hơn theo thời gian.',
"src": 'https://kenh14cdn.com/203336854389633024/2021/8/20/photo-1-16294633783711826163256.gif',
"alt": 'streamer,hành động phản cảm,chiêu trò,khoe thân,',
"category": 'images',
"date": '20/08/2021',
"time": '09:22 AM',
"link": '/khoe-dang-tha-rong-ma-nguoi-xem-khong-tin-nu-streamer-xinh-dep-bat-ngo-lam-ngay-hanh-dong-nhay-cam-de-chung-minh',
"zcomponent": 'page_20210820092245',
"filepath": './20210820092245-khoe-dang-tha-rong-ma-nguoi-xem-khong-tin-nu-streamer-xinh-dep-bat-ngo-lam-ngay-hanh-dong-nhay-cam-de-chung-minh.js'
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
  'Khoe đang "thả rông" mà người xem không tin, nữ streamer xinh đẹp bất ngờ làm ngay hành động nhạy cảm để chứng minh';
const author = "MẶT TRỨNG,";
const source = "Pháp luật & Bạn đọc";
const timestamp = "20/08/2021 09:22 AM";
const description =
  "Thế mới thấy chiêu trò của các cô nàng streamer ngày càng tinh vi và khó lường hơn theo thời gian.";
const link =
  "khoe-dang-tha-rong-ma-nguoi-xem-khong-tin-nu-streamer-xinh-dep-bat-ngo-lam-ngay-hanh-dong-nhay-cam-de-chung-minh";
const tagparam = ["streamer", "hành động phản cảm", "chiêu trò", "khoe thân"];
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

export default function page_20210820092245() {
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
                      Thế mới thấy <strong>chiêu trò</strong> của các cô nàng{" "}
                      <strong>streamer</strong> ngày càng tinh vi và khó lường
                      hơn theo thời gian.
                    </p>
                    <p>
                      Với việc siết chặt và kiểm soát mạnh mẽ trang phục của các
                      nữ <strong>streamer</strong> ở thời điểm hiện tại, nhiều
                      nền tảng không hề do dự mà đưa ra những án phạt khá nghiêm
                      khắc. Tuy nhiên, cũng có rất nhiều trường hợp dường như
                      chẳng biết sợ, khi mà bất chấp việc thường xuyên phải nhận
                      những lệnh cấm kênh, tạm dừng phát sóng, thế nhưng ngay
                      khi quay trở lại, họ vẫn tiếp tục phong cách ăn mặc gợi
                      cảm, đôi khi là phản cảm trước hàng nghìn người xem. Điển
                      hình như Dahee - một trong những nữ streamer tai tiếng
                      nhất ở Hàn Quốc dưới đây.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/20/photo-1-162946337598629722990.jpg"
                      alt="1, streamer,hành động phản cảm,chiêu trò,khoe thân,"
                      note="Dahee - cô nàng streamer nổi lên nhờ những chiêu trò"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/20/photo-2-16294633784471814372126.jpg"
                      alt="2, streamer,hành động phản cảm,chiêu trò,khoe thân,"
                      note="Nhưng lại cực kỳ được các fan ưa thích"
                    />
                    <p>
                      Sở hữu gương mặt khá ưa nhìn, thân thiện thế nhưng ai mà
                      ngờ được, Dahee lại là một trong những cái tên{" "}
                      <strong>chiêu trò</strong> và tai tiếng bậc nhất của
                      AfreecaTV với số ngày bị cấm kênh bởi án phạt có lẽ còn
                      nhiều hơn thời gian mà cô nàng lên sóng. Và có thể nói,
                      mặc dù AfreecaTV có nỗ lực tới đâu thì cũng chẳng thể chặn
                      hết các chiêu trò từ phía Dahee - nhất là khi cô nàng gần
                      như chưa bao giờ có ý định dừng lại vì một lẽ đơn giản, đó
                      chính là thương hiệu của nữ <strong>streamer</strong> này.
                      Hãy cứ nhìn lượt tương tác siêu khủng trên cả nền tảng
                      livestream lẫn kênh cá nhân của Dahee thì đủ hiểu.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/20/photo-3-1629463378482218321254.jpg"
                      alt="3, streamer,hành động phản cảm,chiêu trò,khoe thân,"
                      note="Cô nàng streamer luôn tận dụng tối đa vẻ gợi cảm của mình"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/20/photo-4-16294633785221355318128.jpg"
                      alt="4, streamer,hành động phản cảm,chiêu trò,khoe thân,"
                      note="Độ chiêu trò của Dahee thì có lẽ luôn là số một"
                    />
                    <RelationNewsInPage category={category} />
                    <p>
                      Từ những việc như bôi dầu bóng loáng lên ngực, rủ đồng
                      nghiệp livestream ở nhà nghỉ cho tới cả đưa lời khuyên cho
                      các hậu bối nên học mình thả rông trên sóng, tất cả đều
                      được Dahee thực hiện một cách rất đơn giản và coi đó là
                      cách để nổi tiếng của mình. Thậm chí mới đây, trong một
                      phiên livestream, cô nàng còn khiến cho không ít người xem
                      phải bất ngờ với một hành động mang tính phản ứng cực
                      nhanh.
                    </p>
                    <p>
                      Cụ thể, trong lần hiếm hoi lên sóng với bộ trang phục kín
                      cổng cao tường, ấy thế nhưng ngay khi người xem tỏ vẻ nghi
                      ngờ về tuyên bố luôn thả rông vòng một lúc trước của mình,
                      Dahee đã lập tức định chứng minh bằng cách vén áo, khoe
                      đôi gò bồng đảo của mình.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/20/photo-5-16294633785691081081802.jpg"
                      alt="5, streamer,hành động phản cảm,chiêu trò,khoe thân,"
                      note="Đủ các cách thức khoe thân được nữ streamer này áp dụng"
                    />

                    <p>
                      Chẳng hiểu làm vậy để chứng minh mình là người phát ngôn
                      nhất quán hay lại tận dụng để <strong>chiêu trò</strong>{" "}
                      trên sóng, thế nhưng cô nàng Dahee tiếp tục phải nhận vô
                      số chỉ trích về phía bản thân cũng vì hành động này. Nhưng
                      có lẽ cô nàng <strong>streamer</strong> sẽ chẳng mấy quan
                      tâm, vì kể ra nó còn nhẹ nhàng chán so với không ít lần
                      làm náo loạn trước đây của Dahee.
                    </p>
                    <p>Ảnh: Internet</p>
                    <ContentImage
                      src="https://kenh14cdn.com/203336854389633024/2021/8/20/photo-1-16294633783711826163256.gif"
                      alt="7, streamer,hành động phản cảm,chiêu trò,khoe thân,"
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
