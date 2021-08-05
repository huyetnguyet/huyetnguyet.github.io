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
"timestamp": '05/08/2021 08:47 AM',
"title": 'Những thử thách tưởng là vớ vẩn nhưng đố bạn làm được hoàn hảo',
"description": 'Mùa dịch rảnh rỗi thì thử làm những thứ như thế này xem, biết đâu bạn khám phá ra được tài năng của bản thân đó.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/8/5/photo-1-16281539793231764751337.jpg',
"alt": 'KỲ TÍCH,VỚ VẨN,',
"category": 'news',
"date": '05/08/2021',
"time": '08:47 AM',
"link": '/nhung-thu-thach-tuong-la-vo-van-nhung-do-ban-lam-duoc-hoan-hao',
"zcomponent": 'page_20210805084732',
"filepath": './20210805084732-nhung-thu-thach-tuong-la-vo-van-nhung-do-ban-lam-duoc-hoan-hao.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "news";
const categoryLink = "/news";
const title = "Những thử thách tưởng là vớ vẩn nhưng đố bạn làm được hoàn hảo";
const author = "DS";
const source = "Trí Thức Trẻ";
const timestamp = "05/08/2021 08:47 AM";
const description =
  "Mùa dịch rảnh rỗi thì thử làm những thứ như thế này xem, biết đâu bạn khám phá ra được tài năng của bản thân đó.";
const link = "nhung-thu-thach-tuong-la-vo-van-nhung-do-ban-lam-duoc-hoan-hao";
const tagparam = ["KỲ TÍCH", "VỚ VẨN"];
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

export default function page_20210805084732() {
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
                      Cứ tưởng rằng ngồi lê, đôi mách đã là thú vui tao nhã nhất
                      của những người rảnh việc trong lúc họ thảnh thơi. Thế
                      nhưng, dường như cái "tưởng" này đã hoàn toàn sai. Thật
                      ra, các thánh rảnh việc vẫn còn rất nhiều việc ngớ ngẩn để
                      làm, và dưới đây chỉ là một trong số đó mà thôi.
                    </p>
                    <p>
                      1. Lần đầu tiên thấy cây bút bi mà chẳng để lại giọt mực
                      nào.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/5/photo-1-16281539793231764751337.jpg"
                      alt="1, KỲ TÍCH,VỚ VẨN,"
                      note=""
                    />
                    <p>
                      2. Xúc được thìa kem như thế này cũng tài, nhưng ăn thì
                      chỉ một miếng là xong hết.{" "}
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/5/photo-1-16281548851441015642384.jpg"
                      alt="2, KỲ TÍCH,VỚ VẨN,"
                      note=""
                    />
                    <p>
                      3. Thái được hành màu sắc thế này thì đúng là ảo, nhưng mà
                      hoàn hảo thì cũng khoai.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/5/photo-1-16281549865461665692713.jpg"
                      alt="3, KỲ TÍCH,VỚ VẨN,"
                      note=""
                    />
                    <p>
                      4. Nắp sữa chua kiểu này thì đúng là{" "}
                      <strong>kỳ tích</strong> rồi chứ còn gì nữa.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/5/photo-1-16281550284942088105764.jpg"
                      alt="4, KỲ TÍCH,VỚ VẨN,"
                      note=""
                    />
                    <p>
                      5. Say sinh tố được tròn trịa kiểu này, đúng là vừa sướng
                      mắt vừa khó hiểu.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/5/photo-1-1628155099049240018650.jpg"
                      alt="5, KỲ TÍCH,VỚ VẨN,"
                      note=""
                    />
                    <p>
                      6. Xếp 4 trái bóng gôn đè lên nhau khó đến thế mà sao lại
                      làm được.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/5/photo-1-1628153985954563029430.jpg"
                      alt="6, KỲ TÍCH,VỚ VẨN,"
                      note=""
                    />
                    <p>
                      7. Đừng tưởng mấy quả bóng là to, cứ để đó xem anh diễn
                      đây này.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/5/photo-2-1628153987045936730734.jpg"
                      alt="7, KỲ TÍCH,VỚ VẨN,"
                      note=""
                    />
                    <p>8. Có khác gì hội đếm gạo trên TikTok đâu.</p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/5/photo-4-16281539860151582899162.jpg"
                      alt="8, KỲ TÍCH,VỚ VẨN,"
                      note=""
                    />
                    <RelationNewsInPage category={category} />
                    <p>
                      9. Gọt bút chì mà không đứt miếng nào thì đúng là đáng nể.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/5/photo-6-16281539866311359955594.jpg"
                      alt="9, KỲ TÍCH,VỚ VẨN,"
                      note=""
                    />
                    <p>
                      10. Đây rõ ràng là <strong>kỳ tích</strong> khó tin rồi
                      đó.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/5/photo-8-16281539861791205453457.jpg"
                      alt="10, KỲ TÍCH,VỚ VẨN,"
                      note=""
                    />
                    <p>
                      11. Tình cờ thôi, nhưng mà đúng là <strong>vớ vẩn</strong>{" "}
                      thật mà.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/5/photo-1-16281553481511205853593.jpg"
                      alt="11, KỲ TÍCH,VỚ VẨN,"
                      note=""
                    />
                    <p>12. Bóc quýt mà không để sót miếng vỏ nào thì sao?</p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/5/photo-10-1628153988326549955085.png"
                      alt="12, KỲ TÍCH,VỚ VẨN,"
                      note=""
                    />
                    <p>
                      13. Đấy rõ ràng là vừa rảnh vừa lầy lội mới có thể làm trò
                      này.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/5/photo-12-16281539868091800962619.jpg"
                      alt="13, KỲ TÍCH,VỚ VẨN,"
                      note=""
                    />
                    <p>
                      14. Chỉ với bốn chiếc dĩa là bạn đã làm được trò ảo thuật
                      nho nhỏ ở quán bar.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/5/photo-13-1628153987821416877155.jpg"
                      alt="14, KỲ TÍCH,VỚ VẨN,"
                      note=""
                    />
                    <p>15. Đúng là hôm nay quá rảnh rồi mà.</p>

                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/5/photo-15-1628153986324940532783.jpg"
                      alt="15, KỲ TÍCH,VỚ VẨN,"
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
