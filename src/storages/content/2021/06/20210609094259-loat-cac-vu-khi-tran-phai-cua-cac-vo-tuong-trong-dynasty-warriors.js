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
"timestamp": '09/06/2021 09:42 AM',
"title": 'Loạt các vũ khí trấn phái của các võ tướng trong Dynasty Warriors',
"description": 'Phương thiên họa kích hay bát xà mâu có lẽ đã rất quen thuộc với những người hâm mộ dòng game Tam Quốc.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/9/photo-1-1623236614015201115630.jpg',
"alt": 'Vu Khi, Tam Quoc, Dynasty Warriors, ',
"category": 'games',
"date": '09/06/2021',
"time": '09:42 AM',
"link": '/loat-cac-vu-khi-tran-phai-cua-cac-vo-tuong-trong-dynasty-warriors',
"zcomponent": 'page_20210609094259',
"filepath": './20210609094259-loat-cac-vu-khi-tran-phai-cua-cac-vo-tuong-trong-dynasty-warriors.js'
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
  "Loạt các vũ khí trấn phái của các võ tướng trong Dynasty Warriors";
const author = "DS";
const source = "Trí Thức Trẻ";
const timestamp = "09/06/2021 09:42 AM";
const description =
  "Phương thiên họa kích hay bát xà mâu có lẽ đã rất quen thuộc với những người hâm mộ dòng game Tam Quốc.";
const link =
  "loat-cac-vu-khi-tran-phai-cua-cac-vo-tuong-trong-dynasty-warriors";
const tagparam = ["vu-khi", "tam-quoc", "dynasty-warriors"];
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

export default function page_20210609094259() {
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
                    <p>1. Phương thiên họa kích – Lữ Bố</p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/9/photo-1-1623236588904499089836.jpg"
                      alt="Vu Khi, Tam Quoc, Dynasty Warriors, "
                      note=""
                    />
                    <p>
                      Phương thiên họa kích được biết đến như là một trong những
                      vũ khí nổi tiếng nhất gắn liền với Lữ Bố. Kích là loại
                      binh khí có lịch sử cổ xưa của người Trung Hoa và là
                      nguyên mẫu để phát triển ra thương hoặc giáo sau này.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Hình dáng của kích giúp cho người dùng có thể đâm, rạch,
                      đập như thương. Ngoài ra còn có thể chặt, móc, kéo cơ thể
                      hoặc vũ khí đối thủ với phần cán cứng hơn.
                    </p>
                    <p>
                      Phương thiên có nghĩa là ‘nghiêng lệch sang một bên’, họa
                      kích là ‘cây kích đem tai họa’, vì thế nhiều người cho
                      rằng cái tên ‘Phương thiên họa kích’ nhằm miêu tả vũ khí
                      chỉ có một mảnh thép nhưng khả năng sát thương lẫn hủy
                      diệt đều rất khủng khiếp.
                    </p>
                    <p>2. Thanh Long Yển Nguyệt Đao - Quan Vũ</p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/9/photo-1-1623237478067848134493.jpg"
                      alt="Vu Khi, Tam Quoc, Dynasty Warriors, "
                      note=""
                    />
                    <p>
                      Nhắc đến Quan Vũ, người ta sẽ nhớ ngay tới Thanh Long Yển
                      Nguyệt Đao. Đây là vũ khí trấn phái của Quan Vũ, mỗi khi
                      ông dùng vũ khí này chiến đấu thì được miêu tả là vạn
                      người không địch nổi.
                    </p>
                    <p>
                      Theo nhiều tài liệu ghi chép lại, Thanh Long Đao của Quan
                      Vũ nặng 82 cân thời xưa (khoảng 50 kg ngày nay). Thanh
                      Long Yển Nguyệt Đao đã được thợ rèn đệ nhất thiên hạ làm
                      ra và chỉ được rèn vào ngày trăng tròn.
                    </p>
                    <p>
                      Trong Tam quốc, Quan Vũ cùng chiếc đao này đã lấy mạng
                      không ít võ tướng. Sau khi Quan Vũ chết, Thanh Long Yển
                      Nguyệt Đao đã bị một tướng của Đông Ngô là Phan Chương
                      chiếm đoạt. Cuối cùng Quan Hưng con của Quân Vũ đã giết
                      Phan Chương để trả thù cho cha và lấy lại chiếc Thanh Long
                      Yển Nguyệt Đao này.
                    </p>
                    <p>3. Bát xà mâu – Trương Phi</p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/9/photo-1-1623236614015201115630.jpg"
                      alt="Vu Khi, Tam Quoc, Dynasty Warriors, "
                      note=""
                    />
                    <p>
                      Bát xà mâu là vũ khi được vị tướng nóng tính Trương Phi sử
                      dụng khi ra trận. Theo miêu tả, loại binh khí ngày được
                      chế tạo bằng thép ròng, cán mâu dài một trượng, mũi thường
                      dài 8 tấc, hai cạnh là lưỡi sắc bén và uốn lượn hình con
                      rắn.
                    </p>
                    <p>
                      Bát xà mâu được dùng để đâm, chém ngang với tốc độ cao
                      hoặc đôi khi còn được sử dụng để bổ và trượt dọc nhằm tước
                      vũ khí của đối phương. Các sử dụng đa dạng cộng với kích
                      thước cồng kềnh của loại vũ khí này đòi hỏi người dùng
                      phải kết hợp được sức mạnh, sự nhanh nhẹn, khả năng ứng
                      biến trong mỗi trận đấu thật tốt.
                    </p>
                    <p>
                      Với bát xà mâu trong tay, Trương Phi đã tung hoành trong
                      nhiều trận đánh nổi tiếng thời Tam Quốc như Lao Quan, Xích
                      Bích, vào Tây Xuyên diệt Lưu Chương.
                    </p>
                    <p>4. Uyên ương kiếm – Lưu Bị</p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/9/photo-1-16232367068611407095382.jpg"
                      alt="Vu Khi, Tam Quoc, Dynasty Warriors, "
                      note=""
                    />
                    <p>
                      Uyên ương kiếm còn có tên gọi khác là Song kiếm. Hình dáng
                      cặp kiếm này dài ba thước bảy tấc (khoảng 1,23m). Uyên
                      ương kiếm cùng với Thanh Long Yển Nguyệt đao vào Bát xà
                      mâu là bộ ba binh khí được chế tác ở cùng một nơi.
                    </p>
                    <p>
                      Trong Tam Quốc diễn nghĩa, nhân vật Lưu Bị không được khắc
                      họa như một anh hùng trên trận mạc, vì thế Uyên ương kiếm
                      cũng ít khi được nhắc đến. Lần hiếm hoi mà vũ khí này có
                      dịp phô diễn sức mạnh là trong trận Hổ Lao Quan (‘Tam anh
                      chiến Lữ Bố’).
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
