import React from "react";
import "components/page.css";
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
"timestamp": '31/07/2021 01:17 PM',
"title": 'Chết chìm với bể visual bùng nổ của "cảnh sát" Krystal ở phim mới, netizen đùa "bắt em đi chị ơi"',
"description": 'Đại Học Cảnh Sát vừa chiêu đãi khán giả bằng loạt hình ảnh mới đẹp lịm người của Krystal và bạn diễn.',
"src": 'https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/31/2237122058783872030332062401946223716323604n-16277120661511418042355.jpg',
"alt": 'Phim Hàn Quốc,Krystal,jinyoung (got7),Phim truyền hình,Police University (2021),Đại Học Cảnh Sát (2021),',
"category": 'stars',
"date": '31/07/2021',
"time": '01:17 PM',
"link": '/chet-chim-voi-be-visual-bung-no-cua-canh-sat-krystal-o-phim-moi-netizen-dua-bat-em-di-chi-oi',
"zcomponent": 'page_20210731131749',
"filepath": './20210731131749-chet-chim-voi-be-visual-bung-no-cua-canh-sat-krystal-o-phim-moi-netizen-dua-bat-em-di-chi-oi.js'
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
  'Chết chìm với bể visual bùng nổ của "cảnh sát" Krystal ở phim mới, netizen đùa "bắt em đi chị ơi"';
const author = "LỆ,";
const source = "Trí Thức Trẻ";
const timestamp = "31/07/2021 01:17 PM";
const description =
  "Đại Học Cảnh Sát vừa chiêu đãi khán giả bằng loạt hình ảnh mới đẹp lịm người của Krystal và bạn diễn.";
const link =
  "chet-chim-voi-be-visual-bung-no-cua-canh-sat-krystal-o-phim-moi-netizen-dua-bat-em-di-chi-oi";
const tagparam = [
  "Phim Hàn Quốc",
  "Krystal",
  "jinyoung (got7)",
  "Phim truyền hình",
  "Police University (2021)",
  "Đại Học Cảnh Sát (2021)",
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

export default function page_20210731131749() {
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
                <RelationNews category={category} />
                <div className="contentBody">
                  <p>
                    Sát thềm lên sóng chính thức vào ngày 9/8 tới đây, ekip
                    Police University (Đại Học Cảnh Sát) đã chiêu đãi khán giả
                    bằng loạt hình ảnh trong buổi chụp hình poster của nữ cảnh
                    sát xinh đẹp <strong>Krystal</strong>. Không còn là một nữ
                    idol mong manh, dịu dàng, Krystal khoe trọn thần thái sắc
                    lạnh, vẻ đẹp cá tính, đầy mạnh mẽ trong tạo hình nhân vật
                    mới.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/31/2149824118783869963665605949085500984251254n-16277120661481808360935.jpg"
                    alt="1, Phim Hàn Quốc,Krystal,jinyoung (got7),Phim truyền hình,Police University (2021),Đại Học Cảnh Sát (2021),"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/31/2237122058783872030332062401946223716323604n-16277120661511418042355.jpg"
                    alt="2, Phim Hàn Quốc,Krystal,jinyoung (got7),Phim truyền hình,Police University (2021),Đại Học Cảnh Sát (2021),"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/31/2183384538783870796998853195841550545448597n-1627712066150577363777.jpg"
                    alt="3, Phim Hàn Quốc,Krystal,jinyoung (got7),Phim truyền hình,Police University (2021),Đại Học Cảnh Sát (2021),"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/31/2173667428783877763664825335057837963301280n-16277120661581376254250.jpg"
                    alt="4, Phim Hàn Quốc,Krystal,jinyoung (got7),Phim truyền hình,Police University (2021),Đại Học Cảnh Sát (2021),"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/31/220005801878387726366487684311320406920134n-16277120661571043486592.jpg"
                    alt="5, Phim Hàn Quốc,Krystal,jinyoung (got7),Phim truyền hình,Police University (2021),Đại Học Cảnh Sát (2021),"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/31/2158280378783878563664746773405046493952975n-16277120661581293541625.jpg"
                    alt="6, Phim Hàn Quốc,Krystal,jinyoung (got7),Phim truyền hình,Police University (2021),Đại Học Cảnh Sát (2021),"
                    note=""
                  />

                  <p>
                    Trong phim, <strong>Krystal</strong> vào vai nữ sinh viên
                    học viện cảnh sát Oh Kang Hee. Khi trong trường xảy ra một
                    sự cố bất ngờ, Kang Hee đã phải cùng với các bạn học và
                    giảng viên của mình - Yoo Dong Man (Cha Tae Hyun) điều tra,
                    giải quyết vụ án.
                  </p>

                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/31/2181983708783875263665075069574585779384262n-16277120661532100073049.jpg"
                    alt="7, Phim Hàn Quốc,Krystal,jinyoung (got7),Phim truyền hình,Police University (2021),Đại Học Cảnh Sát (2021),"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/31/2176054538783874630331802581794877387987332n-16277120661521802959171.jpg"
                    alt="8, Phim Hàn Quốc,Krystal,jinyoung (got7),Phim truyền hình,Police University (2021),Đại Học Cảnh Sát (2021),"
                    note=""
                  />
                  <p>
                    <strong>Krystal</strong> và Jinyoung - cặp đôi "cố tổ"
                    visual của phim
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/31/2198521948783875763665024074893112939048808n-16277120661541418186597.jpg"
                    alt="9, Phim Hàn Quốc,Krystal,jinyoung (got7),Phim truyền hình,Police University (2021),Đại Học Cảnh Sát (2021),"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/31/225502887878387619699831305407663720404187n-16277120661541032757084.jpg"
                    alt="10, Phim Hàn Quốc,Krystal,jinyoung (got7),Phim truyền hình,Police University (2021),Đại Học Cảnh Sát (2021),"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/31/2176509638783876663664935369179804772171155n-1627712066155994533327.jpg"
                    alt="11, Phim Hàn Quốc,Krystal,jinyoung (got7),Phim truyền hình,Police University (2021),Đại Học Cảnh Sát (2021),"
                    note=""
                  />
                  <p>
                    Khán giả vô cùng háo hức, mong chờ bộ phim cũng như màn thể
                    hiện của <strong>Krystal</strong>. Trước đó, nữ idol cũng
                    từng thành công với hình tượng quân nhân trong bộ phim hành
                    động, kinh dị Search.
                  </p>
                  <RelationNewsInPage category={category} />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/31/2192976628783872630332007701024420490991758n-16277120661521666039419.jpg"
                    alt="12, Phim Hàn Quốc,Krystal,jinyoung (got7),Phim truyền hình,Police University (2021),Đại Học Cảnh Sát (2021),"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/31/2184104548783879830331288896167262239334542n-16277120661601124182870.jpg"
                    alt="13, Phim Hàn Quốc,Krystal,jinyoung (got7),Phim truyền hình,Police University (2021),Đại Học Cảnh Sát (2021),"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/31/2173728338783879196998018471817236155494288n-1627712066159322362207.jpg"
                    alt="14, Phim Hàn Quốc,Krystal,jinyoung (got7),Phim truyền hình,Police University (2021),Đại Học Cảnh Sát (2021),"
                    note=""
                  />
                  <p>Bình luận của khán giả:</p>
                  <p>
                    - Sao bà này chụp ảnh mặc gì trông cũng vẫn sang là sao ta
                  </p>
                  <p>
                    - Ơi là trời, <strong>Krystal</strong> mà đóng mấy phim cảnh
                    sát quân nhân là đỉnh của chóp luôn đấy
                  </p>
                  <p>- Vì chị yêu em nguyện bị bắt cả đời</p>
                  <p>
                    - Nói <strong>Krystal</strong> là 1 trong những idol Kpop có
                    visual đẹp nhất mọi thời đại có ngoa không mọi người. Tui
                    không đu chị này mà lướt thấy video là muốn xỉu, sang thật
                    sự á
                  </p>
                  <p>
                    - Khí chất và thần thái của <strong>Krystal</strong> là độc
                    nhất vô nhị luôn ý, vào vai cảnh sát thì lại càng đỉnh
                  </p>
                  <p>
                    - Phim chiếu luôn, chiếu liền, chiếu cả bộ đi trời ơi, đợi
                    không nổi nữa!!!
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/31/photo-1-1627705154711962696046.jpg"
                    alt="15, Phim Hàn Quốc,Krystal,jinyoung (got7),Phim truyền hình,Police University (2021),Đại Học Cảnh Sát (2021),"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/31/photo-1-16277051715731133334694.jpg"
                    alt="16, Phim Hàn Quốc,Krystal,jinyoung (got7),Phim truyền hình,Police University (2021),Đại Học Cảnh Sát (2021),"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/31/photo-1-1627705198597354015082.jpg"
                    alt="17, Phim Hàn Quốc,Krystal,jinyoung (got7),Phim truyền hình,Police University (2021),Đại Học Cảnh Sát (2021),"
                    note=""
                  />
                  <p>Phim lên sóng từ 9/8/2021 trên kênh KBS.</p>
                  <p>Nguồn ảnh: KBS</p>
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
