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
"title": 'Song Ji Hyo phủ nhận loveline với Kim Jong Kook, netizen phản ứng: "Xin lỗi chị, em là một 'thuyền viên' cố chấp"',
"description": 'Dù biết loveline giữa Song Ji Hyo - Kim Jong Kook chỉ mang tính chất giải trí, fan vẫn nhất quyết không xuống "thuyền".',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/18/photo-1-16292591809311976158846.jpg',
"alt": 'kim jong kook,song ji hyo,spartace,Kim Jong Kook & Song Ji Hyo,running man,loveline,phủ nhận tin đồn hẹn hò,tin đồn hẹn hò,đẩy thuyền,thuyền viên,',
"category": 'stars',
"date": '19/08/2021',
"time": '12:58 PM',
"link": '/song-ji-hyo-phu-nhan-loveline-voi-kim-jong-kook-netizen-phan-ung-xin-loi-chi-em-la-mot-thuyen-vien-co-chap',
"zcomponent": 'page_20210819125816',
"filepath": './20210819125816-song-ji-hyo-phu-nhan-loveline-voi-kim-jong-kook-netizen-phan-ung-xin-loi-chi-em-la-mot-thuyen-vien-co-chap.js'
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
  "Song Ji Hyo phủ nhận loveline với Kim Jong Kook, netizen phản ứng: \"Xin lỗi chị, em là một 'thuyền viên' cố chấp\"";
const author = "BELL SHINO,";
const source = "Pháp luật & Bạn đọc";
const timestamp = "19/08/2021 12:58 PM";
const description =
  'Dù biết loveline giữa Song Ji Hyo - Kim Jong Kook chỉ mang tính chất giải trí, fan vẫn nhất quyết không xuống "thuyền".';
const link =
  "song-ji-hyo-phu-nhan-loveline-voi-kim-jong-kook-netizen-phan-ung-xin-loi-chi-em-la-mot-thuyen-vien-co-chap";
const tagparam = [
  "kim jong kook",
  "song ji hyo",
  "spartace",
  "Kim Jong Kook & Song Ji Hyo",
  "running man",
  "loveline",
  "phủ nhận tin đồn hẹn hò",
  "tin đồn hẹn hò",
  "đẩy thuyền",
  "thuyền viên",
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

export default function page_20210819125816() {
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
                      Dù biết <strong>loveline</strong> giữa{" "}
                      <strong>Song Ji Hyo</strong> -{" "}
                      <strong>Kim Jong Kook</strong> chỉ mang tính chất giải
                      trí, fan vẫn nhất quyết không xuống "thuyền".
                    </p>{" "}
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/18/photo-1-16292591809311976158846.jpg"
                      alt="1, kim jong kook,song ji hyo,spartace,Kim Jong Kook & Song Ji Hyo,running man,loveline,phủ nhận tin đồn hẹn hò,tin đồn hẹn hò,đẩy thuyền,thuyền viên,"
                      note=""
                    />
                    <p>
                      <strong>Kim Jong Kook</strong> và{" "}
                      <strong>Song Ji Hyo</strong> là cặp đôi được "
                      <strong>đẩy thuyền</strong>" nhiều nhất của{" "}
                      <strong>Running Man</strong> ở hiện tại cũng chính vì cả
                      hai đều "tài sắc vẹn toàn" lại còn là 2 thành viên độc
                      thân lâu năm trong dàn cast chương trình. Liên tục được
                      fan cũng như các thành viên khác ghép đôi, mới đây, Song
                      Ji Hyo đã lên tiếng về mối quan hệ với "Người năng lực".{" "}
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/18/photo-1-1629259335399693511535.jpg"
                      alt="2, kim jong kook,song ji hyo,spartace,Kim Jong Kook & Song Ji Hyo,running man,loveline,phủ nhận tin đồn hẹn hò,tin đồn hẹn hò,đẩy thuyền,thuyền viên,"
                      note=""
                    />
                    <p>
                      Trong bài phỏng vấn của mình, <strong>Song Ji Hyo</strong>{" "}
                      phủ nhận tin đồn "<strong>loveline</strong> có thật" cùng{" "}
                      <strong>Kim Jong Kook</strong>. "Mợ Ngố" chia sẻ: "Tình
                      huống chọc ghẹo anh Jong Kook không phải là không liên
                      quan đến tôi. Mọi người trêu đùa nên tôi cũng theo. Trước
                      đây, nếu nói về loveline, tôi cũng cảm thấy hơi bất tiện
                      và có suy nghĩ: 'Như thế này có đúng không?'. Tôi phải
                      nghĩ rằng: 'Sẽ đối mặt với với điều này như thế nào đây?'
                      nên nó có phần trở nên cứng nhắc và khó khăn hơn. Nhưng
                      dạo này câu chuyện có nhiều tình huống hơn nên sự kết hợp
                      giữa các thành viên càng nổi bật. Tôi đã chấp nhận việc
                      này và trêu chọc anh nhiều hơn. Các thành viên càng thân
                      thiết và vui vẻ hơn nên buổi ghi hình rất thú vị. Sau này
                      cũng sẽ như vậy. Nhưng thực sự chúng tôi không hẹn hò gì
                      hết".{" "}
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Dù <strong>SpartAce</strong> thường không ngại phát "cẩu
                      lương" cho mọi người xung quanh nhưng{" "}
                      <strong>Song Ji Hyo</strong> khẳng định cô chỉ trêu ghẹo
                      đàn anh, <strong>loveline</strong> không có thật
                    </p>
                    <p>
                      Trước những chia sẻ của Ji Hyo, fan vẫn quyết tâm không
                      xuống "thuyền" dù biết mối quan hệ của{" "}
                      <strong>SpartAce</strong> chỉ là đồng nghiệp, như người
                      thân trong gia đình.{" "}
                    </p>{" "}
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/18/untitled-3-16292588283761094748762.jpg"
                      alt="3, kim jong kook,song ji hyo,spartace,Kim Jong Kook & Song Ji Hyo,running man,loveline,phủ nhận tin đồn hẹn hò,tin đồn hẹn hò,đẩy thuyền,thuyền viên,"
                      note=""
                    />
                    <p>Fan vẫn quyết tâm không xuống "thuyền"</p>
                    <p>Ảnh: Chụp màn hình, Internet</p>
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
