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
"timestamp": 08/06/2021 02:03 PM",
"title": Đấu Trường Chân Lý: Leo rank dễ dàng hơn với mẹo 'xoay trang bị' cho chủ lực từ kỳ thủ Thách Đấu",
"description": Việc lựa chọn trang bị cho chủ lực phù hợp với từng trận đấu là yếu tố cực kỳ quan trọng trong Đấu Trường Chân Lý.",
"src": ",
"alt": Dau Truong Chan Ly, Cam Nang Dau Truong Chan Ly, Riot Games, Riot, Game, Tin Game, Draven, Vo Cuc Kiem, Mordekaiser, Hecarim, ",
"category": games",
"date": 08/06/2021",
"time": 02:03 PM",
"link": "/dau-truong-chan-ly-leo-rank-de-dang-hon-voi-meo-xoay-trang-bi-cho-chu-luc-tu-ky-thu-thach-dau",
"zcomponent": page_20210608140340",
"filepath": ./20210608140340-dau-truong-chan-ly-leo-rank-de-dang-hon-voi-meo-xoay-trang-bi-cho-chu-luc-tu-ky-thu-thach-dau.js"
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
  "Đấu Trường Chân Lý: Leo rank dễ dàng hơn với mẹo 'xoay trang bị' cho chủ lực từ kỳ thủ Thách Đấu";
const author = "A Đồi";
const source = "Pháp luật và bạn đọc";
const timestamp = "08/06/2021 02:03 PM";
const description =
  "Việc lựa chọn trang bị cho chủ lực phù hợp với từng trận đấu là yếu tố cực kỳ quan trọng trong Đấu Trường Chân Lý.";
const link =
  "dau-truong-chan-ly-leo-rank-de-dang-hon-voi-meo-xoay-trang-bi-cho-chu-luc-tu-ky-thu-thach-dau";
const tagparam = [
  "dau-truong-chan-ly",
  "cam-nang-dau-truong-chan-ly",
  "riot-games",
  "riot",
  "game",
  "tin-game",
  "draven",
  "vo-cuc-kiem",
  "mordekaiser",
  "hecarim",
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

export default function page_20210608140340() {
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
                      Nếu bạn đã chơi Đấu Trường Chân Lý đủ nhiều thì hẳn là đã
                      quen thuộc với tình trạng đạt top 1 và top 8 ở 2 trận đấu
                      với cùng một đội hình và cách xây dựng trang bị. Lý do cho
                      việc này đó là cách xây dựng trang bị của bạn không phù
                      hợp với thực tế trận đấu khiến chủ lực bị hạ gục một cách
                      quá mức nhanh chóng hoặc rơi vào tình trạng thiếu sát
                      thương. Vậy làm thế nào để khắc phục tình trạng này? Hãy
                      cùng tìm hiểu về hướng dẫn của kỳ thủ Thách Đấu -
                      Mismatched Socks nhé.
                    </p>
                    <p></p>
                    <p></p>
                    <p>
                      Về cơ bản thì trong Đấu Trường Chân Lý có 2 dạng đội hình
                      chính đó là từ trước đến sau và từ sau ra trước. Thuật ngữ
                      này được các kỳ thủ Thách Đấu tạo ra dựa theo thứ tự tấn
                      công của đội hình hoặc vị trí mà chủ lực của team tập
                      trung sát thương vào. Với đội hình từ trước đến sau thì
                      thứ tự tấn công sẽ là tiêu diệt từ các unit ở tuyến đầu
                      rồi đến chủ lực hàng sau. Đội hình từ sau ra trước thì
                      ngược lại khi chủ lực sẽ tấn công hàng sau của team địch
                      đầu tiên.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/8/draven-162312351755518684537.png"
                      alt="Dau Truong Chan Ly, Cam Nang Dau Truong Chan Ly, Riot Games, Riot, Game, Tin Game, Draven, Vo Cuc Kiem, Mordekaiser, Hecarim, "
                      note="Đội hình xoay quanh Draven là điển hình cho lối chơi từ trước đến sau"
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/8/sat-thu-16231235218881428127583.png"
                      alt="Dau Truong Chan Ly, Cam Nang Dau Truong Chan Ly, Riot Games, Riot, Game, Tin Game, Draven, Vo Cuc Kiem, Mordekaiser, Hecarim, "
                      note="Team Sát Thủ là đại diện cho dạng đội hình từ sau ra trước"
                    />
                    <p>
                      Vậy tại sao điều này lại trở nên quan trọng đối với cách
                      xây dựng trang bị cho chủ lực? Lý do nằm ở việc biết được
                      mình phải đối đầu với dạng đội hình nào sẽ giúp{" "}
                      <strong>game</strong> thủ ghép trang bị một cách hợp lý
                      hơn cho tướng. Nếu bạn ghép trang bị theo một khuôn mẫu
                      nhưng nó lại không phù hợp với trận đấu thực tế thì nguồn
                      sát thương của bạn nhẹ thì không gây ra đủ damage, nặng
                      hơn là bị triệt tiêu hoàn toàn.
                    </p>
                    <p>
                      Ví dụ với chủ lực <strong>Draven</strong>, bạn có thể ghép
                      3 trang bị tấn công như Vô Cực Kiếm, Cung Xanh, Cuồng Đao
                      Guinsoo cho vị tướng này. Đây là lối lên đồ rất mạnh khi
                      bạn đối đầu với những đội hình từ trước ra sau vì Draven
                      sẽ không bị đe dọa ở giai đoạn đầu giao tranh. Tuy nhiên,
                      nếu gặp phải những đội hình Sát Thủ hoặc Vel'Koz - Ma Pháp
                      Sư thì Draven của bạn lại bị hạ gục quá nhanh. Khi đó thì
                      bạn nên chuyển Cung Xanh, Cuồng Đao Guinsoo thành Huyết
                      Kiếm, Giáp Thiên Thần.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/8/draven-16231241827651600021204.jpg"
                      alt="Dau Truong Chan Ly, Cam Nang Dau Truong Chan Ly, Riot Games, Riot, Game, Tin Game, Draven, Vo Cuc Kiem, Mordekaiser, Hecarim, "
                      note="Việc lựa chọn xây dựng nhiều item tấn công hay phòng ngự sẽ dựa hoàn toàn vào thực tế trận đấu"
                    />
                    <p>
                      Không chỉ liên quan tới lựa chọn trang bị, việc biết được
                      tính chất đội hình của team địch cũng ảnh hưởng tới việc
                      mua những unit khắc chế. Vẫn với ví dụ{" "}
                      <strong>Draven</strong> ở trên, bạn có thể sử dụng Lulu
                      bên cạnh chủ lực để có thể buff tốc độ đánh và gia tăng
                      sát thương khi biết mình sẽ đối đầu với dạng đội hình từ
                      trước đến sau. Trong khi đó thì Ryze hay thậm chí là
                      Kindred sẽ giúp chủ lực sống sót nếu bạn gặp phải những
                      đội hình thuộc dạng từ sau ra trước.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/4/22/-16190810102191171853298.jpg"
                      alt="Dau Truong Chan Ly, Cam Nang Dau Truong Chan Ly, Riot Games, Riot, Game, Tin Game, Draven, Vo Cuc Kiem, Mordekaiser, Hecarim, "
                      note="Kindred là tướng chống lại dạng đội hình từ sau ra trước tương đối tốt"
                    />
                    <p>
                      Bên cạnh đó thì bạn cũng có thể khắc chế được cả 2 dạng
                      đội hình này bằng cách sử dụng những chủ lực cận chiến.
                      Những tướng như <strong>Mordekaiser</strong>, Garen hay
                      quen thuộc hơn là <strong>Hecarim</strong> chính là các
                      cái tên tiêu biểu nhất khi có thể cầm nhiều đồ chống chịu
                      nhưng vẫn gây sát thương mạnh.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/5/3/mordekaiser-1620007921360292440511.jpg"
                      alt="Dau Truong Chan Ly, Cam Nang Dau Truong Chan Ly, Riot Games, Riot, Game, Tin Game, Draven, Vo Cuc Kiem, Mordekaiser, Hecarim, "
                      note="Bạn có thể ghép nhiều item chống chịu cho những chủ lực cận chiến mà chúng vẫn gây ra sát thương mạnh"
                    />
                    <p>
                      Tóm lại thì việc biết được tính chất đội hình của các đối
                      thủ trong trận sẽ giúp bạn xây dựng item cho chủ lực một
                      cách hiệu quả nhất có thể. Để làm được điều này thì bạn
                      cần liên tục quan sát đối thủ để thu thập thông tin, biết
                      khi nào họ định "chuyển bài" để đưa ra các phương án khắc
                      chế thích hợp.
                    </p>
                    <p></p>
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
