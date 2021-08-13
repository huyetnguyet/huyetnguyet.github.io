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
"timestamp": '08/08/2021 10:21 PM',
"title": 'U mê chùm ảnh các địa điểm nổi tiếng Nhật Bản lên anime Your Name: Vẻ đẹp nao lòng không khác gì đời thực!',
"description": 'Các họa sĩ của anime Your Name đình đám đã thực sự rất tâm huyết để tái hiện lại khung cảnh tuyệt đẹp của thành phố thực.',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/8/roppongi-art-center-2-16284292604101771625758.jpg',
"alt": 'Your Name (Kimi no Na wa),Your Name,anime,phim anime,Your Name (2016),',
"category": 'travel',
"date": '08/08/2021',
"time": '10:21 PM',
"link": '/u-me-chum-anh-cac-dia-diem-noi-tieng-nhat-ban-len-anime-your-name-ve-dep-nao-long-khong-khac-gi-doi-thuc',
"zcomponent": 'page_20210808222113',
"filepath": './20210808222113-u-me-chum-anh-cac-dia-diem-noi-tieng-nhat-ban-len-anime-your-name-ve-dep-nao-long-khong-khac-gi-doi-thuc.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "travel";
const categoryLink = "/travel";
const title =
  "U mê chùm ảnh các địa điểm nổi tiếng Nhật Bản lên anime Your Name: Vẻ đẹp nao lòng không khác gì đời thực!";
const author = "HIEUTHUBA,";
const source = "Trí Thức Trẻ";
const timestamp = "08/08/2021 10:21 PM";
const description =
  "Các họa sĩ của anime Your Name đình đám đã thực sự rất tâm huyết để tái hiện lại khung cảnh tuyệt đẹp của thành phố thực.";
const link =
  "u-me-chum-anh-cac-dia-diem-noi-tieng-nhat-ban-len-anime-your-name-ve-dep-nao-long-khong-khac-gi-doi-thuc";
const tagparam = [
  "Your Name (Kimi no Na wa)",
  "Your Name",
  "anime",
  "phim anime",
  "Your Name (2016)",
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

export default function page_20210808222113() {
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
                      Bộ phim <strong>anime</strong> <strong>Your Name</strong>{" "}
                      (Tên Cậu Là Gì?) ra mắt năm 2016 là một kiệt tác đình đám
                      của đạo diễn Shinkai Makoto. Phim kể về Mitsuha - một nữ
                      sinh với cuộc sống buồn tẻ tại vùng quê và Taki - một
                      chàng trai Tokyo bất ngờ bị hoán đổi cơ thể với nhau trong
                      thời điểm sao chổi thiên niên kỉ đến gần. Họ nảy sinh tình
                      cảm với nhau - mặc dù còn không biết đối phương là ai. Câu
                      chuyện của Your Name đầy lãng mạn và cũng vươn vấn nhiều
                      cảm xúc trong khán giả, khiến tác phẩm trở thành hiện
                      tượng điện ảnh tại Nhật Bản. Tác phẩm này trở thành phim
                      có doanh thu cao thứ 4 trong lịch sử Nhật Bản, và cũng là
                      anime điện ảnh có doanh thu cao nhất.
                    </p>
                    <p>
                      Không chỉ để lại ấn tượng lớn ở phần nội dung,{" "}
                      <strong>Your Name</strong> cũng khiến nhiều khán giả xao
                      xuyến nhờ hình ảnh xuất sắc. Nhiều địa danh của Nhật Bản
                      được tái hiện đẹp đến nao lòng trong bộ phim, đồng thời
                      giống ngoài đời đến đáng kinh ngạc. Nhiều khán giả đã chụp
                      lại và so sánh hình ảnh thật - giả của các địa danh xuất
                      hiện trong Your Name, ắt hẳn sẽ khiến fan phải sửng sốt vì
                      sự tài tình của các họa sĩ làm nên bộ phim. Hãy chú ý là
                      ảnh thật thì ở trên, còn ảnh trong <strong>anime</strong>{" "}
                      thì ở dưới nha!
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/8/photo-1-16284304482431581924322.jpg"
                      alt="1, Your Name (Kimi no Na wa),Your Name,anime,phim anime,Your Name (2016),"
                      note="Khung cảnh đằng sau thực sự rất tương đồng, thậm chí là biển hiệu KFC!"
                    />

                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/8/yotsuya-station-16284292604121534556216.jpg"
                      alt="2, Your Name (Kimi no Na wa),Your Name,anime,phim anime,Your Name (2016),"
                      note="Khung cảnh này thật sự đẹp đến nao lòng, tuy nhiên bức ảnh ở dưới chỉ là ảnh quảng bá của phim, vậy nên có chút không tương đồng với hình ngoài đời thực"
                    />
                    <RelationNewsInPage category={category} />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/8/yotsuya-16284292604131791732953.jpg"
                      alt="3, Your Name (Kimi no Na wa),Your Name,anime,phim anime,Your Name (2016),"
                      note="Bức hình trong phim này thì mới cho thấy sự tương đồng đáng nể!"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/8/salon-de-te-rond-16284292604041400549101.jpg"
                      alt="4, Your Name (Kimi no Na wa),Your Name,anime,phim anime,Your Name (2016),"
                      note="Hình ảnh tòa nhà NTT Docomo Yoyogi dưới trời hoàng hôn ở gần đó cũng xuất hiện trên Your Name"
                    />

                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/8/roppongi-art-center-2-16284292604101771625758.jpg"
                      alt="5, Your Name (Kimi no Na wa),Your Name,anime,phim anime,Your Name (2016),"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/8/roppongi-hills-1628429260411653286729.jpg"
                      alt="6, Your Name (Kimi no Na wa),Your Name,anime,phim anime,Your Name (2016),"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/8/signs-1628429260413106607741.jpg"
                      alt="7, Your Name (Kimi no Na wa),Your Name,anime,phim anime,Your Name (2016),"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/8/mitsumata-crossing-16284292604141138115688.jpg"
                      alt="8, Your Name (Kimi no Na wa),Your Name,anime,phim anime,Your Name (2016),"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/8/post-box-16284292604141840983528.jpg"
                      alt="9, Your Name (Kimi no Na wa),Your Name,anime,phim anime,Your Name (2016),"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/8/suga-shrine-yotsumata-16284292604191560879571.jpg"
                      alt="10, Your Name (Kimi no Na wa),Your Name,anime,phim anime,Your Name (2016),"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/8/stairs-1628429260420447819904.jpg"
                      alt="11, Your Name (Kimi no Na wa),Your Name,anime,phim anime,Your Name (2016),"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/8/photo-1-16284299450541251372447.jpg"
                      alt="12, Your Name (Kimi no Na wa),Your Name,anime,phim anime,Your Name (2016),"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/8/shinanomachi-crossing-bridge-16284292604201970356002.jpg"
                      alt="13, Your Name (Kimi no Na wa),Your Name,anime,phim anime,Your Name (2016),"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/8/docomo-tower-16284292604211598259957.jpg"
                      alt="14, Your Name (Kimi no Na wa),Your Name,anime,phim anime,Your Name (2016),"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/8/yunika-vision-1628429260422456954788.jpg"
                      alt="15, Your Name (Kimi no Na wa),Your Name,anime,phim anime,Your Name (2016),"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/8/shinjuku-police-16284292604221863469291.jpg"
                      alt="16, Your Name (Kimi no Na wa),Your Name,anime,phim anime,Your Name (2016),"
                      note=""
                    />
                    <p>Nguồn ảnh: Tofugu</p>
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
