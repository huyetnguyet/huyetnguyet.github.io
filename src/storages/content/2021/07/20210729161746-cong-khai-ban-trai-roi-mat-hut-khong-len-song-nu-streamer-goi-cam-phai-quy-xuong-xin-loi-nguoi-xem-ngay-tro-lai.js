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
"timestamp": '29/07/2021 04:17 PM',
"title": 'Công khai bạn trai rồi mất hút, không lên sóng, nữ streamer gợi cảm phải quỳ xuống xin lỗi người xem ngày trở lại',
"description": 'Cô nàng streamer đã phải quỳ xuống xin lỗi khán giả sau khi bặt vô âm tín suốt một thời gian dài.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/7/14/photo-1-1626252949529462255133.jpg',
"alt": 'HOT GIRL,CỘNG ĐỒNG MẠNG,GÁI XINH,PARK MIN-JUNG,STREAMER,NỮ STREAMER,',
"category": 'images',
"date": '29/07/2021',
"time": '04:17 PM',
"link": '/cong-khai-ban-trai-roi-mat-hut-khong-len-song-nu-streamer-goi-cam-phai-quy-xuong-xin-loi-nguoi-xem-ngay-tro-lai',
"zcomponent": 'page_20210729161746',
"filepath": './20210729161746-cong-khai-ban-trai-roi-mat-hut-khong-len-song-nu-streamer-goi-cam-phai-quy-xuong-xin-loi-nguoi-xem-ngay-tro-lai.js'
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
  "Công khai bạn trai rồi mất hút, không lên sóng, nữ streamer gợi cảm phải quỳ xuống xin lỗi người xem ngày trở lại";
const author = "Mặt Trứng";
const source = "Pháp luật và bạn đọc";
const timestamp = "29/07/2021 04:17 PM";
const description =
  "Cô nàng streamer đã phải quỳ xuống xin lỗi khán giả sau khi bặt vô âm tín suốt một thời gian dài.";
const link =
  "cong-khai-ban-trai-roi-mat-hut-khong-len-song-nu-streamer-goi-cam-phai-quy-xuong-xin-loi-nguoi-xem-ngay-tro-lai";
const tagparam = [
  "HOT GIRL",
  "CỘNG ĐỒNG MẠNG",
  "GÁI XINH",
  "PARK MIN-JUNG",
  "STREAMER",
  "NỮ STREAMER",
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

export default function page_20210729161746() {
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
            <AdsHorizontal />
            <div className="content">
              <div className="contentContainer">
                <p className="description">{description}</p>
                <RelationNews category={category} />
                <div className="desktop">
                  <AdsHorizontal />
                </div>
                <div className="contentBody">
                  <p>
                    Nhiều người cho rằng <strong>streamer</strong> vốn là một
                    trong những công việc "ngồi mát ăn bát vàng" ở thời điểm
                    hiện tại, việc nhẹ lương cao có danh vọng. Thế nhưng, những
                    áp lực từ chính sự thành công và nổi tiếng đôi khi cũng
                    không phải là điều mà ai cũng có khả năng chịu được, đặc
                    biệt là khi họ luôn phải thỏa mãn, chiều lòng được phần đông
                    khán giả và fan của mình - những người trực tiếp mang lại
                    nguồn thu cũng như mang tới sự thành danh cho các streamer.
                    Có lẽ <strong>Park Min-jung</strong>,{" "}
                    <strong>nữ streamer</strong> gợi cảm dưới đây là người thấu
                    hiểu hơn ai hết câu chuyện này.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/14/photo-1-1626250932754569398112.jpg"
                    alt="1, HOT GIRL,CỘNG ĐỒNG MẠNG,GÁI XINH,PARK MIN-JUNG,STREAMER,NỮ STREAMER,"
                    note="Park Min-jung, nữ streamer cực kỳ nổi tiếng và thành công"
                  />
                  <p>
                    Xét về sự thành công và nổi tiếng trong làng{" "}
                    <strong>streamer</strong>, <strong>Park Min-jung</strong> có
                    lẽ chẳng thua kém mấy người. Bên cạnh việc sở hữu lượng fan
                    đông đảo, cô nàng <strong>hot girl</strong> này thậm chí còn
                    được mời lên hẳn trang bìa của tạp chí MAXIM - một trong
                    những ấn phẩm dành cho phái mạnh có tiếng nhất tại Hàn Quốc.
                    Đó là chưa kể, Min-jung còn đang dần lấn sân sang sự nghiệp
                    người mẫu ảnh. Nói vậy để thấy độ phủ sóng của cô nàng là
                    lớn tới cỡ nào. Nhưng nên nhớ, điều quan trọng nhất, khởi
                    nghiệp và công việc chính của cô nàng vẫn là streamer.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/14/photo-1-1626251156563984263233.jpg"
                    alt="2, HOT GIRL,CỘNG ĐỒNG MẠNG,GÁI XINH,PARK MIN-JUNG,STREAMER,NỮ STREAMER,"
                    note="Hình ảnh của Park Min-jung trên trang bìa tạp chí MAXIM"
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/14/photo-1-1626251220770548692439.jpg"
                    alt="3, HOT GIRL,CỘNG ĐỒNG MẠNG,GÁI XINH,PARK MIN-JUNG,STREAMER,NỮ STREAMER,"
                    note="Cô nàng được đánh giá là một cái tên tài sắc vẹn toàn của làng streamer"
                  />
                  <p>
                    Ấy thế nhưng khi đang ở đỉnh cao của danh vọng, bất thình
                    lình <strong>Park Min-jung</strong> công khai bạn trai vào
                    đầu năm nay. Điều này suy cho cùng thì cũng thôi đi, nhưng
                    kể từ đó, gần như cô nàng <strong>streamer</strong> không hề
                    xuất hiện, đồng thời tuyên bố tạm ngừng mọi hoạt động. Tuyên
                    bố của Park Min-jung khiến các fan cũng chỉ biết chờ đợi
                    ngày thần tượng comeback. Và sau cùng, vào đầu tháng 6,{" "}
                    <strong>nữ streamer</strong> này cũng comeback, kèm theo một
                    tuyên bố "Tôi đã sẵn sàng cho ngày trở lại".
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/14/photo-1-1626251822391156186387.jpg"
                    alt="4, HOT GIRL,CỘNG ĐỒNG MẠNG,GÁI XINH,PARK MIN-JUNG,STREAMER,NỮ STREAMER,"
                    note="Kể từ sau khi có bạn trai, Park Min-jung gần như biến mất hoàn toàn"
                  />
                  <RelationNewsInPage category={category} />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/14/photo-1-16262518608592002456044.jpg"
                    alt="5, HOT GIRL,CỘNG ĐỒNG MẠNG,GÁI XINH,PARK MIN-JUNG,STREAMER,NỮ STREAMER,"
                    note="Cô nàng được mệnh danh là nữ streamer có vòng một đẹp nhất trong giới"
                  />
                  <p>
                    Tuy nhiên, chỉ sau hai ngày phát sóng, Min-jung lại bất ngờ
                    mất ảnh không tung tích. Để rồi sau 34 ngày, nàng{" "}
                    <strong>streamer</strong> mới trở lại livestream và ngay lập
                    tức nhận phải một làn sóng chỉ trích của đông đảo người hâm
                    mộ. Lượng view vì thế tăng mạnh nhưng chắc nàng streamer
                    cũng chẳng thể vui nổi khi đọc kênh chat toàn những bình
                    luận tiêu cực, đôi khi là chửi rủa và lên án cô nàng vì việc
                    khinh thường người xem. Tới mức mà sau đó, cực chẳng đã,
                    Park Min Jung còn phải quỳ xuống, xin lỗi chính khán giả của
                    mình và cầu xin sự tha thứ.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/14/page-1626252482142497574674.jpg"
                    alt="6, HOT GIRL,CỘNG ĐỒNG MẠNG,GÁI XINH,PARK MIN-JUNG,STREAMER,NỮ STREAMER,"
                    note="Park Min Jung cúi đầu xin lỗi độc giả trong ngày trở lại"
                  />
                  <p>
                    Cô nàng cũng tự nhận là mình đã thiếu trách nhiệm với người
                    xem. Tuy nhiên, chỉ ít phút sau đó, Min-jung lại trở về
                    trạng thái bình thường, thậm chí còn gọi cả người yêu ra để
                    tương tác cùng người xem. Hành động có phần hơi thiếu khôn
                    ngoan này của nữ <strong>streamer</strong> gợi cảm lại thêm
                    một lần nữa khiến fan dậy sóng.{" "}
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/14/photo-1-1626252935158944313731.jpg"
                    alt="7, HOT GIRL,CỘNG ĐỒNG MẠNG,GÁI XINH,PARK MIN-JUNG,STREAMER,NỮ STREAMER,"
                    note="Sau đó cô nàng hào hứng thể hiện vũ đạo trong tư thế quỳ"
                  />
                  <p>
                    Thậm chí còn có màn phát "cẩu lương" miễn phí cho người xem
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/14/photo-1-1626252949529462255133.jpg"
                    alt="8, HOT GIRL,CỘNG ĐỒNG MẠNG,GÁI XINH,PARK MIN-JUNG,STREAMER,NỮ STREAMER,"
                    note=""
                  />
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
