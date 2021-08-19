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
"timestamp": '19/08/2021 12:58 PM',
"title": 'Sau 11 năm, Song Ji Hyo cuối cùng đã chính thức lên tiếng về chuyện tình cảm với Kim Jong Kook',
"description": 'Câu trả lời của Song Ji Hyo về mối quan hệ với Kim Jong Kook trong cuộc phỏng vấn mới đây đã khiến fan vô cùng bất ngờ.',
"src": 'https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/18/4407o2-15946316607471974203887-16292592199701564511157.jpg',
"alt": 'song ji hyo,Kim Jong Kook & Song Ji Hyo,running man,kim jong kook,sao hẹn hò,The Witchs Diner (2021),spartace,',
"category": 'stars',
"date": '19/08/2021',
"time": '12:58 PM',
"link": '/sau-11-nam-song-ji-hyo-cuoi-cung-da-chinh-thuc-len-tieng-ve-chuyen-tinh-cam-voi-kim-jong-kook',
"zcomponent": 'page_20210819125841',
"filepath": './20210819125841-sau-11-nam-song-ji-hyo-cuoi-cung-da-chinh-thuc-len-tieng-ve-chuyen-tinh-cam-voi-kim-jong-kook.js'
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
  "Sau 11 năm, Song Ji Hyo cuối cùng đã chính thức lên tiếng về chuyện tình cảm với Kim Jong Kook";
const author = "HỒNG HẢI,";
const source = "Trí Thức Trẻ";
const timestamp = "19/08/2021 12:58 PM";
const description =
  "Câu trả lời của Song Ji Hyo về mối quan hệ với Kim Jong Kook trong cuộc phỏng vấn mới đây đã khiến fan vô cùng bất ngờ.";
const link =
  "sau-11-nam-song-ji-hyo-cuoi-cung-da-chinh-thuc-len-tieng-ve-chuyen-tinh-cam-voi-kim-jong-kook";
const tagparam = [
  "song ji hyo",
  "Kim Jong Kook & Song Ji Hyo",
  "running man",
  "kim jong kook",
  "sao hẹn hò",
  "The Witchs Diner (2021)",
  "spartace",
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

export default function page_20210819125841() {
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
                      Câu trả lời của <strong>Song Ji Hyo</strong> về mối quan
                      hệ với <strong>Kim Jong Kook</strong> trong cuộc phỏng vấn
                      mới đây đã khiến fan vô cùng bất ngờ.
                    </p>
                    <p>
                      <strong>Song Ji Hyo</strong> -{" "}
                      <strong>Kim Jong Kook</strong> là cặp đôi{" "}
                      <strong>Running Man</strong> được dân tình "đẩy thuyền" vô
                      cùng nhiệt tình nhờ những "loveline" ngọt lịm tim. Netizen
                      đều mong cặp đôi <strong>SpartAce</strong> sớm hẹn hò thực
                      sự và về chung 1 nhà.
                    </p>
                    <p>
                      Thế nhưng trong cuộc phỏng vấn để quảng bá bộ phim The
                      Witchs Diner gần đây, <strong>Song Ji Hyo</strong> đã có
                      động thái phủ nhận phũ phàng khiến netizen sốc nặng. "Mợ
                      ngố" đã làm rõ về mối quan hệ của cô và "anh hổ". Theo đó,
                      những loveline của cặp đôi đều từ trêu chọc mà thành, chứ
                      không phải do họ có tình cảm với nhau: "Vì mọi người đều
                      trêu chọc anh ấy nên tôi cũng bị kéo vào theo. Trước đây
                      tôi có hơi khó chịu với những màn loveline và tự hỏi liệu
                      chuyện đó có 'đúng' hay không. Tôi không biết phải trả lời
                      thế nào mỗi lần bị trêu nên đã rất căng thẳng".
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/18/rm61-15777788211412105262461-15946316607701424811330-1629259155198177333247.png"
                      alt="1, song ji hyo,Kim Jong Kook & Song Ji Hyo,running man,kim jong kook,sao hẹn hò,The Witchs Diner (2021),spartace,"
                      note="Song Ji Hyo khiến dân tình hụt hẫng khi hé lộ loveline với Kim Jong Kook hoàn toàn là trò trêu đùa"
                    />
                    <p>
                      "Nhưng bây giờ thì tôi đã thoải mái hơn khi nói về chuyện
                      này. Tôi nghĩ rằng 'phản ứng hóa học' giữa các thành viên
                      cũng rất tốt và những buổi ghi hình đều rất vui vẻ. Các
                      thành viên thân thiết với nhau hơn và ngày càng vui vẻ.
                      Giờ đây, tôi thoải mái hơn trong việc tận hưởng trò đùa,
                      và còn trêu chọc lại <strong>Kim Jong Kook</strong>. Tôi
                      nghĩ rằng chúng tôi đã thân thiết với nhau hơn. Nhưng
                      đương nhiên, chuyện loveline là không có thật" - câu trả
                      lời của <strong>Song Ji Hyo</strong> khiến fan không khỏi
                      hụt hẫng vì cặp đôi mình "đẩy thuyền" bấy lâu lại không hề
                      hẹn hò.
                    </p>
                    <RelationNewsInPage category={category} />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/18/4407o2-15946316607471974203887-16292592199701564511157.jpg"
                      alt="3, song ji hyo,Kim Jong Kook & Song Ji Hyo,running man,kim jong kook,sao hẹn hò,The Witchs Diner (2021),spartace,"
                      note=""
                    />
                    <p>
                      Fan "khóc ngất" vì dù tình cảm như thế này nhưng{" "}
                      <strong>Song Ji Hyo</strong> -{" "}
                      <strong>Kim Jong Kook</strong> lại không hề hẹn hò
                    </p>
                    <p>
                      <strong>Song Ji Hyo</strong> cũng tiếp tục trải lòng về
                      việc là thành viên <strong>Running Man</strong> trong suốt
                      11 năm qua: "Running Man thực sự trở thành 1 phần cuộc đời
                      tôi. Tôi bắt đầu tham gia chương trình năm 30 tuổi, giờ
                      đây tôi 41 rồi. Tôi đã dành toàn bộ tuổi 30 cho chương
                      trình, sống với tư cách thành viên Running Man trong 1/4
                      cuộc đời. Tôi hy vọng sẽ tiếp tục tham gia Running Man như
                      hiện tại. Đó là điều tôi muốn. Nếu tôi không tham gia
                      chương trình, tôi cảm thấy mất đi 1 phần con người mình".
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/18/20170102-051041-11-600x750-1499849778037-1577778821137597067397-1594631660761945307690-1629259219848890368351.jpg"
                      alt="2, song ji hyo,Kim Jong Kook & Song Ji Hyo,running man,kim jong kook,sao hẹn hò,The Witchs Diner (2021),spartace,"
                      note="Running Man chính là 1 phần con người không thể thiếu của Song Ji Hyo"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/18/66-660859jong-kook-and-ji-hyo-2017-1577778821143608537805-1594631660739903432747-1629259219986568961392.jpg"
                      alt="4, song ji hyo,Kim Jong Kook & Song Ji Hyo,running man,kim jong kook,sao hẹn hò,The Witchs Diner (2021),spartace,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/18/941d3c6cc8a84d4390bd95139761e9e8-15946317807761699571258-162925922000132875251.jpeg"
                      alt="5, song ji hyo,Kim Jong Kook & Song Ji Hyo,running man,kim jong kook,sao hẹn hò,The Witchs Diner (2021),spartace,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/18/aa4d5736741018496e4603d513674a3a-16292592969651438250971.jpg"
                      alt="6, song ji hyo,Kim Jong Kook & Song Ji Hyo,running man,kim jong kook,sao hẹn hò,The Witchs Diner (2021),spartace,"
                      note=""
                    />
                    <p>Nguồn: Allkpop</p>
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
