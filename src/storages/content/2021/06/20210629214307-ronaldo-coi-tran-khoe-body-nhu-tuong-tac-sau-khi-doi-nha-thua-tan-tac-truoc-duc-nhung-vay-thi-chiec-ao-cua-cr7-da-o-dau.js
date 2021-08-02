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
"timestamp": '29/06/2021 09:43 PM',
"title": 'Ronaldo cởi trần khoe body như tượng tạc sau khi đội nhà thua tan tác trước Đức nhưng vậy thì chiếc áo của CR7 đã ở đâu?',
"description": 'Sau khi trận đấu với Đức khép lại, chiếc áo của Ronaldo đã bỗng dưng biến mất. Vậy nó đã đi đâu?',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/20/photo-3-1624200538417983513447.jpg',
"alt": 'ronaldo,Euro 2020,tin nóng Euro,',
"category": 'news',
"date": '29/06/2021',
"time": '09:43 PM',
"link": '/ronaldo-coi-tran-khoe-body-nhu-tuong-tac-sau-khi-doi-nha-thua-tan-tac-truoc-duc-nhung-vay-thi-chiec-ao-cua-cr7-da-o-dau',
"zcomponent": 'page_20210629214307',
"filepath": './20210629214307-ronaldo-coi-tran-khoe-body-nhu-tuong-tac-sau-khi-doi-nha-thua-tan-tac-truoc-duc-nhung-vay-thi-chiec-ao-cua-cr7-da-o-dau.js'
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
  "Ronaldo cởi trần khoe body như tượng tạc sau khi đội nhà thua tan tác trước Đức nhưng vậy thì chiếc áo của CR7 đã ở đâu?";
const author = "TOP,";
const source = "Trí Thức Trẻ";
const timestamp = "29/06/2021 09:43 PM";
const description =
  "Sau khi trận đấu với Đức khép lại, chiếc áo của Ronaldo đã bỗng dưng biến mất. Vậy nó đã đi đâu?";
const link =
  "ronaldo-coi-tran-khoe-body-nhu-tuong-tac-sau-khi-doi-nha-thua-tan-tac-truoc-duc-nhung-vay-thi-chiec-ao-cua-cr7-da-o-dau";
const tagparam = ["ronaldo", "Euro 2020", "tin nóng Euro"];
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

export default function page_20210629214307() {
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
                    Tối ngày 19/6, Bồ Đào Nha đã phải nhận thất bại 2-4 trước
                    tuyển Đức qua đó tụt xuống vị trí thứ 3 tại bảng F của{" "}
                    <strong>Euro 2020</strong>. Sau khi màn so tài khép lại,
                    điều dân tình nhắc đến nhiều nhất lại chính là body tuyệt
                    phẩm của <strong>Ronaldo</strong>.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/20/photo-1-16242005369722121860535.jpg"
                    alt="1, ronaldo,Euro 2020,tin nóng Euro,"
                    note="Body tuyệt phẩm của Ronaldo"
                  />
                  <p>
                    Theo đó, các phóng viên đã bắt được khoảnh khắc CR7 đang cởi
                    trần đi vòng quanh sân vận động. Cơ thể siêu sao 36 tuổi sở
                    hữu thì khỏi phải bàn, vẫn múi nào múi nấy căng đét. "Hình
                    ảnh <strong>Ronaldo</strong> cởi trần gây sốt truyền thông",
                    báo chí Bồ Đào Nha đăng tải.
                  </p>
                  <RelationNewsInPage category={category} />
                  <p>
                    Tuy nhiên, một câu hỏi được đặt ra là tại sao cởi trần và
                    chiếc áo của <strong>Ronaldo</strong> đã đi đâu khi trận vừa
                    qua đội trưởng tuyển Bồ Đào Nha không hề đổi áo với bất kỳ
                    cầu thủ nào bên phía Đức.
                  </p>
                  <p>
                    Câu trả lời đã được giải đáp với bức hình xuất hiện trên tờ
                    Ojogo mới đây. Hóa ra, chiếc áo của mình{" "}
                    <strong>Ronaldo</strong> đã hào phóng ném lên khán đài để
                    tặng cho CĐV nhà. Chưa rõ nhân vật may mắn nào nhận được vật
                    phẩm tới từ Ronaldo.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/20/photo-1-1624200538384928990981.jpg"
                    alt="2, ronaldo,Euro 2020,tin nóng Euro,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/20/photo-2-16242005389031499238383.jpg"
                    alt="3, ronaldo,Euro 2020,tin nóng Euro,"
                    note="Roanldo cởi áo sau khi trận đấu khép lại"
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/20/photo-3-1624200538417983513447.jpg"
                    alt="4, ronaldo,Euro 2020,tin nóng Euro,"
                    note="Anh sau đó ném chiếc áo lên khán đài"
                  />
                  <p>
                    <strong>Ronaldo</strong> cùng các đồng đội lúc này đang gặp
                    khó trong cuộc đua giành vé đi tiếp. Ở lượt trận cuối,
                    Ronaldo cùng các đồng đội cần có kết quả tốt trước nhà ĐKVĐ
                    thế giới Pháp vào lúc 2h ngày 24/6. Nếu không thể giành 2 vị
                    trí đầu bảng, Bồ Đào Nha vẫn đi tiếp nếu là một trong 4 đội
                    thứ 3 có thành tích tốt nhất.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/20/photo-4-16242005389281590299762.png"
                    alt="5, ronaldo,Euro 2020,tin nóng Euro,"
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
