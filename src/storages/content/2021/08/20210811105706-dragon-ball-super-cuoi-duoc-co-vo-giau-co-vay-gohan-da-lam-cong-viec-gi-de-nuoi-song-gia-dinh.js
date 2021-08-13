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
"title": 'Dragon Ball Super: Cưới được cô vợ giàu có, vậy Gohan đã làm công việc gì để nuôi sống gia đình?',
"description": 'Không giống như ông bố Goku phải đi làm nông dân để nuôi sống gia đình, thì Gohan dường như nhàn nhã hơn nhiều.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/10/anh-1-16285785706161476972933.jpg',
"alt": 'DRAGON BALL,SON GOKU,7 VIÊN NGỌC RỒNG,SON GOHAN,SATAN,CÔNG VIỆC CỦA GOHAN,',
"category": 'games',
"date": '11/08/2021',
"time": '10:57 AM',
"link": '/dragon-ball-super-cuoi-duoc-co-vo-giau-co-vay-gohan-da-lam-cong-viec-gi-de-nuoi-song-gia-dinh',
"zcomponent": 'page_20210811105706',
"filepath": './20210811105706-dragon-ball-super-cuoi-duoc-co-vo-giau-co-vay-gohan-da-lam-cong-viec-gi-de-nuoi-song-gia-dinh.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "games";
const categoryLink = "/games";
const title =
  "Dragon Ball Super: Cưới được cô vợ giàu có, vậy Gohan đã làm công việc gì để nuôi sống gia đình?";
const author = "SuSu";
const source = "Trí Thức Trẻ";
const timestamp = "11/08/2021 10:57 AM";
const description =
  "Không giống như ông bố Goku phải đi làm nông dân để nuôi sống gia đình, thì Gohan dường như nhàn nhã hơn nhiều.";
const link =
  "dragon-ball-super-cuoi-duoc-co-vo-giau-co-vay-gohan-da-lam-cong-viec-gi-de-nuoi-song-gia-dinh";
const tagparam = [
  "DRAGON BALL",
  "SON GOKU",
  "7 VIÊN NGỌC RỒNG",
  "SON GOHAN",
  "SATAN",
  "CÔNG VIỆC CỦA GOHAN",
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

export default function page_20210811105706() {
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
                      Trong <strong>Dragon Ball</strong> thì ngoài việc chiến
                      đấu bảo vệ Trái Đất thì Goku và các chiến binh Z khác vẫn
                      phải làm các công việc bình thường để kiếm tiền nuôi sống
                      gia đình. Trong khi Vegeta may mắn lấy được Bulma, một
                      doanh nhân công nghệ giàu nhất thế giới thì các nhân vật
                      khác phải vất vả kiếm sống. Goku về vườn làm nông dân,
                      Krillin trở thành cảnh sát, Tien và Chiaotzu điều hành một
                      võ đường… Và với việc Gohan cũng lấy được một cô vợ giàu
                      có thì nhiều người tự hỏi chính xác anh làm công việc gì
                      để hỗ trợ gia đình của mình?
                    </p>
                    <p>
                      Như chúng ta đã biết, ngay từ nhỏ Gohan đã bị mẹ Chi Chi
                      thúc ép dành sự quan tâm cho việc học của mình. Chính điều
                      này đã cản trở việc tập luyện võ thuật của Gohan, Chi Chi
                      rất nghiêm khắc luôn yêu cầu anh phải ở trong nhà để tập
                      trung vào việc học của mình, ngay cả khi đối mặt với một
                      số mối đe dọa lớn nhất của vũ trụ. Cách dậy dỗ của cô
                      dường như đã được đền đáp vào cuối{" "}
                      <strong>Dragon Ball</strong> Z, với phần kết sau thất bại
                      của Majin Buu đã tiết lộ rằng Gohan thực sự là một trong
                      những giáo sư hàng đầu trên hành tinh, sống thoải mái với
                      vợ là Videl và con gái Pan của họ.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/10/anh-1-16285785706161476972933.jpg"
                      alt="1, DRAGON BALL,SON GOKU,7 VIÊN NGỌC RỒNG,SON GOHAN,SATAN,CÔNG VIỆC CỦA GOHAN,"
                      note=""
                    />
                    <p>
                      Tuy nhiên chúng ta cũng biết đây là một lĩnh vực không có
                      mức lương cao trong bất kỳ vũ trụ nào. Trong suốt{" "}
                      <strong>Dragon Ball</strong> Super, Gohan được nhìn thấy
                      thường xuyên đi phát biểu tại các hội nghị học thuật khác
                      nhau, cho dù lĩnh vực chuyên môn của anh ấy không bao giờ
                      được tiết lộ. Mặc dù Gohan được mọi người tôn trọng nhưng
                      dường như anh không có một công việc ổn định.
                    </p>
                    <p>
                      Có thời điểm Gohan được đề nghị làm trợ lý giáo sư nhưng
                      cuối cùng anh ấy đã từ chối vì sẽ mất quá nhiều thời gian
                      để dành cho gia đình. Công việc được trả lương cao nhất mà
                      Gohan đảm nhận trong Super có vẻ như là lần anh trở thành
                      diễn viên đóng thế cho một bộ phim chuyển thể từ nhân vật
                      siêu anh hùng Great Saiyaman, nơi Gohan cứu mọi người khỏi
                      một kẻ ngoài hành tinh.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Vì thế chắc chắn số tiền mà Gohan kiếm được không đủ để
                      Gohan hỗ trợ tài chính cho gia đình của mình. Mọi chi tiêu
                      sinh hoạt trong nhà có thể là do Videl đảm nhiệm. Điều này
                      cũng không quá khó hiểu khi cô là con gái của một trong
                      những người giàu nhất trên trái đất,{" "}
                      <strong>Satan</strong>. Sau khi ghi nhận công lao vì đánh
                      bại Cell và các mối đe dọa khác mà nhân loại phải đối mặt,
                      sự nổi tiếng đã khiến Satan trở nên giàu có. Vì thế có khả
                      năng Satan đã "hỗ trợ" thu nhập cho Gohan và Videl như một
                      cách quan tâm đến cả hai người và cháu gái Pan của ông ta.
                    </p>
                    <p>
                      Như chúng ta đã thấy Goku đã phải vật lộn để duy trì cuộc
                      sống của mình khi trở thành một anh nông dân trồng củ cải
                      theo lệnh của Chi Chi. Vì thế khác với ông bố của mình,
                      Gohan dường như may mắn khi kết hôn với một gia đình giàu
                      có, điều này cho phép anh cân bằng cuộc sống gia đình, sự
                      nghiệp học tập và theo đuổi võ thuật cùng một lúc.
                    </p>

                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/10/anh-2-1628578570631567655791.jpg"
                      alt="2, DRAGON BALL,SON GOKU,7 VIÊN NGỌC RỒNG,SON GOHAN,SATAN,CÔNG VIỆC CỦA GOHAN,"
                      note=""
                    />
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
