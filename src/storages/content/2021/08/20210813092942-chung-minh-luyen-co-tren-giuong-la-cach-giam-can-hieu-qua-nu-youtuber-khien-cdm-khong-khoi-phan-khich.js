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
"timestamp": '13/08/2021 09:29 AM',
"title": 'Chứng minh "luyện cơ" trên giường là cách giảm cân hiệu quả, nữ YouTuber khiến CĐM không khỏi phấn khích',
"description": 'Rất nhiều khán giản đã bày tỏ sự ủng hộ với video của nữ YouTuber này.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/8/13/photo-1-16288285076622116945542.jpg',
"alt": 'GÁI XINH,HOT GIRL,NỮ YOUTUBER,YOUTUBER,',
"category": 'images',
"date": '13/08/2021',
"time": '09:29 AM',
"link": '/chung-minh-luyen-co-tren-giuong-la-cach-giam-can-hieu-qua-nu-youtuber-khien-cdm-khong-khoi-phan-khich',
"zcomponent": 'page_20210813092942',
"filepath": './20210813092942-chung-minh-luyen-co-tren-giuong-la-cach-giam-can-hieu-qua-nu-youtuber-khien-cdm-khong-khoi-phan-khich.js'
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
  'Chứng minh "luyện cơ" trên giường là cách giảm cân hiệu quả, nữ YouTuber khiến CĐM không khỏi phấn khích';
const author = "A Đồi";
const source = "Pháp luật và bạn đọc";
const timestamp = "13/08/2021 09:29 AM";
const description =
  "Rất nhiều khán giản đã bày tỏ sự ủng hộ với video của nữ YouTuber này.";
const link =
  "chung-minh-luyen-co-tren-giuong-la-cach-giam-can-hieu-qua-nu-youtuber-khien-cdm-khong-khoi-phan-khich";
const tagparam = ["GÁI XINH", "HOT GIRL", "NỮ YOUTUBER", "YOUTUBER"];
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

export default function page_20210813092942() {
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
                      Nếu như các bạn chưa biết thì Misha là một cái tên đang vô
                      cùng hot trong làng <strong>YouTuber</strong> thời gian
                      vừa qua. Bên cạnh gương mặt xinh đẹp và vẻ ngoài nóng
                      bỏng, sự nổi tiếng của Misha còn tới từ việc cô theo đuổi
                      dạng nội dung vô cùng độc đáo trên nền tảng YouTube. Cụ
                      thể thì cô nàng thường đăng tải những video hậu trường về
                      các bộ phim 18+ do chính mình tham gia sản xuất.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/13/photo-1-1628828268926153141731.jpg"
                      alt="2, GÁI XINH,HOT GIRL,NỮ YOUTUBER,YOUTUBER,"
                      note="Cô nàng đã mời một cặp đôi thực sự để tham gia vào quá trình thử nghiệm"
                    />
                    <p>
                      Chính vì sự đặt biệt này mà Misha hiện đang sở hữu 847
                      nghìn lượt đăng ký trên YouTube và 677 nghìn người theo
                      dõi tại các nền tảng mạng xã hội. Điều này cho thấy kênh
                      YouTube của Misha đang phát triển cực kỳ nhanh và độ nổi
                      tiếng của cô này cũng lớn hơn theo thời gian.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/13/photo-1-16288283275661493232717.jpg"
                      alt="3, GÁI XINH,HOT GIRL,NỮ YOUTUBER,YOUTUBER,"
                      note="Sau 1 tháng thì người bạn gái đã giảm được 1,6kg"
                    />
                    <p>
                      Và trong video mới nhất của mình, Misha đã chọn một nội
                      dung mới đó là về chủ đề giảm cân. Cụ thể thì Misha có nói
                      rằng mình đã đổ rất nhiều mồ hôi sau một lần làm "chuyện
                      đó" với bạn trai cách đây ít ngày. Vì vậy mà{" "}
                      <strong>
                        nữ <strong>YouTuber</strong>
                      </strong>{" "}
                      này đã đặt ra giả thuyết rằng nếu một cặp đôi làm "chuyện
                      đó" đều đặn trong vòng 1 tháng và ăn uống điều độ thì sẽ
                      giảm cân vô cùng hiệu quả.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/13/1-16288283901631490812810.jpg"
                      alt="4, GÁI XINH,HOT GIRL,NỮ YOUTUBER,YOUTUBER,"
                      note="Còn người bạn trai thì giảm được 1kg"
                    />
                    <p>
                      Misha cho rằng làm "chuyện đó" đều đặn sẽ giúp chúng ta
                      giảm cân hiệu quả
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/13/2-16288283901671297174523.jpg"
                      alt="5, GÁI XINH,HOT GIRL,NỮ YOUTUBER,YOUTUBER,"
                      note="Rất có thể trong thời gian ngắn sắp tới, Misha sẽ vượt qua cột mốc 1 triệu lượt đăng ký trên YouTube"
                    />
                    <p>
                      Để chứng minh cho luận điểm của mình thì Misha đã mời một
                      cặp đôi thực sự vào quá trình thử nghiệm của mình. Thậm
                      chí Misha còn đứng bên cạnh cặp đôi này để có thể đo lượng
                      Kcal mà cặp đôi này đã tiêu hao trong quá trình làm
                      "chuyện đó". Kết quả là sau 1 tháng thử nghiệm, người bạn
                      gái đã giảm được 1,6kg còn người bạn trai cũng giảm được
                      1kg. Cô nàng tỏ ra vô cùng hào hứng với kết quả này khi đã
                      chứng minh được giả thuyết của mình là đúng.
                    </p>

                    <RelationNewsInPage category={category} />
                    <p>
                      Sau khi video được đăng tải thì nó đã khiến cho những khán
                      giả của Misha không khỏi phấn khích vì dạng nội dung vừa
                      mới lạ lại hấp dẫn này. "Video này thật sự rất sáng tạo và
                      vô cùng hài hước đó" - một khán giả bình luận. Có lẽ với
                      sự ủng hộ lớn từ khán giả cùng việc nghĩ ra những video
                      thú vị như trên thì việc Misha vượt qua con số 1 triệu
                      lượt đăng ký trên YouTube chỉ là chuyện sớm muộn mà thôi.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/13/photo-1-16288282314521021086989.jpg"
                      alt="1, GÁI XINH,HOT GIRL,NỮ YOUTUBER,YOUTUBER,"
                      note="Misha - Nữ nhân vật chính trong câu chuyện"
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/13/photo-1-16288285076622116945542.jpg"
                      alt="6, GÁI XINH,HOT GIRL,NỮ YOUTUBER,YOUTUBER,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/13/photo-1-1628828680151340892230.jpg"
                      alt="7, GÁI XINH,HOT GIRL,NỮ YOUTUBER,YOUTUBER,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/13/photo-1-16288286653471035010826.png"
                      alt="8, GÁI XINH,HOT GIRL,NỮ YOUTUBER,YOUTUBER,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/13/photo-1-16288285579161539978659.jpg"
                      alt="9, GÁI XINH,HOT GIRL,NỮ YOUTUBER,YOUTUBER,"
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
