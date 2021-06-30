import React from "react";
import "components/page.css";
import { AdsHorizontal, AdsVertical } from "components/adsMethods";
import {
  RandomFeature,
  RelationNews,
  RelationNewsInPage,
} from "components/methods";

import { Content, ContentImage, FacebookShareButton } from "components/content";

/* ---------------------------------------------------------------- */

/*

 {
"timestamp": '18/06/2021 01:00 PM',
"title": 'Worm là gì? Tại sao chúng lại nguy hiểm với máy tính?',
"description": 'Worm máy tính là một loại chương trình phần mềm độc hại có chức năng chính là lây nhiễm sang các máy tính khác trong khi vẫn hoạt động trên những hệ thống bị nhiễm.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/18/photo-1-1623999663289177940704.jpg',
"alt": 'WORM,PC,WORM MÁY TÍNH,HỆ ĐIỀU HÀNH WINDOWS,CHƯƠNG TRÌNH PHẦN MỀM,PHẦN MỀM ĐỘC HẠI,',
"category": 'tech',
"date": '18/06/2021',
"time": '01:00 PM',
"link": '/worm-la-gi-tai-sao-chung-lai-nguy-hiem-voi-may-tinh',
"zcomponent": 'page_20210618130029',
"filepath": './20210618130029-worm-la-gi-tai-sao-chung-lai-nguy-hiem-voi-may-tinh.js'
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
const title = "Worm là gì? Tại sao chúng lại nguy hiểm với máy tính?";
const author = "Nguyễn Thu Hà";
const source = "Pháp luật và bạn đọc";
const timestamp = "18/06/2021 01:00 PM";
const description =
  "Worm máy tính là một loại chương trình phần mềm độc hại có chức năng chính là lây nhiễm sang các máy tính khác trong khi vẫn hoạt động trên những hệ thống bị nhiễm.";
const link = "worm-la-gi-tai-sao-chung-lai-nguy-hiem-voi-may-tinh";
const tagparam = [
  "WORM",
  "PC",
  "WORM MÁY TÍNH",
  "HỆ ĐIỀU HÀNH WINDOWS",
  "CHƯƠNG TRÌNH PHẦN MỀM",
  "PHẦN MỀM ĐỘC HẠI",
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

export default function page_20210618130029() {
  return (
    <>
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
                    <strong>Worm</strong> máy tính là một loại{" "}
                    <strong>chương trình phần mềm</strong> độc hại có chức năng
                    chính là lây nhiễm sang các máy tính khác trong khi vẫn hoạt
                    động trên những hệ thống bị nhiễm.
                  </p>
                  <p>
                    <strong>Worm</strong> máy tính là{" "}
                    <strong>phần mềm độc hại</strong> tự sao chép để lây lan
                    sang các máy tính chưa bị nhiễm. Worm thường sử dụng các
                    phần tự động và vô hình đối với người dùng của hệ điều hành.
                    Thông thường, worm chỉ được chú ý khi sự sao chép không kiểm
                    soát của chúng tiêu tốn tài nguyên hệ thống, làm chậm hoặc
                    tạm dừng các tác vụ khác.
                  </p>
                  <h3>
                    <strong>Worm</strong> máy tính lây lan như thế nào?
                  </h3>
                  <p>
                    <strong>Worm</strong> máy tính lây lan mà không cần có sự
                    tương tác của người dùng. Tất cả những gì cần thiết là để{" "}
                    <strong>worm máy tính</strong> hoạt động trên hệ thống bị
                    nhiễm. Trước khi mạng được sử dụng rộng rãi, worm máy tính
                    đã lây lan qua các phương tiện lưu trữ bị nhiễm, chẳng hạn
                    như đĩa mềm, khi được gắn trên hệ thống, sẽ lây nhiễm sang
                    các thiết bị lưu trữ khác được kết nối với hệ thống. USB vẫn
                    là một vector phổ biến cho worm máy tính.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/18/photo-1-1623999851622914555493.jpg"
                    alt="1, WORM,PC,WORM MÁY TÍNH,HỆ ĐIỀU HÀNH WINDOWS,CHƯƠNG TRÌNH PHẦN MỀM,PHẦN MỀM ĐỘC HẠI,"
                    note="Worm máy tính tự sao chép để lây lan sang các máy tính chưa bị nhiễm"
                  />
                  <h3>
                    Cách hoạt động của <strong>worm</strong> máy tính
                  </h3>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/18/photo-1-1623999663289177940704.jpg"
                    alt="2, WORM,PC,WORM MÁY TÍNH,HỆ ĐIỀU HÀNH WINDOWS,CHƯƠNG TRÌNH PHẦN MỀM,PHẦN MỀM ĐỘC HẠI,"
                    note=""
                  />
                  <p>
                    <strong>Worm</strong> máy tính thường dựa vào các hoạt động
                    và lỗ hổng trong những giao thức mạng để lan truyền. Ví dụ,
                    worm WannaCry ransomware đã khai thác một lỗ hổng trong
                    phiên bản đầu tiên của giao thức chia sẻ tài nguyên Server
                    Message Block (SMBv1) được triển khai trong{" "}
                    <strong>hệ điều hành Windows</strong>. Sau khi hoạt động
                    trên một máy tính mới bị nhiễm,{" "}
                    <strong>phần mềm độc hại</strong> WannaCry sẽ bắt đầu một
                    cuộc tìm kiếm các nạn nhân tiềm năng mới trên mạng: Những hệ
                    thống phản hồi các yêu cầu SMBv1 do worm này thực hiện. Worm
                    có thể tiếp tục lây lan trong một tổ chức theo cách này. Khi
                    người mang theo thiết bị riêng (BYOD) bị nhiễm, worm này có
                    thể lây lan sang các mạng khác, cho phép tin tặc quyền truy
                    cập nhiều hơn.
                  </p>
                  <p>
                    <strong>Worm</strong> email hoạt động bằng cách tạo và gửi
                    thư đi đến tất cả các địa chỉ trong danh sách liên hệ của
                    người dùng. Các tin nhắn bao gồm một file thực thi độc hại
                    lây nhiễm vào hệ thống mới khi người nhận mở nó. Các worm
                    email thành công thường kết hợp những phương pháp social
                    engineering để nhắc người dùng mở file đính kèm.
                  </p>
                  <p>
                    Stuxnet, một trong những loại <strong>worm</strong> máy tính
                    khét tiếng nhất cho đến nay, bao gồm một thành phần worm lan
                    truyền <strong>phần mềm độc hại</strong> thông qua việc chia
                    sẻ các thiết bị USB bị nhiễm, cũng như phần mềm độc hại nhắm
                    vào hệ thống kiểm soát giám sát và thu thập dữ liệu (SCADA),
                    được sử dụng rộng rãi trong môi trường công nghiệp, bao gồm
                    các tiện ích điện, dịch vụ cấp nước, nhà máy xử lý nước thải
                    và nhiều nơi khác. <strong>Worm máy tính</strong> thuần túy
                    tự lan truyền từ hệ thống bị nhiễm sang hệ thống không bị
                    nhiễm, nên khó mà giảm thiểu khả năng bị hư hại từ những con
                    worm máy tính như vậy.
                  </p>
                  <p>
                    Một hệ thống bị nhiễm có thể trở nên không khả dụng hoặc
                    không đáng tin cậy do liên quan đến sự lan truyền của{" "}
                    <strong>worm</strong>, đồng thời{" "}
                    <strong>worm máy tính</strong> cũng được biết là làm gián
                    đoạn mạng thông qua sự bão hòa của các liên kết mạng với lưu
                    lượng độc hại.
                  </p>
                  <h3>
                    Các loại <strong>worm</strong> máy tính
                  </h3>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/18/photo-1-1623999897491658897978.jpg"
                    alt="3, WORM,PC,WORM MÁY TÍNH,HỆ ĐIỀU HÀNH WINDOWS,CHƯƠNG TRÌNH PHẦN MỀM,PHẦN MỀM ĐỘC HẠI,"
                    note=""
                  />
                  <p>
                    Có một số loại <strong>worm</strong> máy tính độc hại:
                  </p>
                  <p>
                    Virus máy tính hoặc <strong>worm</strong> hybrid là một phần
                    của <strong>phần mềm độc hại</strong> lây lan giống như một
                    worm, nhưng nó cũng sửa đổi code chương trình giống như một
                    loại virus - hoặc mang theo một số loại payload độc hại,
                    chẳng hạn như virus, ransomware hoặc một số loại phần mềm
                    độc hại khác.
                  </p>
                  <p>
                    <strong>Worm</strong> bot có thể được sử dụng để lây nhiễm
                    vào máy tính và biến chúng thành zombie hoặc bot, với mục
                    đích sử dụng chúng trong các cuộc tấn công phối hợp thông
                    qua botnet .
                  </p>
                  <p>
                    <strong>Worm</strong> IM lan truyền thông qua các dịch vụ
                    nhắn tin tức thời và khai thác quyền truy cập vào danh sách
                    liên hệ trên máy tính nạn nhân.
                  </p>
                  <RelationNewsInPage category={category} />
                  <p>
                    <strong>Worm</strong> email thường được phát tán dưới dạng
                    các file thực thi độc hại được đính kèm với những gì có vẻ
                    là thư email thông thường.
                  </p>
                  <p>
                    Cuối cùng, có một loại <strong>worm</strong> máy tính được
                    thiết kế để lan truyền trên các mạng với mục đích cung cấp
                    những bản vá cho các lỗ hổng bảo mật đã biết. Mặc dù loại
                    worm này đã được mô tả và thảo luận trong giới học thuật,
                    nhưng các ví dụ thực tế vẫn chưa được tìm thấy, rất có thể
                    là do khả năng gây hại không mong muốn đối với các hệ thống
                    phản ứng bất ngờ với phần mềm như vậy, lớn hơn khả năng loại
                    bỏ các lỗ hổng. Trong mọi trường hợp, việc sử dụng bất kỳ
                    phần mềm nào thay đổi hệ thống mà không có sự cho phép của
                    chủ sở hữu hệ thống sẽ khiến nhà xuất bản phải chịu nhiều
                    cáo buộc hình sự và dân sự khác nhau.
                  </p>
                  <h3>
                    Cách ngăn chặn <strong>worm</strong> máy tính
                  </h3>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/18/photo-1-16239999180281162938886.jpg"
                    alt="4, WORM,PC,WORM MÁY TÍNH,HỆ ĐIỀU HÀNH WINDOWS,CHƯƠNG TRÌNH PHẦN MỀM,PHẦN MỀM ĐỘC HẠI,"
                    note=""
                  />
                  <p>
                    {" "}
                    Người dùng nên thực hành tốt các biện pháp an ninh mạng để
                    bảo vệ mình khỏi bị nhiễm <strong>worm</strong> máy tính.
                    Các biện pháp sẽ giúp ngăn chặn nguy cơ lây nhiễm{" "}
                    <strong>worm máy tính</strong> bao gồm:
                  </p>
                  <p>
                    Luôn cập nhật hệ điều hành và tất cả các bản vá, cập nhật
                    phần mềm khác sẽ giúp giảm thiểu rủi ro do các lỗ hổng mới
                    được phát hiện. Sử dụng tường lửa sẽ giúp giảm khả năng{" "}
                    <strong>phần mềm độc hại</strong> xâm nhập vào hệ thống. Sử
                    dụng phần mềm diệt virus sẽ giúp ngăn phần mềm độc hại chạy.
                    Cẩn thận không nhấp vào file đính kèm, liên kết trong email
                    hoặc các ứng dụng nhắn tin khác có thể khiến hệ thống tiếp
                    xúc với phần mềm độc hại. Mã hóa file để bảo vệ dữ liệu nhạy
                    cảm được lưu trữ trên máy tính, máy chủ và thiết bị di động
                  </p>
                  <p>
                    Mặc dù một số <strong>worm</strong> được thiết kế để không
                    làm gì khác hơn là tự lây lan sang các hệ thống mới, nhưng
                    hầu hết các worm đều có liên quan đến virus, rootkit hoặc{" "}
                    <strong>phần mềm độc hại</strong> khác.
                  </p>
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
