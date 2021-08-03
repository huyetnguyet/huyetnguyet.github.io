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
"timestamp": '29/06/2021 10:00 PM',
"title": 'Thả rông vòng một trên sóng, nữ streamer "lộ hàng" đáng tiếc, vội trần tình "Thứ bạn thấy không giống như bạn nghĩ đâu"',
"description": 'Cô nàng streamer cho rằng thực tế khác xa so với những gì mà mọi người tưởng tượng.',
"src": 'https://raw.githubusercontent.com/huyetnguyet/huyetnguyet.github.io/main/src/',
"alt": 'HOT GIRL,CỘNG ĐỒNG MẠNG,STREAMER,GÁI XINH,NỮ STREAMER,HARU,',
"category": 'images',
"date": '29/06/2021',
"time": '10:00 PM',
"link": '/tha-rong-vong-mot-tren-song-nu-streamer-lo-hang-dang-tiec-voi-tran-tinh-thu-ban-thay-khong-giong-nhu-ban-nghi-dau',
"zcomponent": 'page_20210629220008',
"filepath": './20210629220008-tha-rong-vong-mot-tren-song-nu-streamer-lo-hang-dang-tiec-voi-tran-tinh-thu-ban-thay-khong-giong-nhu-ban-nghi-dau.js'
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
  'Thả rông vòng một trên sóng, nữ streamer "lộ hàng" đáng tiếc, vội trần tình "Thứ bạn thấy không giống như bạn nghĩ đâu"';
const author = "Mặt Trứng";
const source = "Pháp luật và bạn đọc";
const timestamp = "29/06/2021 10:00 PM";
const description =
  "Cô nàng streamer cho rằng thực tế khác xa so với những gì mà mọi người tưởng tượng.";
const link =
  "tha-rong-vong-mot-tren-song-nu-streamer-lo-hang-dang-tiec-voi-tran-tinh-thu-ban-thay-khong-giong-nhu-ban-nghi-dau";
const tagparam = [
  "HOT GIRL",
  "CỘNG ĐỒNG MẠNG",
  "STREAMER",
  "GÁI XINH",
  "NỮ STREAMER",
  "HARU",
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

export default function page_20210629220008() {
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
                      Nhiều người vẫn thường nghĩ rằng <strong>streamer</strong>{" "}
                      là nghề hứa hẹn dành cho giới trẻ hiện tại khi nó vừa việc
                      nhẹ, lương cao, thu nhập tốt lại còn mang tới danh tiếng.
                      Luận điểm này có thể bị đa số phản bác, nhưng trong một số
                      trường hợp nó lại đang trở nên đúng hơn bao giờ hết. Dễ
                      thôi, hãy cứ nhìn cách mà <strong>Haru</strong>, cô nàng
                      streamer rất xinh đẹp và gợi cảm dưới đây vừa làm trong
                      phiên livestream mới nhất thì có thể thấy, công việc
                      stream chưa bao giờ dễ dàng tạo ra sự chú ý và quan tâm
                      đến thế.
                    </p>
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629220008--10-697893.jpg")
                          .default
                      }
                      alt="1, HOT GIRL,CỘNG ĐỒNG MẠNG,STREAMER,GÁI XINH,NỮ STREAMER,HARU,"
                      note="Haru - cô nàng streamer đang gây ra vô số tranh cãi"
                    />
                    <p>
                      Vốn được biết tới như một trong những nữ{" "}
                      <strong>streamer</strong> khá gợi cảm, thời gian gần đây,
                      tên tuổi của <strong>Haru</strong> lên như diều gặp gió dù
                      quả thật, ngoài ngoại hình nổi trội ra thì cũng khá khó để
                      tìm ra được một điểm nhấn quá đặc biệt trong nội dung của
                      cô nàng. Vẫn là phong cách quen thuộc như bao nàng{" "}
                      <strong>hot girl</strong> khác với điệu nhảy cùng các bộ
                      trang phục nóng bỏng trong mỗi lần xuất hiện, thế nhưng
                      mới đây thôi, cô nàng lại vừa tạo ra một sự khác biệt cực
                      lớn ngay trên sóng.
                    </p>
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629220008--11-827027.jpg")
                          .default
                      }
                      alt="2, HOT GIRL,CỘNG ĐỒNG MẠNG,STREAMER,GÁI XINH,NỮ STREAMER,HARU,"
                      note="Hình ảnh đầy nóng bỏng mới đây trên sóng của Haru"
                    />
                    <p>
                      Theo đó, dựa trên hình ảnh bên trên, có lẽ chẳng cần quá
                      tinh mắt chúng ta cũng đủ để phát hiện ra điểm nhạy cảm
                      trong tấm hình. Cụ thể, theo như ý kiến của nhiều người,
                      trong quá trình nhảy có lẽ vì quá sung và phần cũng do bộ
                      trang phục lỏng lẻo, <strong>Haru</strong> đã để lộ một
                      phần điểm nhạy cảm trên đôi gò bồng đảo của mình ra ngoài
                      áo. Chi tiết này nhanh chóng bị soi ra và tạo thành một
                      chủ đề tranh cãi rất sôi nổi trên nhiều diễn đàn với vô số
                      những bình luận tiêu cực.
                    </p>
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629220008--12-277754.jpg")
                          .default
                      }
                      alt="3, HOT GIRL,CỘNG ĐỒNG MẠNG,STREAMER,GÁI XINH,NỮ STREAMER,HARU,"
                      note="Haru đang trở thành tâm điểm của sự chú ý"
                    />
                    <RelationNewsInPage category={category} />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629220008--13-641577.jpg")
                          .default
                      }
                      alt="4, HOT GIRL,CỘNG ĐỒNG MẠNG,STREAMER,GÁI XINH,NỮ STREAMER,HARU,"
                      note="Sau phiên livestream mới đây của mình"
                    />
                    <p>
                      Vụ việc ồn ào tới mức bản thân <strong>Haru</strong> sau
                      đó cũng đã phải lên tiếng trần tình sự việc. Cụ thể, cô
                      nàng cho rằng điều mà mọi người thấy có thể không giống
                      với những gì trong suy nghĩ của họ. Theo Haru, bộ trang
                      phục này là hoàn toàn bình thường, và thứ mà tất cả thấy
                      chỉ đơn giản là một phần của miếng dán bảo vệ ngực mà
                      thôi. Kể ra thì lời giải thích của Haru cũng hợp lý và có
                      vẻ thuyết phục, tuy nhiên việc được{" "}
                      <strong>cộng đồng mạng</strong> cũng như người xem chấp
                      nhận không thì lại là một câu chuyện khác.
                    </p>
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629220008--14-282993.gif")
                          .default
                      }
                      alt="5, HOT GIRL,CỘNG ĐỒNG MẠNG,STREAMER,GÁI XINH,NỮ STREAMER,HARU,"
                      note="Haru sau đó cũng đã đưa ra lời trần tình về vụ việc"
                    />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629220008--15-114618.jpg")
                          .default
                      }
                      alt="6, HOT GIRL,CỘNG ĐỒNG MẠNG,STREAMER,GÁI XINH,NỮ STREAMER,HARU,"
                      note="Đây cũng không phải là lần đầu tiên cô nàng có những bộ trang phục như vậy"
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
