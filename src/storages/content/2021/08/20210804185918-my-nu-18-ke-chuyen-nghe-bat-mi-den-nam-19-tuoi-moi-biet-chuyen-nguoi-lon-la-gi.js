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
"timestamp": '04/08/2021 06:59 PM',
"title": 'Mỹ nữ 18+ kể chuyện nghề, bật mí đến năm 19 tuổi mới biết "chuyện người lớn là gì"',
"description": 'Theo chia sẻ của Ema Futaba, cô nàng cảm thấy mình là người run nhất khi bước chân vào ngành công nghiệp 18+.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/8/4/photo-1-16280459479352124794069.jpg',
"alt": 'EMA FUTABA,IDOL,',
"category": 'images',
"date": '04/08/2021',
"time": '06:59 PM',
"link": '/my-nu-18-ke-chuyen-nghe-bat-mi-den-nam-19-tuoi-moi-biet-chuyen-nguoi-lon-la-gi',
"zcomponent": 'page_20210804185918',
"filepath": './20210804185918-my-nu-18-ke-chuyen-nghe-bat-mi-den-nam-19-tuoi-moi-biet-chuyen-nguoi-lon-la-gi.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "images";
const categoryLink = "/images";
const title =
  'Mỹ nữ 18+ kể chuyện nghề, bật mí đến năm 19 tuổi mới biết "chuyện người lớn là gì"';
const author = "DS";
const source = "";
const timestamp = "04/08/2021 06:59 PM";
const description =
  "Theo chia sẻ của Ema Futaba, cô nàng cảm thấy mình là người run nhất khi bước chân vào ngành công nghiệp 18+.";
const link =
  "my-nu-18-ke-chuyen-nghe-bat-mi-den-nam-19-tuoi-moi-biet-chuyen-nguoi-lon-la-gi";
const tagparam = ["EMA FUTABA", "IDOL"];
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

export default function page_20210804185918() {
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
                      <strong>Ema Futaba</strong> sinh năm 1998, gia nhập ngành
                      giải trí vào giữa năm 2018 với tư cách 1 người mẫu áo tắm.
                      Đến tháng 8/2020, cô nàng quyết định chuyển nghề và trở
                      thành 1 diễn viên phim người lớn khi đầu quân cho công ty
                      Idea Pocket vào tháng 8/2020. Sở hữu thân hình nhỏ nhắn
                      cùng khuôn mặt đáng yêu, Ema Futaba đã nhanh chóng trở
                      thành cái tên mới nổi của hãng này trong khoảng thời gian
                      cuối năm 2020, đầu năm 2021.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/4/photo-1-16280459479352124794069.jpg"
                      alt="1, EMA FUTABA,IDOL,"
                      note=""
                    />
                    <p>
                      Theo chia sẻ của <strong>Ema Futaba</strong>, hồi đi học
                      thì cô nàng rất rụt rè, cũng không có thích thú gì chuyện
                      tình cảm yêu đương cả. Cô nàng chỉ biết một chút về những
                      câu chuyện "người lớn" thông qua các bộ manga mà cô nàng
                      đọc qua.{" "}
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/4/2203911375373135877010755441589620536661726n-16280487417351552763748.jpg"
                      alt="2, EMA FUTABA,IDOL,"
                      note=""
                    />
                    <p>
                      Dù vậy, đến năm 19 tuổi thì <strong>Ema Futaba</strong>{" "}
                      mới lần đầu biết về "chuyện đó". Cô nàng có lần đầu tới
                      khách sạn cùng bạn trai của mình, cũng là một người bạn
                      học bằng tuổi ở thời điểm đó. Thậm chí, cô nàng cũng mới
                      lần đầu biết về thể loại 18+ là gì. Thậm chí, Ema vẫn
                      không tin được điều này và đến khi trở thành diễn viên 18+
                      thì cô nàng bật cười về chuyện đó.{" "}
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/4/22279205227176719851927675907747329249366972n-16280487417531957736527.jpg"
                      alt="3, EMA FUTABA,IDOL,"
                      note=""
                    />
                    <p>
                      So với những đồng nghiệp cùng lứa,{" "}
                      <strong>Ema Futaba</strong> là người căng thẳng nhiều
                      nhất. Lần đầu lên hình, cô nàng chỉ ngủ được 2 tiếng đồng
                      hồ. Thậm chí, cô nàng còn run đến mức không thể cởi đồ vì
                      quá ngượng ngùng và xấu hổ. Đạo diễn đã phải ra nói chuyện
                      với cô nàng một lúc và đảm bảo rằng cô nàng có ổn hay
                      không. Cô gái sinh năm 1998 quá bối rối và chỉ cảm giác
                      rằng như đang ở trung tâm của Trái Đất vậy. Kết quả là,
                      buổi quay hôm đó thất bại và Ema đã phải quay lại vào 1
                      buổi khác.{" "}
                    </p>
                    <p>
                      Được biết, cảm hứng để <strong>Ema Futaba</strong> bước
                      chân vào ngành AV là người đàn chị Kana Momonogi. Ema luôn
                      muốn trở thành <strong>idol</strong> giống như Kana
                      Momonogi, nhưng không đủ dũng cảm để tiến tới vì sợ người
                      quen hay người nhà thấy được. Rồi đến khi đọc được bài
                      đăng của Idea Pocket đang tìm 1 diễn viên muốn giống như
                      Kana Momonogi, cô nàng đã không ngần ngại mà gọi ngay.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      <strong>Ema Futaba</strong> cũng đã có lần tâm sự về
                      chuyện công việc với fan hâm mộ. Theo đó, điểm mạnh của cô
                      nàng là sự nghiêm túc và nhiệt huyết trên phim trường, khi
                      luôn muốn thử nghiệm tất cả mọi thứ, thậm chí là bắt chước
                      những gì mà Kana Momonogi đã từng làm. Ban đầu thì hơi
                      ngượng ngùng 1 chút, nhưng từ các sản phẩm sau thì cô nàng
                      cảm thấy thoải mái hơn và đang cố gắng để trở thành người
                      toàn diện nhất có thể.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/4/2253993602049144249041486466168848961506790n-16280487417691646542584.jpg"
                      alt="4, EMA FUTABA,IDOL,"
                      note=""
                    />
                    <p>
                      Bên cạnh đó, Ema cũng không quên cảm ơn những người đã dõi
                      theo và ủng hộ mình. Cô nàng muốn trở thành 1 diễn viên có
                      thể "giải tỏa" sự mệt mỏi cho các fan, khiến họ thấy tốt
                      hơn và luôn nhớ đến mình sau ngày dài làm việc mệt mỏi.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/4/1668206101750212577859914807888944255048253n-16280487416952112921833.jpg"
                      alt="5, EMA FUTABA,IDOL,"
                      note=""
                    />
                    <p>Bài viết được thực hiện với sự trợ giúp của AV Crush.</p>
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
