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
"timestamp": '05/08/2021 08:47 AM',
"title": 'Thủ thuật đơn giản giúp Google Chrome bớt ngốn RAM',
"description": 'Cách đơn giản giúp sử dụng Google Chrome bớt ngốn RAM.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/8/5/-1628164834349595680420.jpg',
"alt": 'RAM,GOOGLE CHROME,CHROME,',
"category": 'tech',
"date": '05/08/2021',
"time": '08:47 AM',
"link": '/thu-thuat-don-gian-giup-google-chrome-bot-ngon-ram',
"zcomponent": 'page_20210805084714',
"filepath": './20210805084714-thu-thuat-don-gian-giup-google-chrome-bot-ngon-ram.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "tech";
const categoryLink = "/tech";
const title = "Thủ thuật đơn giản giúp Google Chrome bớt ngốn RAM";
const author = "Real Madrid";
const source = "Pháp luật và bạn đọc";
const timestamp = "05/08/2021 08:47 AM";
const description = "Cách đơn giản giúp sử dụng Google Chrome bớt ngốn RAM.";
const link = "thu-thuat-don-gian-giup-google-chrome-bot-ngon-ram";
const tagparam = ["RAM", "GOOGLE CHROME", "CHROME"];
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

export default function page_20210805084714() {
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
                      <strong>
                        Google <strong>Chrome</strong>
                      </strong>{" "}
                      là một trong những trình duyệt phổ biến nhất thế giới. Thế
                      nhưng, một trong những căn bệnh khá là nghiêm trọng của
                      Chrome đó chính là ngốn <strong>RAM</strong>. Nếu bạn
                      thường hay mở nhiều tab trên Google Chrome, máy bạn sẽ bắt
                      đầu chậm đi và dần dần ì ạch.
                    </p>
                    <p>
                      <strong>Chrome</strong> sẽ tạo ra một "process" mới với
                      mỗi Tab bạn mở ra. Phiên bản mới nhất của Internet
                      Explorer cũng có cách hoạt động giống như vậy. Và lý do
                      tại sao lại hoạt động như vậy cũng khá là "bùi tai": mỗi
                      Tab sẽ sở hữu một "process", nhiều tab thì sẽ có nhiều
                      "process". Vậy thì nếu một Tab bị "crash" thì chỉ có Tab
                      đó bị "crash" thôi, còn nguyên trình duyệt vẫn hoạt động
                      bình thường. Điều đó có nghĩa là bạn sẽ không bị mất hết
                      các Tab còn lại nếu bạn đang mở 13 Tab chẳng hạn.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/5/photo-1-1628164849993965372215.png"
                      alt="2, RAM,GOOGLE CHROME,CHROME,"
                      note=""
                    />
                    <p>
                      Thế nhưng, nhược điểm của cách hoạt động này đó là mỗi
                      "process" sẽ phải cần một dung lượng <strong>RAM</strong>{" "}
                      nhất định. Nếu Tab đó có Flash Player hay nội dung chứa
                      nhiều thông tin thì "process" sẽ ngốn kha khá RAM. May mắn
                      thay, bạn có thể ép <strong>Chrome</strong> hoạt động theo
                      cách khác bằng việc thêm lệnh "process-per-site". Khi đó,
                      Chrome sẽ chỉ sử dụng một "process" cho mỗi trang web được
                      tải. Dĩ nhiên thì thay đổi này sẽ ảnh hưởng đến năng suất
                      hoạt động của Chrome.
                    </p>
                    <p>
                      Bạn có thể kiểm tra xem là có bao nhiều "process" mà{" "}
                      <strong>Chrome</strong> đang sử dụng bằng cách mở Windows
                      Task Manager (Ctrl+Alt+Del). Chuyển sang mục Processes.
                      Bao nhiêu chrome.exe là bao nhiêu cái Tab mà bạn đang mở
                      đấy.
                    </p>

                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/5/-1628164834349595680420.jpg"
                      alt="1, RAM,GOOGLE CHROME,CHROME,"
                      note=""
                    />
                    <p>Sau đây là cách làm</p>
                    <p>
                      Bước 1: Kiếm shortcut mà bạn dùng để khởi động{" "}
                      <strong>Chrome</strong>, nó thường hay nằm ở desktop.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Bước 2: Chuột phải vào shortcut, sau đó chọn "Properties".
                    </p>
                    <p>
                      Bước 3: Sau khi bảng Properties hiện ra, bạn chọn sang tab
                      Shortcut. Ở ô Target, bạn kéo xuống tới điểm cuối sau đó
                      thêm --process-per-site vào.
                    </p>
                    <p>
                      Bước 4: Tắt <strong>Chrome</strong> và mở lại.
                    </p>
                    <p>Bước 5: Tận hưởng thành quả đi nào!</p>
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
