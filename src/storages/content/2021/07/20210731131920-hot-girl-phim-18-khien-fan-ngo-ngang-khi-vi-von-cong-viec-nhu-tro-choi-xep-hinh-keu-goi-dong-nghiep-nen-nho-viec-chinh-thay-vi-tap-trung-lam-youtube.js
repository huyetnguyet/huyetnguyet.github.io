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
"timestamp": '31/07/2021 01:19 PM',
"title": 'Hot girl phim 18+ khiến fan ngỡ ngàng khi ví von công việc như trò chơi xếp hình, kêu gọi đồng nghiệp nên nhớ "việc chính" thay vì tập trung làm YouTube',
"description": 'Chia sẻ của cô nàng hot girl khiến cho không ít người phải bật cười vì sự hài hước.',
"src": '',
"alt": 'GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,EIMI FUKADA,AV,PHIM AV,PHIM 18+,',
"category": 'games',
"date": '31/07/2021',
"time": '01:19 PM',
"link": '/hot-girl-phim-18-khien-fan-ngo-ngang-khi-vi-von-cong-viec-nhu-tro-choi-xep-hinh-keu-goi-dong-nghiep-nen-nho-viec-chinh-thay-vi-tap-trung-lam-youtube',
"zcomponent": 'page_20210731131920',
"filepath": './20210731131920-hot-girl-phim-18-khien-fan-ngo-ngang-khi-vi-von-cong-viec-nhu-tro-choi-xep-hinh-keu-goi-dong-nghiep-nen-nho-viec-chinh-thay-vi-tap-trung-lam-youtube.js'
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
  'Hot girl phim 18+ khiến fan ngỡ ngàng khi ví von công việc như trò chơi xếp hình, kêu gọi đồng nghiệp nên nhớ "việc chính" thay vì tập trung làm YouTube';
const author = "Mặt Trứng";
const source = "Pháp luật và bạn đọc";
const timestamp = "31/07/2021 01:19 PM";
const description =
  "Chia sẻ của cô nàng hot girl khiến cho không ít người phải bật cười vì sự hài hước.";
const link =
  "hot-girl-phim-18-khien-fan-ngo-ngang-khi-vi-von-cong-viec-nhu-tro-choi-xep-hinh-keu-goi-dong-nghiep-nen-nho-viec-chinh-thay-vi-tap-trung-lam-youtube";
const tagparam = [
  "GÁI XINH",
  "HOT GIRL",
  "CỘNG ĐỒNG MẠNG",
  "EIMI FUKADA",
  "AV",
  "PHIM AV",
  "PHIM 18+",
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

export default function page_20210731131920() {
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
                      Nếu như để tìm ra một trong những cái tên nổi bật nhất
                      trong ngành công nghiệp <strong>AV</strong> Nhật Bản ở
                      thời điểm hiện tại, chắc chắn nhiều người sẽ liên tưởng
                      ngay tới cô nàng <strong>Eimi Fukada</strong> - một trong
                      những <strong>hot girl</strong> chăm chỉ nhất. Sở dĩ nói
                      như vậy vì mặc dù bản thân được đánh giá nằm ở vị thế top
                      đầu trong ngành, nhưng Eimi không hề kén cá chọn canh mà
                      vẫn giữ tần suất ra tác phẩm mới cực kỳ đều đặn. Song song
                      với đó, cô nàng cũng liên tục update trang cá nhân, kênh
                      YouTube của mình và những câu phát ngôn bá đạo.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/28/photo-1-1627449356189352428462.jpg"
                      alt="1, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,EIMI FUKADA,AV,PHIM AV,PHIM 18+,"
                      note="Eimi Fukada - một trong những cô nàng hot girl nóng bỏng nhất của ngành công nghiệp AV Nhật Bản"
                    />
                    <p>
                      Đặc biệt, cô nàng còn càng được các fan yêu quý hơn khi
                      từng lên trang cá nhân và để lại một dòng trạng thái đầy
                      ẩn ý: "Đôi khi chúng ta quên mất việc chính của mình là
                      diễn viên <strong>phim 18+</strong>". Câu nói này được coi
                      như một cách để <strong>Eimi Fukada</strong> tự nhắn nhủ
                      bản thân mình cũng như những người đồng nghiệp vốn đang có
                      phần sa đà vào YouTuber, người mẫu ảnh sau khi có chút ít
                      danh tiếng. Chắc đó cũng là lý do mà dù có bận bịu tới
                      đâu, Eimi cũng vẫn luôn rất tập trung vào công việc chính
                      của mình. Tới mức mà cô nàng sau đó còn thừa nhận rằng
                      theo thời gian, chuyên môn của mình đang ngày một tăng cao
                      và cảm thấy rất tự tin trước mọi yêu cầu.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/28/-162744973289323148703.jpg"
                      alt="2, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,EIMI FUKADA,AV,PHIM AV,PHIM 18+,"
                      note="Rất chăm chỉ làm YouTube"
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/28/-16274498530161056356621.jpg"
                      alt="3, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,EIMI FUKADA,AV,PHIM AV,PHIM 18+,"
                      note="Nhưng bù lại, Eimi chưa bao giờ bỏ bê công việc diễn xuất của mình"
                    />
                    <p>
                      Ngay cả nhiều đạo diễn, chuyên gia trong giới cũng thừa
                      nhận <strong>Eimi Fukada</strong> là một trong những{" "}
                      <strong>hot girl</strong> thông minh nhất mà họ từng làm
                      việc cùng. Nói về vấn đề này, cô nàng cũng tỏ ra khá thích
                      thú khi chia sẻ rằng bản thân là người rất thích tìm tòi,
                      thậm chí còn ví von công việc diễn xuất của mình như một
                      trò chơi xếp hình. Eimi thừa nhận luôn thích sắp xếp những
                      ý tưởng, kế hoạch hay nói ngắn gọn là mọi thứ từ trong đầu
                      một cách có tổ chức. Đó cũng là lý do mà cô nàng đạt được
                      những thành công và sự phát triển như ngày hôm nay.
                    </p>
                    <RelationNewsInPage category={category} />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/28/-1627450019963181094316.jpg"
                      alt="4, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,EIMI FUKADA,AV,PHIM AV,PHIM 18+,"
                      note="Cô nàng luôn rất thích sắp xếp mọi thứ trong cuộc sống"
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/28/-1627450040410771579982.jpg"
                      alt="5, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,EIMI FUKADA,AV,PHIM AV,PHIM 18+,"
                      note="Đồng thời cũng tự ví von công việc của mình như một trò xếp hình vậy"
                    />
                    <p>
                      Có lẽ đó cũng là lý do mà ở thời điểm hiện tại,{" "}
                      <strong>Eimi Fukada</strong> đang là một trong những mỹ
                      nhân được yêu thích nhất nhì trong ngành công nghiệp phim{" "}
                      <strong>AV</strong> Nhật Bản. Cô nàng cũng chứng minh năng
                      lực của mình khi gần như "phủ sóng" ngành công nghiệp với
                      rất nhiều tác phẩm ở đa dạng thể loại. Tuy nhiên, được yêu
                      quý quá đôi khi cũng phiền phức. Tới mức mà nàng{" "}
                      <strong>hot girl</strong> còn bị fan cuồng tìm tới tận
                      nhà, bối rối phải chuyển "hộ khẩu" thì cũng đủ hiểu, cái
                      tên Eimi Fukada phổ biến tới cỡ nào rồi đấy.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/28/-1627450241158264163285.jpg"
                      alt="6, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,EIMI FUKADA,AV,PHIM AV,PHIM 18+,"
                      note="Eimi Fukada đang là tên tuổi được yêu thích nhất ở thời điểm hiện tại"
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
