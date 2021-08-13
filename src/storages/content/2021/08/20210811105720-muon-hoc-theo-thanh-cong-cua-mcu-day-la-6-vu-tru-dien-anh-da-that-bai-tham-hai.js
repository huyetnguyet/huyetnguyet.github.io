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
"timestamp": '11/08/2021 10:57 AM',
"title": 'Muốn học theo thành công của MCU nhưng 6 vũ trụ điện ảnh này đã thất bại thảm hại',
"description": 'Không phải hãng phim nào cũng thành công trong việc xây dựng vũ trụ điện ảnh.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/8/10/photo-1-16285886879362063622559.jpg',
"alt": 'VŨ TRỤ ĐIỆN ẢNH,PHIM ĐIỆN ẢNH,X-MEN,DCEU,THE AMAZING SPIDER-MAN,MEN IN BLACK,',
"category": 'news',
"date": '11/08/2021',
"time": '10:57 AM',
"link": '/muon-hoc-theo-thanh-cong-cua-mcu-day-la-6-vu-tru-dien-anh-da-that-bai-tham-hai',
"zcomponent": 'page_20210811105720',
"filepath": './20210811105720-muon-hoc-theo-thanh-cong-cua-mcu-day-la-6-vu-tru-dien-anh-da-that-bai-tham-hai.js'
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
  "Muốn học theo thành công của MCU nhưng 6 vũ trụ điện ảnh này đã thất bại thảm hại";
const author = "Mẹ Sề";
const source = "Pháp luật và bạn đọc";
const timestamp = "11/08/2021 10:57 AM";
const description =
  "Không phải hãng phim nào cũng thành công trong việc xây dựng vũ trụ điện ảnh.";
const link =
  "muon-hoc-theo-thanh-cong-cua-mcu-day-la-6-vu-tru-dien-anh-da-that-bai-tham-hai";
const tagparam = [
  "VŨ TRỤ ĐIỆN ẢNH",
  "PHIM ĐIỆN ẢNH",
  "X-MEN",
  "DCEU",
  "THE AMAZING SPIDER-MAN",
  "MEN IN BLACK",
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

export default function page_20210811105720() {
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
                      <strong>Vũ trụ Điện ảnh</strong> Marvel (MCU) là thương
                      hiệu truyền thông và vũ trụ chia sẻ của Mỹ tập trung vào
                      một loạt các <strong>phim điện ảnh</strong> siêu anh hùng
                      do Marvel Studios sản xuất. Nội dung các phim điện ảnh này
                      đều dựa trên các nhân vật xuất hiện trong các bộ truyện
                      tranh Mỹ do Marvel Comics xuất bản. Có rất nhiều nhà sản
                      xuất khác cũng hướng tới việc tạo thành vu trụ điện ảnh,
                      nhưng không phải ai cũng thành công.{" "}
                    </p>
                    <p>
                      Dưới đây là 6 <strong>vũ trụ điện ảnh</strong> đã thất bại
                      khi chưa vươn tới thành công:
                    </p>
                    <h5>1. X-Men</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/10/photo-1-16285886879362063622559.jpg"
                      alt="1, VŨ TRỤ ĐIỆN ẢNH,PHIM ĐIỆN ẢNH,X-MEN,DCEU,THE AMAZING SPIDER-MAN,MEN IN BLACK,"
                      note=""
                    />
                    <p>
                      <strong>X-Men</strong> là loạt phim siêu anh hùng của Mỹ
                      dựa trên nhóm siêu anh hùng cùng tên trong các ấn phẩm
                      truyện tranh do Stan Lee và Jack Kirby sáng tác và được
                      Marvel Comics phát hành. Hãng 20th Century Fox giành được
                      quyền chuyển thể nhân vật lên màn ảnh vào năm 1994. Sau
                      đó, X-Men trở thành một trong những thương hiệu phim
                      Marvel hỗn loạn nhất mọi thời đại, cho đến khi nó được
                      Disney mua lại.
                    </p>
                    <h5>
                      2. <strong>DCEU</strong> (Snyderverse){" "}
                    </h5>
                    <p>
                      Trên phương diện truyện tranh, DC và Marvel là hai đối thủ
                      nặng ký suốt một khoảng thời gian dài. Do đó mà khi bước
                      lên màn ảnh rộng, họ cũng tiếp tục rơi vào thế đối đầu và
                      tranh giành ảnh hưởng với người hâm mộ.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/10/photo-1-16285892031121231741978.jpg"
                      alt="2, VŨ TRỤ ĐIỆN ẢNH,PHIM ĐIỆN ẢNH,X-MEN,DCEU,THE AMAZING SPIDER-MAN,MEN IN BLACK,"
                      note=""
                    />
                    <p>
                      Các bộ phim chuyển thể của DC nằm trong dự án Vũ trụ mở
                      rộng DC do Zack Snyder làm đạo diễn. Tuy nhiên, DC dường
                      như đã hấp tấp dẫn đến nhiều sai lầm liên tiếp,
                      Snyderverse được cho là không mấy khả quan. Tuy nhiên
                      người hâm mộ vẫn đang mong đợi Snyderverse được khôi phục,
                      nhưng cho đến nay Warner Bros. có vẻ thích một cách tiếp
                      cận khác cho những bộ phim thuộc <strong>DCEU</strong>{" "}
                      hơn.
                    </p>
                    <p>
                      Điều này đặc biệt rõ ràng từ Aquaman và Wonder Woman,
                      những siêu anh hùng đã có những bộ phim độc lập thành
                      công, tách biệt với Liên minh Công lý đã được xây dựng
                      trước đó. Vẫn còn một vấn đề nữa là liệu Henry Cavill có
                      tiếp tục là Siêu nhân hay không.{" "}
                    </p>
                    <h5>3. The Amazing Spider-Man</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/10/photo-1-16285894926561076889556.jpg"
                      alt="3, VŨ TRỤ ĐIỆN ẢNH,PHIM ĐIỆN ẢNH,X-MEN,DCEU,THE AMAZING SPIDER-MAN,MEN IN BLACK,"
                      note=""
                    />

                    <p>
                      Kể từ khi hãng Sony Pictures công bố dự án{" "}
                      <strong>The Amazing Spider-Man</strong> nhằm khởi động lại
                      series về siêu anh hùng trèo tường, khán giả đã tỏ ra hoài
                      nghi về việc liệu bộ phim có đủ sánh với hào quang mà Sam
                      Raimi từng đem lại cho Spider-Man qua 3 phần phim trước.
                      Ekip sản xuất phim đã thành công trong việc làm nên những
                      điều khác biệt ở phiên bản Spider-Man này. Song, tất cả đổ
                      bể sau thất bại phòng vé của The Amazing Spider-Man 2
                      (2014). Bị cả khán giả lẫn báo chí quay lưng, Sony đành
                      phải cho Spider-Man xuất hiện ở MCU kể từ 2016.
                    </p>

                    <RelationNewsInPage category={category} />
                    <h5>4. Men in Black</h5>
                    <p>
                      Bấy lâu nay, câu chuyện những người đàn ông mặc đồ đen đi
                      tìm và tiêu diệt tội phạm người ngoài hành tinh vốn từng
                      hấp dẫn khán giả. Đặc vụ Áo Đen luôn là những người hùng
                      thầm lặng “ngầu” nhất, bảo vệ Trái Đất khỏi những hiểm họa
                      xấu xa ngoài hành tinh.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/10/photo-1-16285898642561742747964.jpg"
                      alt="4, VŨ TRỤ ĐIỆN ẢNH,PHIM ĐIỆN ẢNH,X-MEN,DCEU,THE AMAZING SPIDER-MAN,MEN IN BLACK,"
                      note=""
                    />
                    <p>
                      Tuy nhiên, đến phần 4 của series này, dù có 2 cái tên đình
                      đám là Chris Hemsworth và Tessa Thompson thì phần phim tái
                      khởi động thương hiệu <strong>Men in Black</strong> vẫn
                      không tạo được hiệu ứng cho lắm.
                    </p>
                    <h5>5. Dark Universe</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/10/photo-1-1628590037033543623964.jpg"
                      alt="5, VŨ TRỤ ĐIỆN ẢNH,PHIM ĐIỆN ẢNH,X-MEN,DCEU,THE AMAZING SPIDER-MAN,MEN IN BLACK,"
                      note=""
                    />
                    <p>
                      Universal đã công bố một dự án đầy tham vọng là một loạt
                      phim về những nhân vật nổi tiếng trong lịch sử kinh dị,
                      ban đầu nó được đề nghị cho Guillermo del Toro nhưng cuối
                      cùng lại rơi vào tay của Alex Kurtzman và Roberto Orci.
                      Thật không may, hai người sáng tạo của dự án này cuối cùng
                      đã tách ra và lần lượt nhà sản xuất và biên kịch rời khỏi
                      dự án.
                    </p>
                    <h5>6. King Arthur</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/10/photo-1-1628590099301828758792.jpg"
                      alt="6, VŨ TRỤ ĐIỆN ẢNH,PHIM ĐIỆN ẢNH,X-MEN,DCEU,THE AMAZING SPIDER-MAN,MEN IN BLACK,"
                      note=""
                    />
                    <p>
                      Trên thực tế, Warner Bros. cũng có ý tưởng về việc đưa các
                      nhân vật anh hùng hợp nhất thành một thế giới chung bắt
                      đầu từ bộ phim King Arthur do Guy Ritchie đạo diễn. Thật
                      không may, đây là bộ phim duy nhất được trình chiếu cho
                      đến thời điểm hiện tại. Ban đầu, Warner Bros. dự tính xây
                      dựng <strong>vũ trụ điện ảnh</strong> kéo dài 6 tác phẩm,
                      với cả phim riêng về phù thủy Merlin hay Lancelot. Nhưng
                      tất cả không còn được nhắc tới sau mùa hè 2017.
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
