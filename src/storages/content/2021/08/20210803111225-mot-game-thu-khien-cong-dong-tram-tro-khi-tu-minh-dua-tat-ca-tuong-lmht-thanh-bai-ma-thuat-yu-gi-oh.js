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
"timestamp": '03/08/2021 11:12 AM',
"title": 'Một game thủ khiến cộng đồng trầm trồ khi tự mình đưa tất cả tướng LMHT thành bài ma thuật Yu-Gi-Oh!',
"description": 'Game thủ LMHT đã phải tốn tới 3 năm để hoàn thành bộ sưu tập kể trên.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/3/photo-1-1627953614281910334369.jpg',
"alt": 'LIÊN MINH HUYỀN THOẠI,LMHT,RIOT GAMES,GAME,RIOT,TIN GAME,YU-GI-OH!,YUGI OH,TIN TỨC GAME,GAME THỦ,CỘNG ĐỒNG MẠNG,GAME THỦ LMHT,',
"category": 'games',
"date": '03/08/2021',
"time": '11:12 AM',
"link": '/mot-game-thu-khien-cong-dong-tram-tro-khi-tu-minh-dua-tat-ca-tuong-lmht-thanh-bai-ma-thuat-yu-gi-oh',
"zcomponent": 'page_20210803111225',
"filepath": './20210803111225-mot-game-thu-khien-cong-dong-tram-tro-khi-tu-minh-dua-tat-ca-tuong-lmht-thanh-bai-ma-thuat-yu-gi-oh.js'
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
  "Một game thủ khiến cộng đồng trầm trồ khi tự mình đưa tất cả tướng LMHT thành bài ma thuật Yu-Gi-Oh!";
const author = "A Đồi";
const source = "Pháp luật và bạn đọc";
const timestamp = "03/08/2021 11:12 AM";
const description =
  "Game thủ LMHT đã phải tốn tới 3 năm để hoàn thành bộ sưu tập kể trên.";
const link =
  "mot-game-thu-khien-cong-dong-tram-tro-khi-tu-minh-dua-tat-ca-tuong-lmht-thanh-bai-ma-thuat-yu-gi-oh";
const tagparam = [
  "LIÊN MINH HUYỀN THOẠI",
  "LMHT",
  "RIOT GAMES",
  "GAME",
  "RIOT",
  "TIN GAME",
  "YU-GI-OH!",
  "YUGI OH",
  "TIN TỨC GAME",
  "GAME THỦ",
  "CỘNG ĐỒNG MẠNG",
  "GAME THỦ LMHT",
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

export default function page_20210803111225() {
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
                      Với việc là một tựa <strong>game</strong> cực kỳ nổi
                      tiếng, <strong>LMHT</strong> từ lâu đã sở hữu rất nhiều
                      fan trung thành. Vì vậy mà các sản phẩm như âm nhạc,
                      cosplay, video giải trí, đồ lưu niệm... liên quan tới LMHT
                      đều nhận được sự quan tâm rất lớn từ phía{" "}
                      <strong>game thủ</strong>.
                    </p>
                    <p>
                      Và mới đây thì một <strong>game</strong> thủ{" "}
                      <strong>LMHT</strong> đã khiến cộng đồng không khỏi trầm
                      trồ khi tự mình đưa tất cả tướng của tựa game này thành
                      các lá bài ma thuật <strong>Yu-Gi-Oh!</strong>{" "}
                      <strong>Game thủ</strong> có tài khoản là "supertom" đã
                      chia sẻ lên diễn đàn Gamer.com rằng để hoàn thiện bộ sưu
                      tập gồm 306 lá bài thì anh đã phải mất tới 3 năm với chi
                      phí khoảng 6000 nhân dân tệ (hơn 21 triệu VNĐ).
                    </p>
                    <p>Cuốn sổ sưu tập thẻ bài của anh chàng "supertom"</p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/3/photo-1-1627953623961944345863.jpg"
                      alt="1, LIÊN MINH HUYỀN THOẠI,LMHT,RIOT GAMES,GAME,RIOT,TIN GAME,YU-GI-OH!,YUGI OH,TIN TỨC GAME,GAME THỦ,CỘNG ĐỒNG MẠNG,GAME THỦ LMHT,"
                      note="Trong đó chứa đựng rất nhiều thẻ bài mang phong cách Yu-Gi-Oh! nhưng nhân vật lại là tướng LMHT"
                    />
                    <p>
                      Theo chia sẻ của <strong>game</strong> thủ này thì công
                      đoạn khó nhất trong quá trình hoàn thành các lá bài đó là
                      nghĩ ra hiệu ứng, chỉ số cho từng nhân vật. Hơn nữa, khi
                      có một vị tướng được làm lại hình ảnh thì anh chàng này
                      lại phải nghĩ ra một lá bài mới để phù hợp với nhân vật
                      đó. Bên cạnh đó thì anh chàng này cũng nói rằng việc tinh
                      chỉnh hình ảnh, cỡ chữ của từng lá bài cũng tốn rất nhiều
                      thời gian để hoàn thiện.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/3/photo-1-16279536469311839062255.jpg"
                      alt="2, LIÊN MINH HUYỀN THOẠI,LMHT,RIOT GAMES,GAME,RIOT,TIN GAME,YU-GI-OH!,YUGI OH,TIN TỨC GAME,GAME THỦ,CỘNG ĐỒNG MẠNG,GAME THỦ LMHT,"
                      note="Việc chỉnh sửa hình ảnh của các lá bài cũng tiêu tốn rất nhiều thời gian"
                    />
                    <p>
                      <strong>Game</strong> thủ có biệt danh "supertom" cũng
                      chia sẻ rằng đây là một bộ sưu tập cá nhân và anh rất tự
                      hào khi đã hoàn thiện nó. Ngoài ra thì{" "}
                      <strong>game thủ</strong> này cũng không muốn vướng vào
                      những rắc rối liên quan tới bản quyền hình ảnh của{" "}
                      <strong>Yu-Gi-Oh!</strong> cũng như <strong>LMHT</strong>.
                      Vì vậy những lá bài này không phải là sản phẩm để trao
                      đổi, kinh doanh. Sau khi bộ sưu tập của "supertom" được
                      chia sẻ lên diễn đàn league-funny.com thì cộng đồng không
                      khỏi thán phục sự tâm huyết và kiên trì của anh chàng này.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Bộ sưu tập của <strong>game</strong> thủ "supertom" đã
                      được chia sẻ lên diễn đàn League-funny.com
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/3/2-1627953058102683665434.jpg"
                      alt="3, LIÊN MINH HUYỀN THOẠI,LMHT,RIOT GAMES,GAME,RIOT,TIN GAME,YU-GI-OH!,YUGI OH,TIN TỨC GAME,GAME THỦ,CỘNG ĐỒNG MẠNG,GAME THỦ LMHT,"
                      note="Các bình luận đều tỏ ra khâm phục sự nhiệt huyết của game thủ này và dành những lời khen tới các lá bài"
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/3/3-16279534609231088395300.jpg"
                      alt="4, LIÊN MINH HUYỀN THOẠI,LMHT,RIOT GAMES,GAME,RIOT,TIN GAME,YU-GI-OH!,YUGI OH,TIN TỨC GAME,GAME THỦ,CỘNG ĐỒNG MẠNG,GAME THỦ LMHT,"
                      note="Bình luận trên diễn đàn Gamer.com cũng bày tỏ sự ngưỡng mộ với game thủ này"
                    />
                    <p>
                      Hãy cùng chiêm ngưỡng những vị tướng <strong>LMHT</strong>{" "}
                      theo phong cách bài ma thuật <strong>Yu-Gi-Oh!</strong>{" "}
                      của <strong>game</strong> thủ "supertom" nhé:
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/3/photo-1-1627953614281910334369.jpg"
                      alt="5, LIÊN MINH HUYỀN THOẠI,LMHT,RIOT GAMES,GAME,RIOT,TIN GAME,YU-GI-OH!,YUGI OH,TIN TỨC GAME,GAME THỦ,CỘNG ĐỒNG MẠNG,GAME THỦ LMHT,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/3/1-1627953058096526629641.jpg"
                      alt="6, LIÊN MINH HUYỀN THOẠI,LMHT,RIOT GAMES,GAME,RIOT,TIN GAME,YU-GI-OH!,YUGI OH,TIN TỨC GAME,GAME THỦ,CỘNG ĐỒNG MẠNG,GAME THỦ LMHT,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/3/4-1627953460927876761658.jpg"
                      alt="7, LIÊN MINH HUYỀN THOẠI,LMHT,RIOT GAMES,GAME,RIOT,TIN GAME,YU-GI-OH!,YUGI OH,TIN TỨC GAME,GAME THỦ,CỘNG ĐỒNG MẠNG,GAME THỦ LMHT,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/3/5-1627953460932433594510.jpg"
                      alt="8, LIÊN MINH HUYỀN THOẠI,LMHT,RIOT GAMES,GAME,RIOT,TIN GAME,YU-GI-OH!,YUGI OH,TIN TỨC GAME,GAME THỦ,CỘNG ĐỒNG MẠNG,GAME THỦ LMHT,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/3/6-16279534609192075433405.jpg"
                      alt="9, LIÊN MINH HUYỀN THOẠI,LMHT,RIOT GAMES,GAME,RIOT,TIN GAME,YU-GI-OH!,YUGI OH,TIN TỨC GAME,GAME THỦ,CỘNG ĐỒNG MẠNG,GAME THỦ LMHT,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/3/photo-1-1627953792405796633610.jpg"
                      alt="10, LIÊN MINH HUYỀN THOẠI,LMHT,RIOT GAMES,GAME,RIOT,TIN GAME,YU-GI-OH!,YUGI OH,TIN TỨC GAME,GAME THỦ,CỘNG ĐỒNG MẠNG,GAME THỦ LMHT,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/3/photo-1-1627953796546787756758.jpg"
                      alt="11, LIÊN MINH HUYỀN THOẠI,LMHT,RIOT GAMES,GAME,RIOT,TIN GAME,YU-GI-OH!,YUGI OH,TIN TỨC GAME,GAME THỦ,CỘNG ĐỒNG MẠNG,GAME THỦ LMHT,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/3/photo-2-1627953796041745884411.jpg"
                      alt="12, LIÊN MINH HUYỀN THOẠI,LMHT,RIOT GAMES,GAME,RIOT,TIN GAME,YU-GI-OH!,YUGI OH,TIN TỨC GAME,GAME THỦ,CỘNG ĐỒNG MẠNG,GAME THỦ LMHT,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/3/photo-3-1627953796894881366688.jpg"
                      alt="13, LIÊN MINH HUYỀN THOẠI,LMHT,RIOT GAMES,GAME,RIOT,TIN GAME,YU-GI-OH!,YUGI OH,TIN TỨC GAME,GAME THỦ,CỘNG ĐỒNG MẠNG,GAME THỦ LMHT,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/3/photo-4-1627953797918295190774.jpg"
                      alt="14, LIÊN MINH HUYỀN THOẠI,LMHT,RIOT GAMES,GAME,RIOT,TIN GAME,YU-GI-OH!,YUGI OH,TIN TỨC GAME,GAME THỦ,CỘNG ĐỒNG MẠNG,GAME THỦ LMHT,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/3/photo-5-1627953797409186304339.jpg"
                      alt="15, LIÊN MINH HUYỀN THOẠI,LMHT,RIOT GAMES,GAME,RIOT,TIN GAME,YU-GI-OH!,YUGI OH,TIN TỨC GAME,GAME THỦ,CỘNG ĐỒNG MẠNG,GAME THỦ LMHT,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/3/photo-6-1627953794036452031478.jpg"
                      alt="16, LIÊN MINH HUYỀN THOẠI,LMHT,RIOT GAMES,GAME,RIOT,TIN GAME,YU-GI-OH!,YUGI OH,TIN TỨC GAME,GAME THỦ,CỘNG ĐỒNG MẠNG,GAME THỦ LMHT,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/3/photo-7-1627953794073898104468.jpg"
                      alt="17, LIÊN MINH HUYỀN THOẠI,LMHT,RIOT GAMES,GAME,RIOT,TIN GAME,YU-GI-OH!,YUGI OH,TIN TỨC GAME,GAME THỦ,CỘNG ĐỒNG MẠNG,GAME THỦ LMHT,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/3/photo-8-1627953798236315062709.jpg"
                      alt="18, LIÊN MINH HUYỀN THOẠI,LMHT,RIOT GAMES,GAME,RIOT,TIN GAME,YU-GI-OH!,YUGI OH,TIN TỨC GAME,GAME THỦ,CỘNG ĐỒNG MẠNG,GAME THỦ LMHT,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/3/photo-9-162795379408716885306.jpg"
                      alt="19, LIÊN MINH HUYỀN THOẠI,LMHT,RIOT GAMES,GAME,RIOT,TIN GAME,YU-GI-OH!,YUGI OH,TIN TỨC GAME,GAME THỦ,CỘNG ĐỒNG MẠNG,GAME THỦ LMHT,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/3/photo-10-16279537987631677020126.jpg"
                      alt="20, LIÊN MINH HUYỀN THOẠI,LMHT,RIOT GAMES,GAME,RIOT,TIN GAME,YU-GI-OH!,YUGI OH,TIN TỨC GAME,GAME THỦ,CỘNG ĐỒNG MẠNG,GAME THỦ LMHT,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/3/photo-11-16279537977412096599448.jpg"
                      alt="21, LIÊN MINH HUYỀN THOẠI,LMHT,RIOT GAMES,GAME,RIOT,TIN GAME,YU-GI-OH!,YUGI OH,TIN TỨC GAME,GAME THỦ,CỘNG ĐỒNG MẠNG,GAME THỦ LMHT,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/3/photo-12-162795379727116510666.jpg"
                      alt="22, LIÊN MINH HUYỀN THOẠI,LMHT,RIOT GAMES,GAME,RIOT,TIN GAME,YU-GI-OH!,YUGI OH,TIN TỨC GAME,GAME THỦ,CỘNG ĐỒNG MẠNG,GAME THỦ LMHT,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/3/photo-13-1627953796169265373177.jpg"
                      alt="23, LIÊN MINH HUYỀN THOẠI,LMHT,RIOT GAMES,GAME,RIOT,TIN GAME,YU-GI-OH!,YUGI OH,TIN TỨC GAME,GAME THỦ,CỘNG ĐỒNG MẠNG,GAME THỦ LMHT,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/3/photo-14-1627953794211948819937.jpg"
                      alt="24, LIÊN MINH HUYỀN THOẠI,LMHT,RIOT GAMES,GAME,RIOT,TIN GAME,YU-GI-OH!,YUGI OH,TIN TỨC GAME,GAME THỦ,CỘNG ĐỒNG MẠNG,GAME THỦ LMHT,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/3/photo-15-16279537958312110088641.jpg"
                      alt="25, LIÊN MINH HUYỀN THOẠI,LMHT,RIOT GAMES,GAME,RIOT,TIN GAME,YU-GI-OH!,YUGI OH,TIN TỨC GAME,GAME THỦ,CỘNG ĐỒNG MẠNG,GAME THỦ LMHT,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/3/photo-16-1627953795651103407917.jpg"
                      alt="26, LIÊN MINH HUYỀN THOẠI,LMHT,RIOT GAMES,GAME,RIOT,TIN GAME,YU-GI-OH!,YUGI OH,TIN TỨC GAME,GAME THỦ,CỘNG ĐỒNG MẠNG,GAME THỦ LMHT,"
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
