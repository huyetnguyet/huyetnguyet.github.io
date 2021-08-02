import React from "react";
import "components/page.scss";
import { AdsHorizontal, AdsVertical } from "components/adsMethods";
import { RandomFeature } from "components/methods";

import { Content, ContentImage, FacebookShareButton } from "components/content";

import { Helmet } from "react-helmet";

/* ---------------------------------------------------------------- */

/*

 {
"timestamp": 08/06/2021 02:06 PM",
"title": [Trực tiếp từ UAE] Buổi tập đầu tiên của tuyển Việt Nam sau trận gặp Indonesia: Tuấn Anh, Văn Toàn cùng có mặt",
"description": Vào lúc 22h ngày 8/6, đội tuyển Việt Nam sẽ có buổi tập trên sân Shabab Al-ahli.",
"src": https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/8/untitled-1623165495924715520315.png",
"alt": Tuyen Viet Nam Tham Du Vong Loai World Cup 2022, Viet Nam, Tuyen Viet Nam, Tuan Anh, Van Toan, Viet Nam Nghien Nat Indonesia 4 0, ",
"category": news",
"date": 08/06/2021",
"time": 02:06 PM",
"link": "/truc-tiep-tu-uae-hinh-anh-buoi-tap-dau-tien-cua-tuyen-viet-nam-sau-tran-gap-indonesia-nin-tho-huong-ve-tuan-anh-van-toan",
"zcomponent": page_20210608140647",
"filepath": ./20210608140647-truc-tiep-tu-uae-hinh-anh-buoi-tap-dau-tien-cua-tuyen-viet-nam-sau-tran-gap-indonesia-nin-tho-huong-ve-tuan-anh-van-toan.js"
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
  "[Trực tiếp từ UAE] Buổi tập đầu tiên của tuyển Việt Nam sau trận gặp Indonesia: Tuấn Anh, Văn Toàn cùng có mặt";
const author = "TEAM SPORT5 (TỪ UAE),";
const source = "Trí Thức Trẻ";
const timestamp = "08/06/2021 02:06 PM";
const description =
  "Vào lúc 22h ngày 8/6, đội tuyển Việt Nam sẽ có buổi tập trên sân Shabab Al-ahli.";
const link =
  "truc-tiep-tu-uae-hinh-anh-buoi-tap-dau-tien-cua-tuyen-viet-nam-sau-tran-gap-indonesia-nin-tho-huong-ve-tuan-anh-van-toan";
const tagparam = [
  "tuyen-viet-nam-tham-du-vong-loai-world-cup-2022",
  "viet-nam",
  "tuyen-viet-nam",
  "tuan-anh",
  "van-toan",
  "viet-nam-nghien-nat-indonesia-4-0",
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

export default function page_20210608140647() {
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
            <AdsHorizontal />
            <div className="content">
              <div className="contentContainer">
                <p className="description">{description}</p>
                <div className="contentBody">
                  <p>Livestream trực tiếp buổi tập của đội tuyển Việt Nam</p>
                  <p>
                    22h30: Đội tuyển Việt Nam chuyển sang bài tập chiến thuật và
                    các phóng viên không được tác nghiệp. Phần tường thuật buổi
                    tập sẽ kết thúc tại đây.
                  </p>
                  <p>
                    22h24: Các cầu thủ đang chuyển sang bài tập dứt điểm. Trong
                    khung thành đang là Văn Toản và Văn Hoàng.
                  </p>
                  <p>
                    22h20: Tuyển Việt Nam sẽ có thêm 2 buổi tập nữa trước khi
                    bước vào trận đấu với Malaysia hôm 11/6. Ở buổi tập cuối vào
                    10/6, chúng ta sẽ được tập ở sân Al Maktoum, địa điểm thi
                    đấu.
                  </p>
                  <p>
                    22h15: Các cầu thủ nhóm 2 đang chuyển sang bài tập chạy.
                    Nhóm này có tổng cộng 14 người.
                  </p>
                  <p>
                    22h10: Nhóm 2 được chia thành những nhóm nhỏ để tập chuyền
                    bóng. Các cầu thủ đang tập khởi động trước khi bước vào bài
                    tập chiến thuật.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/8/untitled-162316608636475903587.png"
                    alt="Tuyen Viet Nam Tham Du Vong Loai World Cup 2022, Viet Nam, Tuyen Viet Nam, Tuan Anh, Van Toan, Viet Nam Nghien Nat Indonesia 4 0, "
                    note="Ảnh: Hiếu Lương"
                  />
                  <p>
                    22h04: Các cầu thủ nhóm 1 đi bộ sang sân khác để tập nhẹ.
                  </p>
                  <p>
                    22h03: Đội tuyển Việt Nam đã chia thành 2 nhóm. Những cầu
                    thủ đá chính ở trận trước (nhóm 1) đã tới sân riêng để tập
                    nhẹ. Phần còn lại (nhóm 2) sẽ ở lại sân chính, tập luyện như
                    bình thường. Trong hình là các cầu thủ không thi đấu hoặc
                    thi đấu ít ở trận trước.
                  </p>
                  <p>
                    22h00: Theo ghi nhận, cả Tuấn Anh và Văn Toàn ĐỀU CÓ MẶT tại
                    buổi tập hôm nay. Đây chắc chắn là tín hiệu lạc quan với
                    những người hâm mộ Việt Nam. Tuy nhiên, khả năng góp mặt
                    trong trận gặp Malaysia của bộ đôi này là không nhiều. Tuấn
                    Anh (chấn thương cổ chân) và Văn Toàn (chấn thương háng) đều
                    cần thời gian để hồi phục.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/8/1984862333196589596722737564604944937182116n-16231675865191249940842.jpg"
                    alt="Tuyen Viet Nam Tham Du Vong Loai World Cup 2022, Viet Nam, Tuyen Viet Nam, Tuan Anh, Van Toan, Viet Nam Nghien Nat Indonesia 4 0, "
                    note="Văn Toàn, Tuấn Anh đi bộ nhẹ nhàng, chưa rõ mức độ chấn thương (Ảnh: Hiếu Lương)"
                  />
                  <p>
                    21h55: HLV Park Hang-seo cùng ban huấn luyện đang có những
                    chia sẻ với toàn đội về trận đấu vừa qua với đội tuyển
                    Indonesia. Ở màn so tài này, chúng ta đã bị đối thủ cầm chân
                    trong 45 phút đầu tiên trước khi ghi được 4 bàn ở khoảng
                    thời gian còn lại.
                  </p>
                  <p>
                    21h49: Các cầu thủ đã bước xuống xa. Một số sẽ vào thẳng
                    sân, những thành viên còn lại sẽ vào phòng thay đồ để chuẩn
                    bị.
                  </p>
                  <p>
                    21h45: Đội tuyển Việt Nam đã có mặt tại sân tập. Trong buổi
                    tập hôm nay, các phóng viên chỉ được tác nghiệp trong 20
                    phút. Còn lại, toàn đội sẽ tập chiến thuật kín và không được
                    phép ghi hình.
                  </p>
                  <p>
                    21h39: Khách sạn của đội tuyển cách sân tập khoảng 18 km.
                    Thầy trò HLV Park Hang-seo dự kiến sẽ có mặt sau ít phút
                    nữa.
                  </p>
                  <p>
                    21h22: Trên MXH, Nguyễn Nụ - em gái của Văn Toàn - tỏ ra rất
                    lo cho tình hình của anh trai. "Cả ngày lo lắng, sốt ruột
                    không thiết tha làm ăn gì cả. Biết rằng bóng đá chấn thương
                    là điều không tránh khỏi. Nhưng mà sáng sớm gọi điện thấy
                    anh mình đau đớn, ngồi dậy đi lại còn khó khăn thì thật sự
                    thương, xót lắm. Chỉ mong anh bình an may mắn thôi", cô
                    viết.
                  </p>
                  <p>
                    Trước đó, Văn Toàn không thể tự di chuyển mà phải nhờ đồng
                    đội cõng ra xe sau trận đấu gặp Indonesia. Tiền đạo sinh năm
                    1996 bị đau gần cuối hiệp 1. Theo chẩn đoán ban đầu, anh gặp
                    vấn đề ở cơ háng và có nguy cơ lỡ trận gặp Malaysia vào ngày
                    11/6.
                  </p>
                  <p>
                    21h12: Lúc này, Công Phượng và các đồng đội đã rời khỏi
                    khách sạn Crowne Plaza Festival City, lên đường tới sân tập.
                    Tinh thần của những chàng trai áo đỏ đang rất thoải mái sau
                    chiến thắng đậm đà trước Indonesia.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/8/1973501545357120374538662308877837132391958n-1-16231675864961129035323.jpg"
                    alt="Tuyen Viet Nam Tham Du Vong Loai World Cup 2022, Viet Nam, Tuyen Viet Nam, Tuan Anh, Van Toan, Viet Nam Nghien Nat Indonesia 4 0, "
                    note="Tuyển Việt Nam rời khách sạn tới sân tập (Ảnh: Hiếu Lương)"
                  />
                  <p>
                    21h00: Buổi tập của tuyển Việt Nam diễn ra vào lúc 19h ở UAE
                    (22h theo giờ Việt Nam). Sở dĩ, chúng ta tập muộn nhằm tránh
                    cái nắng lên tới 40 độ vào buổi chiều ở nước bạn. Sân Shabab
                    Al-ahli nằm không quá xa khách sạn của tuyển Việt Nam.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/8/1972882415961613846940402405880536692044063n-1623167319164483134906.jpg"
                    alt="Tuyen Viet Nam Tham Du Vong Loai World Cup 2022, Viet Nam, Tuyen Viet Nam, Tuan Anh, Van Toan, Viet Nam Nghien Nat Indonesia 4 0, "
                    note="Hình ảnh tại SVĐ Shabab Al-ahli, nơi đội tuyển Việt Nam sẽ tập luyện vào tối nay"
                  />
                  <p>
                    Một ngày sau khi đánh bại với tỷ số 4-0 tại vòng loại thứ 2
                    World Cup 2022, đội tuyển Việt Nam sẽ có buổi tập trên sân
                    Shabab Al-ahli, nằm tại thủ đô Dubai.
                  </p>
                  <p>
                    Trong buổi tập này, nội dung được quan tâm nhất là tình hình
                    sức khỏe của Tuấn Anh và Văn Toàn. Cả hai gặp chấn thương ở
                    trận đấu vừa qua và chưa rõ mức độ nghiêm trọng. Tuấn Anh
                    phải rời sân ở ngay phút 35 còn Văn Toàn phải nhờ đồng đội
                    cõng ra xe trở về khách sạn. Bộ đôi đang khoác áo HAGL đã đi
                    khám vào sáng nay nhưng kết quả chưa được công bố.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/8/19772848140704694063668749202030197016837496n-16231676230862147483471.jpg"
                    alt="Tuyen Viet Nam Tham Du Vong Loai World Cup 2022, Viet Nam, Tuyen Viet Nam, Tuan Anh, Van Toan, Viet Nam Nghien Nat Indonesia 4 0, "
                    note="Tuấn Anh bị đau ở cổ chân sau một pha vào bóng ác ý của cầu thủ Indonesia"
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/8/untitled-1623165495924715520315.png"
                    alt="Tuyen Viet Nam Tham Du Vong Loai World Cup 2022, Viet Nam, Tuyen Viet Nam, Tuan Anh, Van Toan, Viet Nam Nghien Nat Indonesia 4 0, "
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/8/untitled-16231648282871461089320.png"
                    alt="Tuyen Viet Nam Tham Du Vong Loai World Cup 2022, Viet Nam, Tuyen Viet Nam, Tuan Anh, Van Toan, Viet Nam Nghien Nat Indonesia 4 0, "
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/8/1981555297796336393669547863672120769818457n-16231672111122018601195.jpg"
                    alt="Tuyen Viet Nam Tham Du Vong Loai World Cup 2022, Viet Nam, Tuyen Viet Nam, Tuan Anh, Van Toan, Viet Nam Nghien Nat Indonesia 4 0, "
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/8/untitled-1623164274965361446893.png"
                    alt="Tuyen Viet Nam Tham Du Vong Loai World Cup 2022, Viet Nam, Tuyen Viet Nam, Tuan Anh, Van Toan, Viet Nam Nghien Nat Indonesia 4 0, "
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/8/sdfsd-1623163690272965483174.png"
                    alt="Tuyen Viet Nam Tham Du Vong Loai World Cup 2022, Viet Nam, Tuyen Viet Nam, Tuan Anh, Van Toan, Viet Nam Nghien Nat Indonesia 4 0, "
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/8/untitled-16231636902972021786346.png"
                    alt="Tuyen Viet Nam Tham Du Vong Loai World Cup 2022, Viet Nam, Tuyen Viet Nam, Tuan Anh, Van Toan, Viet Nam Nghien Nat Indonesia 4 0, "
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/8/img9335-1623159710060826234482-16231621998271325091053.jpg"
                    alt="Tuyen Viet Nam Tham Du Vong Loai World Cup 2022, Viet Nam, Tuyen Viet Nam, Tuan Anh, Van Toan, Viet Nam Nghien Nat Indonesia 4 0, "
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/8/1982181171453839108820887489647875234361715n-16231617870991037084807.jpg"
                    alt="Tuyen Viet Nam Tham Du Vong Loai World Cup 2022, Viet Nam, Tuyen Viet Nam, Tuan Anh, Van Toan, Viet Nam Nghien Nat Indonesia 4 0, "
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/8/1910-16231612661871946165385.jpg"
                    alt="Tuyen Viet Nam Tham Du Vong Loai World Cup 2022, Viet Nam, Tuyen Viet Nam, Tuan Anh, Van Toan, Viet Nam Nghien Nat Indonesia 4 0, "
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/8/photo-1-1623143297763575906695.png"
                    alt="Tuyen Viet Nam Tham Du Vong Loai World Cup 2022, Viet Nam, Tuyen Viet Nam, Tuan Anh, Van Toan, Viet Nam Nghien Nat Indonesia 4 0, "
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
