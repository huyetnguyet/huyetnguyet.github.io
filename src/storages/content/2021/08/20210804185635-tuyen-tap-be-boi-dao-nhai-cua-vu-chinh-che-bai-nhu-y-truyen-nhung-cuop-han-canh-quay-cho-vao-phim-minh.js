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
"timestamp": '04/08/2021 06:56 PM',
"title": '"Tuyển tập" bê bối đạo nhái của Vu Chính: Chê bai Như Ý Truyện nhưng "cướp" hẳn cảnh quay cho vào phim mình?',
"description": 'Các bộ phim truyền hình do Vu Chính sản xuất không ít lần dính nghi án đạo nhái, vay mượn ý tưởng.',
"src": 'https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/3/photo-1-1628001417737353057620.jpg',
"alt": 'phim Hoa ngữ,Phim truyền hình,phim truyền hình Hoa ngữ,phim truyền hình trung quốc,phim trung quốc,Thâm cung nội chiến,Xa Thi Mạn,trương khả di,Hậu Cung Như Ý Truyện (2018),hậu cung chân hoàn truyện (2011),vu chính,',
"category": 'news',
"date": '04/08/2021',
"time": '06:56 PM',
"link": '/tuyen-tap-be-boi-dao-nhai-cua-vu-chinh-che-bai-nhu-y-truyen-nhung-cuop-han-canh-quay-cho-vao-phim-minh',
"zcomponent": 'page_20210804185635',
"filepath": './20210804185635-tuyen-tap-be-boi-dao-nhai-cua-vu-chinh-che-bai-nhu-y-truyen-nhung-cuop-han-canh-quay-cho-vao-phim-minh.js'
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
  '"Tuyển tập" bê bối đạo nhái của Vu Chính: Chê bai Như Ý Truyện nhưng "cướp" hẳn cảnh quay cho vào phim mình?';
const author = "SIXTEENTEN,";
const source = "Trí Thức Trẻ";
const timestamp = "04/08/2021 06:56 PM";
const description =
  "Các bộ phim truyền hình do Vu Chính sản xuất không ít lần dính nghi án đạo nhái, vay mượn ý tưởng.";
const link =
  "tuyen-tap-be-boi-dao-nhai-cua-vu-chinh-che-bai-nhu-y-truyen-nhung-cuop-han-canh-quay-cho-vao-phim-minh";
const tagparam = [
  "phim Hoa ngữ",
  "Phim truyền hình",
  "phim truyền hình Hoa ngữ",
  "phim truyền hình trung quốc",
  "phim trung quốc",
  "Thâm cung nội chiến",
  "Xa Thi Mạn",
  "trương khả di",
  "Hậu Cung Như Ý Truyện (2018)",
  "hậu cung chân hoàn truyện (2011)",
  "vu chính",
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

export default function page_20210804185635() {
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
                      Sau thành công của hàng loạt{" "}
                      <strong>phim truyền hình</strong>,{" "}
                      <strong>Vu Chính</strong> nhanh chóng trở thành một trong
                      những nhà sản xuất phim có tiếng của xứ Trung, góp phần
                      lăng xê tên tuổi cho hàng loạt diễn viên đình đám. Nhưng
                      quả nhiên "lắm tài thì nhiều tật", vị đạo diễn kiêm biên
                      kịch này năm lần, bảy lượt bị vạch trần hành vi đạo nhái ý
                      tưởng của các dự án <strong>phim Hoa ngữ</strong> khác,
                      chọn lịch phát sóng cùng các bom tấn tương đồng nội dung
                      để "hưởng ké" sự nổi tiếng.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/3/photo-1-1628001465233747038973.jpg"
                      alt="1, phim Hoa ngữ,Phim truyền hình,phim truyền hình Hoa ngữ,phim truyền hình trung quốc,phim trung quốc,Thâm cung nội chiến,Xa Thi Mạn,trương khả di,Hậu Cung Như Ý Truyện (2018),hậu cung chân hoàn truyện (2011),vu chính,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/3/photo-1-1628001417737353057620.jpg"
                      alt="2, phim Hoa ngữ,Phim truyền hình,phim truyền hình Hoa ngữ,phim truyền hình trung quốc,phim trung quốc,Thâm cung nội chiến,Xa Thi Mạn,trương khả di,Hậu Cung Như Ý Truyện (2018),hậu cung chân hoàn truyện (2011),vu chính,"
                      note="Ngoài các tác phẩm truyền hình đình đám,
                      Vu Chính còn được khán giả nhớ mặt vì vay
                      mượn ý tưởng quá nhiều lần"
                    />
                    <p>
                      Dưới đây là những lần <strong>Vu Chính</strong> bị phát
                      hiện đạo nhái ý tưởng, sử dụng mưu mẹo để tăng độ hot cho
                      những "đứa con tinh thần" của mình.
                    </p>
                    <h5>
                      "Tham khảo" tình tiết trong loạt phim nổi tiếng của TVB
                    </h5>
                    <p>
                      Trong <strong>Thâm Cung Nội Chiến</strong>, Nhĩ Thuần (
                      <strong>Xa Thi Mạn</strong>) đã đặt một chiếc kim bên
                      trong giày của An Xuyến (<strong>Trương Khả Di</strong>)
                      với mục đích là để cảnh báo cô. Tuy nhiên sau này, Nhĩ
                      Thuần cho rằng cô đã không may rơi chiếc kim đó vào giày
                      của An Xuyến. Thật bất ngờ, một kịch bản tương tự đã được
                      tạo ra trong Đại Thanh Hậu Cung, nhưng thay vì là một
                      chiếc giày thì nhân vật đã giấu kim trong váy. Chưa dừng
                      lại, bộ phim này bị chỉ trích vì có tuyến nhân vật xảo
                      quyệt, các âm mưu trả thù và cốt truyện khá tương đồng với
                      Thâm Cung Nội Chiến.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/3/photo-1-16279809213371838249041.jpg"
                      alt="3, phim Hoa ngữ,Phim truyền hình,phim truyền hình Hoa ngữ,phim truyền hình trung quốc,phim trung quốc,Thâm cung nội chiến,Xa Thi Mạn,trương khả di,Hậu Cung Như Ý Truyện (2018),hậu cung chân hoàn truyện (2011),vu chính,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/3/photo-1-1627980992157857666667.jpeg"
                      alt="4, phim Hoa ngữ,Phim truyền hình,phim truyền hình Hoa ngữ,phim truyền hình trung quốc,phim trung quốc,Thâm cung nội chiến,Xa Thi Mạn,trương khả di,Hậu Cung Như Ý Truyện (2018),hậu cung chân hoàn truyện (2011),vu chính,"
                      note=""
                    />
                    <p>
                      "Fan cứng" của <strong>Thâm Cung Nội Chiến</strong> không
                      mất quá nhiều thời gian để nhận ra sự tương đồng của bộ
                      phim với Đại Thanh Hậu Cung của Vu Chính
                    </p>
                    <p>
                      Nếu như <strong>Vu Chính</strong> mất tận hơn hai năm để
                      tham khảo ý tưởng <strong>Thâm Cung Nội Chiến</strong> thì
                      với Sở Lưu Hương Truyền Kỳ, nhà sản xuất này chỉ cần một
                      năm để tái tạo lại những gì mà Bão Cát từng làm được.
                      Trong phim của TVB, Diêm Vạn Hy (Lâm Bảo Di) đã bị kẻ thù
                      đe dọa phải chọn một trong hai người mà anh yêu thương
                      nhất, người được chọn sẽ chết đau đớn. Tình tiết này sau
                      đó được xào nấu và sử dụng trong bộ phim Sở Lưu Hương
                      Truyền Kỳ.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/3/photo-1-1627996077556716393523.jpg"
                      alt="5, phim Hoa ngữ,Phim truyền hình,phim truyền hình Hoa ngữ,phim truyền hình trung quốc,phim trung quốc,Thâm cung nội chiến,Xa Thi Mạn,trương khả di,Hậu Cung Như Ý Truyện (2018),hậu cung chân hoàn truyện (2011),vu chính,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/3/0-16279960534341930760443.jpg"
                      alt="6, phim Hoa ngữ,Phim truyền hình,phim truyền hình Hoa ngữ,phim truyền hình trung quốc,phim trung quốc,Thâm cung nội chiến,Xa Thi Mạn,trương khả di,Hậu Cung Như Ý Truyện (2018),hậu cung chân hoàn truyện (2011),vu chính,"
                      note=""
                    />
                    <p>
                      Chi tiết tạo bước ngoặt cho nhân vật Diêm Vạn Hy trong Bão
                      Cát được <strong>Vu Chính</strong> tái sử dụng trong phim
                      của mình
                    </p>
                    <p>
                      Trong một đoạn clip kéo dài 18 phút được lan truyền rộng
                      rãi trên mạng, cư dân mạng đã liệt kê ra 13 điểm giống
                      nhau giữa Sức Mạnh Tình Thân - một trong những bộ phim về
                      chủ đề gia đình thành công nhất của TVB và Vợ Và Mẹ Đều
                      Tốt. Giống từ bối cảnh đến cốt truyện, bộ phim của{" "}
                      <strong>Vu Chính</strong> còn được coi là một phiên bản
                      kém hoàn thiện của Sức Mạnh Tình Thân. Sau cùng, vị biên
                      kịch này vẫn phủ nhận mọi cáo buộc và khẳng định tác phẩm
                      của ông quay trước phiên bản của TVB.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/3/photo-1-1628004117948680156431.jpg"
                      alt="7, phim Hoa ngữ,Phim truyền hình,phim truyền hình Hoa ngữ,phim truyền hình trung quốc,phim trung quốc,Thâm cung nội chiến,Xa Thi Mạn,trương khả di,Hậu Cung Như Ý Truyện (2018),hậu cung chân hoàn truyện (2011),vu chính,"
                      note=""
                    />
                    <h5>Cung Tỏa Châu Liêm và Hậu Cung Chân Hoàn Truyện</h5>
                    <p>
                      Được xếp vào hàng kinh điển trong thể loại phim cung đấu,
                      Hậu Cung Chân Hoàn Truyện sẽ không thể ngờ rằng mình có
                      một "người chị em song sinh" lên sóng gần như cùng thời
                      điểm. Nhiều khán giả đã tinh ý phát hiện ra Cung Tỏa Châu
                      Liêm có nội dung và tình tiết khá tương đồng với bộ phim
                      cung đấu kinh điển Chân Hoàn Truyện.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/3/-1628003404768262999370.jpg"
                      alt="8, phim Hoa ngữ,Phim truyền hình,phim truyền hình Hoa ngữ,phim truyền hình trung quốc,phim trung quốc,Thâm cung nội chiến,Xa Thi Mạn,trương khả di,Hậu Cung Như Ý Truyện (2018),hậu cung chân hoàn truyện (2011),vu chính,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/3/photo-1-16280033854971353814608.jpg"
                      alt="9, phim Hoa ngữ,Phim truyền hình,phim truyền hình Hoa ngữ,phim truyền hình trung quốc,phim trung quốc,Thâm cung nội chiến,Xa Thi Mạn,trương khả di,Hậu Cung Như Ý Truyện (2018),hậu cung chân hoàn truyện (2011),vu chính,"
                      note=""
                    />
                    <p>
                      Dù tương đồng về nội dung, sau cùng, chỉ Chân Hoàn Truyện
                      được xếp vào hàng kinh điển của thể loại cung đấu
                    </p>
                    <h5>
                      Chê bai đoàn phim Như Ý Truyện nghèo nàn nhưng lại xài ké
                      cảnh quay?
                    </h5>
                    <p>
                      Một năm trước khi Như Ý Truyện có cơ hội lên sóng,{" "}
                      <strong>Vu Chính</strong> đã từng gây tranh cãi khi lên
                      tiếng chê bai đoàn phim nghèo nàn, rẻ tiền. Vậy mà đúng
                      hai năm sau đó, trong bộ phim cổ trang Pháo Hoa Sông Đây
                      Mưa Sông Đó, biên kịch này đã tái sử dụng lại cảnh quay
                      đại tang vô cùng hoành tráng trong Như Ý Truyện.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/3/photo-1-1627997037400643080382.jpg"
                      alt="10, phim Hoa ngữ,Phim truyền hình,phim truyền hình Hoa ngữ,phim truyền hình trung quốc,phim trung quốc,Thâm cung nội chiến,Xa Thi Mạn,trương khả di,Hậu Cung Như Ý Truyện (2018),hậu cung chân hoàn truyện (2011),vu chính,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/3/-16279969669411211766177.jpg"
                      alt="11, phim Hoa ngữ,Phim truyền hình,phim truyền hình Hoa ngữ,phim truyền hình trung quốc,phim trung quốc,Thâm cung nội chiến,Xa Thi Mạn,trương khả di,Hậu Cung Như Ý Truyện (2018),hậu cung chân hoàn truyện (2011),vu chính,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/3/photo-1-16279968251391648455288.jpg"
                      alt="12, phim Hoa ngữ,Phim truyền hình,phim truyền hình Hoa ngữ,phim truyền hình trung quốc,phim trung quốc,Thâm cung nội chiến,Xa Thi Mạn,trương khả di,Hậu Cung Như Ý Truyện (2018),hậu cung chân hoàn truyện (2011),vu chính,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/3/photo-1-1627996803498100577343.jpg"
                      alt="13, phim Hoa ngữ,Phim truyền hình,phim truyền hình Hoa ngữ,phim truyền hình trung quốc,phim trung quốc,Thâm cung nội chiến,Xa Thi Mạn,trương khả di,Hậu Cung Như Ý Truyện (2018),hậu cung chân hoàn truyện (2011),vu chính,"
                      note=""
                    />
                    <p>
                      Tại sao <strong>Vu Chính</strong> chê đoàn phim Như Ý
                      Truyện nghèo nàn, rẻ tiền mà lại sử dụng lại cảnh quay
                      trong bộ phim này?
                    </p>
                    <RelationNewsInPage category={category} />
                    <h5>
                      Hạo Lan Truyện vừa cọ nhiệt, vừa sao chép nhưng vẫn thất
                      bại?
                    </h5>
                    <p>
                      Vốn dĩ dự định lên sóng vào năm 2017, thế nhưng sau một số
                      lùm xùm của dàn diễn viên chính, dự án{" "}
                      <strong>phim truyền hình</strong> Thắng Thiên Hạ đã buộc
                      phải hoãn chiếu vô thời hạn. Điều này khiến cho Hạo Lan
                      Truyện - bộ phim được <strong>Vu Chính</strong> sắp xếp
                      cạnh tranh với bom tấn của Phạm Băng Băng thất bại vì
                      không thể hưởng ké sự nổi tiếng của các bộ phim chiếu cùng
                      thời điểm. Chưa hết, điệu múa của Lý Hạo Lan (Ngô Cẩn
                      Ngôn) còn dính nghi án sao chép điệu “Kinh Hồng vũ” của
                      Chân Hoàn (Tôn Lệ) trong Hậu Cung Chân Hoàn Truyện.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/3/photo-1-16279983263801503125036.jpg"
                      alt="14, phim Hoa ngữ,Phim truyền hình,phim truyền hình Hoa ngữ,phim truyền hình trung quốc,phim trung quốc,Thâm cung nội chiến,Xa Thi Mạn,trương khả di,Hậu Cung Như Ý Truyện (2018),hậu cung chân hoàn truyện (2011),vu chính,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/3/photo-1-1627998294573513339530.jpg"
                      alt="15, phim Hoa ngữ,Phim truyền hình,phim truyền hình Hoa ngữ,phim truyền hình trung quốc,phim trung quốc,Thâm cung nội chiến,Xa Thi Mạn,trương khả di,Hậu Cung Như Ý Truyện (2018),hậu cung chân hoàn truyện (2011),vu chính,"
                      note=""
                    />
                    <p>
                      Hạo Lan Truyện thất bại thảm hại vì không thể cọ nhiệt với
                      Thắng Thiên Hạ
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/3/315417436242671688364642-a1305516480x270-16279982164601241342561.gif"
                      alt="16, phim Hoa ngữ,Phim truyền hình,phim truyền hình Hoa ngữ,phim truyền hình trung quốc,phim trung quốc,Thâm cung nội chiến,Xa Thi Mạn,trương khả di,Hậu Cung Như Ý Truyện (2018),hậu cung chân hoàn truyện (2011),vu chính,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/3/ezgif206f04eead40a1541743392316101320737-fc284f16600x325-1627998216463766374209.gif"
                      alt="17, phim Hoa ngữ,Phim truyền hình,phim truyền hình Hoa ngữ,phim truyền hình trung quốc,phim trung quốc,Thâm cung nội chiến,Xa Thi Mạn,trương khả di,Hậu Cung Như Ý Truyện (2018),hậu cung chân hoàn truyện (2011),vu chính,"
                      note=""
                    />
                    <p>
                      Lý Hạo Lan như đang "cosplay" Chân Hoàn trong bộ phim của
                      Vu Chính
                    </p>
                    <h5>Phượng Tù Hoàng vay mượn nguyên tác Đông Cung?</h5>
                    <p>
                      Được chuyển thể từ tiểu thuyết cùng tên của nhà văn Thiên
                      Y Hữu Phong, Phượng Tù Hoàng được kỳ vọng sẽ trở thành một
                      bom tấn cổ trang mới của <strong>Vu Chính</strong>. Thế
                      nhưng kể từ sau tập 15, người xem bắt đầu nhận thấy biên
                      kịch này cố đi lệch nguyên tác, chuyển hướng kịch bản
                      giống với Đông Cung - một tiểu thuyết đình đám khác.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/3/photo-1-1627998798553940162975.jpg"
                      alt="18, phim Hoa ngữ,Phim truyền hình,phim truyền hình Hoa ngữ,phim truyền hình trung quốc,phim trung quốc,Thâm cung nội chiến,Xa Thi Mạn,trương khả di,Hậu Cung Như Ý Truyện (2018),hậu cung chân hoàn truyện (2011),vu chính,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/3/photo-1-16279987898271668993516.jpg"
                      alt="19, phim Hoa ngữ,Phim truyền hình,phim truyền hình Hoa ngữ,phim truyền hình trung quốc,phim trung quốc,Thâm cung nội chiến,Xa Thi Mạn,trương khả di,Hậu Cung Như Ý Truyện (2018),hậu cung chân hoàn truyện (2011),vu chính,"
                      note=""
                    />
                    <p>
                      Nguyên tác của Phượng Tù Hoàng được đánh giá rất cao,
                      nhưng bản phim lại vay mượn từ Đông Cung
                    </p>
                    <h5>
                      Mua bản quyền Glass Mask thất bại, Vu Chính làm luôn phiên
                      bản mới
                    </h5>
                    <p>
                      Một tác phẩm truyện tranh nổi tiếng của Nhật Bản cũng từng
                      là "nạn nhân" của <strong>Vu Chính</strong>. Bộ phim Vân
                      Điên Chi Thượng của nhà sản xuất này có vô số tình tiết
                      trùng lặp với Glass Mask (Mặt Nạ Thủy Tinh) - bộ manga nổi
                      tiếng xứ hoa Anh Đào, từ hoàn cảnh và ước mơ của hai nhân
                      vật chính đến kẻ phản diện mà họ phải đối đầu sau này.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/3/photo-1-16280013053301208197997.jpg"
                      alt="20, phim Hoa ngữ,Phim truyền hình,phim truyền hình Hoa ngữ,phim truyền hình trung quốc,phim trung quốc,Thâm cung nội chiến,Xa Thi Mạn,trương khả di,Hậu Cung Như Ý Truyện (2018),hậu cung chân hoàn truyện (2011),vu chính,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/3/photo-1-1628001253615359770746.jpeg"
                      alt="21, phim Hoa ngữ,Phim truyền hình,phim truyền hình Hoa ngữ,phim truyền hình trung quốc,phim trung quốc,Thâm cung nội chiến,Xa Thi Mạn,trương khả di,Hậu Cung Như Ý Truyện (2018),hậu cung chân hoàn truyện (2011),vu chính,"
                      note=""
                    />
                    <p>
                      Liệu có phải vì mua bản quyền bất thành nên{" "}
                      <strong>Vu Chính</strong> quyết định tạo ra phiên bản
                      Glass Mask của riêng mình?
                    </p>
                    <p>
                      Dù tạo ra hàng loạt <strong>phim truyền hình</strong>{" "}
                      thành công rực rỡ, thế nhưng, với những bê bối vay mượn ý
                      tưởng và chiêu trò quảng bá phim trên, rất khó để khán giả
                      có thể công nhận tài năng sáng tạo của{" "}
                      <strong>Vu Chính</strong>.
                    </p>
                    <p>
                      Nguồn tin: Jayne Stars, Maybe You Never Watched This Movie
                      - Ảnh: Tổng hợp
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
