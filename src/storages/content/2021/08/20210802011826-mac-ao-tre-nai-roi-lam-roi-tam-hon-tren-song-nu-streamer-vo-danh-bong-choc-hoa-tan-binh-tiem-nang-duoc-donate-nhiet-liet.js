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
"timestamp": '02/08/2021 01:18 AM',
"title": 'Mặc áo trễ nải rồi làm "rơi" tâm hồn trên sóng, nữ streamer vô danh bỗng chốc hóa tân binh tiềm năng, được donate nhiệt liệt',
"description": 'Một hành động tưởng như vô tình, nhưng lại khiến cô nàng streamer trở nên nổi tiếng một cách khó lường.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/27/photo-1-1627364087502275971880.gif',
"alt": 'GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,',
"category": 'images',
"date": '02/08/2021',
"time": '01:18 AM',
"link": '/mac-ao-tre-nai-roi-lam-roi-tam-hon-tren-song-nu-streamer-vo-danh-bong-choc-hoa-tan-binh-tiem-nang-duoc-donate-nhiet-liet',
"zcomponent": 'page_20210802011826',
"filepath": './20210802011826-mac-ao-tre-nai-roi-lam-roi-tam-hon-tren-song-nu-streamer-vo-danh-bong-choc-hoa-tan-binh-tiem-nang-duoc-donate-nhiet-liet.js'
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
  'Mặc áo trễ nải rồi làm "rơi" tâm hồn trên sóng, nữ streamer vô danh bỗng chốc hóa tân binh tiềm năng, được donate nhiệt liệt';
const author = "Mặt Trứng";
const source = "Pháp luật và bạn đọc";
const timestamp = "02/08/2021 01:18 AM";
const description =
  "Một hành động tưởng như vô tình, nhưng lại khiến cô nàng streamer trở nên nổi tiếng một cách khó lường.";
const link =
  "mac-ao-tre-nai-roi-lam-roi-tam-hon-tren-song-nu-streamer-vo-danh-bong-choc-hoa-tan-binh-tiem-nang-duoc-donate-nhiet-liet";
const tagparam = ["GÁI XINH", "HOT GIRL", "CỘNG ĐỒNG MẠNG"];
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

export default function page_20210802011826() {
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
                      Ở thời điểm hiện tại, việc các cô nàng{" "}
                      <strong>hot girl</strong>, <strong>gái xinh</strong> xuất
                      hiện nhiều như cơm bữa, từ trên mạng xã hội cho tới những
                      ngóc ngách của đường phố đã là câu chuyện không còn xa lạ.
                      Thậm chí, có những cô nàng còn chẳng biết rằng mình đã trở
                      nên nổi tiếng chỉ sau một hoặc vài bức ảnh được chụp lén
                      nữa. Với các streamer cũng vậy. Bình thường, để có thể từ
                      điểm khởi đầu, một tân binh vô danh mà vươn mình tới
                      streamer có tên tuổi là cả quãng đường dài. Nhưng mới đây,
                      Sarah - một nữ streamer chẳng mấy ai biết tới vừa "rút
                      ngắn" con đường phát triển của mình theo cách không ai
                      ngờ.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/27/photo-1-16273639871571867966923.jpg"
                      alt="1, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,"
                      note="Sarah - nữ streamer xinh đẹp trong câu chuyện"
                    />
                    <p>
                      Trang cá nhân chỉ có hơn 1.000 follow, lên sóng cũng lèo
                      tèo vài chục, hay khả dĩ nhất là đạt tới hàng trăm người,
                      không khó để nhận ra rằng cô nàng Sarah vẫn còn cả một
                      chặng đường dài nếu như muốn thật sự lột xác và trở thành
                      tên tuổi có tiếng trong giới streamer Hàn Quốc. Thế nhưng
                      chẳng ai ngờ rằng, mới đây thôi, chỉ một khoảnh khắc khá
                      "vô tình" trên sóng livestream, Sarah bất ngờ trở thành
                      tâm điểm của mọi sự chú ý.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Theo đó, diện cho mình một chiếc áo hai dây trễ nải khoe
                      đôi gò bồng đảo to tròn căng tràn sức sống, Sarah thật sự
                      đã thu hút được vô số sự chú ý khi xuất hiện. Tuy nhiên,
                      phải tới khoảnh khắc mà cô nàng cúi xuống để chỉnh quạt
                      nhưng mắt vẫn cố ngước nhìn màn hình để đọc tương tác
                      trong khi bàn tay thì "che như không che", tránh sự cố
                      vòng một hớ hênh đã thật sự khiến kênh livestream như bùng
                      nổ. Tất cả đều ngỡ ngàng với tiết mục nóng bỏng không được
                      thông báo trước này.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/27/photo-1-1627365031978128173163.jpg"
                      alt="2, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,"
                      note="Tên tuổi của cô nàng sau đó cũng nhanh chóng nổi như cồn trên mạng xã hội"
                    />
                    <p>
                      Để rồi sau đó, cái tên Sarah cũng chẳng còn vô danh nữa.
                      Lượng follow trên trang cá nhân thì chưa tăng nhiều, nhưng
                      số người xem trên sóng, đi kèm với đó là các khoản donate
                      thì dần xuất hiện với tần suất dày đặc hơn xưa khá nhiều.
                      Và có thể thấy, chỉ một khoảnh khắc thôi, nhưng con đường
                      phát triển của Sarah đã tiết kiệm được đáng kể thời gian.
                      Để rồi chẳng biết có phải nhận ra điều gì thú vị hay
                      không, mà trong những lần lên sóng sau đó, cô nàng cũng
                      thường xuyên có những trang phục và hành động đầy thoải
                      mái như thế này đây.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/27/photo-1-16273655380281851702910.gif"
                      alt="3, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,"
                      note="Những hình ảnh gần đây khi lên sóng của cô nàng streamer"
                    />
                    <p>
                      Thế đấy, một khoảnh khắc thôi và giờ thì Sarah đã được
                      đánh giá là tân binh đầy tiềm năng. Dù chưa biết cô nàng
                      còn tài lẻ nào nữa không, nhưng ít nhất, con đường phát
                      triển của Sarah đang sáng hơn bao giờ hết.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/27/photo-1-16273659672491083148181.jpg"
                      alt="4, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,"
                      note="Nhan sắc rạng rỡ của Sarah"
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/27/photo-1-1627364087502275971880.gif"
                      alt="5, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/27/photo-1-16273657355051238879850.gif"
                      alt="6, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,"
                      note=""
                    />
                  </div>
                  <AdsHorizontal />
                </div>

                <RandomFeature />

                <div className="source">Source: {source}</div>

                <FacebookShareButton link={facebookLinkShare} />

                <div className="tags">Tags: {updatedTags}</div>
              </div>
            </div>
          </div>
        </div>
      </Content>
    </>
  );
}
