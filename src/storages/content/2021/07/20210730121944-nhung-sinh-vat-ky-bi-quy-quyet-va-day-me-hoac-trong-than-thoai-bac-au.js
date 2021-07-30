import React from "react";
import "components/page.css";
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
"timestamp": '30/07/2021 12:19 PM',
"title": 'Những sinh vật kỳ bí, quỷ quyết và đầy mê hoặc trong thần thoại Bắc Âu',
"description": 'Trong thần thoại Bắc Âu không chỉ có các vị thần và người khổng lồ.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/7/30/to-make-my-small-elves-coats-1627635135792898967258.jpg',
"alt": 'KHÁM PHÁ,THẦN THOẠI,THẦN THOẠI BẮC ÂU,',
"category": 'news',
"date": '30/07/2021',
"time": '12:19 PM',
"link": '/nhung-sinh-vat-ky-bi-quy-quyet-va-day-me-hoac-trong-than-thoai-bac-au',
"zcomponent": 'page_20210730121944',
"filepath": './20210730121944-nhung-sinh-vat-ky-bi-quy-quyet-va-day-me-hoac-trong-than-thoai-bac-au.js'
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
  "Những sinh vật kỳ bí, quỷ quyết và đầy mê hoặc trong thần thoại Bắc Âu";
const author = "Green";
const source = "Trí Thức Trẻ";
const timestamp = "30/07/2021 12:19 PM";
const description =
  "Trong thần thoại Bắc Âu không chỉ có các vị thần và người khổng lồ.";
const link =
  "nhung-sinh-vat-ky-bi-quy-quyet-va-day-me-hoac-trong-than-thoai-bac-au";
const tagparam = ["KHÁM PHÁ", "THẦN THOẠI", "THẦN THOẠI BẮC ÂU"];
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

export default function page_20210730121944() {
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
                <div className="contentBody">
                  <p>
                    <strong>Thần thoại</strong> và những câu chuyện dân gian Bắc
                    Âu có rất nhiều chủng loài. Nổi tiếng nhất trong số đó là
                    các vị thần và jotnar – những kẻ thù của họ. Hai chủng loài
                    đại diện cho tốt và xấu. Tuy nhiên, ở giữa hai chủng loài
                    này còn có rất nhiều sinh vật kỳ bí khác với đủ hình thù lẫn
                    kích thước.
                  </p>
                  <p>
                    Một vài trong số các sinh vật kỳ bí của{" "}
                    <strong>thần thoại</strong> Bắc Âu đã trở nên nổi tiếng khi
                    là nguồn cảm hứng cho rất nhiều tác giả hiện đại, trong đó
                    có cả J.R.R. Tolkien với bộ tiểu thuyết Lord of the Rings.
                  </p>
                  <h5>Người lùn và yêu tinh</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/30/to-make-my-small-elves-coats-1627635135792898967258.jpg"
                    alt="2, KHÁM PHÁ,THẦN THOẠI,THẦN THOẠI BẮC ÂU,"
                    note=""
                  />
                  <p>
                    Người lùn và yêu tinh có lẽ là hai trong số những sinh vật{" "}
                    <strong>thần thoại</strong> nổi tiếng nhất của Bắc Âu. Người
                    lùn được miêu tả là những thợ rèn bậc thầy, họ thường sống
                    trong các thành phố dưới lòng đất. Họ có dáng vóc thấp bé,
                    đàn ông luôn để râu dài. Tuy nhiên, ban đầu người lùn thường
                    được miêu tả có vẻ ngoài nhợt nhạt và ghê rợn. Một số giả
                    thuyết cho rằng người lùn là giả thuyết bắt nguồn từ một
                    phong tục thờ cúng tổ tiên cổ của người Ấn-Âu.
                  </p>
                  <p>
                    Không giống với người lùn, yêu tinh lại được miêu tả có dáng
                    vẻ trang nhã, duyên dáng hơn. <strong>Thần thoại</strong>{" "}
                    Bắc Âu kể rằng yêu tinh thường sống ở đồng cỏ hoặc rừng rậm.
                    Dù yêu tinh thường được miêu tả là những sinh vật hiền lành,
                    ưa hòa bình, nhưng vẫn có một số truyện dân gian của Bắc Âu
                    lại khắc họa yêu tinh như thủ phạm của các hành vi xấu xa.
                  </p>
                  <h5>Troll</h5>
                  <p>
                    Một sinh vật khác trong <strong>thần thoại</strong> Bắc Âu
                    cũng rất quen thuộc với nhiều người là troll. Dù giữa các
                    câu chuyện, vẻ ngoài của troll có thể được miêu tả khác nhau
                    đôi chút, nhưng chúng đều có điểm chung là to lớn và xấu xí.
                    Ngoài ra, dù vóc dáng to lớn nhưng trí tuệ của chúng lại khá
                    khiêm tốn. Vì vậy, troll thường bị xem là sinh vật chậm chạp
                    và ngu ngốc.
                  </p>
                  <h5>Huldra</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/30/c5e528be64a37c7e8bb0172bae0eb62e-16276351995451087899900.png"
                    alt="3, KHÁM PHÁ,THẦN THOẠI,THẦN THOẠI BẮC ÂU,"
                    note=""
                  />
                  <p>
                    Huldra là một sinh vật kỳ lạ khác được nhắc đến trong những
                    câu chuyện dân gian của Bắc Âu. Chúng được miêu tả là xinh
                    đẹp, quyến rũ và thường sống trong rừng. Huldra có vẻ bề
                    ngoài giống với một người phụ nữ bình thường, ngoại trừ một
                    cái đuôi dài phía sau. Huldra thường dụ dỗ đàn ông vào rừng
                    rồi bắt đi linh hồn của họ.
                  </p>
                  <RelationNewsInPage category={category} />
                  <p>
                    Một câu chuyện khác lại kể rằng Huldra vốn là con gái của
                    Adam và Eve. Một ngày nọ, Eve tắm cho các con và Thượng Đế
                    đến thăm. Vì không phải đứa trẻ nào cũng sạch sẽ, nên Eve đã
                    đem giấu những đứa bẩn thỉu đi. Nhìn thấy các con của Eve,
                    Thượng Đế hỏi còn có đứa nào nữa không, Eve bèn đáp "không".
                    Vậy là Thượng Đế nói rằng "Hãy để những thứ bị giấu tiếp tục
                    bị giấu". Những đứa trẻ bị giấu trở thành "De Underjordiske"
                    (nghĩa là: Những đứa trẻ sống dưới lòng đất) và Huldra là
                    một trong số chúng.
                  </p>
                  <h5>Một số sinh vật thần bí khác</h5>
                  <p>
                    Ngoài những sinh vật thần bí trên,{" "}
                    <strong>thần thoại</strong> và truyện dân gian Bắc Âu còn đề
                    cập đến một số sinh vật như:
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/30/scandinavian-trolls-16276352320851219469029.jpg"
                    alt="4, KHÁM PHÁ,THẦN THOẠI,THẦN THOẠI BẮC ÂU,"
                    note=""
                  />
                  <p>
                    Kraken, Trolual và Draugen: Các sinh vật kỳ bí sống ở vùng
                    biển. Kraken và Trolual là những quái vật khổng lồ, còn
                    Draugen là linh hồn của những người chết trên biển.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/30/scandinavian-folklore-16276350189071279308492.jpg"
                    alt="1, KHÁM PHÁ,THẦN THOẠI,THẦN THOẠI BẮC ÂU,"
                    note=""
                  />
                  <p>Tusser: Loài yêu tinh ranh ma sống dưới lòng đất.</p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/30/bwzkv5f-16276354658151971557850.jpg"
                    alt="8, KHÁM PHÁ,THẦN THOẠI,THẦN THOẠI BẮC ÂU,"
                    note=""
                  />
                  <p>
                    Nissen: Những kẻ thích chơi khăm sống trong chuồng gia súc.
                    Chúng có thể dễ dàng kết bạn và đóng vai Ông già Noel trong
                    mùa Giáng sinh.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/30/ce8890ae33bca8a1bd72bf39493908a4-16276354087871780068328.jpg"
                    alt="7, KHÁM PHÁ,THẦN THOẠI,THẦN THOẠI BẮC ÂU,"
                    note=""
                  />
                  <p>Pesta: Hiện thân của thảm họa và dịch bệnh.</p>

                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/30/2884f2c541af670a8d61e805c0f35b90-1627635342999902966852.jpg"
                    alt="6, KHÁM PHÁ,THẦN THOẠI,THẦN THOẠI BẮC ÂU,"
                    note=""
                  />
                  <p>
                    Night Raven: Loài chim khổng lồ liên quan đến cái chết và
                    thiên tai.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/30/-1627635270972946004248.jpg"
                    alt="5, KHÁM PHÁ,THẦN THOẠI,THẦN THOẠI BẮC ÂU,"
                    note=""
                  />
                  <p>Nokken: Sinh vật dưới nước thường dìm chết con người.</p>
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
