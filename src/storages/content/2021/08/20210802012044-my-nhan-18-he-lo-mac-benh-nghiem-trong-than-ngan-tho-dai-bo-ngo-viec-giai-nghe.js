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
"timestamp": '02/08/2021 01:20 AM',
"title": 'Mỹ nhân 18+ hé lộ mắc bệnh nghiêm trọng, than ngắn thở dài bỏ ngỏ việc giải nghệ',
"description": 'Aoi Tsubasa đã tâm sự về chuyện cô nàng mắc bệnh dạ dày, nhưng cuối cùng lại phát hiện thêm bệnh khác và phải trì hoãn việc đóng phim.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/8/1/photo-1-1627792620526175642758.jpg',
"alt": 'AOI TSUBASA,IDOL,',
"category": 'images',
"date": '02/08/2021',
"time": '01:20 AM',
"link": '/my-nhan-18-he-lo-mac-benh-nghiem-trong-than-ngan-tho-dai-bo-ngo-viec-giai-nghe',
"zcomponent": 'page_20210802012044',
"filepath": './20210802012044-my-nhan-18-he-lo-mac-benh-nghiem-trong-than-ngan-tho-dai-bo-ngo-viec-giai-nghe.js'
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
  "Mỹ nhân 18+ hé lộ mắc bệnh nghiêm trọng, than ngắn thở dài bỏ ngỏ việc giải nghệ";
const author = "DS";
const source = "Trí Thức Trẻ";
const timestamp = "02/08/2021 01:20 AM";
const description =
  "Aoi Tsubasa đã tâm sự về chuyện cô nàng mắc bệnh dạ dày, nhưng cuối cùng lại phát hiện thêm bệnh khác và phải trì hoãn việc đóng phim.";
const link =
  "my-nhan-18-he-lo-mac-benh-nghiem-trong-than-ngan-tho-dai-bo-ngo-viec-giai-nghe";
const tagparam = ["AOI TSUBASA", "IDOL"];
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

export default function page_20210802012044() {
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
                      <strong>Aoi Tsubasa</strong> sinh năm 2000, mới chỉ gia
                      nhập ngành giải trí vào tháng 5/2020 với tư cách diễn viên
                      phim người lớn. Ban đầu, cô lấy nghệ danh là Aoi Ibuki,
                      nhưng sau đó chuyển tên thành như hiện tại. Cô nàng đang
                      là diễn viên độc quyền của công ty Moodyz và là 1 trong
                      những cái tên mới và cũng là trẻ tuổi nhất trong lịch sử
                      tham gia vào ngành công nghiệp này.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/1/photo-1-1627792620526175642758.jpg"
                      alt="1, AOI TSUBASA,IDOL,"
                      note=""
                    />
                    <p>
                      Với mọi người, ấn tượng đầu tiên về nhan sắc xinh đẹp và
                      cuốn hút của Aoi. Cô nàng sở hữu chiều cao ấn tượng 162
                      cm, với số đo 3 vòng lần lượt là 88 - 59 - 90. Theo nhiều
                      người, ấn tượng lớn nhất về Ibuki chính là nụ cười rạng rỡ
                      và tỏa nắng khiến cho nhiều chàng trai "cảm nắng".
                    </p>
                    <p>
                      Trong 1 lần phỏng vấn mới đây, Aoi cũng đã tiết lộ 1 vài
                      điều về bản thân. Trước đây khi còn theo học đại học, cô
                      nàng đã từng tham gia vào 1 nhóm nhạc tại trường đại học,
                      nhưng chỉ hoạt động 1 thời gian ngắn trước khi rời nhóm để
                      tập trung cho việc học.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/1/photo-1-16277926219531050370206.jpg"
                      alt="2, AOI TSUBASA,IDOL,"
                      note=""
                    />
                    <p>
                      Dù vậy, cô nàng vẫn có ước muốn được nhiều người biết đến,
                      và từ đó cũng biết đến ngành công nghiệp AV. Đến năm 19
                      tuổi, do quá hứng thú và tò mò về những chuyện 18+, thế
                      nên <strong>Aoi Tsubasa</strong> đã đi tới quyết định khá
                      liều lĩnh - gia nhập ngành công nghiệp phim người lớn.
                      Việc này giúp cô nàng có được sự chú ý của mọi người, đồng
                      thời thỏa mãn được sự tò mò của bản thân.
                    </p>
                    <p>
                      {" "}
                      Dù rất được hâm mộ là vậy, thế nhưng{" "}
                      <strong>Aoi Tsubasa</strong> lại gặp trở ngại về sức khỏe.
                      Mới đây, cô nàng đã thông báo bản thân mắc bệnh viêm dạ
                      dày ruột vào giữa tháng 7 vừa qua. Tình hình sức khoẻ
                      không được khả quan cho lắm khi cô cho biết mức độ sưng là
                      khá cao, nồng độ bạch cầu vượt quá mức cho phép. Sau gần 2
                      tuần chữa trị, cô gái sinh năm 2000 vẫn cảm thấy chưa ổn
                      và gần như không thể ăn uống bình thường.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Đến đầu tháng 8 vừa qua, cô nàng đã cập nhật tình hình lên
                      mạng xã hội. Theo đó, mỹ nhân sinh năm 2000 kể rằng sức
                      khỏe của mình đang dần ổn định trở lại, nhưng vẫn bỏ ngỏ
                      việc quay lại với AV. Nhiều người đặt câu hỏi rằng bị viêm
                      dạ dày chỉ phải chữa 1 tuần là đỡ, tại sao Aoi lại bị lâu
                      vậy. Đến lúc này, Aoi mới kể rằng cô nàng còn được bác sĩ
                      phát hiện ra mắc thêm các bệnh khác nữa.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/1/-16277939593311961064712.jpg"
                      alt="3, AOI TSUBASA,IDOL,"
                      note=""
                    />
                    <p>
                      Thậm chí, cô nàng còn đăng tải cả toa thuốc chữa viêm dạ
                      dày và bệnh bạch cầu của mình lên mạng. Các toa thuốc này
                      dù chữa bệnh nhưng cũng khiến cho sẽ khiến mặt bị sưng, da
                      trở nên thô ráp hơn, phù nề và dễ tăng cân. Đó cũng chính
                      là thứ khiến cô cảm thấy bị tự ti nhất, khi rất nhiều fan
                      thích cô bởi vóc dáng hoàn hảo cùng khuôn mặt xinh đẹp của
                      các diễn viên. Thế nên, không có gì quá khó hiểu nên{" "}
                      <strong>Aoi Tsubasa</strong> bỏ ngỏ ngày trở lại với fan
                      hâm mộ.{" "}
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/1/-16277939751051031085316.jpg"
                      alt="4, AOI TSUBASA,IDOL,"
                      note=""
                    />
                    <p>Bài viết được thực hiện với sự trợ giúp của AV Crush.</p>
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
