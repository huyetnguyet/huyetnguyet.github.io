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
"timestamp": '11/08/2021 11:00 AM',
"title": 'Cả thanh xuân dùng máy tính, liệu bạn có biết hết những phím tắt "thần thánh" này?',
"description": 'Dùng Windows lâu năm, nhưng có những phím tắt đến bây giờ chúng ta mới biết.',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/10/base64-16286003709001840645289.png',
"alt": 'bạn có biết?,tổ hợp phím,tiết kiệm thời gian,đa chức năng,ứng dụng windows,',
"category": 'tech',
"date": '11/08/2021',
"time": '11:00 AM',
"link": '/ca-thanh-xuan-dung-may-tinh-lieu-ban-co-biet-het-nhung-phim-tat-than-thanh-nay',
"zcomponent": 'page_20210811110000',
"filepath": './20210811110000-ca-thanh-xuan-dung-may-tinh-lieu-ban-co-biet-het-nhung-phim-tat-than-thanh-nay.js'
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
const title =
  'Cả thanh xuân dùng máy tính, liệu bạn có biết hết những phím tắt "thần thánh" này?';
const author = "IVAN LÊ,";
const source = "Trí Thức Trẻ";
const timestamp = "11/08/2021 11:00 AM";
const description =
  "Dùng Windows lâu năm, nhưng có những phím tắt đến bây giờ chúng ta mới biết.";
const link =
  "ca-thanh-xuan-dung-may-tinh-lieu-ban-co-biet-het-nhung-phim-tat-than-thanh-nay";
const tagparam = [
  "bạn có biết?",
  "tổ hợp phím",
  "tiết kiệm thời gian",
  "đa chức năng",
  "ứng dụng windows",
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

export default function page_20210811110000() {
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
                      Phím nóng, hotkeys hay <strong>tổ hợp phím</strong> tắt là
                      cách tuyệt vời để <strong>tiết kiệm thời gian</strong>.
                      Với chúng, bạn không cần phải rời tay khỏi bàn phím, nhưng
                      vẫn thao tác mọi thứ trên máy tính theo ý muốn của mình.
                      Chúng giúp máy tính trở nên dễ dàng, thuận tiện và hiệu
                      quả hơn. Lưu ý rằng, phím Windows rất hữu ích thậm chí còn
                      tốt hơn rất nhiều so với phím Ctrl trong các ứng dụng{" "}
                      <strong>đa chức năng</strong> như Microsoft Office Word.
                    </p>
                    <p>
                      Chụp màn hình, sao chép vào khay nhớ tạm, màn hình ảo,...
                      Các phím tắt này sẽ giúp bạn làm việc trên Windows 10 hiệu
                      quả hơn nhiều.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/10/base64-16286003709001840645289.png"
                      alt="1, bạn có biết?,tổ hợp phím,tiết kiệm thời gian,đa chức năng,ứng dụng windows,"
                      note=""
                    />
                    <p>
                      Hotkeys này sẽ mở ra một menu chứa các mục để truy cập
                      nhanh vào các phần khác nhau bên trong hệ thống. Từ đây,
                      người dùng có thể giám sát việc bật tắt máy tính hoặc
                      nguồn điện của nó, bật công cụ tìm kiếm, kích hoạt trình
                      quản lý tác vụ và hơn thế nữa. Bạn sẽ không phải vào menu
                      Start và lục từng ngõ ngách Setting.
                    </p>

                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/10/base64-16286023735671902508115.png"
                      alt="2, bạn có biết?,tổ hợp phím,tiết kiệm thời gian,đa chức năng,ứng dụng windows,"
                      note=""
                    />
                    <p>
                      Sự kết hợp này sẽ mở ra lịch sử khay nhớ tạm, cho phép bạn
                      lưu trữ nhiều mục để sử dụng sau này. Để kích hoạt khay
                      nhớ tạm, bạn cần di chuyển nút "Bật" sang vị trí hoạt
                      động. trong Tùy chọn {">"} Hệ thống {">"} Bảng nhớ tạm.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/10/base64-16286011002251734505208.png"
                      alt="3, bạn có biết?,tổ hợp phím,tiết kiệm thời gian,đa chức năng,ứng dụng windows,"
                      note=""
                    />
                    <p>
                      Tạm biệt ứng dụng ghi hình cho Windows kiểu như Bandicam.
                      Phím tắt này sẽ mở Xbox Game Bar. Đây là một{" "}
                      <strong>ứng dụng Windows</strong> 10 được tích hợp sẵn để
                      ghi lại và phát mọi thứ đang diễn ra trên màn hình. Thanh
                      trò chơi cũng cho phép bạn chụp ảnh, quay lại màn hình mà
                      không cần cài đặt thêm bất kỳ ứng dụng nào. Ngoài ra, để
                      chụp nhanh màn hình sẽ dùng tổ hợp Win+Alt+Prnscr hay để
                      quay lại màn hình sẽ dùng Win+Alt+R. Rắc rối đúng không,
                      bạn chỉ cần dùng Win+G và các thao tác khác có sẵn trên
                      thanh công cụ đó, rất tiện.
                    </p>

                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/10/base64-1628601488329320984517.png"
                      alt="4, bạn có biết?,tổ hợp phím,tiết kiệm thời gian,đa chức năng,ứng dụng windows,"
                      note=""
                    />
                    <p>
                      Hotkeys này đưa màn hình máy tính của bạn về màn hình
                      khóa. Để quay lại hệ thống một lần nữa, bạn sẽ cần đăng
                      nhập (điền mật khẩu nếu có). Phím tắt này rất hữu ích cho
                      những người dùng thường xuyên vắng mặt tại nơi làm việc và
                      đồng thời không muốn đồng nghiệp bên cạnh "tò mò" xem mình
                      đang bật YouTube hay không.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/10/base64-16286016628221206585178.png"
                      alt="5, bạn có biết?,tổ hợp phím,tiết kiệm thời gian,đa chức năng,ứng dụng windows,"
                      note=""
                    />
                    <p>
                      Với sự kết hợp này, bạn có thể mở các chương trình được
                      ghim vào thanh tác vụ. Các con số tương ứng với các phím
                      tắt từ trái sang phải - trong ví dụ bên dưới, phím tắt Win
                      + 1 mở trình duyệt Microsoft Edge, Win + 2 mở My PC và Win
                      + 3 mở Microsoft Store...
                    </p>
                    <RelationNewsInPage category={category} />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/10/base64-1628601760565578645440.png"
                      alt="6, bạn có biết?,tổ hợp phím,tiết kiệm thời gian,đa chức năng,ứng dụng windows,"
                      note=""
                    />
                    <p>
                      Sự kết hợp này sẽ mở ra trung tâm thông báo tích hợp sẵn
                      của Windows 10, nơi hiển thị các cảnh báo cho các ứng dụng
                      đang được sử dụng. Hơn nữa, cũng có các công tắc bật tắt
                      để chuyển đổi nhanh chóng các khả năng của máy tính, bao
                      gồm kết nối mạng.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/10/base64-1628601919518671465483.png"
                      alt="7, bạn có biết?,tổ hợp phím,tiết kiệm thời gian,đa chức năng,ứng dụng windows,"
                      note=""
                    />
                    <p>
                      Hotkeys này cố định cửa sổ đang hoạt động vào một bên của
                      màn hình. Nếu bạn nhấn Win + →, nó sẽ được gắn ở phía bên
                      phải của giao diện hệ thống; nếu Win + ←, thì nó sẽ tự
                      động được từ hóa sang trái. Điều này thuận tiện cho việc
                      sử dụng đa nhiệm ứng dụng trên một màn hình rộng.
                    </p>

                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/10/base64-16286020228691554789514.png"
                      alt="8, bạn có biết?,tổ hợp phím,tiết kiệm thời gian,đa chức năng,ứng dụng windows,"
                      note=""
                    />
                    <p>
                      Phím tắt hiển thị tất cả các màn hình ảo đang chạy. Sau
                      khi sử dụng kết hợp này, người dùng có thể tạo một màn
                      hình mới hoặc đóng một màn hình không còn được sử dụng
                      nữa. Rất tiện dụng để kiểm soát đa nhiệm của bạn.
                    </p>

                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/10/base64-1628602262989121883280.png"
                      alt="9, bạn có biết?,tổ hợp phím,tiết kiệm thời gian,đa chức năng,ứng dụng windows,"
                      note=""
                    />
                    <p>
                      Phím tắt cho phép bạn nhanh chóng chuyển đổi giữa các màn
                      hình ảo. Nếu người dùng cần chuyển đến màn hình tiếp theo
                      thì cần nhấn Win + Ctrl + →, nếu cần quay lại màn hình
                      trước đó - Win + Ctrl + ←. Còn cách tạo ra màn hình ảo
                      (giống hệ điều hành MacOS) cũng rất đơn giản: Bạn ấn
                      Win+Tab và nhấn vào nút + New Desktop góc phải phía trên
                      màn hình.
                    </p>
                    <p>
                      Hy vọng rằng, sau bài viết này, các bạn sẽ biết thêm nhiều
                      phím tắt hay ho và này nọ trên Windows. Chúc các bạn thành
                      công!
                    </p>
                    <p>Theo: Internet</p>
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
