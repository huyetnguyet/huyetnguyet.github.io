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
"timestamp": '31/07/2021 01:20 PM',
"title": 'Đi mua bút vẽ cũng bị gọi là họa sĩ, nữ YouTuber siêu vòng 1 than thở: "Tôi làm chỉ vì đam mê"',
"description": 'Nữ YouTuber này khẳng định rằng mình chẳng phài là họa sĩ chuyên nghiệp như nhiều người lầm tưởng.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/7/31/gai-16277119747911360430274-1627712175729158353346.jpg',
"alt": 'GÁI XINH,HOT GIRL,YOUTUBER,NỮ YOUTUBER,',
"category": 'images',
"date": '31/07/2021',
"time": '01:20 PM',
"link": '/di-mua-but-ve-cung-bi-goi-la-hoa-si-nu-youtuber-sieu-vong-1-than-tho-toi-lam-chi-vi-dam-me',
"zcomponent": 'page_20210731132015',
"filepath": './20210731132015-di-mua-but-ve-cung-bi-goi-la-hoa-si-nu-youtuber-sieu-vong-1-than-tho-toi-lam-chi-vi-dam-me.js'
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
  'Đi mua bút vẽ cũng bị gọi là họa sĩ, nữ YouTuber siêu vòng 1 than thở: "Tôi làm chỉ vì đam mê"';
const author = "A Đồi";
const source = "Trí Thức Trẻ";
const timestamp = "31/07/2021 01:20 PM";
const description =
  "Nữ YouTuber này khẳng định rằng mình chẳng phài là họa sĩ chuyên nghiệp như nhiều người lầm tưởng.";
const link =
  "di-mua-but-ve-cung-bi-goi-la-hoa-si-nu-youtuber-sieu-vong-1-than-tho-toi-lam-chi-vi-dam-me";
const tagparam = ["GÁI XINH", "HOT GIRL", "YOUTUBER", "NỮ YOUTUBER"];
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

export default function page_20210731132015() {
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
                      Với sự phát triển nhanh chóng của Internet trong những năm
                      vừa qua, tầm ảnh hưởng của các streamer,{" "}
                      <strong>YouTuber</strong> trở nên ngày càng lớn hơn. Mặt
                      trái của điều này là họ thường xuyên bị "soi mói" chẳng
                      khác nào các ngôi sao nổi tiếng. Đơn cử như{" "}
                      <strong>nữ YouTuber</strong> có tên là Janie khi cô nàng
                      chỉ đơn giản là đăng ảnh đi mua một vài chiếc bút vẽ cũng
                      bị giới truyền thông sở tại gán cho cái danh "họa sĩ
                      chuyên nghiệp".
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/31/gai-16277119747911360430274-1627712175729158353346.jpg"
                      alt="4, GÁI XINH,HOT GIRL,YOUTUBER,NỮ YOUTUBER,"
                      note=""
                    />
                    <p>
                      Janie đi mua một vài chiếc bút vẽ cũng bị gán cho cái danh
                      "họa sĩ chuyên nghiệp"
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Chính điều này khiến cho Janie bị hiểu lầm và khiến cô
                      nàng phải lên tiếng giải thích trên trang cá nhân. "Những
                      người theo dõi tôi từ lâu đều biết rằng tôi có rất nhiều
                      sở thích khác nhau. Trong thời gian hạn chế đi lại như bây
                      giờ thì tôi có nhiều thời gian hơn để dành cho những sở
                      thích đó. Vì vậy mà hôm trước tôi có mua một vài chiếc bút
                      vẽ để thỏa mãn niềm đam mê nhưng tôi không phải họa sĩ
                      chuyên nghiệp gì cả. Tôi chỉ là một{" "}
                      <strong>YouTuber</strong> mà thôi" - Janie chia sẻ trên
                      trang cá nhân.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/31/gai1-1627712036032805661807.jpg"
                      alt="1, GÁI XINH,HOT GIRL,YOUTUBER,NỮ YOUTUBER,"
                      note="Janie giải thích rằng cô đơn giản là thích vẽ chứ chẳng phải là họa sĩ chuyên nghiệp"
                    />
                    <p>
                      Không chỉ là có sở thích hội họa, Janie cũng là một game
                      thủ thứ thiệt khi thường xuyên chia sẻ hình ảnh mình chơi
                      game. Với gương mặt xinh đẹp cùng "tâm hồn" cực khủng,
                      Janie đã xây dựng được một lượng fan trung thành cực kỳ
                      lớn khi đang sở hữu 1,7 triệu người theo dõi trên các nền
                      tảng mạng xã hội. Mặc dù có số người ủng hộ lớn nhưng sự
                      nghiệp <strong>YouTuber</strong> của Janie lại không thuận
                      lợi như nhiều người tưởng tượng khi cô nàng chỉ sở hữu
                      khoảng 80 nghìn lượt đăng ký mà thôi.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/31/photo-1-162771208707922463129-1627712161581700552037.jpg"
                      alt="2, GÁI XINH,HOT GIRL,YOUTUBER,NỮ YOUTUBER,"
                      note="Janie cũng rất mê các trò chơi điện tử"
                    />
                    <p>
                      Nếu bạn còn nhớ thì vào đầu tháng 6 năm nay, Janie từng
                      thực hiện một dự án game show nhiều tập với những người
                      bạn của mình. Tuy nhiên khi dự án hoạn thiện được 80% thì
                      studio chịu trách nhiệm edit lại bị thiêu rụi hoàn toàn.
                      Cô nàng sau đó cũng rất nỗ lực trong việc đa dạng hóa nội
                      dung trên kênh từ chơi game, làm Vlog ăn uống cho tới dạng
                      video "mở hộp" nhưng kênh của Janie mãi chẳng thể phát
                      triển. Vì vậy sẽ chẳng quá khi nói Janie là "
                      <strong>YouTuber</strong> nhọ nhất năm".
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/31/photo-1-16277121324941986426678.jpg"
                      alt="3, GÁI XINH,HOT GIRL,YOUTUBER,NỮ YOUTUBER,"
                      note="Dù sở hữu ngoại hình nóng bỏng nhưng sự nghiệp YouTube của Janie lại khá lận đận"
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/31/photo-1-1627712112941941332776.jpg"
                      alt="5, GÁI XINH,HOT GIRL,YOUTUBER,NỮ YOUTUBER,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/31/photo-1-1627712143636195179029.jpg"
                      alt="6, GÁI XINH,HOT GIRL,YOUTUBER,NỮ YOUTUBER,"
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
