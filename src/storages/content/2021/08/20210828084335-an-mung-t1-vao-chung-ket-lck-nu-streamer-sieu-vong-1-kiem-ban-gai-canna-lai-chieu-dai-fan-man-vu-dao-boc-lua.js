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
"timestamp": '28/08/2021 08:43 AM',
"title": 'Ăn mừng T1 vào Chung kết LCK, nữ streamer "siêu vòng 1" kiêm bạn gái Canna lại chiêu đãi fan màn vũ đạo bốc lửa',
"description": 'Màn ăn mừng "cháy quá cháy" của cô nàng streamer khiến fan LCK được một phen phấn khích.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/25/photo-1-1629893331616434606806.jpg',
"alt": 'LIÊN MINH HUYỀN THOẠI,GUL-HYE,CANNA,GAME,TIN GAME,T1 CANNA,TIN TỨC GAME,TIN LMHT,TIN LOL,T1,LCK,',
"category": 'images',
"date": '28/08/2021',
"time": '08:43 AM',
"link": '/an-mung-t1-vao-chung-ket-lck-nu-streamer-sieu-vong-1-kiem-ban-gai-canna-lai-chieu-dai-fan-man-vu-dao-boc-lua',
"zcomponent": 'page_20210828084335',
"filepath": './20210828084335-an-mung-t1-vao-chung-ket-lck-nu-streamer-sieu-vong-1-kiem-ban-gai-canna-lai-chieu-dai-fan-man-vu-dao-boc-lua.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "images";
const categoryLink = "/images";
const title =
  'Ăn mừng T1 vào Chung kết LCK, nữ streamer "siêu vòng 1" kiêm bạn gái Canna lại chiêu đãi fan màn vũ đạo bốc lửa';
const author = "Loris CarryUs";
const source = "Pháp luật và bạn đọc";
const timestamp = "28/08/2021 08:43 AM";
const description =
  'Màn ăn mừng "cháy quá cháy" của cô nàng streamer khiến fan LCK được một phen phấn khích.';
const link =
  "an-mung-t1-vao-chung-ket-lck-nu-streamer-sieu-vong-1-kiem-ban-gai-canna-lai-chieu-dai-fan-man-vu-dao-boc-lua";
const tagparam = [
  "LIÊN MINH HUYỀN THOẠI",
  "GUL-HYE",
  "CANNA",
  "GAME",
  "TIN GAME",
  "T1 CANNA",
  "TIN TỨC GAME",
  "TIN LMHT",
  "TIN LOL",
  "T1",
  "LCK",
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

export default function page_20210828084335() {
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
                      <strong>Gul-hye</strong> là một nữ streamer khá nổi tiếng
                      tại Hàn Quốc với phong cách thời trang quyến rũ và những
                      màn vũ đạo bốc lửa đặc trưng. Tuy nhiên, cô nàng chỉ thực
                      sự trở thành "ngôi sao" trong làng content creator sau khi
                      dính tin đồn hẹn hò với tuyển thủ đường trên của{" "}
                      <strong>T1</strong> - <strong>Canna</strong> vào hồi tháng
                      1 năm nay.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/25/photo-1-1629893331616434606806.jpg"
                      alt="1, LIÊN MINH HUYỀN THOẠI,GUL-HYE,CANNA,GAME,TIN GAME,T1 CANNA,TIN TỨC GAME,TIN LMHT,TIN LOL,T1,LCK,"
                      note=""
                    />

                    <p>
                      Sau khi những tin đồn được tung ra,{" "}
                      <strong>Gul-hye</strong> nhanh chóng có động thái ngầm xác
                      nhận thông tin về việc mình đang trong mối quan hệ yêu
                      đương với chàng tuyển thủ trẻ kém cô 6 tuổi, trong khi{" "}
                      <strong>Canna</strong> không đưa ra bất kỳ bình luận nào
                      về mối quan hệ giữa họ. Chỉ biết rằng sau quãng thời gian
                      đó, Gul-hye dù đã nhiều lần hứng chịu chỉ trích vì bị cho
                      là nguyên nhân khiến Canna sa sút phong độ hồi mùa xuân,
                      vẫn bỏ ngoài tai mọi lời đàm tiếu để công khai cổ vũ bạn
                      trai mỗi khi anh thi đấu.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/25/canna-1629893276667766104336.png"
                      alt="2, LIÊN MINH HUYỀN THOẠI,GUL-HYE,CANNA,GAME,TIN GAME,T1 CANNA,TIN TỨC GAME,TIN LMHT,TIN LOL,T1,LCK,"
                      note=""
                    />

                    <p>
                      Mới đây, trong trận Bán kết <strong>LCK</strong> Mùa Hè
                      2021 giữa Gen.G Esports vs <strong>T1</strong>, nữ
                      streamer cũng tiếp tục đồng hành cùng khán giả khi cổ vũ
                      cho đội tuyển của <strong>Canna</strong> trên livestream.
                      Chứng kiến T1 bất ngờ hủy diệt đối thủ truyền kiếp GEN,
                      trong khi Canna là một trong những nhân tố thi đấu nổi bật
                      nhất, <strong>Gul-hye</strong> thậm chí đã không kìm nén
                      được cảm xúc mà liên tục hò hét trên sóng trực tiếp.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/25/canna-2-162989327670870668512.png"
                      alt="3, LIÊN MINH HUYỀN THOẠI,GUL-HYE,CANNA,GAME,TIN GAME,T1 CANNA,TIN TỨC GAME,TIN LMHT,TIN LOL,T1,LCK,"
                      note=""
                    />

                    <p>
                      Không những vậy, để ăn mừng chiến thắng của{" "}
                      <strong>T1</strong>, cô nàng còn chiêu đãi người xem một
                      màn vũ đạo bốc lửa ngay trên sóng trực tiếp. Mặc dù trang
                      phục kín đáo hơn mọi khi, nhưng body chuẩn siêu mẫu và đặc
                      biệt là vòng 1 bốc lửa của <strong>Gul-hye</strong> vẫn
                      khiến những khán giả theo dõi kênh stream được phen đỏ mắt
                      trong khi vẫn lắc lư theo điệu nhạc.
                    </p>
                    <p>
                      <strong>Gul-hye</strong> không giấu nổi cảm xúc khi chứng
                      kiến "bạn trai" tỏa sáng giúp <strong>T1</strong> kết liễu
                      GEN
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/25/photo-1-1629893170678628424793.gif"
                      alt="4, LIÊN MINH HUYỀN THOẠI,GUL-HYE,CANNA,GAME,TIN GAME,T1 CANNA,TIN TỨC GAME,TIN LMHT,TIN LOL,T1,LCK,"
                      note=""
                    />

                    <p>
                      Trong quãng thời gian được cho là hẹn hò cùng{" "}
                      <strong>Canna</strong>, <strong>Gul-hye</strong> có vẻ như
                      đã bớt "hở bạo" trong gu ăn mặc, và cô nàng cũng khá ý tứ
                      khi mỗi lần lên sóng để cổ vũ <strong>T1</strong> đều sẽ
                      chọn trang phục kín đáo và lịch sự hơn. Cùng với việc
                      Canna lấy lại phong độ, sự ác cảm mà fan T1 dành cho cô
                      nàng cũng dần nguôi ngoai.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Thậm chí, một số người hâm mộ còn chúc phúc cho cô và{" "}
                      <strong>Canna</strong>, và mong đợi rằng "bùa lợi bạn gái"
                      sẽ giúp anh chàng tỏa sáng tại CKTG 2021 - Giải đấu quốc
                      tế đầu tiên mà tuyển thủ sinh năm 2000 có cơ hội tham dự.
                    </p>
                    <p>
                      Một vài hình ảnh góp phần tạo nên thương hiệu "nữ hoàng
                      gợi cảm" trong làng streamer Hàn Quốc của Gul-hye
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/25/photo-1-16298950857561435011502.gif"
                      alt="5, LIÊN MINH HUYỀN THOẠI,GUL-HYE,CANNA,GAME,TIN GAME,T1 CANNA,TIN TỨC GAME,TIN LMHT,TIN LOL,T1,LCK,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/25/photo-1-16298950898091979047948.gif"
                      alt="6, LIÊN MINH HUYỀN THOẠI,GUL-HYE,CANNA,GAME,TIN GAME,T1 CANNA,TIN TỨC GAME,TIN LMHT,TIN LOL,T1,LCK,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/25/photo-1-16298951022581661771641.gif"
                      alt="7, LIÊN MINH HUYỀN THOẠI,GUL-HYE,CANNA,GAME,TIN GAME,T1 CANNA,TIN TỨC GAME,TIN LMHT,TIN LOL,T1,LCK,"
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
