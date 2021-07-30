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
"timestamp": '30/07/2021 12:17 PM',
"title": '5 anime có cái kết đẹp nhất do cư dân mạng Nhật Bản bình chọn: Kimetsu no Yaiba cũng có chân',
"description": 'Theo một khảo sát dành cho netizen Nhật, đây là những bộ anime shonen mà theo họ là có cái kết đẹp nhất.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/30/inuyashaanime11715041280x0-372f9970-162763048698727674113.jpeg',
"alt": 'ANIME,',
"category": 'games',
"date": '30/07/2021',
"time": '12:17 PM',
"link": '/5-anime-co-cai-ket-dep-nhat-do-cu-dan-mang-nhat-ban-binh-chon-kimetsu-no-yaiba-cung-co-chan',
"zcomponent": 'page_20210730121742',
"filepath": './20210730121742-5-anime-co-cai-ket-dep-nhat-do-cu-dan-mang-nhat-ban-binh-chon-kimetsu-no-yaiba-cung-co-chan.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "games";
const categoryLink = "/games";
const title =
  "5 anime có cái kết đẹp nhất do cư dân mạng Nhật Bản bình chọn: Kimetsu no Yaiba cũng có chân";
const author = "DS";
const source = "Trí Thức Trẻ";
const timestamp = "30/07/2021 12:17 PM";
const description =
  "Theo một khảo sát dành cho netizen Nhật, đây là những bộ anime shonen mà theo họ là có cái kết đẹp nhất.";
const link =
  "5-anime-co-cai-ket-dep-nhat-do-cu-dan-mang-nhat-ban-binh-chon-kimetsu-no-yaiba-cung-co-chan";
const tagparam = ["ANIME"];
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

export default function page_20210730121742() {
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
                    Dù là kết cục có hậu hay không có hậu, những tập cuối cùng
                    trong các tựa <strong>anime</strong>/manga đình đám luôn là
                    tập được người đọc săn đón nhiều nhất. Liệu nhân vật chúng
                    ta yêu thích sẽ sống hay chết, sẽ bị chia cắt hay ở cạnh
                    nhau, đó là những điều mà độc giả muốn được biết ở tập cuối
                    của một bộ manga.
                  </p>
                  <p>
                    Theo một khảo sát của Goo Ranking với 2,7 nghìn cư dân mạng
                    đến từ Nhật Bản vào tháng 1 và tháng 3 năm 2021, chúng ta đã
                    có một bảng xếp hạng tương đối chính xác về "best ending"
                    trong shonen <strong>anime</strong>/manga.
                  </p>
                  <h5>1. Inuyasha</h5>
                  <p>
                    Chiếm gần 20% số người tham gia khảo sát, với 472 bình chọn,
                    Inuyasha của Rumiko Takahashi được xem là bộ shonen có kết
                    thúc đẹp nhất.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/30/inuyashaanime11715041280x0-372f9970-162763048698727674113.jpeg"
                    alt="1, ANIME,"
                    note=""
                  />
                  <p>
                    Inuyasha đã được phát hành trên Weekly Shonen Sunday từ năm
                    1996 – 2008. Manga xoay quanh câu chuyện của Kagome
                    Higurashi, cô gái 15 tuổi sau khi rơi xuống giếng đã du hành
                    về quá khứ, đưa độc giả tới một chuyến phiêu lưu đầy yêu ma
                    quỷ quái.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/30/366658216759141727441155741349128370126848n-16276319709521014217653.jpg"
                    alt="2, ANIME,"
                    note=""
                  />
                  <p>
                    Tập cuối cùng của Inuyasha đã kết thúc một cách hoàn hảo.
                    Kagome quyết định ở lại thời đại quá khứ để ở bên Inuyasha.
                    Cả hai kết hôn và có một cuộc sống hạnh phúc. Phần kết của
                    Inuyasha sẽ còn thú vị hơn khi có một phần sequel được ra
                    mắt trong thời gian tới.
                  </p>
                  <h5>2. Fullmetal Alchemist</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/30/00-featured-fma-brotherhood-ed-al-happy-screenshot-1627630581525137338127.jpg"
                    alt="3, ANIME,"
                    note=""
                  />
                  <p>
                    Đứng ở vị trí thứ hai là Fullmetal Alchemist của Hiromu
                    Arakawa, được đăng trên Weekly Shonen Gangan từ năm 2001 -
                    2010. Câu chuyện theo chân hai anh em nhà giả kim Edward và
                    Alphonse Elric ở đất nước hư cấu Amestris khi họ tìm kiếm
                    Hòn đá Triết gia trong thần thoại.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/30/-16276306284962045915414.jpg"
                    alt="4, ANIME,"
                    note=""
                  />
                  <p>
                    Trong chương cuối cùng của Fullmetal Alchemist, Edward chiến
                    đấu và đánh bại kẻ thù của mình, hy sinh sức mạnh Giả Kim,
                    giành lại Alphonse – người trước đó đã tự hy sinh tính mạng
                    của chính mình. Edward và Winry cũng chính thức đến với
                    nhau, kết hôn và có một gia đình hạnh phúc với 2 đứa con.
                  </p>
                  <h5>3. Touch</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/30/b0ed05c52e78e77d63069953424518011362764637-1627630712583949428698.jpg"
                    alt="5, ANIME,"
                    note=""
                  />
                  <p>
                    Có tổng số bình chọn 355 và đứng vị trí thứ 3 là Touch của
                    Mitsuru Adachi, được đăng từ 1981 đến năm 1986 trên tạp chí
                    Weekly Shonen Sunday.
                  </p>
                  <RelationNewsInPage category={category} />
                  <p>
                    Bộ manga theo chân hành trình của hai anh em sinh đôi Kazuya
                    và Tatsuya Uesugi với mục tiêu giành chức vô địch bóng chày
                    trung học lớn nhất trong năm, Koshien. Mặc dù bộ truyện
                    tranh được xuất bản lần đầu tiên cách đây 30 năm, nhưng cái
                    kết của nó vẫn được cư dân mạng Nhật Bản yêu thích cho đến
                    ngày nay.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/30/njvpyb7-162763073745213664241.jpg"
                    alt="6, ANIME,"
                    note=""
                  />
                  <p>
                    Kết thúc của Touch có cảnh đội của hai anh em Kazuya và
                    Tatsuya giành chiến thắng trong giải Koshien, và Tatsuya đã
                    thú nhận tình cảm của mình với crush mình là Minami. Không
                    chắc cặp đôi này có được cái kết có hậu không, nhưng chỉ vậy
                    là đủ để độc giả hạnh phúc với cái kết này rồi.
                  </p>
                  <h5>4. Haikyuu!!</h5>
                  <p>
                    Một bộ truyện khác gần đây cũng có mặt trong top 5 này là
                    Haikyuu!! của Haruichi Furudate, được đăng tải trên Weekly
                    Shonen Jump từ năm 2012 - 2020. Manga xoay quanh ước mơ của
                    nhân vật chính - Shoyo Hinata, là trở thành một vận động
                    viên bóng chuyền vĩ đại. Haikyuu!! cũng có cái kết khá tốt
                    đẹp theo đánh giá của 221 netizen Nhật.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/30/bo-truyen-tranh-haikyuu-chinh-thuc-buoc-vao-hoi-ket-16276312900032130361768.jpg"
                    alt="7, ANIME,"
                    note=""
                  />
                  <p>
                    Phần kết của Haikyuu!! có âm hưởng tương tự như Kimetsu no
                    Yaiba, kể về những nhân vật chính vài năm sau khi tốt nghiệp
                    trung học, bao gồm cả việc có bao nhiêu người vẫn đang theo
                    đuổi bộ môn bóng chuyền.
                  </p>
                  <h5>5. Demon Slayer: Kimetsu no Yaiba</h5>
                  <p>
                    Tác phẩm lừng danh này của Koyoharu Gotouge đã có mặt tên
                    Weekly Shonen Jump từ năm 2016 đến năm 2020, tuy chỉ mới nổi
                    trong vòng vài năm nhưng đã nhanh chóng kết thúc và giành
                    được nhiều thành công rực rỡ.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/30/seriesdetaildesktop-1c99db3ae6b6-1598848789030-nncgegsb-1627631582414235379264.jpg"
                    alt="8, ANIME,"
                    note=""
                  />
                  <p>
                    Thay vì để người đọc chờ đợi hàng năm trời, thậm chí hàng
                    thập kỷ, Demon Slayer đã gói gọn series manga của nó với một
                    kết thúc khá trọn vẹn. Cốt truyện chính kể về Tanjiro Kamado
                    và hành trình tìm kiếm, trả thù con quỷ đã tàn sát gia đình
                    anh, biến em gái anh thành quỷ.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/30/demon-slayer-205-16276317795911756006536.jpg"
                    alt="9, ANIME,"
                    note=""
                  />
                  <p>
                    Chương cuối cùng của Demon Slayer là một bước đột phá tuyệt
                    vời về cả cốt truyện lẫn thời gian. Trong đó, cháu chắt của
                    Zenitsu, một trong những người bạn đồng hành của Tanjiro,
                    đọc một cuốn sách có tựa đề "Truyền thuyết về Zenitsu". Lũ
                    trẻ kết luận, tất cả những người chiến đấu với ma quỷ và hy
                    sinh vì sự hòa bình sẽ được tái sinh để sống cuộc sống hạnh
                    phúc hơn, và quả thực là như vậy. Tuy mang tính an ủi là
                    nhiều, Demon Slayer vẫn có ending vô cùng cảm động đối với
                    độc giả.
                  </p>
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
