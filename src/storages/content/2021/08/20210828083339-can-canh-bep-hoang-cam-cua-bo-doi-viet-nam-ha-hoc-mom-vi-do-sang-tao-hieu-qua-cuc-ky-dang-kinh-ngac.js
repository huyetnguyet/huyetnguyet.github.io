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
"timestamp": '28/08/2021 08:33 AM',
"title": 'Cận cảnh bếp Hoàng Cầm của bộ đội Việt Nam: Há hốc mồm vì độ sáng tạo, hiệu quả cực kỳ đáng kinh ngạc',
"description": 'Chắc hẳn chúng ta đã từng nhiều lần nghe nhắc tới bếp Hoàng Cầm cùng công dụng "kỳ diệu" của nó. Thế nhưng đã bao giờ bạn tận mắt chứng kiến sự hoạt động của công cụ đặc biệt này chưa?',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/22/1-16296246911821388079108.jpeg',
"alt": 'bếp Hoàng Câm,bộ đội,nấu bằng bếp Hoàng Cầm,bộ đội Việt Nam,Bộ đội căng mình giúp dân chống dịch,',
"category": 'news',
"date": '28/08/2021',
"time": '08:33 AM',
"link": '/can-canh-bep-hoang-cam-cua-bo-doi-viet-nam-ha-hoc-mom-vi-do-sang-tao-hieu-qua-cuc-ky-dang-kinh-ngac',
"zcomponent": 'page_20210828083339',
"filepath": './20210828083339-can-canh-bep-hoang-cam-cua-bo-doi-viet-nam-ha-hoc-mom-vi-do-sang-tao-hieu-qua-cuc-ky-dang-kinh-ngac.js'
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
  "Cận cảnh bếp Hoàng Cầm của bộ đội Việt Nam: Há hốc mồm vì độ sáng tạo, hiệu quả cực kỳ đáng kinh ngạc";
const author = "HẠ LINH,";
const source = "Doanh nghiệp và Tiếp thị";
const timestamp = "28/08/2021 08:33 AM";
const description =
  'Chắc hẳn chúng ta đã từng nhiều lần nghe nhắc tới bếp Hoàng Cầm cùng công dụng "kỳ diệu" của nó. Thế nhưng đã bao giờ bạn tận mắt chứng kiến sự hoạt động của công cụ đặc biệt này chưa?';
const link =
  "can-canh-bep-hoang-cam-cua-bo-doi-viet-nam-ha-hoc-mom-vi-do-sang-tao-hieu-qua-cuc-ky-dang-kinh-ngac";
const tagparam = [
  "bếp Hoàng Câm",
  "bộ đội",
  "nấu bằng bếp Hoàng Cầm",
  "bộ đội Việt Nam",
  "Bộ đội căng mình giúp dân chống dịch",
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

export default function page_20210828083339() {
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
                      Chắc hẳn chúng ta đã từng nhiều lần nghe nhắc tới bếp
                      Hoàng Cầm cùng công dụng "kỳ diệu" của nó. Thế nhưng đã
                      bao giờ bạn tận mắt chứng kiến sự hoạt động của công cụ
                      đặc biệt này chưa?
                    </p>
                    <p>
                      Một trong số những phát minh vô cùng ấn tượng của{" "}
                      <strong>bộ đội</strong> Việt Nam, đã từng phát huy rất
                      hiệu quả trong những năm tháng chiến tranh và đến ngày nay
                      vẫn được duy trì, đó là hình ảnh chiếc bếp Hoàng Cầm. Bếp
                      Hoàng Cầm - một cái tên mà có lẽ hầu như ai cũng đã nghe
                      qua, thế nhưng để xem tận mắt cách thức hoạt động thì
                      không phải ai cũng từng biết, đặc biệt là các bạn trẻ.
                    </p>
                    <p>
                      Mới đây, một đoạn clip ghi lại hình ảnh nấu nướng của{" "}
                      <strong>bộ đội</strong> Việt Nam bằng chiếc bếp đặc biệt
                      này đã thu hút rất nhiều lượt xem trên mạng xã hội. Và quả
                      thật, những hình ảnh trong clip khiến ai cũng phải há hốc
                      mồm vì độ sáng tạo.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/203336854389633024/2021/8/22/ava-16296247177181021996983.gif"
                      alt="6, bếp Hoàng Câm,bộ đội,nấu bằng bếp Hoàng Cầm,bộ đội Việt Nam,Bộ đội căng mình giúp dân chống dịch,"
                      note=""
                    />

                    <p>
                      Cận cảnh bếp Hoàng Cầm của <strong>bộ đội</strong> Việt
                      Nam: Há hốc mồm vì độ sáng tạo, hiệu quả cực kỳ đáng kinh
                      ngạc
                    </p>
                    <p>
                      Trước hết, phải nói rõ rằng dù ngày nay, bếp Hoàng Cầm
                      không quá phổ biến như trước, nhưng với lực lượng quân
                      nhân thì vẫn có sử dụng khi đi luyện tập, thực hiện nhiệm
                      vụ ở trong rừng.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/22/1-16296246911821388079108.jpeg"
                      alt="1, bếp Hoàng Câm,bộ đội,nấu bằng bếp Hoàng Cầm,bộ đội Việt Nam,Bộ đội căng mình giúp dân chống dịch,"
                      note=""
                    />

                    <p>
                      Theo một số tài liệu ghi chép, người phát minh ra loại bếp
                      này chính là Thượng sĩ Hoàng Cầm (1916 - 1996) quê ở Nam
                      Định, là Tiểu đội trưởng nuôi quân thuộc Sư đoàn 308, Đại
                      đoàn quân tiên phong. Cụ thể, trong thời chiến, việc nấu
                      ăn giữa rừng gặp rất nhiều khó khăn, ban ngày thì khói bốc
                      lên, ban đêm lại có lửa lập loè, dễ bị địch phát hiện.
                      Điều đó khiến người anh nuôi Hoàng Cầm vô cùng trăn trở.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Sau nhiều lần suy nghĩ, thử vẽ sơ đồ, Thượng sĩ Hoàng Cầm
                      đã tạo ra một loại bếp rất đặc biệt, là loại bếp lò khoét
                      vào sườn đồi hoặc đào sâu xuống đất với những đường rãnh
                      giống như râu mực từ bếp bò đi khá xa. Trên các rãnh được
                      lát bằng cành cây và phủ đất ẩm, tạo thành những ống thoát
                      khói. Khi nấu ăn, khói từ bếp sẽ toả vào các rãnh, bốc lên
                      thì lại gặp đất ẩm nên bị lọc và cản lại, vì thế chỉ bay
                      là là trên mặt đất chứ không bốc thẳng lên trời. Nhờ đó,
                      loại bếp này đã giải quyết được vấn đề nấu ăn giữa rừng mà
                      không sợ quân địch phát hiện.
                    </p>
                    <p>
                      Từ đó, loại bếp này đã mang tên chính người sáng tạo ra nó
                      - bếp Hoàng Cầm. Loại bếp này ra đời từ chiến dịch Hòa
                      Bình (1951-1952) và rất phổ biến trong chiến dịch Điện
                      Biên Phủ. Có thể nói, nó là một phát minh mang tính sáng
                      tạo và tính ứng dụng rất cao.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/22/2-16296246913981000424289.jpeg"
                      alt="2, bếp Hoàng Câm,bộ đội,nấu bằng bếp Hoàng Cầm,bộ đội Việt Nam,Bộ đội căng mình giúp dân chống dịch,"
                      note=""
                    />

                    <p>
                      Chiếc bếp đặc biệt đó của Thượng sĩ Hoàng Cầm không chỉ
                      mang lại hiệu quả trong thời chiến, mà đến ngày nay, nó
                      vẫn được sử sách ghi nhận và nhiều đời sau ngưỡng mộ.
                    </p>
                    <p>Nguồn: Wiki, TikTok @tuctungngocnu...</p>
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
