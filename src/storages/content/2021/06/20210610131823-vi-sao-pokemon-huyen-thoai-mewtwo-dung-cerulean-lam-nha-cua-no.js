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
"timestamp": '10/06/2021 01:18 PM',
"title": 'Vì sao Pokémon huyền thoại Mewtwo dùng hang Cerulean làm nhà?',
"description": 'Không nhiều nơi trên thế giới Pokemon có đủ sự phù hợp để Mewtwo có thể gọi là nhà.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/11/photo-1-16233447817771943324158.png',
"alt": 'Pokemon, Mewtwo, ',
"category": 'games',
"date": '10/06/2021',
"time": '01:18 PM',
"link": '/vi-sao-pokemon-huyen-thoai-mewtwo-dung-cerulean-lam-nha-cua-no',
"zcomponent": 'page_20210610131823',
"filepath": './20210610131823-vi-sao-pokemon-huyen-thoai-mewtwo-dung-cerulean-lam-nha-cua-no.js'
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
const title = "Vì sao Pokémon huyền thoại Mewtwo dùng hang Cerulean làm nhà?";
const author = "DS";
const source = "Trí Thức Trẻ";
const timestamp = "10/06/2021 01:18 PM";
const description =
  "Không nhiều nơi trên thế giới Pokemon có đủ sự phù hợp để Mewtwo có thể gọi là nhà.";
const link = "vi-sao-pokemon-huyen-thoai-mewtwo-dung-cerulean-lam-nha-cua-no";
const tagparam = ["pokemon", "mewtwo"];
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

export default function page_20210610131823() {
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
                      <strong>Mewtwo</strong> là loài Pokémon nổi tiếng bậc nhất
                      trong cả thế giới Pokémon. Được sinh ra từ mẫu hóa thạch
                      của Mew, thế nhưng nó lại còn mạnh mẽ hơn cả phiên bản
                      gốc. Trong các phiên bản game, người chơi phải phá đảo
                      game lần 1, sau đó mới có thể chạm trán và chinh phuc nó.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/11/photo-1-16233447817771943324158.png"
                      alt="Pokemon, Mewtwo, "
                      note=""
                    />
                    <p>
                      Với việc xuất hiện trong các bộ phim chiếu rạp từ cũ đến
                      mới, <strong>Mewtwo</strong> trở thành 1 trong những{" "}
                      <strong>Pokemon</strong> được cộng đồng fan hâm mộ vô cùng
                      yêu thích. Thậm chí, nó còn xuất hiện trong những tựa game
                      khác của Nintendo như Super Smash Bros.
                    </p>
                    <p>
                      Thế nhưng, việc <strong>Mewtwo</strong> chọn Cerulean là
                      như thế nào thì vẫn là ẩn số với nhiều người. Nhiều người
                      cho rằng, hang Cerulean là nơi nó chọn, bởi nó muốn lánh
                      xa con người. Thế nhưng, điều đó có thật sự chính xác hay
                      không thì chưa ai biết rõ.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/11/photo-1-16233449307571846859554.jpg"
                      alt="Pokemon, Mewtwo, "
                      note=""
                    />
                    <p>
                      Khi tạo ra <strong>Mewtwo</strong>, con người đã có mục
                      đích rằng biến nó nó trở thành <strong>Pokemon</strong>{" "}
                      chiến đấu mạnh nhất, có thể đánh bại mọi đối thủ. Các nhà
                      khoa học đã thực hiện vô số thử nghiệm đối với nó để năng
                      tầm năng lực cho Mewtwo. Chính vì sự ra đời đau thương và
                      sự đối xử tàn tệ đó, Mewtwo đã trở thành Pokemon "máu
                      lạnh" nhất trong số tất cả các Pokemon. Nó có đủ sự thông
                      minh để nhận ra điều này, và sức mạnh con người ban cho nó
                      biến nó trở thành 1 kẻ vượt ngục mạnh mẽ, rời khỏi hòn đảo
                      Cinnabar và đi tìm một nơi trú ẩn mới.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Bởi vì bị đối xử tàn tệ bởi những kẻ vô tâm, thế nên không
                      có gì lạ khi <strong>Mewtwo</strong> quyết định chọn 1 nơi
                      không có con người làm nơi trú ẩn. Một nơi chỉ bao gồm các{" "}
                      <strong>Pokemon</strong> mạnh mẽ, nơi mà con người không
                      dễ dàng có thể thâm nhập. Một chỗ trú ẩn tăm tối với nhiều
                      hang cùng ngõ hẻm, phải giải được những câu đó rắc rối mới
                      có thể vượt qua.
                    </p>
                    <p>
                      Vào thời điểm tựa game được ra mắt, thế giới{" "}
                      <strong>Pokemon</strong> chỉ được giới hạn tại đại lục
                      Kanto. Thế nhưng, Kanto lại không có nhiều "chỗ đẹp" để{" "}
                      <strong>Mewtwo</strong> có thể trú ẩn. Quần đảo Seafoam và
                      đại lộ Victory là 2 lựa chọn có thể phù hợp hơn cả. Tuy
                      nhiên, điều này là hơi kỳ cục khi đây đã là nơi ở của các
                      Pokemon huyền thoại khác và con người cũng thường xuyên đi
                      qua đây. Do đó, hang động Cerulean dường như là lựa chọn
                      hợp lý hơn cả.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/11/photo-1-1623344896929791298434.png"
                      alt="Pokemon, Mewtwo, "
                      note=""
                    />
                    <p>
                      Về cơ bản, hang Cerulean khá hoàn hảo để làm nhà cho{" "}
                      <strong>Mewtwo</strong> khi có thiết kế khá khó nhằn với
                      các tay huấn luyện <strong>Pokemon</strong>, kể cả là
                      những nhà vô địch. Có quá nhiều Pokemon mạnh ở đây, thật
                      khó để các huấn luyện viên không có trình độ có thể đến và
                      làm phiền nó. Việc nó tách biệt với thế giới bên ngoài
                      cũng giúp cho Mewtwo được sống trong sự yên ổn.{" "}
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
