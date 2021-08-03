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
"timestamp": '29/07/2021 04:15 PM',
"title": 'Khoe vòng một "cân" điện thoại dễ dàng, nàng hot girl gây sốc khi chia sẻ được hơn 30 người tán tỉnh mỗi ngày',
"description": 'Cô nàng hot girl này đang nhận được sự chú ý của đông đảo cộng đồng mạng.',
"src": '',
"alt": 'GÁI XINH,CỘNG ĐỒNG MẠNG,HOT GIRL,YOUTUBER,YOUTUBE,',
"category": 'images',
"date": '29/07/2021',
"time": '04:15 PM',
"link": '/khoe-vong-mot-can-dien-thoai-de-dang-nang-hot-girl-gay-soc-khi-chia-se-duoc-hon-30-nguoi-tan-tinh-moi-ngay',
"zcomponent": 'page_20210729161503',
"filepath": './20210729161503-khoe-vong-mot-can-dien-thoai-de-dang-nang-hot-girl-gay-soc-khi-chia-se-duoc-hon-30-nguoi-tan-tinh-moi-ngay.js'
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
  'Khoe vòng một "cân" điện thoại dễ dàng, nàng hot girl gây sốc khi chia sẻ được hơn 30 người tán tỉnh mỗi ngày';
const author = "Mặt Trứng";
const source = "Pháp luật và bạn đọc";
const timestamp = "29/07/2021 04:15 PM";
const description =
  "Cô nàng hot girl này đang nhận được sự chú ý của đông đảo cộng đồng mạng.";
const link =
  "khoe-vong-mot-can-dien-thoai-de-dang-nang-hot-girl-gay-soc-khi-chia-se-duoc-hon-30-nguoi-tan-tinh-moi-ngay";
const tagparam = [
  "GÁI XINH",
  "CỘNG ĐỒNG MẠNG",
  "HOT GIRL",
  "YOUTUBER",
  "YOUTUBE",
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

export default function page_20210729161503() {
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
                      Thời gian gần đây, mạng xã hội Nhật Bản bất ngờ lan truyền
                      một đoạn clip tương đối hot liên quan tới một cô nàng diện
                      bikini đầy nóng bỏng ngoài bãi biển. Cụ thể, đoạn video
                      được bắt nguồn từ một{" "}
                      <strong>
                        <strong>YouTube</strong>r
                      </strong>{" "}
                      - người đang tiến hành màn phỏng vấn những cô nàng xinh
                      đẹp ngoài bãi biển để tìm kiếm những ứng viên sáng giá có
                      thể vượt qua thử thách Tawawa.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/6/photo-1-1625559150273630511825.png"
                      alt="1, GÁI XINH,CỘNG ĐỒNG MẠNG,HOT GIRL,YOUTUBER,YOUTUBE,"
                      note="Cô gái mặt áo tắm xanh - nhân vật chính trong câu chuyện"
                    />
                    <p>
                      Và dành cho những ai chưa biết thì Tawawa vốn được coi là
                      một trong những thử thách mang tính phân loại "kích cỡ
                      vòng một" dễ nhất tại Nhật Bản. Hiểu theo một cách đơn
                      giản, đó là cách để mà những cô nàng này có thể dùng đôi
                      gò bồng đảo của mình mà giữ được điện thoại thông minh một
                      cách lâu và bền bỉ nhất. Đó cũng là lý do mà nàng{" "}
                      <strong>hot girl</strong> trong bức ảnh phía trên bất ngờ
                      trở nên nổi tiếng.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/6/photo-1-16255591514281496730774.png"
                      alt="2, GÁI XINH,CỘNG ĐỒNG MẠNG,HOT GIRL,YOUTUBER,YOUTUBE,"
                      note="Hai cô gái khi được YouTuber yêu cầu thực hiện thử thách"
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/6/photo-2-16255591514462064346514.jpg"
                      alt="3, GÁI XINH,CỘNG ĐỒNG MẠNG,HOT GIRL,YOUTUBER,YOUTUBE,"
                      note="Rất thoải mái khi cầm điện thoại"
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/6/photo-3-1625559152979963587134.png"
                      alt="4, GÁI XINH,CỘNG ĐỒNG MẠNG,HOT GIRL,YOUTUBER,YOUTUBE,"
                      note="Cô nàng thực hiện màn thử thách khá dễ dàng"
                    />
                    <p>
                      Tuy nhiên, kịch hay lại nằm ở phía sau. Cụ thể, trong màn
                      phỏng vấn nhanh nhân vật chính, cô nàng này đã tiết lộ khá
                      nhiều những thông tin thú vị. Theo đó, nàng{" "}
                      <strong>hot girl</strong> này rất tự hào khi thừa nhận
                      rằng mình sở hữu vòng một có kích cỡ lên tới cup G, tuy
                      nhiên đã hơn một năm nay chưa hề có bạn trai. Và khi được
                      hỏi rằng liệu có phải ra ngoài bãi biển, ăn vận gợi cảm
                      như thế này để tìm kiếm một ý trung nhân không, nhân vật
                      chính đã từ chối, cho rằng mình chỉ đi thưởng thức phong
                      cảnh với bạn mà thôi.
                    </p>
                    <RelationNewsInPage category={category} />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/6/photo-4-16255591524722029784928.jpg"
                      alt="5, GÁI XINH,CỘNG ĐỒNG MẠNG,HOT GIRL,YOUTUBER,YOUTUBE,"
                      note="Cô nàng hot girl có thể không quá xinh đẹp"
                    />
                    <p>
                      Nhưng sau đó, nàng <strong>hot girl</strong> cũng nhanh
                      chóng phàn nàn rằng vì vòng một quá khổ mà mình đã bị săn
                      đuổi, tán tỉnh thường xuyên. Cụ thể, có ngày cao điểm còn
                      xuất hiện tới hơn 30 anh chàng tiếp cận cô - điều khiến
                      cho cô gái này cảm thấy không hề thoải mái. "Tôi vẫn mặc
                      quần áo đầy đủ, nhưng liên tục bị tán tỉnh, đôi khi còn đề
                      nghị khiếm nhã".
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/6/photo-5-1625559151961440265604.jpg"
                      alt="6, GÁI XINH,CỘNG ĐỒNG MẠNG,HOT GIRL,YOUTUBER,YOUTUBE,"
                      note="Nhưng chắc chắn vòng một cup G luôn là điểm nhấn ngoài bãi biển"
                    />
                    <p>
                      Chẳng hiểu cô nàng này không hiểu thật hay cố tình tỏ ra
                      như vậy, chứ theo ý kiến của nhiều người, với vòng một cup
                      G và bộ bikini nổi bật như vậy, cộng thêm gương mặt không
                      tới nỗi nào, cô gái này không muốn gây chú ý cũng khó.{" "}
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
