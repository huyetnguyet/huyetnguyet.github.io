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
"timestamp": '20/08/2021 09:21 AM',
"title": 'BXH 10 isekai anime tệ nhất thập kỷ, bạn đã "lỡ xem" bao nhiêu bộ trong số này? (P.1)',
"description": 'Trong một thập kỷ vừa qua, isekai anime xuất hiện và gần như càn quét cộng đồng fan manga-anime. Vậy đâu là những bộ phim bị đánh giá dở tệ nhất?',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/18/high-school-prodigies-16292781850941653289036.jpg',
"alt": 'ISEKAI,BẢNG XẾP HẠNG,ANIME,',
"category": 'games',
"date": '20/08/2021',
"time": '09:21 AM',
"link": '/bxh-10-isekai-anime-te-nhat-thap-ky-ban-da-lo-xem-bao-nhieu-bo-trong-so-nay-p1',
"zcomponent": 'page_20210820092140',
"filepath": './20210820092140-bxh-10-isekai-anime-te-nhat-thap-ky-ban-da-lo-xem-bao-nhieu-bo-trong-so-nay-p1.js'
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
  'BXH 10 isekai anime tệ nhất thập kỷ, bạn đã "lỡ xem" bao nhiêu bộ trong số này? (P.1)';
const author = "DS";
const source = "Trí Thức Trẻ";
const timestamp = "20/08/2021 09:21 AM";
const description =
  "Trong một thập kỷ vừa qua, isekai anime xuất hiện và gần như càn quét cộng đồng fan manga-anime. Vậy đâu là những bộ phim bị đánh giá dở tệ nhất?";
const link =
  "bxh-10-isekai-anime-te-nhat-thap-ky-ban-da-lo-xem-bao-nhieu-bo-trong-so-nay-p1";
const tagparam = ["ISEKAI", "BẢNG XẾP HẠNG", "ANIME"];
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

export default function page_20210820092140() {
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
                      Thể loại chuyển sinh sang thế giới khác hay còn gọi là{" "}
                      <strong>isekai</strong> gần như giữ vị trí đầu bảng các
                      thể loại manga-<strong>anime</strong> được yêu thích nhất.
                      Fan cứng của thể loại này đã có rất nhiều siêu phẩm anime
                      để đời như Overlord, Sword Art Online… Nhưng cũng giống
                      như bất kỳ thể loại phim ảnh nào khác, isekai anime vẫn
                      tồn tại không ít những bộ phim mà khán giả ước rằng chúng
                      chưa bao giờ tồn tại trên đời.
                    </p>
                    <h5>
                      10. High School Prodigies Have It Easy Even In Another
                      World
                    </h5>

                    <p>
                      Hầu hết các loạt phim <strong>isekai</strong> đều có một
                      motif khủng khiếp là giả vờ như những nhân vật mạnh quá lố
                      của họ không hề mạnh chút nào. Tuy nhiên, High School
                      Prodigies Have It Easy Even In Another World thậm chí còn
                      chẳng buồn giả vờ. Ngay từ khi bước qua cổng dịch chuyển,
                      cả bảy đứa trẻ đều thể hiện rõ sức mạnh vượt trội của
                      chúng, đến nỗi có thể áp đảo, lật đổ và làm đảo lộn cả thế
                      giới chuyển sinh.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/18/high-school-prodigies-16292781850941653289036.jpg"
                      alt="1, ISEKAI,BẢNG XẾP HẠNG,ANIME,"
                      note=""
                    />
                    <p>
                      Mọi thứ từ công nghệ đến hệ thống giao thương đều bị thay
                      đổi. Thế nhưng dù có ưu ái nhân vật thế nào đi chăng nữa
                      thì bộ truyện vấn bị khán giả ghét thậm tệ.
                    </p>
                    <h5>9. The Ones Within – Genome</h5>
                    <p>
                      Aktasuki Iride là người yêu thích trò chơi điện tử và trở
                      nên nổi tiếng nhờ các video Let’s Play của mình. Cho đến
                      một ngày cậu phá đảo trò chơi The Ones Within – Genome.
                      Tuy nhiên, lại có một tin đồn nói rằng bất cứ ai phá đảo
                      trò chơi này sẽ biến mất. Và chuyện này thực sự xảy đến
                      với Aktasuki khi cậu được chuyển sinh sang một thế giới
                      khác.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/18/ones-within-genome-1629278199962157504492.jpg"
                      alt="2, ISEKAI,BẢNG XẾP HẠNG,ANIME,"
                      note=""
                    />

                    <p>
                      Ở vũ trụ mới này, Aktasuki được yêu cầu hoàn thành một trò
                      chơi mới và hợp tác với những người đã biến thế giới này
                      thành đơn sắc và đạt 100 triệu lượt xem. Dù khởi đầu của
                      phim khá ổn thỏa nhưng kết thúc vẫn khiến khán giả thất
                      vọng vô cùng.
                    </p>
                    <h5>8. In Another World With My Smartphone</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/18/isekai-in-another-world-smartphone-op-lead-16292782183771058912307.jpg"
                      alt="3, ISEKAI,BẢNG XẾP HẠNG,ANIME,"
                      note=""
                    />

                    <p>
                      Thật khó mà đánh giá chính thức bộ phim này tệ đến mức
                      nào. Truyện phim bắt đầu với việc nhân vật chính được
                      chuyển sinh sang một thế giới khác sau khi bị sát hại. Ở
                      thế giới này, Touya có phép thuật bậc thầy, tốc độ, phản
                      xạ và thậm chí trí nhớ đều tốt hơn. Anh đem theo bên mình
                      một chiếc điện thoại smartphone và nó biến anh chàng thành
                      bậc thầy phép thuật.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Tựu trung lại, phim chẳng có gì ngoài những màn tán tỉnh
                      nhạt nhẽo của nhân vật chính với các cô gái.
                    </p>
                    <h5>7. Maou – Sama Retry</h5>
                    <p>
                      Akira Oono quản lý một trò chơi thực tế ảo có tên Inifity
                      Game và thường vào vai nhân vật có tên Hakuto Kunai hoặc
                      chúa tể bóng tối. Một ngày nọ, Oono đăng nhập vào trò chơi
                      và bỗng nhiên được chuyển sinh đến thế giới khác. Ở đó,
                      anh chàng sở hữu sức mạnh vượt trội, liên tục đánh bại các
                      đối thủ.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/18/maou-sama-retry-16292782344651045631844.jpg"
                      alt="4, ISEKAI,BẢNG XẾP HẠNG,ANIME,"
                      note=""
                    />
                    <p>
                      Akira cứu được cô bé Aku và bắt đầu cuộc hành trình của
                      mình, anh ta xem cô bé như người hướng dẫn cho mình ở thế
                      giới mới này. Điểm độc đáo nhất của câu chuyện chỉ dừng
                      lại ở việc nhân vật chính là một ông chú lớn tuổi.
                    </p>
                    <h5>6. Arifureta: From Commonplace To World’s Strongest</h5>
                    <p>
                      Bộ phim do studio White Fox sản xuất có lẽ là nỗi thất
                      vọng lớn nhất trong mùa phim <strong>anime</strong> hè năm
                      2019. Câu chuyện xoay quanh một lớp học bị chuyển sinh
                      sang thế giới khác. Khi học sinh yếu nhất trong lớp,
                      Hajime, nhận ra mình bị phản bội, cậu ta đã bị cuốn vào
                      một mê cung không có lối ra.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/18/arifureta-1629278250838891166568.jpg"
                      alt="5, ISEKAI,BẢNG XẾP HẠNG,ANIME,"
                      note=""
                    />
                    <p>
                      Tuy nhiên, Hajime hạ quyết tâm rời khỏi thế giới chuyển
                      sinh. Vì light novel ra mắt năm 2013 vẫn chưa có hồi kết,
                      nên <strong>anime</strong> đã cố kéo dài các tình tiết
                      thành 13 tập. Tóm lại thì dự án này được thực hiện hết sức
                      cẩu thả.
                    </p>
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
