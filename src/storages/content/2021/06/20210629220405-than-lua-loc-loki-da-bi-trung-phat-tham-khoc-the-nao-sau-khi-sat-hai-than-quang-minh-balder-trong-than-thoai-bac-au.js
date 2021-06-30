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
"timestamp": '29/06/2021 10:04 PM',
"title": 'Thần lừa lọc Loki đã bị trừng phạt thảm khốc thế nào sau khi sát hại thần quang minh Balder trong thần thoại Bắc Âu?',
"description": 'Loki bị trói lên một phiến đá bằng bộ lòng của con trai hắn, ngày qua ngày hắn chịu sự dày vò khổ sở để trả giá cho tội lỗi.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/25/processedsamloki-1624593509307320096817.jpg',
"alt": 'KHÁM PHÁ,THẦN THOẠI BẮC ÂU,THẦN THOẠI,LOKI,THẦN LỪA LỌC LOKI,',
"category": 'games',
"date": '29/06/2021',
"time": '10:04 PM',
"link": '/than-lua-loc-loki-da-bi-trung-phat-tham-khoc-the-nao-sau-khi-sat-hai-than-quang-minh-balder-trong-than-thoai-bac-au',
"zcomponent": 'page_20210629220405',
"filepath": './20210629220405-than-lua-loc-loki-da-bi-trung-phat-tham-khoc-the-nao-sau-khi-sat-hai-than-quang-minh-balder-trong-than-thoai-bac-au.js'
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
  "Thần lừa lọc Loki đã bị trừng phạt thảm khốc thế nào sau khi sát hại thần quang minh Balder trong thần thoại Bắc Âu?";
const author = "Green";
const source = "Trí Thức Trẻ";
const timestamp = "29/06/2021 10:04 PM";
const description =
  "Loki bị trói lên một phiến đá bằng bộ lòng của con trai hắn, ngày qua ngày hắn chịu sự dày vò khổ sở để trả giá cho tội lỗi.";
const link =
  "than-lua-loc-loki-da-bi-trung-phat-tham-khoc-the-nao-sau-khi-sat-hai-than-quang-minh-balder-trong-than-thoai-bac-au";
const tagparam = [
  "KHÁM PHÁ",
  "THẦN THOẠI BẮC ÂU",
  "THẦN THOẠI",
  "LOKI",
  "THẦN LỪA LỌC LOKI",
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

export default function page_20210629220405() {
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
                    Trong{" "}
                    <strong>
                      <strong>thần thoại</strong> Bắc Âu
                    </strong>
                    , <strong>Loki</strong> có lẽ là vị thần gây nhiều tranh cãi
                    nhất khi vừa bày trò phá bĩnh các vị thần lại vừa giúp đỡ họ
                    trong nhiều vấn đề nan giải. Nhờ được thần Odin nhận nuôi
                    (hoặc kết nghĩa anh em, tùy theo từng phiên bản), mà Loki
                    được ở thế giới của các vị thần dù mang dòng máu của người
                    khổng lồ - những kẻ thù không đội trời chung với thần thánh.
                    Thế như bản tính lừa lọc, thích chơi khăm của Loki vẫn phát
                    huy triệt để khi ở cạnh các thần, khiến cho họ gặp phải
                    nhiều rắc rối và cũng là nguyên nhân sâu xa dẫn đến cái chết
                    của thần quang minh Balder.
                  </p>
                  <h5>
                    <strong>Loki</strong> – Vị thần lầy lội
                  </h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/25/processedsamloki-1624593509307320096817.jpg"
                    alt="1, KHÁM PHÁ,THẦN THOẠI BẮC ÂU,THẦN THOẠI,LOKI,THẦN LỪA LỌC LOKI,"
                    note=""
                  />
                  <p>
                    <strong>Loki</strong> có cha là Farbauti và mẹ là Laufey,
                    anh trai của Helblindi và Bysleistr. Dù có xuất thân là
                    người khổng lồ nhưng vóc dáng của Loki lại rất nhỏ bé, trông
                    gần giống với các vị thần ở Asgard. Ở vùng đất của các vị
                    thần, Loki đã kết hôn với nàng Sigyn, họ có với nhau hai cậu
                    con trai là Nafri và Vali. Lẽ ra đây đã là cuộc sống yên ổn
                    của Loki, nếu hắn không gặp gỡ và có con với nữ khổng lồ
                    Angrboda. Ba đứa con mà Loki có với Angrboda là chó sói
                    Fenrir, rắn Jormundgan va nữ thần Hel. Chúng được xem như
                    điềm báo cho ngày tận thế, chính vì vậy các vị thần đã bắt
                    giam chúng lại để tránh hậu họa.
                  </p>
                  <p>
                    Tuy nhiên, dù cho đề phòng như thế nào thì các vị thần cũng
                    không lường được việc <strong>Loki</strong> sẽ giở trò giết
                    hại thần quang minh Balder, tạo ra điềm báo đầu tiên cho
                    Ragnarok.
                  </p>
                  <h5>Tội ác và trốn chạy</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/6/25/angrboda-by-rnlaing-1624593551417323435274.jpg"
                    alt="2, KHÁM PHÁ,THẦN THOẠI BẮC ÂU,THẦN THOẠI,LOKI,THẦN LỪA LỌC LOKI,"
                    note=""
                  />
                  <p>
                    <strong>Loki</strong> đã lừa nữ thần Frigg tiết lộ điểm yếu
                    của Baldr rồi lại khiến cho một đứa con khác của bà là thần
                    Hoor giết chết Balder bằng cách ném một càng tầm gửi vào
                    người anh trai mình. Baldr qua đời ngay lập tức. Vị thần lừa
                    lọc lại tiếp tục cải trang thành mụ khổng lồ Pokk để từ chối
                    tha khóc cho Baldr, hại vị thần phải ở địa ngục cho đến tận
                    Ragnarok kết thúc.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/25/4cd1dab5dcba83a928cbef118494cc00-16245935837061868700512.jpg"
                    alt="3, KHÁM PHÁ,THẦN THOẠI BẮC ÂU,THẦN THOẠI,LOKI,THẦN LỪA LỌC LOKI,"
                    note=""
                  />
                  <p>
                    Tội ác mà <strong>Loki</strong> gây ra cho thần Baldr đã
                    khiến mối quan hệ giữa hắn với các vị thần Asgard chấm dứt.
                    Loki phải bỏ trốn khỏi Asgard để thoát khỏi cơn thịnh nộ của
                    các thần. Hắn chạy đến một ngọn núi cao, xây cho mình căn
                    nhà trên đỉnh núi. Ngôi nhà này có bốn cửa để quan sát mọi
                    hướng. Vào ban ngày, Loki biến thành một con cá hồi và ẩn
                    mình bên dưới một thác nước gần nhà. Vào ban đêm hắn tự đan
                    lưới đánh cá để kiếm ăn.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/25/d47ca6cf609b35bf1d4af78cc6a662c7-16245936041161316721183.jpg"
                    alt="4, KHÁM PHÁ,THẦN THOẠI BẮC ÂU,THẦN THOẠI,LOKI,THẦN LỪA LỌC LOKI,"
                    note=""
                  />
                  <RelationNewsInPage category={category} />
                  <p>
                    Tuy nhiên, từ ngai vàng trên cao trong cung điện, thần Odin
                    đã quan sát thấy nơi <strong>Loki</strong> cư ngụ. Các vị
                    thần lập tức đến tìm hắn. Khi nhìn thấy các vị thần đến nơi,
                    Loki quăng tấm lưới của mình vào lửa và biến hành cá hồi để
                    chạy trốn. Các vị thần nhìn thấy tấm lưới bèn đoán ra hắn
                    biến thành cá, vậy là họ đan riêng một tấm lưới mới và lùng
                    bắt Loki. Thần lừa lọc vẫn chạy thoát. Cuối cùng Thor nhân
                    lúc Loki nhảy ra khỏi lưới, đã túm lấy đuôi cá. Từ đó về sau
                    cá hồi có một chiếc đuôi rất mảnh mai.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/25/6a8be8e8abd2853dc1449291737e2df6-scaled-16245936204071758204942.jpg"
                    alt="5, KHÁM PHÁ,THẦN THOẠI BẮC ÂU,THẦN THOẠI,LOKI,THẦN LỪA LỌC LOKI,"
                    note=""
                  />
                  <h5>Hình phạt khủng khiếp dành cho Loki</h5>
                  <p>
                    Sau khi các vị thần bắt được <strong>Loki</strong>, họ lôi
                    hắn đến một hang động tăm tối và trói hắn lên tảng đá bằng
                    sợi xích đặc biệt. Sợi xích này được làm từ bộ lòng của
                    Nafri – con trai của Loki và người vợ Sigyn. Trước đó, các
                    vị thần đã biến Vali – anh trai của Nafri – thành sói, khiến
                    cho Vali cắn chết cậu em trai Nafri. Sau đó, họ moi ruột
                    Nafri để làm xích trói Loki.
                  </p>
                  <p>
                    Hàng ngày, <strong>Loki</strong> sẽ phải nằm trên tảng đá,
                    để nọc độc của con răng mà nữ thần Shakdi treo phía trên đầu
                    nhỏ độc xuống mặt. Chỉ có người vợ trung thành của Loki,
                    nàng Sigyn, mới dám ở lại cùng chồng trong hang tối. Nàng
                    giơ bát lên miệng rắn để hứng độc. Khi cái bát đầy, Sigyn
                    xoay lưng vứt nọc độc, khiến cho chất độc nhỏ vào mặt Loki.
                    Nỗi đau đớn khủng khiếp mà chất độc gây ra khiến Loki phải
                    quằn quại, kêu gào trời đất. Có lẽ vì vậy mà người dân vùng
                    Bắc Âu tin rằng tiếng kêu đau đớn của Loki gây ra động đất.
                  </p>
                  <p>
                    Mãi đến sau này khi Ragnarok diễn ra, <strong>Loki</strong>{" "}
                    mới được giải thoát khỏi hình phạt. Cùng với đội quân khổng
                    lồ hùng mạnh và ba đứa con gớm ghiếc, hắn đến Asgard để giết
                    các vị thần.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/25/loki-and-sigyn-1863-marten-eskil-winge-1-16245936431721372342101.jpg"
                    alt="6, KHÁM PHÁ,THẦN THOẠI BẮC ÂU,THẦN THOẠI,LOKI,THẦN LỪA LỌC LOKI,"
                    note=""
                  />
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
