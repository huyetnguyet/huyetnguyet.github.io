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
"timestamp": '29/06/2021 09:52 PM',
"title": 'Hướng dẫn cách kiểm tra xem máy tính của bạn có cài được Windows 11 hay không',
"description": 'Windows 11 sẽ sớm ra mắt.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/26/untitled-16246844690631257928528.png',
"alt": 'GÃ KHỔNG LỒ,CÀI ĐẶT WINDOWS,WINDOWS 11,WINDOWS 10,',
"category": 'tech',
"date": '29/06/2021',
"time": '09:52 PM',
"link": '/huong-dan-cach-kiem-tra-xem-may-tinh-cua-ban-co-cai-duoc-windows-11-hay-khong',
"zcomponent": 'page_20210629215227',
"filepath": './20210629215227-huong-dan-cach-kiem-tra-xem-may-tinh-cua-ban-co-cai-duoc-windows-11-hay-khong.js'
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
  "Hướng dẫn cách kiểm tra xem máy tính của bạn có cài được Windows 11 hay không";
const author = "Đỗ Kỷ";
const source = "Pháp luật và bạn đọc";
const timestamp = "29/06/2021 09:52 PM";
const description = "Windows 11 sẽ sớm ra mắt.";
const link =
  "huong-dan-cach-kiem-tra-xem-may-tinh-cua-ban-co-cai-duoc-windows-11-hay-khong";
const tagparam = ["GÃ KHỔNG LỒ", "CÀI ĐẶT WINDOWS", "WINDOWS 11", "WINDOWS 10"];
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

export default function page_20210629215227() {
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
                      Trong sự kiện vừa diễn ra, Microsoft đã chính thức trình
                      làng <strong>Windows 11</strong> . Để thuận tiện cho người
                      dùng trải nghiệm, <strong>gã khổng lồ</strong> phần mềm
                      còn ra mắt thêm một công cụ giúp người dùng kiểm tra xem
                      máy tính có đủ điều kiện để{" "}
                      <strong>cài đặt Windows</strong> 11 hay không.
                    </p>
                    <p>
                      Công cụ này mang tên Windows PC Health Check và Microsoft
                      cho phép người dùng tải về miễn phí. Cách sử dụng công cụ
                      này như sau:
                    </p>
                    <p>
                      Bước 1: Tìm kiếm và tải về công cụ Windows PC Health Check
                      tại đây.
                    </p>
                    <p>
                      Bước 2: Sau khi tải xong, các bạn nhấn đúp chuột vào tệp
                      WindowsPCHealthCheckSetup.msi để chạy trình cài đặt.
                    </p>
                    <p>
                      Bước 3: Tích vào dòng I accept the terms in the License
                      Agreement sau đó nhấn Install.
                    </p>
                    <p>
                      Bước 4: Bạn chờ quá trình cài đặt hoàn thành rồi nhấn
                      Finish để mở Windows PC Health Check lên.
                    </p>
                    <p>
                      Bước 5: Đây là giao diện của Windows PC Health Check, bạn
                      có thể thấy thông tin cơ bản của máy tính ở thanh bên
                      trái. Ở thanh bên phải có các tùy chọn như kiểm tra xem
                      máy tính của bạn có chạy đượ <strong>Windows 11</strong>{" "}
                      không, tùy chọn sao lưu và đồng bộ, kiểm tra cập nhật
                      Windows, tình trạng dung lượng lưu trữ và thông tin thời
                      gian đăng nhập.
                    </p>
                    <p>
                      Bước 6: Để kiểm tra xem máy có đủ điều kiện chạy{" "}
                      <strong>Windows 11</strong> hay không bạn hãy nhấn vào nút
                      Check now có nền màu xanh.
                    </p>
                    <p>
                      Sau khi nhấn nút, kết quả sẽ hiện ra gần như ngay lập tức.
                      Tuy nhiên, theo Quantrimang kết quả mà công cụ này đưa ra
                      chưa được chính xác cho lắm khi mà cấu hình như trong ảnh
                      vẫn không đủ điều kiện để <strong>cài đặt Windows</strong>{" "}
                      11.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Tại sao máy tính cấu hình khủng vẫn bị báo không thể chạy{" "}
                      <strong>Windows 11</strong>?
                    </p>
                    <p>
                      Thực tế, Microsoft đã có một chút "lươn lẹo" trong vấn đề
                      này. Trên trang giới thiệu về <strong>Windows 11</strong>,{" "}
                      <strong>gã khổng lồ</strong> phần mềm tuyên bố cấu hình
                      tối thiểu để chạy Windows 11 là phải có TPM (Trusted
                      Platform Module) 2.0. Phiên bản mới TPM này vừa được ra
                      mắt nên hầu như các máy tính ra mắt trước năm 2017 sẽ
                      không có.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/26/photo-1-1624684694226866448810.jpg"
                      alt="1, GÃ KHỔNG LỒ,CÀI ĐẶT WINDOWS,WINDOWS 11,WINDOWS 10,"
                      note="Cấu hình tối thiểu để chạy Windows 11"
                    />
                    <p>
                      Tuy nhiên, trên trang nội bộ của mình, Micrososft lại chia
                      cấu hình tối thiểu để <strong>cài đặt Windows</strong> 11
                      ra làm 2 tầng là Hard Floor và Soft Floor. Những thiết bị
                      không đáp ứng Hard Floor sẽ không thể cài đặt, cập nhật
                      lên <strong>Windows 11</strong>. Trong khi đó, những máy
                      tính không đáp ứng Soft Floor sẽ nhận được khuyến cáo
                      không nên cài đặt, cập nhật nhưng vẫn có thể cài đặt, cập
                      nhật bình thường.
                    </p>
                    <p>
                      Trong phần Hard Floor, yêu cầu để cài đặt được{" "}
                      <strong>Windows 11</strong> chỉ là có tính năng TMP 1.2
                      kết hợp với SecureBootCapable mà thôi. Yêu cầu TPM 2.0 nằm
                      trong phần Soft Floor.
                    </p>
                    <p>
                      Có vẻ như công cụ Windows PC Health Check kiểm tra máy
                      tính của người dùng theo tiêu chuẩn TPM 2.0 và thông báo
                      sai lệch cho người dùng. Điều này khiến rất nhiều người
                      phàn nàn rằng dù sở hữu máy tính cấu hình khủng nhưng vẫn
                      không đủ điều kiện <strong>cài đặt Windows</strong> 11.
                      Thậm chí, có người còn cài đặt thành công{" "}
                      <strong>Windows 11</strong> (bản dev) nhưng khi chạy
                      Windows PC Health Check vẫn nhận được thông báo "Không thể
                      chạy Windows 11".
                    </p>
                    <p>
                      Ngoài ra, nếu máy tính của bạn có TPM 2.0 và SecureBoot
                      nhưng chưa kích hoạt trong BIOS thì cũng dẫn tới lỗi này.
                    </p>
                    <p>
                      Cập nhật ngày 26/6: Microsoft đã nâng cấp ứng dụng Windows
                      PC Health Check để hiển thị lý do tại sao máy tính của bạn
                      không đủ điều kiện cài <strong>Windows 11</strong>.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/26/untitled-16246844690631257928528.png"
                      alt="2, GÃ KHỔNG LỒ,CÀI ĐẶT WINDOWS,WINDOWS 11,WINDOWS 10,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/26/untitled-1624684591479336548809.png"
                      alt="3, GÃ KHỔNG LỒ,CÀI ĐẶT WINDOWS,WINDOWS 11,WINDOWS 10,"
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
