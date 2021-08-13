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
"timestamp": '13/08/2021 09:27 AM',
"title": 'Mỹ nhân Hoa ngữ lộ khuyết điểm chết người trên phim: Lưu Diệc Phi - Đường Yên chỉ đẹp khi không cười, Triệu Lệ Dĩnh gầy đến trơ xương',
"description": 'Dù sở hữu nhan sắc nổi trội nhưng các diễn viên này vẫn có nhược điểm về ngoại hình và bị lộ rõ khi lên phim.',
"src": 'https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/10/3-16286131376591082157721.jpg',
"alt": 'Lưu Diệc Phi,Đường Yên,triệu lệ dĩnh,Dương Mịch,Lưu Thi Thi,Châu Tấn,Địch Lệ Nhiệt Ba,Mỹ nhân Hoa ngữ,',
"category": 'stars',
"date": '13/08/2021',
"time": '09:27 AM',
"link": '/my-nhan-hoa-ngu-lo-khuyet-diem-chet-nguoi-tren-phim-luu-diec-phi-duong-yen-chi-dep-khi-khong-cuoi-trieu-le-dinh-gay-den-tro-xuong',
"zcomponent": 'page_20210813092754',
"filepath": './20210813092754-my-nhan-hoa-ngu-lo-khuyet-diem-chet-nguoi-tren-phim-luu-diec-phi-duong-yen-chi-dep-khi-khong-cuoi-trieu-le-dinh-gay-den-tro-xuong.js'
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
  "Mỹ nhân Hoa ngữ lộ khuyết điểm chết người trên phim: Lưu Diệc Phi - Đường Yên chỉ đẹp khi không cười, Triệu Lệ Dĩnh gầy đến trơ xương";
const author = "XỬ NỮ,";
const source = "Trí Thức Trẻ";
const timestamp = "13/08/2021 09:27 AM";
const description =
  "Dù sở hữu nhan sắc nổi trội nhưng các diễn viên này vẫn có nhược điểm về ngoại hình và bị lộ rõ khi lên phim.";
const link =
  "my-nhan-hoa-ngu-lo-khuyet-diem-chet-nguoi-tren-phim-luu-diec-phi-duong-yen-chi-dep-khi-khong-cuoi-trieu-le-dinh-gay-den-tro-xuong";
const tagparam = [
  "Lưu Diệc Phi",
  "Đường Yên",
  "triệu lệ dĩnh",
  "Dương Mịch",
  "Lưu Thi Thi",
  "Châu Tấn",
  "Địch Lệ Nhiệt Ba",
  "Mỹ nhân Hoa ngữ",
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

export default function page_20210813092754() {
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
                      Dù sở hữu nhan sắc nổi trội nhưng các diễn viên này vẫn có
                      nhược điểm về ngoại hình và bị lộ rõ khi lên phim.
                    </p>
                    <p>
                      1. Trong Người Đàm Phán, phân cảnh Hoàng Tử Thao vén tóc
                      mái của <strong>Dương Mịch</strong> lên đã khiến khán giả
                      phì cười vì khuyết điểm của nữ diễn viên bị lộ rõ trên ống
                      kính. Trong Tam Sinh Tam Thế Thập Lý Đào Hoa, Dương Mịch
                      cũng bị mất điểm do phần trán có quá ít tóc.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/10/3-16286131376591082157721.jpg"
                      alt="1, Lưu Diệc Phi,Đường Yên,triệu lệ dĩnh,Dương Mịch,Lưu Thi Thi,Châu Tấn,Địch Lệ Nhiệt Ba,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/10/1-16286131376131505775640.jpg"
                      alt="2, Lưu Diệc Phi,Đường Yên,triệu lệ dĩnh,Dương Mịch,Lưu Thi Thi,Châu Tấn,Địch Lệ Nhiệt Ba,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/10/2-16286131376202005769364.jpg"
                      alt="3, Lưu Diệc Phi,Đường Yên,triệu lệ dĩnh,Dương Mịch,Lưu Thi Thi,Châu Tấn,Địch Lệ Nhiệt Ba,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/10/4-16286131376691898581191.jpeg"
                      alt="4, Lưu Diệc Phi,Đường Yên,triệu lệ dĩnh,Dương Mịch,Lưu Thi Thi,Châu Tấn,Địch Lệ Nhiệt Ba,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <p>
                      2. Trong phim Kim Ngọc Lương Duyên, một số phân cảnh để lộ
                      hàm răng khấp khểnh kém duyên của{" "}
                      <strong>Đường Yên</strong> đã đập vào mắt người xem. Đã
                      thế nữ diễn viên còn sở hữu trán dô nên luôn cố gắng để
                      tóc mái bằng hoặc dùng trang sức che đi khi đóng phim cổ
                      trang.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/10/6-162861338183982887591.jpg"
                      alt="5, Lưu Diệc Phi,Đường Yên,triệu lệ dĩnh,Dương Mịch,Lưu Thi Thi,Châu Tấn,Địch Lệ Nhiệt Ba,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/10/5-16286133818312113514396.jpg"
                      alt="6, Lưu Diệc Phi,Đường Yên,triệu lệ dĩnh,Dương Mịch,Lưu Thi Thi,Châu Tấn,Địch Lệ Nhiệt Ba,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/10/7-16286133818501789599725.jpg"
                      alt="7, Lưu Diệc Phi,Đường Yên,triệu lệ dĩnh,Dương Mịch,Lưu Thi Thi,Châu Tấn,Địch Lệ Nhiệt Ba,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/10/8-1628613381857353650007.jpg"
                      alt="8, Lưu Diệc Phi,Đường Yên,triệu lệ dĩnh,Dương Mịch,Lưu Thi Thi,Châu Tấn,Địch Lệ Nhiệt Ba,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <p>
                      3. Khuyết điểm của <strong>Lưu Thi Thi</strong> nằm ở đôi
                      tai có những phần thịt sụn nổi lên khá gồ ghề. Biết được
                      điểm yếu này, bà xã của Ngô Kỳ Long luôn chọn cho mình
                      kiểu tóc xõa che tai. Tuy nhiên tạo hình vén hết tóc lên
                      của cô trong Bộ Bộ Kinh Tâm và Nữ Y Minh Phi Truyện đã vô
                      tình làm lộ điều này.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/13/13-16287893794451882682997.jpg"
                      alt="9, Lưu Diệc Phi,Đường Yên,triệu lệ dĩnh,Dương Mịch,Lưu Thi Thi,Châu Tấn,Địch Lệ Nhiệt Ba,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/13/12-16287893794341914826395.jpg"
                      alt="10, Lưu Diệc Phi,Đường Yên,triệu lệ dĩnh,Dương Mịch,Lưu Thi Thi,Châu Tấn,Địch Lệ Nhiệt Ba,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <p>
                      4. <strong>Triệu Lệ Dĩnh</strong> cao 1,65 m, cân nặng của
                      cô duy trì ở mức 40 kg. Thời điểm quay Sở Kiều Truyện, cô
                      phải giảm thêm 4 kg nữa để nhập vai tốt hơn. Chính vì vậy,
                      trong các bức ảnh hậu trường, dù đã mặc trang phục cổ
                      trang nhiều lớp, song người đẹp vẫn để lộ thân hình gầy gò
                      đến mức lộ cả xương sườn.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/13/14-16287897035691712937900.jpg"
                      alt="11, Lưu Diệc Phi,Đường Yên,triệu lệ dĩnh,Dương Mịch,Lưu Thi Thi,Châu Tấn,Địch Lệ Nhiệt Ba,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/13/6a0571cca534fa6b7e87f6fc6bd84b90-16287897983542113462038.jpg"
                      alt="12, Lưu Diệc Phi,Đường Yên,triệu lệ dĩnh,Dương Mịch,Lưu Thi Thi,Châu Tấn,Địch Lệ Nhiệt Ba,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <p>
                      5. Trong Cẩm Tú Vị Ương, Lý Tâm Ngải vào vai đệ nhất mỹ
                      nhân kinh thành Lý Trường Nhạc. Thế nhưng nếu khuôn mặt
                      của cô thanh tú, nhẹ nhàng bao nhiêu thì đôi bàn tay lại
                      mập mạp bấy nhiêu.
                    </p>

                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/13/5708355024515386250737812780559246155055104n-15582843249431196582789-16288493578681758349086.jpg"
                      alt="13, Lưu Diệc Phi,Đường Yên,triệu lệ dĩnh,Dương Mịch,Lưu Thi Thi,Châu Tấn,Địch Lệ Nhiệt Ba,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/13/60337179211708841507573880849185934409728n-15582844069441847774256-16288493579081815128328.jpg"
                      alt="14, Lưu Diệc Phi,Đường Yên,triệu lệ dĩnh,Dương Mịch,Lưu Thi Thi,Châu Tấn,Địch Lệ Nhiệt Ba,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <RelationNewsInPage category={category} />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/13/bong-hong-lai-hay-ke-lam-loi-cua-cbiz-gap-bien-chung-dang-so-vi-dao-keo-6-1596424424-865-width600height600-16288494064681578714818.jpg"
                      alt="15, Lưu Diệc Phi,Đường Yên,triệu lệ dĩnh,Dương Mịch,Lưu Thi Thi,Châu Tấn,Địch Lệ Nhiệt Ba,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <p>
                      6. Đôi tay tròn, múp míp cũng là nhược điểm hàng đầu của{" "}
                      <strong>Châu Tấn</strong>. Dẫu vậy nhiều người vẫn cho
                      rằng, đôi tay "nải chuối" lại tăng thêm phần đáng yêu cho
                      nữ diễn viên.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/13/11-16287902590941628946805.jpg"
                      alt="16, Lưu Diệc Phi,Đường Yên,triệu lệ dĩnh,Dương Mịch,Lưu Thi Thi,Châu Tấn,Địch Lệ Nhiệt Ba,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/13/10-162879025908750277134.jpg"
                      alt="17, Lưu Diệc Phi,Đường Yên,triệu lệ dĩnh,Dương Mịch,Lưu Thi Thi,Châu Tấn,Địch Lệ Nhiệt Ba,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <p>
                      7. Những tưởng có diện mạo hoàn hảo nhưng gương mặt của{" "}
                      <strong>Lưu Diệc Phi</strong> vẫn có khuyết điểm là hàm
                      răng không đều, cười hở lợi. Thế nên không ít khán giả cho
                      rằng Lưu Diệc Phi là "mỹ nhân chỉ đẹp khi không cười".
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/13/20-16288444309231503668057.jpg"
                      alt="18, Lưu Diệc Phi,Đường Yên,triệu lệ dĩnh,Dương Mịch,Lưu Thi Thi,Châu Tấn,Địch Lệ Nhiệt Ba,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/13/avatar1599712920775-15997129213181590178477-16288444896921953776773.jpg"
                      alt="19, Lưu Diệc Phi,Đường Yên,triệu lệ dĩnh,Dương Mịch,Lưu Thi Thi,Châu Tấn,Địch Lệ Nhiệt Ba,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
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
