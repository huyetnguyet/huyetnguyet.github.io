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
"timestamp": '31/07/2021 01:17 PM',
"title": 'Lên đồ cảnh sát mà vẫn sang chảnh, thần thái ngời ngợi thì chỉ có Krystal, bảo sao netizen khen đến là mỏi miệng',
"description": 'Tạo hình mới của Krystal đang nhận được rất nhiều lời khen ngợi từ người hâm mộ.',
"src": 'https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/31/2173667428783877763664825335057837963301280n-1627727822602427564995.jpg',
"alt": 'Krystal,sao Hàn,Kbiz,star style,Police University (2021),tóc của sao,',
"category": 'stars',
"date": '31/07/2021',
"time": '01:17 PM',
"link": '/len-do-canh-sat-ma-van-sang-chanh-than-thai-ngoi-ngoi-thi-chi-co-krystal-bao-sao-netizen-khen-den-la-moi-mieng',
"zcomponent": 'page_20210731131736',
"filepath": './20210731131736-len-do-canh-sat-ma-van-sang-chanh-than-thai-ngoi-ngoi-thi-chi-co-krystal-bao-sao-netizen-khen-den-la-moi-mieng.js'
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
  "Lên đồ cảnh sát mà vẫn sang chảnh, thần thái ngời ngợi thì chỉ có Krystal, bảo sao netizen khen đến là mỏi miệng";
const author = "PHOEBE,";
const source = "Doanh nghiệp và Tiếp thị";
const timestamp = "31/07/2021 01:17 PM";
const description =
  "Tạo hình mới của Krystal đang nhận được rất nhiều lời khen ngợi từ người hâm mộ.";
const link =
  "len-do-canh-sat-ma-van-sang-chanh-than-thai-ngoi-ngoi-thi-chi-co-krystal-bao-sao-netizen-khen-den-la-moi-mieng";
const tagparam = [
  "Krystal",
  "sao Hàn",
  "Kbiz",
  "star style",
  "Police University (2021)",
  "tóc của sao",
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

export default function page_20210731131736() {
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
                <div className="desktop">
                  <AdsHorizontal />
                </div>
                <div className="contentBody">
                  <p>
                    Vào ngày 9/8 sắp tới đây, drama Police University sẽ chính
                    thức lên sóng với sự góp mặt của <strong>Krystal</strong>.
                    Sau khi rời SM để tập trung cho sự nghiệp diễn xuất, cô nàng
                    hoạt động rất năng nổ trong lĩnh vực này và dần chiếm được
                    thiện cảm của khán giả bởi lối diễn xuất thuyết phục nhờ các
                    vai diễn đa dạng. Lần này, Krystal sẽ vào vai một nữ sinh
                    viên tại trường đại học cảnh sát, hiện tại, tạo hình mới của
                    cô nàng đang nhận được rất nhiều lời khen từ netizen.
                  </p>{" "}
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/31/2272769028783871396998792026888978282117190n-1627727823467685558715.jpg"
                    alt="1, Krystal,sao Hàn,Kbiz,star style,Police University (2021),tóc của sao,"
                    note="Trước đó cô nàng cũng từng thử sức với vai diễn trong bộ phim Search và nhận được nhiều lời khen cho cả diễn xuất và ngoại hình của mình"
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/31/2173667428783877763664825335057837963301280n-1627727822602427564995.jpg"
                    alt="2, Krystal,sao Hàn,Kbiz,star style,Police University (2021),tóc của sao,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/31/2149824118783869963665605949085500984251254n-1627727823507775900387.jpg"
                    alt="3, Krystal,sao Hàn,Kbiz,star style,Police University (2021),tóc của sao,"
                    note=""
                  />
                  <p>
                    Hình ảnh cô cảnh sát trong bộ đồng phục xanh navy, chân đi
                    combat boot, đeo găng tay, áo bảo hộ, cầm súng "ngầu đét"
                    đang khiến fan mê mẩn không ngừng. Phải nói khí chất lạnh
                    lùng của <strong>Krystal</strong> rất hợp với những tạo hình
                    cá tính thế này.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/31/2198521948783875763665024074893112939048808n-1627727822839224212374.jpg"
                    alt="4, Krystal,sao Hàn,Kbiz,star style,Police University (2021),tóc của sao,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/31/2176509638783876663664935369179804772171155n-1627727822665167695782.jpg"
                    alt="5, Krystal,sao Hàn,Kbiz,star style,Police University (2021),tóc của sao,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/31/225502887878387619699831305407663720404187n-16277278227311562077425.jpg"
                    alt="6, Krystal,sao Hàn,Kbiz,star style,Police University (2021),tóc của sao,"
                    note=""
                  />
                  <p>
                    Dù cột tóc cao, mặt <strong>Krystal</strong> cũng không biến
                    thành "mặt bư" mà vẫn thanh thoát hết sức. Còn khi thử tóc
                    búi thấp, sử dụng kẹp nơ với phần chụp lưới, kết hợp với bộ
                    cảnh phục gồm áo sơ mi xanh navy sơ vin cùng quần âu đen, cô
                    trông lại càng thêm chững chạc và trưởng thành chứ không hề
                    bị dìm chút nào luôn.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/31/2176054538783874630331802581794877387987332n-1627727823081225339504.jpg"
                    alt="7, Krystal,sao Hàn,Kbiz,star style,Police University (2021),tóc của sao,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/31/2181983708783875263665075069574585779384262n-1627727823074345746030.jpg"
                    alt="8, Krystal,sao Hàn,Kbiz,star style,Police University (2021),tóc của sao,"
                    note=""
                  />
                  <p>
                    Fan hiện tại đang rất mong chờ thấy các cảnh quay hành động
                    khí thế hừng hực của <strong>Krystal</strong> trên màn ảnh
                    nhỏ. Hình ảnh cô nàng mặc đồ tập võ, thắt đai đen, quấn băng
                    vải quanh tay cực ngầu đang khiến người hâm mộ đứng ngồi
                    không yên.
                  </p>
                  <RelationNewsInPage category={category} />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/31/base64-1627728383971248740686.png"
                    alt="9, Krystal,sao Hàn,Kbiz,star style,Police University (2021),tóc của sao,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/31/2173951918783873363665266390890409001682018n-16277278231101185654023.jpg"
                    alt="10, Krystal,sao Hàn,Kbiz,star style,Police University (2021),tóc của sao,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/31/photo-1-15989446209451630174628-1627728689677588336168.jpg"
                    alt="11, Krystal,sao Hàn,Kbiz,star style,Police University (2021),tóc của sao,"
                    note=""
                  />
                  <p>
                    Nhưng cũng có lúc cô dịu dàng, dễ thương khi xõa tóc dài,
                    mặc gilet len với sơ mi thế này đây. Sự đối lập giữa một{" "}
                    <strong>Krystal</strong> lạnh như băng khi khoác lên mình bộ
                    cảnh phục với áo đồng phục, phù hiệu, tóc được búi gọn gàng
                    với một cô nữ sinh xinh xắn, tóc xõa mềm mại càng khiến khán
                    giả tò mò hơn về màn thể hiện sắp tới của Krystal.
                  </p>
                  <p>
                    Dưới phần bình luận, netizen cũng khen cô nàng tới tấp, ai
                    cũng cho rằng <strong>Krystal</strong> rất hợp với hình
                    tượng nữ cường, lạnh lùng và thần thái thế này:
                  </p>
                  <p>
                    - Sao <strong>Krystal</strong> chụp kiểu gì, mặc gì trông
                    cũng vẫn sang là sao ta?
                  </p>
                  <p>
                    - Khí chất và thần thái của <strong>Krystal</strong> là độc
                    nhất vô nhị luôn ý.
                  </p>
                  <p>
                    - Hợp hình tượng dễ sợ, chứ đưa mấy diễn viên đẹp kiểu nhìn
                    nhẹ nhàng, bánh bèo thấy không hợp, <strong>Krystal</strong>{" "}
                    sang quá đi.
                  </p>
                  <p>- Nhìn chị khoác lên bộ cảnh phục muốn xỉu 7749 lần.</p>
                  <p>
                    - Xinh quá đi, này mới là mặt trái xoan trong truyền thuyết
                    nè, buộc hết tóc lên cũng không bị lộ khuyết điểm gì luôn.
                  </p>
                  <p>
                    - <strong>Krystal</strong> hợp mặc quân phục, cảnh phục dã
                    man ý.
                  </p>
                  <p>
                    - Chị cứ ngầu vậy thì biểu sao không nhiều fan nữ cho được.
                  </p>
                  <p>
                    - Bữa làm quân nhân nay làm cảnh sát, chị rất biết chọn vai
                    hợp với cái thần thái "ngầu lòi" của mình.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/31/photo-1-15989446209451630174628-1627728689677588336168.jpg"
                    alt="12, Krystal,sao Hàn,Kbiz,star style,Police University (2021),tóc của sao,"
                    note=""
                  />
                  <p>Ảnh: Internet</p>
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
