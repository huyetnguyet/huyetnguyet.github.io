import React from "react";
import "components/page.scss";
import { AdsHorizontal, AdsVertical } from "components/adsMethods";
import {
  RandomFeature,
  RelationNews,
  RelationNewsInPage,
} from "components/methods";

import {
  Content,
  ContentImage,
  FacebookShareButton,
} from "components/content";

import { Helmet } from "react-helmet";



/* ---------------------------------------------------------------- */

/*

 {
"timestamp": '04/08/2021 06:59 PM',
"title": 'Hướng dẫn reset modem để sóng Wi-fi mạnh hơn, ổn định hơn',
"description": 'Một phương pháp đơn giản giúp sóng Wi-fi ở nhà bạn luôn ổn định.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/8/4/photo-1-1628072573804417190587.jpg',
"alt": 'MODEM,MODEM WI-FI,SÓNG WI-FI,WI-FI,WIFI,MODEM WIFI,KẾT NỐI INTERNET,',
"category": 'tech',
"date": '04/08/2021',
"time": '06:59 PM',
"link": '/huong-dan-reset-modem-de-song-wi-fi-manh-hon-on-dinh-hon',
"zcomponent": 'page_20210804185950',
"filepath": './20210804185950-huong-dan-reset-modem-de-song-wi-fi-manh-hon-on-dinh-hon.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = 'tech';
const categoryLink = '/tech';
const title = 'Hướng dẫn reset modem để sóng Wi-fi mạnh hơn, ổn định hơn';
const author = 'Nguyễn Thu Hà';
const source = 'Pháp luật và bạn đọc';
const timestamp = '04/08/2021 06:59 PM';
const description = 'Một phương pháp đơn giản giúp sóng Wi-fi ở nhà bạn luôn ổn định.';
const link = 'huong-dan-reset-modem-de-song-wi-fi-manh-hon-on-dinh-hon';
const tagparam = ["MODEM","MODEM WI-FI","SÓNG WI-FI","WI-FI","WIFI","MODEM WIFI","KẾT NỐI INTERNET",];
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

export default function page_20210804185950() {
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
              <div className="author">{author}</div> - Theo {source} | {timestamp}
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
                  <div className="contentBodyLeft"><p>Quá trình reset sẽ khôi phục <strong>modem</strong> về cài đặt mặc định ban đầu. Việc này cũng sẽ xóa mọi cài đặt tùy chỉnh mà bạn có thể đã thay đổi, bao gồm thiết lập địa chỉ IP tĩnh , DNS, mật khẩu được cá nhân hóa, cài đặt <strong>Wi-fi</strong>, cài đặt định tuyến và DHCP . Nếu bạn có cài đặt tùy chỉnh, bạn có thể sao lưu cài đặt của mình trước khi thực hiện reset lại modem và sau đó khôi phục lại chúng sau khi quá trình reset hoàn tất.</p>
<p>Khi nào cần reset <strong>modem</strong> Wi-fi</p>
<p>Trước khi khám phá cách reset lại <strong>modem</strong> <strong>Wi-fi</strong>, điều quan trọng là phải thảo luận về thời điểm thích hợp để thực hiện khôi phục cài đặt gốc. Nếu modem của bạn không hoạt động bình thường hoặc nếu bạn đã thay đổi một số cài đặt mà không thể hoàn tác, thì có thể đã đến lúc reset modem về cài đặt mặc định.</p>
<p>Tuy nhiên, trước khi thực hiện việc này, bạn nên khởi động lại thiết bị trước. Nếu bạn chưa thử khởi động lại <strong>modem</strong> của mình. Khôi phục cài đặt gốc hoàn toàn sẽ đưa modem trở về cài đặt xuất xưởng và có thể khắc phục các sự cố sau:</p>
<p>- Sự cố chơi game </p>
<p>- Lỗi định tuyến </p>
<p>- Lỗi không thể <strong>kết nối Internet</strong> </p>
<p>- Tốc độ kết nối chậm </p>
<p>- VOIP bị giật </p>
<p>- Sự cố kết nối cổng </p>
<p>- Sự cố mạng không dây </p>
<p>- Xung đột thiết bị</p>
<p>Cách reset lại modem</p>
<p>Phương pháp ưa thích để reset <strong>modem</strong> là đăng nhập vào giao diện cài đặt người dùng. Nếu không muốn sử dụng tùy chọn này, bạn có thể thực hiện theo cách thủ công thông qua nút Reset ở mặt sau của modem.</p>
<p>Cách reset <strong>modem</strong> thông qua cài đặt người dùng (Ưu tiên)</p>
<p>1. Kết nối một thiết bị, chẳng hạn như máy tính hoặc máy tính bảng, với Internet thông qua <strong>Wi-fi</strong> hoặc sử dụng cáp Ethernet được kết nối với <strong>modem</strong>.</p>
<p>2. Mở trình duyệt web và nhập http://192.168.0.1 vào trường địa chỉ web.</p>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/4/photo-1-16280728386211783097618.jpg' alt='1, MODEM,MODEM WI-FI,SÓNG WI-FI,WI-FI,WIFI,MODEM WIFI,KẾT NỐI INTERNET,' note='Nhập URL cho giao diện người dùng modem'/>
<p>3. Đăng nhập vào giao diện cài đặt của <strong>modem</strong> (Modem GUI) bằng tên người dùng và mật khẩu admin. Lưu ý rằng chúng khác với tên mạng không dây (SSID) và mật khẩu <strong>Wi-fi</strong> (khóa bảo mật).</p>
<p>Lưu ý: Tìm tên người dùng và mật khẩu admin trên nhãn dán <strong>modem</strong>.</p>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/4/photo-1-1628072475597217086451.jpg' alt='2, MODEM,MODEM WI-FI,SÓNG WI-FI,WI-FI,WIFI,MODEM WIFI,KẾT NỐI INTERNET,' note='Đăng nhập vào giao diện modem bằng tên người dùng và mật khẩu admin'/>
<p>4. Chọn biểu tượng Utilities trong menu chính.</p>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/4/photo-1-1628072510431287885339.jpg' alt='3, MODEM,MODEM WI-FI,SÓNG WI-FI,WI-FI,WIFI,MODEM WIFI,KẾT NỐI INTERNET,' note='Menu Utilities trong GUI modem'/>
<RelationNewsInPage category={category} /><p>5. Chọn "Restore Defaults" từ menu ở phía bên trái.</p>
<p>6. Chọn "Restore <strong>Modem</strong> to Factory Default State".</p>
<p>Người dùng nâng cao cũng có thể chọn chỉ khôi phục một tập hợp con các cài đặt ở đây, chẳng hạn như thông tin xác thực admin, thông tin xác thực PPP, cài đặt không dây, v.v...</p>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/4/photo-1-16280725242151074631973.jpg' alt='4, MODEM,MODEM WI-FI,SÓNG WI-FI,WI-FI,WIFI,MODEM WIFI,KẾT NỐI INTERNET,' note='Menu tiện ích modem - Khôi phục các tùy chọn mặc định'/>
<p>7. Chờ từ 3 đến 5 phút trong khi <strong>modem</strong> hoàn tất quá trình khôi phục cài đặt gốc.</p>
<p>8. Khi hoàn tất, đèn nguồn sẽ lại chuyển sang màu cam và bạn sẽ phải thực hiện quá trình kích hoạt <strong>modem</strong> như khi thiết lập nó lần đầu tiên. Bạn có thể được yêu cầu cung cấp thông tin đăng nhập tài khoản để cấu hình modem của mình.</p>
<p>9. Khi đèn Internet chuyển sang màu xanh lục, bạn sẽ có thể truy cập Internet.</p>
<p>10. Tất cả các thiết bị đã kết nối trước đây sẽ cần được kết nối lại với mạng <strong>Wi-fi</strong>.</p>
<p>Cách reset <strong>modem</strong> theo cách thủ công bằng nút Reset</p>
<p>Nút Reset thường có màu đỏ và có thể được tìm thấy ở mặt sau của <strong>modem</strong>. Để reset lại modem bằng nút này, hãy làm theo các bước sau:</p>
<p>1. Sau khi cắm và bật nguồn <strong>modem</strong>, nhấn vào nút Reset (sử dụng kẹp giấy hoặc đầu bút uốn cong) cho đến khi bạn cảm thấy hoặc nghe thấy tiếng tách nhẹ. Giữ nó trong 10 giây.</p>
<p>2. Nhả nút khi đèn nguồn chuyển sang màu cam.</p>
<p>Lưu ý rằng nếu bạn tiếp tục nhấn nút Reset trong 15 giây, thì đèn nguồn sẽ chuyển sang màu đỏ và <strong>modem</strong> của bạn sẽ khởi động lại. Nếu điều này xảy ra, bạn sẽ cần đợi cho quá trình khởi động lại hoàn tất, sau đó thử reset lại.</p>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/4/photo-1-16280725430492041730503.jpg' alt='5, MODEM,MODEM WI-FI,SÓNG WI-FI,WI-FI,WIFI,MODEM WIFI,KẾT NỐI INTERNET,' note='Nút Reset trên modem C4000'/>
<p>3. Chờ từ 3 đến 5 phút trong khi <strong>modem</strong> hoàn tất quá trình khôi phục cài đặt gốc.</p>
<p>4. Khi hoàn tất, đèn nguồn sẽ lại chuyển sang màu cam và bạn sẽ phải thực hiện quá trình kích hoạt <strong>modem</strong> như khi thiết lập nó lần đầu tiên. Bạn có thể được yêu cầu cung cấp thông tin đăng nhập tài khoản để cấu hình modem của mình.</p>
<p>5. Khi đèn internet chuyển sang màu xanh lục, bạn sẽ có thể truy cập Internet.</p>
<p>6. Tất cả các thiết bị đã kết nối trước đó sẽ cần được kết nối lại với mạng <strong>Wi-fi</strong>.</p>
<p>Lưu ý quan trọng: Nếu bạn đã tùy chỉnh thông tin đăng nhập <strong>modem</strong> của mình tại bất kỳ thời điểm nào, việc thực hiện khôi phục cài đặt gốc sẽ khiến tên mạng ( SSID ) và mật khẩu trở lại như khi bạn nhận được modem lần đầu tiên. Chúng được hiển thị trên nhãn dán modem và bạn sẽ cần sử dụng các thông tin đăng nhập ban đầu này vào lần đầu tiên đăng nhập lại mạng.</p>
<p></p>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/4/photo-1-1628072573804417190587.jpg' alt='6, MODEM,MODEM WI-FI,SÓNG WI-FI,WI-FI,WIFI,MODEM WIFI,KẾT NỐI INTERNET,' note=''/>
                    </div>
                  <AdsHorizontal />
                </div></div>

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
