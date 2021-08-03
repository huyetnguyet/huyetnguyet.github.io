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
"timestamp": '02/08/2021 01:19 AM',
"title": '8 mẹo đơn giản để tăng tín hiệu sóng Wi-fi lên mức tối đa',
"description": 'Trong những ngày giãn cách xã hội, mạng Wi-fi là một trong những yếu tố quan trọng để học tập, làm việc và giải trí.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/8/1/photo-1-1627820158564578927919.jpg',
"alt": 'YẾU TỐ QUAN TRỌNG,TĂNG TỐC MẠNG WI-FI,WI-FI,SÓNG WI-FI,TĂNG TỐC MẠNG,TĂNG TỐC WI-FI,TÍN HIỆU WI-FI,',
"category": 'tech',
"date": '02/08/2021',
"time": '01:19 AM',
"link": '/8-meo-don-gian-de-tang-tin-hieu-song-wi-fi-len-muc-toi-da',
"zcomponent": 'page_20210802011917',
"filepath": './20210802011917-8-meo-don-gian-de-tang-tin-hieu-song-wi-fi-len-muc-toi-da.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "tech";
const categoryLink = "/tech";
const title = "8 mẹo đơn giản để tăng tín hiệu sóng Wi-fi lên mức tối đa";
const author = "Real Madrid";
const source = "Pháp luật và bạn đọc";
const timestamp = "02/08/2021 01:19 AM";
const description =
  "Trong những ngày giãn cách xã hội, mạng Wi-fi là một trong những yếu tố quan trọng để học tập, làm việc và giải trí.";
const link = "8-meo-don-gian-de-tang-tin-hieu-song-wi-fi-len-muc-toi-da";
const tagparam = [
  "YẾU TỐ QUAN TRỌNG",
  "TĂNG TỐC MẠNG WI-FI",
  "WI-FI",
  "SÓNG WI-FI",
  "TĂNG TỐC MẠNG",
  "TĂNG TỐC WI-FI",
  "TÍN HIỆU WI-FI",
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

export default function page_20210802011917() {
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
                      Cách{" "}
                      <strong>
                        <strong>tăng tốc mạng</strong> <strong>Wi-fi</strong>
                      </strong>
                      , tăng tín hiệu <strong>sóng Wi-fi</strong> lên mức cao
                      nhất này sẽ giúp ổn định mạng WiFi, bắt WiFi tốt hơn cho
                      các thiết bị kết nối đến mạng Wi-fi.
                    </p>
                    <h5>Xác định lại vị trí thích hợp để đặt Modem</h5>
                    <p>
                      Nếu bạn đặt chiếc Modem của mình ở trong một góc kín thì
                      thông thường bạn sẽ nhận được một sóng tín hiệu yếu ớt,
                      chập chờn đến khó chịu. Nơi lý tưởng cho chiếc Modem của
                      bạn là những ở vị trí mở, thoáng đãng (tốt nhất là ở trung
                      tâm nhà, nếu bạn là người làm việc thường xuyên quanh nhà
                      chứ không chỉ quanh quẩn quanh một căn phòng).
                    </p>
                    <p>
                      Một lưu ý khác là để sóng <strong>Wi-fi</strong> không bị
                      cản trở, bạn cần đặt Modem cách xa lò vi sóng, điện thoại
                      không dây… tóm lại là cần tránh xa các thiết bị kim loại
                      hoặc điện tử. Càng ít vật cản trở trên đường tín hiệu, máy
                      tính của bạn sẽ nhận được sóng dễ dàng hơn.
                    </p>
                    <h5>Thay đổi kênh tín hiệu Wi-fi</h5>
                    <p>
                      Tất cả các router không dây hoạt động trong phạm vi giới
                      hạn của chuẩn 802.11 và phát ở bước sóng 2.4GHz (chuẩn
                      802.11n mới có thể hoạt động tốt trên băng tần 5GHz). Vấn
                      đề là rất nhiều thiết bị như tai nghe Bluetooth, điện
                      thoại không dây, thiết bị giám sát trẻ em, lò vi sóng, và
                      các mạng <strong>Wi-fi</strong> khác hoạt động ở băng tần
                      2,4 GHz. Tất cả các thiết bị như vậy sẽ làm giảm băng
                      thông của mạng không dây.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/1/photo-1-1627820511412909805107.jpg"
                      alt="1, YẾU TỐ QUAN TRỌNG,TĂNG TỐC MẠNG WI-FI,WI-FI,SÓNG WI-FI,TĂNG TỐC MẠNG,TĂNG TỐC WI-FI,TÍN HIỆU WI-FI,"
                      note="Mô hình thiết lập Repeater cho mạng không giây gia đình"
                    />
                    <p>
                      Băng tần 2.4GHz được chia thành 13 kênh khác nhau giống
                      như các đài phát thanh. Do vậy, để khắc phục tình trạng
                      này, bạn nên thiết lập router tới kênh 1, 5, 9, 13 (đối
                      với các nước ngoài Mỹ) hoặc 1, 6, 11 (nếu sống ở Mỹ). Để
                      có được độ phủ sóng và chất lượng sóng tốt nhất, bạn nên
                      tìm hiểu các gia đình bên cạnh để tránh thiết lập trùng
                      kênh. Và nên nhớ, hãy đặt router tránh càng xa các thiết
                      bị 2,4GHz càng tốt.
                    </p>
                    <p>
                      Việc xung đột từ các mạng <strong>Wi-fi</strong> do dùng
                      chung một kênh Wi-fi trong cùng một khu vực có thể làm
                      giảm và gây nhiễu <strong>tín hiệu Wi-fi</strong> của bạn.
                      Để kiểm tra điều này, bạn có thể sử dụng các phần mềm kiểm
                      tra và theo dõi thông tin của các mạng Wi-fi trong khu
                      vực. Bạn có thể sử dụng ứng dụng Wi-fi Analyzer trên
                      Android hoặc inSSIDer trên Windows, ứng dụng này cho phép
                      bạn kiểm tra các mạng Wi-Fi đang xung đột, đồng thời hiển
                      thị các kênh và độ mạnh yếu của tín hiệu Wi-fi.
                    </p>
                    <p>
                      Nếu như mạng <strong>Wi-fi</strong> của bạn đang bị xung
                      đột với mạng khác, nó có thể làm nhiễu và giảm{" "}
                      <strong>tín hiệu Wi-fi</strong> của bạn. Để khắc phục điều
                      này, bạn cần thay đổi kênh Wi-fi của mình trong trang cấu
                      hình của router. Bạn có thể chuyển qua các kênh có ít sự
                      xung đột nhất, hoặc các kênh không có mạng Wi-fi nào sử
                      dụng, dựa trên biểu bồ hiển thị kênh Wi-fi của các phần
                      mềm Wi-fi Analyzer hay inSSIDer.
                    </p>
                    <p>
                      Ngoài ra, bạn có thể sử dụng NetStumbler để thay đổi kênh
                      cho Modem. Sau khi cài đặt và khởi động, chương trình sẽ
                      đưa ra cho bạn các lựa chọn mà Modem cung cấp.
                    </p>
                    <h5>Trang bị thêm Repeater - thiết bị lặp tín hiệu</h5>
                    <p>
                      Dù có được trang bị ăng-ten có khả năng phát sóng tốt nhất
                      đi nữa thì một router duy nhất cũng không đủ mạnh để phát
                      sóng <strong>Wi-fi</strong> cho toàn bộ ngôi nhà nhiều
                      tầng. Trong trường hợp đó, bạn sẽ cần phải sử dụng một
                      router thứ hai như là một điểm truy cập để mở rộng phạm vi
                      của mạng.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/1/photo-1-1627820158564578927919.jpg"
                      alt="2, YẾU TỐ QUAN TRỌNG,TĂNG TỐC MẠNG WI-FI,WI-FI,SÓNG WI-FI,TĂNG TỐC MẠNG,TĂNG TỐC WI-FI,TÍN HIỆU WI-FI,"
                      note=""
                    />
                    <p>
                      Nếu bạn có một bộ định tuyến dự phòng thì chỉ cần vài bước
                      cài đặt đơn giản như: Cắm router thứ hai vào cổng LAN của
                      router chính và chạy tiện ích thiết lập của nó (thiết lập
                      địa chỉ netmask, gateway, và SSID của router thứ 2 giống
                      với router chính) và tắt DHCP ở router thứ 2. Kết quả nhận
                      được là tại các điểm truy cập ở xa router chính nhưng bạn
                      vẫn có thể nhận được tốt tín hiệu (dù trước đó tín hiệu{" "}
                      <strong>Wi-fi</strong> rất yếu).
                    </p>
                    <h5>Thay ăng-ten của modem</h5>
                    <p>
                      Hầu hết các modem <strong>Wi-fi</strong> đều có một
                      ăng-ten toàn hướng, với một chu vi phát sóng nhất định.
                      Thông thường, đặt modem ở giữa căn phòng sẽ giúp cho việc
                      phát tín hiệu tới mọi góc trong căn phòng.
                    </p>
                    <p>
                      Tuy nhiên, vì những điều kiện nhất định mà bạn phải đặt
                      chúng vào góc, khi đó, nhiều tín hiệu sẽ đi qua tường hoặc
                      ra bên ngoài khoảng không.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Đó là lí do mà bạn có thể gỡ bỏ ăng-ten hiện tại và thay
                      thế bằng loại ăng-ten HGA đẳng hướng. Loại ăng ten này tập
                      trung năng lượng và truyền thẳng tới một vị trí nhất định.
                      Cơ chế hoạt động loại ăng-ten thích hợp với các nhiệm vụ
                      không gian. Tuy nhiên, bạn cần kiểm tra xem modem có hỗ
                      trợ cổng cắm có thể tháo rời được hay không.
                    </p>
                    <h5>Cập nhật ngay Firmware cho thiết bị Wi-fi</h5>
                    <p>
                      Cách dễ nhất để cải thiện hiệu suất của router bằng cách
                      đảm bảo firmware và driver của nó luôn được cập nhật. Bạn
                      nên thường xuyên kiểm tra trang web của nhà sản xuất để
                      tải về các bản cập nhật nhằm đảm bảo cho router luôn trong
                      điều kiện vận hành tốt nhất.
                    </p>
                    <h5>Thử tập trung tín hiệu bằng vỏ lon bia</h5>
                    <p>
                      Một số bề mặt kim loại phản xạ lại tín hiệu{" "}
                      <strong>Wi-fi</strong>, làm gián đoạn đường truyền của
                      mạng không dây khi thiết bị sử dụng một ăng-ten đẳng
                      hướng. Bạn có thể tận dụng đặc tính đó để tập trung tín
                      hiệu từ ăng-ten đẳng hướng nhằm mục đích hướng tín hiệu về
                      phía máy tính hay bàn làm việc của mình. Điều này đồng
                      nghĩa với việc bạn phải hy sinh vùng phủ sóng ở phía kia,
                      nhưng bù lại chúng ta có thể tăng cường{" "}
                      <strong>tín hiệu Wi-fi</strong> lên.
                    </p>
                    <p>
                      Cách làm khá đơn giản, bạn dùng kéo để cắt vỏ lon bia sao
                      cho trông giống như một đĩa radar. Lật úp miệng vỏ bia vừa
                      cắt qua cái ăng-ten của router và cố định nó lại bằng một
                      chút băng dính, nhớ xoay hướng của parabol về phía cần
                      phát đi xa nhất là được.
                    </p>
                    <h5>Chọn cách đặt ăng-ten router thích hợp</h5>
                    <p>
                      Chỉnh ăng-ten hướng lên trên để để bắt sóng theo chiều
                      ngang tốt hơn hoặc đặt ăng-ten hướng sang ngang để bắt
                      sóng theo chiều dọc tốt hơn.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/1/photo-1-16278202400532021856122.jpg"
                      alt="3, YẾU TỐ QUAN TRỌNG,TĂNG TỐC MẠNG WI-FI,WI-FI,SÓNG WI-FI,TĂNG TỐC MẠNG,TĂNG TỐC WI-FI,TÍN HIỆU WI-FI,"
                      note=""
                    />
                    <p>
                      Nếu nhà nhiều tầng, đặt ăng-ten router theo chiều ngang có
                      thể giúp các tầng trên bắt được sóng Wi-di tốt hơn. Đặt
                      ăng-ten hướng lên giúp sóng tới được những vị trí xa hơn
                      trong nhà.
                    </p>
                    <p>
                      Nếu router của bạn có 2 ăng-ten, đặt 1 ăng-ten hướng lên
                      và 1 ăng-ten nằm ngang.
                    </p>
                    <p>
                      Nếu router của bạn không có ăng-ten nào, đảm bảo bạn đặt
                      router đúng chiều thiết kế của nhà sản xuất (không bị lật
                      úp hoặc đặt nghiêng).
                    </p>
                    <h5>Đặt router ở vị trí có ít người</h5>
                    <h5>
                      Nước chặn sóng <strong>Wi-fi</strong>.
                    </h5>
                    <p>
                      Cơ thể con người hầu hết là nước vì vậy nếu trong phòng có
                      nhiều người thì những người này đều có thể trở thành vật
                      cản <strong>Wi-fi</strong>. Bạn có thể dễ dàng nhận thấy,
                      khả năng kết nối Internet bị chậm đi tại những nơi đông
                      người.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/1/photo-1-16278202411181635005458.jpg"
                      alt="4, YẾU TỐ QUAN TRỌNG,TĂNG TỐC MẠNG WI-FI,WI-FI,SÓNG WI-FI,TĂNG TỐC MẠNG,TĂNG TỐC WI-FI,TÍN HIỆU WI-FI,"
                      note=""
                    />
                    <p>
                      Dĩ nhiên bạn muốn có sóng <strong>Wi-fi</strong> tốt tại
                      những căn phòng mọi người thường tập trung sinh hoạt trong
                      nhà nhưng tất cả những người đó đều khiến tốc độ Internet
                      bị chậm.
                    </p>
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
