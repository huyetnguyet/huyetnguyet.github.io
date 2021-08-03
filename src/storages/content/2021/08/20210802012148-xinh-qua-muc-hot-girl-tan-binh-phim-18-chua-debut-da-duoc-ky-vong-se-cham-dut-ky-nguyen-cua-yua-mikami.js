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
"timestamp": '02/08/2021 01:21 AM',
"title": 'Xinh quá mức, hot girl tân binh phim 18+ chưa debut đã được kỳ vọng sẽ chấm dứt "kỷ nguyên" của Yua Mikami',
"description": 'Cô nàng hot girl này đang là một trong những chủ đề nóng nhất ở ngành công nghiệp phim 18+ thời điểm hiện tại.',
"src": '',
"alt": 'HOT GIRL,GÁI XINH,CỘNG ĐỒNG MẠNG,KAEDE,PHIM AV,PHIM 18+,AV,',
"category": 'images',
"date": '02/08/2021',
"time": '01:21 AM',
"link": '/xinh-qua-muc-hot-girl-tan-binh-phim-18-chua-debut-da-duoc-ky-vong-se-cham-dut-ky-nguyen-cua-yua-mikami',
"zcomponent": 'page_20210802012148',
"filepath": './20210802012148-xinh-qua-muc-hot-girl-tan-binh-phim-18-chua-debut-da-duoc-ky-vong-se-cham-dut-ky-nguyen-cua-yua-mikami.js'
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
  'Xinh quá mức, hot girl tân binh phim 18+ chưa debut đã được kỳ vọng sẽ chấm dứt "kỷ nguyên" của Yua Mikami';
const author = "Mặt Trứng";
const source = "Pháp luật và bạn đọc";
const timestamp = "02/08/2021 01:21 AM";
const description =
  "Cô nàng hot girl này đang là một trong những chủ đề nóng nhất ở ngành công nghiệp phim 18+ thời điểm hiện tại.";
const link =
  "xinh-qua-muc-hot-girl-tan-binh-phim-18-chua-debut-da-duoc-ky-vong-se-cham-dut-ky-nguyen-cua-yua-mikami";
const tagparam = [
  "HOT GIRL",
  "GÁI XINH",
  "CỘNG ĐỒNG MẠNG",
  "KAEDE",
  "PHIM AV",
  "PHIM 18+",
  "AV",
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

export default function page_20210802012148() {
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
                      Mỗi năm, ngành công nghiệp <strong>AV</strong> Nhật Bản
                      luôn chào đón sự xuất hiện của hàng ngàn những tân binh
                      mới. Thậm chí, trong bối cảnh khó khăn như hiện tại, làn
                      sóng các cô gái đổ xô đi đóng <strong>phim 18+</strong>{" "}
                      vẫn không có dấu hiệu suy giảm. Và trong hằng hà vô số
                      những tên tuổi mới ấy, bất ngờ lại có một cô nàng{" "}
                      <strong>hot girl</strong> đang nhận về vô số sự chú ý của{" "}
                      <strong>cộng đồng mạng</strong>. Lý do cũng đơn giản thôi,
                      xinh và gợi cảm quá mức đến nỗi nhiều người còn cho rằng,
                      cô nàng hoàn toàn có thể kết thúc kỷ nguyên "Yua Mikami"
                      trong ngành công nghiệp <strong>phim AV</strong> Nhật Bản.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/28/screenshot24-1627475509275242876463.png"
                      alt="1, HOT GIRL,GÁI XINH,CỘNG ĐỒNG MẠNG,KAEDE,PHIM AV,PHIM 18+,AV,"
                      note="Chân dung cô nàng tân binh đang gây nên không ít những kỳ vọng của ngành công nghiệp AV Nhật Bản"
                    />
                    <p>
                      Cụ thể, danh tính của cô nàng trong ảnh chính là{" "}
                      <strong>Kaede</strong> Hua - một mỹ nhân thậm chí còn chưa
                      ra mắt nhưng ngay từ lúc này đã hứa hẹn sẽ tạo ra một cuộc
                      địa chấn của ngành công nghiệp <strong>AV</strong> Nhật
                      Bản. Được biết, cô nàng là tân binh của S1 Studio và cũng
                      là cái tên được đặt trọng tâm phát triển của hãng phim lớn
                      này. Kaede sẽ ra mắt vào nửa cuối năm nay và trước mắt, S1
                      mới chỉ nhá hàng một vài hình ảnh ban đầu cũng như đoạn
                      teaser của cô nàng.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/28/photo-1-162747574508697426289.jpg"
                      alt="2, HOT GIRL,GÁI XINH,CỘNG ĐỒNG MẠNG,KAEDE,PHIM AV,PHIM 18+,AV,"
                      note="Đoạn teaser ngắn ngủn mà S1 nhá hàng"
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/28/screenshot26-1627475768995824801854-16274757850181367325443-16274758003152076189091.png"
                      alt="3, HOT GIRL,GÁI XINH,CỘNG ĐỒNG MẠNG,KAEDE,PHIM AV,PHIM 18+,AV,"
                      note="Kèm theo đó là một vài tấm ảnh cơ bản đầu tiên"
                    />
                    <RelationNewsInPage category={category} />
                    <p>
                      Theo một số nguồn tin từ S1, <strong>Kaede</strong> Hua
                      sinh ngày 30/3/2001, sở hữu một thân hình đầy đặn, gợi cảm
                      trái ngược hoàn toàn với vẻ ngây thơ, xinh xắn của gương
                      mặt. Được biết, cô nàng sở hữu số đo vòng một rất quyến rũ
                      và trên hết là chiều cao 1m70 - được ca tụng là độc nhất
                      vô nhị của ngành công nghiệp <strong>AV</strong> mọi thời
                      đại. Chỉ với những thông tin cơ bản như vậy, thế nhưng
                      Kaede đang là cái tên hot nhất ở thời điểm hiện tại dù còn
                      chưa có tác phẩm debut.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/28/screenshot27-16274759038541019410087-16274759136861077812891.png"
                      alt="4, HOT GIRL,GÁI XINH,CỘNG ĐỒNG MẠNG,KAEDE,PHIM AV,PHIM 18+,AV,"
                      note="Kaede sở hữu chiều cao 1m70 cùng đôi chân dài độc nhất vô nhị của ngành công nghiệp AV Nhật Bản"
                    />
                    <p>
                      Tất nhiên, thông tin về cô nàng <strong>Kaede</strong>{" "}
                      khiến cho nhiều fan hâm mộ cực kỳ hân hoan khi lâu lắm r
                      họ mới lại chứng kiến một tân binh tiềm năng tới vậy. Thậm
                      chí, nhiều người còn cho rằng với lợi thế ngoại hình,
                      Kaede hoàn toàn có thể trở thành đối thủ, thậm chí vượt
                      mặt Yua Mikami - mỹ nữ top đầu của ngành công nghiệp{" "}
                      <strong>AV</strong> Nhật Bản trong tương lai gần nữa. Tuy
                      nhiên, cũng có không ít người cảm thấy tò mò về hoàn cảnh
                      của cô nàng này. Cụ thể, nhiều người cho rằng với những gì
                      đang có, Kaede hoàn toàn có thể làm{" "}
                      <strong>hot girl</strong>, streamer hay người mẫu đều
                      được, tại sao lại chọn đi đóng <strong>phim 18+</strong>?
                    </p>
                    <p>
                      Câu hỏi này thì chắc phải chờ tới khi S1 công bố chính
                      thức và có thêm nhiều thông tin về cô nàng này hơn. Nhưng
                      ngay từ thời điểm hiện tại, đã có rất nhiều người ngóng
                      chờ màn ra mắt của <strong>Kaede</strong> rồi.
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
