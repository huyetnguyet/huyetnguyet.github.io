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
"timestamp": '14/08/2021 11:40 AM',
"title": 'Nếu mê thể loại hành động thì đây là 10 manga chiến đấu hấp dẫn nhất định nên xem',
"description": 'Nếu bạn muốn tìm cảm giác mạnh trong những bộ manga chiến đấu, thì 10 cái tên dưới đây sẽ giúp bạn thỏa mãn.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/8/14/photo-1-16289300476001649657496.jpg',
"alt": 'DRAGON BALL,MANGA HÀNH ĐỘNG,MANGA CHIẾN ĐẤU,KENGAN ASURA,FLAME OF RECCA,BAKI,',
"category": 'games',
"date": '14/08/2021',
"time": '11:40 AM',
"link": '/neu-me-the-loai-hanh-dong-thi-day-la-10-manga-chien-dau-hap-dan-nhat-dinh-nen-xem',
"zcomponent": 'page_20210814114042',
"filepath": './20210814114042-neu-me-the-loai-hanh-dong-thi-day-la-10-manga-chien-dau-hap-dan-nhat-dinh-nen-xem.js'
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
  "Nếu mê thể loại hành động thì đây là 10 manga chiến đấu hấp dẫn nhất định nên xem";
const author = "Mẹ Sề";
const source = "Pháp luật và bạn đọc";
const timestamp = "14/08/2021 11:40 AM";
const description =
  "Nếu bạn muốn tìm cảm giác mạnh trong những bộ manga chiến đấu, thì 10 cái tên dưới đây sẽ giúp bạn thỏa mãn.";
const link =
  "neu-me-the-loai-hanh-dong-thi-day-la-10-manga-chien-dau-hap-dan-nhat-dinh-nen-xem";
const tagparam = [
  "DRAGON BALL",
  "MANGA HÀNH ĐỘNG",
  "MANGA CHIẾN ĐẤU",
  "KENGAN ASURA",
  "FLAME OF RECCA",
  "BAKI",
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

export default function page_20210814114042() {
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
                      Chiến đấu trong manga tất nhiên đồng nghĩa với ẩu đả và
                      những trận đấu tay đôi thú vị. Dưới đây là một số gợi ý về
                      truyện tranh chủ đề chiến đấu thú vị dành cho những bạn
                      thích thể loại hành động:
                    </p>
                    <h5>1. Dragon Ball Z</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/14/photo-1-16289300476001649657496.jpg"
                      alt="1, DRAGON BALL,MANGA HÀNH ĐỘNG,MANGA CHIẾN ĐẤU,KENGAN ASURA,FLAME OF RECCA,BAKI,"
                      note=""
                    />
                    <p>
                      <strong>Dragon Ball</strong> Z thực sự là một bộ truyện
                      tranh võ thuật với nhiều loạt đấu tay đôi căng thẳng giữa
                      các anh hùng trái đất chống lại các nhân vật xấu xa từ các
                      thế giới khác nhau.
                    </p>
                    <h5>2. History Greatest Disciple Kenichi</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/14/photo-1-1628930087788742517559.jpg"
                      alt="2, DRAGON BALL,MANGA HÀNH ĐỘNG,MANGA CHIẾN ĐẤU,KENGAN ASURA,FLAME OF RECCA,BAKI,"
                      note=""
                    />
                    <p>
                      Manga này cũng có nhiều trận chiến võ thuật vui nhộn và
                      thú vị, thông qua hành trình của Kenichi Shirahama khi gặp
                      những kẻ thù ngày càng mạnh hơn.
                    </p>
                    <h5>3. Kengan Asura</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/14/photo-1-1628930127008708487073.jpg"
                      alt="3, DRAGON BALL,MANGA HÀNH ĐỘNG,MANGA CHIẾN ĐẤU,KENGAN ASURA,FLAME OF RECCA,BAKI,"
                      note=""
                    />
                    <p>
                      <strong>Kengan Asura</strong> là bộ truyện tranh về võ
                      thuật rát nổi tiếng. Câu chuyện nói về nhân vật Ohma và
                      Yamasita trên con đường tham gia vào các trận chiến tàn
                      khốc của giải đấu quyền võ lớn nhất thế giới
                    </p>
                    <h5>4. Flame of Recca</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/14/photo-1-1628930222415730041422.jpg"
                      alt="4, DRAGON BALL,MANGA HÀNH ĐỘNG,MANGA CHIẾN ĐẤU,KENGAN ASURA,FLAME OF RECCA,BAKI,"
                      note=""
                    />
                    <p>
                      Câu chuyện xoay quanh một chiến binh ninja là Recca
                      Hanabishi, người không chỉ nổi tiếng ở thời đại của ông mà
                      còn truyền cảm hứng cho một trong những trò chơi chiến đấu
                      huyền thoại phổ biến nhất cho đến nay, đó là The King of
                      Fighters.
                    </p>
                    <h5>5. Baki</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/14/photo-1-16289302784121724007742.jpeg"
                      alt="5, DRAGON BALL,MANGA HÀNH ĐỘNG,MANGA CHIẾN ĐẤU,KENGAN ASURA,FLAME OF RECCA,BAKI,"
                      note=""
                    />
                    <p>
                      Khi nói đến những trận chiến tàn bạo đầy cơ bắp, series{" "}
                      <strong>Baki</strong> chắc chắn sẽ mang đến cho người xem
                      những câu chuyện hồi hộp thú vị, đặc biệt là trong bản
                      chuyển thể anime.
                    </p>
                    <RelationNewsInPage category={category} />
                    <h5>6. Yu Yu Hakusho</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/14/photo-1-16289303280091049218890.jpeg"
                      alt="6, DRAGON BALL,MANGA HÀNH ĐỘNG,MANGA CHIẾN ĐẤU,KENGAN ASURA,FLAME OF RECCA,BAKI,"
                      note=""
                    />
                    <p>
                      Bộ truyện nói về Yusuke Urameshi, một "tội phạm" vị thành
                      niên (trong và ngoài trường học) bị ô tô đâm chết khi cố
                      gắng cứu mạng một đứa bé. Sau nhiều bài kiểm tra mà Koenma
                      - con trai của Enma (người đứng đầu của linh giới) dành
                      cho cậu, Yusuke được tái sinh và làm việc dưới danh nghĩa
                      Underworld Detective (Thám tử Linh giới), qua đó nhận công
                      việc điều tra những vụ liên quan đến quỷ và ma trong thế
                      giới con người. Bộ truyện dần tập trung hơn vào các cảnh
                      chiến đấu và các cuộc thi về sau.
                    </p>
                    <h5>7. Shuumatsu no Valkyrie</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/14/photo-1-1628930601089217555016.png"
                      alt="7, DRAGON BALL,MANGA HÀNH ĐỘNG,MANGA CHIẾN ĐẤU,KENGAN ASURA,FLAME OF RECCA,BAKI,"
                      note=""
                    />
                    <p>
                      Shuumatsu No Valkyrie lấy bối cảnh ở thiên giới, nơi các
                      vị thần của tất cả các nền văn hóa và tôn giáo trên thế
                      giới đều tề tựu lại dưới sự đứng đầu của thần Zeus. Do các
                      thần đều muốn kết thúc sự sống của loài người nên một trận
                      Ragnarok giữa người và thần đã được tổ chức với mục tiêu
                      cứu sống nhân loại. Những trận đấu giữa các vị thần và
                      những con người mạnh nhất lịch sử lần lượt diễn ra rất gay
                      cấn và hấp dẫn.
                    </p>
                    <h5>8. Killing Bites</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/14/photo-1-16289306455711415934862.jpg"
                      alt="8, DRAGON BALL,MANGA HÀNH ĐỘNG,MANGA CHIẾN ĐẤU,KENGAN ASURA,FLAME OF RECCA,BAKI,"
                      note=""
                    />
                    <p>
                      Killing Bites là tên của trận chiến sinh tử tại thế giới
                      ngầm giữa những con người lai thú. Một con quái vật không
                      biết sợ là gì sẽ chiến đấu tới cùng trong thế giới thú
                      tính đầy kinh khiếp và điên cuồng.
                    </p>
                    <h5>9. Holyland</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/14/photo-1-1628930660182367507425.png"
                      alt="9, DRAGON BALL,MANGA HÀNH ĐỘNG,MANGA CHIẾN ĐẤU,KENGAN ASURA,FLAME OF RECCA,BAKI,"
                      note=""
                    />
                    <p>
                      Yuu là 1 cậu bé trung học chẳng phù hợp ở đâu cả. Để tìm
                      nơi mình thuộc về và để được chấp nhận cậu ấy sẽ làm bất
                      cứ điều gì. Tuy nhiên điều này lại dẫn tới điều khác và
                      cậu ấy buộc phải đánh nhau để bảo vệ nơi của mình, thánh
                      địa của cậu ấy... và đó cũng là lúc truyền thuyết về "Thug
                      Hunter" bắt đầu.
                    </p>
                    <h5>10. Tiger Mask</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/14/photo-1-1628930730131769644778.jpg"
                      alt="10, DRAGON BALL,MANGA HÀNH ĐỘNG,MANGA CHIẾN ĐẤU,KENGAN ASURA,FLAME OF RECCA,BAKI,"
                      note=""
                    />
                    <p>
                      Đấu vật chắc chắn là một môn thể thao phức tạp và vui
                      nhộn, đặc biệt là trong truyện tranh! Tiger Mask là bộ
                      truyện tranh thú vị lấy môn đấu vật làm trung tâm.
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
