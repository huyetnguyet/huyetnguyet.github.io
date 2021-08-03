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
"timestamp": '29/07/2021 04:16 PM',
"title": 'Nữ streamer gợi cảm hé lộ câu chuyện bị bạn trai hành hạ, "quấy rối" mỗi ngày, sợ tới mức không dám mách bố',
"description": 'Câu chuyện của cô nàng streamer khiến cho khá nhiều người phải bất ngờ.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/7/7/photo-1-16256486514361323409952.jpg',
"alt": 'GÁI XINH,STREAMER,CỘNG ĐỒNG MẠNG,NỮ STREAMER,HOT GIRL,',
"category": 'images',
"date": '29/07/2021',
"time": '04:16 PM',
"link": '/nu-streamer-goi-cam-he-lo-cau-chuyen-bi-ban-trai-hanh-ha-quay-roi-moi-ngay-so-toi-muc-khong-dam-mach-bo',
"zcomponent": 'page_20210729161633',
"filepath": './20210729161633-nu-streamer-goi-cam-he-lo-cau-chuyen-bi-ban-trai-hanh-ha-quay-roi-moi-ngay-so-toi-muc-khong-dam-mach-bo.js'
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
  'Nữ streamer gợi cảm hé lộ câu chuyện bị bạn trai hành hạ, "quấy rối" mỗi ngày, sợ tới mức không dám mách bố';
const author = "Mặt Trứng";
const source = "Pháp luật và bạn đọc";
const timestamp = "29/07/2021 04:16 PM";
const description =
  "Câu chuyện của cô nàng streamer khiến cho khá nhiều người phải bất ngờ.";
const link =
  "nu-streamer-goi-cam-he-lo-cau-chuyen-bi-ban-trai-hanh-ha-quay-roi-moi-ngay-so-toi-muc-khong-dam-mach-bo";
const tagparam = [
  "GÁI XINH",
  "STREAMER",
  "CỘNG ĐỒNG MẠNG",
  "NỮ STREAMER",
  "HOT GIRL",
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

export default function page_20210729161633() {
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
                      Nhân vật chính trong câu chuyện lần này là Seo-yoon, một
                      trong những nữ <strong>streamer</strong> nổi tiếng về sự
                      đa năng cũng như gợi cảm bậc nhất tại Hàn Quốc. Trước khi
                      trở nên nổi tiếng, Seo Yoon từng là một cô gái cực kỳ lịnh
                      động khi sẵn sàng thực hiện đủ loại nội dung để phục vụ
                      khán giả. Từ các video chơi game, Mukbang cho tới cả
                      review linh kiện máy tính hay người mẫu ảnh rồi những màn
                      vũ đạo nóng bỏng, gần như chẳng có nội dung nào làm khó
                      được Seo-yoon. Xinh đẹp, tài năng và nổi tiếng, thế nhưng
                      chẳng ai ngờ rằng, cô nàng Seo-yoon lại có góc tối đầy bí
                      mật trong chuyện tình cảm của mình.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/7/photo-1-1625647602663415767110.jpg"
                      alt="1, GÁI XINH,STREAMER,CỘNG ĐỒNG MẠNG,NỮ STREAMER,HOT GIRL,"
                      note="Seo-yoon - nữ streamer gợi cảm trong câu chuyện"
                    />
                    <p>
                      Để nói về độ thành công của Seo-yoon, hãy cứ nhìn vào con
                      số thu nhập phải lên tới hàng trăm tỷ của cô nàng{" "}
                      <strong>streamer</strong> này trong suốt 4 năm làm nghề.
                      Tuy nhiên, chuyện gì cũng có hai mặt và Seo-yoon cũng vừa
                      khiến rất nhiều người phải sốc nặng khi tiết lộ việc mình
                      bị bạn trai cũ hành hạ, quấy rối và bạo lực trong suốt
                      quãng thời gian mặn nồng. Như cô nàng tiết lộ, bất cứ khi
                      nào không vừa ý, anh ta sẽ dùng nắm đấm để nói chuyện và
                      thậm chí, <strong>nữ streamer</strong> còn không nhớ nổi
                      mình đã bị đánh đập bao nhiêu lần cũng như phải chịu đựng
                      sở thích bạo lực biến thái của gã bạn trai cũ. "Tôi đã
                      từng rất sợ hãi" - cô nàng tâm sự.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/7/photo-1-1625647885353934028917.jpg"
                      alt="2, GÁI XINH,STREAMER,CỘNG ĐỒNG MẠNG,NỮ STREAMER,HOT GIRL,"
                      note="Ít ai ngờ được rằng Seo-yoon lại từng bị bạo hành trong quá khứ"
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/7/photo-1-1625649151276670641893.jpg"
                      alt="3, GÁI XINH,STREAMER,CỘNG ĐỒNG MẠNG,NỮ STREAMER,HOT GIRL,"
                      note="Bởi chính người yêu cũ của mình"
                    />
                    <RelationNewsInPage category={category} />
                    <p>
                      Mặc dù biết rằng phải cầu cứu cảnh sát hoặc sự hỗ trợ từ
                      bên ngoài, nhưng ở thời điểm ấy, Seo-yoon quá sợ hãi tới
                      mức không dám kể câu chuyện này với cả người thân, hay cụ
                      thể hơn là bố mình. Nên nhớ, bố của cô nàng{" "}
                      <strong>streamer</strong> là một điều tra viên ở sở cảnh
                      sát và chắc chắn chỉ cần một câu "mách" đơn giản, vấn đề
                      sẽ được giải quyết nhưng Seo-yoon lại không có dũng khí để
                      làm điều này.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/7/photo-1-16256491344501438940384.jpg"
                      alt="4, GÁI XINH,STREAMER,CỘNG ĐỒNG MẠNG,NỮ STREAMER,HOT GIRL,"
                      note="Có bố làm cảnh sát nhưng chẳng ai ngờ Seo-yoon lại có thể bị bạo hành như vậy"
                    />
                    <p>
                      "Trong tình huống đó, tôi không thể suy nghĩ lý trí. Nỗi
                      sợ hãi lấy đi tất cả, tôi thậm chí còn chẳng dám giao tiếp
                      với ai" - nàng <strong>hot girl</strong> thừa nhận
                    </p>
                    <p>
                      Cũng may là sau cùng thì mọi chuyện cũng kết thúc êm đẹp.
                      Seo-yoon bỏ bạn trai thành công, tiếp xúc với thế giới bên
                      ngoài bình thường trở lại sau khi mất một quãng thời gian
                      không nhỏ để hồi phcuj. Cô nàng cũng cho rằng việc mình
                      chia sẻ những kỷ niệm đau đớn được giấu kỹ này chính là để
                      đưa kinh nghiệm cho những người đang gặp phải hoàn cảnh
                      tương tự có thể quên đi đau khổ và hướng tới cuộc sống
                      hạnh phúc hơn.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/7/photo-1-16256486514361323409952.jpg"
                      alt="5, GÁI XINH,STREAMER,CỘNG ĐỒNG MẠNG,NỮ STREAMER,HOT GIRL,"
                      note=""
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
