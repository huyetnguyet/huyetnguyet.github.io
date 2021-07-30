import React from "react";
import "components/page.css";
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
"timestamp": '16/06/2021 11:30 AM',
"title": 'Cốt truyên đầy bi kịch ít người biết tới của Contra - tựa game quốc dân của thế hệ 8-9x',
"description": 'Rất nhiều người biết tới Contra, nhưng không phải ai cũng biết được cốt truyện bi kịch của nó.',
"src": '',
"alt": 'Game, Tin Tuc Game, Game Thu, ',
"category": 'games',
"date": '16/06/2021',
"time": '11:30 AM',
"link": '/cot-truyen-day-bi-kich-it-nguoi-biet-toi-cua-contra-tua-game-quoc-dan-cua-the-he-8-9x',
"zcomponent": 'page_20210616113041',
"filepath": './20210616113041-cot-truyen-day-bi-kich-it-nguoi-biet-toi-cua-contra-tua-game-quoc-dan-cua-the-he-8-9x.js'
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
  "Cốt truyên đầy bi kịch ít người biết tới của Contra - tựa game quốc dân của thế hệ 8-9x";
const author = "Mặt Trứng";
const source = "Trí Thức Trẻ";
const timestamp = "16/06/2021 11:30 AM";
const description =
  "Rất nhiều người biết tới Contra, nhưng không phải ai cũng biết được cốt truyện bi kịch của nó.";
const link =
  "cot-truyen-day-bi-kich-it-nguoi-biet-toi-cua-contra-tua-game-quoc-dan-cua-the-he-8-9x";
const tagparam = ["game", "tin-tuc-game", "game-thu"];
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

export default function page_20210616113041() {
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
              >
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
            <AdsHorizontal />
            <div className="content">
              <div className="contentContainer">
                <p className="description">{description}</p>
                <RelationNews category={category} />
                <div className="contentBody">
                  <p>
                    Sẽ chẳng quá nếu nói rằng vào những năm 90 của thế kỷ trước,
                    Contra đã là một trong những tựa <strong>game</strong> quốc
                    dân mà ai ai cũng biết tới trên hệ máy NES, hay còn được gọi
                    là điện tử 4 nút bấy giờ. Ở cái thời mà các bộ máy tính còn
                    là xa xỉ và thuật ngữ PC Gaming chưa ra đời thì chính những
                    Contra, Ninja cứu mẹ, Chip & Dean mới là chân ái của mọi
                    game thủ ngày ấy. Được rất nhiều người biết tới, cũng không
                    ít lần từng phá đảo và còn thuộc cả cheat code 30 mạng huyền
                    thoại, thế nhưng, không phải ai cũng biết rằng, thực tế
                    Contra lại sở hữu cho mình một cốt truyện đầy bi kịch.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/13/photo-1-16235858486381724759341.jpg"
                    alt="1Game, Tin Tuc Game, Game Thu, "
                    note="Contra - tựa game quốc dân mà game thủ thế hệ 8-9x ai cũng từng chơi ít nhất một lần"
                  />
                  <p>
                    Cốt truyện của Contra bắt đầu vào thì tương lai, cụ thể là
                    năm 2633 khi hai chiến binh Bill Rizer và Lance Bean được
                    điều động tới một hòn đảo để ngăn chặn tổ chức khủng bố. Bên
                    cạnh việc phải đối mặt với những vũ khí tối tân hiện đại,
                    Bean và Rizer còn phải đương đầu với cả những sinh vật ngoài
                    hành tinh nguy hiểm. Sau cùng thì họ cũng hoàn thành nhiệm
                    vụ được giao, phá hủy hòn đảo và rút về trong an toàn. Tuy
                    nhiên, mọi thứ chưa dừng lại ở đó. Cảm thấy việc sở hữu một
                    cốt truyện có phần hơi đơn giản là bất công với đứa con cưng
                    của mình, Konami đã tiếp tục viết tiếp Contra bản mới với
                    cái tên "Shattered Solier" trên hệ máy PlayStation 2, đồng
                    thời tạo ra không ít những tình tiết ly kỳ mới.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/6/13/photo-1-1623586059328781019500.jpg"
                    alt="2Game, Tin Tuc Game, Game Thu, "
                    note="Hình ảnh của tựa game Contra phiên bản Shattered Soldier"
                  />
                  <p>
                    Thế giới không yên bình khi mà tổ chức khủng bố Falcon lại
                    trỗi dậy. Trước đó, một vụ nổ kinh hoàng xảy ra, cướp đi
                    sinh mạng của Lance Bean và 80% dân số thế giới. Bill Rizer
                    bị kết tội cho thảm kịch này, đồng thời nhận án tù 10.000
                    năm tại một nhà tù tinh thể. Tuy nhiên, sự xuất hiện của
                    Falcon thêm một lần nữa khiến Bill được "ra trại" sớm. Và sự
                    thật mà Bill khám phá ra sau đó đã khiến tất cả bất ngờ.
                    Chính lòng tham của chính quyền thế giới - nơi anh phục vụ
                    đã dẫn tới sự xâm lấn của bầy Ailen - sinh vật ngoài hành
                    tinh. Và để giải quyết vấn đề này, vụ nổ kinh hoàng ở bên
                    trên được diễn ra, còn Bill, trở thành "vật tế thần" và bị
                    đổ tội.
                  </p>
                  <RelationNewsInPage category={category} />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/13/photo-1-1623586389205735848776.jpg"
                    alt="3Game, Tin Tuc Game, Game Thu, "
                    note="Cả Lance và Bill Rizer đều đã hy sinh"
                  />
                  <p>
                    Dường như để thêm phần drama, tới kết thúc, Konami mới cho
                    Bill phát hiện ra một Project C với âm mưu hủy diệt toàn thế
                    giới. Nhưng thực tế thì Bill cũng đã hy sinh từ lâu, còn
                    phiên bản mà bạn sử dụng để cứu thế giới chỉ là một bản sao,
                    sinh vật nửa người nửa máy. Bản chính thì đã chết từ 2000
                    năm trước rồi. Và cuối cùng thì cả Lance Bean lẫn Bill Rizer
                    - hai vị anh hùng trong Contra phần đầu đều đã hy sinh,
                    nhưng thế giới thì được an toàn.
                  </p>
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
