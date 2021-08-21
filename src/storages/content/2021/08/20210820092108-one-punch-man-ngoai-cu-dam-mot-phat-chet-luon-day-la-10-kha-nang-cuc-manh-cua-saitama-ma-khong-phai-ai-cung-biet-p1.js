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
"timestamp": '20/08/2021 09:21 AM',
"title": 'One Punch Man: Ngoài cú đấm "một phát chết luôn" đây là 10 khả năng cực mạnh của Saitama mà không phải ai cũng biết (P1)',
"description": 'Trong One Punch Man, Saitama được biết đến với những cú đấm cực mạnh, tuy nhiên bên cạnh đó anh cũng sở hữu những khả năng đáng kinh ngạc khác.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/20/anh-1-16294330111421917383989.jpg',
"alt": 'ONE PUNCH MAN,THÁNH PHỒNG SAITAMA,CÚ ĐẤM MỘT PHÁT CHẾT LUÔN,SỨC MẠNH SAITAMA,MANGA NHẬT BẢN,',
"category": 'games',
"date": '20/08/2021',
"time": '09:21 AM',
"link": '/one-punch-man-ngoai-cu-dam-mot-phat-chet-luon-day-la-10-kha-nang-cuc-manh-cua-saitama-ma-khong-phai-ai-cung-biet-p1',
"zcomponent": 'page_20210820092108',
"filepath": './20210820092108-one-punch-man-ngoai-cu-dam-mot-phat-chet-luon-day-la-10-kha-nang-cuc-manh-cua-saitama-ma-khong-phai-ai-cung-biet-p1.js'
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
  'One Punch Man: Ngoài cú đấm "một phát chết luôn" đây là 10 khả năng cực mạnh của Saitama mà không phải ai cũng biết (P1)';
const author = "SuSu";
const source = "Trí Thức Trẻ";
const timestamp = "20/08/2021 09:21 AM";
const description =
  "Trong One Punch Man, Saitama được biết đến với những cú đấm cực mạnh, tuy nhiên bên cạnh đó anh cũng sở hữu những khả năng đáng kinh ngạc khác.";
const link =
  "one-punch-man-ngoai-cu-dam-mot-phat-chet-luon-day-la-10-kha-nang-cuc-manh-cua-saitama-ma-khong-phai-ai-cung-biet-p1";
const tagparam = [
  "ONE PUNCH MAN",
  "THÁNH PHỒNG SAITAMA",
  "CÚ ĐẤM MỘT PHÁT CHẾT LUÔN",
  "SỨC MẠNH SAITAMA",
  "MANGA NHẬT BẢN",
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

export default function page_20210820092108() {
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
                      Tính đến thời điểm này Saitama được xem là thực thể mạnh
                      nhất trong <strong>One Punch Man</strong>. Anh nổi tiếng
                      với cú đấm "một phát chết luôn" hạ gục tất cả các quái vật
                      dù có mạnh mẽ và nguy hiểm đến đâu. Và đây chính là sức
                      mạnh mang tính biểu tượng của Saitama, nhắc đến anh hói là
                      phải nhớ ngay đến điều này.
                    </p>
                    <p>
                      Tuy nhiên nhiều người không biết rằng Saitama có thể gây
                      ra nhiều sát thương khác mà không cần dựa vào cú đấm này,
                      vì bản thân anh còn rất nhiều những khả năng đặc biệt
                      khác. Nói cách khác, nếu Saitama được chuyển đến một chiều
                      không gian khác nơi những cú đấm của anh không có tác dụng
                      thì anh vẫn sẽ là một trong những anh hùng mạnh nhất ở đó.
                    </p>
                    <p>
                      Dưới đây là 10 sức mạnh của Saitama mà không phải ai cũng
                      biết.
                    </p>
                    <h5>Không cần bay mà thay vào đó là nhảy</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/20/anh-1-16294330111421917383989.jpg"
                      alt="1, ONE PUNCH MAN,THÁNH PHỒNG SAITAMA,CÚ ĐẤM MỘT PHÁT CHẾT LUÔN,SỨC MẠNH SAITAMA,MANGA NHẬT BẢN,"
                      note=""
                    />

                    <p>
                      Nghe có vẻ kỳ lạ, nhưng Saitama không thể bay bởi vì bản
                      chất anh vẫn là một con người bình thường. Tuy nhiên thay
                      vào đó anh có khả năng nhảy cực kỳ ấn tượng. Anh có thể dễ
                      dàng nhảy qua các tòa nhà, tránh các đòn tấn công bằng các
                      cú bật cao. Ví dụ ấn tượng nhất về cú nhảy của Saitama là
                      khi chiến đấu với Boros, anh đã nhảy bật từ Mặt Trăng về
                      Trái Đất.
                    </p>
                    <h5>Có thể sống sót trong môi trường khắc nghiệt</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/20/anh-2-1629433011161720979100.jpg"
                      alt="2, ONE PUNCH MAN,THÁNH PHỒNG SAITAMA,CÚ ĐẤM MỘT PHÁT CHẾT LUÔN,SỨC MẠNH SAITAMA,MANGA NHẬT BẢN,"
                      note=""
                    />

                    <p>
                      Saitama mới chỉ lên vũ trụ một lần, nhưng anh ấy vẫn sống
                      sót mà không bị tổn hại gì. Trong hầu hết các trường hợp,
                      chỉ cần ở một vài giây bên ngoài bầu khí quyển của Trái
                      Đất là không thể chịu đựng được rồi. Thường thì sẽ chết
                      ngay hoặc bị tổn thương nghiêm trọng, thế nhưng mọi quy
                      tắc sinh tử đều không áp dụng với Saitama.
                    </p>
                    <RelationNewsInPage category={category} />

                    <p>
                      Saitama đã không thở trong suốt thời gian ở ngoài vũ trụ,
                      thay vào đó dùng ngón tay bịt mũi. Quan trọng hơn, cơ thể
                      anh bất khả xâm phạm trước những tác động chết người của
                      bức xạ mặt trời, ngay cả khi không có tầng ôzôn để bảo vệ.
                    </p>
                    <h5>Cơ thể có khả năng chống lại các tác động độc hại</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/20/anh-3-16294330111661012891129.jpg"
                      alt="3, ONE PUNCH MAN,THÁNH PHỒNG SAITAMA,CÚ ĐẤM MỘT PHÁT CHẾT LUÔN,SỨC MẠNH SAITAMA,MANGA NHẬT BẢN,"
                      note=""
                    />

                    <p>
                      Có lẽ không tồn tại thứ gì có khả năng làm tổn thương
                      Saitama theo bất kỳ cách nào. Cho dù đó là lửa, băng, ma
                      thuật, psionics, vũ khí, thiên thạch… thì tất cả đều không
                      có tác dụng, nó không thể ảnh hưởng đến cơ thể của anh,
                      ngoại trừ bộ quần áo anh mặc. Tuy nhiên có một điểm làm lạ
                      là Saitama không miễn dịch được với con muỗi, đây là thực
                      thể duy nhất có thể làm ảnh hưởng đến cơ thể của anh.
                    </p>
                    <h5>Tốc độ nhanh hơn cả âm thanh</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/20/anh-4-1629433011182440772674.jpg"
                      alt="4, ONE PUNCH MAN,THÁNH PHỒNG SAITAMA,CÚ ĐẤM MỘT PHÁT CHẾT LUÔN,SỨC MẠNH SAITAMA,MANGA NHẬT BẢN,"
                      note=""
                    />
                    <p>
                      Speed-O-Sound Sonic, hay còn được biết đến với cái tên
                      Sonic Siêu Thanh được biết là một nhân vật nhanh nhất One
                      Pucnh Man, sở hữu tốc độ còn nhanh hơn cả âm thanh. Thế
                      nhưng gặp Saitama cũng phải "tắt điện", chỉ cần chạm nhẹ
                      vào háng Saitama đã có thể hạ gục được Sonic rồi. Điều này
                      chứng tỏ Saitama sở hữu một tốc độ siêu việt.
                    </p>
                    <h5>Chuyển động nhanh và khéo léo</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/20/anh-5-1629433011200772136771.jpg"
                      alt="5, ONE PUNCH MAN,THÁNH PHỒNG SAITAMA,CÚ ĐẤM MỘT PHÁT CHẾT LUÔN,SỨC MẠNH SAITAMA,MANGA NHẬT BẢN,"
                      note=""
                    />
                    <p>
                      Sự khéo léo trong chuyển động của Saitama là không thể so
                      sánh được, và rất ít anh hùng có thể theo kịp anh ở khía
                      cạnh này. Một trong những dịp trước đó đã thể hiện kỹ năng
                      này là khi Saitama tham gia kỳ thi thực hành để gia nhập
                      Hiệp hội Anh hùng, anh đạt điểm tuyệt đối tại
                      Whack-A-Mole.
                    </p>
                    <p>
                      Thậm chí anh còn có thể tạo ra hàng tá dư ảnh mà không thể
                      phân biệt được với phiên bản thực. Trên thực tế chỉ có thể
                      theo dõi chuyển động của Saitama khi anh mất tập trung hay
                      bối rối trong chiến đấu mà thôi.
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
