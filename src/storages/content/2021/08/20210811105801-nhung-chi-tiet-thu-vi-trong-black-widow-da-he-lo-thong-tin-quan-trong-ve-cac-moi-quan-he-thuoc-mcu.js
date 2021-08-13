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
"timestamp": '11/08/2021 10:58 AM',
"title": 'Những chi tiết thú vị trong Black Widow đã hé lộ thông tin quan trọng về các mối quan hệ thuộc MCU',
"description": 'Bom tấn Black Widow của nhà Marvel đã cung cấp nhiều thông tin quan trọng mà các fan tò mò từ lâu.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/11/photo-1-1628646184462213925237.jpg',
"alt": 'MARVEL,BLACK WIDOW,MCU,DỊ NHÂN,EASTER EGG BLACK WIDOW,',
"category": 'news',
"date": '11/08/2021',
"time": '10:58 AM',
"link": '/nhung-chi-tiet-thu-vi-trong-black-widow-da-he-lo-thong-tin-quan-trong-ve-cac-moi-quan-he-thuoc-mcu',
"zcomponent": 'page_20210811105801',
"filepath": './20210811105801-nhung-chi-tiet-thu-vi-trong-black-widow-da-he-lo-thong-tin-quan-trong-ve-cac-moi-quan-he-thuoc-mcu.js'
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
  "Những chi tiết thú vị trong Black Widow đã hé lộ thông tin quan trọng về các mối quan hệ thuộc MCU";
const author = "MT";
const source = "Trí Thức Trẻ";
const timestamp = "11/08/2021 10:58 AM";
const description =
  "Bom tấn Black Widow của nhà Marvel đã cung cấp nhiều thông tin quan trọng mà các fan tò mò từ lâu.";
const link =
  "nhung-chi-tiet-thu-vi-trong-black-widow-da-he-lo-thong-tin-quan-trong-ve-cac-moi-quan-he-thuoc-mcu";
const tagparam = [
  "MARVEL",
  "BLACK WIDOW",
  "MCU",
  "DỊ NHÂN",
  "EASTER EGG BLACK WIDOW",
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

export default function page_20210811105801() {
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
                      Bom tấn <strong>Black Widow</strong> của nhà{" "}
                      <strong>Marvel</strong> đã ra mắt trong một thời gian dài
                      với kha khá lời khen có cánh từ người xem lẫn cộng đồng
                      fan của vũ trụ <strong>MCU</strong>. Bộ phim đã đem đến
                      các cảnh đánh đấm đẹp mắt, tương tác thú vị giữa dàn nhân
                      vật, đặc biệt là hai chị em Natasha và Yelena.
                    </p>
                    <p>
                      Không những vậy, mà bộ phim <strong>Black Widow</strong>{" "}
                      còn lồng ghép vào một vài easter egg thú vị sau đây mà có
                      thể là ít người để ý tới.
                    </p>
                    <h5>
                      10. Ursa The Bear, <strong>dị nhân</strong> đầu tiên xuất
                      hiện trong MCU
                    </h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/11/photo-1-1628646184462213925237.jpg"
                      alt="1, MARVEL,BLACK WIDOW,MCU,DỊ NHÂN,EASTER EGG BLACK WIDOW,"
                      note=""
                    />

                    <p>
                      Dàn X-Men sau một thời gian dài đã chính thức trở về mái
                      nhà chung với nhóm các siêu anh hùng trong vũ trụ{" "}
                      <strong>MCU</strong>. <strong>Marvel</strong> Studios đã
                      vạch ra một lộ trình để từ từ giới thiệu tới fan những cá
                      thể đặc biệt này. Và trong <strong>Black Widow</strong> có
                      xuất hiện một cái tên khá quen thuộc, Ursa.
                    </p>
                    <p>
                      Đây chính là nhân vật đã thua màn vật tay với Red
                      Guardian/Alexei Shostakov ở trong nhà tù và còn bị trêu
                      chọc là "con gấu to lớn". Đó có thể chính là thiếu tướng
                      Mikhail Uriokovitch Ursus, <strong>dị nhân</strong> đầu
                      tiên của nước Nga, thành viên thuộc Winter Guard.
                    </p>
                    <h5>9. Hé lộ về Budapest</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/11/photo-1-16286461867181529830095.jpg"
                      alt="2, MARVEL,BLACK WIDOW,MCU,DỊ NHÂN,EASTER EGG BLACK WIDOW,"
                      note=""
                    />

                    <p>
                      Trong trận chiến với binh đoàn Chitauri tại New York trong
                      Avengers đầu tiên, Clint Barton/Hawkeye và Natasha
                      Romanoff đã nhắc thoáng một sự kiện lúc trước ở Budapest.
                      Natasha nói "Hệt như cái hồi ở Budapest nhỉ", nhưng Clint
                      chỉ đáp lại rằng "Cô và tôi nhớ về Budapest khác nhau
                      đấy".
                    </p>
                    <p>
                      Đến với phần phim riêng, sự kiện ấy được hé lộ là khi cô
                      và Clint trong khoảng thời gian chạy trốn sau nỗ lực ám
                      sát Dreykov đã giao tranh với một nhóm đặc nhiệm người
                      Hungary.
                    </p>
                    <h5>8. Con gái của Dreykov</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/11/photo-2-1628646185650153733644.jpg"
                      alt="3, MARVEL,BLACK WIDOW,MCU,DỊ NHÂN,EASTER EGG BLACK WIDOW,"
                      note=""
                    />

                    <p>
                      Cũng trong Avengers, khi Loki đang cố gắng đọc vị tâm trí
                      của Natasha để dễ dàng theo túng cô bằng cách nói ra cụm
                      từ "con gái của Dreykov". Chi tiết này có liên quan đến sự
                      kiện Budapest như đã nói trước đó, khi cô con gái Antonia
                      của Dreykov không may bị thương trong vụ nổ do Natasha và
                      Clint gây ra. Dreykov vì không muốn con gái mình phải chịu
                      đau đớn do vết bỏng đã cấy vào một con chip điều khiển và
                      biến cô thành Taskmaster như trong phim.
                    </p>
                    <h5>7. Mối liên hệ của North Institute với Red Room</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/11/photo-3-16286461861721285176688.jpg"
                      alt="4, MARVEL,BLACK WIDOW,MCU,DỊ NHÂN,EASTER EGG BLACK WIDOW,"
                      note=""
                    />
                    <p>
                      Khi còn ở Cuba, Red Guardian lúc ấy đã báo cáo cho Dreykov
                      về việc ông đã phá hủy North Institute. North Institute
                      theo nguyên tác là một trong những tổ chức mật hợp tác với
                      Red Room và tập đoàn Gynacon. Natasha và Yelena cũng đã
                      nhắc về cái tên này, North Institute dường như có liên hệ
                      với khoảng thời gian mà hai chị em ở đất nước thuộc vùng
                      Trung Mỹ Cuba.
                    </p>
                    <h5>6. North Institute và Melina</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/11/photo-4-16286461872341617629581.jpg"
                      alt="5, MARVEL,BLACK WIDOW,MCU,DỊ NHÂN,EASTER EGG BLACK WIDOW,"
                      note=""
                    />
                    <p>
                      Melina Vostokoff trong <strong>Black Widow</strong> cũng
                      có liên hệ đến phần phim The Winter Soldier, khi bà tiết
                      lộ North Institue chính là cơ sở của Shield, nhưng đã bị
                      Hydra trà trộn vào như phần phim ra mắt năm 2014. Đây có
                      thể chính là nơi đã giúp cho Hydra che dấu hành tung của
                      mình nhằm lên kế hoạch tấn công vào Hoa Kỳ.
                    </p>
                    <RelationNewsInPage category={category} />

                    <h5>5. Gợi nhắc đến comic và yếu tố ngoài đời thật</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/11/photo-1-1628646229637448065897.jpg"
                      alt="6, MARVEL,BLACK WIDOW,MCU,DỊ NHÂN,EASTER EGG BLACK WIDOW,"
                      note=""
                    />
                    <p>
                      Trong đầu truyện <strong>Black Widow</strong> ra mắt vào
                      năm 2015, Natasha và Yelena đã gặp nhau tại Cuba, để rồi
                      đối đầu với phía North Institute. Natasha cũng đã có không
                      ít lần di chuyển tới Cuba để thực hiện nhiệm vụ ám sát.
                      Bom tấn Black Widow cũng dựa trên yếu tố ngoài đời thực ở
                      Cuba, khi quốc gia này có liên hệ với cả Nga và Hoa Kỳ
                      trong thời kỳ chiến tranh lạnh.
                    </p>
                    <p>
                      Phía Hoa Kỳ vào thời gian đó đã chống lưng cho phe của
                      tổng thống Batista, sau khi quân đội của ông chiếm lấy
                      chính phủ. Ngay sau khi mà phiến quân Cuba lật đổ chính
                      quyền Batista và đưa nhà lãnh tụ Fidel Castro vào ghế tổng
                      thống, đã nhận được sự bảo trợ từ phía Liên Xô. Cuba là
                      một trong số ít những quốc gia vẫn còn phần nào chịu ảnh
                      hưởng từ các chính sách từ thời kỳ chiến tranh lạnh. Là
                      một đặc vụ am hiểu rất nhiều ngôn ngữ nhằm phục vụ trong
                      việc điều tra hồ sơ, nên Natasha Romanoff rất am hiểu về
                      chính trị Cuba trong <strong>MCU</strong>.
                    </p>
                    <h5>4. Mối quan hệ giữa Captain America và Red Guardian</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/11/photo-1-16286462315411238681325.jpg"
                      alt="7, MARVEL,BLACK WIDOW,MCU,DỊ NHÂN,EASTER EGG BLACK WIDOW,"
                      note=""
                    />
                    <p>
                      Trong phim, Red Guardian đã không ít lần kể về mối thù
                      địch, cạnh tranh giữa ông và Captain America/Steve Rogers.
                    </p>
                    <p>
                      Tuy bị lật tẩy là không có thực, nhưng chi tiết này được
                      lấy cảm hứng từ trong nguyên tác. Trong comic, cả hai
                      người đã từng không ít lần đối đầu với nhau và đối lập về
                      lý tưởng mà họ đại điện cho quốc gia mà mình sinh ra.
                    </p>
                    <h5>3. Natasha xem phim James Bond</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/11/photo-2-1628646232579996113788.jpg"
                      alt="8, MARVEL,BLACK WIDOW,MCU,DỊ NHÂN,EASTER EGG BLACK WIDOW,"
                      note=""
                    />
                    <p>
                      James Bond là một trong những thương hiệu nổi tiếng xoay
                      quanh chàng điệp viên tài hoa, xuất hiện lần đầu trong
                      tiểu thuyết Casino Royale do Ian Fleming sáng tác. Là một
                      thương hiệu nổi tiếng, nên cái tên James Bond cũng được
                      nhắc thoáng qua trong <strong>Black Widow</strong>, một
                      bom tấn cũng lấy cảm hứng về đề tài điệp viên. Natasha
                      Romanoff nói là mình đã coi phần Moonraker trong khoảng
                      thời gian ẩn náu tại Na Uy.
                    </p>
                    <h5>2. Hình xăm của Red Guardian</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/11/photo-3-16286462320731630747644.jpg"
                      alt="9, MARVEL,BLACK WIDOW,MCU,DỊ NHÂN,EASTER EGG BLACK WIDOW,"
                      note=""
                    />
                    <p>
                      Red Guardian/Alexei Shostakov có chi chít hình xăm ở trên
                      người. Và những hình xăm đó có thể kể đến như là tên của
                      hai cô con gái, Natasha và Yelena. Đó là lý tưởng mà ông
                      cực kỳ tự hào khi là người con của Xô Viết với cái tên
                      Karl Marx xăm trên đốt ngón tay. Hình xăm chim đại bàng
                      hai đầu cực kỳ nổi tiếng tại các nhà tù từ thời Xô Viết.
                    </p>
                    <h5>1. Crimson Dynamo</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/11/photo-4-16286461752521101359511.jpg"
                      alt="10, MARVEL,BLACK WIDOW,MCU,DỊ NHÂN,EASTER EGG BLACK WIDOW,"
                      note=""
                    />

                    <p>
                      Cuối cùng sẽ là Crimson Dynamo, một cái tên khác trong{" "}
                      <strong>Marvel</strong> Comics được nhắc tới ở bom tấn{" "}
                      <strong>Black Widow</strong>. Theo nguyên tác, Crimson
                      Dynamo là một trong những kẻ thù kinh điển của Iron
                      Man/Tony Stark.
                    </p>
                    <p>
                      Một điều khá thú vị là bộ giáp Whiplash tối tân nhất của
                      Anton Vanko được lấy cảm hứng từ Crimson Dynamo. Có thể là
                      Red Guardian trước đây từng sát cánh cùng với Crimson
                      Dynamo. Và trong phim thì Yelena đã nhầm lẫn Crimson
                      Dynamo là một trong những biệt hiệu dành cho "người cha
                      nuôi" Alexei Shostakov.
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
