import React from "react";
import "components/page.css";
import { AdsHorizontal, AdsVertical } from "components/adsMethods";
import {
  RandomFeature,
  RelationNews,
  RelationNewsInPage,
} from "components/methods";

import { Content, ContentImage, FacebookShareButton } from "components/content";

/* ---------------------------------------------------------------- */

/*

 {
"timestamp": '14/06/2021 09:20 AM',
"title": 'Lee Kwang Soo trong mắt NSX Running Man trước giờ chia tay: "Cậu ấy không phải là đồ ngốc"',
"description": 'Mọi thông tin mới nhất của Lee Kwang Soo trước giờ chính thức chia tay Running Man đều khiến cư dân mạng hết sức quan tâm.',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/13/anh-1-1623559384920800773602.jpeg',
"alt": 'Lee Kwang Soo, Sao Han, Idol, Kpop, Lee Kwang Soo Roi Running Man, Running Man, ',
"category": 'news',
"date": '14/06/2021',
"time": '09:20 AM',
"link": '/lee-kwang-soo-trong-mat-nsx-running-man-truoc-gio-chia-tay-cau-ay-khong-phai-la-do-ngoc',
"zcomponent": 'page_20210614092016',
"filepath": './20210614092016-lee-kwang-soo-trong-mat-nsx-running-man-truoc-gio-chia-tay-cau-ay-khong-phai-la-do-ngoc.js'
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
  'Lee Kwang Soo trong mắt NSX Running Man trước giờ chia tay: "Cậu ấy không phải là đồ ngốc"';
const author = "HWANGPD,";
const source = "Trí Thức Trẻ";
const timestamp = "14/06/2021 09:20 AM";
const description =
  "Mọi thông tin mới nhất của Lee Kwang Soo trước giờ chính thức chia tay Running Man đều khiến cư dân mạng hết sức quan tâm.";
const link =
  "lee-kwang-soo-trong-mat-nsx-running-man-truoc-gio-chia-tay-cau-ay-khong-phai-la-do-ngoc";
const tagparam = [
  "lee-kwang-soo",
  "sao-han",
  "idol",
  "kpop",
  "lee-kwang-soo-roi-running-man",
  "running-man",
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

export default function page_20210614092016() {
  return (
    <>
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
              <div className="author">{author}</div> - Theo {source} |{" "}
              {timestamp}
            </p>
          </div>
          <FacebookShareButton link={facebookLinkShare} />

          <div class="containerContent">
            <AdsHorizontal />
            <div className="content">
              <div className="contentContainer">
                <p className="description">{description}</p>
                <RelationNews category={category} />
                <div className="contentBody">
                  <p>
                    Sau hơn 11 năm đồng hành cùng <strong>Running Man</strong>,{" "}
                    <strong>Lee Kwang Soo</strong> sẽ chính thức nói lời tạm
                    biệt với show giải trí hàng đầu xứ Hàn vào ngày hôm nay
                    (13/6). Mọi thông tin và hình ảnh của nam diễn viên trước
                    giờ lên hình tập đặc biệt đều thu hút lượng lớn khán giả
                    quan tâm.
                  </p>
                  <p>
                    Dù nhà sản xuất mới chỉ hé lộ đoạn teaser ngắn ngủi nhưng có
                    thể khẳng định rằng, đây sẽ là một tập ghi hình lấy đi nước
                    mắt của rất nhiều thế hệ gắn bó với show truyền hình đẳng
                    cấp này.
                  </p>
                  <p>
                    Tập <strong>Running Man</strong> cuối cùng của{" "}
                    <strong>Lee Kwang Soo</strong> sẽ lên sóng truyền hình vào
                    ngày hôm nay (13/6), khép lại hành trình 11 năm “chạy không
                    mệt mỏi” của chàng "Hươu cao cổ" dễ thương
                  </p>
                  <p>
                    Mới đây, công ty chủ quản của Kwang Soo - King Kong
                    Entertainment đã chính thức đăng tải những tấm hình lưu niệm
                    ngày cuối ghi hình của nam diễn viên tại trường quay{" "}
                    <strong>Running Man</strong>. Trước giây phút nói lời tạm
                    biệt, "Hươu cao cổ" vẫn giữ trên môi nụ cười và sự vui vẻ
                    của thường ngày.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/13/base64-16235594656021606827205.png"
                    alt="Lee Kwang Soo, Sao Han, Idol, Kpop, Lee Kwang Soo Roi Running Man, Running Man, "
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/6/13/anh-5-1623559500680352253663.jpg"
                    alt="Lee Kwang Soo, Sao Han, Idol, Kpop, Lee Kwang Soo Roi Running Man, Running Man, "
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/6/13/anh-3-1623559500566606617108.jpg"
                    alt="Lee Kwang Soo, Sao Han, Idol, Kpop, Lee Kwang Soo Roi Running Man, Running Man, "
                    note="Lee Kwang Soo cầm tấm bằng chứng nhận cảm ơn từ Running Man"
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/6/13/anh-4-1623559500575738525469.jpg"
                    alt="Lee Kwang Soo, Sao Han, Idol, Kpop, Lee Kwang Soo Roi Running Man, Running Man, "
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/13/base64-1623559550597239737861.png"
                    alt="Lee Kwang Soo, Sao Han, Idol, Kpop, Lee Kwang Soo Roi Running Man, Running Man, "
                    note=""
                  />
                  <p>
                    King Kong Entertainment đăng ảnh của{" "}
                    <strong>Lee Kwang Soo</strong> trong ngày cuối ghi hình{" "}
                    <strong>Running Man</strong>. Album ảnh kỷ niệm đi kèm lời
                    nhắn: "Giải thưởng cảm ơn Lee Kwang Soo vì đã chạy trong
                    suốt 11 năm qua. Xin cảm ơn các khán giả đã cùng đồng hành
                    với Lee Kwang Soo vào thứ 2 hàng tuần trên Running Man. Cảm
                    ơn tất cả những tình cảm của mọi người, hãy cùng đồng hành
                    cùng Lee Kwang Soo đến cuối cùng, lúc 5 giờ chiều hôm nay"
                  </p>
                  <p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/13/anh-1-1623559384920800773602.jpeg"
                      alt="Lee Kwang Soo, Sao Han, Idol, Kpop, Lee Kwang Soo Roi Running Man, Running Man, "
                      note="
                    Giờ chia tay sắp đến nhưng nam diễn viên vẫn giữ vững sự lạc
                    quan, vui vẻ"
                    />
                  </p>
                  <RelationNewsInPage category={category} />
                  <p>
                    Không lâu sau đó, PD Hwanjin của chương trình cũng đăng tải
                    một bức ảnh từng viral khắp các mạng xã hội của Kwang Soo
                    kèm lời nhắn đầy cảm động. Thành viên từ tổ chế tác không
                    quên dành những lời có cánh cho nam diễn viên sau quãng thời
                    gian dài gắn bó cùng chương trình.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/13/base64-16235596251761216983664.png"
                    alt="Lee Kwang Soo, Sao Han, Idol, Kpop, Lee Kwang Soo Roi Running Man, Running Man, "
                    note="PD Hwanjin của Running Man đăng ảnh troll Kwang Soo cùng dòng caption đầy tình cảm"
                  />
                  <p>
                    Cụ thể, PD Hwanjin viết: "Trong kí ức của tôi, Kwang Soo
                    chưa từng một lần nói ‘Không’ với tổ chế tác. Cậu ấy chơi xé
                    bảng tên kể cả khi bị gãy ngón chân út. Cậu ấy chịu phạt bom
                    nước giữa mùa đông lạnh và đang bị ốm. Tôi nghĩ rằng, trong
                    quá trình biên tập, chỉ cần nhìn Kwang Soo là có thể cười
                    như điên.
                  </p>
                  <p>
                    Nếu quay cận mặt cậu ấy thì các diễn viên hài trên thế giới
                    cũng phải sốc. Tazzan giới giải trí xuất hiện như một sự phá
                    cách. Người anh em, người bạn đặc biệt của tôi, thời gian
                    qua cậu thực sự rất tuyệt vời. Tôi muốn gửi đến các bạn một
                    câu cuối cùng: Kwang Soo không phải đồ ngốc".
                  </p>
                  <p>
                    Hành trình 11 năm bền bỉ đồng hành của "chàng Hươu" tại{" "}
                    <strong>Running Man</strong> sẽ chính thức khép lại vào tập
                    phát sóng tối nay (13/6)
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/13/anh-9-162355969641127201534.jpeg"
                    alt="Lee Kwang Soo, Sao Han, Idol, Kpop, Lee Kwang Soo Roi Running Man, Running Man, "
                    note=""
                  />
                  <p>
                    Nguồn: <strong>Running Man</strong> Vietsub
                  </p>
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
