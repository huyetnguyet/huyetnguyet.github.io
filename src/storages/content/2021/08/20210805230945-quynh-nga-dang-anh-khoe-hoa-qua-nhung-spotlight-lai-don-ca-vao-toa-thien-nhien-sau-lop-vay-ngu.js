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
"timestamp": '05/08/2021 11:09 PM',
"title": 'Quỳnh Nga đăng ảnh khoe hoa quả nhưng spotlight lại dồn cả vào "toà thiên nhiên" sau lớp váy ngủ',
"description": 'Và người ta cũng biết đây không phải lần đầu Quỳnh Nga khiến người xem phải đắm đuối với "kỳ quan" của mình.',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/5/base64-1628180150788560845786.png',
"alt": 'quỳnh nga,sao Việt,showbiz Việt,sao sexy,ngực khủng,vòng 1,',
"category": 'stars',
"date": '05/08/2021',
"time": '11:09 PM',
"link": '/quynh-nga-dang-anh-khoe-hoa-qua-nhung-spotlight-lai-don-ca-vao-toa-thien-nhien-sau-lop-vay-ngu',
"zcomponent": 'page_20210805230945',
"filepath": './20210805230945-quynh-nga-dang-anh-khoe-hoa-qua-nhung-spotlight-lai-don-ca-vao-toa-thien-nhien-sau-lop-vay-ngu.js'
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
  'Quỳnh Nga đăng ảnh khoe hoa quả nhưng spotlight lại dồn cả vào "toà thiên nhiên" sau lớp váy ngủ';
const author = "TỬ ĐAN,";
const source = "Pháp luật & Bạn đọc";
const timestamp = "05/08/2021 11:09 PM";
const description =
  'Và người ta cũng biết đây không phải lần đầu Quỳnh Nga khiến người xem phải đắm đuối với "kỳ quan" của mình.';
const link =
  "quynh-nga-dang-anh-khoe-hoa-qua-nhung-spotlight-lai-don-ca-vao-toa-thien-nhien-sau-lop-vay-ngu";
const tagparam = [
  "quỳnh nga",
  "sao Việt",
  "showbiz Việt",
  "sao sexy",
  "ngực khủng",
  "vòng 1",
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

export default function page_20210805230945() {
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
                      Chuyện diễn viên <strong>Quỳnh Nga</strong> ngày càng khoe
                      sắc với hình thể như búp trên cành từ lâu đã là nét đẹp
                      cõi mạng. Từ ngày công khai "dao kéo" để trùng tu nhan
                      sắc, người đẹp gặp đồ gợi cảm là như "cá gặp nước", cứ
                      thoải mái mà để đường cong lòng vòng trước mắt người xem,
                      làm ai ai cũng phải e thẹn vì độ táo bạo của nàng. Cách
                      đây vài tiếng thôi, Quỳnh Nga lại tiếp tục khiến Facebook
                      sáng nhất nhờ lối ăn mặc sexy hết nấc.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/5/za-16281798157511041759745.jpeg"
                      alt="1, quỳnh nga,sao Việt,showbiz Việt,sao sexy,ngực khủng,vòng 1,"
                      note="Đăng tải hình ảnh khoe rau củ và trái cây tươi non mơn mởn, Quỳnh Nga khoe với dân tình chế độ ăn uống đủ chất - bí kíp để nhan sắc nàng căng mượt như hiện tại"
                    />
                    <p>
                      Kỳ thực, <strong>vòng 1</strong> mới đúng là tâm điểm của
                      khung hình. Chắc hẳn người đẹp hiểu câu "tốt khoe xấu che"
                      hơn tất thảy chúng sinh
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/5/screen-shot-2021-08-05-at-230849-1628180374132525616574.png"
                      alt="2, quỳnh nga,sao Việt,showbiz Việt,sao sexy,ngực khủng,vòng 1,"
                      note="Nữ diễn viên Lã Thanh Huyền và câu bình luận thật thà của mình là minh chứng cho sức hút hình thể bất khả chiến bại của Quỳnh Nga"
                    />
                    <RelationNewsInPage category={category} />
                    <p>
                      Là 1 diễn viên truyền hình nổi tiếng nhưng{" "}
                      <strong>Quỳnh Nga</strong> dường như không ngại khoe body
                      nóng bỏng. Có lẽ số lần cô mặc váy cúp ngực, váy ngủ hay
                      underwear và khiến người khác thấp thỏm vì nguy cơ lộ ngực
                      sẽ còn diễn ra dài dài
                    </p>
                    <p>Ảnh: Sưu tầm</p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/5/base64-1628180150788560845786.png"
                      alt="3, quỳnh nga,sao Việt,showbiz Việt,sao sexy,ngực khủng,vòng 1,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/5/145423405101594147732295511947147402084986366o-1612348368915444271024-16281805032491752082296.jpeg"
                      alt="4, quỳnh nga,sao Việt,showbiz Việt,sao sexy,ngực khủng,vòng 1,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/5/tuesday-quoc-dan-quynh-nga-va-7749-lan-dien-do-duc-khoet-khoe-vong-1-do-so-1-1600277075-608-width1242height1228-1628180503258275742022.jpeg"
                      alt="5, quỳnh nga,sao Việt,showbiz Việt,sao sexy,ngực khủng,vòng 1,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/5/quynh-nga-1-1628180503234534706211.jpeg"
                      alt="6, quỳnh nga,sao Việt,showbiz Việt,sao sexy,ngực khủng,vòng 1,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/5/saostar-kkyo1txk1mwu7tro-16281805032431394741763.jpeg"
                      alt="7, quỳnh nga,sao Việt,showbiz Việt,sao sexy,ngực khủng,vòng 1,"
                      note=""
                    />
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
