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
"timestamp": '19/08/2021 12:59 PM',
"title": 'Khám phá 5 bí mật cực "dị" của bán yêu InuYasha: Ngay cả fan cứng chưa chắc đã biết hết!',
"description": 'Cùng xem và kiểm tra xem mình có biết hết cả 5 bí mật này không bạn nhé!',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/8/17/tumblrmvuwlwcv4d1rzkxhio1400-162918585342882023944.gif',
"alt": 'KHUYỂN DẠ XOA TRUYỀN KỲ - IP INUYASHA,GAME MOBILE,GAME ONLINE,GAME DI ĐỘNG,INUYASHA,GAME BẢN QUYỀN,ANIME,',
"category": 'games',
"date": '19/08/2021',
"time": '12:59 PM',
"link": '/kham-pha-5-bi-mat-cuc-di-cua-ban-yeu-inuyasha-ngay-ca-fan-cung-chua-chac-da-biet-het',
"zcomponent": 'page_20210819125910',
"filepath": './20210819125910-kham-pha-5-bi-mat-cuc-di-cua-ban-yeu-inuyasha-ngay-ca-fan-cung-chua-chac-da-biet-het.js'
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
  'Khám phá 5 bí mật cực "dị" của bán yêu InuYasha: Ngay cả fan cứng chưa chắc đã biết hết!';
const author = "Bủm";
const source = "Trí Thức Trẻ";
const timestamp = "19/08/2021 12:59 PM";
const description =
  "Cùng xem và kiểm tra xem mình có biết hết cả 5 bí mật này không bạn nhé!";
const link =
  "kham-pha-5-bi-mat-cuc-di-cua-ban-yeu-inuyasha-ngay-ca-fan-cung-chua-chac-da-biet-het";
const tagparam = [
  "KHUYỂN DẠ XOA TRUYỀN KỲ - IP INUYASHA",
  "GAME MOBILE",
  "GAME ONLINE",
  "GAME DI ĐỘNG",
  "INUYASHA",
  "GAME BẢN QUYỀN",
  "ANIME",
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

export default function page_20210819125910() {
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
                      Bộ <strong>anime</strong>/manga huyền thoại{" "}
                      <strong>InuYasha</strong> chắc chắn đã không còn mấy xa lạ
                      với đông đảo game thủ Việt. Không chỉ là một phần tuổi thơ
                      của rất nhiều anh em, InuYasha còn sở hữu một lượng fan
                      hâm mộ hùng hậu nhờ vào cốt truyện hấp dẫn cùng dàn nhân
                      vật ấn tượng như InuYasha, Sesshomaru, Kagome... Mỗi nhân
                      vật đều có những đặc điểm, tính cách và bí mật khác nhau.{" "}
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/17/photo-1-1629184493842262151792.gif"
                      alt="1, KHUYỂN DẠ XOA TRUYỀN KỲ - IP INUYASHA,GAME MOBILE,GAME ONLINE,GAME DI ĐỘNG,INUYASHA,GAME BẢN QUYỀN,ANIME,"
                      note=""
                    />
                    <p>
                      Trong bài viết hôm nay, hãy cùng khám phá 5 bí mật được
                      cho là ít người biết về nam chính{" "}
                      <strong>InuYasha</strong> và tự kiểm tra xem mình biết
                      được bao nhiêu bạn nhé!
                    </p>
                    <h5>
                      <strong>InuYasha</strong> có khả năng hồi phục thần tốc
                    </h5>
                    <p>
                      Là con trai của một đại yêu quái và một người phàm,{" "}
                      <strong>InuYasha</strong> được thừa hưởng những khả năng
                      của một yêu quái thực thụ giống như cha của mình và khả
                      năng hồi phục thần tốc chính là một trong số đó. Nhờ có
                      khả năng hồi phục này mà InuYasha có thể vượt qua hàng
                      loạt các trận chiến khốc liệt trong hành trình tìm kiếm
                      Ngọc Tứ Hồn. Chỉ cần có đủ thời gian nghỉ ngơi và không ở
                      trong ngày trăng non, InuYasha có thể chữa lành mọi vết
                      thương, kể cả những vết thương chết người khủng khiếp
                      nhất. Các vết xước và vết cắt có thể nhanh chóng lành lại
                      không chút dấu vết còn răng của chàng bán yêu cũng sẽ mọc
                      lại chỉ sau 1 ngày. Khả năng thần kỳ này đã giúp InuYasha
                      thoát khỏi rất nhiều tình huống khó khăn, đặc biệt là khi
                      thanh Thiết Toái Nha bị hỏng và cần một chiếc răng của
                      InuYasha để sửa chữa.{" "}
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/17/episode58-16291850830201950699421.png"
                      alt="11, KHUYỂN DẠ XOA TRUYỀN KỲ - IP INUYASHA,GAME MOBILE,GAME ONLINE,GAME DI ĐỘNG,INUYASHA,GAME BẢN QUYỀN,ANIME,"
                      note=""
                    />
                    <p>
                      Tuy có thể hồi phục nhanh chóng nhưng với bản chất là một
                      bán yêu, <strong>InuYasha</strong> vẫn có một số giới hạn
                      nhất định. Trong khi người anh trai cùng cha khác mẹ
                      Sesshomaru có khả năng miễn nhiễm hoàn toàn với các dược
                      liệu, vật dụng chống yêu quái, độc dược và bệnh tật thì
                      InuYasha vẫn bị ảnh hưởng và đã từng ngất xỉu vì chúng.{" "}
                    </p>
                    <h5>
                      <strong>InuYasha</strong> có thể hóa cứng máu của mình
                    </h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/17/photo-1-1629184887869776789028.png"
                      alt="4, KHUYỂN DẠ XOA TRUYỀN KỲ - IP INUYASHA,GAME MOBILE,GAME ONLINE,GAME DI ĐỘNG,INUYASHA,GAME BẢN QUYỀN,ANIME,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/17/tumblrmvuwlwcv4d1rzkxhio1400-162918585342882023944.gif"
                      alt="8, KHUYỂN DẠ XOA TRUYỀN KỲ - IP INUYASHA,GAME MOBILE,GAME ONLINE,GAME DI ĐỘNG,INUYASHA,GAME BẢN QUYỀN,ANIME,"
                      note=""
                    />
                    <p>
                      Một năng lực đặc biệt nữa của <strong>InuYasha</strong>{" "}
                      chính là điều khiển và hóa cứng máu của bản thân. Đây là
                      năng lực đã hỗ trợ rất nhiều cho InuYasha trong chiến đấu
                      khi khiến anh chàng trở nên bền bỉ hơn, có thể dễ dàng
                      chấm dứt tình trạng chảy máu để có thể tiếp tục trận
                      chiến. Đặc biệt, InuYasha đã tận dụng chính khả năng này
                      của bản thân để tạo ra chiêu Phi Nhẫn Huyết Trảo vô cùng
                      lợi hại. Khi bản thân gặp nguy hiểm, InuYasha dùng móng
                      vuốt của mình để lấy máu, biến chúng thành những lưỡi dao
                      sắc lẹm và ném về phía đối thủ. Đây là một chiêu thức lợi
                      hại của InuYasha bởi lượng sát thương lớn cũng như có thể
                      giúp InuYasha tẩu thoát khi nguy cấp.
                    </p>
                    <h5>
                      Trạng thái yêu quái của <strong>InuYasha</strong> chỉ là
                      tạm thời
                    </h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/17/photo-1-1629184547737744223746.gif"
                      alt="2, KHUYỂN DẠ XOA TRUYỀN KỲ - IP INUYASHA,GAME MOBILE,GAME ONLINE,GAME DI ĐỘNG,INUYASHA,GAME BẢN QUYỀN,ANIME,"
                      note="InuYasha trong hình dạng bán yêu quen thuộc"
                    />
                    <p>
                      Do bản thân là một bán yêu nên <strong>InuYasha</strong>{" "}
                      sẽ mất hết yêu lực, trở thành một con người bình thường,
                      vô cùng yếu đuối vào ngày trăng non. InuYasha luôn cố gắng
                      giấu kín yếu điểm chí tử của mình bởi khi ở trong hình
                      dạng người, anh chàng sẽ dễ dàng bị tấn công bởi con người
                      và yêu quái mà không có đủ khả năng để phản kháng. Tuy
                      nhiên, mọi công sức giữ bí mật của InuYasha đều đổ xuống
                      sông xuống biển khi cậu bé hồ ly Shippo biết được.{" "}
                    </p>

                    <ContentImage
                      src="https://i.pinimg.com/originals/2b/05/76/2b057658ebbeaa55bf66696752a1be6c.gif"
                      alt="12, KHUYỂN DẠ XOA TRUYỀN KỲ - IP INUYASHA,GAME MOBILE,GAME ONLINE,GAME DI ĐỘNG,INUYASHA,GAME BẢN QUYỀN,ANIME,"
                      note=""
                    />
                    <p>
                      Khi mất hết yêu lực, tóc và mắt của{" "}
                      <strong>InuYasha</strong> chuyển sang màu đen, 2 chiếc tai
                      chó cũng biến mất, móng vuốt ngắn lại hệt như một người
                      bình thường. Không chỉ thay đổi về ngoại hình, các giác
                      quan của InuYasha cũng suy giảm, không còn nhanh nhạy như
                      trước nhưng dường như dây thần kinh cảm xúc của anh chàng
                      lại hoạt động mạnh mẽ hơn hẳn. Bằng chứng là khi ở hình
                      dạng con người, InuYasha đã thể hiện tình cảm của mình
                      nhiều hơn với Kagome, trái ngược hoàn toàn khi ở hình dạng
                      bán yêu quen thuộc.{" "}
                    </p>
                    <h5>
                      <strong>InuYasha</strong> sở hữu các giác quan vô cùng
                      mạnh
                    </h5>
                    <p>
                      Là con trai của một Đại Khuyển Yêu nên các giác quan của{" "}
                      <strong>InuYasha</strong> vô cùng mạnh mẽ, nhất là thính
                      giác và khứu giác. Thính giác của InuYasha vô cùng nhạy
                      bén, cho phép nghe thấy cả tiếng thì thầm, tiếng động nhỏ
                      nhất ở một khoảng cách rất xa (ví dụ như khi nghe Shippo
                      nói xấu về mình với Kagome).{" "}
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Về mặt khứu giác, <strong>InuYasha</strong> có thể đánh
                      hơi và theo dõi mùi máu cũng như sự hiện diện của vật thể
                      ở khoảng cách rất xa. Nhờ có khứu giác siêu phàm mà
                      InuYasha dễ dàng phát hiện liệu mình có đang bị theo dõi
                      hay không, giúp anh và đồng đội có thêm thời gian để chuẩn
                      bị sẵn sàng khi bị tấn công. Khả năng này cũng giúp
                      InuYasha lần theo được dấu vết yêu khí của Naraku cũng như
                      tìm đường thoát khỏi Minh Đạo khi ngửi thấy "mùi của thế
                      giới bên ngoài".
                    </p>
                    <ContentImage
                      src="https://i.pinimg.com/originals/41/96/1b/41961b1c564241c64bd8da94eab9f07f.gif"
                      alt="13, KHUYỂN DẠ XOA TRUYỀN KỲ - IP INUYASHA,GAME MOBILE,GAME ONLINE,GAME DI ĐỘNG,INUYASHA,GAME BẢN QUYỀN,ANIME,"
                      note=""
                    />
                    <ContentImage
                      src="https://64.media.tumblr.com/440c57a7559588a4b922436ba059b9f2/tumblr_or7epndMGM1wq0ygoo3_500.gifv"
                      alt="14, KHUYỂN DẠ XOA TRUYỀN KỲ - IP INUYASHA,GAME MOBILE,GAME ONLINE,GAME DI ĐỘNG,INUYASHA,GAME BẢN QUYỀN,ANIME,"
                      note=""
                    />
                    <p>
                      Tuy nhiên, các giác quan cực nhạy của{" "}
                      <strong>InuYasha</strong> cũng mang đến không ít những bất
                      tiện cho InuYasha. Những mùi hương nồng và nặng như mùi
                      mực, mùi cá khô, mùi cari của Kagome.... lại là cơn ác
                      mộng với InuYasha. Bên cạnh đó, vì dễ dàng ngửi được quá
                      nhiều loại mùi hương nên InuYasha có thể bị các mùi hương
                      mạnh xung quanh làm cho bối rối, khiến anh chàng mất tập
                      trung trong khi theo dõi mục tiêu. InuYasha cũng dị ứng
                      với các món ăn cay do có vị giác nhạy cảm hơn hẳn người
                      thường.{" "}
                    </p>
                    <h5>
                      Mũi của <strong>InuYasha</strong> luôn ướt
                    </h5>
                    <p>
                      Bên cạnh các điểm đặc trưng của loài chó như: tai vểnh
                      lên, khứu giác và vị giác nhạy bén thì{" "}
                      <strong>InuYasha</strong> còn sở hữu một đặc điểm khác mà
                      ít người biết đến - mũi luôn ở trạng thái ẩm ướt. Tuy
                      không được thể hiện rõ ràng về mặt tạo hình nhưng đặc điểm
                      này thường xuyên được Kagome sử dụng làm "công cụ" để trêu
                      chọc InuYasha.{" "}
                    </p>
                    <ContentImage
                      src="https://www.tvovermind.com/wp-content/uploads/2018/11/2121-inuyasha-the-final-act-26-960x540.jpg"
                      alt="9, KHUYỂN DẠ XOA TRUYỀN KỲ - IP INUYASHA,GAME MOBILE,GAME ONLINE,GAME DI ĐỘNG,INUYASHA,GAME BẢN QUYỀN,ANIME,"
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
