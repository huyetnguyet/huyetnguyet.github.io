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

 <ContentItem title="9 con số cho thấy thế giới này còn rất nhiều sự thật siêu thú vị mà bạn chưa bao giờ biết tới"\description="Chẳng hạn, bạn có biết mỗi ngày nước Mỹ có bao nhiêu triệu phú xuất hiện không? Nó lớn hơn bạn tưởng nhiều đấy." 
src="https://gamek.mediacdn.vn/133514250583805952/2021/6/6/photo-1-16229557224491540876688.jpg" 
alt="Su That, Thu Vi, " 
category="news" 
time="06/06/2021 08:47 AM" 
link="/9-con-so-cho-thay-the-gioi-nay-con-rat-nhieu-su-that-sieu-thu-vi-ma-ban-chua-bao-gio-biet-toi"/>

{title:"9 con số cho thấy thế giới này còn rất nhiều sự thật siêu thú vị mà bạn chưa bao giờ biết tới",\description:"Chẳng hạn, bạn có biết mỗi ngày nước Mỹ có bao nhiêu triệu phú xuất hiện không? Nó lớn hơn bạn tưởng nhiều đấy." ,
src:"https://gamek.mediacdn.vn/133514250583805952/2021/6/6/photo-1-16229557224491540876688.jpg" ,
alt:"Su That, Thu Vi, " ,
category:"news" ,
time:"06/06/2021 08:47 AM" ,
link:"/9-con-so-cho-thay-the-gioi-nay-con-rat-nhieu-su-that-sieu-thu-vi-ma-ban-chua-bao-gio-biet-toi",component:"page_20210606084757",
filepath:"./20210606084757-9-con-so-cho-thay-the-gioi-nay-con-rat-nhieu-su-that-sieu-thu-vi-ma-ban-chua-bao-gio-biet-toi.js"},

9 con số cho thấy thế giới này còn rất nhiều sự thật siêu thú vị mà bạn chưa bao giờ biết tới
Chẳng hạn, bạn có biết mỗi ngày nước Mỹ có bao nhiêu triệu phú xuất hiện không? Nó lớn hơn bạn tưởng nhiều đấy.
https://gamek.mediacdn.vn/133514250583805952/2021/6/6/photo-1-16229557224491540876688.jpg
Su That, Thu Vi, 
news
06/06/2021
08:47 AM
/9-con-so-cho-thay-the-gioi-nay-con-rat-nhieu-su-that-sieu-thu-vi-ma-ban-chua-bao-gio-biet-toi
page_20210606084757
./20210606084757-9-con-so-cho-thay-the-gioi-nay-con-rat-nhieu-su-that-sieu-thu-vi-ma-ban-chua-bao-gio-biet-toi.js




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
  "9 con số cho thấy thế giới này còn rất nhiều sự thật siêu thú vị mà bạn chưa bao giờ biết tới";
const author = "J.D";
const source = "Pháp Luật & Bạn Đọc";
const date = "06/06/2021";
const time = "08:47 AM";
const description =
  "Chẳng hạn, bạn có biết mỗi ngày nước Mỹ có bao nhiêu triệu phú xuất hiện không? Nó lớn hơn bạn tưởng nhiều đấy.";
const link =
  "9-con-so-cho-thay-the-gioi-nay-con-rat-nhieu-su-that-sieu-thu-vi-ma-ban-chua-bao-gio-biet-toi";
const tagparam = ["su-that", "thu-vi"];
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

export default function page_20210606084757() {
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
              <div className="author">{author}</div> - Theo {source} | {date}{" "}
              {time}
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
                      Số liệu là thứ luôn bị cho là khô khan, nhức đầu. Nhưng
                      thực ra có những con số sẽ khiến bạn cảm thấy rất thú vị,
                      đặc biệt là khi nó liên quan đến các sự thật ít người biết
                      đến của thế giới này.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/6/photo-1-16229557224491540876688.jpg"
                      alt="Su That, Thu Vi, "
                      note=""
                    />
                    <p>
                      Ước tính, Dải Ngân hà của chúng ta có khoảng 400 tỉ ngôi
                      sao. Nhưng trên Trái đất hiện tại còn khoảng 3 nghìn tỉ
                      cây lận.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/6/photo-1-1622955648303936875117.jpg"
                      alt="Su That, Thu Vi, "
                      note=""
                    />
                    <p>
                      Đó là nước Đức - nếu xét về tỷ lệ. Trẻ em từ 0 - 14 tuổi
                      chỉ chiếm 12% dân số nước Đức. Trong khi đó tại Kenya, con
                      số lên tới 40%.
                    </p>
                    <RelationNewsInPage />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/6/photo-1-1622955650114305841008.jpg"
                      alt="Su That, Thu Vi, "
                      note=""
                    />
                    <p>
                      Tính từ năm 1000 đến 2000, số người trên Trái đất đã tăng
                      gấp 22 lần. Vào tháng 7/1000, thế giới có 275 triệu người.
                      Đến tháng 7/2000 đã là hơn 6,1 tỉ người, và con số vẫn
                      đang tiếp tục gia tăng.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/6/photo-2-16229556501612008254305.jpg"
                      alt="Su That, Thu Vi, "
                      note=""
                    />
                    <p>
                      Trung bình, mỗi người đi bộ khoảng 7500 bước mỗi ngày, và
                      thọ khoảng 80 tuổi. Làm một vài phép tính đơn giản thì sau
                      khi trừ đi vài năm đầu đời và cuối đời, một người bình
                      thường sẽ đi khoảng 180.000km trong suốt cuộc đời. Điều
                      này có nghĩa là trong một đời người, bạn sẽ đi được một
                      quãng đường bằng 4,5 lần đường xích đạo.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/6/photo-3-1622955650214241787836.jpg"
                      alt="Su That, Thu Vi, "
                      note=""
                    />
                    <p>
                      Các nhà nghiên cứu từng thực hiện một khảo sát về việc
                      ngày nào trong tuần có nhiều trẻ em sinh ra nhất. Kết quả,
                      đứng đầu tiên là thứ 5 - 12,8%, sau đó là thứ 2 - 11%.
                      Ngày ít trẻ sinh ra nhất là thứ 7 - chỉ 10%.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/6/photo-4-1622955650253952109885.jpg"
                      alt="Su That, Thu Vi, "
                      note=""
                    />
                    <p>
                      Đơn giản thôi: 90% email bạn nhận được là các thư rác
                      (spam).
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/6/photo-5-16229556503002131470403.jpg"
                      alt="Su That, Thu Vi, "
                      note=""
                    />
                    <p>
                      Đó là Đan Mạch. Các số liệu thống kê cho thấy 82% bà mẹ
                      người Đan Mạch làm việc khá thường xuyên. Thụy Điển, Hà
                      Lan và Slovenia bám gót rất sát. Trong khi đó, Hy Lạp đứng
                      cuối cùng, chỉ dưới 50% các bà mẹ có đi làm tại quốc gia
                      này.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/6/photo-6-1622955650346175094903.jpg"
                      alt="Su That, Thu Vi, "
                      note=""
                    />
                    <p>
                      75 - đó là số bánh mà McDonald's - thương hiệu đồ ăn nhanh
                      nổi tiếng thế giới có thể bán được mỗi giây. Thậm chí có
                      hẳn một website để bạn theo dõi những gì họ làm được trong
                      1s - nếu bạn có quan tâm.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/6/photo-7-1622955650397937098259.jpg"
                      alt="Su That, Thu Vi, "
                      note=""
                    />
                    <p>
                      Tỉ phú thì ít, nhưng triệu phú thì hóa ra có nhiều hơn bạn
                      tưởng. Tại Mỹ, mỗi ngày có thêm 1700 triệu phú xuất hiện.
                      Theo một số thống kê thì mỗi năm, có 8 triệu gia đình tại
                      Mỹ có thu nhập nhiều hơn 1 triệu đô - chưa tính đến bất
                      động sản và trang sức.
                    </p>
                    <p>Nguồn: BS, VT.co</p>
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
