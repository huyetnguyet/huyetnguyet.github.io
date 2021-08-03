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
"title": 'Lộ cách thức bẻ khóa iPhone của cỗ máy khét tiếng trong giới bảo mật',
"description": 'Nổi danh trong giới bảo mật vì khả năng bẻ khóa iPhone, đây là lần đầu cách thức hoạt động của GrayKey lộ diện.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/26/photo-1-16247074555841400998645.png',
"alt": 'IPHONE,BẢO MẬT,BẺ KHÓA,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,',
"category": 'tech',
"date": '29/06/2021',
"time": '09:52 PM',
"link": '/lo-cach-thuc-be-khoa-iphone-cua-co-may-khet-tieng-trong-gioi-bao-mat',
"zcomponent": 'page_20210629215205',
"filepath": './20210629215205-lo-cach-thuc-be-khoa-iphone-cua-co-may-khet-tieng-trong-gioi-bao-mat.js'
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
  "Lộ cách thức bẻ khóa iPhone của cỗ máy khét tiếng trong giới bảo mật";
const author = "Nguyễn Hải";
const source = "Pháp luật & Bạn đọc";
const timestamp = "29/06/2021 09:52 PM";
const description =
  "Nổi danh trong giới bảo mật vì khả năng bẻ khóa iPhone, đây là lần đầu cách thức hoạt động của GrayKey lộ diện.";
const link =
  "lo-cach-thuc-be-khoa-iphone-cua-co-may-khet-tieng-trong-gioi-bao-mat";
const tagparam = [
  "IPHONE",
  "BẢO MẬT",
  "BẺ KHÓA",
  "CỘNG ĐỒNG MẠNG",
  "TIN TỨC GAME",
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

export default function page_20210629215205() {
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
                      Từ lâu hãng GrayShift đã nổi tiếng trên thế giới với công
                      cụ GrayKey có khả năng <strong>bẻ khóa</strong>{" "}
                      <strong>iPhone</strong>, nhưng rất ít người hiểu được cơ
                      chế vận hành của nó. Tuy nhiên mới đây các tài liệu hướng
                      dẫn về nó đột nhiên bị rò rỉ trên internet, giúp mọi người
                      có cái nhìn rõ ràng hơn về các khả năng của thiết bị này
                      cũng như cách nó hoạt động như thế nào.
                    </p>
                    <p>
                      Trước đó, nhiều thông tin cho biết, thiết bị phá khóa{" "}
                      <strong>iPhone</strong> hoặc iPad bằng cách dùng thuật
                      toán vét cạn (brute-force attack) để dò mật khẩu. Cho dù
                      đây không phải cách làm lý tưởng nhưng công cụ này đã
                      nhiều lần giúp lực lượng thực thi pháp luật giành quyền
                      truy cập vào những chiếc iPhone bị khóa mã.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/26/photo-1-1624707454587525579423.png"
                      alt="1, IPHONE,BẢO MẬT,BẺ KHÓA,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,"
                      note="Thiết bị phá khóa iPhone, GrayKey"
                    />
                    <p>
                      Hướng dẫn sử dụng bị rò rỉ dường như thuộc về Phòng cảnh
                      sát San Diego, được viết ra nhằm chỉ dẫn cho các sĩ quan
                      cách dùng thiết bị này và bị Motherboard tìm được. Tài
                      liệu yêu cầu người dùng "xác định xem liệu lực lượng chức
                      năng có được cho phép tìm kiếm trong thiết bị của Apple
                      hay không."
                    </p>
                    <p>
                      Trong đó tài liệu này mô tả các điều kiện khác nhau để
                      GrayKey có thể kết nối được: thiết bị đang bị tắt (hay còn
                      gọi là BFU – before First Unlock), điện thoại được bật lên
                      (After First Unlock hay AFU), thiết bị có màn hình bị hỏng
                      hay khi pin yếu.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/26/photo-1-16247074555841400998645.png"
                      alt="2, IPHONE,BẢO MẬT,BẺ KHÓA,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,"
                      note=""
                    />
                    <p>
                      Để phá khóa thiết bị, tài liệu cho biết: "GrayKey sẽ cài
                      đặt một đoạn mã (còn gọi là agent) khi thiết bị chỉ còn 2%
                      đến 3% pin." Đoạn mã này sẽ được dùng để vét cạn mật khẩu
                      của thiết bị nhưng yêu cầu <strong>iPhone</strong> phải
                      được duy trì nguồn điện cho đến khi tìm được mật khẩu.
                    </p>
                    <p>
                      Khi chạy GrayKey, người dùng có nhiều lựa chọn về loại dữ
                      liệu mà họ muốn thu thập trong <strong>iPhone</strong>. Dữ
                      liệu đó có thể bao gồm các siêu dữ liệu (metadata) trong
                      những file không thể truy cập, hoặc "trích xuất ngay lập
                      tức khi SE được mở khóa" – SE dường như viết tắt cho
                      Secure Enclave, phần lưu trữ các dữ liệu nhạy cảm như mật
                      khẩu, mã khóa trong iOS.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/26/photo-2-16247074560861898985586.png"
                      alt="3, IPHONE,BẢO MẬT,BẺ KHÓA,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,"
                      note=""
                    />
                    <p>
                      Một phần trong tài liệu hướng dẫn cũng mô tả cách thức
                      GrayKey dùng để vét cạn các mật khẩu bằng ký tự. Trong khi
                      nhiều người dùng <strong>iPhone</strong> chỉ dùng mật khẩu
                      hoàn toàn bằng số, mật khẩu bằng ký tự còn sử dụng cả các
                      chữ cái, mang lại nhiều lựa chọn hơn và thường khó bị vét
                      cạn hơn. Tuy nhiên, nếu thiết bị sử dụng mật khẩu ký tự
                      nhưng dưới dạng các từ ngữ có thể đọc được, việc{" "}
                      <strong>bẻ khóa</strong> cũng trở nên dễ dàng hơn khi
                      GrayKey có sẵn một danh sách dài các từ ngữ mà con người
                      có thể đọc được.
                    </p>
                    <p>
                      Danh sách này được cung cấp trong file có tên
                      "Crackstation-human-only.txt" chứa khoảng 1,5 tỷ từ và mật
                      khẩu. Tuy vậy, GrayKey cũng có thể sử dụng các danh sách
                      từ ngữ khác nhưng trong mỗi một thời điểm, chỉ có một danh
                      sách được sử dụng.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Một khi đoạn mã "agent" được cài đặt, chiếc{" "}
                      <strong>iPhone</strong> sẽ được đặt trong chế độ Airplane
                      và lúc này có thể ngắt kết nối với GrayKey.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/26/photo-3-1624707456626827813303.png"
                      alt="4, IPHONE,BẢO MẬT,BẺ KHÓA,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,"
                      note=""
                    />
                    <p>
                      Một tính năng khác của thiết bị được gọi là HideUI. Tính
                      năng này cho phép GrayKey cài đặt một đoạn mã khác vào
                      thiết bị nhằm bí mật ghi lại mật khẩu của người dùng trong
                      trường hợp lực lượng thực thi pháp luật bắt buộc phải trả
                      lại <strong>iPhone</strong> cho nghi phạm.
                    </p>
                    <p>
                      GrayKey và nhiều công ty khác trong ngành giống như đang
                      chơi trò mèo đuổi chuột với Apple khi tìm cách xâm nhập
                      vào những chiếc <strong>iPhone</strong> được khóa mã. Mỗi
                      khi Apple nâng cấp hệ điều hành hoặc lớp{" "}
                      <strong>bảo mật</strong> mới cho thiết bị của mình,
                      GrayShift và những hãng khác trong ngành cũng đồng thời
                      nâng cấp phương pháp của mình để vượt qua lớp mã hóa mới
                      đó.
                    </p>
                    <p>Tham khảo AppleInsider</p>
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
