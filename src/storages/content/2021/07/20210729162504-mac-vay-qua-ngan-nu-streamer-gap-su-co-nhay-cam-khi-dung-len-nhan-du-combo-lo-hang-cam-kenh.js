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
"timestamp": '29/07/2021 04:25 PM',
"title": 'Mặc váy quá ngắn, nữ streamer gặp sự cố nhạy cảm khi đứng lên, nhận đủ combo "lộ hàng + cấm kênh"',
"description": 'Cô nàng streamer này có lẽ cũng chẳng thể ngờ rằng chỉ một phút sơ sẩy mà mọi thứ đi xa như vậy.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/7/22/photo-1-1626939476082235832977.jpg',
"alt": 'HOT GIRL,GÁI XINH,CỘNG ĐỒNG MẠNG,STREAMER,HANNYANG,NỮ STREAMER,',
"category": 'images',
"date": '29/07/2021',
"time": '04:25 PM',
"link": '/mac-vay-qua-ngan-nu-streamer-gap-su-co-nhay-cam-khi-dung-len-nhan-du-combo-lo-hang-cam-kenh',
"zcomponent": 'page_20210729162504',
"filepath": './20210729162504-mac-vay-qua-ngan-nu-streamer-gap-su-co-nhay-cam-khi-dung-len-nhan-du-combo-lo-hang-cam-kenh.js'
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
  'Mặc váy quá ngắn, nữ streamer gặp sự cố nhạy cảm khi đứng lên, nhận đủ combo "lộ hàng + cấm kênh"';
const author = "Mặt Trứng";
const source = "Pháp luật và bạn đọc";
const timestamp = "29/07/2021 04:25 PM";
const description =
  "Cô nàng streamer này có lẽ cũng chẳng thể ngờ rằng chỉ một phút sơ sẩy mà mọi thứ đi xa như vậy.";
const link =
  "mac-vay-qua-ngan-nu-streamer-gap-su-co-nhay-cam-khi-dung-len-nhan-du-combo-lo-hang-cam-kenh";
const tagparam = [
  "HOT GIRL",
  "GÁI XINH",
  "CỘNG ĐỒNG MẠNG",
  "STREAMER",
  "HANNYANG",
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

export default function page_20210729162504() {
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
                    Thời đại hiện nay, các cô nàng <strong>streamer</strong> có
                    muôn vàn mánh khóe, chiêu trò để thu hút khán giả. Từ việc
                    lựa chọn các trang phục hở hang, khoe da thịt cho tới những
                    màn vũ điệu cực kỳ gợi cảm và nóng bỏng, tất cả đều được sử
                    dụng với mục đích tăng thêm lượng người theo dõi, đi kèm với
                    sự nổi tiếng và cải thiện trong thu nhập. Nhưng đôi khi,
                    chính điều này đã tạo nên một hiệu ứng xấu, tới mức mà nhiều
                    người thậm chí trở nên rất "dị ứng" với hai chữ tai nạn và
                    "lộ hàng" trong giới streamer. Và chẳng thiếu những trường
                    hợp dù là vô tình nhưng cũng đã phải nhận án phạt đầy nghiêm
                    khắc, điển hình như cô nàng <strong>Hannyang</strong> dưới
                    đây.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/22/photo-1-162693792845140871599.jpg"
                    alt="1, HOT GIRL,GÁI XINH,CỘNG ĐỒNG MẠNG,STREAMER,HANNYANG,NỮ STREAMER,"
                    note="Hannyang - cô nàng streamer được yêu mến nhờ vẻ ngoài trong sáng, thánh thiện"
                  />
                  <p>
                    Bình thường vốn cũng chẳng phải cái tên thuộc trường phái
                    kín đáo, thế nhưng dù gì thì <strong>Hannyang</strong> vẫn
                    luôn tuân thủ rất triệt để các quy tắc của nền tảng mà cô
                    đang phát sóng. Tuy cũng có ý đồ khi mặc các trang phục có
                    phần hơi gợi cảm, kheo trọn vẹn được vòng một siêu đẹp của
                    mình, thế nhưng cô nàng <strong>streamer</strong> xinh đẹp
                    cũng rất chú ý tới hình tượng trong sáng của mình và chưa
                    từng có một phốt hay scandal lùm xùm, phản cảm nào trước đó.
                    Nhưng đấy cũng chỉ là câu chuyện trong quá khứ mà thôi. Vì
                    mới đây nhất, Hannyang đã vừa tự hủy hoại chính hình ảnh bấy
                    lâu nay của mình.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/22/photo-1-1626937250386262162008.jpg"
                    alt="2, HOT GIRL,GÁI XINH,CỘNG ĐỒNG MẠNG,STREAMER,HANNYANG,NỮ STREAMER,"
                    note="Thường xuyên lên sóng với những trang phục không quá hở hang"
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/22/photo-1-1626938016059114956718.jpg"
                    alt="3, HOT GIRL,GÁI XINH,CỘNG ĐỒNG MẠNG,STREAMER,HANNYANG,NỮ STREAMER,"
                    note="Nhưng cô nàng cũng rất biết cách khoe vòng một nóng bỏng của mình"
                  />
                  <RelationNewsInPage category={category} />
                  <p>
                    Theo đó, trong lần lên sóng mới nhất,{" "}
                    <strong>Hannyang</strong> vẫn rất ý tứ khi mặc một bộ đồ
                    công sở khá thanh lịch. Chỉ có điều, dường như chiếc váy có
                    phần hơi ngắn quá thì phải. Để rồi trong một khoảnh khắc
                    đứng lên không cố ý, nữ <strong>streamer</strong> bất ngờ để
                    lộ nội y bên dưới của mình. Mặc dù diễn biến chỉ kéo dài
                    chưa tới một giây nhưng cũng không thể thoát khỏi tầm mắt
                    của không ít người xem dù rằng Hannyang cũng đã rất nhanh
                    tay kéo váy xuống. Và tất nhiên, một án phạt cấm kênh mang
                    tính cảnh cáo đã được dành cho Hannyang, bất chấp những nỗ
                    lực kêu oan của <strong>nữ streamer</strong> xinh đẹp.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/22/photo-1-16269387570851445591069.gif"
                    alt="4, HOT GIRL,GÁI XINH,CỘNG ĐỒNG MẠNG,STREAMER,HANNYANG,NỮ STREAMER,"
                    note="Khoảnh khắc tai nạn đầy đáng tiếc của cô nàng streamer xinh đẹp"
                  />
                  <p>
                    Mà cũng phải thừa nhận rằng cô nàng{" "}
                    <strong>streamer</strong> này có phần đen đủi thật, khi rõ
                    ràng, màn "lộ hàng" này xứng đáng được coi là tai nạn không
                    cố ý. Nhưng biết làm sao được, khi mà ở thời điểm hiện tại
                    ranh giới giữa vô tình và cố ý cũng rất mong manh và{" "}
                    <strong>Hannyang</strong> có lẽ cũng chỉ biết câm lặng, khóc
                    thầm mà thôi.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/22/photo-1-1626939476082235832977.jpg"
                    alt="5, HOT GIRL,GÁI XINH,CỘNG ĐỒNG MẠNG,STREAMER,HANNYANG,NỮ STREAMER,"
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
