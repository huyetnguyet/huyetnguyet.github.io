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
"timestamp": '21/08/2021 11:05 AM',
"title": 'Loạt nụ hôn "cướp đồ ăn" trên màn ảnh Hoa ngữ: Triệu Lộ Tư còn đáng yêu chán, qua đến màn cướp mì thì "quay xe" gấp',
"description": 'Hình Phi, Thành Nghị, Triệu Lộ Tư... đều đã từng thực hiện nụ hôn "trao đổi thức ăn" với bạn diễn.',
"src": 'https://kenh14cdn.com/203336854389633024/2021/8/20/ezgif-4-95d8bf1abc9d-16294538174811146072592.gif',
"alt": 'Phim truyền hình,phim trung quốc,phim truyền hình trung quốc,Hình Phi,thành nghị,Trương Dư Hi,Triệu Lộ Tư,Trần Thiên Thiên Trong Lời Đồn (2020),',
"category": 'stars',
"date": '21/08/2021',
"time": '11:05 AM',
"link": '/loat-nu-hon-cuop-do-an-tren-man-anh-hoa-ngu-dan-tinh-khong-me-chi-thay-mat-ve-sinh',
"zcomponent": 'page_20210821110554',
"filepath": './20210821110554-loat-nu-hon-cuop-do-an-tren-man-anh-hoa-ngu-dan-tinh-khong-me-chi-thay-mat-ve-sinh.js'
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
  'Loạt nụ hôn "cướp đồ ăn" trên màn ảnh Hoa ngữ: Triệu Lộ Tư còn đáng yêu chán, qua đến màn cướp mì thì "quay xe" gấp';
const author = "THU TRANG,";
const source = "Trí Thức Trẻ";
const timestamp = "21/08/2021 11:05 AM";
const description =
  'Hình Phi, Thành Nghị, Triệu Lộ Tư... đều đã từng thực hiện nụ hôn "trao đổi thức ăn" với bạn diễn.';
const link =
  "loat-nu-hon-cuop-do-an-tren-man-anh-hoa-ngu-dan-tinh-khong-me-chi-thay-mat-ve-sinh";
const tagparam = [
  "Phim truyền hình",
  "phim trung quốc",
  "phim truyền hình trung quốc",
  "Hình Phi",
  "thành nghị",
  "Trương Dư Hi",
  "Triệu Lộ Tư",
  "Trần Thiên Thiên Trong Lời Đồn (2020)",
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

export default function page_20210821110554() {
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
                      <strong>Hình Phi</strong>, <strong>Thành Nghị</strong>,{" "}
                      <strong>Triệu Lộ Tư</strong>... đều đã từng thực hiện nụ
                      hôn "trao đổi thức ăn" với bạn diễn.
                    </p>
                    <p>
                      Nụ hôn vốn là thứ rất lãng mạn, nhưng hôn nhau trong lúc
                      mồm đầy thức ăn đôi khi lại không đẹp như thế. Mới đây,
                      mạng xã hội Trung Quốc đã chia sẻ những màn "trao đổi thức
                      ăn" qua nụ hôn từ nhẹ nhàng, hơi sến đến thô bạo, quá mất
                      vệ sinh trong <strong>phim truyền hình</strong>.
                    </p>
                    <p>Màn "quay xe" khá duyên, em thích</p>
                    <ContentImage
                      src="https://kenh14cdn.com/203336854389633024/2021/8/20/ezgif-4-4668b537f54b-1629454052366143065625.gif"
                      alt="1, Phim truyền hình,phim trung quốc,phim truyền hình trung quốc,Hình Phi,thành nghị,Trương Dư Hi,Triệu Lộ Tư,Trần Thiên Thiên Trong Lời Đồn (2020),"
                      note="Nụ hôn khá lãng mạn giữa Thành Nghị và Trương Dư Hi"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/203336854389633024/2021/8/20/ezgif-4-d8d9fa60eb66-16294541459722057564.gif"
                      alt="2, Phim truyền hình,phim trung quốc,phim truyền hình trung quốc,Hình Phi,thành nghị,Trương Dư Hi,Triệu Lộ Tư,Trần Thiên Thiên Trong Lời Đồn (2020),"
                      note="Nhẹ nhàng sương sương thế này cũng ổn nè"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/203336854389633024/2021/8/20/ezgif-4-2d300adb9d3c-16294539844512076788005.gif"
                      alt="3, Phim truyền hình,phim trung quốc,phim truyền hình trung quốc,Hình Phi,thành nghị,Trương Dư Hi,Triệu Lộ Tư,Trần Thiên Thiên Trong Lời Đồn (2020),"
                      note="Tình huống có hơi gượng gạo nhưng nụ hôn thì đẹp"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/203336854389633024/2021/8/20/ezgif-4-7def5e2d5373-1629453888123959872842.gif"
                      alt="4, Phim truyền hình,phim trung quốc,phim truyền hình trung quốc,Hình Phi,thành nghị,Trương Dư Hi,Triệu Lộ Tư,Trần Thiên Thiên Trong Lời Đồn (2020),"
                      note="Triệu Lộ Tư - Đinh Vũ Hề đáng yêu nhưng hơi mất vệ sinh một chút"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/203336854389633024/2021/8/20/ezgif-4-de4133f45e81-16294537018581587304929.gif"
                      alt="5, Phim truyền hình,phim trung quốc,phim truyền hình trung quốc,Hình Phi,thành nghị,Trương Dư Hi,Triệu Lộ Tư,Trần Thiên Thiên Trong Lời Đồn (2020),"
                      note="Mỹ nam nhẹ nhàng ngọt ngào thế này thì chấp nhận"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/203336854389633024/2021/8/20/ezgif-4-08a0bec88bab-16294536409851343188482.gif"
                      alt="6, Phim truyền hình,phim trung quốc,phim truyền hình trung quốc,Hình Phi,thành nghị,Trương Dư Hi,Triệu Lộ Tư,Trần Thiên Thiên Trong Lời Đồn (2020),"
                      note="Đến cả sợi mì cũng phải tranh nhau?"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/203336854389633024/2021/8/20/ezgif-4-13d50615ede3-1629453502811475732512.gif"
                      alt="7, Phim truyền hình,phim trung quốc,phim truyền hình trung quốc,Hình Phi,thành nghị,Trương Dư Hi,Triệu Lộ Tư,Trần Thiên Thiên Trong Lời Đồn (2020),"
                      note="Ủa đói lắm hay gì anh ơi?"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/203336854389633024/2021/8/20/ezgif-4-431743809e5b-16294535666531047775443.gif"
                      alt="8, Phim truyền hình,phim trung quốc,phim truyền hình trung quốc,Hình Phi,thành nghị,Trương Dư Hi,Triệu Lộ Tư,Trần Thiên Thiên Trong Lời Đồn (2020),"
                      note="Kể cả đẹp trai cũng không thể tha thứ"
                    />
                    <RelationNewsInPage category={category} />
                    <ContentImage
                      src="https://kenh14cdn.com/203336854389633024/2021/8/20/ezgif-4-3ad45e3d2e0a-16294541836451996010772.gif"
                      alt="9, Phim truyền hình,phim trung quốc,phim truyền hình trung quốc,Hình Phi,thành nghị,Trương Dư Hi,Triệu Lộ Tư,Trần Thiên Thiên Trong Lời Đồn (2020),"
                      note="Rồi muốn ăn đùi gà thì xin tôi chứ sao mà tục vậy trời!"
                    />
                    <p>Bình luận của cư dân mạng:</p>
                    <p>- Các bác đạo diễn à, trời đánh tránh bữa ăn.</p>
                    <p>
                      - Hãy nhẹ nhàng dễ thương thôi, cướp đồ ăn ăn tươi nuốt
                      sống con gái nhà người ta thì gớm lắm.
                    </p>
                    <p>
                      - Nhiều cái nhìn sợ thật. Nhưng cũng có kiss quằn quéo mà.
                      Mấy cái nhìn sợ sợ toàn liên quan đến mì sợi.
                    </p>
                    <p>
                      - Tưởng tượng nụ hôn lẫn trong đó là mùi thức ăn đang tiêu
                      hoá dở, mùi hơi thở sau khi ăn, mùi gia vị cay nồng đặc
                      trưng của món Tàu, mùi nước miếng. Thôi không nói nữa tôi
                      đang buồn nôn.
                    </p>
                    <p>
                      - Hôn lúc ăn lên phim nhìn đẹp mắt lãng mạn thế thôi chứ
                      ngoài đời muốn nôn luôn. Tui đang ăn mà ai tự nhiên cướp
                      đồ ăn từ miệng tui còn hôn nữa là tui xách cái chén chạy
                      tám hướng rồi.
                    </p>

                    <ContentImage
                      src="https://kenh14cdn.com/203336854389633024/2021/8/20/ezgif-4-95d8bf1abc9d-16294538174811146072592.gif"
                      alt="10, Phim truyền hình,phim trung quốc,phim truyền hình trung quốc,Hình Phi,thành nghị,Trương Dư Hi,Triệu Lộ Tư,Trần Thiên Thiên Trong Lời Đồn (2020),"
                      note=""
                    />
                    <p>Nguồn: Cbiz: Chuyện chưa kể</p>
                    <p>Nguồn ảnh: Tổng hợp</p>
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
