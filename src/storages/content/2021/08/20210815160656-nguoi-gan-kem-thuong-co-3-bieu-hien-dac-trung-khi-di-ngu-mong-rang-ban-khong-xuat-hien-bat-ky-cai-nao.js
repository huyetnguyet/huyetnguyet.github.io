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
"timestamp": '15/08/2021 04:06 PM',
"title": 'Người gan kém thường có 3 biểu hiện đặc trưng khi đi ngủ, mong rằng bạn không xuất hiện bất kỳ cái nào',
"description": 'Gan khỏe cơ thể mới khỏe, còn gan xấu thì bạn sẽ rất dễ bị trằn trọc, khó ngủ vào ban đêm.',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/15/photo-1-16290464450851819138154.jpg',
"alt": 'chịu trách nhiệm,máu lưu thông,',
"category": 'life',
"date": '15/08/2021',
"time": '04:06 PM',
"link": '/nguoi-gan-kem-thuong-co-3-bieu-hien-dac-trung-khi-di-ngu-mong-rang-ban-khong-xuat-hien-bat-ky-cai-nao',
"zcomponent": 'page_20210815160656',
"filepath": './20210815160656-nguoi-gan-kem-thuong-co-3-bieu-hien-dac-trung-khi-di-ngu-mong-rang-ban-khong-xuat-hien-bat-ky-cai-nao.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "life";
const categoryLink = "/life";
const title =
  "Người gan kém thường có 3 biểu hiện đặc trưng khi đi ngủ, mong rằng bạn không xuất hiện bất kỳ cái nào";
const author = "MINH ANH,";
const source = "Pháp luật & Bạn đọc";
const timestamp = "15/08/2021 04:06 PM";
const description =
  "Gan khỏe cơ thể mới khỏe, còn gan xấu thì bạn sẽ rất dễ bị trằn trọc, khó ngủ vào ban đêm.";
const link =
  "nguoi-gan-kem-thuong-co-3-bieu-hien-dac-trung-khi-di-ngu-mong-rang-ban-khong-xuat-hien-bat-ky-cai-nao";
const tagparam = ["chịu trách nhiệm", "máu lưu thông"];
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

export default function page_20210815160656() {
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
                      Gan vốn <strong>chịu trách nhiệm</strong> lọc thải độc tố,
                      trao đổi chất trong cơ thể. Do đó, việc nuôi dưỡng và bảo
                      vệ lá gan luôn khỏe mạnh là điều rất cần thiết. Bởi nếu
                      không duy trì lá gan khỏe thì bạn sẽ có nguy cơ phải đối
                      mặt với 3 vấn đề xuất hiện khi ngủ dưới đây.
                    </p>

                    <h5>1. Trằn trọc, khó ngủ suốt đêm</h5>
                    <p>
                      Người có lá gan khỏe mạnh thì cơ thể sẽ có sức đề kháng
                      tốt hơn, từ đó chẳng lo ốm vặt hay mất ngủ. Ngược lại,
                      những người có lá gan xấu thường bị trằn trọc, mất ngủ vào
                      ban đêm.
                    </p>
                    <p>
                      Lúc này, do gan bị ảnh hưởng bởi sự mất cân bằng nội tiết
                      tố, từ đó dễ gây rối loạn chức năng gan, khó chìm sâu vào
                      giấc ngủ. Để cải thiện tình trạng gan của mình thì bạn nên
                      chú ý sinh hoạt lành mạnh, đi ngủ đúng giờ cũng sẽ giúp cơ
                      thể tránh bị trằn trọc, khó ngủ về đêm.
                    </p>
                    <RelationNewsInPage category={category} />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/15/photo-1-16290464450851819138154.jpg"
                      alt="1, chịu trách nhiệm,máu lưu thông,"
                      note=""
                    />

                    <h5>2. Tỉnh giấc từ 1 - 3 giờ sáng</h5>
                    <p>
                      Việc thường xuyên thức giấc vào giữa đêm, đặc biệt trong
                      khoảng từ 1 - 3 giờ sáng cũng đồng thời cho thấy chức năng
                      gan của bạn đang hoạt động không bình thường. Do đây là
                      lúc gan bắt đầu nghỉ ngơi và phục hồi nên trong khoảng
                      thời gian này sẽ cần ngủ sâu.
                    </p>
                    <p>
                      Nếu bạn không thức giấc trong khung giờ này thì đừng lo vì
                      gan của bạn vẫn hoạt động bình thường.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/15/photo-1-1629046428753508214141.jpg"
                      alt="2, chịu trách nhiệm,máu lưu thông,"
                      note=""
                    />

                    <h5>3. Nghiến răng, nói mơ khi ngủ</h5>

                    <p>
                      Nhiều người có hiện tượng nghiến răng nói chuyện khi ngủ
                      và đây cũng là biểu hiện cảnh báo gan đang hoạt động bất
                      ổn. Trong khi đang chìm sâu vào giấc ngủ, bạn rất khó ý
                      thức được mình có những phản ứng nào.
                    </p>
                    <p>
                      Nếu <strong>máu lưu thông</strong> kém trong cơ thể thì
                      tinh thần bạn sẽ bất ổn, từ đó sinh ra mộng mị, ngủ nghiến
                      răng.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/15/photo-1-16290464947291995311264.png"
                      alt="3, chịu trách nhiệm,máu lưu thông,"
                      note=""
                    />

                    <p>Nguồn và ảnh: Sohu</p>
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
