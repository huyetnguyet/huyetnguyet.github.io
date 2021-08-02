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
"timestamp": '02/08/2021 01:17 AM',
"title": 'Ngay trong đêm Khang Hy băng hà, Ung Chính lập tức xử tử thân tín đã theo tiên đế suốt 60 năm, ông đến cùng đã đắc tội với ai?',
"description": 'Lý do thực sự khiến Ung Chính xử tử Triệu Xương - một thái giám cận kề hơn 60 năm bên Khang Hy đế ngay trong đêm ông băng hà là gì?',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/26/-16272921001512030615251.jpg',
"alt": 'nhà Thanh Trung Quốc,Uông Chính,khang hy,',
"category": 'news',
"date": '02/08/2021',
"time": '01:17 AM',
"link": '/ngay-trong-dem-khang-hy-bang-ha-ung-chinh-lap-tuc-xu-tu-than-tin-da-theo-tien-de-suot-60-nam-ong-den-cung-da-dac-toi-voi-ai',
"zcomponent": 'page_20210802011714',
"filepath": './20210802011714-ngay-trong-dem-khang-hy-bang-ha-ung-chinh-lap-tuc-xu-tu-than-tin-da-theo-tien-de-suot-60-nam-ong-den-cung-da-dac-toi-voi-ai.js'
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
  "Ngay trong đêm Khang Hy băng hà, Ung Chính lập tức xử tử thân tín đã theo tiên đế suốt 60 năm, ông đến cùng đã đắc tội với ai?";
const author = "PHẠM TRANG,";
const source = "Pháp luật & Bạn đọc";
const timestamp = "02/08/2021 01:17 AM";
const description =
  "Lý do thực sự khiến Ung Chính xử tử Triệu Xương - một thái giám cận kề hơn 60 năm bên Khang Hy đế ngay trong đêm ông băng hà là gì?";
const link =
  "ngay-trong-dem-khang-hy-bang-ha-ung-chinh-lap-tuc-xu-tu-than-tin-da-theo-tien-de-suot-60-nam-ong-den-cung-da-dac-toi-voi-ai";
const tagparam = ["nhà Thanh Trung Quốc", "Uông Chính", "khang hy"];
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

export default function page_20210802011714() {
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
                    Từ xưa tới nay, việc tranh giành ngôi báu trong hoàng tộc
                    không phải chuyện lạ. Bởi chỉ cần có vương quyền thì có thể
                    một tay che trời với quyền lực tối cao, vạn người tôn kính.
                  </p>
                  <p>
                    Là triều đại cuối cùng trong thời đại phong kiến của Trung
                    Quốc, nhà Thanh cũng không thể tránh khỏi việc tranh quyền
                    đoạt vị. Trong số 12 hoàng đế triều Thanh, vị hoàng đế nổi
                    tiếng nhất triều Thanh, <strong>Khang Hy</strong>, cũng là
                    hoàng đế có thời gian trị vì lâu nhất. Sau khi ông băng hà,
                    thái giám tổng quản đã theo ông đến 60 năm, Triệu Xương,
                    cũng lập tức bị hoàng đế kế ngôi là Ung Chính xử tử.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/26/-16272921001512030615251.jpg"
                    alt="1, nhà Thanh Trung Quốc,Uông Chính,khang hy,"
                    note=""
                  />
                  <p>
                    Triệu Xương đã phạm tội tày đình gì? Ông đã xúc phạm đến ai?
                    “Âm mưu” thực sự đằng sau hành động này của Ung Chính là gì?
                  </p>
                  <p>
                    Theo truyền thống trong cung, mỗi hoàng tử từ khi còn nhỏ sẽ
                    chọn cho mình một người cùng độ tuổi theo hầu, bầu bạn. Khi{" "}
                    <strong>Khang Hy</strong> từ khi còn nhỏ đã được Hiếu Trang
                    Hoàng thái hậu và Thuận Trị đế hết mực yêu thương. Lúc Khang
                    Hy bắt đầu văn tôi võ luyện cũng là lúc họ tìm cho ông một
                    đứa nhỏ ngoan ngoãn để bầu bạn. Và người được lựa chọn là
                    Triệu Xương.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/26/-16272921034071231180498.jpg"
                    alt="2, nhà Thanh Trung Quốc,Uông Chính,khang hy,"
                    note=""
                  />
                  <p>
                    Triệu Xương chỉ nhỏ hơn <strong>Khang Hy</strong> 3 tuổi
                    nhưng từ bé đã thông minh lanh lợi, hiểu chuyện, khéo ăn nói
                    nên rất được Khang Hy yêu thích. Mặc dù có sự khác biệt về
                    thân phận nhưng Khang Hy một phần nào đó vẫn coi Triệu Xương
                    như người bạn thân thiết của mình, gần như ở bên nhau suốt
                    thuở ấu thời.
                  </p>
                  <p>
                    Sau này, khi <strong>Khang Hy</strong> vừa kế vị ngai vàng
                    cần bình định nhiều thế lực thì Triệu Xương lúc đó đã âm
                    thầm giúp đỡ lo lót. Đợi đến khi Khang Hy nắm chắc quyền lực
                    trong tay, lập tức sắc phong Triệu Xương làm Tổng quản phủ
                    Nội vụ. Tất cả thánh chỉ hầu hết đều qua tay Triệu Xương mà
                    truyền xuống dưới. Vào mỗi dịp trọng đại đều sẽ có Triệu
                    Xương đi theo. Từ những việc này có thể thấy được Khang Hy
                    coi trọng và tín nhiệm Triệu Xương đến mức nào.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/26/-16272921038801231321619.jpg"
                    alt="3, nhà Thanh Trung Quốc,Uông Chính,khang hy,"
                    note=""
                  />
                  <p>
                    Triệu Xương không phải ngẫu nhiên được{" "}
                    <strong>Khang Hy</strong> yêu thích. Không những ở bên Khang
                    Hy từ nhỏ mà ông còn nắm trong tay sở thích của Khang Hy. Vì
                    biết Khang Hy đặc biệt hứng thú với những món đồ từ phương
                    Tây, Triệu Xương đã thường xuyên tiến cống một số món đồ mới
                    lạ đẹp mắt từ nước ngoài về như tranh sơn dầu, súng kíp...
                  </p>
                  <p>
                    Không những vậy, mỗi khi <strong>Khang Hy</strong> giao cho
                    Triệu Xương nhiệm vụ, ông đều hoàn thành một cách xuất sắc
                    với hiệu quả cao. Triệu Xương không chỉ trung thành với
                    Khang Hy mà còn một lòng một dạ với nhà Thanh. Khi Khang Hy
                    còn tại vị, Triệu Xương đối nhân xử thế vô cùng khiêm
                    nhường, gặp chuyện gì cũng khéo léo đưa đẩy, chưa từng làm
                    mất lòng ai. Một thái giám tưởng chừng vô hại như vậy nhưng
                    khi Khang Hy vừa băng hà lại là người đầu tiên bị xử tử?
                    Chuyện này bắt nguồn từ sự kiện chín người con trai của
                    Khang Hy tranh giành ngôi báu nổi danh thiên hạ.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/26/-16272921034561371228670.jpg"
                    alt="4, nhà Thanh Trung Quốc,Uông Chính,khang hy,"
                    note=""
                  />
                  <p>
                    Từ trước đến nay vẫn có câu“Hậu cung ba nghìn giai lệ” nên
                    đương nhiên số hoàng tử muốn kế thừa Vương vị cũng không ít.
                    Vào thời <strong>Khang Hy</strong>, câu chuyện “Cửu tử đoạt
                    đích” (Chín người con tranh giành ngôi báu) nổi tiếng đã xảy
                    ra. Chuyện này kỳ thực cũng là do Khang Hy. Vì khi ấy Thái
                    Tử làm ra một vài chuyện vượt quá giới hạn nên Khang Hy
                    trong cơn tức giận đã tước đi thân phận.
                  </p>
                  <p>
                    Điều này khiến 8 hoàng tử có vị thế nhất định trong triều
                    dấy lên hy vọng có thể thay thế, lên ngôi hoàng đế rồi dẫn
                    đến cuộc giao tranh tàn khốc. <strong>Khang Hy</strong> dù
                    không muốn chứng kiến cảnh tượng đau lòng này nhưng để chọn
                    ra người xứng đáng nhất đứng đầu đất nước, chỉ có thể
                    “ngoảnh mặt làm ngơ”.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/26/-16272921035041832209266.jpg"
                    alt="5, nhà Thanh Trung Quốc,Uông Chính,khang hy,"
                    note=""
                  />
                  <p>
                    Tứ hoàng tử Ung Chính ngay từ khi Thái tử còn chưa bị phế
                    truất đã bắt đầu có tính toán, dần thu phục lòng người. Bình
                    thường trước mặt <strong>Khang Hy</strong> và các hoàng tử
                    khác thì khép nép khiêm nhường. Nhưng sau lưng, vào thời
                    điểm các hoàng tử khác tranh đấu gay gắt, Ung Chính không
                    chút do dự thẳng tay đánh vào yếu điểm của các hoàng tử.
                    Trong cuộc hỗn chiến bộc lộ tài năng và trở thành người kế
                    vị tốt nhất trong mắt Khang Hy.
                  </p>
                  <RelationNewsInPage category={category} />
                  <p>
                    Đêm 20 tháng 12 năm 1722, tình trạng sức khỏe của{" "}
                    <strong>Khang Hy</strong> xấu đi. Khi Tứ hoàng tử Ung Chính
                    tới nơi thì Khang Hy đã vào giai đoạn nguy kịch. Trước khi
                    chết chỉ kịp trao lại di vật thừa kế cho Ung Chính chứ không
                    hề công khai lập di chúc.
                  </p>
                  <p>
                    Cũng chính vào đêm hôm ấy xảy ra thêm một chuyện kỳ quái.
                    Ngay sau khi Hoàng đế <strong>Khang Hy</strong> băng Hà,
                    trong hoàng cung vọng ra tiếng kêu gào thảm thiết. Ngày hôm
                    sau, Ung Chính tuyên bố Triệu Xương qua đời, đồng thời cũng
                    gắn cho ông một vài tội danh không thể xác minh như lấy trộm
                    tài sản trong ngân khố, lấy của công làm tư, bất trung với
                    nhà Thanh, có ý đồ tạo phản.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/26/-16272921036081170708184.jpg"
                    alt="6, nhà Thanh Trung Quốc,Uông Chính,khang hy,"
                    note=""
                  />
                  <p>
                    Ung Chính ngay sau khi lên ngôi bắt đầu loại bỏ những kẻ
                    ngáng đường, không cùng quan điểm, quét sạch những kẻ trước
                    kia từng có ý định chống đối. Thậm chí còn thực hiện đại cải
                    cách đối với những chính sách trước kia của nhà Thanh. Có
                    thể thấy Ung Chính từ lâu đã ấp ủ kế hoạch cải tổ lại toàn
                    bộ Đại Thanh, từng bước từng bước khiến nó trở thành hiện
                    thực, đối với ngai vàng cũng đã có sự suy tính từ sớm. Từ
                    điểm này có thể thấy được việc Triệu Xương bị Ung Chính xử
                    tử còn nảy sinh nhiều nguyên nhân khác.
                  </p>
                  <p>
                    Là người bạn tâm giao, đồng hành cùng Hoàng đế{" "}
                    <strong>Khang Hy</strong> hơn 60 năm, Triệu Xương hầu như
                    biết rõ mọi tâm tư, kế hoạch của ông. Kể cả việc người có
                    thể thừa kế ngôi báu Khang Hy trong lòng dự tính là ai, có
                    lẽ Triệu Xương cũng biết rõ.
                  </p>
                  <p>
                    Theo quan điểm của Ung Chính vào thời điểm đó, nếu Triệu
                    Xương còn sống và người thừa kế ngai vàng mà Hoàng đế{" "}
                    <strong>Khang Hy</strong> dự tính không phải là mình, thì
                    Ung Chính có lẽ sẽ bỏ lỡ cơ hội làm hoàng đế cả đời. Để
                    Triệu Xương không có cơ hội nói ra điều ấy, Ung Chính đã
                    quyết định “giết người diệt khẩu”, tránh gây phiền phức sau
                    này.
                  </p>
                  <p>
                    Từ trước tới nay, những vị hoàng đế mới kế ngôi luôn ý thức
                    rõ ràng ai là người có nguy cơ đe dọa địa vị của mình. Triệu
                    Xương khi còn sống dù luôn nhún nhường, ôn hòa, không làm ra
                    chuyện gì quá đáng nhưng vẫn biết được vài chuyện cơ mật
                    trong triều đình. Mặc dù quyền lực của ông không thể so sánh
                    được với các quan đại thần trong triều nhưng những thứ ông
                    biết được không hề ít hơn bọn họ.
                  </p>
                  <p>
                    Ung Chính ngay khi kế vị đã có thể xử tử Triệu Xương một
                    cách vô lương tâm như vậy, một mặt là vì Triệu Xương đã biết
                    quá nhiều. Là một người đã theo tiên đế mấy chục năm, không
                    thể một lòng trung thành với mình, không có giá trị lợi
                    dụng. Mặt khác, vì địa vị của một thái giám trong thời Đại
                    Thanh là rất thấp, chẳng được ai coi trọng dù có là thân tín
                    của hoàng đế. Giết một người như vậy, đối với Ung Chính cũng
                    không phải một việc quá khó khăn.
                  </p>
                  <p>
                    Việc Triệu Xương trở thành con tốt thí mạng để Ung Chính
                    củng cố địa vị là điều dễ hiểu. Mỗi bậc đế vương đều có một
                    câu chuyện riêng. Dù sao đi nữa, Ung Chính cũng đã cai trị
                    và phát triển nhà Thanh đạt đến sự thịnh vượng.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/26/-16272921036081170708184.jpg"
                    alt="7, nhà Thanh Trung Quốc,Uông Chính,khang hy,"
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
