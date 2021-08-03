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
 <ContentItem
 title="3 CPU giá rẻ dưới 2 triệu nhưng vẫn chơi game ngon mà không cần card đồ họa"
content="Những CPU tích hợp nhân đồ họa mạnh đang trở thành cứu cánh cho game thủ." 
src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/3/photo-1-16226973043441708766718.jpg" 
alt="Card Man Hinh" 
category="tech" 
time="03/06/2021 05:41 PM" 
link="/3-cpu-gia-re-duoi-2-trieu-nhung-van-choi-game-ngon-ma-khong-can-card-do-hoa"/>

<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "tech";
const categoryLink = "/tech";
const title =
  "3 CPU giá rẻ dưới 2 triệu nhưng vẫn chơi game ngon mà không cần card đồ họa";
const author = "Real Madrid";
const source = "Pháp luật và bạn đọc";
const date = "03/06/2021";
const time = "05:41 PM";
const description =
  "Những CPU tích hợp nhân đồ họa mạnh đang trở thành cứu cánh cho game thủ.";
const link =
  "3-cpu-gia-re-duoi-2-trieu-nhung-van-choi-game-ngon-ma-khong-can-card-do-hoa";
const tagparam = [
  "card-do-hoa",
  "cong-dong-game",
  "phan-khuc-gia-re",
  "card-man-hinh",
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

export default function page_20210603054155() {
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
                      Việc Bitcoin và các Crypto khác lên giá đã kéo theo hệ lụy
                      lớn đối với giới game thủ. Trong tình cảnh "dân cày" thi
                      nhau thu gom card đồ họa để đào tiền ảo, giá linh kiện này
                      đã leo thang một cách chóng mặt. Điều này khiến cho cộng
                      đồng game thủ khó tiếp cận với VGA phân khúc mới.
                    </p>
                    <p>
                      Để giải quyết vấn đề này, một phương thức đang được nhiều
                      người áp dụng đó chính là xây dựng PC giá rẻ không cần
                      card đồ họa mà vẫn có thể chiến game tốt. Mấu chốt của sự
                      lựa chọn này chính là những chiếc CPU có thể đảm nhiệm
                      luôn công việc xử lý hình ảnh. Đương nhiên, Card Onboard
                      sẽ không thể chơi được các bom tấn AAA đồ họa như VGA xịn.
                      Mặc dù vậy, đây vẫn là hướng đi khả dĩ ở thời điểm hiện
                      tại, nhất là việc nó có thể giải quyết vấn đề giảm thiểu
                      chi phí chơi game cho học sinh, sinh viên.
                    </p>
                    <p>
                      Sau đây, mời các bạn đến với 3 CPU phân khúc giá rẻ tốt
                      nhất có thể chiến game mà không cần card màn hình rời.
                    </p>
                    <h4>Ryzen 3 2200G (giá 2 triệu đồng)</h4>
                    <p>
                      Kể từ khi ra mắt, Ryzen 3 2200G trở thành một trong những
                      VGA giá rẻ có khả năng xử lý đồ họa tốt nhất. Trong các
                      bài thử nghiệm, GPU Radeon™ RX Vega 8 của chiếc CPU này tỏ
                      ra vượt trội so với các đối thủ khác cùng phân khúc.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/3/photo-1-16226973043441708766718.jpg"
                      alt="Card Man Hinh"
                      note=""
                    />
                    <p>
                      Với mức đầu tư không lớn, nhân đồ hoạ tích hợp trong Ryzen
                      3 2200G hoàn toàn có thể chiến tốt đại đa số các tựa game
                      phổ biến trên thị trường, bao gồm cả các game online, game
                      Esport cùng nhiều game offline ở mức thiết lập thấp - khá.
                    </p>
                    <h4>AMD Athlon 3000G (giá 1,4 triệu đồng)</h4>
                    <p>
                      Thêm một thành viên khác của nhà AMD có mặt trong danh
                      sách này. Đó là Athlon 3000G. Với việc được tích hợp sẵn
                      VGA Onboard có tên Radeon Vega 3, Athlon 3000G hoàn toàn
                      có thể giúp bạn chơi game mà không cần tốn tiền sắm các
                      card màn hình đắt tiền. Đương nhiên chất lượng hình ảnh
                      chỉ ở mức trung bình, đáp ứng đủ nhu cầu trải nghiệm đơn
                      giản nhất.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/3/photo-1-162269751604969879242.jpg"
                      alt="Card Man Hinh"
                      note=""
                    />
                    <p>
                      Bên cạnh đó, Athlon 3000G cũng sở hữu kiến trúc mới và 2
                      nhân 4 luồng cùng xung nhịp lên đến 3.5Ghz. Tất cả những
                      điều này giúp người dùng có thể thoải mái thực hiện các
                      công việc văn phòng hoặc học tập. Với giải trí, AMD Athlon
                      3000G có thể giúp game thủ chiến tốt hầu hết các tựa game
                      phổ thông. Ở những tựa game có cấu hình nặng hơn, bạn vẫn
                      có thể chơi được trong mức FPS cho phép.
                    </p>
                    <h4>Intel Pentium Gold G6400 (giá 2 triệu)</h4>
                    <p>
                      Với 2 nhân 4 luồng, tốc độ xung nhịp 4.0Ghz, các công việc
                      văn phòng, thao tác với các ứng dụng Word, Excel,
                      Powerpoint hay chơi game phổ thông luôn được vận hành trơn
                      tru khi chạy trên chiếc Intel Pentium Gold G6400.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/3/-16226978360781517546071.jpg"
                      alt="Card Man Hinh"
                      note=""
                    />
                    <p>
                      Sở hữu GPU UHD Graphics 610, G6400 tuy không nổi trội như
                      2 CPU phía trên nhưng vẫn hoàn toàn đủ để chơi nhiều game
                      trên thị trường hiện nay. Thậm chí ngay cả với một tựa
                      game khá nặng như Total War: THREE KINGDOMS, các bạn vẫn
                      hoàn toàn có thể sử dụng G6400 để chơi mà không cần VGA
                      rời.
                    </p>
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
