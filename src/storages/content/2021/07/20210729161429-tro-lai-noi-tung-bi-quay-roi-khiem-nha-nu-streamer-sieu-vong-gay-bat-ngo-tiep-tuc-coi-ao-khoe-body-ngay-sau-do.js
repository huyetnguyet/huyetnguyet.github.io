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
"timestamp": '29/07/2021 04:14 PM',
"title": 'Trở lại nơi từng bị quấy rối khiếm nhã, nữ streamer siêu vòng một gây bất ngờ, tiếp tục cởi áo khoe body ngay sau đó',
"description": 'Hành động của cô nàng streamer ngay lập tức đã thu hút được rất nhiều sự chú ý từ phía người xem.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/7/5/photo-1-16254791447121610697265.gif',
"alt": 'GÁI XINH,STREAMER,HOT GIRL,CỘNG ĐỒNG MẠNG,RAN,NỮ STREAMER,',
"category": 'images',
"date": '29/07/2021',
"time": '04:14 PM',
"link": '/tro-lai-noi-tung-bi-quay-roi-khiem-nha-nu-streamer-sieu-vong-gay-bat-ngo-tiep-tuc-coi-ao-khoe-body-ngay-sau-do',
"zcomponent": 'page_20210729161429',
"filepath": './20210729161429-tro-lai-noi-tung-bi-quay-roi-khiem-nha-nu-streamer-sieu-vong-gay-bat-ngo-tiep-tuc-coi-ao-khoe-body-ngay-sau-do.js'
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
  "Trở lại nơi từng bị quấy rối khiếm nhã, nữ streamer siêu vòng một gây bất ngờ, tiếp tục cởi áo khoe body ngay sau đó";
const author = "Mặt Trứng";
const source = "Pháp luật và bạn đọc";
const timestamp = "29/07/2021 04:14 PM";
const description =
  "Hành động của cô nàng streamer ngay lập tức đã thu hút được rất nhiều sự chú ý từ phía người xem.";
const link =
  "tro-lai-noi-tung-bi-quay-roi-khiem-nha-nu-streamer-sieu-vong-gay-bat-ngo-tiep-tuc-coi-ao-khoe-body-ngay-sau-do";
const tagparam = [
  "GÁI XINH",
  "STREAMER",
  "HOT GIRL",
  "CỘNG ĐỒNG MẠNG",
  "RAN",
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

export default function page_20210729161429() {
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
                    Nhân vật chính trong câu chuyện lần này là{" "}
                    <strong>Ran</strong> - một trong những người được coi là nữ
                    thần gợi cảm của làng <strong>streamer</strong> tại Hàn
                    Quốc. Sở hữu đôi gò bồng đảo siêu "khủng", thậm chí kích
                    thước có khi còn phải xấp xỉ 1m, cô{" "}
                    <strong>gái xinh</strong> đẹp này luôn là tâm điểm của sự
                    chú ý trong mỗi lần xuất hiện. Và thực tế, cái tên Ran càng
                    gây sốc hơn sau khi cô nàng streamer này đầu tư thời gian
                    cũng như tiền bạc tới hẳn bệnh viện, sau đó livestream để
                    chứng minh rằng vòng một của mình là hoàn toàn tự nhiên,
                    không hề trải qua phẫu thuật hay sử dụng công cụ "hack
                    cheat" gì.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/5/photo-1-1625479110611331627535.jpg"
                    alt="1, GÁI XINH,STREAMER,HOT GIRL,CỘNG ĐỒNG MẠNG,RAN,NỮ STREAMER,"
                    note="Ran - cô nàng streamer trong câu chuyện"
                  />
                  <p>
                    Người từng gây lùm xùm với màn tự đi chụp ngực để chứng minh
                    vòng một không hề "nhân tạo"
                  </p>
                  <p>
                    Mặt xinh, lại còn sở hữu đôi gò bồng đảo siêu đẹp, thế nhưng
                    đôi khi điều này lại trở thành những rắc rối không đáng có
                    đối với <strong>Ran</strong>. Cách đây không lâu, cô nàng
                    thậm chí còn vướng vào ồn ào tới mức kiện tụng sau một lần
                    bị quấy rối, bình luận khiếm nhã ở quán cháo bào ngư. Cụ
                    thể, trong lúc đang livestream với fan, Ran bất ngờ ra ngoài
                    đi vệ sinh và những lời bình luận khiếm nhã của nhân viên ở
                    quán về vòng một, về bộ áo sexy mà cô nàng đang mặc đã lọt
                    vào trên sóng, được hàng ngàn người nghe thấy mà "thủ phạm"
                    không hề hay biết.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/5/photo-1-1625478288360359406924.jpg"
                    alt="2, GÁI XINH,STREAMER,HOT GIRL,CỘNG ĐỒNG MẠNG,RAN,NỮ STREAMER,"
                    note="Nữ streamer cũng thường xuyên gặp rắc rối vì vòng một quá khổ của mình"
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/5/photo-1-16254785947221989297824.jpg"
                    alt="3, GÁI XINH,STREAMER,HOT GIRL,CỘNG ĐỒNG MẠNG,RAN,NỮ STREAMER,"
                    note="Lần gần nhất, cô nàng đã bị quấy rối, bình luận khiếm nhã tại một quán cháo bào ngư"
                  />
                  <p>
                    Vụ việc ồn ào tới mức nàng <strong>streamer</strong> còn bức
                    xúc tụt quần trên sóng để chứng minh rằng mình có mặc quần
                    bảo hộ khi ra ngoài chứ không phải như những gì gã nhân viên
                    phục vụ kia bình luận. Sau đó, cô nàng còn dự định khởi kiện
                    thủ phạm vì đã bôi nhọ, quấy rối mình. Những tưởng sau một
                    thời gian bình lặng, câu chuyện tới đây là hết. Nhưng không,
                    trong video mới đăng tải cách đây chưa lâu,{" "}
                    <strong>Ran</strong> khiến cho không ít fan phải cảm thấy
                    bất ngờ khi quyết định quay lại quán cháo ấy.
                  </p>
                  <RelationNewsInPage category={category} />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/5/photo-1-16254786528271438421060.gif"
                    alt="4, GÁI XINH,STREAMER,HOT GIRL,CỘNG ĐỒNG MẠNG,RAN,NỮ STREAMER,"
                    note="Cô nàng streamer sau đó còn bức xúc tới mức tụt cả quần trên sóng để chứng minh mình không hề cố tình tỏ ra sexy, lẳng lơ như bị buộc tội"
                  />
                  <p>
                    Bản thân <strong>Ran</strong> sau đó cũng chia sẻ với các
                    fan rằng ông chủ quán ăn đã cam kết không để trường hợp như
                    trước lặp lại nữa. Sau đó, người này còn từ chối nhận tiền,
                    đồng thời coi đó là cách để xin lỗi về những bức xúc mà Ran
                    gặp phải trước đó nhưng nữ <strong>streamer</strong> kiên
                    quyết không đồng ý. Tuy nhiên, hành động sau đó, khi Ran rời
                    khỏi quán ăn mới khiến nhiều người phải chú ý. Dường như quá
                    thoải mái và chẳng cần kiêng nể gì, cô nàng bất ngờ cởi bỏ
                    bộ hanbok cách tân của mình, khoe trọn vóc dáng cơ thể siêu
                    ấn tượng.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/5/photo-1-16254788114501126381055.jpg"
                    alt="5, GÁI XINH,STREAMER,HOT GIRL,CỘNG ĐỒNG MẠNG,RAN,NỮ STREAMER,"
                    note="Nữ streamer thản nhiên cởi bỏ xiêm y, khoe thân ở đoạn cuối video"
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/5/photo-1-1625479264315826708820.gif"
                    alt="6, GÁI XINH,STREAMER,HOT GIRL,CỘNG ĐỒNG MẠNG,RAN,NỮ STREAMER,"
                    note="Cô nàng thậm chí còn từng được mời làm mẫu cho tạp chí MAXIM"
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/5/photo-1-16254791447121610697265.gif"
                    alt="7, GÁI XINH,STREAMER,HOT GIRL,CỘNG ĐỒNG MẠNG,RAN,NỮ STREAMER,"
                    note=""
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/5/photo-1-16254792271061530597793.gif"
                    alt="8, GÁI XINH,STREAMER,HOT GIRL,CỘNG ĐỒNG MẠNG,RAN,NỮ STREAMER,"
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
