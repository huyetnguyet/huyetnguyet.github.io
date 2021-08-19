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
"timestamp": '19/08/2021 01:03 PM',
"title": 'Được nhân viên McDonald’s cưu mang thuở nghèo đói, Cristiano Ronaldo tìm lại và trả ơn họ khi đã thành công',
"description": '"Cristiano Ronaldo là người tuyệt vời khi không quên những điều nhỏ bé trong quá khứ. Tôi vốn không tin vào nhân quả nhưng bây giờ tôi bắt đầu tin rằng nó có thật", người phụ nữ chia sẻ.',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/19/photo-1-1629360509016983153142.png',
"alt": 'cristiano ronaldo,nhân viên McDonald’s,ronaldo,',
"category": 'news',
"date": '19/08/2021',
"time": '01:03 PM',
"link": '/duoc-nhan-vien-mcdonalds-cuu-mang-thuo-ngheo-doi-cristiano-ronaldo-tim-lai-va-tra-on-ho-khi-da-thanh-cong',
"zcomponent": 'page_20210819130303',
"filepath": './20210819130303-duoc-nhan-vien-mcdonalds-cuu-mang-thuo-ngheo-doi-cristiano-ronaldo-tim-lai-va-tra-on-ho-khi-da-thanh-cong.js'
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
  "Được nhân viên McDonald’s cưu mang thuở nghèo đói, Cristiano Ronaldo tìm lại và trả ơn họ khi đã thành công";
const author = "MỘC TIÊN,";
const source = "Doanh nghiệp tiếp thị";
const timestamp = "19/08/2021 01:03 PM";
const description =
  '"Cristiano Ronaldo là người tuyệt vời khi không quên những điều nhỏ bé trong quá khứ. Tôi vốn không tin vào nhân quả nhưng bây giờ tôi bắt đầu tin rằng nó có thật", người phụ nữ chia sẻ.';
const link =
  "duoc-nhan-vien-mcdonalds-cuu-mang-thuo-ngheo-doi-cristiano-ronaldo-tim-lai-va-tra-on-ho-khi-da-thanh-cong";
const tagparam = ["cristiano ronaldo", "nhân viên McDonald’s", "ronaldo"];
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

export default function page_20210819130303() {
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
                      "
                      <strong>
                        Cristiano <strong>Ronaldo</strong>
                      </strong>{" "}
                      là người tuyệt vời khi không quên những điều nhỏ bé trong
                      quá khứ. Tôi vốn không tin vào nhân quả nhưng bây giờ tôi
                      bắt đầu tin rằng nó có thật", người phụ nữ chia sẻ.
                    </p>
                    <p>
                      Tháng 6 năm ngoái,{" "}
                      <strong>
                        Cristiano <strong>Ronaldo</strong>
                      </strong>{" "}
                      (CR7) đã trở thành cầu thủ bóng đá đầu tiên trên thế giới
                      kiếm được hơn 1 tỷ USD. Để có ngày hôm nay, siêu sao người
                      Bồ Đào Nha đã trải qua không ít khó khăn, đặc biệt là tuổi
                      thơ nghèo khó.
                    </p>
                    <p>
                      Khi còn là một cậu bé nghèo, anh hay đến cửa hàng
                      McDonald’s địa phương mỗi tối muộn để xin ăn. Trong một
                      cuộc phỏng vấn năm 2019, CR7 kể lại: "Tôi cùng một vài cậu
                      bạn trong câu lạc bộ bóng đá thường xuyên đến cửa hàng
                      McDonald’s gần sân vận động để xin đồ ăn còn thừa lại và
                      được ba người phụ nữ làm việc tại đó cho ăn no. Sau này,
                      tôi không thể tìm lại họ. Tôi nhớ rằng một người tên là
                      Edna".
                    </p>
                    <p>
                      CR7 chia sẻ câu chuyện trên với hi vọng ba người phụ nữ
                      tốt bụng năm nào xem được chương trình và lộ diện để anh
                      trả ơn họ. Thậm chí, nếu tìm được họ, anh sẽ mời họ đến
                      Lisbon và dùng bữa tối cùng mình.
                    </p>
                    <p>
                      Cũng trong cuộc phỏng vấn, CR7 đã có nhiều chia sẻ đáng
                      chú ý. Anh nói: "Là một người như tôi thật nhàm chán dù
                      một phần cũng khá tuyệt vời. Nổi tiếng, xuất hiện trên TV,
                      báo đài… nhưng sau hàng chục năm, tôi muốn một chút riêng
                      tư.
                    </p>
                    <p>
                      Trong 10 năm qua, tôi gần như đã không còn quyền riêng tư.
                      Nếu tôi đi công viên cùng các con, chúng sẽ bị chụp ảnh.
                      Cả tôi, bạn gái và những đứa trẻ đều lo lắng. Chúng tôi
                      không thoải mái khi ở nơi công cộng".
                    </p>
                    <p>
                      Quay trở lại với mong muốn tìm ba người phụ nữ làm việc ở
                      McDonald’s của CR7, một thời gian sau, một trong ba người
                      cuối cùng cũng lộ diện. Đó là Paula Leca - một bà mẹ hai
                      con.
                    </p>
                    <p>
                      Cô kể với một đài phát thanh Bồ Đào Nha: "Mấy cậu nhóc
                      thường xuất hiện trước cửa hàng buổi tối. Vì người quản lý
                      cho phép mang về những chiếc bánh còn thừa, chúng tôi cho
                      những cậu bé tội nghiệp này.{" "}
                      <strong>
                        Cristiano <strong>Ronaldo</strong>
                      </strong>{" "}
                      có lẽ là người rụt rè nhất".
                    </p>
                    <p>
                      Paula cho biết sau khi cửa hàng McDonald’s đóng cửa, cô đã
                      mất liên lạc với Edna. Được biết, trước đó, CR7 từng liên
                      lạc với McDonald’s tại Bồ Đào Nha để tìm ra ba người phụ
                      nữ tốt bụng nhưng đều không nhận được kết quả vì họ đã làm
                      việc tại đó từ hơn 20 năm trước.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Người phụ nữ kể thêm: "Tôi vẫn nói với con trai mình về
                      câu chuyện năm xưa nhưng thằng bé không tin rằng tôi từng
                      cho siêu sao bóng đá{" "}
                      <strong>
                        Cristiano <strong>Ronaldo</strong>
                      </strong>{" "}
                      những chiếc hamburger còn thừa. Chồng tôi cũng biết chuyện
                      vì ngày trước, đôi lúc anh ấy đến đón tôi lúc tan làm và
                      cũng nhìn thấy Ronaldo.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/19/photo-1-1629360507952977667478.jpg"
                      alt="1, cristiano ronaldo,nhân viên McDonald’s,ronaldo,"
                      note="Paula Leca và chồng"
                    />
                    <p>
                      Việc đó xảy ra từ rất lâu rồi. Tôi thực sự thấy vui vì cậu
                      ấy thành công như hiện nay. Tôi chưa bao giờ nghĩ rằng cậu
                      ấy vẫn nhớ sự việc sau nhiều năm như vậy.{" "}
                      <strong>
                        Cristiano <strong>Ronaldo</strong>
                      </strong>{" "}
                      là một con người tuyệt vời khi không quên những điều nhỏ
                      bé trong quá khứ. Tôi vốn không tin vào nhân quả nhưng bây
                      giờ tôi bắt đầu tin rằng điều này có thật".
                    </p>
                    <p>
                      CR7 nổi tiếng là ngôi sao bóng đá giàu lòng nhân ái. Năm
                      2014, mẹ của cậu bé Erik Ortiz Cruz 10 tháng tuổi đã bày
                      tỏ mong muốn được CR7 tặng áo thi đấu để bán đấu giá lấy
                      tiền điều trị bệnh hiểm nghèo cho bé.
                    </p>
                    <p>
                      Sau khi biết chuyện, CR7 đã hỗ trợ 75.000 USD cho ca phẫu
                      thuật cũng như trả mọi chi phí điều trị cho Erik. Tất
                      nhiên, anh cũng tặng áo và giày thi đấu của mình cho cậu
                      bé.
                    </p>

                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/19/photo-1-1629360509016983153142.png"
                      alt="2, cristiano ronaldo,nhân viên McDonald’s,ronaldo,"
                      note=""
                    />
                    <p>Nguồn: The Sun</p>
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
