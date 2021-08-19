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
"timestamp": '19/08/2021 12:56 PM',
"title": '"Giải ngố" 18+: 4 thời điểm không nên làm chuyện ấy vì rất dễ gây tổn hại tới sức khỏe, nhất là đối với phái nữ',
"description": 'Việc thường xuyên quan hệ trong những khoảng thời gian sau đây đều không hề tốt cho sức khỏe chút nào. Do đó, bạn cần chú ý để tránh mắc phải nhé!',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/16/photo-1-16291329638351675332416.jpg',
"alt": 'Giải ngố 18+,đồng hồ sinh học,bạn có biết?,kỳ kinh nguyệt,',
"category": 'life',
"date": '19/08/2021',
"time": '12:56 PM',
"link": '/giai-ngo-18-4-thoi-diem-khong-nen-lam-chuyen-ay-vi-rat-de-gay-ton-hai-toi-suc-khoe-nhat-la-doi-voi-phai-nu',
"zcomponent": 'page_20210819125614',
"filepath": './20210819125614-giai-ngo-18-4-thoi-diem-khong-nen-lam-chuyen-ay-vi-rat-de-gay-ton-hai-toi-suc-khoe-nhat-la-doi-voi-phai-nu.js'
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
  '"Giải ngố" 18+: 4 thời điểm không nên làm chuyện ấy vì rất dễ gây tổn hại tới sức khỏe, nhất là đối với phái nữ';
const author = "SƠ RI,";
const source = "Pháp luật & Bạn đọc";
const timestamp = "19/08/2021 12:56 PM";
const description =
  "Việc thường xuyên quan hệ trong những khoảng thời gian sau đây đều không hề tốt cho sức khỏe chút nào. Do đó, bạn cần chú ý để tránh mắc phải nhé!";
const link =
  "giai-ngo-18-4-thoi-diem-khong-nen-lam-chuyen-ay-vi-rat-de-gay-ton-hai-toi-suc-khoe-nhat-la-doi-voi-phai-nu";
const tagparam = [
  "Giải ngố 18+",
  "đồng hồ sinh học",
  "bạn có biết?",
  "kỳ kinh nguyệt",
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

export default function page_20210819125614() {
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
                      Việc thường xuyên quan hệ trong những khoảng thời gian sau
                      đây đều không hề tốt cho sức khỏe chút nào. Do đó, bạn cần
                      chú ý để tránh mắc phải nhé!
                    </p>
                    <h5>1. Sau 11 giờ đêm</h5>
                    <p>
                      Nhiều cặp đôi thường sinh hoạt khá muộn nên thời gian đi
                      ngủ cũng kéo dài tới gần khuya. Tuy nhiên, chuyện "chăn
                      gối" mà thực hiện sau 11 giờ đêm thì không hề tốt cho sức
                      khỏe chút nào.
                    </p>{" "}
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/16/photo-1-16291329638351675332416.jpg"
                      alt="1, Giải ngố 18+,đồng hồ sinh học,bạn có biết?,kỳ kinh nguyệt,"
                      note=""
                    />
                    <p>
                      Bởi cơ thể của chúng ta thường bắt đầu nghỉ ngơi sau
                      khoảng 11 giờ đêm. Nếu vận động quá sức trong thời điểm
                      này có thể làm rối loạn <strong>đồng hồ sinh học</strong>,
                      khiến cơ thể trở nên mệt mỏi, uể oải, suy giảm khả năng
                      miễn dịch.
                    </p>
                    <h5>2. Lúc quá đói hoặc quá no</h5>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/16/photo-1-16291330208531794037225.jpg"
                      alt="2, Giải ngố 18+,đồng hồ sinh học,bạn có biết?,kỳ kinh nguyệt,"
                      note=""
                    />
                    <p>
                      Bạn có biết rằng, khi bạn ăn quá no thì dạ dày sẽ nhanh
                      đầy lên và máu sẽ dồn tập trung về khu vực dạ dày. Lúc
                      này, lượng máu cung cấp cho não bộ và các cơ quan khác sẽ
                      giảm xuống nên cần tránh quan hệ trong thời điểm này.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Ngoài ra, nếu cơ thể bị đói mà làm chuyện ấy thì rất dễ
                      gây hại cho toàn bộ cơ thể nên bạn cũng cần chú ý nhé!
                    </p>
                    <h5>3. Sau khi uống rượu</h5>
                    <p>
                      Sau khi uống rượu xong, cơ thể sẽ dễ rơi vào trạng thái
                      hưng phấn nên chuyện quan hệ ngay lúc này có thể gây mất
                      kiểm soát ở nam giới, từ đó dẫn đến những hành vi thô bạo
                      khi làm chuyện ấy.
                    </p>{" "}
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/16/photo-1-16291330648061598698784.jpg"
                      alt="3, Giải ngố 18+,đồng hồ sinh học,bạn có biết?,kỳ kinh nguyệt,"
                      note=""
                    />
                    <p>
                      Đặc biệt, khi hệ thần kinh ở trạng thái hưng phấn cao độ,
                      cơ quan sinh dục sẽ dễ bị sung huyết, tổn thương và có thể
                      làm ảnh hưởng đến chất lượng tinh trùng của nam giới. Với
                      những cặp đôi đang muốn có em bé thì điều này còn gây ảnh
                      hưởng tới khả năng sinh sản.
                    </p>
                    <h5>
                      4. Đang trong <strong>kỳ kinh nguyệt</strong> của nữ giới
                      <p>
                        Một thời điểm nữa mà các cặp đôi nên tránh làm chuyện
                        ấy, đó chính là trong những ngày "rớt dâu" của phái nữ.
                        Đây là lúc tử cung của nữ giới đang ở trạng thái mở,
                        việc quan hệ quá mạnh có thể gây bệnh phụ khoa và thậm
                        chí ảnh hưởng nghiêm trọng đến khả năng sinh sản sau
                        này. Vậy nên, các cặp đôi cần tránh làm chuyện ấy trong
                        thời kỳ này.
                      </p>{" "}
                    </h5>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/16/photo-1-1629133086070743667526.jpg"
                      alt="4, Giải ngố 18+,đồng hồ sinh học,bạn có biết?,kỳ kinh nguyệt,"
                      note=""
                    />
                    <p>Nguồn và ảnh: Sohu, Women't Health</p>
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
