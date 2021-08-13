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
"timestamp": '11/08/2021 10:53 AM',
"title": 'Jihyo (TWICE) diện chung áo với mẫu hãng nhưng "chiếm sóng" nhờ 1 chi tiết "mlem" hơn hẳn',
"description": 'Chính nhờ điểm đặc biệt này mà Jihyo luôn tạo cảm giác gợi cảm khó cưỡng.',
"src": 'https://kenh14cdn.com/2020/9/21/cute-16006642926101699460513.png',
"alt": 'sao Hàn,jihyo,TWICE,star style,style của sao,',
"category": 'stars',
"date": '11/08/2021',
"time": '10:53 AM',
"link": '/jihyo-twice-dien-chung-ao-voi-mau-hang-nhung-chiem-song-nho-1-chi-tiet-mlem-hon-han',
"zcomponent": 'page_20210811105323',
"filepath": './20210811105323-jihyo-twice-dien-chung-ao-voi-mau-hang-nhung-chiem-song-nho-1-chi-tiet-mlem-hon-han.js'
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
  'Jihyo (TWICE) diện chung áo với mẫu hãng nhưng "chiếm sóng" nhờ 1 chi tiết "mlem" hơn hẳn';
const author = "AOOO,";
const source = "Doanh nghiệp và Tiếp thị";
const timestamp = "11/08/2021 10:53 AM";
const description =
  "Chính nhờ điểm đặc biệt này mà Jihyo luôn tạo cảm giác gợi cảm khó cưỡng.";
const link =
  "jihyo-twice-dien-chung-ao-voi-mau-hang-nhung-chiem-song-nho-1-chi-tiet-mlem-hon-han";
const tagparam = ["sao Hàn", "jihyo", "TWICE", "star style", "style của sao"];
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

export default function page_20210811105323() {
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
                      <strong>Jihyo</strong> - trưởng nhóm của{" "}
                      <strong>TWICE</strong> - sở hữu gương mặt bầu bĩnh và vóc
                      dáng đầy đặn, khỏe khoắn. Đặc biệt cô còn có 1 thứ "vũ
                      khí" khác: vòng 1 nảy nở, căng đầy. Cũng chính nhờ lợi thế
                      này mà mọi bộ cánh cô diện lên đều bội phần gợi cảm, thậm
                      chí có khi còn sexy hơn cả mẫu hãng.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/18/2008415376054701237475222705310698259576272n-16240075379411007675571.jpg"
                      alt="2, sao Hàn,jihyo,TWICE,star style,style của sao,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/18/6219341227669676433777117067984560355760279n-16240075378391544570502.jpg"
                      alt="3, sao Hàn,jihyo,TWICE,star style,style của sao,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/18/49815611722625621443922506427514351015657n-1624007537766794759134.jpg"
                      alt="4, sao Hàn,jihyo,TWICE,star style,style của sao,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/18/1218169254718924837105285088079728241000741n-16240075378801229475385.jpg"
                      alt="5, sao Hàn,jihyo,TWICE,star style,style của sao,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/18/2004624638607815681748888639159552497705416n-1624007537926872838511.jpg"
                      alt="6, sao Hàn,jihyo,TWICE,star style,style của sao,"
                      note=""
                    />
                    <RelationNewsInPage />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/18/584100812900263352704375331841474232162809n-16240075378011841327355.jpg"
                      alt="7, sao Hàn,jihyo,TWICE,star style,style của sao,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/18/9900412628317105569579078787430845004886232n-16240075378631632063623.jpg"
                      alt="8, sao Hàn,jihyo,TWICE,star style,style của sao,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/18/656330479138531189766943418915517343360379n-1624007537852851061971.jpg"
                      alt="9, sao Hàn,jihyo,TWICE,star style,style của sao,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/18/2417812919617095540834209174888569116819456n-16240075376902033386069.jpg"
                      alt="10, sao Hàn,jihyo,TWICE,star style,style của sao,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/18/12201384236678569532641187309798744810915502n-16240075378941437495772.jpg"
                      alt="11, sao Hàn,jihyo,TWICE,star style,style của sao,"
                      note=""
                    />
                    <p>Ảnh: Internet</p>
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
