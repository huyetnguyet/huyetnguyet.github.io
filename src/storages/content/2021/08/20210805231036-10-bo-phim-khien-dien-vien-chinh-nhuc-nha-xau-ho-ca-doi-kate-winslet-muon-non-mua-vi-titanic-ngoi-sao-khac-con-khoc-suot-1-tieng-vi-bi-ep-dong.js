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
"timestamp": '05/08/2021 11:10 PM',
"title": '10 bộ phim khiến diễn viên chính nhục nhã, xấu hổ cả đời: Kate Winslet muốn nôn mửa vì Titanic, ngôi sao khác còn khóc suốt 1 tiếng vì bị ép đóng!',
"description": 'Những cái tên dưới đây dù hay - dở thế nào thì vẫn khiến diễn viên chính phải xấu hổ và nhục nhã, hối hận mãi không thôi.',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/1/photo-1-16278081029641864655115.png',
"alt": 'Titanic (1997),kate winslet,Nicole Kidman,zac efron,Jamie Lee Curtis,Kelly Clarkson,Will Smith,channing tatum,Lindsay Lohan,halle berry,ben affleck,phim Âu Mỹ,',
"category": 'stars',
"date": '05/08/2021',
"time": '11:10 PM',
"link": '/10-bo-phim-khien-dien-vien-chinh-nhuc-nha-xau-ho-ca-doi-kate-winslet-muon-non-mua-vi-titanic-ngoi-sao-khac-con-khoc-suot-1-tieng-vi-bi-ep-dong',
"zcomponent": 'page_20210805231036',
"filepath": './20210805231036-10-bo-phim-khien-dien-vien-chinh-nhuc-nha-xau-ho-ca-doi-kate-winslet-muon-non-mua-vi-titanic-ngoi-sao-khac-con-khoc-suot-1-tieng-vi-bi-ep-dong.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "stars";
const categoryLink = "/stars";
const title =
  "10 bộ phim khiến diễn viên chính nhục nhã, xấu hổ cả đời: Kate Winslet muốn nôn mửa vì Titanic, ngôi sao khác còn khóc suốt 1 tiếng vì bị ép đóng!";
const author = "HIEUTHUBA,";
const source = "Trí Thức Trẻ";
const timestamp = "05/08/2021 11:10 PM";
const description =
  "Những cái tên dưới đây dù hay - dở thế nào thì vẫn khiến diễn viên chính phải xấu hổ và nhục nhã, hối hận mãi không thôi.";
const link =
  "10-bo-phim-khien-dien-vien-chinh-nhuc-nha-xau-ho-ca-doi-kate-winslet-muon-non-mua-vi-titanic-ngoi-sao-khac-con-khoc-suot-1-tieng-vi-bi-ep-dong";
const tagparam = [
  "Titanic (1997)",
  "kate winslet",
  "Nicole Kidman",
  "zac efron",
  "Jamie Lee Curtis",
  "Kelly Clarkson",
  "Will Smith",
  "channing tatum",
  "Lindsay Lohan",
  "halle berry",
  "ben affleck",
  "phim Âu Mỹ",
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

export default function page_20210805231036() {
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
                      Cứ tưởng đóng phim cũng là một loại vinh dự, thế nhưng vẫn
                      có nhiều bộ phim khiến chính diễn viên của nó nhiều năm
                      sau vẫn cảm thấy xấu hổ, nhục nhã và hối hận. Lý do lớn
                      nhất chính là vì chất lượng quá tệ có thể ảnh hưởng tới
                      hình ảnh và sự nghiệp của các ngôi sao lớn. Dưới đây là 13
                      ngôi sao nổi tiếng của Hollywood không ngại giấu giếm sự
                      xấu hổ của mình khi tham gia một vài bộ phim của quá khứ.
                    </p>
                    <h5>1. Ben Affleck - phim Daredevil</h5>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/1/photo-1-16278078890371264622200.jpg"
                      alt="1, Titanic (1997),kate winslet,Nicole Kidman,zac efron,Jamie Lee Curtis,Kelly Clarkson,Will Smith,channing tatum,Lindsay Lohan,halle berry,ben affleck,phim Âu Mỹ,"
                      note="Ben Affleck trong Daredevil (trái) và Batman v Superman (phải)"
                    />
                    <p>
                      Trong bài phỏng vấn năm 2016 với trang TimesTalks, tài tử{" "}
                      <strong>Ben Affleck</strong> chia sẻ rằng ông rất ghét bộ
                      phim Daredevil mà mình đóng chính. Đó cũng là lý do mà ông
                      chọn tham gia dự án Batman v Superman: Dawn Of Justice bởi
                      vì ông muốn "được làm phim siêu anh hùng tử tế một lần".
                      Đáng tiếc, Batman v Superman cũng trở thành đề tài tranh
                      cãi lâu dài của Hollywood với người khen, kẻ chê.
                    </p>
                    <h5>2. Halle Berry, phim Catwoman</h5>
                    <ContentImage
                      src="https://kenh14cdn.com/203336854389633024/2021/8/1/bd602fcdc937ad6b1be1f513e8763db339f4c78c-16278080142351402004362.gif"
                      alt="1, Titanic (1997),kate winslet,Nicole Kidman,zac efron,Jamie Lee Curtis,Kelly Clarkson,Will Smith,channing tatum,Lindsay Lohan,halle berry,ben affleck,phim Âu Mỹ,"
                      note="Ben Affleck trong Daredevil (trái) và Batman v Superman (phải)"
                    />
                    <p>
                      Khi <strong>Halle Berry</strong> nhận giải Mâm Xôi Vàng ở
                      hạng mục Nữ chính tệ nhất nhờ phim Catwoman, cô đã phát
                      biểu: "Tôi muốn cảm ơn hãng Warner Bros. vì cơ hội được
                      tham gia bộ phim dở ói này. Đây là điều mà sự nghiệp của
                      tôi cần: tụt từ đỉnh cao xuống đáy."
                    </p>
                    <h5>3. Lindsay Lohan, phim I Know Who Killed Me</h5>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/1/photo-1-16278081029641864655115.png"
                      alt="2, Titanic (1997),kate winslet,Nicole Kidman,zac efron,Jamie Lee Curtis,Kelly Clarkson,Will Smith,channing tatum,Lindsay Lohan,halle berry,ben affleck,phim Âu Mỹ,"
                      note=""
                    />
                    <p>
                      Khi một khán giả khoe trên Twitter rằng đã xem bộ phim này
                      đến 2 lần, nữ diễn viên <strong>Lindsay Lohan</strong> đã
                      retweet lại kèm câu trả lời: "Xem 2 lần là quá nhiều đó!"
                    </p>
                    <RelationNewsInPage category={category} />
                    <h5>
                      4. Channing Tatum, phim G.I. Joe: Rise Of Cobra
                    </h5>{" "}
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/1/photo-1-1627808139186825812156.jpg"
                      alt="3, Titanic (1997),kate winslet,Nicole Kidman,zac efron,Jamie Lee Curtis,Kelly Clarkson,Will Smith,channing tatum,Lindsay Lohan,halle berry,ben affleck,phim Âu Mỹ,"
                      note=""
                    />
                    <p>
                      Ở buổi phỏng vấn năm 2015, tài tử{" "}
                      <strong>Channing Tatum</strong> đã phẫn nộ bộc bạch: "Tôi
                      cực kỳ ghét bộ phim ấy. Tôi ghét nó. Tôi đã bị bắt đóng
                      phim đó." Nam diễn viên còn chia sẻ thêm rằng "vốn dĩ kịch
                      bản phim còn không hay chút nào."
                    </p>
                    <h5>5. Will Smith, phim After Earth</h5>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/1/photo-1-16278081959101891605513.jpg"
                      alt="4, Titanic (1997),kate winslet,Nicole Kidman,zac efron,Jamie Lee Curtis,Kelly Clarkson,Will Smith,channing tatum,Lindsay Lohan,halle berry,ben affleck,phim Âu Mỹ,"
                      note=""
                    />
                    <p>
                      <strong>Will Smith</strong> từng kể với trang Esquire rằng
                      After Earth "là thất bại đau đớn nhất" trong sự nghiệp của
                      anh. Tài tử này còn nói thêm rằng anh cảm thấy hối hận
                      "như cực hình" vì đã để con trai Jaden Smith cùng tham gia
                      bộ phim này với mình.
                    </p>
                    <h5>6. Kelly Clarkson, phim From Justin To Kelly</h5>
                    <p>
                      Năm 2015, ngôi sao ca nhạc <strong>Kelly Clarkson</strong>{" "}
                      kể với tờ Us Weekly rằng: "Tôi đã khóc suốt 1 tiếng qua
                      điện thoại với nhà sản xuất của American Idol, cầu xin
                      được thoát ra khỏi bản hợp đồng đã bắt tôi phải đóng From
                      Justin To Kellly."
                    </p>
                    <h5>7. Jamie Lee Curtis, phim Virus</h5>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/1/photo-1-16278083217181791381295.jpg"
                      alt="5, Titanic (1997),kate winslet,Nicole Kidman,zac efron,Jamie Lee Curtis,Kelly Clarkson,Will Smith,channing tatum,Lindsay Lohan,halle berry,ben affleck,phim Âu Mỹ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/1/photo-1-16278083033432083635890.jpg"
                      alt="6, Titanic (1997),kate winslet,Nicole Kidman,zac efron,Jamie Lee Curtis,Kelly Clarkson,Will Smith,channing tatum,Lindsay Lohan,halle berry,ben affleck,phim Âu Mỹ,"
                      note=""
                    />
                    <p>
                      Ngôi sao <strong>Jamie Lee Curtis</strong> đã gọi bộ phim
                      Virus của mình là "một đống phân" vào năm 2018 khi quảng
                      bá cho phim kinh dị Halloween. "Nó tệ đến kinh hoàng," bà
                      nói. "Đó chắc là điểm cộng duy nhất của nó. Khi bạn bè của
                      tôi than thở rằng phim của họ dở, tôi ngay lập tức trấn an
                      họ rằng tôi còn phải đóng phim dở nhất là Virus."
                    </p>
                    <h5>8. Zac Efron, phim High School Musical</h5>
                    <ContentImage
                      src="https://kenh14cdn.com/203336854389633024/2021/8/1/photo-1-1627808396885613896425.gif"
                      alt="6, Titanic (1997),kate winslet,Nicole Kidman,zac efron,Jamie Lee Curtis,Kelly Clarkson,Will Smith,channing tatum,Lindsay Lohan,halle berry,ben affleck,phim Âu Mỹ,"
                      note=""
                    />{" "}
                    <ContentImage
                      src="https://kenh14cdn.com/203336854389633024/2021/8/1/photo-1-162780835479885569720.gif"
                      alt="6, Titanic (1997),kate winslet,Nicole Kidman,zac efron,Jamie Lee Curtis,Kelly Clarkson,Will Smith,channing tatum,Lindsay Lohan,halle berry,ben affleck,phim Âu Mỹ,"
                      note=""
                    />
                    <p>
                      Mặc dù High School Musical mang đến cho{" "}
                      <strong>Zac Efron</strong> tiền tài và danh vọng, tuy
                      nhiên tài tử này lại ghét cay ghét đắng loạt phim ấy. "Tôi
                      nhìn lại và thỉnh thoảng chỉ muốn đá chính mình một phát",
                      nam diễn viên chia sẻ. Hào quang quá lớn của High School
                      Muscial đã khiến Zac Efron chật vật để "thoát vai" trước
                      công chúng.
                    </p>
                    <h5>9. Nicole Kidman, phim Australia</h5>
                    <ContentImage
                      src="https://kenh14cdn.com/203336854389633024/2021/8/1/tumblrplm4zf38yx1qbwrnuo1540-16278084452521834382710.gif"
                      alt="6, Titanic (1997),kate winslet,Nicole Kidman,zac efron,Jamie Lee Curtis,Kelly Clarkson,Will Smith,channing tatum,Lindsay Lohan,halle berry,ben affleck,phim Âu Mỹ,"
                      note=""
                    />
                    <p>
                      Khi trò chuyện với đài Sydney về bộ phim tình cảm mà mình
                      đóng chính, minh tinh <strong>Nicole Kidman</strong> tâm
                      sự rằng: "Tôi không thể nhìn lại bộ phim này và thấy tự
                      hào được."
                    </p>
                    <h5>10. Kate Winslet, phim Titanic</h5>
                    <ContentImage
                      src="https://kenh14cdn.com/203336854389633024/2021/8/1/photo-1-16278084960851658256749.gif"
                      alt="6, Titanic (1997),kate winslet,Nicole Kidman,zac efron,Jamie Lee Curtis,Kelly Clarkson,Will Smith,channing tatum,Lindsay Lohan,halle berry,ben affleck,phim Âu Mỹ,"
                      note=""
                    />
                    <p>
                      Mặc dù Titanic mang về cho <strong>Kate Winslet</strong>{" "}
                      một đề cử Oscar, đồng thời trở thành phim nắm giữ kỷ lục
                      doanh thu tỷ đô trong thời gian dài, nữ chính của phim vẫn
                      ghét tác phẩm này thậm tệ. Năm 2012 khi Titanic được phát
                      hành lại với bản 3D, Kate Winslet chia sẻ với CNN rằng cô
                      không thể chịu đựng việc xem bộ phim này, và muốn "đóng
                      lại tất cả các cảnh". Nữ diễn viên cho rằng diễn xuất của
                      mình trong phim rất dở. Đồng thời, cô nói rằng cô cũng
                      muốn "nôn mửa" mỗi khi phải nghe lại ca khúc My Heart Will
                      Go On.
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
