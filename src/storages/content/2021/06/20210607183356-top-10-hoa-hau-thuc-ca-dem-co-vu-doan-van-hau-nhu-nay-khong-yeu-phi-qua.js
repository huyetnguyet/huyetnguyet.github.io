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
"timestamp": 07/06/2021 06:33 PM",
"title": Top 10 Hoa hậu Việt Nam thức cả đêm cổ vũ Đoàn Văn Hậu thi đấu, như này không yêu phí quá",
"description": Trên Instagram cá nhân, Doãn Hải My đã đăng story khoảnh khắc về Đoàn Văn Hậu và đồng đội đồng thời bày tỏ niềm tự hào.",
"src": ",
"alt": Doan Hai My, Doan Van Hau, Dt Viet Nam, Hen Ho, Ban Gai Tin Don, Top 10 Hoa Hau Viet Nam, ",
"category": news",
"date": 07/06/2021",
"time": 06:33 PM",
"link": "/top-10-hoa-hau-thuc-ca-dem-co-vu-doan-van-hau-nhu-nay-khong-yeu-phi-qua",
"zcomponent": page_20210607183356",
"filepath": ./20210607183356-top-10-hoa-hau-thuc-ca-dem-co-vu-doan-van-hau-nhu-nay-khong-yeu-phi-qua.js"
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
  "Top 10 Hoa hậu Việt Nam thức cả đêm cổ vũ Đoàn Văn Hậu thi đấu, như này không yêu phí quá";
const author = "SA,";
const source = "Pháp luật & Bạn đọc";
const timestamp = "07/06/2021 06:33 PM";
const description =
  "Trên Instagram cá nhân, Doãn Hải My đã đăng story khoảnh khắc về Đoàn Văn Hậu và đồng đội đồng thời bày tỏ niềm tự hào.";
const link =
  "top-10-hoa-hau-thuc-ca-dem-co-vu-doan-van-hau-nhu-nay-khong-yeu-phi-qua";
const tagparam = [
  "doan-hai-my",
  "doan-van-hau",
  "dt-viet-nam",
  "hen-ho",
  "ban-gai-tin-don",
  "top-10-hoa-hau-viet-nam",
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

export default function page_20210607183356() {
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
                      ĐT Việt Nam đã có một trận đấu bùng nổ, làm nức lòng người
                      hâm mộ với chiến thắng 4-0 trước ĐT Indonesia tại vòng
                      loại World Cup 2022. Dù sự chênh lệch múi giờ nhưng hàng
                      triệu người Việt Nam vẫn thức đêm cổ vũ các chiến binh áo
                      đỏ, trong đó đương nhiên có người nhà các cầu thủ cùng nửa
                      kia của họ.
                    </p>
                    <p>
                      Điều đáng nói là trong lần cổ vũ ĐT Việt Nam này, nhiều
                      người cho rằng gái xinh đã không ngại gửi gắm tình cảm cho
                      bạn trai tin đồn. Trên Instagram cá nhân, Doãn Hải My quay
                      lại khoảnh khắc Đoàn Văn Hậu đến động viên đồng đội. Vốn
                      có vóc dáng cao lớn lực lưỡng nên đứng giữa những cầu thủ
                      khác, Đoàn Văn Hậu nổi bần bật hơn hẳn, ai nhìn vào cũng
                      chú ý ngay lập tức.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/6/8/img2830-16230928285931706450218.png"
                      alt="Doan Hai My, Doan Van Hau, Dt Viet Nam, Hen Ho, Ban Gai Tin Don, Top 10 Hoa Hau Viet Nam, "
                      note="Khoảnh khắc Doãn Hải My tập trung vào Đoàn Văn Hậu kèm những
                    icon cổ vũ"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/6/8/img2829-16230928284671951590436.png"
                      alt="Doan Hai My, Doan Van Hau, Dt Viet Nam, Hen Ho, Ban Gai Tin Don, Top 10 Hoa Hau Viet Nam, "
                      note='Kèm theo khoảnh khắc, gái đẹp gắn thêm sticker "Very very
                    very proud" để bày tỏ cảm xúc vô cùng tự hào của mình với
                    Đoàn Văn Hậu và đồng đội.'
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/8/img2831-16230928286131815822610.png"
                      alt="Doan Hai My, Doan Van Hau, Dt Viet Nam, Hen Ho, Ban Gai Tin Don, Top 10 Hoa Hau Viet Nam, "
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/6/8/img2832-1623092828636552700135.png"
                      alt="Doan Hai My, Doan Van Hau, Dt Viet Nam, Hen Ho, Ban Gai Tin Don, Top 10 Hoa Hau Viet Nam, "
                      note="  Trước đó, Doãn Hải My cũng đăng story cho biết mình theo dõi
                    trận đấu ngay từ đầu và thường xuyên cập nhật tỷ số trận
                    đấu. Cô nàng để lại rất nhiều icon bày tỏ cảm xúc sau mỗi
                    bàn thắng."
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/6/8/img2833-16230928286481369190736.png"
                      alt="Doan Hai My, Doan Van Hau, Dt Viet Nam, Hen Ho, Ban Gai Tin Don, Top 10 Hoa Hau Viet Nam, "
                      note="Doãn Hải My cập nhật tình hình trận đấu"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/6/8/img2835-1623092828867360817199.png"
                      alt="Doan Hai My, Doan Van Hau, Dt Viet Nam, Hen Ho, Ban Gai Tin Don, Top 10 Hoa Hau Viet Nam, "
                      note="Từng bàn thắng đều được gái đẹp ghi lại và đăng story"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/6/8/img2834-16230928286752098616959.png"
                      alt="Doan Hai My, Doan Van Hau, Dt Viet Nam, Hen Ho, Ban Gai Tin Don, Top 10 Hoa Hau Viet Nam, "
                      note=""
                    />
                    Từ khi vướng nghi vấn hẹn hò, đôi trai tài gái sắc đã để lộ
                    cả tá hint nhưng chưa một lần công khai tình cảm. Netizen
                    chỉ biết mối quan hệ của Đoàn Văn Hậu và Doãn Hải My vẫn còn
                    được duy trì qua những lần cặp đôi đi ăn cùng nhau, check-in
                    cùng địa điểm.
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/8/1-1623093543733411031890.png"
                      alt="Doan Hai My, Doan Van Hau, Dt Viet Nam, Hen Ho, Ban Gai Tin Don, Top 10 Hoa Hau Viet Nam, "
                      note="Doãn Hải My và Đoàn Văn Hậu nhận về nhiều sự chú ý của netizen vì quá đẹp đôi"
                    />
                  </div>
                  <AdsHorizontal />
                </div>

                <RandomFeature />

                <div className="source">Source: {source}</div>

                <FacebookShareButton link={facebookLinkShare} />

                <div className="tags">Tags: {updatedTags}</div>
              </div>
            </div>
          </div>
        </div>
      </Content>
    </>
  );
}
