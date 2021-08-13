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
"timestamp": '09/08/2021 10:54 AM',
"title": 'Jennie lập kỷ lục với MV SOLO nhưng vẫn bị video vũ đạo ngang ngược nhất của BLACKPINK vượt mặt',
"description": 'Jennie lập kỷ lục ở mảng nữ nghệ sĩ solo Kpop. Thế nhưng MV của cô vẫn không nhiều lượt xem bằng video trình diễn vũ đạo How You Like That, được BLACKPINK phát hành vào tháng 7/2020.',
"src": 'https://kenh14cdn.com/203336854389633024/2021/8/9/hylt-dance-162850434507770515141.gif',
"alt": 'Jennie (BlackPink),Blackpink,How You Like That Dance Performance,view youtube,MV SOLO Jennie,kỷ lục nghệ sĩ solo nữ Kpop,How You Like That,',
"category": 'stars',
"date": '09/08/2021',
"time": '10:54 AM',
"link": '/jennie-lap-ky-luc-voi-mv-solo-nhung-van-bi-video-vu-dao-ngang-nguoc-nhat-cua-blackpink-vuot-mat',
"zcomponent": 'page_20210809105446',
"filepath": './20210809105446-jennie-lap-ky-luc-voi-mv-solo-nhung-van-bi-video-vu-dao-ngang-nguoc-nhat-cua-blackpink-vuot-mat.js'
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
  "Jennie lập kỷ lục với MV SOLO nhưng vẫn bị video vũ đạo ngang ngược nhất của BLACKPINK vượt mặt";
const author = "THÁI DÂN,";
const source = "Trí Thức Trẻ";
const timestamp = "09/08/2021 10:54 AM";
const description =
  "Jennie lập kỷ lục ở mảng nữ nghệ sĩ solo Kpop. Thế nhưng MV của cô vẫn không nhiều lượt xem bằng video trình diễn vũ đạo How You Like That, được BLACKPINK phát hành vào tháng 7/2020.";
const link =
  "jennie-lap-ky-luc-voi-mv-solo-nhung-van-bi-video-vu-dao-ngang-nguoc-nhat-cua-blackpink-vuot-mat";
const tagparam = [
  "Jennie (BlackPink)",
  "Blackpink",
  "How You Like That Dance Performance",
  "view youtube",
  "MV SOLO Jennie",
  "kỷ lục nghệ sĩ solo nữ Kpop",
  "How You Like That",
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

export default function page_20210809105446() {
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
                      Ngày 9/8, cộng đồng fan <strong>BLACKPINK</strong> đón
                      nhận liên tiếp 2 tin vui trên "mặt trận" YouTube. Đó là MV
                      SOLO của Jennie cán mốc 700 triệu views. Đồng thời, bản
                      Dance Performance (trình diễn vũ đạo){" "}
                      <strong>How You Like That</strong> của BLACKPINK cũng đạt
                      800 triệu lượt xem ở nền tảng này.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/9/jennie-solo-162850394849752557449.jpeg"
                      alt="1, Jennie (BlackPink),Blackpink,How You Like That Dance Performance,view youtube,MV SOLO Jennie,kỷ lục nghệ sĩ solo nữ Kpop,How You Like That,"
                      note="MV SOLO của Jennie cán mốc 700 triệu views"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/9/hylt-800m-16285039535551478885416.jpeg"
                      alt="2, Jennie (BlackPink),Blackpink,How You Like That Dance Performance,view youtube,MV SOLO Jennie,kỷ lục nghệ sĩ solo nữ Kpop,How You Like That,"
                      note="Cùng ngày, video nhảy How You Like That của BLACKPINK đạt 800 triệu lượt xem"
                    />
                    <p>
                      MV SOLO được Jennie phát hành vào 12/11/2018 và mất khoảng
                      2 năm, 8 tháng và 27 ngày để đạt 700 triệu views. Đây là
                      MV đầu tiên của nữ nghệ sĩ solo Kpop vượt qua cột mốc này.
                      Thế nhưng về tốc độ và số lượt xem thì SOLO lại chịu thua
                      video trình diễn vũ đạo <strong>How You Like That</strong>
                      , dù mức độ đầu tư dành cho sản phẩm "đánh lẻ" của Jennie
                      hơn hẳn.
                    </p>
                    <p>
                      Bản Dance Performance của <strong>BLACKPINK</strong> đạt
                      800 triệu lượt xem chỉ trong 1 năm, 1 tháng và 4 ngày, đã
                      thế còn hơn MV SOLO của Jennie đến 100 triệu views. Đáng
                      chú ý, đây là video vũ đạo đầu tiên và duy nhất trong lịch
                      sử chạm tới cột mốc nói trên.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/203336854389633024/2021/8/9/jennie-solo-sizerestricted-16285042354261440842800.gif"
                      alt="4, Jennie (BlackPink),Blackpink,How You Like That Dance Performance,view youtube,MV SOLO Jennie,kỷ lục nghệ sĩ solo nữ Kpop,How You Like That,"
                      note="... nhưng vẫn thua view của video vũ đạo How You Like That"
                    />
                    <p>
                      Điều này cho thấy <strong>BLACKPINK</strong> quả là "nữ
                      hoàng YouTube" hàng thật giá thật, chỉ là video nhảy thôi
                      cũng có lượt xem cao ngất ngưởng. Đã vậy, bản Dance
                      Performance này "ngang ngược" đến nỗi vượt cả MV solo được
                      đầu tư cực khủng của thành viên trong nhóm.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Với tốc độ tăng trưởng như vậy, ngày bản Dance Performance
                      của <strong>How You Like That</strong> đạt tỷ view có lẽ
                      không còn xa. Nhưng Jennie cũng không phải buồn khi bị
                      video vũ đạo của nhóm mình vượt mặt, bởi MV SOLO đã giúp
                      cô thiết lập kỷ lục chưa nữ nghệ sĩ solo Kpop nào chạm tới
                      rồi!
                    </p>

                    <ContentImage
                      src="https://kenh14cdn.com/203336854389633024/2021/8/9/hylt-dance-162850434507770515141.gif"
                      alt="5, Jennie (BlackPink),Blackpink,How You Like That Dance Performance,view youtube,MV SOLO Jennie,kỷ lục nghệ sĩ solo nữ Kpop,How You Like That,"
                      note=""
                    />
                    <p>
                      Nguồn: Soompi, Twitter - Ảnh: Internet - Video: YouTube
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
